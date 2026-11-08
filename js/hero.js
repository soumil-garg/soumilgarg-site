/* The hook. A wrecking ball swings at a brick wall and stops a hair short, frozen in the air.
   It never hits. Pull it back (drag, swipe or tap) and let go: it swings harder and stops short
   again, closer, every time. The words land while the ball hangs there, and the headline counts
   the seconds the visitor has watched a hit that is not coming. Plain canvas, no library,
   no ads anywhere in the scene. After the one swing nobody asked for, nothing moves by itself. */
(function () {
  var html = document.documentElement;
  var hero = document.getElementById('top'), cv = document.getElementById('scene');
  if (!hero || !cv || !cv.getContext) { html.classList.add('rm', 'nohero'); return; }   // no canvas: the plain words and a still picture
  var cx = cv.getContext('2d');
  if (!cx) { html.classList.add('rm', 'nohero'); return; }
  var TOUCH = html.classList.contains('touch'), RM = html.classList.contains('rm');
  var dot = hero.querySelector('.pull-dot'), hint = hero.querySelector('.drag-hint'),
      hintT = hint.querySelectorAll('.dh-t'), hintSub = hint.querySelector('.dh-sub'),
      secsEl = hero.querySelector('.secs');

  var W = 0, H = 0, DPR = 1, G = null;
  var S = { phase: 'intro', th: 0, w: 0, phaseT: 0, demoT: 0, t0: 0, rest: 0, target: 0, brake: null, trail: [],
            touched: false, pulls: 0, userPull: false, autoDone: false, shown: false, secs: 0, counting: false, visible: true, hadFocus: false };
  var raf = 0, last = 0, clock = 0, tickT = 0, revealT = 0, dead = false, FADE = 1;

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function sm(u) { u = clamp(u, 0, 1); return u * u * (3 - 2 * u); }

  /* ---------- geometry: everything scales from the hero's own size ---------- */
  var BRICKS = ['#c8452d', '#d24e33', '#bd3f27', '#d65a3c', '#b9432b', '#cf4a2f'];
  function layout() {
    var r = hero.getBoundingClientRect();
    W = Math.max(200, Math.round(r.width)); H = Math.max(300, Math.round(r.height));
    DPR = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
    // wide screens: the words own the left, the ball and wall the right; while the ball is in play the words step back.
    // phones and upright tablets: the scene takes the top half and the words sit under the floor line, so nothing overlaps.
    var narrow = W < H && W < 1025;
    var floor = Math.round(H * (narrow ? 0.47 : 0.86));
    var bh = Math.round(clamp(Math.min(H * 0.04, W * (narrow ? 0.052 : 0.03)), 15, 32));
    var bw = Math.round(bh * 2.1);
    var cols = narrow ? 3 : 4;
    var rows = Math.max(7, Math.round(H * (narrow ? 0.29 : 0.48) / bh));
    var wallW = cols * bw, wallH = rows * bh;
    var x0 = narrow ? Math.round(W - wallW - Math.max(14, W * 0.05)) : Math.round(W * 0.74);
    var R = Math.round(clamp(narrow ? W * 0.085 : Math.min(W, H) * 0.065, 24, 72));
    var hitY = floor - wallH * 0.42;
    var len = narrow ? Math.round(hitY + 40) : Math.round(H * 0.8);   // phones: the chain still comes from above the screen
    var gap = Math.min((x0 - R) * (narrow ? 0.3 : 0.2), len * 0.6);   // ball centre to wall face when the ball hangs straight down
    var px = x0 - R - gap, py = hitY - len;
    G = {
      narrow: narrow, floor: floor, bw: bw, bh: bh, cols: cols, rows: rows, x0: x0, wallW: wallW, wallH: wallH,
      R: R, len: len, px: px, py: py, gap: gap,
      K: narrow ? 40 : 26,                                   // g/len: quick, never floaty
      gap0: Math.max(14, R * 0.5),                           // the first miss has to read as a miss
      gapMin: 6,                                             // the closest it ever gets: a sliver of paper, never contact
      thHit: Math.asin(gap / len),
      thIn: -Math.asin(Math.min((px + R * 1.4) / len, 0.97))   // the swing in starts far left; it fades in if the chain is short
    };
    G.bricks = wallBricks();
    makeBallSprite();
    setCap();
  }
  function thStop(stopGap) { return Math.asin((G.gap - stopGap) / G.len); }   // the angle where the ball rests, this short of the wall

  /* how far back a pull goes, and how far the fingertip demo slides: on wide screens the demo stops at the words' edge */
  function setCap() {
    var g = G; if (!g) return;
    var rest0 = thStop(g.gap0);
    g.thMin = -Math.asin(Math.min(g.px - g.R * 0.4, g.len * 0.9) / g.len);   // the hardest pull
    g.thAuto = g.thMin + (rest0 - g.thMin) * 0.15;                            // a tap pulls almost that far
    var dotTh = rest0 + (g.thAuto - rest0) * 0.55;                             // the fingertip shows the move, staying near the ball
    if (!g.narrow) {
      var hr = hero.getBoundingClientRect(), right = 0;
      var els = hero.querySelectorAll('.hero-h, .hero-lede, .hero-chips > li, .hero-actions > *');   // the words themselves, not their full-width rows
      for (var i = 0; i < els.length; i++) {
        var b = els[i].getBoundingClientRect(); if (b.width && b.height) right = Math.max(right, b.right - hr.left);
      }
      if (right) dotTh = Math.max(dotTh, Math.asin(clamp((right + 26 - g.px) / g.len, -1, 1)));
    }
    g.thDemo = Math.min(dotTh, rest0 - 0.12);
  }

  function wallBricks() {
    var out = [], g = G, seed = 7;
    function pr() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
    for (var r = 0; r < g.rows; r++) {
      var y = g.floor - g.bh * (r + 0.5), odd = r % 2 === 1, x = g.x0;
      var widths = [];
      if (odd) { widths.push(g.bw / 2); for (var c = 0; c < g.cols - 1; c++) widths.push(g.bw); widths.push(g.bw / 2); }
      else for (var c2 = 0; c2 < g.cols; c2++) widths.push(g.bw);
      for (var i = 0; i < widths.length; i++) {
        out.push({ x: x + widths[i] / 2, y: y, w: widths[i], h: g.bh, col: BRICKS[Math.floor(pr() * BRICKS.length)] });
        x += widths[i];
      }
    }
    return out;
  }

  /* ---------- drawing ---------- */
  var ballSprite = null;
  function makeBallSprite() {
    var R = G.R, s = Math.ceil((R * 2 + 4) * DPR), c = document.createElement('canvas');
    c.width = c.height = s;
    var g = c.getContext('2d'); g.scale(DPR, DPR);
    var o = R + 2;
    var gr = g.createRadialGradient(o - R * 0.38, o - R * 0.42, R * 0.08, o, o, R);
    gr.addColorStop(0, '#6a6b72'); gr.addColorStop(0.32, '#2c2d33'); gr.addColorStop(1, '#0b0b0c');
    g.fillStyle = gr; g.beginPath(); g.arc(o, o, R, 0, Math.PI * 2); g.fill();
    g.strokeStyle = 'rgba(255,255,255,.07)'; g.lineWidth = Math.max(1, R * 0.05);
    g.beginPath(); g.arc(o, o, R * 0.95, -0.2, 1.3); g.stroke();
    g.fillStyle = 'rgba(255,255,255,.32)';
    g.beginPath(); g.ellipse(o - R * 0.4, o - R * 0.44, R * 0.2, R * 0.11, -0.6, 0, Math.PI * 2); g.fill();
    ballSprite = c;
  }

  function drawFloor() {
    var g = G;
    cx.fillStyle = g.narrow ? '#edeae2' : '#e8e4da'; cx.fillRect(0, g.floor, W, H - g.floor);
    cx.fillStyle = '#0b0b0c'; cx.fillRect(0, g.floor - 1, W, 2);
  }

  function drawBrick(b) {
    var w = b.w, h = b.h, m = Math.max(1.5, h * 0.09), x = b.x - w / 2 + m / 2, y = b.y - h / 2 + m / 2;
    cx.fillStyle = b.col; cx.fillRect(x, y, w - m, h - m);
    cx.fillStyle = 'rgba(255,255,255,.14)'; cx.fillRect(x, y, w - m, Math.max(1, h * 0.1));
    cx.fillStyle = 'rgba(0,0,0,.16)'; cx.fillRect(x, b.y + h / 2 - m / 2 - Math.max(1, h * 0.12), w - m, Math.max(1, h * 0.12));
  }

  function drawChain(ax, ay, bx, by) {
    var dx = bx - ax, dy = by - ay, d = Math.hypot(dx, dy); if (d < 2) return;
    var ux = dx / d, uy = dy / d, L = Math.max(9, G.R * 0.34), n = Math.ceil(d / L), ang = Math.atan2(dy, dx);
    cx.strokeStyle = '#232327'; cx.lineWidth = Math.max(2, L * 0.2); cx.lineCap = 'round';
    for (var i = 0; i < n; i++) {
      var t = (i + 0.5) * (d / n), x = ax + ux * t, y = ay + uy * t;
      var a = clamp((y - 56) / 60, 0, 1);                      // the chain comes out from under the nav bar, never through its words
      if (a <= 0) continue;
      cx.globalAlpha = a * FADE;
      if (i % 2 === 0) { cx.beginPath(); cx.ellipse(x, y, L * 0.62, L * 0.32, ang, 0, Math.PI * 2); cx.stroke(); }
      else { cx.beginPath(); cx.moveTo(x - ux * L * 0.5, y - uy * L * 0.5); cx.lineTo(x + ux * L * 0.5, y + uy * L * 0.5); cx.stroke(); }
    }
    cx.globalAlpha = FADE;
  }

  function drawBall(x, y, alpha, withChain) {
    var R = G.R;
    if (withChain) {
      var dx = x - G.px, dy = y - G.py, d = Math.hypot(dx, dy) || 1;
      var tx = x - dx / d * R * 0.98, ty = y - dy / d * R * 0.98;
      drawChain(G.px, G.py, tx, ty);
      cx.save(); cx.translate(tx, ty); cx.rotate(Math.atan2(dy, dx) + Math.PI / 2);
      cx.fillStyle = '#18181b'; cx.fillRect(-R * 0.17, -R * 0.2, R * 0.34, R * 0.26); cx.restore();
    }
    cx.globalAlpha = alpha * FADE;
    cx.drawImage(ballSprite, x - R - 2, y - R - 2, (R * 2 + 4), (R * 2 + 4));
    cx.globalAlpha = FADE;
  }

  function drawBallShadow(x, y) {
    var g = G, hgt = g.floor - (y + g.R), s = clamp(1 - hgt / (H * 0.7), 0.1, 1);
    cx.fillStyle = 'rgba(11,11,12,' + (0.16 * s).toFixed(3) + ')';
    cx.beginPath(); cx.ellipse(x, g.floor + 3, g.R * (0.7 + 0.5 * s), g.R * 0.12 * (0.6 + 0.4 * s), 0, 0, Math.PI * 2); cx.fill();
  }

  function ballAt(th) { return { x: G.px + G.len * Math.sin(th), y: G.py + G.len * Math.cos(th) }; }

  /* ---------- phases ---------- */
  function setPhase(p) { S.phase = p; S.phaseT = clock; }
  function ask(on) {
    hero.classList.toggle('ask', on); hero.classList.toggle('grab', on);
    if (on && S.hadFocus) { S.hadFocus = false; try { hint.focus({ preventScroll: true }); } catch (er) {} }   // a keyboard visitor keeps their place
  }

  function startIntro() {
    S.th = G.thIn; S.w = 0; S.trail = []; S.brake = null; S.t0 = 0;
    S.rest = thStop(G.gap0); S.target = S.rest; S.userPull = false;
    setPhase('intro');
  }

  /* the stop: the ball hangs where the brake left it, the hint comes back, the words come once */
  function freeze() {
    S.w = 0; S.th = S.rest; S.brake = null;
    setPhase('frozen'); S.demoT = clock; hero.classList.remove('gone');
    if (S.userPull) { S.userPull = false; S.pulls++; tally(); }
    setTimeout(function () { if (S.phase === 'frozen') ask(true); }, S.shown ? 250 : 1900);
    if (!S.shown) { clearTimeout(revealT); revealT = setTimeout(reveal, 1600); }
  }

  /* the wait: only the seconds the hero was on screen, in a tab the visitor was looking at */
  var pausedAt = 0;
  function pause() { if (!pausedAt) pausedAt = performance.now(); }
  function resume() { if (pausedAt && S.visible && !document.hidden) { if (S.t0) S.t0 += performance.now() - pausedAt; pausedAt = 0; } }
  function reveal() {
    if (S.shown) return;
    S.shown = true; hero.classList.add('shown');
    S.counting = true; tick();
    if (S.visible && !document.hidden) tickT = setInterval(tick, 250); else S.counting = false;   // revealed off screen: the number stays
    setTimeout(setCap, 120);                                 // the headline just changed width
  }
  function tick() {
    if (!S.counting || !S.t0) return;
    var now = performance.now(), s = Math.max(2, Math.round((now - S.t0 - (pausedAt ? now - pausedAt : 0)) / 1000));
    if (s !== S.secs) { S.secs = s; if (secsEl) secsEl.textContent = String(s); }
  }
  function stopCounting() { if (!S.counting) return; S.counting = false; clearInterval(tickT); }

  function tally() {
    var n = S.pulls;
    for (var i = 0; i < hintT.length; i++) hintT[i].textContent = 'Pull it back harder';
    if (hintSub) hintSub.textContent = n + (n === 1 ? ' pull. ' : ' pulls. ') + 'Still 0 hits.';
    hero.classList.add('pulled');
  }

  function startAuto() {
    if (S.phase !== 'frozen' && S.phase !== 'drag') return;
    S.hadFocus = document.activeElement === hint;
    S.auto = { from: S.th, t: clock, dur: 0.42 };
    setPhase('auto'); ask(false); hero.classList.add('gone'); dot.classList.remove('on');
  }

  /* let go: the swing gets a stop of its own, closer the harder the pull */
  function release() {
    var pf = clamp(S.th / G.thMin, 0, 1);                   // how far back it came, 0..1
    S.hadFocus = S.hadFocus || document.activeElement === hint;
    S.rest = thStop(Math.max(G.gapMin, G.gap0 * (1 - 0.88 * pf)));
    S.target = S.rest; S.brake = null;
    S.w = 0; S.trail = []; setPhase('swing'); ask(false); hero.classList.add('gone'); dot.classList.remove('on');
  }

  /* ---------- the loop ---------- */
  function fly(dt, n) {
    var g = G;
    if (!S.brake) {
      var h = dt / n;
      for (var i = 0; i < n; i++) { S.w += -g.K * Math.sin(S.th) * h; S.th += S.w * h; }
      var d = S.target - S.th;
      if (S.th > S.target * 0.12 && S.w > 0) S.brake = { t: clock, from: S.th, d: d, k: clamp(S.w * 0.8 / Math.max(d, 1e-4), 2, 40), T: 0.8 };
      if (d <= 0) { freeze(); return; }
    } else {
      var u = clamp((clock - S.brake.t) / S.brake.T, 0, 1);
      S.th = S.brake.from + S.brake.d * (1 - Math.pow(1 - u, S.brake.k));
      if (u >= 1) { freeze(); return; }
    }
    S.trail.push({ th: S.th, t: clock }); if (S.trail.length > 40) S.trail.shift();
  }

  function step(dt) {
    var g = G, p = S.phase;

    if (p === 'intro') {
      if (!S.t0) S.t0 = performance.now();                  // the wait starts when the ball comes in, not at page load
      fly(dt, 4);
    }

    else if (p === 'frozen') {
      // the ball stays put. A fingertip shows the move, twice; then, if nobody tries it, the ball pulls back once by itself.
      if (!S.touched && !drag && !S.autoDone) {
        var e = clock - (S.demoT || S.phaseT), demo = 0, lead = 3.0;   // let the words land first
        if (S.visible && e > lead) {
          var c = (e - lead) % 3.4;
          demo = c < 0.7 ? sm(c / 0.7) : c < 1.0 ? 1 : c < 1.6 ? 1 - sm((c - 1.0) / 0.6) : 0;
          if (e > lead + 6.5) { S.autoDone = true; startAuto(); return; }
        }
        var bd = ballAt(S.rest + (g.thDemo - S.rest) * demo);
        dot.classList.toggle('on', demo > 0.03);
        if (demo > 0.03) dot.style.transform = 'translate(' + bd.x.toFixed(1) + 'px,' + bd.y.toFixed(1) + 'px)';
      }
    }

    else if (p === 'auto') {
      var a = S.auto, uu = clamp((clock - a.t) / a.dur, 0, 1), k2 = uu < 0.5 ? 2 * uu * uu : 1 - Math.pow(-2 * uu + 2, 2) / 2;
      S.th = a.from + (g.thAuto - a.from) * k2;
      if (uu >= 1) release();
    }

    else if (p === 'swing') {
      fly(dt, 6);
      if (S.phase === 'swing' && !S.brake && S.w < 0 && S.th < 0) { setPhase('frozen'); S.auto = null; startAuto(); }   // not enough swing: help it
    }
  }

  function render() {
    var g = G, p = S.phase;
    cx.setTransform(DPR, 0, 0, DPR, 0, 0);
    cx.clearRect(0, 0, W, H);
    drawFloor();
    for (var i = 0; i < g.bricks.length; i++) drawBrick(g.bricks[i]);
    FADE = p === 'intro' ? sm(clock / 0.3) : 1;              // the swing in fades up where the chain is too short to start off screen
    cx.globalAlpha = FADE;
    var b0 = ballAt(S.th);
    drawBallShadow(b0.x, b0.y);
    if (p === 'frozen') {
      // a frozen frame: the smear and speed lines of a swing that never landed
      var fin = sm((clock - S.phaseT) / 0.5), base = S.th, R0 = g.R;
      for (var k = 1; k <= 3; k++) {
        var gb = ballAt(base - k * (g.narrow ? 0.045 : 0.06));
        drawBall(gb.x, gb.y, (0.11 - k * 0.03) * fin, false);
      }
      var bb = ballAt(base), ang = base;                 // lines run along the swing, behind the ball
      cx.strokeStyle = 'rgba(11,11,12,' + (0.5 * fin).toFixed(3) + ')'; cx.lineWidth = Math.max(2, R0 * 0.06); cx.lineCap = 'round';
      for (var q2 = -1; q2 <= 1; q2++) {
        var ox = bb.x - Math.cos(ang) * R0 * 1.25, oy = bb.y + Math.sin(ang) * R0 * 1.25 + q2 * R0 * 0.42;
        var ln = R0 * (q2 === 0 ? 1.1 : 0.7);
        cx.beginPath(); cx.moveTo(ox - Math.cos(ang) * ln * 0.15, oy + Math.sin(ang) * ln * 0.15); cx.lineTo(ox - Math.cos(ang) * ln, oy + Math.sin(ang) * ln); cx.stroke();
      }
    }
    if ((p === 'swing' || p === 'intro') && S.trail.length > 4) for (var k2 = 1; k2 <= 3; k2++) {
      var t2 = S.trail[Math.max(0, S.trail.length - 1 - k2 * 2)], gb2 = ballAt(t2.th);
      drawBall(gb2.x, gb2.y, 0.1 / k2, false);
    }
    drawBall(b0.x, b0.y, 1, true);
    cx.globalAlpha = 1; FADE = 1;
  }

  function frame(now) {
    raf = 0;
    if (dead) return;
    var dt = Math.min(0.034, Math.max(0, (now - last) / 1000)); last = now;
    try { if (S.visible) { clock += dt; step(dt); render(); } }
    catch (err) { fail(); return; }
    var resting = S.phase === 'frozen' && (S.touched || S.autoDone) && !drag && clock - S.phaseT > 0.6;   // nothing can move until the next input
    if (!resting && S.visible) raf = requestAnimationFrame(frame);
  }
  function wake() { if (!G || RM || dead) return; if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame); } }   // reduced motion: one still frame, nothing runs
  /* if the scene ever cannot run, the page still works: the plain words and a still picture */
  function fail() {
    if (dead) return; dead = true;
    if (raf) cancelAnimationFrame(raf); raf = 0;
    stopCounting(); clearTimeout(revealT); dot.classList.remove('on'); ask(false);
    cx.setTransform(1, 0, 0, 1, 0, 0); cx.clearRect(0, 0, cv.width, cv.height);
    html.classList.add('nohero');
    if (!S.shown) { S.shown = true; hero.classList.add('shown'); }
  }

  /* ---------- input: drag or swipe anywhere on the hero, or tap ---------- */
  var drag = null;
  hero.addEventListener('pointerdown', function (e) {
    if (RM || dead || (S.phase !== 'frozen') || drag || e.button > 0) return;
    if (e.target.closest('a, button:not(.drag-hint), input, label')) return;
    drag = { id: e.pointerId, x0: e.clientX, y0: e.clientY, th0: S.th, moved: 0, on: false, touched0: S.touched };
    dot.classList.remove('on');
    try { hero.setPointerCapture(e.pointerId); } catch (er) {}
  });
  hero.addEventListener('pointermove', function (e) {
    if (!drag || e.pointerId !== drag.id) return;
    var dx = e.clientX - drag.x0, dy = e.clientY - drag.y0;
    drag.moved = Math.max(drag.moved, Math.hypot(dx, dy));
    if (!drag.on && Math.abs(dx) > 6) { drag.on = true; S.touched = true; setPhase('drag'); hero.classList.add('dragging', 'grabbing'); }
    if (drag.on) {
      var gain = TOUCH ? 1.7 : 1;
      S.th = clamp(drag.th0 + dx * gain / (G.len * Math.cos(drag.th0)), G.thMin, S.rest);
      wake();
    }
  });
  function up(e, cancelled) {
    if (!drag || e.pointerId !== drag.id) return;
    var d = drag; drag = null;
    hero.classList.remove('dragging', 'grabbing');
    try { hero.releasePointerCapture(e.pointerId); } catch (er) {}
    if (!d.on) {
      if (!cancelled && d.moved < 10) { S.touched = true; S.userPull = true; startAuto(); }
      else S.demoT = clock;                              // a scroll, not a pull: only the fingertip demo starts over
      wake(); return;
    }
    if (cancelled) {                                     // the browser took the gesture as a scroll: no pull, no tally
      S.th = S.rest; S.touched = d.touched0; setPhase('frozen'); S.demoT = clock; wake(); return;
    }
    S.userPull = true;
    if (S.th < -G.thHit * 1.12) release(); else { setPhase('drag'); startAuto(); }
    wake();
  }
  hero.addEventListener('pointerup', function (e) { up(e, false); });
  hero.addEventListener('pointercancel', function (e) { up(e, true); });
  hint.addEventListener('click', function () { if (S.phase === 'frozen' && !dead) { S.touched = true; S.userPull = true; startAuto(); wake(); } });

  /* ---------- size, visibility, start ---------- */
  var lastW = 0, rT = 0, started = false;
  function onResize() {
    if (!started || dead) return;
    var r = hero.getBoundingClientRect();
    if (Math.abs(r.width - lastW) < 2 && Math.abs(r.height - H) < 80) return;
    lastW = r.width;
    var gapNow = G ? G.gap - G.len * Math.sin(S.rest) : 0;   // the stop the visitor earned survives a rotation
    layout();
    if (RM) { S.rest = thStop(G.gap0); S.th = S.rest; render(); return; }
    if (S.phase !== 'intro') {
      S.auto = null; S.brake = null; S.trail = [];
      if (drag) { drag = null; hero.classList.remove('dragging', 'grabbing'); }
      if (S.userPull) { S.userPull = false; S.pulls++; tally(); }
      S.rest = thStop(clamp(gapNow || G.gap0, G.gapMin, G.gap0)); S.target = S.rest; S.th = S.rest;
      setPhase('frozen'); S.demoT = clock; hero.classList.remove('gone'); dot.classList.remove('on'); ask(true);
    }
    else startIntro();
    render(); wake();
  }
  window.addEventListener('resize', function () { clearTimeout(rT); rT = setTimeout(onResize, 140); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { if (G) setCap(); });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (en) {
      S.visible = en[0].isIntersecting;
      if (S.visible) { resume(); wake(); }
      else { pause(); if (S.shown) stopCounting(); }     // the wait ends for good when the ball leaves the screen
    }).observe(hero);
  }
  document.addEventListener('visibilitychange', function () { if (document.hidden) pause(); else resume(); });

  function start() {
    if (started) return; started = true;
    lastW = hero.getBoundingClientRect().width;
    layout();
    if (RM) { S.rest = thStop(G.gap0); S.th = S.rest; setPhase('frozen'); clock = 1; hero.classList.add('shown'); render(); return; }
    startIntro(); wake();
    var guard = setInterval(function () {                 // eight seconds on screen with no stop means the scene is broken
      if (S.shown || dead) { clearInterval(guard); return; }
      if (clock > 8 && S.phase === 'intro') { clearInterval(guard); fail(); }
    }, 1000);
  }
  start();                                                     // the scene draws no text, so it never waits for fonts

  window.__hook = { S: S, G: function () { return G; }, ballAt: ballAt, thStop: thStop, setCap: setCap };
})();
