/* soumilgarg.com v4. One ticker (GSAP), one scroll engine (Lenis on desktop), one canvas.
   Order: flags, footer letters, scroll engine, feed, loader + intro, scene, game, work, proof, offer, nav, HUD, cursor. */
(function () {
  var html = document.documentElement;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
  var RM = html.classList.contains('rm');
  var TOUCH = html.classList.contains('touch');
  var phone = function () { return innerWidth <= 860; };
  var now = function () { return performance.now() / 1000; };

  // footer letters exist even without GSAP
  var giant = $('.giant');
  'Soumil Garg'.split('').forEach(function (ch) {
    var s = document.createElement('span');
    if (ch === ' ') s.className = 'gap'; else s.textContent = ch;
    s.setAttribute('aria-hidden', 'true');
    giant.appendChild(s);
  });

  if (!window.gsap || !window.ScrollTrigger) { html.classList.add('no-gl', 'live'); fillPoster(); return; }
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- scroll engine ---------- */
  var lenis = null;
  if (!RM && !TOUCH && window.Lenis) {
    lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
    lenis.stop();
  }
  function scrollToY(y) {
    if (lenis) lenis.scrollTo(y, { duration: 1.6 });
    else window.scrollTo({ top: y, behavior: RM ? 'auto' : 'smooth' });
  }
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href').slice(1), el = id && document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      var y = el.getBoundingClientRect().top + scrollY;
      if (id === 'offer' && !phone()) y += innerHeight * 0.8;   // land on the open circle, not the black edge
      if (id === 'offer') hud.atc++;
      scrollToY(y);
    });
  });

  /* ---------- the feed ---------- */
  var stage = $('#stage'), canvas = $('#feed-gl'), feed = null;
  var atlasSrc = (innerWidth < 760 || (window.devicePixelRatio || 1) < 1.3) ? 'img/atlas-m.webp' : 'img/atlas.webp';
  var feedReady;
  try {
    feed = new Feed(canvas);
    feedReady = feed.load(atlasSrc).catch(function () { feed = null; html.classList.add('no-gl'); fillPoster(); });
  } catch (err) {
    feed = null; html.classList.add('no-gl'); fillPoster();
    feedReady = Promise.resolve();
  }
  function fillPoster() {
    var p = $('.poster'); if (!p || p.childElementCount) return;
    ['p01_coldbrew', 'p06_dog', 'p12_soda', 'p02_hotsauce', 'p09_bar', 'p08_gin', 'p14_spf', 'p19_cat', 'p07_oliveoil', 'p17_face'].forEach(function (id) {
      var im = new Image(); im.src = 'img/posts/' + id + '.webp'; im.alt = ''; im.width = 360; im.height = 530; p.appendChild(im);
    });
  }
  var stageVisible = true;
  new IntersectionObserver(function (es) { stageVisible = es[0].isIntersecting; }).observe(stage);
  var lastT = now();
  gsap.ticker.add(function () {
    var t = now(), dt = t - lastT; lastT = t;
    if (feed && stageVisible && !document.hidden) feed.tick(RM ? 0 : dt);
    tickHold(); tickCursor(); tickFooter(); tickHud(t);
  });
  addEventListener('resize', function () { if (feed) feed.resize(); });

  /* hold to stop */
  var holding = false, holdT0 = 0;
  var holdRead = $('.hold-read'), holdB = $('.hold-read b');
  var cursor = $('.cursor'), curRead = $('.cursor-read'), curB = $('.cursor-read b');
  function pointerXY(e) { var r = canvas.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }
  stage.addEventListener('pointermove', function (e) { if (!feed) return; var p = pointerXY(e); feed.setPointer(p[0], p[1], true); });
  stage.addEventListener('pointerleave', function () { if (feed) feed.setPointer(0, 0, false); release(); });
  stage.addEventListener('pointerdown', function (e) {
    if (!feed || e.target.closest('a,button') || S.brake > 0.01 || RM) return;
    var p = pointerXY(e); feed.setPointer(p[0], p[1], true);
    holding = true; holdT0 = now(); feed.setHold(true);
    stage.classList.add('holding'); cursor.classList.add('holding');
  });
  ['pointerup', 'pointercancel'].forEach(function (n) { addEventListener(n, release); });
  stage.addEventListener('contextmenu', function (e) { if (holding) e.preventDefault(); });
  function release() {
    if (!holding) return;
    holding = false; if (feed) feed.setHold(false);
    stage.classList.remove('holding'); cursor.classList.remove('holding');
    if (TOUCH && feed) feed.setPointer(0, 0, false);
  }
  function tickHold() {
    if (!holding) return;
    var d = now() - holdT0, over = d >= 1.7, txt = d.toFixed(2) + 's';
    holdB.textContent = txt; curB.textContent = txt;
    holdRead.classList.toggle('over', over); curRead.classList.toggle('over', over);
    curRead.querySelector('em').textContent = over ? 'longer than most ads get' : 'holding';
    holdRead.querySelector('span').textContent = over ? 'longer than most ads get' : 'holding';
    if (d >= 3) hud.v3done = true;
  }

  /* ---------- loader + intro ---------- */
  var loader = $('.loader'), count = $('.loader-count .n'), bar = $('.loader-bar i'), lline = $('.loader-line');
  var words = $$('.hero-h .w'), heroBits = $$('.kicker, .hero-lede, .hero-actions, .hero-side');
  function intro() {
    html.classList.add('live');
    if (lenis) lenis.start();
    navUpdate();
    if (RM) { gsap.set(words.concat(heroBits), { clearProps: 'all' }); return; }
    gsap.fromTo(words, { yPercent: 115 }, { yPercent: 0, duration: 1.15, ease: 'expo.out', stagger: 0.07 });
    gsap.fromTo(heroBits, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'expo.out', stagger: 0.09, delay: 0.25, clearProps: 'transform' });
  }
  if (RM) {
    gsap.to(loader, { opacity: 0, duration: 0.3, onComplete: function () { loader.remove(); } });
    intro();
  } else {
    gsap.set(words, { yPercent: 115 }); gsap.set(heroBits, { opacity: 0 });
    var c = { t: 0 }, minDone = false, assetsDone = false;
    var fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    Promise.race([Promise.all([feedReady, fontsReady]), new Promise(function (r) { setTimeout(r, 4500); })]).then(function () { assetsDone = true; maybeOut(); });
    gsap.to(c, { t: 1.7, duration: 1.7, ease: 'none', onUpdate: function () { count.textContent = c.t.toFixed(2); bar.style.transform = 'scaleX(' + c.t / 1.7 + ')'; },
      onComplete: function () { minDone = true; loader.classList.add('up'); lline.textContent = "Time's up."; maybeOut(); } });
    function maybeOut() {
      if (!minDone || !assetsDone || maybeOut.done) return;
      maybeOut.done = true;
      var tl = gsap.timeline({ delay: 0.25, onComplete: function () { loader.remove(); } });
      tl.to('.loader-in', { scale: 0.92, opacity: 0, duration: 0.5, ease: 'power2.in' })
        .to('.loader-half.top', { yPercent: -100, duration: 1, ease: 'expo.inOut' }, 0.2)
        .to('.loader-half.bot', { yPercent: 100, duration: 1, ease: 'expo.inOut' }, 0.2)
        .add(intro, 0.65);
    }
  }

  /* ---------- scene: hero, then the stop (one state object, one scrubbed timeline, one render) ---------- */
  var S = { copy: 0, brake: 0, flat: 0, land: 0, card: 0, grow: 0, tag: 0, l1: 0, l1o: 0, l2: 0, note: 0, out: 0 };
  var heroCopy = $('.hero-copy'), card = $('.stop-card'), tag = $('.stop-tag');
  var l1 = $('.stop-line.l1'), l2 = $('.stop-line.l2'), note = $('.stop-note'), scrim = $('.scrim');
  function renderScene() {
    var vw = innerWidth, vh = stage.clientHeight, ph = phone();
    if (feed) feed.set({ brake: S.brake, flat: S.flat, land: S.land, hideLand: S.grow, dim: (1 - 0.82 * S.card) * (1 - 0.7 * S.out), zoom: 1 });
    heroCopy.style.opacity = String(1 - S.copy);
    heroCopy.style.transform = 'translateY(' + (-60 * S.copy) + 'px)';
    heroCopy.style.visibility = S.copy >= 1 ? 'hidden' : 'visible';
    scrim.style.opacity = String(1 - 0.6 * S.flat + 0.6 * S.card);
    var w0 = feed ? feed.landedWidth() : Math.min(300, Math.max(190, vw * 0.168)), h0 = w0 * 884 / 600;
    var target = (ph ? vh * 0.44 : vh * 0.62) / h0;
    var sc = 1 + (target - 1) * S.grow;
    var tx = (ph ? 0 : vw * 0.16) * S.grow, ty = (ph ? -vh * 0.17 : 0) * S.grow;
    card.style.width = w0 + 'px';
    card.style.opacity = String(S.card * (1 - S.out));
    card.style.transform = 'translate(-50%,-50%) translate(' + tx + 'px,' + ty + 'px) scale(' + sc + ') rotate(' + (-3 * S.grow) + 'deg)';
    tag.style.opacity = String(S.tag * (1 - S.out));
    tag.style.transform = 'translate(-50%,0) translate(' + tx + 'px,' + (ty + h0 * sc / 2 - 10) + 'px) scale(' + (0.8 + 0.2 * S.tag) + ') rotate(' + (-3 * S.grow) + 'deg)';
    l1.style.opacity = String(S.l1 * (1 - S.l1o));
    l1.style.transform = 'translateY(' + ((1 - S.l1) * 50 - S.l1o * 50) + 'px)';
    l2.style.opacity = String(S.l2 * (1 - S.out));
    l2.style.transform = 'translateY(' + ((1 - S.l2) * 50) + 'px)';
    note.style.opacity = String(S.note * (1 - S.out));
    cursor.classList.toggle('on-feed', S.brake < 0.01 && overStage);
  }
  var tl = gsap.timeline({ paused: true, defaults: { ease: 'none' }, onUpdate: renderScene });
  tl.to(S, { copy: 1, duration: 12, ease: 'power2.in' }, 2)
    .to(S, { brake: 1, duration: 40 }, 6)
    .to(S, { flat: 1, duration: 36, ease: 'power2.inOut' }, 10)
    .to(S, { land: 1, duration: 12 }, 36)
    .to(S, { card: 1, duration: 4 }, 47)
    .to(S, { tag: 1, duration: 4, ease: 'back.out(2)' }, 50)
    .to(S, { grow: 1, duration: 16, ease: 'power2.inOut' }, 52)
    .to(S, { l1: 1, duration: 9, ease: 'power2.out' }, 58)
    .to(S, { l1o: 1, duration: 6, ease: 'power2.in' }, 76)
    .to(S, { l2: 1, duration: 8, ease: 'power2.out' }, 81)
    .to(S, { note: 1, duration: 6 }, 86)
    .to(S, { out: 1, duration: 6 }, 94);
  if (RM) {
    // reduced motion: two still frames, the hero and the finished stop, switched by position
    ScrollTrigger.create({ trigger: '#scene', start: 'top top', end: 'bottom bottom', onUpdate: function (st) { tl.progress(st.progress < 0.35 ? 0 : 0.92); } });
  } else {
    ScrollTrigger.create({ trigger: '#scene', start: 'top top', end: 'bottom bottom', animation: tl, scrub: 0.6 });
  }
  renderScene();

  /* ---------- game: stop on the one you'd buy ---------- */
  var FEED = [
    ['p01_coldbrew', 'Nightshift Cold Brew', 'One colour you can see from across the room'],
    ['p02_hotsauce', 'Ember & Ash', 'Motion frozen mid-splash'],
    ['p03_brass', 'Dhatu Brass', 'Light that makes it look expensive'],
    ['p04_serum', 'Kova Skin', 'One thing happening, nothing else'],
    ['p05_candle', 'Low Light Candle Co.', 'A mood you can almost smell'],
    ['p06_dog', 'Good Boy Knits', 'A face looking straight at you'],
    ['p07_oliveoil', 'Verdi Olive Oil', 'Food you can almost taste'],
    ['p08_gin', 'Tidewater Gin', 'Electric colour in a grey feed'],
    ['p09_bar', 'Ridge Bar', 'Something breaking open'],
    ['p10_vase', 'Mud & Kiln', 'Calm in a loud feed'],
    ['p11_hairoil', 'Amla Ritual', 'Ingredients you already trust'],
    ['p12_soda', 'Fizzwell', 'A burst of colour and motion'],
    ['p13_honey', 'Wild Comb', 'Slow motion you want to watch'],
    ['p14_spf', 'Sunday SPF', 'A real person, shot on a phone'],
    ['p15_ugc_granola', 'Fernwick Granola', 'A real person eating it on camera'],
    ['p16_sneaker', 'Cloudwalk', "Something that shouldn't be possible"],
    ['p17_face', 'Nell Botanics', 'Eye contact'],
    ['p18_wok', 'Wok Club', 'Fire. Nobody scrolls past fire.'],
    ['p19_cat', 'Smug Cat Supply', 'A joke you get in half a second'],
    ['p20_bowls', 'Bloom Bowls', 'A pattern your eye has to finish']
  ];
  var phoneEl = $('#phone'), screen = $('.phone-screen'), strip = $('.strip'), clock = $('.game-clock');
  var stopBtn = $('.stop-btn'), startBtn = $('.start'), result = $('.result'), meterI = $('.meter i');
  var G = { on: false, pos: 0, v: 0, t0: 0, order: [], seen: [], postH: 0, done: false };
  function buildStrip() {
    G.order = FEED.slice().sort(function () { return Math.random() - 0.5; });
    strip.innerHTML = '';
    G.order.forEach(function (f) {
      var im = new Image(); im.src = 'img/posts/' + f[0] + '.webp'; im.alt = ''; im.width = 360; im.height = 530; im.decoding = 'async';
      strip.appendChild(im);
    });
  }
  function startGame() {
    buildStrip();
    G.postH = screen.clientWidth * 884 / 600;
    G.pos = -56; G.v = 0; G.t0 = now(); G.seen = []; G.on = true; G.done = false;
    $('.phone-cover').style.display = 'none';
    result.hidden = true; meterI.style.width = '0';
    phoneEl.classList.add('playing');
    strip.style.transform = 'translate3d(0,' + (-G.pos) + 'px,0)';
    $$('.strip img').forEach(function (im) { im.style.outline = ''; });
    stopBtn.focus({ preventScroll: true });
  }
  gsap.ticker.add(function () {
    if (!G.on) return;
    var t = now() - G.t0, dt = Math.min(gsap.ticker.deltaRatio() / 60, 0.05);
    var pps = RM ? 0.6 : Math.min(1.25 + t * 0.12, 2.1);    // posts per second, a fast skim on a phone
    G.v = pps * G.postH;
    G.pos += G.v * dt;
    strip.style.transform = 'translate3d(0,' + (-G.pos) + 'px,0)';
    clock.textContent = t.toFixed(2) + 's';
    var Hs = screen.clientHeight;
    for (var i = 0; i < G.order.length; i++) {
      var top = i * G.postH - G.pos;
      if (G.seen[i] === undefined && top < Hs) G.seen[i] = now();
    }
    if (G.pos > G.order.length * G.postH - Hs * 0.2) finish(-1);
  });
  function finish(idx) {
    G.on = false; G.done = true;
    phoneEl.classList.remove('playing');
    var h = $('.result-h'), rt = $('.result-t'), why = $('.result-why'), verdict = $('.result-v');
    if (idx < 0) {
      h.textContent = 'Nothing stopped you.';
      rt.textContent = 'You scrolled past all 20.';
      why.style.display = 'none';
      verdict.textContent = "That's how most ads die: not hated, just skipped.";
      meterI.style.width = '100%'; meterI.style.background = 'var(--paper)';
    } else {
      var f = G.order[idx], t = Math.max(0.15, now() - G.seen[idx]);
      h.innerHTML = 'You stopped on <span class="r-brand"></span>.';
      h.querySelector('.r-brand').textContent = f[1].replace(/\.$/, '');
      rt.innerHTML = 'It took that ad <b class="r-time"></b> to stop you. <span class="r-past"></span>';
      rt.querySelector('.r-time').textContent = t.toFixed(2) + ' seconds';
      rt.querySelector('.r-past').textContent = idx === 0 ? 'It was the first ad you saw.' : idx + (idx === 1 ? ' ad' : ' ads') + ' went past before it.';
      why.style.display = '';
      why.querySelector('.r-hook').textContent = f[2] + '.';
      verdict.textContent = t <= 1.7 ? 'Inside the 1.7 seconds. That ad did its job.' : 'Most people would have scrolled past by then.';
      meterI.style.width = clamp(t / 3.4, 0, 1) * 100 + '%';
      meterI.style.background = t <= 1.7 ? 'var(--red)' : 'var(--paper)';
      // brake onto the chosen post, like a thumb landing
      var Hs = screen.clientHeight, to = idx * G.postH - (Hs - G.postH) / 2;
      gsap.to(G, { pos: to, duration: RM ? 0 : 0.55, ease: 'expo.out', onUpdate: function () { strip.style.transform = 'translate3d(0,' + (-G.pos) + 'px,0)'; } });
      var im = strip.children[idx]; if (im) { im.style.outline = '3px solid var(--red)'; im.style.outlineOffset = '-3px'; }
    }
    result.hidden = false;
    hud.played = true;
    if (!RM) gsap.fromTo(result.children, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', stagger: 0.06 });
  }
  stopBtn.addEventListener('click', function () {
    if (!G.on) return;
    var Hs = screen.clientHeight, mid = G.pos + Hs * 0.5, idx = clamp(Math.floor(mid / G.postH), 0, G.order.length - 1);
    if (G.seen[idx] === undefined) G.seen[idx] = now();
    finish(idx);
  });
  startBtn.addEventListener('click', startGame);
  $('.again').addEventListener('click', startGame);
  ScrollTrigger.create({ trigger: '#game', start: 'top 180%', once: true, onEnter: function () { if (!strip.childElementCount) buildStrip(); } });

  /* ---------- what I do ---------- */
  var work = $('#work'), track = $('.track'), panels = $$('.panel');
  var fans = $$('.fan img'), cpa = $('.chart .cpa'), spend = $('.chart .spend'), chips = $$('.chip');
  var boxes = $$('.page .box'), tags = $$('.page .tag'), bubs = $$('.chat .bub, .chat .typing');
  [cpa, spend].forEach(function (p) { var L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; p._L = L; });
  function step(v, a, b) { return clamp((v - a) / (b - a), 0, 1); }
  function panelAnim(i, v) {
    if (i === 0) fans.forEach(function (im, k) {
      var o = k - 2;
      im.style.transform = 'translate(' + (o * 34 * v) + '%,' + (Math.abs(o) * 6 * v) + '%) rotate(' + (o * 9 * v) + 'deg)';
      im.style.zIndex = String(10 - Math.abs(o));
    });
    if (i === 1) {
      cpa.style.strokeDashoffset = cpa._L * (1 - step(v, 0.1, 0.9));
      spend.style.strokeDashoffset = spend._L * (1 - step(v, 0.2, 1));
      chips.forEach(function (c, k) { var s = step(v, 0.25 + k * 0.2, 0.4 + k * 0.2); c.style.opacity = s; c.style.transform = 'translateY(' + (1 - s) * 14 + 'px)'; });
    }
    if (i === 2) boxes.forEach(function (b, k) {
      var s = step(v, 0.2 + k * 0.22, 0.34 + k * 0.22);
      b.style.opacity = s; b.style.transform = 'scale(' + (1.08 - 0.08 * s) + ')';
      tags[k].style.opacity = s; tags[k].style.transform = 'translateY(' + (1 - s) * 8 + 'px)';
    });
    if (i === 3) bubs.forEach(function (b, k) { var s = step(v, 0.15 + k * 0.25, 0.3 + k * 0.25); b.style.opacity = s; b.style.transform = 'translateY(' + (1 - s) * 16 + 'px) scale(' + (0.96 + 0.04 * s) + ')'; });
  }
  if (RM) panels.forEach(function (p, i) { panelAnim(i, 1); });
  else {
    var mmw = gsap.matchMedia();
    mmw.add('(min-width: 861px)', function () {
      function dist() { return Math.max(0, track.scrollWidth - innerWidth); }
      function size() { work.style.height = (innerHeight + dist()) + 'px'; }
      size();
      var st = ScrollTrigger.create({ trigger: work, start: 'top top', end: function () { return '+=' + dist(); }, scrub: 0.6, invalidateOnRefresh: true,
        onRefreshInit: size,
        onUpdate: function (self) {
          track.style.transform = 'translate3d(' + (-dist() * self.progress) + 'px,0,0)';
          var c = innerWidth / 2;
          panels.forEach(function (p, i) {
            var r = p.getBoundingClientRect(), mid = r.left + r.width / 2;
            panelAnim(i, clamp(1.25 - Math.abs(mid - c) / (innerWidth * 0.75), 0, 1));
          });
        } });
      panels.forEach(function (p, i) { panelAnim(i, i === 0 ? 1 : 0); });
      return function () { st.kill(); work.style.height = ''; track.style.transform = ''; };
    });
    mmw.add('(max-width: 860px)', function () {
      var sts = panels.map(function (p, i) {
        return ScrollTrigger.create({ trigger: p, start: 'top 85%', end: 'center 45%', scrub: 0.5, onUpdate: function (s) { panelAnim(i, s.progress); } });
      });
      panels.forEach(function (p, i) { panelAnim(i, 0); });
      return function () { sts.forEach(function (s) { s.kill(); }); };
    });
  }

  /* ---------- proof: count once ---------- */
  $$('.count').forEach(function (el) {
    var to = parseFloat(el.dataset.to), dec = +(el.dataset.dec || 0), fmt = el.dataset.fmt;
    function show(v) {
      if (fmt === 'in') el.textContent = Math.round(v).toLocaleString('en-IN');
      else el.textContent = v.toFixed(dec);
    }
    if (RM) { show(to); return; }
    show(0);
    ScrollTrigger.create({ trigger: el, start: 'top 85%', once: true, onEnter: function () {
      var o = { v: 0 }; gsap.to(o, { v: to, duration: 1.8, ease: 'expo.out', onUpdate: function () { show(o.v); } });
    } });
  });

  /* ---------- offer: a red circle opens out of the button ---------- */
  var fill = $('.offer-fill'), offerIn = $$('.offer-in > div');
  var clipOK = window.CSS && CSS.supports && CSS.supports('clip-path', 'circle(10% at 50% 50%)');
  if (!clipOK || RM) { fill.style.clipPath = 'none'; }
  else {
    var mmo = gsap.matchMedia();
    mmo.add('(min-width: 861px)', function () {
      var o = { r: 0 };
      var t2 = gsap.timeline({ scrollTrigger: { trigger: '.offer', start: 'top top', end: '+=75%', scrub: 0.6 } });
      t2.to(o, { r: 150, duration: 1, ease: 'power2.in', onUpdate: function () { fill.style.clipPath = 'circle(' + o.r + '% at 50% 60%)'; } })
        .fromTo(offerIn, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, 0.55);
      return function () { t2.kill(); fill.style.clipPath = ''; };
    });
    mmo.add('(max-width: 860px)', function () {
      fill.style.clipPath = 'circle(0% at 50% 30%)';
      var st = ScrollTrigger.create({ trigger: '.offer', start: 'top 75%', once: true, onEnter: function () {
        var o = { r: 0 }; gsap.to(o, { r: 160, duration: 1.3, ease: 'expo.inOut', onUpdate: function () { fill.style.clipPath = 'circle(' + o.r + '% at 50% 30%)'; } });
      } });
      return function () { st.kill(); fill.style.clipPath = ''; };
    });
  }
  $$('.offer a, .foot a').forEach(function (a) {
    if (/^mailto:|linkedin/.test(a.getAttribute('href'))) a.addEventListener('click', function () { hud.buy++; });
  });

  /* ---------- nav: one button on screen at a time ---------- */
  // one button on screen at a time: the hero button counts while the hero copy is up, the others while in view
  var others = [$('.close-cta'), $('.result .btn.red')], navCta = $('.nav-cta'), offerEl = $('#offer'), navFree = null;
  function inView(el) { var r = el.getBoundingClientRect(); return r.height > 0 && r.bottom > 0 && r.top < innerHeight; }
  function navUpdate() {
    if (!others) return;
    var any = S.copy < 0.5 && $('#scene').getBoundingClientRect().bottom > innerHeight * 0.5;
    others.forEach(function (el) { if (inView(el)) any = true; });
    navFree = !any;
    if (html.classList.contains('cta-free') === navFree) return;
    html.classList.toggle('cta-free', navFree);
    navCta.tabIndex = navFree ? 0 : -1; navCta.setAttribute('aria-hidden', navFree ? 'false' : 'true');
  }

  /* ---------- HUD: the visit, scored like an ad ---------- */
  var hud = { t0: now(), v3done: false, depth: 0, played: false, atc: 0, buy: 0, last: 0, sig: '', openTill: 0 };
  var hd = {}, hudEl = $('.hud'); $$('.hud dd').forEach(function (d) { hd[d.dataset.k] = d; });
  function tickHud(t) {
    if (t - hud.last < 0.1) return; hud.last = t;
    navUpdate();
    html.classList.toggle('hud-off', offerEl.getBoundingClientRect().top < innerHeight * 0.4);
    if (!html.classList.contains('live')) { hud.t0 = t; hud.openTill = t + 5; return; }
    var sig = [hud.v3done, hud.played, hud.atc, hud.buy].join();
    if (sig !== hud.sig) { if (hud.sig) hud.openTill = t + 2.8; hud.sig = sig; }
    hudEl.classList.toggle('open', t < hud.openTill);
    var on = t - hud.t0;
    if (on >= 3) hud.v3done = true;
    var max = document.documentElement.scrollHeight - innerHeight;
    hud.depth = Math.max(hud.depth, max > 0 ? Math.round(scrollY / max * 100) : 0);
    hd.v3.textContent = hud.v3done ? 'Yes' : on.toFixed(1) + 's'; hd.v3.classList.toggle('hit', hud.v3done);
    hd.hook.textContent = hud.v3done ? '100%' : '0%'; hd.hook.classList.toggle('hit', hud.v3done);
    hd.depth.textContent = hud.depth + '%';
    hd.play.textContent = hud.played ? 'Yes' : 'No'; hd.play.classList.toggle('hit', hud.played);
    hd.atc.textContent = String(hud.atc); hd.atc.classList.toggle('hit', hud.atc > 0);
    hd.buy.textContent = String(hud.buy); hd.buy.classList.toggle('hit', hud.buy > 0);
  }

  /* ---------- cursor + footer weight ---------- */
  var cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy, overStage = false;
  if (!TOUCH) {
    addEventListener('pointermove', function (e) {
      tx = e.clientX; ty = e.clientY;
      overStage = !!e.target.closest('#stage') && !e.target.closest('a,button');
      cursor.classList.toggle('on-link', !!e.target.closest('a,button'));
      cursor.classList.toggle('on-feed', overStage && S.brake < 0.01 && !!feed);
    }, { passive: true });
  }
  function tickCursor() {
    if (TOUCH) return;
    cx += (tx - cx) * 0.22; cy += (ty - cy) * 0.22;
    cursor.style.transform = 'translate3d(' + cx + 'px,' + cy + 'px,0)';
  }
  var letters = $$('.giant span:not(.gap)'), footVisible = false;
  new IntersectionObserver(function (es) { footVisible = es[0].isIntersecting; }).observe(giant);
  function tickFooter() {
    if (!footVisible || TOUCH || RM) return;
    letters.forEach(function (s) {
      var r = s.getBoundingClientRect(), dx = r.left + r.width / 2 - tx, dy = r.top + r.height / 2 - ty;
      var d = Math.sqrt(dx * dx + dy * dy), w = 300 + 600 * Math.exp(-(d * d) / (2 * 180 * 180));
      var cur = +(s._w || 300); cur += (w - cur) * 0.18; s._w = cur;
      s.style.fontVariationSettings = '"wght" ' + cur.toFixed(0);
      s.style.color = cur > 760 ? 'var(--red)' : '';
    });
  }
  if (TOUCH || RM) letters.forEach(function (s) { s.style.fontVariationSettings = '"wght" 700'; });
})();
