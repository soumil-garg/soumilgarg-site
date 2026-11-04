/* soumilgarg.com v5. One ticker (GSAP), one scroll engine (Lenis on desktop), one canvas (the swarm).
   Order: flags, letters, scroll engine, swarm + layout + story, loader, scene, game, work, proof, offer, nav, HUD,
   cursor, kinetic type, sound. */
(function () {
  var html = document.documentElement;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var clamp = function (v, a, b) { return v < a ? a : v > b ? b : v; };
  var RM = html.classList.contains('rm');
  var TOUCH = html.classList.contains('touch');
  var phone = function () { return innerWidth <= 860; };
  var now = function () { return performance.now() / 1000; };
  // phones buzz on the big beats, only after the visitor has touched the page (browsers block it before)
  var buzz = function (ms) { try { var ua = navigator.userActivation; if (ms && navigator.vibrate && ua && ua.hasBeenActive) navigator.vibrate(ms); } catch (e) {} };

  // split text into letter spans (kept out of the accessibility tree; the parent carries the label)
  function letters(el) {
    var words = el.textContent.split(' '); el.textContent = '';
    words.forEach(function (w, i) {
      var wd = document.createElement('span'); wd.className = 'wd';      // a word never breaks across lines
      w.split('').forEach(function (ch) { var s = document.createElement('span'); s.className = 'ch'; s.textContent = ch; wd.appendChild(s); });
      el.appendChild(wd);
      if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
    });
    return $$('.ch', el);
  }
  var giant = $('.giant');
  'Soumil Garg'.split('').forEach(function (ch) {
    var s = document.createElement('span');
    if (ch === ' ') s.className = 'gap'; else s.textContent = ch;
    s.setAttribute('aria-hidden', 'true');
    giant.appendChild(s);
  });
  var heroChars = [];
  $$('.hero-h [data-k]').forEach(function (ln) { heroChars = heroChars.concat(letters(ln)); });

  if (!window.gsap || !window.ScrollTrigger) { html.classList.add('no-gl', 'live'); fillPoster(); return; }
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- scroll engine ---------- */
  var lenis = null, scrollV = 0, lastY = scrollY;
  if (!RM && !TOUCH && window.Lenis) {
    lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
    lenis.on('scroll', function (e) { ScrollTrigger.update(); scrollV = e.velocity * 60; });
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
      if (id === 'offer') { y += innerHeight * 0.4; hud.atc++; }
      scrollToY(y);
    });
  });

  /* ---------- the swarm ---------- */
  var cv = $('#swarm'), swarm = null, ready, stage = $('#stage');
  var atlas = (innerWidth < 760 || (window.devicePixelRatio || 1) < 1.3) ? 'img/atlas-m.webp?v=5' : 'img/atlas.webp?v=5';
  function fillPoster() {
    var p = $('.poster'); if (!p || p.childElementCount) return;
    ['p01_coldbrew', 'p06_dog', 'p12_soda', 'p02_hotsauce', 'p09_bar', 'p08_gin', 'p14_spf', 'p19_cat', 'p07_oliveoil', 'p17_face'].forEach(function (id) {
      var im = new Image(); im.src = 'img/posts/' + id + '.webp'; im.alt = ''; im.width = 360; im.height = 530; p.appendChild(im);
    });
  }
  var H = { phase: 'off', k: 0, b: 0, n: 162, at: 0, watch: 0 };   // the hook's state; declared before anything can touch it
  function swarmGone() {   // WebGL lost or never loaded: show the poster and skip the hook so the hero still appears
    swarm = null; html.classList.add('no-gl'); fillPoster();
    if (H.phase !== 'off' && H.phase !== 'done') { H.phase = 'done'; html.classList.add('hook-done', 'popped'); intro(); }
  }
  function faceCaption() { if (swarm) $('.face-count').textContent = 'This face is ' + (swarm.faceTiles || 0).toLocaleString('en-US') + ' ads.'; }
  try {
    swarm = new Swarm(cv);
    swarm.rm = RM;
    swarm.setLayout(layout());
    swarm.onlost = function () { setTimeout(function () { if (swarm && !swarm.ready) swarmGone(); }, 1500); };
    ready = swarm.load(atlas, { dog: 'img/posts/p06_dog@2.webp?v=5' }).catch(swarmGone);
    swarm.loadMosaic('face', 'img/soumil.webp?v=5').then(faceCaption).catch(function () {});
  } catch (err) {
    swarm = null; html.classList.add('no-gl'); fillPoster(); ready = Promise.resolve();
  }

  // every shape the swarm makes, in CSS px from the screen centre with y up; the DOM uses the same numbers
  function layout() {
    var vw = innerWidth, vh = $('#stage').clientHeight || innerHeight, ph = phone();
    var dogH = ph ? vh * 0.44 : vh * 0.62, dogW = dogH * 600 / 884;
    var faceS = ph ? Math.min(vw * 0.86, vh * 0.38) : Math.min(vh * 0.74, vw * 0.4);
    var L = {
      dog: { cx: ph ? 0 : vw * 0.16, cy: ph ? vh * 0.17 : 0, w: dogW, h: dogH, cols: ph ? 26 : 36 },
      face: { cx: ph ? 0 : vw * 0.24, cy: ph ? vh * 0.29 : vh * 0.04, w: faceS, h: faceS, cols: ph ? 32 : 46 },
      globe: { cx: ph ? 0 : vw * 0.25, cy: ph ? vh * 0.06 : 0, r: ph ? vw * 0.4 : Math.min(vw * 0.2, vh * 0.34) },
      funnel: { x: ph ? 0 : vw * 0.25, y: ph ? 0 : -vh * 0.05, h: ph ? vh * 0.34 : vh * 0.3, r: ph ? vw * 0.4 : Math.min(vw * 0.19, vh * 0.3) }
    };
    var kick = $('.kicker'), kr = kick.getBoundingClientRect(), sr = $('#stage').getBoundingClientRect();
    var navB = ph ? 70 : 76, kTop = kr.height ? kr.top - sr.top : vh * 0.6, band = Math.max(140, kTop - navB - 12);
    L.ball = { cy: vh / 2 - (navB + band / 2), r: Math.min(vw * (ph ? 0.3 : 0.22), band * 0.42, vh * 0.22) };
    var st = html.style;
    st.setProperty('--fcx', L.face.cx + 'px'); st.setProperty('--fcb', (vh / 2 - L.face.cy + L.face.h / 2 + 18) + 'px');
    st.setProperty('--fx', L.funnel.x + 'px'); st.setProperty('--fy', (-L.funnel.y) + 'px'); st.setProperty('--fh', L.funnel.h + 'px'); st.setProperty('--fr', L.funnel.r + 'px');
    return L;
  }

  // where on the page each shape holds: [scrollY, story position]
  var anchors = [];
  function buildAnchors() {
    var vh = innerHeight, sc = $('#scene'), top = sc.offsetTop, len = sc.offsetHeight - vh;
    var g = $('#game').offsetTop, w = $('#work'), pr = $('#proof'), of = $('#offer'), ft = $('.foot');
    var end = document.documentElement.scrollHeight - vh;
    var a = [
      [top + len * 0.06, 0], [top + len * 0.46, 1], [top + len * 0.97, 1],
      [g + vh * 0.05, 2], [w.offsetTop - vh * 0.25, 2],
      [w.offsetTop + vh * 0.35, 3], [w.offsetTop + w.offsetHeight - vh * 0.9, 3],
      [pr.offsetTop + vh * 0.05, 4], [pr.offsetTop + pr.offsetHeight - vh * 0.7, 4],
      [of.offsetTop + vh * 0.3, 5], [of.offsetTop + of.offsetHeight - vh * 1.02, 5], [end, 6]
    ];
    for (var i = 1; i < a.length; i++) if (a[i][0] < a[i - 1][0]) a[i][0] = a[i - 1][0];
    anchors = a;
  }
  function storyAt(y) {
    if (!anchors.length) return 0;
    if (y <= anchors[0][0]) return anchors[0][1];
    for (var i = 1; i < anchors.length; i++) {
      var a = anchors[i - 1], b = anchors[i];
      if (y <= b[0]) return b[0] === a[0] ? b[1] : a[1] + (b[1] - a[1]) * (y - a[0]) / (b[0] - a[0]);
    }
    return anchors[anchors.length - 1][1];
  }
  ScrollTrigger.addEventListener('refresh', buildAnchors);
  if (window.ResizeObserver) {
    var lastBodyH = 0, roT;
    new ResizeObserver(function () {
      var h = document.body.scrollHeight; if (Math.abs(h - lastBodyH) < 2) return; lastBodyH = h;
      clearTimeout(roT); roT = setTimeout(function () { ScrollTrigger.refresh(); }, 150);
    }).observe(document.body);
  }
  var rT;
  addEventListener('resize', function () {
    clearTimeout(rT);
    rT = setTimeout(function () {
      if (swarm && swarm.resize()) swarm.setLayout(layout());
      buildAnchors();
    }, 120);
  });

  var lastT = now(), storyP = 0;
  gsap.ticker.add(function () {
    var t = now(), dt = t - lastT; lastT = t;
    if (!lenis) { scrollV = (scrollY - lastY) / Math.max(dt, 1 / 120); lastY = scrollY; }
    storyP = storyAt(scrollY);
    if (!document.hidden && H.phase !== 'off' && H.phase !== 'done') H.watch += Math.min(dt, 0.25);   // only seconds actually watched
    html.classList.toggle('st-face', storyP > 4.8 && storyP < 5.25);
    if (H.phase !== 'off' && H.phase !== 'done' && H.phase !== 'burst' && H.phase !== 'stream' && (storyP > 0.002 || Math.abs(scrollV) > 90)) burst();
    tickHook(t);
    html.classList.toggle('st-funnel', storyP > 2.6 && storyP < 3.45);
    if (swarm && !document.hidden) {
      if (storyP < 0.12 && Math.abs(scrollV) > 30) swarm.addBoost(Math.min(Math.abs(scrollV), 3000) * dt * 2.2);
      swarm.story(storyP);
      swarm.tick(dt);
      if (window.Sound) Sound.feed(clamp(swarm.speed() / 1400, 0, 1) * Math.max(0, 1 - storyP * 2));
    }
    tickHold(); tickCursor(); tickType(t); tickHud(t);
  });

  /* hold to stop: bullet time */
  var holding = false, holdT0 = 0;
  var holdRead = $('.hold-read'), holdB = $('.hold-read b');
  var cursor = $('.cursor'), curRead = $('.cursor-read'), curB = $('.cursor-read b');
  var pointerIn = false;
  addEventListener('pointermove', function (e) {
    if (e.pointerType === 'touch' && !holding) return;
    pointerIn = true;
    if (swarm) swarm.setPointer(e.clientX, e.clientY, true);
  }, { passive: true });
  document.addEventListener('pointerleave', function () { pointerIn = false; if (swarm) swarm.setPointer(0, 0, false); });
  stage.addEventListener('pointerdown', function (e) {
    if (!swarm || e.target.closest('a,button') || storyP > 0.05 || RM || H.phase !== 'done') return;
    swarm.setPointer(e.clientX, e.clientY, true);
    holding = true; holdT0 = now(); swarm.setHold(true);
    stage.classList.add('holding'); cursor.classList.add('holding');
    buzz(12); if (window.Sound) Sound.thud(0.7);
  });
  ['pointerup', 'pointercancel'].forEach(function (n) { addEventListener(n, release); });
  stage.addEventListener('contextmenu', function (e) { if (holding) e.preventDefault(); });
  function release() {
    if (!holding) return;
    holding = false; if (swarm) swarm.setHold(false);
    stage.classList.remove('holding'); cursor.classList.remove('holding');
    if (TOUCH && swarm) swarm.setPointer(0, 0, false);
  }
  function tickHold() {
    if (!holding) return;
    var d = now() - holdT0, over = d >= 1.7, txt = d.toFixed(2) + 's';
    holdB.textContent = txt; curB.textContent = txt;
    holdRead.classList.toggle('over', over); curRead.classList.toggle('over', over);
    curRead.querySelector('em').textContent = over ? 'longer than the average post gets' : 'holding';
    holdRead.querySelector('span').textContent = over ? 'longer than the average post gets' : 'holding';
    if (over && !tickHold.buzzed) { tickHold.buzzed = true; buzz(30); }
    if (!over) tickHold.buzzed = false;
    if (d >= 3) hud.v3done = true;
  }

  /* ---------- loader, then the hook, then the hero copy ---------- */
  var loader = $('.loader'), bar = $('.loader-bar i');
  var heroBits = $$('.kicker, .hero-lede, .hero-src, .hero-actions, .hero-side');
  var lede = $('.hero-lede'), hookStart = 0;
  function intro() {
    if (intro.done) return; intro.done = true;
    navUpdate();
    if (RM) { gsap.set(heroChars.concat(heroBits), { clearProps: 'all' }); return; }
    gsap.fromTo(heroChars, { yPercent: 120, rotate: 8, opacity: 0 }, { yPercent: 0, rotate: 0, opacity: 1, duration: 1.2, ease: 'expo.out', stagger: 0.028 });
    gsap.fromTo(heroBits, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'expo.out', stagger: 0.09, delay: 0.3, clearProps: 'transform' });
  }
  function liveNow() {
    html.classList.add('live');
    if (lenis) lenis.start();
    hookStart = now();
    if (RM || !swarm || !swarm.ready) { H.phase = 'done'; html.classList.add('hook-done', 'popped'); $('.cue-l').textContent = 'Scroll'; intro(); }
    else H.phase = 'stream';
  }
  if (RM) {
    gsap.to(loader, { opacity: 0, duration: 0.3, onComplete: function () { loader.remove(); } });
    liveNow();
  } else {
    gsap.set(heroChars, { opacity: 0 }); gsap.set(heroBits, { opacity: 0 });
    gsap.to(bar, { scaleX: 0.85, duration: 1.4, ease: 'power2.out' });
    var t00 = now(), fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
    Promise.race([Promise.all([ready, fontsReady]), new Promise(function (r) { setTimeout(r, 4500); })]).then(function () {
      setTimeout(function () {
        var tl0 = gsap.timeline({ onComplete: function () { loader.remove(); } });
        tl0.to(bar, { scaleX: 1, duration: 0.2 })
          .to('.loader-in', { opacity: 0, duration: 0.3 })
          .to('.loader-half.top', { yPercent: -100, duration: 0.9, ease: 'expo.inOut' }, 0.25)
          .to('.loader-half.bot', { yPercent: 100, duration: 0.9, ease: 'expo.inOut' }, 0.25)
          .add(liveNow, 0.45);
      }, Math.max(0, 500 - (now() - t00) * 1000));
    });
  }

  /* the hook: the feed gathers into a ball of ads and counts down to a pop that never comes,
     then tells the visitor how long they just watched. It pops when they scroll (or click). */
  var vfT = $('.vf-t'), vfCount = $('.vf-count'), vfN = $('.vf-count b'), hl1 = $('.hl1'), hl2 = $('.hl2');
  function showLine(el, text) { el.innerHTML = text; gsap.fromTo(el, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out' }); }
  function hideLines() { gsap.to([hl1, hl2], { opacity: 0, y: -16, duration: 0.5, ease: 'power2.in' }); }
  function secs(v) { return v.toFixed(1) + ' seconds'; }
  function tickHook(t) {
    if (H.phase === 'off' || H.phase === 'done') return;
    if (!swarm) { H.phase = 'done'; intro(); return; }
    var e = H.watch, u;
    if (!html.classList.contains('hook-done')) vfT.textContent = e.toFixed(1) + 's';
    if (H.phase === 'stream' && e > 1.1) { H.phase = 'gather'; H.at = t; }
    if (H.phase === 'gather') {
      u = clamp((t - H.at) / 1.6, 0, 1); H.k = u * u * (3 - 2 * u);
      swarm.setHook({ k: H.k, trem: 1.2 * H.k });
      if (u >= 1) { H.phase = 'count'; H.at = t; }
      return;
    }
    if (H.phase === 'count') {
      u = t - H.at;
      var n = Math.max(9, Math.round(162 * Math.pow(0.62, u)));
      if (n !== H.n) {
        H.n = n; vfN.textContent = String(n).padStart(3, '0');
        if (window.Sound && n < 40) Sound.tick();
        if (n <= 22) buzz(6);
      }
      vfCount.classList.toggle('hot', n <= 22);
      var heat = clamp((40 - n) / 31, 0, 1);
      swarm.setHook({ k: 1, heat: heat, trem: 1.2 + 9 * Math.pow(1 - n / 162, 2) });
      if (window.Sound) Sound.feed(0.15 + 0.6 * heat);
      if (n === 9 && u > 6.2) {
        H.phase = 'freeze'; H.at = t; H.waited = e;
        swarm.setHook({ trem: 0 });
        if (window.Sound) Sound.feed(0);
      }
      return;
    }
    if (H.phase === 'freeze') {
      u = t - H.at;
      if (u > 0.35 && !H.l1) { H.l1 = true; vfCount.classList.add('gone'); showLine(hl1, 'You just watched a ball of ads for <b>' + secs(H.waited) + '</b>.'); }
      if (u > 2.1 && !H.l2) { H.l2 = true; showLine(hl2, 'It only pops when you scroll.'); }
      if (u > 4.4) { H.phase = 'wait'; personalLede(); hideLines(); setTimeout(intro, 450); }   // the line clears before the headline rises
      return;
    }
    if (H.phase === 'burst') {
      u = clamp((t - H.at) / 1.7, 0, 1);
      H.b = 1 - Math.pow(1 - u, 3);
      swarm.setHook({ b: H.b, heat: (1 - u) * swarm.hook.heat });
      if (u >= 1) { H.phase = 'done'; swarm.setHook({ k: 0, b: 0, heat: 0, trem: 0 }); html.classList.add('popped'); intro(); }
    }
  }
  function personalLede() {
    lede.textContent = 'People give a post about 1.7 seconds. You just gave this page ' + H.waited.toFixed(1) + '. I make ads people stop for, then run them on Meta until they sell.';
  }
  function burst() {
    if (H.phase === 'off' || H.phase === 'burst' || H.phase === 'done') return;
    if (!swarm) { H.phase = 'done'; html.classList.add('hook-done', 'popped'); intro(); return; }
    var early = H.phase !== 'freeze' && H.phase !== 'wait', e = H.watch;
    if (H.phase === 'freeze') { personalLede(); intro(); }
    html.classList.add('hook-done');
    $('.cue-l').textContent = 'Scroll';
    vfN.textContent = 'POP'; vfCount.classList.add('hot');
    setTimeout(function () { vfCount.classList.add('gone'); }, 500);
    if (H.phase === 'stream') { H.phase = 'done'; html.classList.add('popped'); intro(); return; }
    H.phase = 'burst'; H.at = now();
    swarm.setHook({ k: 1, trem: 0 });
    buzz(45); if (window.Sound) Sound.thud(1.5);
    if (early && e < 4.5) {
      showLine(hl1, "You couldn't wait. <b>" + secs(e) + '</b>.');
      setTimeout(function () { showLine(hl2, "Neither can your customers. That's why an ad's first frame matters."); }, 500);
      setTimeout(function () { hideLines(); intro(); }, 2600);
    } else if (early) {
      showLine(hl1, 'Pop. You gave it <b>' + secs(e) + '</b>.');
      setTimeout(function () { hideLines(); intro(); }, 1600);
    } else hideLines();
  }
  stage.addEventListener('click', function (e) { if (!e.target.closest('a,button') && H.phase !== 'done') burst(); });

  /* ---------- scene: words over the swarm's stream and mosaic ---------- */
  var S = { copy: 0, card: 0, tag: 0, l1: 0, l1o: 0, l2: 0, out: 0 };
  var heroCopy = $('.hero-copy'), card = $('.stop-card'), tag = $('.stop-tag'), scrim = $('.scrim');
  var l1 = $('.stop-line.l1'), l2 = $('.stop-line.l2');
  function renderScene() {
    heroCopy.style.opacity = String(1 - S.copy);
    heroCopy.style.transform = 'translateY(' + (-60 * S.copy) + 'px)';
    heroCopy.style.visibility = S.copy >= 1 ? 'hidden' : 'visible';
    scrim.style.opacity = String(1 - 0.5 * S.copy);
    card.style.opacity = String(S.card * (1 - S.out));
    card.style.transform = 'translate(-50%,-50%) scale(' + (0.985 + 0.015 * S.card) + ')';
    tag.style.opacity = String(S.tag * (1 - S.out));
    tag.style.transform = 'translate(-50%,0) scale(' + (0.8 + 0.2 * S.tag) + ')';
    l1.style.opacity = String(S.l1 * (1 - S.l1o));
    l1.style.transform = 'translateY(' + ((1 - S.l1) * 50 - S.l1o * 50) + 'px)';
    l2.style.opacity = String(S.l2 * (1 - S.out));
    l2.style.transform = 'translateY(' + ((1 - S.l2) * 50) + 'px)';
    html.classList.toggle('st-made', S.tag > 0.5 && S.out < 0.5);
    if (S.tag > 0.5 && !renderScene.thudded) { renderScene.thudded = true; buzz(20); if (window.Sound) Sound.thud(1); }
    if (S.tag < 0.2) renderScene.thudded = false;
  }
  var tl = gsap.timeline({ paused: true, defaults: { ease: 'none' }, onUpdate: renderScene });
  tl.to(S, { copy: 1, duration: 12, ease: 'power2.in' }, 2)
    .to(S, { card: 1, duration: 4 }, 47)
    .to(S, { tag: 1, duration: 4, ease: 'back.out(2)' }, 50)
    .to(S, { l1: 1, duration: 9, ease: 'power2.out' }, 55)
    .to(S, { l1o: 1, duration: 6, ease: 'power2.in' }, 74)
    .to(S, { l2: 1, duration: 8, ease: 'power2.out' }, 79)
    .to(S, { out: 1, duration: 6 }, 94);
  if (RM) ScrollTrigger.create({ trigger: '#scene', start: 'top top', end: 'bottom bottom', onUpdate: function (st) { tl.progress(st.progress < 0.35 ? 0 : 0.92); } });
  else ScrollTrigger.create({ trigger: '#scene', start: 'top top', end: 'bottom bottom', animation: tl, scrub: 0.6 });
  renderScene();

  /* ---------- game: stop on the one you'd buy ---------- */
  var FEED = [
    ['p01_coldbrew', 'Nightshift Cold Brew', 'One colour you can see from across the room'],
    ['p02_hotsauce', 'Ember & Ash', 'Motion frozen mid-splash'],
    ['p03_brass', 'Dhatu Brass', 'Light that makes it look expensive'],
    ['p04_serum', 'Kova Skin', 'One thing happening, nothing else'],
    ['p05_candle', 'Low Light Candle Co.', 'A line you can almost smell'],
    ['p06_dog', 'Good Boy Knits', 'A face looking straight at you'],
    ['p07_oliveoil', 'Verdi Olive Oil', 'Food you can almost taste'],
    ['p08_gin', 'Tidewater Gin', 'Electric colour in a grey feed'],
    ['p09_bar', 'Ridge Bar', 'A number in the first line'],
    ['p10_vase', 'Mud & Kiln', 'Calm in a loud feed'],
    ['p11_hairoil', 'Amla Ritual', 'Ingredients you already trust'],
    ['p12_soda', 'Fizzwell', 'A burst of colour and motion'],
    ['p13_honey', 'Wild Comb', 'Slow motion you want to watch'],
    ['p14_spf', 'Sunday SPF', "Looks like a customer's own video"],
    ['p15_ugc_granola', 'Fernwick Granola', 'Someone mid-bite, looking happy'],
    ['p16_soumil', 'Soumil Garg', 'A real face, looking right at you'],
    ['p17_face', 'Nell Botanics', 'Eye contact'],
    ['p18_wok', 'Wok Club', 'Fire. Hard to scroll past'],
    ['p19_cat', 'Smug Cat Supply', 'A joke you get in half a second'],
    ['p20_bowls', 'Bloom Bowls', 'A pattern your eye has to finish']
  ];
  var phoneEl = $('#phone'), screen = $('.phone-screen'), strip = $('.strip'), clock = $('.game-clock');
  var stopBtn = $('.stop-btn'), startBtn = $('.start'), result = $('.result'), meterI = $('.meter i');
  var G = { on: false, pos: 0, v: 0, t0: 0, order: [], seen: [], postH: 0, lastIdx: -1 };
  function buildStrip() {
    G.order = FEED.slice().sort(function () { return Math.random() - 0.5; });
    strip.innerHTML = '';
    G.order.forEach(function (f) {
      var im = new Image(); im.alt = ''; im.width = 360; im.height = 530; im.decoding = 'async';
      im.sizes = '(max-width: 860px) 92vw, 380px';
      im.srcset = 'img/posts/' + f[0] + '.webp 360w, img/posts/' + f[0] + '@2.webp 600w';
      im.src = 'img/posts/' + f[0] + '.webp';
      strip.appendChild(im);
    });
  }
  function startGame() {
    buildStrip();
    G.postH = screen.clientWidth * 884 / 600;
    G.pos = -56; G.v = 0; G.t0 = now(); G.seen = []; G.on = true; G.lastIdx = -1;
    $('.phone-cover').style.display = 'none';
    result.hidden = true; meterI.style.width = '0';
    phoneEl.classList.add('playing');
    strip.style.transform = 'translate3d(0,' + (-G.pos) + 'px,0)';
    stopBtn.focus({ preventScroll: true });
  }
  gsap.ticker.add(function () {
    if (!G.on) return;
    var t = now() - G.t0, dt = Math.min(gsap.ticker.deltaRatio() / 60, 0.05);
    var pps = RM ? 0.6 : Math.min(1.25 + t * 0.12, 2.1);
    G.v = pps * G.postH;
    G.pos += G.v * dt;
    strip.style.transform = 'translate3d(0,' + (-G.pos) + 'px,0)';
    clock.textContent = t.toFixed(2) + 's';
    var Hs = screen.clientHeight;
    for (var i = 0; i < G.order.length; i++) {
      var top = i * G.postH - G.pos;
      if (G.seen[i] === undefined && top < Hs) { G.seen[i] = now(); if (window.Sound) Sound.tick(); }
    }
    if (G.pos > G.order.length * G.postH - Hs * 0.2) finish(-1);
  });
  function finish(idx) {
    G.on = false;
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
      why.querySelector('.r-hook').textContent = /[.!?]$/.test(f[2]) ? f[2] : f[2] + '.';
      verdict.textContent = f[0] === 'p16_soumil' ? 'You stopped on me. That was the point.' : t < 1 ? 'Under a second. That ad did its job.' : 'That ad had to work for it.';
      meterI.style.width = clamp(t / 3.4, 0, 1) * 100 + '%';
      meterI.style.background = t <= 1.7 ? 'var(--red)' : 'var(--paper)';
      var Hs = screen.clientHeight, to = idx * G.postH - (Hs - G.postH) / 2;
      gsap.to(G, { pos: to, duration: RM ? 0 : 0.55, ease: 'expo.out', onUpdate: function () { strip.style.transform = 'translate3d(0,' + (-G.pos) + 'px,0)'; } });
      var im = strip.children[idx]; if (im) { im.style.outline = '3px solid var(--red)'; im.style.outlineOffset = '-3px'; }
    }
    result.hidden = false;
    hud.played = true;
    if (!RM) gsap.fromTo(result.children, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', stagger: 0.06 });
    if (phone()) setTimeout(function () { scrollToY(result.getBoundingClientRect().top + scrollY - 120); }, 650);
  }
  stopBtn.addEventListener('click', function () {
    if (!G.on) return;
    var Hs = screen.clientHeight, mid = G.pos + Hs * 0.5, idx = clamp(Math.floor(mid / G.postH), 0, G.order.length - 1);
    if (G.seen[idx] === undefined) G.seen[idx] = now();
    buzz(25); if (window.Sound) Sound.thud(1);
    finish(idx);
  });
  startBtn.addEventListener('click', startGame);
  $('.again').addEventListener('click', function () {
    startGame();
    if (phone()) requestAnimationFrame(function () { scrollToY(phoneEl.getBoundingClientRect().top + scrollY - 120); G.t0 = now() + 0.7; });
  });
  ScrollTrigger.create({ trigger: '#game', start: 'top 180%', once: true, onEnter: function () { if (!strip.childElementCount) buildStrip(); } });

  /* ---------- what I do: each step lights its band of the funnel ---------- */
  $$('.step').forEach(function (st) {
    var b = st.dataset.band.split(',').map(Number);
    ScrollTrigger.create({ trigger: st, start: 'top 60%', end: 'bottom 40%', onToggle: function (s) {
      st.classList.toggle('on', s.isActive);
      if (s.isActive && swarm) swarm.setBand(b[0], b[1]);
    } });
  });
  ScrollTrigger.create({ trigger: '.steps', start: 'top 60%', end: 'bottom 40%', onLeave: function () { if (swarm) swarm.setBand(0, 0); }, onLeaveBack: function () { if (swarm) swarm.setBand(0, 0); } });

  /* ---------- proof: count once ---------- */
  $$('.count').forEach(function (el) {
    var to = parseFloat(el.dataset.to), dec = +(el.dataset.dec || 0), fmt = el.dataset.fmt;
    function show(v) { el.textContent = fmt === 'us' ? Math.round(v).toLocaleString('en-US') : v.toFixed(dec); }
    if (RM) { show(to); return; }
    show(0);
    ScrollTrigger.create({ trigger: el, start: 'top 85%', once: true, onEnter: function () {
      var o = { v: 0 }; gsap.to(o, { v: to, duration: 1.8, ease: 'expo.out', onUpdate: function () { show(o.v); } });
    } });
  });

  /* ---------- offer ---------- */
  if (!RM) gsap.fromTo('.offer-post', { y: 80, opacity: 0, rotate: -2 }, { y: 0, opacity: 1, rotate: 0, ease: 'none', scrollTrigger: { trigger: '.offer', start: 'top 70%', end: 'top 5%', scrub: 0.6 } });
  $$('.offer a, .foot a').forEach(function (a) {
    if (/^mailto:|linkedin/.test(a.getAttribute('href'))) a.addEventListener('click', function () { hud.buy++; });
  });

  /* ---------- nav: one button on screen at a time ---------- */
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
  hudEl.addEventListener('click', function () { hud.openTill = now() + 4; });
  function tickHud(t) {
    if (t - hud.last < 0.1) return; hud.last = t;
    navUpdate();
    html.classList.toggle('hud-off', offerEl.getBoundingClientRect().top < innerHeight * 0.4);
    if (!html.classList.contains('live')) { hud.t0 = t; hud.openTill = phone() ? 0 : t + 5; return; }
    var sig = [hud.v3done, hud.played, hud.atc, hud.buy].join();
    if (sig !== hud.sig) { if (hud.sig && !phone()) hud.openTill = t + 2.8; hud.sig = sig; }
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

  /* ---------- cursor, magnetic buttons ---------- */
  var cx = innerWidth / 2, cy = innerHeight / 2, tx = cx, ty = cy, overStage = false;
  var mags = TOUCH ? [] : $$('.mag');
  if (!TOUCH) {
    addEventListener('pointermove', function (e) {
      tx = e.clientX; ty = e.clientY;
      overStage = !!e.target.closest('#stage') && !e.target.closest('a,button');
      cursor.classList.toggle('on-link', !!e.target.closest('a,button'));
      cursor.classList.toggle('on-feed', overStage && storyP < 0.05 && !!swarm);
    }, { passive: true });
  }
  function tickCursor() {
    if (TOUCH) return;
    cx += (tx - cx) * 0.22; cy += (ty - cy) * 0.22;
    cursor.style.transform = 'translate3d(' + cx + 'px,' + cy + 'px,0)';
    mags.forEach(function (b) {
      var r = b.getBoundingClientRect(), mx = r.left + r.width / 2, my = r.top + r.height / 2;
      var dx = tx - mx, dy = ty - my, d = Math.sqrt(dx * dx + dy * dy), k = d < 120 ? (1 - d / 120) : 0;
      var cur = b._m || [0, 0]; cur[0] += (dx * 0.28 * k - cur[0]) * 0.2; cur[1] += (dy * 0.32 * k - cur[1]) * 0.2; b._m = cur;
      if (Math.abs(cur[0]) > 0.05 || Math.abs(cur[1]) > 0.05 || b.style.transform) b.style.transform = 'translate(' + cur[0].toFixed(2) + 'px,' + cur[1].toFixed(2) + 'px)';
    });
  }

  /* ---------- kinetic type: the hero squeezes with scroll speed and swells near the cursor; so does the footer ---------- */
  var footLetters = $$('.giant span:not(.gap)'), footVisible = false, heroVisible = true;
  new IntersectionObserver(function (es) { footVisible = es[0].isIntersecting; }).observe(giant);
  new IntersectionObserver(function (es) { heroVisible = es[0].isIntersecting; }).observe($('.hero-h'));
  var squeeze = 0;
  function tickType(t) {
    if (RM) return;
    squeeze += (clamp(Math.abs(scrollV) / 2600, 0, 1) - squeeze) * 0.12;
    if (heroVisible && heroChars.length) heroChars.forEach(function (s) {
      var stopW = !!s.closest('.stop-w');
      var base = stopW ? 56 : 112, wght = 900, near = 0;
      if (!TOUCH) {
        var r = s.getBoundingClientRect(), dx = r.left + r.width / 2 - tx, dy = r.top + r.height / 2 - ty;
        near = Math.exp(-(dx * dx + dy * dy) / (2 * 140 * 140));
      } else near = 0.5 + 0.5 * Math.sin(t * 1.6 + r0(s));
      var w = base + (stopW ? 40 : 30) * near - 45 * squeeze;
      s.style.fontVariationSettings = '"wdth" ' + clamp(w, 50, 150).toFixed(1) + ', "wght" ' + (wght - 250 * squeeze).toFixed(0);
    });
    if (footVisible) footLetters.forEach(function (s, i) {
      var near;
      if (!TOUCH) {
        var r = s.getBoundingClientRect(), dx = r.left + r.width / 2 - tx, dy = r.top + r.height / 2 - ty;
        near = Math.exp(-(dx * dx + dy * dy) / (2 * 180 * 180));
      } else near = 0.5 + 0.5 * Math.sin(t * 2 - i * 0.6);
      var cur = +(s._w || 0); cur += (near - cur) * 0.18; s._w = cur;
      s.style.fontVariationSettings = '"wght" ' + (300 + 600 * cur).toFixed(0) + ', "wdth" ' + (100 + (TOUCH ? 8 : 50) * cur).toFixed(0);
      s.style.color = cur > 0.72 ? 'var(--red)' : '';
    });
  }
  function r0(s) { return s._r || (s._r = Math.random() * 6.28); }

  /* ---------- kickers decode once, like a feed loading ---------- */
  var GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#%';
  $$('[data-decode]').forEach(function (el) {
    var txt = el.textContent;
    if (RM) return;
    ScrollTrigger.create({ trigger: el, start: 'top 88%', once: true, onEnter: function () {
      var o = { p: 0 };
      gsap.to(o, { p: 1, duration: 0.9, ease: 'none', onUpdate: function () {
        var n = Math.floor(o.p * txt.length), out = txt.slice(0, n);
        for (var i = n; i < txt.length; i++) out += txt[i] === ' ' ? ' ' : GLYPHS[(Math.random() * GLYPHS.length) | 0];
        el.textContent = out;
      }, onComplete: function () { el.textContent = txt; } });
    } });
  });

  /* ---------- sound toggle ---------- */
  var snd = $('.snd');
  snd.addEventListener('click', function () {
    if (!window.Sound) return;
    var on = Sound.toggle();
    snd.setAttribute('aria-pressed', on ? 'true' : 'false');
    snd.querySelector('.snd-l').textContent = on ? 'Sound on' : 'Sound off';
  });
  if (window.Sound && Sound.wanted()) {
    // the visitor turned sound on last time; browsers need a gesture before audio can start
    addEventListener('pointerdown', function first() { removeEventListener('pointerdown', first); if (!Sound.on()) snd.click(); }, { once: true });
  }

  ready && ready.then(function () { ScrollTrigger.refresh(); buildAnchors(); });
  buildAnchors();
})();
