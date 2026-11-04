/* The ad swarm: one fixed WebGL canvas behind the whole page, one instanced draw call.
   Every particle is a real post from the atlas. The page is a story of states the swarm moves through:
     0 stream  the feed racing past in 3D (hold = bullet time)
     1 mosaic  a photomosaic of the post the visitor "stopped on"
     2 drift   a slow, dim feed behind the game
     3 funnel  ads pour down a funnel, losers drop out, sales turn red
     4 globe   reach, as a turning globe of ads
     5 face    Soumil's face made of ads
     6 dust    the feed settles
   main.js owns layout and scroll: it calls story(p) with a float (3.4 = 40% of the way from funnel to globe). */
(function () {
  var N_DESK = 2600, N_PHONE = 1200;
  var PROC = [1, 0, 1, 1, 0, 0, 1];            // states computed in the shader (time-driven)
  var CROP = [0, 1, 0, 0, 1, 1, 1];            // 1 = square photo crop, 0 = whole post with header and button
  var DIM = [1, 1, 0.2, 0.9, 0.8, 1.25, 0.42];

  var VS = [
    'attribute vec2 aCorner;',
    'attribute vec4 aSeed;',                     // tile, r1, r2, r3
    'attribute vec4 aA; attribute vec4 aAT;',    // state A: pos.xyz + size, tint.rgb + weight
    'attribute vec4 aB; attribute vec4 aBT;',
    'attribute vec4 aH;',                        // the hook: ball offset or brick position + size
    'uniform vec2 uRes; uniform float uFocal;',
    'uniform float uIdA, uIdB, uProcA, uProcB, uCropA, uCropB, uT, uArc;',
    'uniform float uStreamT, uTime, uBase, uDepth, uDim;',
    'uniform vec3 uFun; uniform float uFunY; uniform vec2 uBand; uniform vec3 uGlobe;',
    'uniform vec2 uCam; uniform vec3 uMouse; uniform float uRepelR;',
    'uniform float uHook, uBurst, uHeat, uTrem, uBallRot; uniform vec2 uBallC, uImpact;',
    'varying vec2 vUv; varying vec2 vLocal; varying vec2 vHalf; varying vec4 vTint; varying float vShade;',
    'mat3 rotY(float a){ float c = cos(a), s = sin(a); return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c); }',
    'mat3 rotX(float a){ float c = cos(a), s = sin(a); return mat3(1.0, 0.0, 0.0, 0.0, c, s, 0.0, -s, c); }',
    'void proc(float id, vec4 s, vec4 h, out vec3 p, out float size, out vec4 tint, out float sh, out float hw){',
    '  tint = vec4(0.0); sh = 1.0; hw = 0.0;',
    '  if (id < 0.5 || (id > 1.5 && id < 2.5)) {',
    '    float slow = id > 1.5 ? 0.1 : 1.0;',
    '    float z = -pow(s.y, 0.55) * uDepth + 260.0;',                  // most of the feed sits deep, a few posts fly close
    '    float sc = uFocal / (uFocal - z);',
    '    float hh = uRes.y * 0.5 / sc * 1.3, hw = uRes.x * 0.5 / sc * 1.18;',
    '    p = vec3((s.z * 2.0 - 1.0) * hw, mod(s.w * 2.0 * hh + uStreamT * slow * (0.75 + s.y * 0.5), 2.0 * hh) - hh, z);',
    '    size = uBase * (0.7 + 0.6 * fract(s.z * 7.31)) * (id > 1.5 ? 0.5 : 1.0);',
    '    if (id < 0.5 && uHook > 0.0) {',
    '      float role = floor(s.x / 20.0);',                           // 0 ball, 1 wall brick, 2 waiting in the wings
    '      vec3 hp = h.xyz;',
    '      if (role < 0.5) {',
    '        float c = cos(uBallRot), sn = sin(uBallRot);',
    '        hp.xy = vec2(c * h.x - sn * h.y, sn * h.x + c * h.y) + uBallC;',
    '        hp.xy += vec2(sin(uTime * 53.0 + s.y * 91.0), cos(uTime * 47.0 + s.z * 83.0)) * uTrem * (0.4 + fract(s.w * 5.1));',
    '      }',
    '      float kick = role < 1.5 ? 1.0 : 0.0;',
    '      vec3 dir = normalize(vec3(hp.xy - uImpact, (s.w - 0.3) * 220.0) + 0.0001);',
    '      vec3 blast = hp + (dir * (520.0 + 1200.0 * fract(s.y * 17.3)) + vec3(0.0, -300.0 * uBurst, 420.0)) * uBurst * kick;',
    '      float w = uHook * (1.0 - smoothstep(0.35, 1.0, uBurst));',
    '      p = mix(p, blast, w);',
    '      size = mix(size, h.w * (1.0 + 1.8 * uBurst * kick), w);',
    '      tint = vec4(1.0, 0.23, 0.12, uHeat * 0.6 * w * (role < 0.5 ? 1.0 : 0.0));',
    '      hw = w * kick;',
    '    }',
    '  } else if (id < 3.5) {',
    '    float u = fract(s.y + uTime * 0.045);',
    '    float ang = s.z * 6.2831853 + uTime * 0.3 + u * 6.5;',
    '    float R = mix(uFun.z, uFun.z * 0.08, pow(u, 0.72));',
    '    p = vec3(cos(ang) * R + uFun.x, mix(uFun.y, -uFun.y, u) + uFunY, sin(ang) * R);',
    '    float alive = s.w > 0.42 ? 1.0 : 1.0 - smoothstep(0.34, 0.5, u);',
    '    float band = uBand.y > uBand.x ? step(uBand.x, u) * step(u, uBand.y) : 1.0;',
    '    size = uBase * 0.46 * mix(1.0, 0.42, u) * alive * (1.0 + 0.3 * band);',
    '    tint = vec4(1.0, 0.23, 0.12, smoothstep(0.8, 0.93, u) * 0.9);',
    '    sh = mix(0.38, 1.15, band);',
    '  } else {',
    '    float z = -s.y * uDepth * 0.8 - 200.0;',
    '    float sc = uFocal / (uFocal - z);',
    '    float hh = uRes.y * 0.5 / sc * 1.2, hw = uRes.x * 0.5 / sc * 1.2;',
    '    p = vec3((s.z * 2.0 - 1.0) * hw, mod(s.w * 2.0 * hh + uTime * 16.0, 2.0 * hh) - hh, z);',
    '    size = uBase * 0.16;',
    '  }',
    '}',
    'void target(float id, vec4 a, vec4 at, out vec3 p, out float size, out vec4 tint){',
    '  p = a.xyz; size = a.w; tint = at;',
    '  if (abs(id - 4.0) < 0.5) p = rotY(uTime * 0.22) * rotX(0.32) * p + vec3(uGlobe.xy, 0.0);',
    '}',
    'void main(){',
    '  vec3 pA; float sA; vec4 tA; float hA = 1.0; float wA = 0.0;',
    '  vec3 pB; float sB; vec4 tB; float hB = 1.0; float wB = 0.0;',
    '  if (uProcA > 0.5) proc(uIdA, aSeed, aH, pA, sA, tA, hA, wA); else target(uIdA, aA, aAT, pA, sA, tA);',
    '  if (uProcB > 0.5) proc(uIdB, aSeed, aH, pB, sB, tB, hB, wB); else target(uIdB, aB, aBT, pB, sB, tB);',
    '  float e = clamp(uT * 1.7 - aSeed.y * 0.7, 0.0, 1.0); e = e * e * (3.0 - 2.0 * e);',
    '  vec3 c = mix(pA, pB, e);',
    '  c.z += sin(e * 3.14159) * (aSeed.w * 2.0 - 0.7) * 420.0 * uArc;',
    '  float size = mix(sA, sB, e);',
    '  vec4 tint = mix(tA, tB, e);',
    '  float crop = max(mix(uCropA, uCropB, e), mix(wA, wB, e));',      // ball and bricks show the square photo
    '  float asp = mix(884.0 / 600.0, 1.0, crop);',
    '  vec2 hv = vec2(size, size * asp) * 0.5;',
    '  vec3 o = vec3((aCorner - 0.5) * 2.0 * hv, 0.0);',
    '  mat3 R = rotY(uCam.x) * rotX(uCam.y);',
    '  vec3 piv = vec3(0.0, 0.0, -500.0);',
    '  vec3 C = R * (c - piv) + piv;',
    '  vec3 P = R * (c + o - piv) + piv;',
    '  float w0 = max((uFocal - C.z) / uFocal, 0.05);',
    '  vec2 d = C.xy / w0 - uMouse.xy; float L = length(d);',
    '  float push = (1.0 - smoothstep(0.0, uRepelR, L)) * uMouse.z;',
    '  vec3 shift = vec3((L > 0.001 ? d / L : vec2(0.0)) * push * uRepelR * 0.6 * w0, push * 240.0);',
    '  P += shift; C += shift;',
    '  float w = (uFocal - P.z) / uFocal;',
    '  gl_Position = w < 0.05 ? vec4(0.0, 0.0, 2.0, 1.0) : vec4(P.x / (uRes.x * 0.5), P.y / (uRes.y * 0.5), clamp(-P.z / 6000.0, -0.99, 0.99) * w, w);',
    '  float tl = mod(aSeed.x, 20.0); vec2 cell = vec2(mod(tl, 5.0), floor(tl / 5.0));',
    '  vec2 full = vec2(aCorner.x, 1.0 - aCorner.y);',
    '  vec2 crp = vec2(aCorner.x, (76.0 + (1.0 - aCorner.y) * 600.0) / 884.0);',
    '  vUv = (cell + mix(full, crp, crop)) / vec2(5.0, 4.0);',
    '  vLocal = (aCorner - 0.5) * 2.0 * hv; vHalf = hv;',
    '  vTint = tint;',
    '  vShade = clamp(1.0 + C.z / 2800.0, 0.2, 1.15) * mix(hA, hB, e) * uDim;',
    '}'
  ].join('\n');

  var FS = [
    'precision mediump float;',
    'uniform sampler2D uTex;',
    'varying vec2 vUv; varying vec2 vLocal; varying vec2 vHalf; varying vec4 vTint; varying float vShade;',
    'void main(){',
    '  float r = 0.09 * min(vHalf.x, vHalf.y);',
    '  vec2 q = abs(vLocal) - vHalf + r;',
    '  if (length(max(q, 0.0)) > r) discard;',
    '  vec3 tex = texture2D(uTex, vUv).rgb;',
    '  float lum = dot(tex, vec3(0.299, 0.587, 0.114));',
    '  vec3 col = mix(tex, vTint.rgb * (0.6 + 0.6 * lum), vTint.a);',
    '  gl_FragColor = vec4(col * vShade, 1.0);',
    '}'
  ].join('\n');

  function rnd(seed) { var s = seed >>> 0; return function () { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }

  function Swarm(canvas) {
    this.c = canvas;
    var opts = { antialias: false, alpha: false, depth: true, powerPreference: 'high-performance' };
    var gl = canvas.getContext('webgl2', opts), inst = null;
    if (!gl) {
      gl = canvas.getContext('webgl', opts) || canvas.getContext('experimental-webgl', opts);
      if (!gl) throw new Error('no webgl');
      inst = gl.getExtension('ANGLE_instanced_arrays');
      if (!inst) throw new Error('no instancing');
    }
    this.gl = gl; this.gl2 = !inst; this.inst = inst;
    this.phone = innerWidth < 760;
    this.N = this.phone ? N_PHONE : N_DESK;
    var r = rnd(17), i;
    this.seed = new Float32Array(this.N * 4);
    for (i = 0; i < this.N; i++) { this.seed[i * 4] = Math.floor(r() * 20); this.seed[i * 4 + 1] = r(); this.seed[i * 4 + 2] = r(); this.seed[i * 4 + 3] = r(); }
    this.order = []; for (i = 0; i < this.N; i++) this.order.push(i);
    for (i = this.N - 1; i > 0; i--) { var j = Math.floor(r() * (i + 1)), t = this.order[i]; this.order[i] = this.order[j]; this.order[j] = t; }
    this._resources();
    // phones drop GL contexts under memory pressure: stop drawing, rebuild everything when it comes back
    var self = this;
    canvas.addEventListener('webglcontextlost', function (e) { e.preventDefault(); self.ready = false; self.lost = true; if (self.onlost) self.onlost(); });
    canvas.addEventListener('webglcontextrestored', function () {
      self.lost = false; self._resources();
      if (self.atlasImg) { self._upload_tex(self.atlasImg); self.ready = true; self.build(); }
    });
    this.data = [];                 // per state Float32Array(N * 8), filled for target states
    this.pair = [-1, -1];
    this.ready = false;
    // live state
    this.p = 0; this.time = 0; this.streamT = 0;
    this.hold = 0; this.holdOn = false; this.holdTime = 0;
    this.mouse = [0, 0]; this.mT = [0, 0]; this.mIn = 0; this.mInOn = false;
    this.cam = [0, 0]; this.boost = 0; this.band = [0, 0]; this.bandT = [0, 0];
    this.rm = false;
    this.hook = { k: 0, b: 0, heat: 0, trem: 0, x: 0, y: 0, rot: 0, ix: 0, iy: 0 };
    this.images = {};
    this.resize();
  }

  Swarm.prototype._resources = function () {
    var gl = this.gl, self = this;
    this.prog = this._program(VS, FS);
    this.u = {};
    ['uRes', 'uFocal', 'uIdA', 'uIdB', 'uProcA', 'uProcB', 'uCropA', 'uCropB', 'uT', 'uArc', 'uStreamT', 'uTime', 'uBase', 'uDepth', 'uDim',
      'uFun', 'uFunY', 'uBand', 'uGlobe', 'uCam', 'uMouse', 'uRepelR', 'uTex', 'uHook', 'uBurst', 'uHeat', 'uTrem', 'uBallRot', 'uBallC', 'uImpact'].forEach(function (n) { self.u[n] = gl.getUniformLocation(self.prog, n); });
    this.a = {};
    ['aCorner', 'aSeed', 'aA', 'aAT', 'aB', 'aBT', 'aH'].forEach(function (n) { self.a[n] = gl.getAttribLocation(self.prog, n); });
    this.bQuad = gl.createBuffer(); this.bSeed = gl.createBuffer(); this.bA = gl.createBuffer(); this.bB = gl.createBuffer(); this.bH = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.bQuad);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.bSeed); gl.bufferData(gl.ARRAY_BUFFER, this.seed, gl.STATIC_DRAW);
    this.tex = gl.createTexture();
    this.pair = [-1, -1];
  };

  Swarm.prototype._program = function (vs, fs) {
    var gl = this.gl;
    function sh(type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; }
    var p = gl.createProgram();
    gl.attachShader(p, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(p, sh(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p));
    return p;
  };

  function loadImage(src) {
    return new Promise(function (res, rej) { var im = new Image(); im.decoding = 'async'; im.onload = function () { res(im); }; im.onerror = rej; im.src = src; });
  }

  Swarm.prototype._upload_tex = function (im) {
    var gl = this.gl;
    gl.bindTexture(gl.TEXTURE_2D, this.tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, im);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    if (this.gl2) { gl.generateMipmap(gl.TEXTURE_2D); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR); }
    else gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  };

  // the atlas plus the pictures the first scenes need; later mosaics come in through loadMosaic
  Swarm.prototype.load = function (atlas, mosaics) {
    var self = this;
    var jobs = [loadImage(atlas).then(function (im) { self.atlasImg = im; self._upload_tex(im); })];
    Object.keys(mosaics).forEach(function (k) { jobs.push(loadImage(mosaics[k]).then(function (im) { self.images[k] = im; })); });
    return Promise.all(jobs).then(function () { self.ready = true; self.build(); });
  };
  Swarm.prototype.loadMosaic = function (k, src) {
    var self = this;
    return loadImage(src).then(function (im) { self.images[k] = im; if (self.ready) self.build(); });
  };

  // main.js passes screen layout in CSS px, origin at the screen centre, y up
  Swarm.prototype.setLayout = function (L) { this.L = L; if (this.ready) this.build(); };

  Swarm.prototype.resize = function () {
    var w = this.c.clientWidth || innerWidth, h = this.c.clientHeight || innerHeight;
    var dpr = Math.min(window.devicePixelRatio || 1, this.phone ? 1.3 : 1.75);
    if (w === this.w && h === this.h && dpr === this.dpr) return false;
    this.w = w; this.h = h; this.dpr = dpr;
    this.c.width = Math.round(w * dpr); this.c.height = Math.round(h * dpr);
    this.focal = Math.max(w, h) * 1.1;
    this.base = this.phone ? Math.max(84, w * 0.25) : Math.min(170, Math.max(110, w * 0.095));
    this.depth = this.phone ? 2000 : 2600;
    return true;
  };

  function sample(im, cols, rows) {
    var cv = document.createElement('canvas'); cv.width = cols; cv.height = rows;
    var x = cv.getContext('2d', { willReadFrequently: true });
    x.imageSmoothingQuality = 'high';
    x.drawImage(im, 0, 0, cols, rows);
    return x.getImageData(0, 0, cols, rows).data;
  }

  // a grid of square tiles over a picture: each tile's tint is the picture's colour under it
  Swarm.prototype._mosaic = function (arr, im, box, tone) {
    var cols = box.cols, rows = Math.round(cols * box.h / box.w), cell = box.w / cols;
    if (cols * rows > this.N) { cols = Math.floor(Math.sqrt(this.N * box.w / box.h)); rows = Math.floor(this.N / cols); cell = box.w / cols; }
    var px = sample(im, cols, rows), k = 0, i, r = rnd(5);
    box.tiles = cols * rows;
    for (var y = 0; y < rows; y++) for (var x = 0; x < cols; x++) {
      i = this.order[k++] * 8;
      var o = (y * cols + x) * 4, R = px[o] / 255, G = px[o + 1] / 255, B = px[o + 2] / 255;
      if (tone) { var l = 0.299 * R + 0.587 * G + 0.114 * B, t = tone(l); R = t[0]; G = t[1]; B = t[2]; }
      arr[i] = box.cx - box.w / 2 + (x + 0.5) * cell;
      arr[i + 1] = box.cy + box.h / 2 - (y + 0.5) * (box.h / rows);
      arr[i + 2] = 0;
      arr[i + 3] = cell * 0.9;
      arr[i + 4] = R; arr[i + 5] = G; arr[i + 6] = B; arr[i + 7] = tone ? 0.9 : 0.72;
    }
    for (; k < this.N; k++) {        // leftovers become a far, dim field so the depth survives
      i = this.order[k] * 8;
      arr[i] = (r() * 2 - 1) * this.w * 1.6; arr[i + 1] = (r() * 2 - 1) * this.h * 1.6; arr[i + 2] = -1400 - r() * 1800; arr[i + 3] = this.base * 0.45;
      arr[i + 4] = 0.05; arr[i + 5] = 0.05; arr[i + 6] = 0.06; arr[i + 7] = 0.3;
    }
  };

  Swarm.prototype.build = function () {
    if (!this.L) return;
    var N = this.N, L = this.L;
    for (var s = 0; s < 7; s++) this.data[s] = this.data[s] || new Float32Array(N * 8);
    if (this.images.dog) this._mosaic(this.data[1], this.images.dog, L.dog, null);
    if (this.images.face) this._mosaic(this.data[5], this.images.face, L.face, function (l) {
      // (tile count is kept on the box for the caption)
      // ink, signal red, paper: the face reads in three tones
      l = Math.min(1, Math.pow(l, 0.85) * 1.12);
      if (l < 0.32) { var a = l / 0.32; return [0.06 + 0.84 * a, 0.05 + 0.13 * a, 0.055 + 0.07 * a]; }
      var b = (l - 0.32) / 0.68; return [0.9 + 0.1 * b, 0.18 + 0.78 * b * b, 0.125 + 0.78 * b * b];
    });
    this.faceTiles = L.face.tiles || 0;
    this._buildSwing();
    var g = this.data[4], R = L.globe.r, gold = Math.PI * (3 - Math.sqrt(5));
    for (var i = 0; i < N; i++) {     // fibonacci sphere, local coords (the shader turns it and moves it to its centre)
      var j = this.order[i] * 8, y = 1 - (i / (N - 1)) * 2, rad = Math.sqrt(1 - y * y), th = gold * i;
      g[j] = Math.cos(th) * rad * R; g[j + 1] = y * R; g[j + 2] = Math.sin(th) * rad * R; g[j + 3] = Math.max(6, R * 0.075);
      g[j + 4] = 0; g[j + 5] = 0; g[j + 6] = 0; g[j + 7] = 0;
    }
    this.pair = [-1, -1];
  };

  // the wrecking ball and its wall: which particles play which part, and where each one sits
  Swarm.prototype._buildSwing = function () {
    var gl = this.gl, N = this.N, sw = this.L.swing, r = rnd(29), i, k = 0;
    var H = this.hookData = this.hookData || new Float32Array(N * 4);
    if (!sw) return;
    var Nb = Math.min(this.phone ? 210 : 260, N), R = sw.r, gold = 2.399963;
    for (i = 0; i < N; i++) this.seed[i * 4] = this.seed[i * 4] % 20;
    for (i = 0; i < Nb; i++, k++) {                                  // ball: a sunflower disc bulged into a sphere
      var j = this.order[k], rr = R * Math.sqrt((i + 0.5) / Nb), a = i * gold;
      H[j * 4] = Math.cos(a) * rr; H[j * 4 + 1] = Math.sin(a) * rr;
      H[j * 4 + 2] = Math.sqrt(Math.max(0, R * R - rr * rr)) * 0.8; H[j * 4 + 3] = R * 0.42 * (0.8 + 0.4 * r());
    }
    var W = sw.wall, cols = Math.max(2, Math.round(W.w / W.brick)), bw = W.w / cols, rows = Math.max(3, Math.floor(W.h / bw)), bh = W.h / rows;
    for (var y = 0; y < rows; y++) for (var x = 0; x <= cols; x++) {   // bricks, every other row offset by half a brick
      var bx = W.x0 + (y % 2 ? 0 : bw / 2) + x * bw;
      if (bx < W.x0 + bw * 0.3 || bx > W.x0 + W.w - bw * 0.3 || k >= N) continue;
      j = this.order[k++];
      this.seed[j * 4] += 20;
      H[j * 4] = bx; H[j * 4 + 1] = W.y0 + (y + 0.5) * bh; H[j * 4 + 2] = 0; H[j * 4 + 3] = Math.min(bw, bh) * 0.93;
    }
    for (; k < N; k++) { j = this.order[k]; this.seed[j * 4] += 40; H[j * 4] = 0; H[j * 4 + 1] = 0; H[j * 4 + 2] = -4000; H[j * 4 + 3] = 0; }
    gl.bindBuffer(gl.ARRAY_BUFFER, this.bSeed); gl.bufferData(gl.ARRAY_BUFFER, this.seed, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.bH); gl.bufferData(gl.ARRAY_BUFFER, H, gl.STATIC_DRAW);
  };

  Swarm.prototype._upload = function (A, B) {
    var gl = this.gl, empty = this.data[6];
    gl.bindBuffer(gl.ARRAY_BUFFER, this.bA); gl.bufferData(gl.ARRAY_BUFFER, this.data[A] || empty, gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.bB); gl.bufferData(gl.ARRAY_BUFFER, this.data[B] || empty, gl.DYNAMIC_DRAW);
    this.pair = [A, B];
  };

  Swarm.prototype.story = function (p) { this.p = Math.max(0, Math.min(6, p)); };
  Swarm.prototype.setHold = function (on) { this.holdOn = !!on; };
  Swarm.prototype.setBand = function (a, b) { this.bandT = [a, b]; };
  Swarm.prototype.addBoost = function (v) { this.boost = Math.max(0, Math.min(2600, this.boost + v)); };
  Swarm.prototype.setPointer = function (x, y, inside) { this.mT[0] = x - this.w / 2; this.mT[1] = this.h / 2 - y; this.mInOn = !!inside; };
  Swarm.prototype.speed = function () { return this._speed || 0; };
  Swarm.prototype.setHook = function (o) { for (var k in o) this.hook[k] = o[k]; };

  Swarm.prototype.tick = function (dt) {
    if (!this.ready || !this.L || this.lost) return;
    dt = Math.min(dt, 1 / 20);
    var e = function (k) { return 1 - Math.exp(-dt * k); };
    var p = this.p, A = Math.floor(p), B = Math.min(6, A + 1), t = p - A;
    if (this.rm) { t = t < 0.5 ? 0 : 1; }
    if (A !== this.pair[0] || B !== this.pair[1]) this._upload(A, B);
    var hero = Math.max(0, 1 - p * 3);                     // 1 at the hero, 0 once the stop has begun
    var mosaic = Math.max(0, 1 - Math.abs(p - 1) * 2, 1 - Math.abs(p - 5) * 2);
    this.hold += ((this.holdOn && hero > 0.5 ? 1 : 0) - this.hold) * e(this.holdOn ? 9 : 4);
    this.holdTime = this.holdOn ? this.holdTime + dt : 0;
    this.boost *= Math.exp(-dt * 2);
    var base = this.rm ? 0 : (this.phone ? 420 : 620);
    this._speed = (base + this.boost) * (1 - this.hold);
    this.streamT += this._speed * dt;
    if (!this.rm) this.time += dt * (1 - 0.85 * this.hold);
    this.mIn += ((this.mInOn ? 1 : 0) * (1 - mosaic) - this.mIn) * e(5);
    this.mouse[0] += (this.mT[0] - this.mouse[0]) * e(9); this.mouse[1] += (this.mT[1] - this.mouse[1]) * e(9);
    var mx = this.mouse[0] / (this.w / 2), my = this.mouse[1] / (this.h / 2);
    var still = 1 - this.hook.k;
    var yawT = (mx * 0.14 * this.mIn + Math.sin(this.holdTime * 0.7) * 0.42 * this.hold) * (1 - mosaic) * still;
    var pitchT = (my * 0.08 * this.mIn + 0.1 * this.hold) * (1 - mosaic) * still;
    this.cam[0] += (yawT - this.cam[0]) * e(3.2); this.cam[1] += (pitchT - this.cam[1]) * e(3.2);
    this.band[0] += (this.bandT[0] - this.band[0]) * e(4); this.band[1] += (this.bandT[1] - this.band[1]) * e(4);
    this.draw(A, B, t, hero);
  };

  Swarm.prototype.draw = function (A, B, t, hero) {
    var gl = this.gl, u = this.u, a = this.a, L = this.L, self = this;
    gl.viewport(0, 0, this.c.width, this.c.height);
    gl.clearColor(0.043, 0.043, 0.047, 1);
    gl.enable(gl.DEPTH_TEST); gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.useProgram(this.prog);
    function attr(buf, loc, size, stride, off, div) {
      if (loc < 0) return;
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.enableVertexAttribArray(loc);
      gl.vertexAttribPointer(loc, size, gl.FLOAT, false, stride, off);
      if (self.gl2) gl.vertexAttribDivisor(loc, div); else self.inst.vertexAttribDivisorANGLE(loc, div);
    }
    attr(this.bQuad, a.aCorner, 2, 8, 0, 0);
    attr(this.bSeed, a.aSeed, 4, 16, 0, 1);
    attr(this.bA, a.aA, 4, 32, 0, 1); attr(this.bA, a.aAT, 4, 32, 16, 1);
    attr(this.bB, a.aB, 4, 32, 0, 1); attr(this.bB, a.aBT, 4, 32, 16, 1);
    attr(this.bH, a.aH, 4, 16, 0, 1);
    var et = t * t * (3 - 2 * t);
    gl.uniform2f(u.uRes, this.w, this.h);
    gl.uniform1f(u.uFocal, this.focal);
    gl.uniform1f(u.uIdA, A); gl.uniform1f(u.uIdB, B);
    gl.uniform1f(u.uProcA, PROC[A]); gl.uniform1f(u.uProcB, PROC[B]);
    gl.uniform1f(u.uCropA, CROP[A]); gl.uniform1f(u.uCropB, CROP[B]);
    gl.uniform1f(u.uT, t);
    gl.uniform1f(u.uArc, this.rm ? 0 : 1);
    gl.uniform1f(u.uStreamT, this.streamT);
    gl.uniform1f(u.uTime, this.time);
    gl.uniform1f(u.uBase, this.base);
    gl.uniform1f(u.uDepth, this.depth);
    gl.uniform1f(u.uDim, DIM[A] + (DIM[B] - DIM[A]) * et);
    gl.uniform3f(u.uFun, L.funnel.x, L.funnel.h, L.funnel.r);
    gl.uniform1f(u.uFunY, L.funnel.y || 0);
    gl.uniform2f(u.uBand, this.band[0], this.band[1]);
    gl.uniform3f(u.uGlobe, L.globe.cx, L.globe.cy, L.globe.r);
    gl.uniform2f(u.uCam, this.cam[0], this.cam[1]);
    gl.uniform3f(u.uMouse, this.mouse[0], this.mouse[1], this.mIn * (1 - 0.6 * this.hold) * (1 - this.hook.k));
    gl.uniform1f(u.uRepelR, this.phone ? 110 : 170);
    var hk = this.hook;
    gl.uniform1f(u.uHook, hk.k); gl.uniform1f(u.uBurst, hk.b); gl.uniform1f(u.uHeat, hk.heat); gl.uniform1f(u.uTrem, hk.trem);
    gl.uniform2f(u.uBallC, hk.x, hk.y); gl.uniform1f(u.uBallRot, hk.rot); gl.uniform2f(u.uImpact, hk.ix, hk.iy);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, this.tex); gl.uniform1i(u.uTex, 0);
    if (this.gl2) gl.drawArraysInstanced(gl.TRIANGLES, 0, 6, this.N);
    else this.inst.drawArraysInstancedANGLE(gl.TRIANGLES, 0, 6, this.N);
  };

  window.Swarm = Swarm;
})();
