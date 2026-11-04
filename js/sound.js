/* Sound, done respectfully (playbook 14.12): off until chosen, the choice is remembered,
   the audio context is created only after the click. Everything is synthesised, so no files load.
   The feed hisses with its speed, goes silent when you stop it, and the STOP lands with a thud. */
(function () {
  var ctx = null, master = null, hiss = null, band = null, on = false;
  function stored() { try { return localStorage.getItem('sound') === 'on'; } catch (e) { return false; } }
  function store(v) { try { localStorage.setItem('sound', v ? 'on' : 'off'); } catch (e) {} }

  function build() {
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    master = ctx.createGain(); master.gain.value = 0; master.connect(ctx.destination);
    // the feed: filtered noise whose level and colour follow the swarm's speed
    var len = ctx.sampleRate * 2, buf = ctx.createBuffer(1, len, ctx.sampleRate), d = buf.getChannelData(0), last = 0;
    for (var i = 0; i < len; i++) { var w = Math.random() * 2 - 1; last = (last + 0.02 * w) / 1.02; d[i] = last * 3.5; }
    var src = ctx.createBufferSource(); src.buffer = buf; src.loop = true;
    band = ctx.createBiquadFilter(); band.type = 'bandpass'; band.frequency.value = 600; band.Q.value = 0.7;
    hiss = ctx.createGain(); hiss.gain.value = 0;
    src.connect(band); band.connect(hiss); hiss.connect(master); src.start();
  }

  function thud(level) {
    if (!on || !ctx) return;
    var t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(140, t); o.frequency.exponentialRampToValueAtTime(42, t + 0.28);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.5 * (level || 1), t + 0.012); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + 0.45);
  }
  function tick() {
    if (!on || !ctx) return;
    var t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'square'; o.frequency.value = 1900;
    g.gain.setValueAtTime(0.04, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.03);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + 0.04);
  }

  window.Sound = {
    on: function () { return on; },
    toggle: function () {
      on = !on; store(on);
      if (on) {
        if (!ctx) build();
        ctx.resume();
        master.gain.cancelScheduledValues(ctx.currentTime);
        master.gain.setTargetAtTime(0.9, ctx.currentTime, 0.8);    // fades in over about 2.5 s
      } else if (ctx) {
        master.gain.setTargetAtTime(0, ctx.currentTime, 0.15);
      }
      return on;
    },
    wanted: stored,
    // speed in 0..1: how fast the feed is moving right now
    feed: function (speed) {
      if (!on || !ctx) return;
      var t = ctx.currentTime;
      hiss.gain.setTargetAtTime(0.32 * speed, t, 0.08);
      band.frequency.setTargetAtTime(350 + 1700 * speed, t, 0.1);
    },
    thud: thud,
    tick: tick
  };
})();
