/* The feed: a curved wall of sponsored posts in raw WebGL (one draw call, one atlas).
   main.js owns the scroll scene and hands this module a few numbers each frame:
   brake (0 free-running, 1 stopped with the chosen post centred), flat, dim, zoom.
   Everything the shader draws is a function of those numbers plus the column offsets. */
(function () {
  var VS = [
    'attribute vec2 aCorner;',
    'attribute vec3 aCell;',                  // column, row, tile index
    'uniform vec2 uRes, uTile;',
    'uniform float uGap, uRows, uCols, uBend, uRadius, uFocal, uZoom, uPush, uHold, uHover, uDim, uVel, uLand, uHideLand;',
    'uniform float uOff[9];',
    'uniform vec3 uRot;',
    'uniform vec2 uMouse, uLandCell;',
    'varying vec2 vUv; varying vec2 vMin; varying float vShade; varying float vSpeed;',
    'mat3 rx(float a){float c=cos(a),s=sin(a);return mat3(1.,0.,0.,0.,c,s,0.,-s,c);}',
    'mat3 ry(float a){float c=cos(a),s=sin(a);return mat3(c,0.,-s,0.,1.,0.,s,0.,c);}',
    'mat3 rz(float a){float c=cos(a),s=sin(a);return mat3(c,s,0.,-s,c,0.,0.,0.,1.);}',
    'vec3 place(vec3 p){',
    '  float a = p.x / uRadius;',
    '  vec3 b = vec3(sin(a) * uRadius, p.y, (1.0 - cos(a)) * uRadius);',
    '  p = mix(p, b, uBend);',
    '  p = rz(uRot.z) * ry(uRot.y) * rx(uRot.x) * p;',
    '  p *= uZoom; p.z -= uPush;',
    '  return p;',
    '}',
    'vec2 proj(vec3 p){ return p.xy * (uFocal / (uFocal - p.z)); }',
    'void main(){',
    '  float col = aCell.x, row = aCell.y, t = aCell.z;',
    '  float pitch = uTile.y + uGap, span = uRows * pitch;',
    '  float y = mod(row * pitch + uOff[int(col)], span) - span * 0.5;',
    '  float x = (col - (uCols - 1.0) * 0.5) * (uTile.x + uGap);',
    '  vec3 c = place(vec3(x, y, 0.0));',
    '  vec2 cs = proj(c);',
    '  float d = length(cs - uMouse);',
    '  float near = (1.0 - smoothstep(uTile.x * 0.35, uTile.x * 1.1, d)) * uHover;',
    '  float isLand = step(abs(col - uLandCell.x) + abs(row - uLandCell.y), 0.5);',
    '  float sc = 1.0 + 0.06 * near + 0.08 * near * uHold;',
    '  float smear = 1.0 + min(abs(uVel) * 0.00004, 0.12);',
    '  vec2 local = (aCorner - 0.5) * uTile * vec2(sc, sc * smear);',
    '  vec3 p = place(vec3(x + local.x, y + local.y, 0.0));',
    '  vec2 s = proj(p);',
    '  gl_Position = vec4(s / (uRes * 0.5), 0.0, 1.0);',
    '  float depth = clamp(1.0 + p.z / 2200.0, 0.45, 1.15);',
    '  float holdDim = mix(1.0, mix(0.28, 1.15, near), uHold);',
    '  float landDim = mix(1.0, mix(0.12, 1.0 - uHideLand, isLand), uLand);',
    '  vShade = depth * holdDim * landDim * uDim;',
    '  vSpeed = uVel;',
    '  vec2 cell = vec2(mod(t, 5.0), floor(t / 5.0));',
    '  vMin = cell / vec2(5.0, 4.0);',
    '  vUv = vMin + vec2(aCorner.x, 1.0 - aCorner.y) / vec2(5.0, 4.0);',
    '}'
  ].join('\n');

  var FS = [
    'precision mediump float;',
    'uniform sampler2D uTex;',
    'varying vec2 vUv; varying vec2 vMin; varying float vShade; varying float vSpeed;',
    'vec3 tap(vec2 uv){ return texture2D(uTex, clamp(uv, vMin + 0.0006, vMin + vec2(0.2, 0.25) - 0.0006)).rgb; }',
    'void main(){',
    '  float k = clamp(vSpeed * 0.0000016, -0.0032, 0.0032);',
    '  vec3 base = tap(vUv) * 0.4 + tap(vUv + vec2(0.0, k)) * 0.3 + tap(vUv - vec2(0.0, k)) * 0.3;',
    '  float r = tap(vUv + vec2(0.0, k * 1.25)).r;',
    '  float b = tap(vUv - vec2(0.0, k * 1.25)).b;',
    '  vec3 col = vec3(mix(base.r, r, 0.6), base.g, mix(base.b, b, 0.6));',
    '  gl_FragColor = vec4(col * vShade, 1.0);',
    '}'
  ].join('\n');

  var TARGET = 5; // p06_dog: the post the scroll lands on (matches .stop-card)

  function Feed(canvas, opts) {
    this.c = canvas; this.o = opts || {};
    var gl = canvas.getContext('webgl', { antialias: true, alpha: false, premultipliedAlpha: false, powerPreference: 'high-performance' });
    if (!gl) throw new Error('no webgl');
    this.gl = gl;
    this.prog = this._program(VS, FS);
    this.loc = {};
    var self = this;
    ['uRes', 'uTile', 'uGap', 'uRows', 'uCols', 'uBend', 'uRadius', 'uFocal', 'uZoom', 'uPush', 'uHold', 'uHover', 'uDim', 'uVel', 'uLand', 'uHideLand', 'uRot', 'uMouse', 'uLandCell', 'uTex'].forEach(function (n) { self.loc[n] = gl.getUniformLocation(self.prog, n); });
    this.loc.uOff = gl.getUniformLocation(this.prog, 'uOff[0]');
    this.aCorner = gl.getAttribLocation(this.prog, 'aCorner');
    this.aCell = gl.getAttribLocation(this.prog, 'aCell');
    this.buf = gl.createBuffer();
    this.tex = gl.createTexture();
    this.ready = false;
    // live state
    this.off = new Float32Array(9);
    this.hold = 0; this.holdOn = false;
    this.hover = 0; this.hoverOn = false;
    this.mouse = [9999, 9999]; this.mT = [0, 0]; this.mC = [0, 0];
    this.boost = 0; this.vel = 0;
    this.scene = { brake: 0, flat: 0, dim: 1, zoom: 1, land: 0, hideLand: 0 };
    this.landFrom = null;
    this.resize();
  }

  Feed.prototype._program = function (vs, fs) {
    var gl = this.gl;
    function sh(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; }
    var p = gl.createProgram();
    gl.attachShader(p, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(p, sh(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
    return p;
  };

  Feed.prototype.load = function (src) {
    var self = this, gl = this.gl;
    return new Promise(function (res, rej) {
      var im = new Image();
      im.decoding = 'async';
      im.onload = function () {
        gl.bindTexture(gl.TEXTURE_2D, self.tex);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, im);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        self.ready = true; res();
      };
      im.onerror = rej;
      im.src = src;
    });
  };

  Feed.prototype.resize = function () {
    var w = this.c.clientWidth || innerWidth, h = this.c.clientHeight || innerHeight;
    var phone = w < 760;
    var dpr = Math.min(window.devicePixelRatio || 1, phone ? 1.5 : 1.6);
    // phone browsers fire resize when their toolbar slides on scroll; the stage is 100svh, so the size
    // is unchanged and rebuilding would restart the landing mid-brake
    if (w === this.w && h === this.h && dpr === this.dpr) return;
    this.w = w; this.h = h; this.dpr = dpr;
    this.c.width = Math.round(w * dpr); this.c.height = Math.round(h * dpr);
    this.cols = phone ? 5 : 7;
    this.tw = phone ? Math.max(130, w * 0.42) : Math.min(300, Math.max(190, w * 0.168));
    this.th = this.tw * 884 / 600;
    this.gap = this.tw * 0.08;
    this.pitch = this.th + this.gap;
    this.rows = Math.ceil(h * 2.4 / this.pitch) + 3;
    this.span = this.rows * this.pitch;
    this.radius = phone ? w * 1.35 : w * 0.95;
    this.focal = Math.max(w, h) * 1.15;
    this.cc = Math.floor(this.cols / 2);
    this.speeds = [];
    for (var i = 0; i < this.cols; i++) this.speeds.push(1 + 0.22 * Math.sin(i * 2.3 + 1.1));
    this._build();
    this.landFrom = null;
  };

  Feed.prototype._build = function () {
    var gl = this.gl, data = [], C = this.cols, R = this.rows;
    var corners = [[0, 0], [1, 0], [0, 1], [0, 1], [1, 0], [1, 1]];
    for (var c = 0; c < C; c++) for (var r = 0; r < R; r++) {
      var t = (c * 7 + r * 3 + ((c * c) % 5)) % 20;
      if (c === this.cc && r === 0) t = TARGET;
      else if (c === this.cc && t === TARGET) t = (t + 3) % 20;
      for (var k = 0; k < 6; k++) data.push(corners[k][0], corners[k][1], c, r, t);
    }
    this.count = data.length / 5;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
  };

  Feed.prototype.setHold = function (on) { this.holdOn = !!on; };
  Feed.prototype.setPointer = function (x, y, inside) {
    // x, y in CSS px from the top-left of the canvas
    this.mT[0] = x - this.w / 2; this.mT[1] = this.h / 2 - y;
    this.hoverOn = !!inside;
  };
  Feed.prototype.addBoost = function (v) { this.boost = Math.max(-1800, Math.min(4200, this.boost + v)); };
  Feed.prototype.set = function (s) { for (var k in s) this.scene[k] = s[k]; };
  // screen rect of the landed post at flat = 1 (used by main.js to place the DOM card)
  Feed.prototype.landedWidth = function () { return this.tw * this.scene.zoom; };

  Feed.prototype._lead = function (c, from) {
    if (c !== this.cc) return this.pitch * (2.2 + 0.6 * this.speeds[c]);
    var to = from + (((this.span / 2 - from) % this.span) + this.span) % this.span;
    if (to - from < this.pitch * 1.6) to += this.span;
    return to - from;
  };

  Feed.prototype.tick = function (dt) {
    if (!this.ready) return;
    dt = Math.min(dt, 1 / 20);
    var s = this.scene, i;
    var e = function (rate) { return 1 - Math.exp(-dt * rate); };
    this.hold += ((this.holdOn && s.brake === 0 ? 1 : 0) - this.hold) * e(this.holdOn ? 14 : 5);
    this.hover += ((this.hoverOn && s.brake < 0.05 ? 1 : 0) - this.hover) * e(6);
    this.mC[0] += (this.mT[0] - this.mC[0]) * e(10); this.mC[1] += (this.mT[1] - this.mC[1]) * e(10);
    this.boost *= Math.exp(-dt * 2.4);

    var base = Math.max(420, this.h * 0.62);   // px per second, roughly a fast flick
    var speed = 0;
    if (s.brake <= 0) {
      this.landFrom = null;
      for (i = 0; i < this.cols; i++) {
        var v = (base * this.speeds[i] + this.boost) * (1 - this.hold);
        this.off[i] += v * dt;
        speed += v;
      }
      speed /= this.cols;
    } else {
      if (!this.landFrom) {
        this.landFrom = []; this.landLead = [];
        for (i = 0; i < this.cols; i++) { this.landFrom[i] = this.off[i]; this.landLead[i] = this._lead(i, this.off[i]); }
      }
      var b = Math.min(1, s.brake), eb = 1 - Math.pow(1 - b, 3);
      var prev = this.off[this.cc];
      for (i = 0; i < this.cols; i++) this.off[i] = this.landFrom[i] + this.landLead[i] * eb;
      speed = (this.off[this.cc] - prev) / Math.max(dt, 1e-3);
    }
    this.vel += (speed - this.vel) * e(8);
    this.draw();
  };

  Feed.prototype.draw = function () {
    var gl = this.gl, L = this.loc, s = this.scene, f = s.flat;
    gl.viewport(0, 0, this.c.width, this.c.height);
    gl.clearColor(0.043, 0.043, 0.047, 1); gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(this.prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buf);
    gl.enableVertexAttribArray(this.aCorner); gl.vertexAttribPointer(this.aCorner, 2, gl.FLOAT, false, 20, 0);
    gl.enableVertexAttribArray(this.aCell); gl.vertexAttribPointer(this.aCell, 3, gl.FLOAT, false, 20, 8);
    var mx = this.mC[0] / (this.w / 2), my = this.mC[1] / (this.h / 2);
    var phone = this.w < 760;
    gl.uniform2f(L.uRes, this.w, this.h);
    gl.uniform2f(L.uTile, this.tw, this.th);
    gl.uniform1f(L.uGap, this.gap);
    gl.uniform1f(L.uRows, this.rows);
    gl.uniform1f(L.uCols, this.cols);
    gl.uniform1f(L.uBend, 1 - f);
    gl.uniform1f(L.uRadius, this.radius);
    gl.uniform1f(L.uFocal, this.focal);
    gl.uniform1f(L.uZoom, s.zoom * (1 + 0.18 * (1 - f)));
    gl.uniform1f(L.uPush, 380 * (1 - f));
    gl.uniform3f(L.uRot, (phone ? 0.34 : 0.46) * (1 - f) + my * 0.05 * this.hover, (mx * 0.1) * this.hover * (1 - f), -0.2 * (1 - f));
    gl.uniform2f(L.uMouse, this.mC[0], this.mC[1]);
    gl.uniform1f(L.uHold, this.hold);
    gl.uniform1f(L.uHover, this.hover);
    gl.uniform1f(L.uDim, s.dim);
    gl.uniform1f(L.uVel, this.vel);
    gl.uniform1f(L.uLand, s.land);
    gl.uniform1f(L.uHideLand, s.hideLand);
    gl.uniform2f(L.uLandCell, this.cc, 0);
    gl.uniform1fv(L.uOff, this.off);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, this.tex); gl.uniform1i(L.uTex, 0);
    gl.drawArrays(gl.TRIANGLES, 0, this.count);
  };

  window.Feed = Feed;
})();
