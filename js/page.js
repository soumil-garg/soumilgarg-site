/* Everything below the hook. After the ball, nothing on this page moves by itself: every block here waits for a tap,
   a drag or a native swipe. The month board, the before/after sliders, the report pages, the email preview, the form
   that names the hour, the week of morning notes, the proof bars. */
(function () {
  var html = document.documentElement, RM = html.classList.contains('rm');
  var NARROW = matchMedia('(max-width: 760px)');

  /* where the free-check form sends: FormSubmit passes it to Soumil's Gmail. It only sends from the live site
     (or with ?sendform=1); everywhere else, previews and tests, it shows the thank-you and sends nothing. */
  var FORM_ENDPOINT = 'https://formsubmit.co/ajax/soumilgarg1111@gmail.com';
  var LIVE_FORM = /(^|\.)soumilgarg\.com$/.test(location.hostname) || /[?&]sendform=1/.test(location.search);

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };

  /* ---------- nav: solid after the top, light text over dark sections ---------- */
  var nav = $('.nav'), darks = $$('.sec.dark, .last, .foot'), navT = 0;
  function navPaint() {
    navT = 0;
    nav.classList.toggle('solid', scrollY > 8);
    var y = 32, dark = false;
    for (var i = 0; i < darks.length; i++) { var r = darks[i].getBoundingClientRect(); if (r.top <= y && r.bottom >= y) { dark = true; break; } }
    nav.classList.toggle('on-dark', dark);
  }
  addEventListener('scroll', function () { if (!navT) navT = requestAnimationFrame(navPaint); }, { passive: true });
  addEventListener('resize', navPaint);
  navPaint();

  /* ---------- section headings fade in once; nothing else does ---------- */
  var watch = function (els, cb, opts) {
    if (!('IntersectionObserver' in window)) { els.forEach(function (el) { cb(el); }); return; }
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); cb(e.target); } });
    }, opts || { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  };
  watch($$('[data-r]'), function (el) { el.classList.add('in'); });

  /* ---------- one month, 60 ads: step through the weeks ---------- */
  var board = $('.month');
  if (board) {
    var cells = $$('.month-grid .cell', board), stops = $$('.stops button', board), line = $('.month-line', board);
    var WIN = [3, 19, 27, 41, 52];
    var show = function (stop) {
      cells.forEach(function (c, i) {
        var win = WIN.indexOf(i) > -1, state;
        if (stop === 5) state = win ? 'made win v2' : 'made off';
        else if (i < (stop - 1) * 15) state = win ? 'made win' : 'made off';
        else if (i < stop * 15) state = 'made live';
        else state = 'empty';
        c.className = 'cell ' + state;
      });
      stops.forEach(function (b) { b.setAttribute('aria-pressed', +b.getAttribute('data-stop') === stop ? 'true' : 'false'); });
      line.textContent = line.getAttribute('data-l' + stop);
    };
    stops.forEach(function (b) { b.addEventListener('click', function () { show(+b.getAttribute('data-stop')); }); });
  }

  /* ---------- before / after sliders: still until dragged ---------- */
  $$('.cmp').forEach(function (f) {
    var range = $('.cmp-r', f), lb = $('.l-b', f), la = $('.l-a', f);
    var set = function (p) {
      p = Math.max(0, Math.min(100, p));
      f.style.setProperty('--p', p + '%'); range.value = Math.round(p);
      lb.style.opacity = p < 22 ? 0 : 1; la.style.opacity = p > 78 ? 0 : 1;
    };
    var at = function (e) { var r = f.getBoundingClientRect(); return (e.clientX - r.left) / r.width * 100; };
    var on = null;
    f.addEventListener('pointerdown', function (e) {
      if (e.button > 0) return;
      on = { id: e.pointerId, x: e.clientX, y: e.clientY, live: e.pointerType === 'mouse' };
      if (on.live) { f.classList.add('touched'); set(at(e)); try { f.setPointerCapture(e.pointerId); } catch (er) {} }
    });
    f.addEventListener('pointermove', function (e) {
      if (!on || e.pointerId !== on.id) return;
      if (!on.live && Math.abs(e.clientX - on.x) > 4) { on.live = true; f.classList.add('touched'); try { f.setPointerCapture(e.pointerId); } catch (er) {} }
      if (on.live) set(at(e));
    });
    var stop = function (e) {
      if (!on || e.pointerId !== on.id) return;
      if (!on.live && e.type === 'pointerup') { f.classList.add('touched'); set(at(e)); }
      on = null;
    };
    f.addEventListener('pointerup', stop); f.addEventListener('pointercancel', stop);
    range.addEventListener('input', function () { f.classList.add('touched'); set(+range.value); });
    set(50);
  });

  /* ---------- teardown tabs ---------- */
  var tabs = $$('.tabs [role="tab"]');
  var pick = function (tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab, p = document.getElementById(t.getAttribute('aria-controls'));
      t.setAttribute('aria-selected', on ? 'true' : 'false'); t.tabIndex = on ? 0 : -1;
      if (p) p.hidden = !on;
    });
    if (focus) tab.focus();
  };
  tabs.forEach(function (t, i) {
    t.tabIndex = i ? -1 : 0;
    t.addEventListener('click', function () { pick(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); pick(tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length], true); }
      else if (e.key === 'Home' || e.key === 'End') { e.preventDefault(); pick(tabs[e.key === 'Home' ? 0 : tabs.length - 1], true); }
    });
  });

  /* ---------- strips you can drag with a mouse (sample ads, report pages) ---------- */
  $$('.reel-track, .rp-track').forEach(function (track) {
    var d = null;
    track.addEventListener('pointerdown', function (e) {
      if (e.pointerType !== 'mouse' || e.button > 0) return;
      d = { x: e.clientX, s: track.scrollLeft, moved: 0 };
      track.classList.add('dragging');
    });
    addEventListener('pointermove', function (e) {
      if (!d) return;
      d.moved = Math.max(d.moved, Math.abs(e.clientX - d.x));
      track.scrollLeft = d.s - (e.clientX - d.x);
    });
    addEventListener('pointerup', function () { if (d) { var m = d.moved; d = null; track.classList.remove('dragging'); if (m > 6) track.setAttribute('data-dragged', '1'); setTimeout(function () { track.removeAttribute('data-dragged'); }, 50); } });
    track.addEventListener('dragstart', function (e) { e.preventDefault(); });
  });

  /* ---------- the $100 report, page by page ---------- */
  var rep = $('.report');
  if (rep) {
    var track = $('.rp-track', rep), pages = $$('.rp[data-n]', rep), count = $('.rp-count', rep), dots = $('.rp-dots', rep);
    var dlg = $('.rpd'), dimg = dlg && $('img', dlg), opener = null;
    pages.forEach(function () { var i = document.createElement('i'); dots.appendChild(i); });
    var dotEls = $$('i', dots), cur = 1;
    var setCur = function (n) {
      if (n === cur) return; cur = n;
      count.textContent = n > pages.length ? 'The report, in one line' : 'Change ' + n + ' of ' + pages.length;
      dotEls.forEach(function (d, i) { d.classList.toggle('on', i + 1 === n); });
    };
    dotEls[0].classList.add('on');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (en) {
        var best = null;
        en.forEach(function (e) { if (e.isIntersecting && (!best || e.intersectionRatio > best.intersectionRatio)) best = e; });
        if (best) setCur(+(best.target.getAttribute('data-n') || pages.length + 1));
      }, { root: track, threshold: [0.55, 0.9] });
      $$('.rp', rep).forEach(function (p) { io.observe(p); });
    }
    var pageW = function () { return pages[0].getBoundingClientRect().width + 12; }, target = null, tT = 0;
    var go = function (dir) {
      var idx = target === null ? Math.round(track.scrollLeft / pageW()) : target;
      target = Math.max(0, Math.min(pages.length, idx + dir));
      track.scrollTo({ left: target * pageW(), behavior: RM ? 'auto' : 'smooth' });
      clearTimeout(tT); tT = setTimeout(function () { target = null; }, 700);
    };
    $('.rp-nav.prev', rep).addEventListener('click', function () { go(-1); });
    $('.rp-nav.next', rep).addEventListener('click', function () { go(1); });
    if (dlg && typeof dlg.showModal === 'function') {
      pages.forEach(function (a) {
        a.addEventListener('click', function (e) {
          if (track.getAttribute('data-dragged')) { e.preventDefault(); return; }
          e.preventDefault(); opener = a;
          var n = a.getAttribute('data-n');
          dimg.src = NARROW.matches ? a.getAttribute('data-tall') : a.getAttribute('href');
          dimg.alt = 'Bummer report, change ' + n + ' of ' + pages.length + ', full size';
          dlg.setAttribute('aria-label', 'Bummer report, change ' + n + ' of ' + pages.length + ', full size');
          $('.rpd-scroll', dlg).scrollTop = 0;
          dlg.showModal(); $('.rpd-scroll', dlg).focus();
          html.classList.add('dlg-open');
          try { history.pushState({ rpd: 1 }, ''); pushed = true; } catch (er) {}
        });
      });
      var pushed = false;
      var shut = function () { if (dlg.open) dlg.close(); };
      $('.rpd-close', dlg).addEventListener('click', shut);
      dlg.addEventListener('click', function (e) { if (e.target === dlg) shut(); });
      addEventListener('popstate', function () { if (dlg.open) { pushed = false; dlg.close(); } });
      dlg.addEventListener('close', function () {
        html.classList.remove('dlg-open'); dimg.removeAttribute('src');
        if (pushed) { pushed = false; try { history.back(); } catch (er) {} }
        if (opener) { opener.focus(); opener = null; }
      });
    }
  }

  /* ---------- the free top 3 fixes form: it names the site and the hour ---------- */
  var parseHost = function (v) {
    v = (v || '').trim();
    if (/\s/.test(v) || /\.\./.test(v)) return '';
    var m = /^(?:https?:\/\/)?(?:www\.)?([a-z0-9-]+(?:\.[a-z0-9-]+)*\.[a-z]{2,})(?:[\/?#]\S*)?$/i.exec(v);
    return m ? m[1].toLowerCase() : '';
  };
  var fmtWhen = function (d) {
    try { return new Intl.DateTimeFormat(undefined, { weekday: 'short', day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' }).format(d); }
    catch (e) { return d.toLocaleString(); }
  };
  $$('[data-want]').forEach(function (a) {
    a.addEventListener('click', function () {
      var box = $('#check .check-form input[name="want_' + a.getAttribute('data-want') + '"]');
      if (box) box.checked = true;
    });
  });
  $$('.check-form').forEach(function (form) {
    form.noValidate = true;                               // JS users get our messages; without JS the browser checks the fields
    var box = form.parentNode, ok = $('.form-ok', box), err = $('.form-err', form), when = $('.form-time', form);
    var btn = $('button[type="submit"]', form), btnT = $('.sb-t', btn), idle = btnT.textContent;
    var site = form.elements.website, mail = form.elements.email, deadline = null;
    var name = function () {
      var h = parseHost(site.value);
      if (h) {
        deadline = new Date(Date.now() + 24 * 3600 * 1000);
        btnT.textContent = 'Free top 3 fixes for ' + (h.length > 24 ? h.slice(0, 23) + '…' : h);
        when.textContent = 'In your inbox by ' + fmtWhen(deadline) + ' your time.'; when.hidden = false;
      } else { deadline = null; btnT.textContent = idle; when.hidden = true; }
    };
    site.addEventListener('input', name); site.addEventListener('change', name);
    if (/[?&]sent=1/.test(location.search)) { form.hidden = true; ok.hidden = false; $('.ok-p', ok).textContent = 'Your free top 3 fixes are on their way, within 24 hours.'; }
    var bad = function (input, msg) { input.setAttribute('aria-invalid', 'true'); err.textContent = msg; err.hidden = false; input.focus(); };
    [site, mail].forEach(function (i) { i.addEventListener('input', function () { i.removeAttribute('aria-invalid'); err.hidden = true; }); });
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      err.hidden = true;
      var host = parseHost(site.value), em = mail.value.trim();
      if (!host) return bad(site, 'Add your website, like yourbrand.com');
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(em)) return bad(mail, 'Add an email I can send your fixes to');
      var trap = form.elements._honey && form.elements._honey.value;   // a bot (or an over-eager autofill) filled the hidden field: no send, no dead end
      var url = /^https?:\/\//i.test(site.value.trim()) ? site.value.trim() : 'https://' + site.value.trim();
      var dl = deadline || new Date(Date.now() + 24 * 3600 * 1000), tz = '';
      try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (er) {}
      var yes = function (n) { return form.elements[n] && form.elements[n].checked ? 'yes' : 'no'; };
      var data = { website: url, email: em, wants_60_ads: yes('want_ads'), wants_account_management: yes('want_account'), wants_full_report: yes('full_report'),
        deadline_local: fmtWhen(dl) + ' (' + tz + ')', deadline_utc: dl.toISOString(), visitor_tz: tz,
        page: location.href, sent: new Date().toISOString(), _subject: 'Free top 3 fixes: ' + host, _template: 'table', _replyto: em };
      var done = function () {
        $('.ok-site', ok).textContent = host; $('.ok-mail', ok).textContent = em;
        $('.ok-when', ok).textContent = 'by ' + fmtWhen(dl) + ' your time';
        form.hidden = true; ok.hidden = false; ok.setAttribute('tabindex', '-1'); ok.focus();
      };
      if (trap || !FORM_ENDPOINT || !LIVE_FORM) { console.info(trap ? '[honeypot] not sent' : '[preview] form not sent from this host', data); done(); return; }
      btn.disabled = true;
      fetch(FORM_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
        .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
        .then(function (j) { if (String(j && j.success) !== 'true') throw new Error('not accepted'); done(); })
        .catch(function () { err.textContent = 'That did not go through. Try again, or message me on LinkedIn.'; err.hidden = false; })
        .then(function () { btn.disabled = false; });
    });
  });

  /* ---------- a week of morning notes ---------- */
  var week = $('.week');
  if (week) {
    var days = $$('.days button', week), notes = $$('.note', week);
    days.forEach(function (b) {
      b.addEventListener('click', function () {
        var d = b.getAttribute('data-day');
        days.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        notes.forEach(function (n) { n.hidden = n.getAttribute('data-day') !== d; });
      });
    });
    var inIndia = false;
    try { inIndia = /-IN$/i.test(navigator.language || '') || Intl.DateTimeFormat().resolvedOptions().timeZone === 'Asia/Kolkata'; } catch (e) {}
    if (inIndia) $$('[data-inr]').forEach(function (el) { el.textContent = el.getAttribute('data-inr'); });
  }

  /* ---------- proof: the record, one month at a time ---------- */
  var bars = $$('.bars .bar'), barLine = $('.bar-line');
  bars.forEach(function (b) {
    b.addEventListener('click', function () {
      bars.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      barLine.textContent = b.getAttribute('data-line');
    });
  });
})();
