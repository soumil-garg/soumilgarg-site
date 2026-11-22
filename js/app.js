var sp=Object.create;var oh=Object.defineProperty;var rp=Object.getOwnPropertyDescriptor;var ap=Object.getOwnPropertyNames;var op=Object.getPrototypeOf,lp=Object.prototype.hasOwnProperty;var jr=(n,e)=>()=>(n&&(e=n(n=0)),e);var cp=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var up=(n,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of ap(e))!lp.call(n,s)&&s!==t&&oh(n,s,{get:()=>e[s],enumerable:!(i=rp(e,s))||i.enumerable});return n};var hp=(n,e,t)=>(t=n!=null?sp(op(n)):{},up(e||!n||!n.__esModule?oh(t,"default",{value:n,enumerable:!0}):t,n));function gp(){try{let n=localStorage.getItem(hh);if(!n)return null;let e=JSON.parse(n);return!e||e.choice!=="accept"&&e.choice!=="reject"||!e.at||Date.now()-e.at>fp*864e5?null:e.choice}catch{return null}}function vp(n){try{localStorage.setItem(hh,JSON.stringify({choice:n,at:Date.now(),v:1}))}catch{}}function rc(n){let e=document.createElement("script");e.async=!0,e.src=n,e.onerror=()=>{},document.head.appendChild(e)}function xp(n){window.dataLayer=window.dataLayer||[],typeof window.gtag!="function"&&(window.gtag=function(){window.dataLayer.push(arguments)}),window["ga-disable-"+n]=!1,window.gtag("js",new Date),window.gtag("config",n),rc("https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(n))}function _p(n){if(typeof window.fbq!="function"){let e=function(){e.callMethod?e.callMethod.apply(e,arguments):e.queue.push(arguments)};e.push=e,e.loaded=!0,e.version="2.0",e.queue=[],window.fbq=e,window._fbq||(window._fbq=e)}window.fbq("consent","grant"),window.fbq("init",n),window.fbq("track","PageView"),rc("https://connect.facebook.net/en_US/fbevents.js")}function yp(n){typeof window.clarity!="function"&&(window.clarity=function(){(window.clarity.q=window.clarity.q||[]).push(arguments)}),window.clarity("consentv2",{ad_Storage:"denied",analytics_Storage:"granted"}),rc("https://www.clarity.ms/tag/"+encodeURIComponent(n))}function fh(){if(ic)return;ic=!0;let n=[];Ka("ga4")?xp(Vs.ga4):n.push("GA4"),Ka("metaPixel")?_p(Vs.metaPixel):n.push("Meta pixel"),Ka("clarity")?yp(Vs.clarity):n.push("Clarity"),window.__trackersOff=n}function Sp(){let n=[];try{n=document.cookie.split(";").map(s=>s.split("=")[0].trim()).filter(Boolean)}catch{return}let e=location.hostname,t=e.split("."),i=["",e,"."+e];t.length>2&&i.push("."+t.slice(-2).join("."));for(let s of n)if(mp.some(r=>r.test(s)))for(let r of i)try{document.cookie=s+"=; Max-Age=0; path=/"+(r?"; domain="+r:"")}catch{}}function bp(){Ka("ga4")&&(window["ga-disable-"+Vs.ga4]=!0);try{typeof window.fbq=="function"&&window.fbq("consent","revoke")}catch{}try{typeof window.clarity=="function"&&window.clarity("consentv2",{ad_Storage:"denied",analytics_Storage:"denied"})}catch{}Sp()}function ch(n){let e=n.textContent;n.textContent="",n.setAttribute("aria-label",e);let t=document.createElement("span");t.className="cc-roll",t.setAttribute("aria-hidden","true"),Array.from(e).forEach((i,s)=>{let r=document.createElement("span");r.className="cc-char",r.textContent=i===" "?"\xA0":i,r.dataset.char=i===" "?"\xA0":i,r.style.setProperty("--i",s),t.appendChild(r)}),n.appendChild(t)}function ph(){let n=document.createElement("section");n.className="cc",n.setAttribute("role","region"),n.setAttribute("aria-label","Cookies"),n.hidden=!0,n.innerHTML='<p class="cc-text"></p><div class="cc-actions"><button type="button" class="cc-btn cc-btn--solid" data-cc="accept"></button><button type="button" class="cc-btn" data-cc="reject"></button><a class="cc-link" data-cc="privacy"></a></div>',n.querySelector(".cc-text").textContent=Za.text;let e=n.querySelector("[data-cc=accept]"),t=n.querySelector("[data-cc=reject]"),i=n.querySelector("[data-cc=privacy]");return e.textContent=Za.accept,t.textContent=Za.reject,i.textContent=Za.privacy,i.href=new URL(pp,document.baseURI).href,/privacy\.html$/.test(location.pathname)&&i.setAttribute("aria-current","page"),ch(e),ch(t),e.addEventListener("click",()=>uh("accept")),t.addEventListener("click",()=>uh("reject")),n.addEventListener("keydown",s=>{s.key==="Escape"&&Hi&&(s.stopPropagation(),mh())}),document.body.appendChild(n),n}function Mp(){Wt&&Wt.querySelectorAll("[data-cc=accept],[data-cc=reject]").forEach(n=>{n.toggleAttribute("data-current",n.dataset.cc===Hi)})}function ac(){let n=Wt&&!Wt.hidden&&!Wt.classList.contains("is-out");document.documentElement.style.setProperty("--cc-clear",n?`${Math.max(0,Math.round(innerHeight-Wt.offsetTop+24))}px`:"0px")}function sc({focus:n=!1}={}){Wt||(Wt=ph()),clearTimeout(dh),Mp(),Wt.hidden=!1,Wt.classList.remove("is-out"),ac(),requestAnimationFrame(()=>requestAnimationFrame(()=>{Wt.classList.add("is-in"),n&&(Wt.querySelector("[data-current]")||Wt.querySelector("[data-cc=accept]")).focus({preventScroll:!0})}))}function mh(){if(!Wt||Wt.hidden)return;let n=Wt;n.classList.remove("is-in"),n.classList.add("is-out"),ac();let e=()=>{n.classList.contains("is-out")&&(n.hidden=!0,n.classList.remove("is-out"))};if(matchMedia("(prefers-reduced-motion: reduce)").matches?e():setTimeout(e,460),Qr&&document.contains(Qr))try{Qr.focus({preventScroll:!0})}catch{}Qr=null}function uh(n){let e=Hi;Hi=n,vp(n),mh(),n==="accept"?fh():(bp(),ic&&e==="accept"&&setTimeout(()=>location.reload(),480)),window.dispatchEvent(new CustomEvent("consent:change",{detail:{choice:n}}))}function wp(n=document){let e=new Set(n.querySelectorAll("[data-cookie-settings]"));n.querySelectorAll("a, button").forEach(t=>{t.textContent.trim()==="Cookie settings"&&e.add(t)}),e.forEach(t=>{t.__ccBound||(t.__ccBound=!0,t.tagName==="A"&&t.setAttribute("role","button"),t.addEventListener("click",i=>{i.preventDefault(),Ja(t)}))})}function Ep(n){let e=document.documentElement;if(!e.classList.contains("loading")){n();return}let t=new MutationObserver(()=>{e.classList.contains("loading")||(t.disconnect(),clearTimeout(i),n())});t.observe(e,{attributes:!0,attributeFilter:["class"]});let i=setTimeout(()=>{t.disconnect(),n()},16e3)}function Tp(){let n=[...document.querySelectorAll(".hero .pill-big, .hero .giant")].map(s=>s.getBoundingClientRect()).filter(s=>s.width&&s.height);if(!n.length)return!1;Wt||(Wt=ph());let e=Wt.hidden;Wt.style.visibility="hidden",Wt.hidden=!1;let t={l:Wt.offsetLeft,t:Wt.offsetTop,r:Wt.offsetLeft+Wt.offsetWidth,btm:Wt.offsetTop+Wt.offsetHeight};Wt.hidden=e,Wt.style.visibility="";let i=8;return n.some(s=>s.left<t.r+i&&s.right>t.l-i&&s.top<t.btm+i&&s.bottom>t.t-i)}function Ja(n){Qr=n&&n.focus?n:document.activeElement,sc({focus:!0})}function ea(){return Hi}function gh({delay:n=700}={}){return lh?{getConsent:ea,openCookieSettings:Ja}:(lh=!0,window.openCookieSettings=()=>Ja(),Hi=gp(),wp(),Hi==="accept"?fh():Hi||Ep(()=>{if(!matchMedia("(max-width: 991px), (hover: none)").matches&&!Tp()){dh=setTimeout(()=>{Hi||sc()},n);return}let t=()=>{scrollY>40&&(removeEventListener("scroll",t),Hi||sc())};addEventListener("scroll",t,{passive:!0})}),{getConsent:ea,openCookieSettings:Ja})}var Vs,dp,hh,fp,pp,Za,mp,Wt,Qr,ic,lh,Hi,dh,Ka,oc=jr(()=>{Vs={ga4:"G-XXXXXXX",metaPixel:"META_PIXEL_ID",clarity:"zhqzzi49yi"},dp={ga4:"G-XXXXXXX",metaPixel:"META_PIXEL_ID",clarity:"CLARITY_PROJECT_ID"},hh="sg-consent",fp=365,pp="privacy.html",Za={text:"This site uses Microsoft Clarity cookies to see what visitors click and where they get stuck.",accept:"Accept",reject:"Reject",privacy:"Privacy"},mp=[/^_ga($|_)/,/^_gid$/,/^_gat/,/^_fbp$/,/^_fbc$/,/^_clck$/,/^_clsk$/,/^_cltk$/],Wt=null,Qr=null,ic=!1,lh=!1,Hi=null,dh=0;Ka=n=>typeof Vs[n]=="string"&&Vs[n].trim()!==""&&Vs[n]!==dp[n];addEventListener("resize",()=>{Wt&&ac()})});function uc(...n){if(xh())try{window.clarity(...n)}catch{}else ea()!=="reject"&&Qa.length<120&&Qa.push(n)}function cc(n){if(n.closest(".wf-menu"))return"menu";if(n.closest(".nav"))return"header";if(n.closest(".exit-band"))return"closing_panel";if(n.closest("footer"))return"footer";let e=n.closest("section[id]");return e?or(e.id):"page"}function Ap(n){let e=n.getAttribute("href")||"",t=cc(n);return/calendly\.com/.test(e)?"book_call_"+t:/linkedin\.com/.test(e)?"linkedin_"+t:/^mailto:/.test(e)?"email_"+t:n.matches("[data-cc]")?"cookie_"+n.dataset.cc:n.matches("[data-cookie-settings]")?"cookie_settings":n.matches(".pill-menu")?"menu_toggle":n.matches("[data-next]")?"ads_carousel_next":n.matches("[data-prev]")?"ads_carousel_prev":n.matches("summary")?"faq_"+or(n.textContent):/facebook\.com\/ads\/library/.test(e)?"see_ad_"+(or(n.closest("article,li")?.querySelector("h3,h4,b")?.textContent)||t):e.startsWith("#")||/index\.html#/.test(e)?"nav_"+(or(e.split("#")[1])||"top")+"_"+t:"click_"+t+"_"+(or(n.getAttribute("aria-label")||n.textContent)||n.tagName.toLowerCase())}function _h(){let n=new URLSearchParams(location.search),e=["utm_source","utm_medium","utm_campaign","utm_content","utm_term"].filter(a=>n.get(a));e.forEach(a=>Gs(a,n.get(a))),n.has("fbclid")&&Gs("click_source","meta"),Gs("page",location.pathname.includes("privacy")?"privacy":"home"),Gs("layout",innerWidth<768?"phone":innerWidth<992?"tablet":"desktop");let t="";try{t=new URL(document.referrer).hostname}catch{}t&&t!==location.hostname&&Gs("referrer",t),document.querySelectorAll('a[href*="calendly.com"]').forEach(a=>{let o=new URL(a.href);e.forEach(c=>o.searchParams.set(c,n.get(c))),e.includes("utm_source")||o.searchParams.set("utm_source","soumilgarg.com"),e.includes("utm_content")||o.searchParams.set("utm_content",cc(a)),a.href=o.href}),document.addEventListener("click",a=>{let o=a.target.closest?.('a,button,summary,[role="button"],[data-cc],[data-next],[data-prev],[data-watch]');if(!o)return;let c=Ap(o);if(lc(c),c.startsWith("book_call_")){lc("book_call"),Gs("booked_from",cc(o));try{xh()&&window.clarity("upgrade","book_call")}catch{}}},!0);let i=()=>{let a=(scrollY+innerHeight)/document.documentElement.scrollHeight*100;[25,50,75,90,99].forEach(o=>{a>=o&&ja("scroll_"+(o===99?100:o))})},s=0;addEventListener("scroll",()=>{s||(s=setTimeout(()=>{s=0,i()},400))},{passive:!0});let r=new IntersectionObserver(a=>a.forEach(o=>{o.isIntersecting&&ja("view_"+or(o.target.id))}),{rootMargin:"-35% 0px -35% 0px"});document.querySelectorAll("main section[id],footer[id]").forEach(a=>r.observe(a)),[30,60,120].forEach(a=>setTimeout(()=>{document.hidden||ja("stayed_"+a+"s")},a*1e3)),addEventListener("error",a=>{a.message&&(ja("site_error"),Gs("error",a.message))}),addEventListener("consent:change",a=>{a.detail.choice==="accept"?setTimeout(()=>{Qa.splice(0).forEach(o=>uc(...o))},0):Qa.length=0})}var Qa,vh,xh,lc,Gs,ja,or,yh=jr(()=>{oc();Qa=[],vh=new Set,xh=()=>ea()==="accept"&&typeof window.clarity=="function";lc=n=>uc("event",n),Gs=(n,e)=>uc("set",n,String(e).slice(0,120)),ja=n=>{vh.has(n)||(vh.add(n),lc(n))},or=n=>String(n||"").trim().toLowerCase().replace(/[^a-z0-9]+/g,"_").replace(/^_|_$/g,"").slice(0,50)});function Pp(n,e,t,i){let s=3*n,r=3*(t-n)-s,a=1-s-r,o=3*e,c=3*(i-e)-o,l=1-o-c,u=f=>((a*f+r)*f+s)*f,h=f=>((l*f+c)*f+o)*f,d=f=>(3*a*f+2*r)*f+s;return f=>{let v=f;for(let y=0;y<8;y++){let m=u(v)-f,p=d(v);if(Math.abs(m)<1e-5||!p)break;v-=m/p}return h(ta(v,0,1))}}function Mh({lenis:n=null,tick:e,gsap:t=window.gsap,reduce:i=!1}={}){let s=document.querySelector(".wf-foot"),r=s?.querySelector(".wf-foot-scene");if(!r)return null;bh(s)&&requestAnimationFrame(()=>window.ScrollTrigger?.refresh());let a=Dp(s,{tick:e,gsap:t,reduce:i}),o=Lp(s),c=0,l=()=>{bh(s)&&window.ScrollTrigger?.refresh(),a?.recenter(),o.place()};addEventListener("resize",()=>{clearTimeout(c),c=setTimeout(l,200)}),document.fonts?.ready?.then(l);let u=r.querySelector("canvas"),h=u&&u.getContext("webgl",{antialias:!1,alpha:!1,premultipliedAlpha:!1,powerPreference:"high-performance"});if(!h)return s.classList.add("no-gl"),o.show(),null;let d=()=>window.__v8?.api,f=()=>!!(d()?.snapping||n?.isScrolling),v=window.requestIdleCallback||(N=>setTimeout(N,1)),y=(N,ae=1)=>{let ye=K=>{if(f()||K&&K.timeRemaining&&K.timeRemaining()<ae){setTimeout(()=>v(ye,{timeout:600}),120);return}N()};v(ye,{timeout:600})},m=()=>new Promise(N=>y(N,4)),p=h.getExtension("KHR_parallel_shader_compile"),T=null,I={},S=!1,b=()=>{let N=(pe,R)=>{let G=h.createShader(pe);return h.shaderSource(G,R),h.compileShader(G),G},ae=N(h.VERTEX_SHADER,Cp),ye=N(h.FRAGMENT_SHADER,Rp);T=h.createProgram(),h.attachShader(T,ae),h.attachShader(T,ye),h.linkProgram(T);let K=()=>{if(!h.getProgramParameter(T,h.LINK_STATUS))return console.warn("[footer] shader",h.getShaderInfoLog(ye)||h.getProgramInfoLog(T)),s.classList.add("no-gl"),o.show(),!1;h.useProgram(T);let pe=h.createBuffer();h.bindBuffer(h.ARRAY_BUFFER,pe),h.bufferData(h.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),h.STATIC_DRAW);let R=h.getAttribLocation(T,"p");return h.enableVertexAttribArray(R),h.vertexAttribPointer(R,2,h.FLOAT,!1,0,0),["tBg","tWheel","tSky","tStars","tNoise","uRes","uAspect","uImageAspect","uGridScale","uParallax","uRandom","uTime","uDesk","uFog","uRays","uMouse","uBox","uGradeOff"].forEach(G=>{I[G]=h.getUniformLocation(T,G)}),["tBg","tWheel","tSky","tStars","tNoise"].forEach((G,J)=>h.uniform1i(I[G],J)),h.uniform1f(I.uFog,.25),S=!0,!0};return p?new Promise(pe=>{let R=()=>h.getProgramParameter(T,p.COMPLETION_STATUS_KHR)?pe(K()):setTimeout(R,30);R()}):Promise.resolve(K())},w=[0,1,2,3,4].map(()=>h.createTexture()),A=N=>window.createImageBitmap?Promise.resolve(window.__first).then(()=>fetch(N)).then(ae=>{if(!ae.ok)throw new Error(N+" "+ae.status);return ae.blob()}).then(ae=>createImageBitmap(ae,{imageOrientation:"flipY",premultiplyAlpha:"none",colorSpaceConversion:"none"})).then(ae=>({b:ae,flipped:!0})):new Promise((ae,ye)=>{let K=new Image;K.decoding="async",K.onload=()=>K.decode?K.decode().then(()=>ae({b:K}),()=>ae({b:K})):ae({b:K}),K.onerror=ye,K.src=N}),x=(N,{b:ae,flipped:ye},K)=>{h.activeTexture(h.TEXTURE0+N),h.bindTexture(h.TEXTURE_2D,w[N]),h.pixelStorei(h.UNPACK_FLIP_Y_WEBGL,!ye),h.pixelStorei(h.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,h.RGBA,h.UNSIGNED_BYTE,ae);let pe=K?h.REPEAT:h.CLAMP_TO_EDGE;h.texParameteri(h.TEXTURE_2D,h.TEXTURE_WRAP_S,pe),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_WRAP_T,pe),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_MAG_FILTER,h.LINEAR),h.texParameteri(h.TEXTURE_2D,h.TEXTURE_MIN_FILTER,h.LINEAR),ae.close?.()},M=null,D=!1,U=null,z=!1,B=!1,L=null,P={W:0,H:0,dpr:1,mx:0,my:0,tx:0,ty:0,top:0,h:0,rand:Math.random(),t0:performance.now()},V=()=>Ti()?eo.d:eo.m,Y=()=>{let N=V();if(M===N&&(D||U))return U;M=N,D=!1;let ae=M.sfx;return L=L||Promise.all([A(lr+"stars.webp"),A(lr+"noise.webp")]),U=(S?Promise.resolve(!0):m().then(b)).then(ye=>{if(!ye)throw new Error("program");return Promise.all([A(`${lr}footer_far3${ae}.jpg`),A(`${lr}${M.wheel||`footer_wheel${ae}.png`}`),A(`${lr}footer_sky3${ae}.png`),L])}).then(async([ye,K,pe,R])=>{let G=[[0,ye],[1,K],[2,pe]];L.done||G.push([3,R[0],!0],[4,R[1],!0]);for(let[J,oe,Ee]of G){if(M!==N)return;await m(),x(J,oe,Ee)}L.done=!0,D=!0,U=null,s.classList.add("gl-ready"),o.show(),y(()=>{try{Ce(1/60,!0),h.flush()}catch{}},8)}).catch(ye=>{console.warn("[footer] textures",ye),s.classList.add("no-gl"),o.show(),U=null}),U},ue=N=>{let ae=0;for(let ye=N;ye;ye=ye.offsetParent)ae+=ye.offsetTop;return ae},q=()=>{let N=r.getBoundingClientRect();P.W=Math.max(1,Math.round(N.width)),P.H=Math.max(1,Math.round(N.height)),P.dpr=Math.min(window.devicePixelRatio||1,Ti()?1:1.5),u.width=Math.round(P.W*P.dpr),u.height=Math.round(P.H*P.dpr),P.top=ue(s),P.h=s.offsetHeight};q(),new ResizeObserver(()=>{q(),o.place(),(B||le)&&Y()}).observe(r),window.ScrollTrigger?.addEventListener("refresh",q);let le=!1,ce=!1,Xe=()=>{ce||(ce=!0,s.querySelectorAll(".wf-ph img").forEach(N=>{N.loading="eager",N.decode?.().catch(()=>{})}))},qe=()=>{le||(le=!0,y(()=>{Y(),o.load(),Xe()},4))},nt=document.documentElement;nt.classList.contains("loading")?new MutationObserver((N,ae)=>{nt.classList.contains("loading")||(ae.disconnect(),setTimeout(qe,600))}).observe(nt,{attributes:!0,attributeFilter:["class"]}):setTimeout(qe,600),new IntersectionObserver(([N])=>{B=N.isIntersecting,B&&qe()},{rootMargin:"300% 0px 300% 0px"}).observe(s),new IntersectionObserver(([N])=>{z=N.isIntersecting},{threshold:0}).observe(s),setInterval(()=>{P.rand=Math.random()},200),addEventListener("pointermove",N=>{N.pointerType!=="touch"&&(P.tx=N.clientX/innerWidth*2-1,P.ty=N.clientY/innerHeight*2-1)},{passive:!0});let me=matchMedia("(hover: none)").matches,xe=N=>{z&&(_e(N),D&&S?Ce(N):W())},X="";function W(){let N=n?n.animatedScroll:window.scrollY,ae=innerHeight,ye=Ti(),K=V(),pe=ye?P.h:P.h+ae,R=i?0:-.1+.1*ta((N+ae-P.top)/Math.max(1,pe),0,1),G=ye?1:.95*Math.min(.6/Math.max(.001,P.W/P.H),1),J=(R-K.p0-P.my*.005)*P.H/G,oe=ye?-P.mx*.005*P.W:0,Ee=`${oe.toFixed(1)}|${J.toFixed(1)}|${(P.mx*5).toFixed(1)}|${(-P.my*5).toFixed(1)}`;if(Ee===X)return;X=Ee;let Se=r.style;Se.setProperty("--fpx",oe.toFixed(1)+"px"),Se.setProperty("--fpar",J.toFixed(1)+"px"),Se.setProperty("--fgx",(P.mx*5).toFixed(1)+"px"),Se.setProperty("--fgy",(-P.my*5).toFixed(1)+"px")}function _e(N){if(me||i||!Ti()){P.mx=P.my=0,o.mouse(0,0);return}let ae=1-Math.exp(-5*Math.min(N,.1));P.mx+=(P.tx-P.mx)*ae,P.my+=(P.ty-P.my)*ae,o.mouse(P.mx,-P.my)}function Ce(N,ae=!1){let ye=n?n.animatedScroll:window.scrollY,K=innerHeight,pe=Ti()?P.h:P.h+K,R=ta((ye+K-P.top)/Math.max(1,pe),0,1);h.viewport(0,0,u.width,u.height),h.uniform2f(I.uRes,u.width,u.height),h.uniform1f(I.uAspect,P.W/P.H),h.uniform1f(I.uImageAspect,.6),h.uniform1f(I.uGridScale,52.5*(P.H/K));let G=i?0:-.1+.1*R;h.uniform1f(I.uParallax,G),h.uniform1f(I.uGradeOff,(G-M.p0)/(Ti()?1:.95*Math.min(.6/Math.max(.001,P.W/P.H),1))),h.uniform1f(I.uRandom,i?.5:P.rand),h.uniform1f(I.uTime,i?0:(performance.now()-P.t0)/1e3),h.uniform1f(I.uDesk,Ti()?1:0),h.uniform1f(I.uRays,1),h.uniform2f(I.uMouse,P.mx,-P.my),h.uniform4f(I.uBox,...M.box);let J=P.top-ye,oe=ta(-J,0,P.H),Ee=ta(K-J,0,P.H);if(Ee-oe<1&&!ae)return;let Se=ae?0:Math.max(0,Math.floor((P.H-Ee)*P.dpr)-2),Ve=ae?1:Math.min(u.height,Math.ceil((P.H-oe)*P.dpr)+2);h.enable(h.SCISSOR_TEST),h.scissor(0,Se,u.width,Ve-Se),h.drawArrays(h.TRIANGLES,0,3)}if(e)e(xe);else{let N=performance.now(),ae=ye=>{xe(Math.min(.1,(ye-N)/1e3)),N=ye,requestAnimationFrame(ae)};requestAnimationFrame(ae)}return u.addEventListener("webglcontextlost",N=>{N.preventDefault(),D=!1,s.classList.add("no-gl"),o.show()}),{measure:q}}function Lp(n){let e=n.querySelector(".wf-foot-fg");e||(e=document.createElement("img"),e.className="wf-foot-fg",e.alt="",e.setAttribute("aria-hidden","true"),e.hidden=!0,n.querySelector(".wf-foot-scene")?.after(e)),e.decoding="async";let t=null,i=!1,s=!1,r="",a=()=>{let c=Sh()?eo.m:eo.d,l=e.style;l.position="absolute",l.left="0",l.right="0",l.width="100%",l.height="auto",l.zIndex="1",l.pointerEvents="none",l.maxWidth="none",l.objectFit="cover",Sh()?(l.top="0",l.bottom="auto",l.aspectRatio="1440 / 2400",l.transformOrigin="50% 50%",l.transform=""):(l.top="auto",l.bottom="0",l.transformOrigin="50% 50%",l.aspectRatio=Ti()?"2880 / 2632":"3 / 5",Ti()||(l.transform="")),t!==c&&(t=c,(i||s)&&o())},o=()=>{let c=lr+t.fg;e.src.endsWith(c)||(e.src=c,e.decode?.().catch(()=>{}))};return a(),{place:a,load(){s=!0,o(),i=!0},show(){i||this.load(),e.hidden=!1},mouse(c,l){if(!Ti())return;let u=`translate(${(c*5).toFixed(2)}px, ${(l*5).toFixed(2)}px) scale(1.05)`;u!==r&&(e.style.transform=u,r=u)}}}function bh(n){let e=n.querySelector(".wf-foot-lock"),t=n.querySelector(".wf-foot-base"),i=n.querySelector(".wf-foot-phones");if(!e||!t)return!1;let s=n.style.height;if(n.style.height="",e.style.top="",i&&(i.style.top="",i.style.height="",i.style.width=""),Ti())return n.style.height!==s;let r=innerHeight,a=48,o=n.offsetHeight,c=e.offsetHeight,l=t.offsetHeight,u=e.offsetTop/Math.max(1,o),h=Math.ceil(Math.max(o,r,(c+a+l)/Math.max(.2,1-u)));return h!==o&&(n.style.height=h+"px"),n.style.height!==s}function Dp(n,{tick:e,gsap:t,reduce:i}){let s=n.querySelector(".wf-foot-phones");if(!s||!t)return;let r=s.querySelector(".wf-ph-track"),a=[...r.children],o=a.length;if(o<2)return;let c=a[o-1].cloneNode(!0),l=[a[0].cloneNode(!0),a[1].cloneNode(!0)];[c,...l].forEach(A=>A.setAttribute("aria-hidden","true")),r.prepend(c),l.forEach(A=>r.append(A));let u=[...r.children],h=1.5,d=.95,f=A=>(s.clientHeight-u[A].offsetHeight)/2-u[A].offsetTop,v=1,y=null,m=!1,p=A=>u.forEach((x,M)=>x.classList.toggle("is-cur",M===A)),T=()=>{p(v),t.set(r,{y:f(v)}),u.forEach((A,x)=>t.set(A,{filter:x===v?"blur(0px)":`blur(${h}px)`,scale:x===v?1:d}))},I=()=>{let A=v,x=v+1;u[A].classList.remove("is-cur"),u[x].classList.add("is-cur"),y=t.timeline({onComplete:()=>{v=x,v>o&&(v=1,u[1].style.setProperty("--pd","-0.6s"),T()),y=t.delayedCall(1.8,()=>m?I():y=null)}}),y.to(u[A],{filter:`blur(${h}px)`,scale:d,duration:.6,ease:"expo.out"},0).to(u[x],{filter:"blur(0px)",scale:1,duration:.6,ease:"expo.out"},0).to(r,{y:f(x),duration:.6,ease:Ip},0)},S=()=>{!y&&!i&&(y=t.delayedCall(1.8,I))},b=()=>{T(),m&&S()};document.readyState==="complete"?b():addEventListener("load",b),new IntersectionObserver(([A])=>{m=A.isIntersecting,m?y&&y.paused()?y.resume():S():y&&y.pause()},{threshold:0}).observe(s);let w=()=>{(!y||!y.isActive?.())&&t.set(r,{y:f(v)})};return addEventListener("resize",w),{recenter:w}}var Cp,Rp,ta,Ip,lr,eo,Sh,Ti,wh=jr(()=>{Cp="attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}",Rp=`precision highp float;
#define RAY_STEPS 48
#define WHEEL_SAMPLES 16
uniform sampler2D tBg,tWheel,tSky,tStars,tNoise;
uniform vec2 uRes;
uniform float uAspect,uImageAspect,uGridScale,uParallax,uRandom,uTime,uDesk,uFog,uRays,uGradeOff;
uniform vec2 uMouse;
uniform vec4 uBox;
const vec2 DOTS=vec2(.1,.15);
// LED rows over the footer height. fix4 (white lane, G09): phones 300 (cells ~4.8 css px at 390x1435, ref's phone
// pin pitch is ~4.4-4.8 px); at 150 the 9.6 px cells turned the phone ring into one block. Desktop stays 150.
#define PF (uDesk>.5?150.:300.)
vec2 zoomAt(vec2 uv,float z,vec2 p){return uv*z+(1.-z)*p;}
vec2 coverFit(vec2 uv,float sa,float ia){float r=sa/ia;vec2 s=vec2(min(r,1.),min(1./r,1.));return uv*s+(1.-s)*.5;}
// footer-rect uv (y up) -> plate uv: desktop 1:1, phones ref's cover/zoom; plus scroll parallax and mouse
vec2 mapUv(vec2 v){
  vec2 u=uDesk>.5?v:coverFit(zoomAt(v,.95,vec2(.5,1.)),uAspect,uImageAspect);
  u.y+=uParallax+uMouse.y*.005; u.x+=uMouse.x*.005;
  return u;
}
// one LED-grid look-up of the wheel: square cells (PF rows) laid out in footer-rect space (so they stay square on phones,
// where the plate is cover-fitted), a dark pin dot in each cell's centre; channel k is read shift*k further right, by a
// per-row random amount re-rolled every 200 ms, so the glow tears into colour. Phones read the cell centre (their ring is
// thin next to the cells), desktop the cell corner like ref's pixelPass.
vec4 ledSample(vec2 uv,float shift){
  vec2 grid=vec2(PF*uAspect,PF);
  float row=floor(uv.y*PF)/(PF/16.)+uRandom;
  float n=texture2D(tNoise,vec2(0.,row)).r; n=n*n*2.;
  vec4 o=vec4(0.);
  for(int k=0;k<3;k++){
    vec2 u=uv+vec2(shift*float(k)*n,0.);
    vec2 cell=uDesk>.5?floor(u*grid)/grid:mapUv((floor(u*grid)+.5)/grid);
    float pin=smoothstep(DOTS.x,DOTS.y,length(fract(u*grid)-.5)*2.);
    vec4 t=texture2D(tWheel,cell);
    if(k==0){o.r=t.r*pin;o.a=t.a*pin;}else if(k==1){o.g=t.g*pin;}else{o.b=t.b*pin;}
  }
  return o;
}
vec4 ledWheel(vec2 uv){
  vec4 acc=vec4(0.);
  for(int i=0;i<WHEEL_SAMPLES;i++){
    float w=(float(WHEEL_SAMPLES)-float(i))/float(WHEEL_SAMPLES);
    acc+=ledSample(uv,.0005*(float(i)+1.))*w;
  }
  vec2 grid=vec2(PF*uAspect,PF);
  float pin=smoothstep(DOTS.x,DOTS.y,length(fract(uv*grid)-.5)*2.);
  acc/=float(WHEEL_SAMPLES);
  acc.rgb*=mix(.25,1.,pin);
  return acc;
}
// light shafts: march 40% of the way toward a light above the wheel, collecting the wheel's alpha. Nearly flat weights
// (fix 3): the far end of the march must still count, or the shafts die a few px under the ring (ref's reach
// footer y ~415-650, distinct beams under the two sides of the ring)
float shafts(vec2 uv,vec2 m){
  vec2 L=m*.5+.5; vec2 d=(L-uv)*.4;
  vec2 e=uv+d;
  if(max(uv.y,e.y)<uBox.y||min(uv.y,e.y)>uBox.w||max(uv.x,e.x)<uBox.x||min(uv.x,e.x)>uBox.z)return 0.;
  vec2 st=d/float(RAY_STEPS); vec2 q=uv; float acc=0.;
  for(int i=0;i<RAY_STEPS;i++){
    q+=st;
    acc+=texture2D(tWheel,clamp(q,0.,1.)).a*.035*(1.-.35*float(i)/float(RAY_STEPS-1));
  }
  return min(acc,1.);
}
void main(){
  vec2 vUv=gl_FragCoord.xy/uRes;
  vec2 uv=mapUv(vUv);
  vec4 c=vec4(texture2D(tBg,clamp(uv,0.,1.)).rgb,1.);
  // fix3 (white lane): ref's sky is darker along the footer's top edge, most on the left under the headline (phone rows
  // 70-200 css px: theirs ~134, ours was ~205; desktop rows 80-200, left third: 138 vs 210). Graded on the plate only (the
  // wheel, shafts, stars and fog come after). It rides with the plate (uGradeOff = the plate's scroll shift in footer uv
  // from the framing the CSS fallback still was rendered at), so the fallback still, which carries it, matches at any scroll.
  float topW=smoothstep(.80,.88,vUv.y+uGradeOff);
  float leftW=uDesk>.5?1.-smoothstep(.1,.42,vUv.x):1.-.45*smoothstep(.3,.9,vUv.x);
  c.rgb*=1.-.36*topW*leftW;
  // wheel (only near its box; the colour smear reaches .032 to the left); phones: LED grid in footer-rect space
  if(uv.x>uBox.x-.04&&uv.x<uBox.z+.01&&uv.y>uBox.y-.01&&uv.y<uBox.w+.01)c+=ledWheel(uDesk>.5?uv:vUv);
  float r=shafts(uv,vec2(uMouse.x*.2,.9-uMouse.y*.1))*uRays;
  c=vec4(r)+c*(1.-r);
  // star streaks in the sky, two layers drifting at full and half speed
  float sky=texture2D(tSky,clamp(uv,0.,1.)).r;
  vec2 s0=vec2(uv.x*1.75+uTime*.3,uv.y*1.75+uTime*.11), s1=vec2(uv.x*1.75+uTime*.15,uv.y*1.75+uTime*.055);
  float stars=max(texture2D(tStars,s0).a,texture2D(tStars,s1).a)*.5*sky;
  c=vec4(stars)+c*(1.-stars);
  // right-hand corners sink toward deep teal (screen space, pinned through the parallax)
  float tr=smoothstep(.5,1.,vUv.x)*smoothstep(.66,1.,vUv.y), br=smoothstep(.5,1.,vUv.x)*smoothstep(1.,0.,vUv.y);
  c.rgb=mix(c.rgb,vec3(0.,.05,.075),.75*max(tr,br));
  // fog: two chained noise reads, stronger toward the edges
  vec2 n0=vUv*.5; n0.x*=uAspect; n0-=uTime*.1;
  float a0=texture2D(tNoise,n0).r;
  vec2 n1=vUv*.5; n1.x*=uAspect; n1*=a0;
  vec2 fu=vUv*2.-1.; fu.x*=uAspect;
  float fog=smoothstep(.25,1.,texture2D(tNoise,n1).g)*uFog*min(length(fu*.5),1.);
  c=vec4(fog)+c*(1.-fog);
  // drifting dot lattice: one soft round dot per cell (cells keep their px size: vh/52.5)
  vec2 g=vec2(uv.x*uGridScale*uAspect,(uv.y-uTime*.005)*uGridScale);
  float cellPx=uRes.y/uGridScale;
  float dd=length(fract(g)-.5)*cellPx;
  float gd=(1.-smoothstep(.037*cellPx-.5,.037*cellPx+.5,dd))*.125;
  c=vec4(gd)+c*(1.-gd);
  gl_FragColor=vec4(c.rgb,1.);
}`,ta=(n,e,t)=>Math.min(t,Math.max(e,n));Ip=Pp(.8,-.4,.5,1),lr="assets/footer/",eo={d:{sfx:"_d",fg:"footer_fg3_d.webp",fgAspect:2880/2632,box:[.396,.662,.603,.882],p0:-.1+.1*(900/1340)},m:{sfx:"_m",fg:"footer_fg3_m.webp",fgAspect:1440/2400,wheel:"footer_wheel_m_v2.png",box:[.427,.758,.572,.823],p0:-.1+.1*(844/2279)}},Sh=()=>innerWidth<=767,Ti=()=>innerWidth>=992});function ia({lenis:n=null,scroll:e=null}={}){if(Eh)return Gi;Eh=!0;let t=window.gsap,i=matchMedia("(prefers-reduced-motion: reduce)").matches;document.documentElement.classList.add("wf-js"),Gi={lenis:n||e?.lenis||null,scroll:e,gsap:t,reduce:i,tick:Np(t)},window.__white=Gi,Th(),addEventListener("resize",Th);let s=(r,a)=>{try{a(Gi)}catch(o){console.warn(`[white] ${r} failed`,o)}};return s("splits",Op),s("inview",Bp),s("moves",Yp),s("header",kp),s("menu",zp),s("parallax",Hp),s("croScreen",Xp),s("croPhone",Gp),s("preDecode",Wp),s("carousel",qp),s("counters",$p),s("rail",Zp),s("faq",Kp),s("footer",Jp),s("anchors",jp),Gi}function Np(n){let e=new Set,t=cr(),i=()=>{let s=cr(),r=Math.min(.1,(s-t)/1e3);t=s,e.forEach(a=>a(r,s))};if(n?.ticker)n.ticker.add(i);else{let s=()=>{i(),requestAnimationFrame(s)};requestAnimationFrame(s)}return s=>(e.add(s),()=>e.delete(s))}function Th(){let n=!matchMedia("(any-pointer: coarse)").matches&&innerWidth>=768,e=document.documentElement;e.classList.toggle("desktop",n),e.classList.toggle("mobile",!n)}function Fp(){return Gi.lenis?Gi.lenis.animatedScroll:window.scrollY}function to(n){let e=0;if(typeof n=="number")e=n;else if(n&&n!=="#top"){let t=typeof n=="string"?document.querySelector(n):n;if(!t)return;e=t.getBoundingClientRect().top+window.scrollY}Gi.lenis?Gi.lenis.scrollTo(e,{immediate:!0,force:!0}):window.scrollTo(0,e)}function Ah(n){if(n.__split)return n.__split;let e=n.textContent.replace(/\s+/g," ").trim(),t=document.createDocumentFragment(),i=document.createElement("span");i.setAttribute("aria-hidden","true");let s=0,r=(a,o)=>{a.split(/(\s+)/).forEach(c=>{if(!c)return;if(/^\s+$/.test(c)){o.appendChild(document.createTextNode(" "));return}let l=document.createElement("span");l.className="tr-w";for(let u of c){let h=document.createElement("span");h.className="tr-c",h.textContent=u,h.style.setProperty("--i",s++),l.appendChild(h)}o.appendChild(l)})};return[...n.childNodes].forEach(a=>{a.nodeType===3?r(a.textContent,i):a.nodeName==="BR"?i.appendChild(document.createElement("br")):r(a.textContent,i)}),t.appendChild(i),t.appendChild(no(e)),n.textContent="",n.appendChild(t),n.__split=s,s}function Rh(n,{line:e="tr-l",inner:t="tr-li"}={}){let i=n.__text||(n.__text=n.textContent.replace(/\s+/g," ").trim());n.textContent="";let s=i.split(" ").map(c=>{let l=document.createElement("span");return l.textContent=c,l.style.display="inline-block",l});s.forEach((c,l)=>{n.appendChild(c),l<s.length-1&&n.appendChild(document.createTextNode(" "))});let r=[],a=null;s.forEach(c=>{let l=c.offsetTop;(a===null||Math.abs(l-a)>2)&&(r.push([]),a=l),r[r.length-1].push(c.textContent)}),n.textContent="";let o=document.createElement("span");return o.setAttribute("aria-hidden","true"),r.forEach((c,l)=>{let u=document.createElement("span");u.className=e;let h=document.createElement("span");h.className=t,h.style.setProperty("--i",l),h.textContent=c.join(" "),u.appendChild(h),o.appendChild(u)}),n.appendChild(o),n.appendChild(no(i)),r.length}function dc(n){if(n.__roll)return;n.__roll=!0;let e=n.textContent.replace(/\s+/g," ").trim(),t=n.closest("a,button");t&&!t.hasAttribute("aria-label")&&t.setAttribute("aria-label",e),n.textContent="",n.setAttribute("aria-hidden","true");let i=e.split(" "),s=0;if(n.dataset.roll==="words"){i.forEach((r,a)=>{let o=document.createElement("span");o.className="rc rw",o.dataset.c=r,o.textContent=r,o.style.setProperty("--i",a),n.appendChild(o),a<i.length-1&&n.appendChild(document.createTextNode(" "))});return}i.forEach((r,a)=>{let o=document.createElement("span");o.className="rw";for(let c of r){let l=document.createElement("span");l.className="rc",l.dataset.c=c,l.textContent=c,l.style.setProperty("--i",s++),o.appendChild(l)}n.appendChild(o),a<i.length-1&&n.appendChild(document.createTextNode(" "))})}function Op({reduce:n}){if(fn(".btn-text[data-roll]").forEach(dc),n)return;fn("[data-reveal=chars]").forEach(s=>{let r=Ah(s);s.style.setProperty("--tr-stagger",`${Vi(260/Math.max(1,r),8,30).toFixed(2)}ms`),s.style.setProperty("--tr-blur",`${(parseFloat(getComputedStyle(s).fontSize)*.08).toFixed(2)}px`)});let e=fn("[data-reveal=lines]"),t=()=>e.forEach(s=>{Rh(s),s.style.setProperty("--tr-blur",`${(parseFloat(getComputedStyle(s).fontSize)*.08).toFixed(2)}px`)});t(),document.fonts?.ready.then(t);let i=innerWidth;addEventListener("resize",()=>{innerWidth!==i&&(i=innerWidth,t())}),fn("[data-tr-menu]").forEach(s=>{let r=Ah(s);s.style.setProperty("--tr-stagger",`${Vi(260/Math.max(1,r),8,30).toFixed(2)}ms`)})}function fc(n,e,t=0){let i=Ch.get(t);i||(i=new IntersectionObserver(s=>s.forEach(r=>{r.isIntersecting&&(i.unobserve(r.target),(hc.get(r.target)||[]).forEach(a=>a()))}),{rootMargin:`0px 0px -${t}% 0px`,threshold:0}),Ch.set(t,i)),hc.set(n,[...hc.get(n)||[],e]),i.observe(n)}function Bp({reduce:n}){fn("[data-scroll]").filter(t=>t.closest(".wf-sec,.wf-foot")).forEach(t=>{if(n){t.classList.add("is-inview");return}fc(t,()=>t.classList.add("is-inview"),parseFloat(t.dataset.scrollOffset)||0)})}function kp(n){let e=ct("#nav");if(!e)return;let t=ct(".pill-logo",e),i=ct(".pill-menu",e),s=ct(".pill-solid",e),r=ct(".notice",e);if(t&&!ct(".wf-logo-g",t)){let M=document.createElement("span");for(M.className="wf-logo-g",M.setAttribute("aria-hidden","true");t.firstChild;)M.appendChild(t.firstChild);t.appendChild(M)}if(s&&!ct(".btn-text",s)){let M=document.createElement("span");M.className="btn-text",M.dataset.roll="chars",M.textContent=s.textContent.trim(),s.textContent="",s.appendChild(M),dc(M)}if(i&&!ct(".mt-lab",i)){let M=D=>[...D].map((U,z)=>`<span class="mc" data-c="${U}" style="--i:${z}">${U}</span>`).join("");i.innerHTML=`<span class="mt-ico" aria-hidden="true"><span class="mt-burger"><span class="mt-line"></span><span class="mt-line"></span></span><span class="mt-x"><span class="mt-line"></span><span class="mt-line"></span></span></span><span class="mt-lab" aria-hidden="true"><span class="mt-l1">${M("Menu")}</span><span class="mt-l2">${M("Close")}</span></span>`,i.setAttribute("aria-expanded","false"),i.setAttribute("aria-controls","navMenu")}if(r&&!ct(".wf-nc-w",r)){let M=ct(".notice-icon",r),D=[...r.childNodes].filter(B=>B.nodeType===3).map(B=>B.textContent).join("").trim();[...r.childNodes].filter(B=>B.nodeType===3).forEach(B=>B.remove());let U=document.createElement("span");U.className="wf-nc-w";let z=0;for(let B of D){let L=document.createElement("span");L.className="nc",L.textContent=B===" "?"\xA0":B,L.style.setProperty("--ci",z++),U.appendChild(L)}U.setAttribute("aria-hidden","true"),r.appendChild(U),r.appendChild(no(D)),M&&M.setAttribute("aria-hidden","true")}let a=ct("#system"),o=ct(".wf-foot")||ct(".footer"),c=-1,l=null,u=0,h="",d="",f=M=>{let D=0;for(let U=M;U;U=U.offsetParent)D+=U.offsetTop;return D},v=[],y=0,m=0,p=1/0,T=1/0,I=()=>{v=[...document.querySelectorAll("main [data-theme], footer[data-theme]")].filter(D=>!D.parentElement.closest("[data-theme]")).map(D=>{let U=f(D);return[U,U+D.offsetHeight,D.dataset.theme]}),y=e.offsetHeight;let M=e.querySelector(".pill");m=M?M.offsetTop+M.offsetHeight/2:y/2,p=a?f(a):1/0,T=o?f(o):1/0};I(),window.ScrollTrigger?.addEventListener("refresh",I),document.fonts?.ready.then(I);let S=()=>{let M=(n.lenis?n.lenis.animatedScroll:window.scrollY)+m,D=v.find(L=>M>=L[0]&&M<L[1]),U=D?D[2]:"dark",B=document.documentElement.classList.contains("has-modal-menu-open")?"dark":U;B!==h&&(h=B,e.dataset.theme=B,e.classList.toggle("is-light",B==="light")),U!==d&&(d=U,s?.classList.toggle("is-on-light",U==="light"),r&&(r.dataset.theme=U))},b=null,w=null,A=()=>{if(!r)return;let M=n.lenis?n.lenis.animatedScroll:window.scrollY,D=p,U=T-M,z=Up(),B=z&&M>=D+4.5*innerHeight&&U>0,L=z&&U<=0;B!==b&&(b=B,r.setAttribute("aria-hidden",B?"true":"false")),L!==w&&(w=L,r.toggleAttribute("data-pill",L))},x=()=>n.lenis?n.lenis.animatedScroll:window.scrollY;n.tick(()=>{let M=x(),D=document.documentElement.classList.contains("has-modal-menu-open");u++,u%60===0&&I(),(M!==c||D!==l||u%30===0)&&(c=M,l=D,S(),A())}),addEventListener("resize",()=>{I(),S(),A()}),n.sampleHeader=()=>{S(),A()},t?.addEventListener("click",M=>{if(!(t.getAttribute("href")||"").startsWith("#"))return;M.preventDefault(),document.documentElement.classList.contains("has-modal-menu-open")&&n.closeMenu?.();let D=n.scroll?.segments?.[0];n.lenis&&(!D||window.scrollY<=D.start)?n.lenis.scrollTo(0,{duration:.8}):to(0)})}function zp(n){let e=document.documentElement,t=ct("#nav"),i=t&&ct(".pill-menu",t),s=ct("#navMenu");if(!i||!s)return;let r=!1,a=!1,o=()=>fn("a",s),c=()=>{let h=i.getBoundingClientRect(),d=(ct(".nav-l",t)||i).getBoundingClientRect();s.style.setProperty("--menu-top",`${Math.round(h.bottom+8)}px`),s.style.setProperty("--menu-left",`${Math.round(d.left)}px`)},l=()=>{if(!n.lenis)return;let h=()=>{if(r){if(n.scroll?.snapping){setTimeout(h,80);return}n.lenis.stop(),a=!0}};h()};function u(h,{restoreFocus:d=!1}={}){h!==r&&(r=h,h&&c(),e.classList.toggle("has-modal-open",h),e.classList.toggle("has-modal-menu-open",h),s.classList.toggle("is-active",h),s.inert=!h,i.setAttribute("aria-label",h?"Close menu":"Menu"),setTimeout(()=>i.setAttribute("aria-expanded",String(h)),h?148:109),h?l():a&&(a=!1,n.lenis?.start()),!h&&d&&i.focus(),n.sampleHeader?.())}n.closeMenu=()=>u(!1),i.addEventListener("click",()=>u(!r)),addEventListener("keydown",h=>{if(r){if(h.key==="Escape"){h.preventDefault(),u(!1,{restoreFocus:!0});return}if(h.key==="Tab"){let d=[i,...o()],f=d.indexOf(document.activeElement);h.shiftKey&&f<=0?(h.preventDefault(),d[d.length-1].focus()):(!h.shiftKey&&f===d.length-1||f<0)&&(h.preventDefault(),d[0].focus())}}}),document.addEventListener("pointerdown",h=>{r&&!s.contains(h.target)&&!i.contains(h.target)&&u(!1)}),s.addEventListener("click",h=>{let d=h.target.closest("a");if(!d)return;let f=d.getAttribute("href")||"";f.startsWith("#")?(h.preventDefault(),u(!1),setTimeout(()=>to(f),320)):u(!1)}),addEventListener("resize",()=>{r&&c()})}function Hp(n){let e=fn("[data-scroll-speed]").filter(a=>a.closest(".wf-sec"));if(!e.length)return;let t=e.map(a=>({el:a,speed:parseFloat(a.dataset.scrollSpeed)||0,last:null,top:0,h:0})),i=a=>{let o=0;for(let c=a;c;c=c.offsetParent)o+=c.offsetTop;return o},s=()=>t.forEach(a=>{a.top=i(a.el.parentElement)+a.el.offsetTop,a.h=a.el.offsetHeight});s(),addEventListener("resize",s),window.ScrollTrigger?.addEventListener("refresh",s);let r=0;n.tick(()=>{let a=!n.reduce&&n.lenis&&innerWidth>=768,o=innerHeight;++r%60===0&&s();let c=n.lenis?n.lenis.animatedScroll:window.scrollY;t.forEach(l=>{let u=0;if(a){let d=l.top-c,f=l.h;if(d>o||d+f<0)return;u=-(Vi((o-d)/(o+f),0,1)*2-1)*o*l.speed}let h=u.toFixed(2);h!==l.last&&(l.last=h,l.el.style.transform=`translate3d(0,${h}px,0)`)})})}function Vp(n,e,t){let[[i,s],[r,a],[o,c],[l,u]]=t,h=i-r+o-l,d=s-a+c-u,f,v,y,m,p=0,T=0,I=i,S=s;if(Math.abs(h)<1e-9&&Math.abs(d)<1e-9)f=r-i,v=l-i,y=a-s,m=u-s;else{let w=r-o,A=l-o,x=a-c,M=u-c,D=w*M-A*x;p=(h*M-A*d)/D,T=(w*d-h*x)/D,f=r-i+p*r,v=l-i+T*l,y=a-s+p*a,m=u-s+T*u}return`matrix3d(${[f/n,y/n,0,p/n,v/e,m/e,0,T/e,0,0,1,0,I,S,0,1].map(w=>+w.toFixed(7)).join(",")})`}function Gp(n){let e=ct(".wf-phone-scr"),t=ct(".wf-pop-in[data-state]");if(!e)return;let i=ct(".wf-st-cart b",e),s=a=>{e.dataset.state=a,t&&(t.dataset.state=a),i&&(i.textContent=a==="after"?"4":"1")};if(n.reduce){s("after");return}let r=0;fc(e.closest(".wf-panel")||e,()=>{r=setTimeout(()=>s("after"),1400)},25),fn(".wf-pop-tabs span",t||document).forEach(a=>a.addEventListener("click",o=>{o.stopPropagation(),clearTimeout(r),s(a.classList.contains("is-a")?"after":"before")}))}function Wp(n){let e=fn(".wf-sec img, .wf-foot-phones img").filter(r=>r.getAttribute("src")||r.dataset.later);if(!e.length)return;let t=window.requestIdleCallback||(r=>setTimeout(()=>r({timeRemaining:()=>8}),120)),i=()=>t(()=>{if(document.documentElement.classList.contains("loading")){setTimeout(i,400);return}if(Ph()||n.lenis?.isScrolling){setTimeout(i,250);return}let r=e.shift();r&&(r.loading==="lazy"&&(r.loading="eager"),(r.decode?r.decode():Promise.resolve()).catch(()=>{}).then(()=>setTimeout(i,60)))},{timeout:1500}),s=document.documentElement;if(!s.classList.contains("loading"))setTimeout(i,800);else{let r=new MutationObserver(()=>{s.classList.contains("loading")||(r.disconnect(),setTimeout(i,1200))});r.observe(s,{attributes:!0,attributeFilter:["class"]})}}function Xp(){let n=ct(".wf-plate[data-screen]"),e=n&&ct(".wf-screen",n);e&&fetch(n.dataset.screen).then(t=>t.json()).then(t=>{let[i,s]=t.size,r=()=>{let a=n.clientWidth,o=n.clientHeight;if(!a)return;let c=Math.max(a/i,o/s),l=(a-i*c)/2,u=(o-s*c)/2,h=t.corners.map(([d,f])=>[l+d*c,u+f*c]);e.style.transform=Vp(e.offsetWidth,e.offsetHeight,h),e.classList.add("is-mapped")};r(),new ResizeObserver(r).observe(n)}).catch(t=>console.warn("[white] cro screen",t))}function qp(n){let e=ct("[data-car]");if(!e||n.reduce||!n.gsap)return;let{gsap:t}=n,i=ct(".wf-car-view",e),s=ct(".wf-car-track",e),r=[...s.children].filter(R=>R.classList.contains("wf-card")),a=r.length,o=fn(".wf-car-dots i",e),c=ct("[data-live]",e),l=ct(".wf-car-island",e),u={pos:2,spread:0,spreadV:0,speedS:0,shift:0},h=[],d=a,f={},v=0,y=-1,m=null,p=!1,T=!1,I=!1,S=new Array(a).fill(0),b=new Array(a).fill(!1),w=null,A=!1;function x(){v=i.clientWidth;let R=innerWidth<768;if(R){let J=Math.min(343,innerWidth-47);f={openW:J,closedW:J,openH:567,closedH:567,gap:8,mobile:R}}else f={openW:Math.min(790,innerWidth-112),closedW:343,openH:648,closedH:580,gap:12,mobile:R};f.step=f.closedW+f.gap,f.delta=f.openW-f.closedW,f.travel=f.step+f.delta/2,f.desktop=innerWidth>=992,R||e.style.setProperty("--mwO",`${Math.max(200,f.openW-12-28-317)}px`);let G=1;for(;G<6&&a*G/2*f.step+f.delta/2-.45*f.closedW<v/2+40;)G++;(a*G!==d||!h.length)&&D(G)}function M(R){let{el:G}=R;if(R.media=ct(".wf-card-media",G),R.heads=fn(".wf-card-head .wf-t",G),R.caps=fn(".wf-card-cap .wf-t",G),R.details=fn("[data-detail]",G),R.ctl=ct("[data-ctl]",G),R.info=ct(".wf-card-info",G),R.video=ct("video",G),R.src=G.dataset.video||"",R.video){let J=R.video,oe=ct(".wf-vplay",G),Ee=ct(".wf-vmute",G),Se=ct(".wf-seek",G);if(J.poster&&!ct(".wf-card-poster",G)){let C=document.createElement("img");C.className="wf-card-poster",C.alt="",C.decoding="async",C.src=J.poster,J.before(C)}t.set(J,{opacity:0}),J.addEventListener("playing",()=>t.to(J,{opacity:1,duration:.5,ease:"power2.out",overwrite:"auto"})),R.fill=ct(".wf-seek-fill",G),J.addEventListener("play",()=>{oe.classList.add("is-active"),oe.setAttribute("aria-label","Pause video")}),J.addEventListener("pause",()=>{oe.classList.remove("is-active"),oe.setAttribute("aria-label","Play video")}),J.addEventListener("ended",()=>{J.currentTime=0,S[R.story]=0,h[y]===R&&p&&!nt?q():h[y]===R&&J.play().catch(()=>{})}),oe.addEventListener("click",C=>{C.stopPropagation(),X(R)}),Ee.addEventListener("click",C=>{C.stopPropagation(),W(R,!J.muted)});let Ve=C=>{let Ye=Se.getBoundingClientRect();J.duration&&(J.currentTime=Vi((C-Ye.left)/Ye.width,0,1)*J.duration)};Se.addEventListener("pointerdown",C=>{C.stopPropagation(),Se.setPointerCapture(C.pointerId),Ve(C.clientX),Se.__drag=!0}),Se.addEventListener("pointermove",C=>{Se.__drag&&Ve(C.clientX)}),Se.addEventListener("pointerup",()=>{Se.__drag=!1}),Se.addEventListener("keydown",C=>{let Ye={ArrowLeft:-5,ArrowDown:-5,ArrowRight:5,ArrowUp:5}[C.key];Ye?(C.preventDefault(),C.stopPropagation(),J.currentTime=Vi(J.currentTime+Ye,0,J.duration||0)):C.key==="Home"?(C.preventDefault(),J.currentTime=0):C.key==="End"&&(C.preventDefault(),J.currentTime=Math.max(0,(J.duration||0)-.1))})}ct("[data-watch]",G)?.addEventListener("click",J=>{J.stopPropagation(),R.video&&(b[R.story]=!1,xe(R),R.video.currentTime=0,W(R,!1),R.video.play().catch(()=>{}))}),G.addEventListener("click",J=>{if(A)return;let oe=h.indexOf(R);if(oe!==y){let Ee=U(oe-u.pos);ue(Math.round(u.pos+Ee));return}R.video&&J.target.closest(".wf-card-media")&&!J.target.closest("[data-ctl]")&&X(R)})}function D(R){s.querySelectorAll(".wf-card[data-clone]").forEach(J=>J.remove()),h=r.map((J,oe)=>J.__o||(J.__o={el:J,story:oe}));for(let J=1;J<R;J++)r.forEach((oe,Ee)=>{let Se=oe.cloneNode(!0);Se.dataset.clone="",Se.setAttribute("aria-hidden","true"),Se.querySelectorAll("[id]").forEach(Ve=>Ve.removeAttribute("id")),s.appendChild(Se),h.push({el:Se,story:Ee})});d=h.length,h.forEach(J=>{J.introX=J.introX||0,J.last={},J.media||M(J)});let G=na(Math.round(u.pos),d);y=-1,Y(G,0,{instant:!0})}let U=R=>(R=na(R+d/2,d)-d/2,R),z=u.pos;function B(R){let G=v/2,J=R>0?(u.pos-z)*f.travel/R:0;if(z=u.pos,f.desktop){let Ve=Math.abs(J)/v;u.speedS+=(Ve-u.speedS)*(1-Math.exp(-12*R)),u.shift+=(-J/v-u.shift)*(1-Math.exp(-8*R));let C=Vi(u.speedS*.03,0,.2),Ye=R,Be=1/120;for(;Ye>0;){let E=Math.min(Be,Ye),g=85*(C-u.spread)-30*u.spreadV;u.spreadV+=g*E,u.spread+=u.spreadV*E,Ye-=E}Math.abs(u.spread)<5e-4&&Math.abs(u.spreadV)<5e-4&&C===0&&(u.spread=0,u.spreadV=0)}else u.spread=0,u.shift=0;let oe=h.map((Ve,C)=>{let Ye=U(C-u.pos),Be=Math.abs(Ye),E=(f.mobile,Math.max(0,1-Be)),g=Ye*f.step+Math.sign(Ye)*Math.min(1,Be)*f.delta/2,k=f.mobile?f.closedW:f.closedW+f.delta*E,j=f.mobile?f.closedH:f.closedH+(f.openH-f.closedH)*E,se=f.desktop?1-.1*Vi((Math.abs(g)-(f.openW/2+f.gap+f.closedW/2))/f.step,0,1):1;return{o:Ve,d:Ye,p:E,X:g,w:k,h:j,s:se}});for(let Ve of[1,-1]){let C=oe.filter(Be=>Math.sign(Be.X)===Ve).sort((Be,E)=>Math.abs(Be.X)-Math.abs(E.X)),Ye=0;C.forEach(Be=>{let E=Be.w*(1-Be.s);Be.X-=Ve*(Ye+E/2),Ye+=E})}let Ee=new Array(a).fill(0);oe.forEach(Ve=>{let{o:C}=Ve,Ye=Ve.X+Ve.X*u.spread,Be=G+Ye-Ve.w/2+(C.introX||0),E=(f.openH-Ve.h)/2,g=C.last,k=Ve.w.toFixed(1),j=Ve.h.toFixed(1);g.w!==k&&(g.w=k,C.el.style.width=`${k}px`),g.h!==j&&(g.h=j,C.el.style.height=`${j}px`);let se=`translate3d(${Be.toFixed(2)}px,${E.toFixed(2)}px,0) scale(${Ve.s.toFixed(4)})`;g.tf!==se&&(g.tf=se,C.el.style.transform=se);let fe=Ve.p.toFixed(3);g.p!==fe&&(g.p=fe,C.el.style.setProperty("--p",fe));let we=f.desktop?Math.round(Vi(Vi(Ye/v,-1,1)*u.shift*10,-5,5)*100)/100:0;g.sh!==we&&(g.sh=we,C.el.style.setProperty("--shift",we)),Ee[C.story]=Math.max(Ee[C.story],Ve.p)}),o.forEach((Ve,C)=>{let Ye=Ee[C].toFixed(3);Ve.__v!==Ye&&(Ve.__v=Ye,Ve.style.setProperty("--d",Ye))});let Se=h[y];Se?.video&&Se.fill&&Se.video.duration&&(Se.fill.style.transform=`scaleX(${(Se.video.currentTime/Se.video.duration).toFixed(4)})`)}let L=(R,G)=>t.to(R,{yPercent:-110,duration:.4,ease:"power2.in",delay:G,overwrite:!0,onComplete:()=>t.set(R,{yPercent:110})});function P(R){R.forEach((G,J)=>{let oe=t.getProperty(G,"yPercent");oe>-109&&oe<109?L(G,J*.03):t.set(G,{yPercent:110})})}function V(R,G){R.forEach((J,oe)=>{let Ee=t.getProperty(J,"yPercent");Math.abs(Ee)>=109?t.fromTo(J,{yPercent:110},{yPercent:0,duration:.7,ease:"power3.out",delay:G+oe*.06,overwrite:!0}):t.to(J,{yPercent:0,duration:.4,ease:"power2.out",overwrite:!0})})}function Y(R,G,{instant:J=!1,force:oe=!1}={}){if(R===y&&!oe)return;let Ee=y;y=R,h.forEach((C,Ye)=>{let Be=Ye===R;C.el.classList.toggle("is-active",Be),C.info&&(C.info.inert=!Be),C.ctl&&(C.ctl.inert=!Be)});let Se=h[R];if(c&&(c.textContent=`${Se.el.getAttribute("aria-label")}, ad ${Se.story+1} of ${a}`),J){h.forEach((C,Ye)=>{t.set(C.heads,{yPercent:Ye===R?0:110}),t.set(C.caps,{yPercent:Ye===R?110:0}),t.set(C.details,{autoAlpha:Ye===R?1:0,y:0}),C.ctl&&t.set(C.ctl,{autoAlpha:Ye===R?1:0,y:0})});return}if(h.forEach((C,Ye)=>{Ye!==R&&P(C.heads)}),P(Se.caps),V(Se.heads,G*.5),Ee>=0&&Ee!==R){let C=h[Ee];V(C.caps,G*.6),t.to(C.details,{autoAlpha:0,y:-6,duration:.22,ease:"power2.in",stagger:.015,overwrite:!0}),C.ctl&&t.to(C.ctl,{autoAlpha:0,y:6,duration:.2,ease:"power2.in",overwrite:!0})}Se.details.some(C=>+t.getProperty(C,"autoAlpha")>.02)?t.to(Se.details,{autoAlpha:1,y:0,duration:.4,ease:"power2.out",overwrite:!0}):t.fromTo(Se.details,{autoAlpha:0,y:14},{autoAlpha:1,y:0,duration:.7,ease:"power3.out",stagger:.06,delay:G*.5+.12,overwrite:!0}),Se.ctl&&t.fromTo(Se.ctl,{autoAlpha:0,y:10},{autoAlpha:1,y:0,duration:.6,ease:"power3.out",delay:G*.5+.24,overwrite:!0}),N(Ee,G)}function ue(R,G){let J=Math.max(1,Math.abs(R-u.pos)),oe=G??.9+Math.min(Math.round(J)-1,3)*.08;m?.kill(),Y(na(Math.round(R),d),oe),m=t.to(u,{pos:R,duration:oe,ease:"power3.inOut"})}let q=()=>ue(Math.round(u.pos)+1),le=()=>ue(Math.round(u.pos)-1);ct("[data-next]",e).addEventListener("click",q),ct("[data-prev]",e).addEventListener("click",le),e.addEventListener("keydown",R=>{R.target.closest(".wf-seek")||(R.key==="ArrowRight"?(R.preventDefault(),q()):R.key==="ArrowLeft"&&(R.preventDefault(),le()))});let ce=0,Xe=!1,qe=0;i.addEventListener("wheel",R=>{let G=R.deltaX*(R.deltaMode===1?16:1),J=R.deltaY*(R.deltaMode===1?16:1);Math.abs(G)<=Math.abs(J)||(R.preventDefault(),clearTimeout(qe),qe=setTimeout(()=>{Xe=!1,ce=0},180),!Xe&&(ce+=G,Math.abs(ce)>=60&&(Xe=!0,(ce>0?q:le)(),ce=0)))},{passive:!1});let nt=null;i.addEventListener("pointerdown",R=>{R.button!==0||R.target.closest("[data-ctl],.btn,a,button")||(nt={x0:R.clientX,y0:R.clientY,pos0:u.pos,id:R.pointerId,axis:null,samples:[[cr(),R.clientX]],t0:cr()})}),addEventListener("pointermove",R=>{if(!nt||R.pointerId!==nt.id)return;let G=R.clientX-nt.x0,J=R.clientY-nt.y0;if(!nt.axis){if(Math.hypot(G,J)<6)return;if(nt.axis=R.pointerType==="touch"&&Math.abs(J)>Math.abs(G)?"y":"x",nt.axis==="y"){nt=null;return}m?.kill(),nt.pos0=u.pos,e.setAttribute("data-dragging","");try{i.setPointerCapture(R.pointerId)}catch{}n.lenis&&R.pointerType==="touch"&&(n.lenis.stop(),nt.stopped=!0);let oe=h[y];P(oe.heads),t.to(oe.details,{autoAlpha:0,y:-6,duration:.22,ease:"power2.in",stagger:.015,overwrite:!0}),oe.ctl&&t.to(oe.ctl,{autoAlpha:0,y:6,duration:.2,ease:"power2.in",overwrite:!0});return}u.pos=nt.pos0-(R.clientX-nt.x0)/f.travel,nt.samples.push([cr(),R.clientX]),nt.samples.length>8&&nt.samples.shift()});let me=R=>{if(!nt||R&&R.pointerId!==nt.id)return;let G=nt;if(nt=null,e.removeAttribute("data-dragging"),G.stopped&&n.lenis?.start(),!G.axis)return;A=!0,setTimeout(()=>{A=!1},0);let J=cr(),oe=G.samples.filter(([se])=>J-se<100),Ee=0;oe.length>1&&(Ee=(oe[oe.length-1][1]-oe[0][1])/((oe[oe.length-1][0]-oe[0][0])/1e3||1));let Se=(R?.clientX??G.samples[G.samples.length-1][1])-G.x0,Ve=(J-G.t0)/1e3;Ve<.3&&Math.abs(Se/Ve)>Math.abs(Ee)&&(Ee=Se/Ve),Ee=Vi(Ee,-3e3,3e3);let C=Math.round(G.pos0),Ye=G.pos0-u.pos,Be=Math.round(u.pos);if(Be===C){let se=Math.abs(Ee)>=450&&Math.abs(Se)>=16,fe=Math.sign(Ee)===Math.sign(Se)?!1:Math.abs(Ee)>=450;se&&!fe&&Math.abs(Ye)>0&&(Be=C+(Ye>0?1:-1))}let E=Math.abs(Be-u.pos)*f.travel,g=Math.abs(Ee)>1?Math.min(.9,7.4*E/Math.abs(Ee)):.9,k=Math.max(Math.min(.5,g),g,.25);m?.kill();let j=na(Be,d);j===y?Y(j,k*.6*2,{force:!0}):Y(j,k*.6*2),m=t.to(u,{pos:Be,duration:k,ease:"power3.out"})};addEventListener("pointerup",me),addEventListener("pointercancel",me),i.addEventListener("dragstart",R=>R.preventDefault()),e.addEventListener("click",R=>{A&&(R.stopPropagation(),R.preventDefault())},!0);function xe(R){R.video&&!R.video.getAttribute("src")&&R.src&&(R.video.src=R.src,R.video.preload="auto")}function X(R){R.video&&(xe(R),R.video.paused?(b[R.story]=!1,R.video.play().catch(()=>{})):(b[R.story]=!0,R.video.pause()))}function W(R,G){let J=R.video;if(!J)return;let oe=ct(".wf-vmute",R.el);oe.classList.toggle("is-active",!G),oe.setAttribute("aria-label",G?"Unmute video":"Mute video");let Ee={v:G?J.volume:0};G||(J.muted=!1,J.volume=0),t.to(Ee,{v:G?0:1,duration:.3,ease:"sine.inOut",overwrite:!0,onUpdate:()=>{try{J.volume=Ee.v}catch{}},onComplete:()=>{G&&(J.muted=!0)}})}function _e(){h.forEach((R,G)=>{if(G===y||!R.video||R.video.paused)return;S[R.story]=R.video.currentTime;let J=R.video,oe={v:J.volume};t.to(J,{opacity:0,duration:.35,ease:"power2.out",overwrite:"auto"}),t.to(oe,{v:0,duration:.35,ease:"sine.inOut",onUpdate:()=>{try{J.volume=oe.v}catch{}},onComplete:()=>{J.pause(),J.muted=!0,J.volume=1,ct(".wf-vmute",R.el)?.classList.remove("is-active")}})})}function Ce(){let R=h[y];if(!(!R?.video||!p||document.hidden||b[R.story])){if(xe(R),S[R.story]&&Math.abs(R.video.currentTime-S[R.story])>.3)try{R.video.currentTime=S[R.story]}catch{}R.video.play().catch(()=>{})}}function N(R,G){R<0||(_e(),clearTimeout(w),w=setTimeout(Ce,Math.max(G,.35)*1e3))}new IntersectionObserver(([R])=>{p=R.isIntersecting,p?Ce():h.forEach(G=>{G.video&&!G.video.paused&&(S[G.story]=G.video.currentTime,G.video.pause())})},{rootMargin:"-25% 0px -40% 0px",threshold:0}).observe(i),document.addEventListener("visibilitychange",()=>{document.hidden?h.forEach(R=>R.video?.pause()):Ce()});let ye=new IntersectionObserver(([R])=>{if(!R.isIntersecting)return;ye.disconnect();let J=[0,1,-1].map(Ee=>h[na(y+Ee,d)]).filter((Ee,Se,Ve)=>Ee&&Ve.indexOf(Ee)===Se).filter(Ee=>Ee.video&&Ee.src&&!Ee.video.getAttribute("src")).slice(0,2),oe=Ee=>{let Se=J[Ee];if(Se){if(Ph()){setTimeout(()=>oe(Ee),300);return}Se.video.getAttribute("src")||(Se.video.preload="metadata",Se.video.src=`${Se.src}#t=0.1`),setTimeout(()=>oe(Ee+1),300)}};oe(0)},{rootMargin:"100% 0px 100% 0px"});ye.observe(e),x(),e.classList.add("is-ready"),B(0),new IntersectionObserver(([R])=>{T=R.isIntersecting},{rootMargin:"300px 0px 300px 0px"}).observe(e),t.set(h.map(R=>R.el),{autoAlpha:0}),t.set(l,{autoAlpha:0}),fc(e,()=>{I=!0;let R=t.timeline({defaults:{ease:"power3.out"},onComplete:()=>{I=!1}});R.fromTo(l,{autoAlpha:0,y:18},{autoAlpha:1,y:0,duration:.8,clearProps:"transform"},.22),h.forEach((G,J)=>{let oe=Math.abs(U(J-u.pos)),Ee=.08*Math.min(oe,4);R.fromTo(G.el,{autoAlpha:0},{autoAlpha:1,duration:1.3,ease:"expo.out"},Ee),R.fromTo(G,{introX:140},{introX:0,duration:1.3,ease:"expo.out"},Ee)}),Ce()},15);let pe=innerWidth;addEventListener("resize",()=>{x(),innerWidth!==pe&&(pe=innerWidth,h.forEach(R=>{R.last={}})),B(0)}),n.tick(R=>{(T||I||nt||m?.isActive())&&B(R)}),n.carousel={S:u,go:ue,next:q,prev:le,get active(){return y},get M(){return d}}}function $p(n){let e=(t,i,s)=>t.toLocaleString("en-US",{minimumFractionDigits:i,maximumFractionDigits:i,useGrouping:s});fn("[data-counter]").forEach(t=>{let i=t.textContent.trim(),s=/^(\D*)([\d,]*\.?\d+)(\D*)$/.exec(i);if(!s)return;let[,r,a,o]=s,c=a.includes(","),l=(a.split(".")[1]||"").length,u=parseFloat(a.replace(/,/g,""));t.textContent="";let h=document.createElement("span");h.setAttribute("aria-hidden","true");let d=document.createElement("span");d.className="counter_number",h.append(r,d,o),t.append(h,no(i));let f=y=>{d.textContent=e(y,l,c)};if(n.reduce||!n.gsap){f(u);return}f(0);let v=new IntersectionObserver(([y])=>{if(!y.isIntersecting)return;v.disconnect();let m={v:0};n.gsap.to(m,{v:u,duration:2,ease:"expo.out",onUpdate:()=>f(m.v)})},{threshold:.3});v.observe(t)})}function Yp(){let n=ct("[data-lz]");if(!n)return;let e=ct(".lz-body",n),t=ct(".lz-path",n),i=ct(".lz-path-bg",n),s=ct(".lz-path-fg",n),r=ct(".lz-steps",n),a=ct(".lz-title",n),o=fn(".lz-step",n),c=fn(".lz-panel",n),l=ct(".lz-cur",n),u=ct(".lz-prog i",n),h=0,d=0,f=0,v=-1,y=0,m=!1,p=()=>innerWidth<768,T=()=>{let z=e.getBoundingClientRect(),B=a.getBoundingClientRect(),L=r.getBoundingClientRect(),P=z.width;f=e.offsetHeight;let V=B.left+B.width/2-z.left,Y=L.left-z.left;d=B.bottom-z.top+14;let ue=o[0]?o[0].getBoundingClientRect().top-z.top+(p()?105:innerHeight*.12+9):d+360,q=Math.max(d+120,ue-160);t.setAttribute("viewBox","0 0 "+P+" "+f),t.setAttribute("width",P),t.setAttribute("height",f);let le="M"+V+","+d+" L"+V+","+(d+50)+" C"+V+","+q+" "+Y+","+(d+70)+" "+Y+","+(q+40)+" L"+Y+","+(f-20);i.setAttribute("d",le),s.setAttribute("d",le),h=s.getTotalLength(),s.style.strokeDasharray=String(h),s.style.strokeDashoffset=String(h),A(),D()},I=z=>{let B=0;for(let L=z;L;L=L.offsetParent)B+=L.offsetTop;return B},S=0,b=[],w=0;function A(){S=I(e),b=o.map(z=>I(z)-S)}let x=z=>{z!==v&&(v=z,o.forEach((B,L)=>B.classList.toggle("is-on",L===z)),c.forEach((B,L)=>{B.classList.toggle("is-on",L===z),B.classList.toggle("is-past",L<z),B.setAttribute("aria-hidden",String(L!==z))}),l&&(l.textContent=String(Math.max(0,z)+1).padStart(2,"0")),u&&(u.style.width=(Math.max(0,z)+1)/o.length*100+"%"))},M="";function D(){++w%90===0&&A();let z=S-Fp(),B=innerHeight*.58-z,L=Math.min(1,Math.max(0,(B-d)/Math.max(1,f-d))),P=String(h*(1-L));P!==M&&(M=P,s.style.strokeDashoffset=P);let V=0,Y=p()?40:innerHeight*.12;b.forEach((ue,q)=>{z+ue+Y<innerHeight*.58&&(V=q)}),x(V)}let U=()=>{m&&(D(),y=requestAnimationFrame(U))};new IntersectionObserver(z=>{m=z[0].isIntersecting,cancelAnimationFrame(y),m&&(y=requestAnimationFrame(U))},{rootMargin:"200px 0px"}).observe(n),addEventListener("resize",()=>requestAnimationFrame(T)),window.ScrollTrigger?.addEventListener("refresh",A),document.fonts&&document.fonts.ready&&document.fonts.ready.then(T),T(),x(0)}function Zp(n){let e=ct("[data-rail]");if(!e)return;let t=ct(".wf-rail-track",e),i=ct(".wf-rail-set",e),s=0,r=0,a=!1,o=()=>{if(t.querySelectorAll("[data-clone]").forEach(u=>u.remove()),s=i.offsetWidth,!s)return;let l=Math.ceil(e.offsetWidth/s)+1;for(let u=1;u<l;u++){let h=i.cloneNode(!0);h.dataset.clone="",h.setAttribute("aria-hidden","true"),h.removeAttribute("aria-label"),t.appendChild(h)}r=-s,t.style.transform=`translate3d(${r}px,0,0)`};o(),document.fonts?.ready.then(o);let c=innerWidth;addEventListener("resize",()=>{innerWidth!==c&&(c=innerWidth,o())}),!n.reduce&&(new IntersectionObserver(([l])=>{a=l.isIntersecting},{threshold:0}).observe(e),n.tick(l=>{if(!a||!s)return;let u=n.lenis,h=u?Math.abs(u.velocity||0):0,d=u?u.direction===0?1:Math.sign(u.direction)||1:1,f=.55+h*.5*.55*.6;r+=f*d*l*1e3*.06,r<=-s?r+=s:r>=0&&(r-=s),t.style.transform=`translate3d(${r.toFixed(2)}px,0,0)`}))}function Kp(n){let e=ct("#faqList"),t=ct("#faqMore"),i=ct("#faqAll"),s=ct("#faqCount");if(!e)return;let r=a=>{n.reduce||(a.classList.remove("is-clip"),Rh(a,{line:"cl-w",inner:"cl-l"}),a.offsetWidth,a.classList.add("is-clip"))};fn("details.wf-acc",e).forEach(a=>a.addEventListener("toggle",()=>{a.open&&requestAnimationFrame(()=>r(ct(".wf-acc-a",a)))})),document.addEventListener("click",a=>{if(!a.target.closest||!a.target.closest("#faqAll"))return;a.stopPropagation();let o=!e.classList.contains("all");e.classList.toggle("all",o),i.setAttribute("aria-expanded",String(o)),s.textContent=o?"Showing 8 of 8":"Showing 5 of 8";let c=ct(".btn-text",i);c.__roll=!1,c.textContent=o?"Show less":"View all",i.removeAttribute("aria-label"),dc(c),o?(t.classList.add("is-open"),fn(".wf-acc-q",t).forEach(r)):(fn("details[open]",t).forEach(l=>{l.open=!1}),setTimeout(()=>{e.classList.contains("all")||t.classList.remove("is-open")},320))},!0)}function Jp(n){let e=ct(".wf-foot");e&&(fn("[data-cookie-settings]",e).forEach(t=>t.addEventListener("click",i=>{i.preventDefault(),!t.__ccBound&&typeof window.openCookieSettings=="function"&&window.openCookieSettings()})),n.footer=Mh({lenis:n.lenis,tick:n.tick,gsap:n.gsap,reduce:n.reduce}))}function jp(){let n=location.hash;if(n&&n.length>1&&document.querySelector(n)){let e=document.documentElement,t=()=>{n!=="#top"&&to(n)};if(!e.classList.contains("loading"))setTimeout(t,50);else{let i=new MutationObserver(()=>{e.classList.contains("loading")||(i.disconnect(),setTimeout(t,50))});i.observe(e,{attributes:!0,attributeFilter:["class"]})}}document.addEventListener("click",e=>{let t=e.target.closest&&e.target.closest('a[href^="#"]');if(!t||e.defaultPrevented||!t.closest(".wf-sec,.wf-foot"))return;let i=t.getAttribute("href");i==="#"||t.hasAttribute("data-cookie-settings")||(e.preventDefault(),to(i))})}var Eh,Gi,Vi,na,ct,fn,cr,Up,no,Ch,hc,Ph,pc=jr(()=>{wh();Eh=!1,Gi=null,Vi=(n,e,t)=>Math.min(t,Math.max(e,n)),na=(n,e)=>(n%e+e)%e,ct=(n,e=document)=>e.querySelector(n),fn=(n,e=document)=>[...e.querySelectorAll(n)],cr=()=>performance.now();Up=()=>innerWidth>=992;no=n=>{let e=document.createElement("span");return e.className="wf-sr",e.textContent=n,e};Ch=new Map,hc=new WeakMap;Ph=()=>!!(Gi?.scroll?.snapping||window.__v8?.api?.snapping)});function Lh(){let n=document.querySelector(".tx");return n||(n=document.createElement("div"),n.className="tx",n.setAttribute("aria-hidden","true"),n.innerHTML='<div class="tx-dim"></div><div class="tx-frame"></div><div class="tx-cover"></div>',document.body.appendChild(n),n)}function em(n){if(Ih){location.href=n;return}document.documentElement.classList.add("is-transitioning");try{window.__v8?.api?.lenis?.stop()}catch{}let e=Lh();e.classList.add("is-on"),gc(1,.96,450,mc),e.querySelector(".tx-dim").animate([{opacity:0},{opacity:1}],{duration:450,easing:mc,fill:"forwards"}),vc(0,1,650,io).finished.then(()=>{let t=e.querySelector(".tx-cover"),i=innerHeight;return t.animate([{clipPath:sa("full",0),transform:`translateY(${.1*i}px)`},{clipPath:sa(0,0),transform:"translateY(0)"}],{duration:850,easing:mc,fill:"forwards"}).finished}).then(()=>{try{sessionStorage.setItem(so,String(Date.now()))}catch{}location.href=n})}function tm(){let n=document.documentElement,e=!1;try{let s=+sessionStorage.getItem(so);e=s&&Date.now()-s<8e3,sessionStorage.removeItem(so)}catch{}if(!e||Ih){n.classList.remove("tx-enter");return}let t=Lh();t.classList.add("is-on");let i=t.querySelector(".tx-cover");i.style.clipPath=sa(0,0),t.querySelector(".tx-dim").style.opacity="1",vc(1,1,1,"linear"),gc(.96,.96,1,"linear"),n.classList.remove("tx-enter"),setTimeout(()=>{let s=innerHeight;i.animate([{clipPath:sa(0,0),transform:"translateY(0)"},{clipPath:sa(0,"full"),transform:`translateY(${-.1*s}px)`}],{duration:850,easing:Qp,fill:"forwards"}).finished.then(()=>(t.querySelector(".tx-dim").animate([{opacity:1},{opacity:0}],{duration:650,easing:io,fill:"forwards"}),gc(.96,1,650,io),vc(1,0,650,io).finished)).then(()=>{t.remove(),xc().forEach(r=>{r.getAnimations().forEach(a=>a.cancel()),r.style.transformOrigin=""})})},120)}function Uh({enter:n=!0}={}){if(n)tm();else{try{sessionStorage.removeItem(so)}catch{}document.documentElement.classList.remove("tx-enter")}document.addEventListener("click",e=>{if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;let t=e.target.closest&&e.target.closest("a[href]");if(!t||t.target||t.hasAttribute("download")||t.hasAttribute("data-cookie-settings")||t.hasAttribute("data-tx-ignore"))return;let i=new URL(t.href,location.href);i.origin===location.origin&&i.pathname!==location.pathname&&/\.html$|\/$/.test(i.pathname)&&(e.preventDefault(),em(i.href))}),addEventListener("pageshow",e=>{if(e.persisted){document.querySelector(".tx")?.remove(),xc().forEach(t=>t.getAnimations().forEach(i=>i.cancel())),document.documentElement.classList.remove("is-transitioning");try{window.__v8?.api?.lenis?.start()}catch{}}})}var so,mc,Qp,io,Ih,Dh,Nh,xc,gc,vc,sa,Fh=jr(()=>{so="sg-tx",mc="cubic-bezier(.19,1,.22,1)",Qp="cubic-bezier(.95,.05,.795,.035)",io="cubic-bezier(.215,.61,.355,1)",Ih=matchMedia("(prefers-reduced-motion: reduce)").matches;Dh=()=>innerWidth>=768?32:16,Nh=()=>innerWidth>=768?47:24,xc=()=>[document.querySelector("main"),document.querySelector(".nav")].filter(Boolean),gc=(n,e,t,i)=>xc().map(s=>{let r=s.matches("main")?`50% ${scrollY+innerHeight/2-s.getBoundingClientRect().top-scrollY}px`:`50% ${innerHeight/2}px`;return s.style.transformOrigin=r,s.animate([{transform:`scale(${n})`},{transform:`scale(${e})`}],{duration:t,easing:i,fill:"forwards"})}),vc=(n,e,t,i)=>{let s=document.querySelector(".tx-frame"),r=a=>({inset:`${a*Dh()}px`,borderRadius:`${a*Nh()}px`});return s.animate([r(n),r(e)],{duration:t,easing:i,fill:"forwards"})},sa=(n,e)=>{let t=Dh()-1;return`inset(${n==="full"?innerHeight-t:t}px ${t}px ${e==="full"?innerHeight-t:t}px ${t}px round ${Nh()}px)`}});var Oh=cp(()=>{oc();yh();pc();Fh();var xs=(n,e)=>{try{return e()}catch(t){return console.warn(`[main] ${n} failed`,t),null}};xs("consent",()=>gh());xs("track",()=>_h());xs("later-images",()=>Promise.resolve(window.__first).then(()=>{for(let n of document.querySelectorAll("img[data-later]"))n.src=n.dataset.later}));xs("transitions",()=>Uh({enter:!1}));xs("offscreen-anim",()=>{let n=[...document.querySelectorAll(".chips, .wf-foot-phones")];if(!n.length||!("IntersectionObserver"in window))return;let e=new IntersectionObserver(t=>t.forEach(i=>i.target.classList.toggle("anim-off",!i.isIntersecting)),{rootMargin:"200px 0px"});n.forEach(t=>e.observe(t))});xs("consent-lift",()=>{let n=document.documentElement,e=0,t=-1,i=c=>{for(let l=c;l&&l!==document.body;l=l.parentElement){let u=getComputedStyle(l);if(u.visibility==="hidden"||u.display==="none"||+u.opacity<.05)return!1}return!0},s=()=>{e=0;let c=document.querySelector(".cc"),l=0;if(c&&!c.hidden){let u=c.offsetLeft,h=c.offsetTop,d=u+c.offsetWidth,f=h+c.offsetHeight;document.querySelectorAll(".hero .giant, .hero .pill-big").forEach(v=>{let y=v.getBoundingClientRect();!y.width||y.bottom<=0||y.top>=innerHeight||y.left>d+8||y.right<u-8||y.top>f+8||y.bottom<h-8||i(v)&&(l=Math.max(l,Math.ceil(f-y.top+12)))})}l!==t&&(t=l,n.style.setProperty("--cc-lift",l+"px"))},r=()=>{e||(e=requestAnimationFrame(s))};addEventListener("scroll",r,{passive:!0}),addEventListener("resize",r),setInterval(()=>{let c=document.querySelector(".cc");(c&&!c.hidden||t>0)&&r()},250);let a=null,o=()=>{let c=document.querySelector(".cc");!c||c===a||(a=c,new MutationObserver(()=>s()).observe(c,{attributes:!0,attributeFilter:["hidden"]}),s())};new MutationObserver(o).observe(document.body,{childList:!0}),o()});if(!window.__v8?.api){let n=performance.now();(function e(){let t=window.__v8?.api;t?xs("white",()=>ia({lenis:t.lenis,scroll:t})):performance.now()-n>16e3?xs("white",()=>ia({})):setTimeout(e,100)})()}});var qM=hp(Oh());var rd=0,Xc=1,ad=2;var Ta=1,od=2,Ur=3,Zi=0,cn=1,Ki=2,yi=0,Fr=1,qc=2,$c=3,Yc=4,ld=5;var Js=100,cd=101,ud=102,hd=103,dd=104,fd=200,pd=201,md=202,gd=203,Zc=204,Kc=205,vd=206,xd=207,_d=208,yd=209,Sd=210,bd=211,Md=212,wd=213,Ed=214,Co=0,Ro=1,Po=2,Tr=3,Io=4,Lo=5,Do=6,No=7,Jc=0,Td=1,Ad=2,Ni=0,jc=1,Qc=2,eu=3,tu=4,nu=5,iu=6,su=7;var ru=300,Is=301,js=302,il=303,sl=304,Aa=306,us=1e3,mi=1001,Uo=1002,En=1003,Cd=1004;var Ca=1005;var Lt=1006,rl=1007;var Ji=1008;var ai=1009,au=1010,ou=1011,Or=1012,al=1013,Ui=1014,Fi=1015,Oi=1016,ol=1017,ll=1018,Br=1020,lu=35902,cu=35899,uu=1021,hu=1022,Pn=1023,Xi=1026,Ls=1027,du=1028,cl=1029,Ds=1030,ul=1031;var hl=1033,Ra=33776,Pa=33777,Ia=33778,La=33779,dl=35840,fl=35841,pl=35842,ml=35843,gl=36196,vl=37492,xl=37496,_l=37488,yl=37489,Da=37490,Sl=37491,bl=37808,Ml=37809,wl=37810,El=37811,Tl=37812,Al=37813,Cl=37814,Rl=37815,Pl=37816,Il=37817,Ll=37818,Dl=37819,Nl=37820,Ul=37821,Fl=36492,Ol=36494,Bl=36495,kl=36283,zl=36284,Na=36285,Hl=36286;var ha=2300,Fo=2301,Eo=2302,kc=2303,zc=2400,Hc=2401,Vc=2402;var Rd=3200;var fu=0,Pd=1,nn="",si="srgb",da="srgb-linear",fa="linear",Xt="srgb";var To=7680;var Id=519,Ld=512,Dd=513,Nd=514,Vl=515,Ud=516,Fd=517,Gl=518,Od=519,Bd=35044;var pu="300 es",Ii=2e3,pa=2001;function nm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function im(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ar(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kd(){let n=Ar("canvas");return n.style.display="block",n}var Bh={},Cr=null;function mu(...n){let e="THREE."+n.shift();Cr?Cr("log",e,...n):console.log(e,...n)}function zd(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function vt(...n){n=zd(n);let e="THREE."+n.shift();if(Cr)Cr("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function _t(...n){n=zd(n);let e="THREE."+n.shift();if(Cr)Cr("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ys(...n){let e=n.join(" ");e in Bh||(Bh[e]=!0,vt(...n))}function Hd(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Vd={[Co]:Ro,[Po]:Do,[Io]:No,[Tr]:Lo,[Ro]:Co,[Do]:Po,[No]:Io,[Lo]:Tr},qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kh=1234567,ca=Math.PI/180,Rr=180/Math.PI;function kr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]).toLowerCase()}function Dt(n,e,t){return Math.max(e,Math.min(t,n))}function gu(n,e){return(n%e+e)%e}function sm(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function rm(n,e,t){return n!==e?(t-n)/(e-n):0}function ua(n,e,t){return(1-t)*n+t*e}function am(n,e,t,i){return ua(n,e,1-Math.exp(-t*i))}function om(n,e=1){return e-Math.abs(gu(n,e*2)-e)}function lm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function cm(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function um(n,e){return n+Math.floor(Math.random()*(e-n+1))}function hm(n,e){return n+Math.random()*(e-n)}function dm(n){return n*(.5-Math.random())}function fm(n){n!==void 0&&(kh=n);let e=kh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pm(n){return n*ca}function mm(n){return n*Rr}function gm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function vm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function xm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function _m(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),v=a((i-e)/2);switch(s){case"XYX":n.set(o*u,c*h,c*d,o*l);break;case"YZY":n.set(c*d,o*u,c*h,o*l);break;case"ZXZ":n.set(c*h,c*d,o*u,o*l);break;case"XZX":n.set(o*u,c*v,c*f,o*l);break;case"YXY":n.set(c*f,o*u,c*v,o*l);break;case"ZYZ":n.set(c*v,c*f,o*u,o*l);break;default:vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ua={DEG2RAD:ca,RAD2DEG:Rr,generateUUID:kr,clamp:Dt,euclideanModulo:gu,mapLinear:sm,inverseLerp:rm,lerp:ua,damp:am,pingpong:om,smoothstep:lm,smootherstep:cm,randInt:um,randFloat:hm,randFloatSpread:dm,seededRandom:fm,degToRad:pm,radToDeg:mm,isPowerOfTwo:gm,ceilPowerOfTwo:vm,floorPowerOfTwo:xm,setQuaternionFromProperEuler:_m,normalize:Xn,denormalize:wr},mt=class n{static{n.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},$i=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],h=i[s+3],d=r[a+0],f=r[a+1],v=r[a+2],y=r[a+3];if(h!==y||c!==d||l!==f||u!==v){let m=c*d+l*f+u*v+h*y;m<0&&(d=-d,f=-f,v=-v,y=-y,m=-m);let p=1-o;if(m<.9995){let T=Math.acos(m),I=Math.sin(T);p=Math.sin(p*T)/I,o=Math.sin(o*T)/I,c=c*p+d*o,l=l*p+f*o,u=u*p+v*o,h=h*p+y*o}else{c=c*p+d*o,l=l*p+f*o,u=u*p+v*o,h=h*p+y*o;let T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],h=r[a],d=r[a+1],f=r[a+2],v=r[a+3];return e[t]=o*v+u*h+c*f-l*d,e[t+1]=c*v+u*d+l*h-o*f,e[t+2]=l*v+u*f+o*d-c*h,e[t+3]=u*v-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),h=o(r/2),d=c(i/2),f=c(s/2),v=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*v,this._y=l*f*h-d*u*v,this._z=l*u*v+d*f*h,this._w=l*u*h-d*f*v;break;case"YXZ":this._x=d*u*h+l*f*v,this._y=l*f*h-d*u*v,this._z=l*u*v-d*f*h,this._w=l*u*h+d*f*v;break;case"ZXY":this._x=d*u*h-l*f*v,this._y=l*f*h+d*u*v,this._z=l*u*v+d*f*h,this._w=l*u*h-d*f*v;break;case"ZYX":this._x=d*u*h-l*f*v,this._y=l*f*h+d*u*v,this._z=l*u*v-d*f*h,this._w=l*u*h+d*f*v;break;case"YZX":this._x=d*u*h+l*f*v,this._y=l*f*h+d*u*v,this._z=l*u*v-d*f*h,this._w=l*u*h-d*f*v;break;case"XZY":this._x=d*u*h-l*f*v,this._y=l*f*h-d*u*v,this._z=l*u*v+d*f*h,this._w=l*u*h+d*f*v;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>h){let f=2*Math.sqrt(1+i-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){let f=2*Math.sqrt(1+o-i-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ie=class n{static{n.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _c.copy(this).projectOnVector(e),this.sub(_c)}reflect(e){return this.sub(_c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_c=new ie,zh=new $i,xt=class n{static{n.prototype.isMatrix3=!0}constructor(e,t,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],v=i[8],y=s[0],m=s[3],p=s[6],T=s[1],I=s[4],S=s[7],b=s[2],w=s[5],A=s[8];return r[0]=a*y+o*T+c*b,r[3]=a*m+o*I+c*w,r[6]=a*p+o*S+c*A,r[1]=l*y+u*T+h*b,r[4]=l*m+u*I+h*w,r[7]=l*p+u*S+h*A,r[2]=d*y+f*T+v*b,r[5]=d*m+f*I+v*w,r[8]=d*p+f*S+v*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,v=t*h+i*d+s*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/v;return e[0]=h*y,e[1]=(s*l-u*i)*y,e[2]=(o*i-s*a)*y,e[3]=d*y,e[4]=(u*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(i*c-l*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Ys("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yc.makeScale(e,t)),this}rotate(e){return Ys("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yc.makeRotation(-e)),this}translate(e,t){return Ys("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},yc=new xt,Hh=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vh=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ym(){let n={enabled:!0,workingColorSpace:da,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Xt&&(s.r=cs(s.r),s.g=cs(s.g),s.b=cs(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Xt&&(s.r=Er(s.r),s.g=Er(s.g),s.b=Er(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===nn?fa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ys("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ys("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[da]:{primaries:e,whitePoint:i,transfer:fa,toXYZ:Hh,fromXYZ:Vh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:e,whitePoint:i,transfer:Xt,toXYZ:Hh,fromXYZ:Vh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),n}var At=ym();function cs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Er(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ur,Oo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ur===void 0&&(ur=Ar("canvas")),ur.width=e.width,ur.height=e.height;let s=ur.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ur}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ar("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=cs(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(cs(t[i]/255)*255):t[i]=cs(t[i]);return{data:t,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Sm=0,Pr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=kr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Sc(s[a].image)):r.push(Sc(s[a]))}else r=Sc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Sc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Oo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}var bm=0,bc=new ie,xn=class n extends qi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=mi,s=mi,r=Lt,a=Ji,o=Pn,c=ai,l=n.DEFAULT_ANISOTROPY,u=nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=kr(),this.name="",this.source=new Pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(bc).x}get height(){return this.source.getSize(bc).y}get depth(){return this.source.getSize(bc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){vt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){vt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ru)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case us:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case Uo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case us:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case Uo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=ru;xn.DEFAULT_ANISOTROPY=1;var Ut=class n{static{n.prototype.isVector4=!0}constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],v=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(v-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(v+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let I=(l+1)/2,S=(f+1)/2,b=(p+1)/2,w=(u+d)/4,A=(h+y)/4,x=(v+m)/4;return I>S&&I>b?I<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(I),s=w/i,r=A/i):S>b?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=w/s,r=x/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=A/r,s=x/r),this.set(i,s,r,t),this}let T=Math.sqrt((m-v)*(m-v)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-v)/T,this.y=(h-y)/T,this.z=(d-u)/T,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this.w=Dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this.w=Dt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Bo=class extends qi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new xn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Pr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends Bo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ma=class extends xn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ko=class extends xn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ln=class n{static{n.prototype.isMatrix4=!0}constructor(e,t,i,s,r,a,o,c,l,u,h,d,f,v,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,u,h,d,f,v,y,m)}set(e,t,i,s,r,a,o,c,l,u,h,d,f,v,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=v,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/hr.setFromMatrixColumn(e,0).length(),r=1/hr.setFromMatrixColumn(e,1).length(),a=1/hr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,v=o*u,y=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+v*l,t[5]=d-y*l,t[9]=-o*c,t[2]=y-d*l,t[6]=v+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*u,f=c*h,v=l*u,y=l*h;t[0]=d+y*o,t[4]=v*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-v,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*u,f=c*h,v=l*u,y=l*h;t[0]=d-y*o,t[4]=-a*h,t[8]=v+f*o,t[1]=f+v*o,t[5]=a*u,t[9]=y-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*u,f=a*h,v=o*u,y=o*h;t[0]=c*u,t[4]=v*l-f,t[8]=d*l+y,t[1]=c*h,t[5]=y*l+d,t[9]=f*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,v=o*c,y=o*l;t[0]=c*u,t[4]=y-d*h,t[8]=v*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+v,t[10]=d-y*h}else if(e.order==="XZY"){let d=a*c,f=a*l,v=o*c,y=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+y,t[5]=a*u,t[9]=f*h-v,t[2]=v*h-f,t[6]=o*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mm,e,wm)}lookAt(e,t,i){let s=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),_s.crossVectors(i,ni),_s.lengthSq()===0&&(Math.abs(i.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),_s.crossVectors(i,ni)),_s.normalize(),ro.crossVectors(ni,_s),s[0]=_s.x,s[4]=ro.x,s[8]=ni.x,s[1]=_s.y,s[5]=ro.y,s[9]=ni.y,s[2]=_s.z,s[6]=ro.z,s[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],v=i[2],y=i[6],m=i[10],p=i[14],T=i[3],I=i[7],S=i[11],b=i[15],w=s[0],A=s[4],x=s[8],M=s[12],D=s[1],U=s[5],z=s[9],B=s[13],L=s[2],P=s[6],V=s[10],Y=s[14],ue=s[3],q=s[7],le=s[11],ce=s[15];return r[0]=a*w+o*D+c*L+l*ue,r[4]=a*A+o*U+c*P+l*q,r[8]=a*x+o*z+c*V+l*le,r[12]=a*M+o*B+c*Y+l*ce,r[1]=u*w+h*D+d*L+f*ue,r[5]=u*A+h*U+d*P+f*q,r[9]=u*x+h*z+d*V+f*le,r[13]=u*M+h*B+d*Y+f*ce,r[2]=v*w+y*D+m*L+p*ue,r[6]=v*A+y*U+m*P+p*q,r[10]=v*x+y*z+m*V+p*le,r[14]=v*M+y*B+m*Y+p*ce,r[3]=T*w+I*D+S*L+b*ue,r[7]=T*A+I*U+S*P+b*q,r[11]=T*x+I*z+S*V+b*le,r[15]=T*M+I*B+S*Y+b*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],v=e[3],y=e[7],m=e[11],p=e[15],T=c*f-l*d,I=o*f-l*h,S=o*d-c*h,b=a*f-l*u,w=a*d-c*u,A=a*h-o*u;return t*(y*T-m*I+p*S)-i*(v*T-m*b+p*w)+s*(v*I-y*b+p*A)-r*(v*S-y*w+m*A)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return t*(a*u-o*l)-i*(r*u-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],v=e[12],y=e[13],m=e[14],p=e[15],T=t*o-i*a,I=t*c-s*a,S=t*l-r*a,b=i*c-s*o,w=i*l-r*o,A=s*l-r*c,x=u*y-h*v,M=u*m-d*v,D=u*p-f*v,U=h*m-d*y,z=h*p-f*y,B=d*p-f*m,L=T*B-I*z+S*U+b*D-w*M+A*x;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/L;return e[0]=(o*B-c*z+l*U)*P,e[1]=(s*z-i*B-r*U)*P,e[2]=(y*A-m*w+p*b)*P,e[3]=(d*w-h*A-f*b)*P,e[4]=(c*D-a*B-l*M)*P,e[5]=(t*B-s*D+r*M)*P,e[6]=(m*S-v*A-p*I)*P,e[7]=(u*A-d*S+f*I)*P,e[8]=(a*z-o*D+l*x)*P,e[9]=(i*D-t*z-r*x)*P,e[10]=(v*w-y*S+p*T)*P,e[11]=(h*S-u*w-f*T)*P,e[12]=(o*M-a*U-c*x)*P,e[13]=(t*U-i*M+s*x)*P,e[14]=(y*I-v*b-m*T)*P,e[15]=(u*b-h*I+d*T)*P,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,v=r*h,y=a*u,m=a*h,p=o*h,T=c*l,I=c*u,S=c*h,b=i.x,w=i.y,A=i.z;return s[0]=(1-(y+p))*b,s[1]=(f+S)*b,s[2]=(v-I)*b,s[3]=0,s[4]=(f-S)*w,s[5]=(1-(d+p))*w,s[6]=(m+T)*w,s[7]=0,s[8]=(v+I)*A,s[9]=(m-T)*A,s[10]=(1-(d+y))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=hr.set(s[0],s[1],s[2]).length(),o=hr.set(s[4],s[5],s[6]).length(),c=hr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ai.copy(this);let l=1/a,u=1/o,h=1/c;return Ai.elements[0]*=l,Ai.elements[1]*=l,Ai.elements[2]*=l,Ai.elements[4]*=u,Ai.elements[5]*=u,Ai.elements[6]*=u,Ai.elements[8]*=h,Ai.elements[9]*=h,Ai.elements[10]*=h,t.setFromRotationMatrix(Ai),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,s,r,a,o=Ii,c=!1){let l=this.elements,u=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),f=(i+s)/(i-s),v,y;if(c)v=r/(a-r),y=a*r/(a-r);else if(o===Ii)v=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===pa)v=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Ii,c=!1){let l=this.elements,u=2/(t-e),h=2/(i-s),d=-(t+e)/(t-e),f=-(i+s)/(i-s),v,y;if(c)v=1/(a-r),y=a/(a-r);else if(o===Ii)v=-2/(a-r),y=-(a+r)/(a-r);else if(o===pa)v=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},hr=new ie,Ai=new ln,Mm=new ie(0,0,0),wm=new ie(1,1,1),_s=new ie,ro=new ie,ni=new ie,Gh=new ln,Wh=new $i,Es=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Es.DEFAULT_ORDER="XYZ";var ga=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Em=0,Xh=new ie,dr=new $i,ss=new ln,ao=new ie,ra=new ie,Tm=new ie,Am=new $i,qh=new ie(1,0,0),$h=new ie(0,1,0),Yh=new ie(0,0,1),Zh={type:"added"},Cm={type:"removed"},fr={type:"childadded",child:null},Mc={type:"childremoved",child:null},xi=class n extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new ie,t=new Es,i=new $i,s=new ie(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ln},normalMatrix:{value:new xt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(qh,e)}rotateY(e){return this.rotateOnAxis($h,e)}rotateZ(e){return this.rotateOnAxis(Yh,e)}translateOnAxis(e,t){return Xh.copy(e).applyQuaternion(this.quaternion),this.position.add(Xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qh,e)}translateY(e){return this.translateOnAxis($h,e)}translateZ(e){return this.translateOnAxis(Yh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ss.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ao.copy(e):ao.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ss.lookAt(ra,ao,this.up):ss.lookAt(ao,ra,this.up),this.quaternion.setFromRotationMatrix(ss),s&&(ss.extractRotation(s.matrixWorld),dr.setFromRotationMatrix(ss),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zh),fr.child=e,this.dispatchEvent(fr),fr.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cm),Mc.child=e,this.dispatchEvent(Mc),Mc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ss.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ss.multiply(e.parent.matrixWorld)),e.applyMatrix4(ss),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zh),fr.child=e,this.dispatchEvent(fr),fr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,e,Tm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ra,Am,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),v.length>0&&(i.nodes=v)}return i.object=s,i;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xi.DEFAULT_UP=new ie(0,1,0);xi.DEFAULT_MATRIX_AUTO_UPDATE=!0;xi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Li=class extends xi{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rm={type:"move"},Ir=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,v=.005;l.inputState.pinching&&d>f+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Li;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ys={h:0,s:0,l:0},oo={h:0,s:0,l:0};function wc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ct=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=At.workingColorSpace){return this.r=e,this.g=t,this.b=i,At.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=At.workingColorSpace){if(e=gu(e,1),t=Dt(t,0,1),i=Dt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=wc(a,r,e+1/3),this.g=wc(a,r,e),this.b=wc(a,r,e-1/3)}return At.colorSpaceToWorking(this,s),this}setStyle(e,t=si){function i(r){r!==void 0&&parseFloat(r)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:vt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=si){let i=Gd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cs(e.r),this.g=cs(e.g),this.b=cs(e.b),this}copyLinearToSRGB(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=si){return At.workingToColorSpace(Fn.copy(this),e),Math.round(Dt(Fn.r*255,0,255))*65536+Math.round(Dt(Fn.g*255,0,255))*256+Math.round(Dt(Fn.b*255,0,255))}getHexString(e=si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.workingToColorSpace(Fn.copy(this),t);let i=Fn.r,s=Fn.g,r=Fn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-i)/h+2;break;case r:c=(i-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=At.workingColorSpace){return At.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=si){At.workingToColorSpace(Fn.copy(this),e);let t=Fn.r,i=Fn.g,s=Fn.b;return e!==si?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ys),this.setHSL(ys.h+e,ys.s+t,ys.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ys),e.getHSL(oo);let i=ua(ys.h,oo.h,t),s=ua(ys.s,oo.s,t),r=ua(ys.l,oo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Fn=new Ct;Ct.NAMES=Gd;var hs=class extends xi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Es,this.environmentIntensity=1,this.environmentRotation=new Es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ci=new ie,rs=new ie,Ec=new ie,as=new ie,pr=new ie,mr=new ie,Kh=new ie,Tc=new ie,Ac=new ie,Cc=new ie,Rc=new Ut,Pc=new Ut,Ic=new Ut,ws=class n{constructor(e=new ie,t=new ie,i=new ie){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ci.subVectors(e,t),s.cross(Ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Ci.subVectors(s,t),rs.subVectors(i,t),Ec.subVectors(e,t);let a=Ci.dot(Ci),o=Ci.dot(rs),c=Ci.dot(Ec),l=rs.dot(rs),u=rs.dot(Ec),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-o*u)*d,v=(a*u-o*c)*d;return r.set(1-f-v,v,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,as)===null?!1:as.x>=0&&as.y>=0&&as.x+as.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,as)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,as.x),c.addScaledVector(a,as.y),c.addScaledVector(o,as.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return Rc.setScalar(0),Pc.setScalar(0),Ic.setScalar(0),Rc.fromBufferAttribute(e,t),Pc.fromBufferAttribute(e,i),Ic.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Rc,r.x),a.addScaledVector(Pc,r.y),a.addScaledVector(Ic,r.z),a}static isFrontFacing(e,t,i,s){return Ci.subVectors(i,t),rs.subVectors(e,t),Ci.cross(rs).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),rs.subVectors(this.a,this.b),Ci.cross(rs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;pr.subVectors(s,i),mr.subVectors(r,i),Tc.subVectors(e,i);let c=pr.dot(Tc),l=mr.dot(Tc);if(c<=0&&l<=0)return t.copy(i);Ac.subVectors(e,s);let u=pr.dot(Ac),h=mr.dot(Ac);if(u>=0&&h<=u)return t.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(pr,a);Cc.subVectors(e,r);let f=pr.dot(Cc),v=mr.dot(Cc);if(v>=0&&f<=v)return t.copy(r);let y=f*l-c*v;if(y<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(i).addScaledVector(mr,o);let m=u*v-f*h;if(m<=0&&h-u>=0&&f-v>=0)return Kh.subVectors(r,s),o=(h-u)/(h-u+(f-v)),t.copy(s).addScaledVector(Kh,o);let p=1/(m+y+d);return a=y*p,o=d*p,t.copy(i).addScaledVector(pr,a).addScaledVector(mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ts=class{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ri):Ri.fromBufferAttribute(r,a),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox)),lo.applyMatrix4(e.matrixWorld),this.union(lo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),co.subVectors(this.max,aa),gr.subVectors(e.a,aa),vr.subVectors(e.b,aa),xr.subVectors(e.c,aa),Ss.subVectors(vr,gr),bs.subVectors(xr,vr),Ws.subVectors(gr,xr);let t=[0,-Ss.z,Ss.y,0,-bs.z,bs.y,0,-Ws.z,Ws.y,Ss.z,0,-Ss.x,bs.z,0,-bs.x,Ws.z,0,-Ws.x,-Ss.y,Ss.x,0,-bs.y,bs.x,0,-Ws.y,Ws.x,0];return!Lc(t,gr,vr,xr,co)||(t=[1,0,0,0,1,0,0,0,1],!Lc(t,gr,vr,xr,co))?!1:(uo.crossVectors(Ss,bs),t=[uo.x,uo.y,uo.z],Lc(t,gr,vr,xr,co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(os[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),os[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),os[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),os[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),os[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),os[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),os[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),os[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(os),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},os=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Ri=new ie,lo=new Ts,gr=new ie,vr=new ie,xr=new ie,Ss=new ie,bs=new ie,Ws=new ie,aa=new ie,co=new ie,uo=new ie,Xs=new ie;function Lc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Xs.fromArray(n,r);let o=s.x*Math.abs(Xs.x)+s.y*Math.abs(Xs.y)+s.z*Math.abs(Xs.z),c=e.dot(Xs),l=t.dot(Xs),u=i.dot(Xs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var pn=new ie,ho=new mt,Pm=0,gi=class extends qi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bd,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ho.fromBufferAttribute(this,t),ho.applyMatrix3(e),this.setXY(t,ho.x,ho.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),s=Xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),s=Xn(s,this.array),r=Xn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var va=class extends gi{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var xa=class extends gi{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var vi=class extends gi{constructor(e,t,i){super(new Float32Array(e),t,i)}},Im=new Ts,oa=new ie,Dc=new ie,Lr=class{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Im.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);let t=oa.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(oa,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(Dc)),this.expandByPoint(oa.copy(e.center).sub(Dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Lm=0,pi=new ln,Nc=new xi,_r=new ie,ii=new Ts,la=new Ts,wn=new ie,Yi=class n extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nm(e)?xa:va)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new xt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,i){return pi.makeTranslation(e,t,i),this.applyMatrix4(pi),this}scale(e,t,i){return pi.makeScale(e,t,i),this.applyMatrix4(pi),this}lookAt(e){return Nc.lookAt(e),Nc.updateMatrix(),this.applyMatrix4(Nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vi(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];ii.setFromBufferAttribute(r),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){let i=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];la.setFromBufferAttribute(o),this.morphTargetsRelative?(wn.addVectors(ii.min,la.min),ii.expandByPoint(wn),wn.addVectors(ii.max,la.max),ii.expandByPoint(wn)):(ii.expandByPoint(la.min),ii.expandByPoint(la.max))}ii.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)wn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(wn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)wn.fromBufferAttribute(o,l),c&&(_r.fromBufferAttribute(e,l),wn.add(_r)),s=Math.max(s,i.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new gi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<i.count;x++)o[x]=new ie,c[x]=new ie;let l=new ie,u=new ie,h=new ie,d=new mt,f=new mt,v=new mt,y=new ie,m=new ie;function p(x,M,D){l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,M),h.fromBufferAttribute(i,D),d.fromBufferAttribute(r,x),f.fromBufferAttribute(r,M),v.fromBufferAttribute(r,D),u.sub(l),h.sub(l),f.sub(d),v.sub(d);let U=1/(f.x*v.y-v.x*f.y);isFinite(U)&&(y.copy(u).multiplyScalar(v.y).addScaledVector(h,-f.y).multiplyScalar(U),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-v.x).multiplyScalar(U),o[x].add(y),o[M].add(y),o[D].add(y),c[x].add(m),c[M].add(m),c[D].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let x=0,M=T.length;x<M;++x){let D=T[x],U=D.start,z=D.count;for(let B=U,L=U+z;B<L;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let I=new ie,S=new ie,b=new ie,w=new ie;function A(x){b.fromBufferAttribute(s,x),w.copy(b);let M=o[x];I.copy(M),I.sub(b.multiplyScalar(b.dot(M))).normalize(),S.crossVectors(w,M);let U=S.dot(c[x])<0?-1:1;a.setXYZW(x,I.x,I.y,I.z,U)}for(let x=0,M=T.length;x<M;++x){let D=T[x],U=D.start,z=D.count;for(let B=U,L=U+z;B<L;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new ie,r=new ie,a=new ie,o=new ie,c=new ie,l=new ie,u=new ie,h=new ie;if(e)for(let d=0,f=e.count;d<f;d+=3){let v=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,v),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(o,c){let l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u),f=0,v=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?f=c[y]*o.data.stride+o.offset:f=c[y]*u;for(let p=0;p<u;p++)d[v++]=l[f++]}return new gi(d,u,h)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Uc=new ie,Dm=new ie,Nm=new xt,Pi=class{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Uc.subVectors(i,t).cross(Dm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Uc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Nm.getNormalMatrix(e),s=this.coplanarPoint(Uc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Um=0,Zs=class extends qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=Fr,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zc,this.blendDst=Kc,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Id,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=To,this.stencilZFail=To,this.stencilZPass=To,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){vt(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){vt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Pi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new mt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ls=new ie,Fc=new ie,fo=new ie,po=new ie,zo=class{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ls)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ls.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ls.copy(this.origin).addScaledVector(this.direction,t),ls.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Fc.copy(e).add(t).multiplyScalar(.5),fo.copy(t).sub(e).normalize(),po.copy(this.origin).sub(Fc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(fo),o=po.dot(this.direction),c=-po.dot(fo),l=po.lengthSq(),u=Math.abs(1-a*a),h,d,f,v;if(u>0)if(h=a*c-o,d=a*o-c,v=r*u,h>=0)if(d>=-v)if(d<=v){let y=1/u;h*=y,d*=y,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-v?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=v?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Fc).addScaledVector(fo,d),f}intersectSphere(e,t){if(e.radius<0)return null;ls.subVectors(e.center,this.origin);let i=ls.dot(this.direction),s=ls.dot(ls)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ls)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,v=t.x-a.x,y=t.y-a.y,m=t.z-a.z,p=i.x-a.x,T=i.y-a.y,I=i.z-a.z,S=Math.abs(c),b=Math.abs(l),w=Math.abs(u),A,x,M,D,U,z,B,L,P,V,Y,ue;if(S>=b&&S>=w?(M=c,z=h,P=v,ue=p,c>=0?(A=l,x=u,D=d,U=f,B=y,L=m,V=T,Y=I):(A=u,x=l,D=f,U=d,B=m,L=y,V=I,Y=T)):b>=w?(M=l,z=d,P=y,ue=T,l>=0?(A=u,x=c,D=f,U=h,B=m,L=v,V=I,Y=p):(A=c,x=u,D=h,U=f,B=v,L=m,V=p,Y=I)):(M=u,z=f,P=m,ue=I,u>=0?(A=c,x=l,D=h,U=d,B=v,L=y,V=p,Y=T):(A=l,x=c,D=d,U=h,B=y,L=v,V=T,Y=p)),M===0)return null;let q=A/M,le=x/M,ce=1/M,Xe=D-q*z,qe=U-le*z,nt=B-q*P,me=L-le*P,xe=V-q*ue,X=Y-le*ue,W=xe*me-X*nt,_e=Xe*X-qe*xe,Ce=nt*qe-me*Xe;if(s){if(W<0||_e<0||Ce<0)return null}else if((W<0||_e<0||Ce<0)&&(W>0||_e>0||Ce>0))return null;let N=W+_e+Ce;if(N===0)return null;let ae=ce*(W*z+_e*P+Ce*ue);return(N>0?ae<0:ae>0)?null:this.at(ae/N,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_a=class extends Zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Es,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jh=new ln,qs=new zo,mo=new Lr,jh=new ie,go=new ie,vo=new ie,xo=new ie,Oc=new ie,_o=new ie,Qh=new ie,yo=new ie,mn=class extends xi{constructor(e=new Yi,t=new _a){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){_o.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(Oc.fromBufferAttribute(h,e),a?_o.addScaledVector(Oc,u):_o.addScaledVector(Oc.sub(t),u))}t.add(_o)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(r),qs.copy(e.ray).recast(e.near),!(mo.containsPoint(qs.origin)===!1&&(qs.intersectSphere(mo,jh)===null||qs.origin.distanceToSquared(jh)>(e.far-e.near)**2))&&(Jh.copy(r).invert(),qs.copy(e.ray).applyMatrix4(Jh),!(i.boundingBox!==null&&qs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,y=d.length;v<y;v++){let m=d[v],p=a[m.materialIndex],T=Math.max(m.start,f.start),I=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=T,b=I;S<b;S+=3){let w=o.getX(S),A=o.getX(S+1),x=o.getX(S+2);s=So(this,p,e,i,l,u,h,w,A,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=v,p=y;m<p;m+=3){let T=o.getX(m),I=o.getX(m+1),S=o.getX(m+2);s=So(this,a,e,i,l,u,h,T,I,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,y=d.length;v<y;v++){let m=d[v],p=a[m.materialIndex],T=Math.max(m.start,f.start),I=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=T,b=I;S<b;S+=3){let w=S,A=S+1,x=S+2;s=So(this,p,e,i,l,u,h,w,A,x),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let v=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=v,p=y;m<p;m+=3){let T=m,I=m+1,S=m+2;s=So(this,a,e,i,l,u,h,T,I,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Fm(n,e,t,i,s,r,a,o){let c;if(e.side===cn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Zi,o),c===null)return null;yo.copy(o),yo.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(yo);return l<t.near||l>t.far?null:{distance:l,point:yo.clone(),object:n}}function So(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,go),n.getVertexPosition(c,vo),n.getVertexPosition(l,xo);let u=Fm(n,e,t,i,go,vo,xo,Qh);if(u){let h=new ie;ws.getBarycoord(Qh,go,vo,xo,h),s&&(u.uv=ws.getInterpolatedAttribute(s,o,c,l,h,new mt)),r&&(u.uv1=ws.getInterpolatedAttribute(r,o,c,l,h,new mt)),a&&(u.normal=ws.getInterpolatedAttribute(a,o,c,l,h,new ie),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new ie,materialIndex:0};ws.getNormal(go,vo,xo,d.normal),u.face=d,u.barycoord=h}return u}var Di=class extends xn{constructor(e=null,t=1,i=1,s,r,a,o,c,l=En,u=En,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $s=new Lr,Om=new mt(.5,.5),bo=new ie,ya=class{constructor(e=new Pi,t=new Pi,i=new Pi,s=new Pi,r=new Pi,a=new Pi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ii,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],v=r[8],y=r[9],m=r[10],p=r[11],T=r[12],I=r[13],S=r[14],b=r[15];if(s[0].setComponents(l-a,f-u,p-v,b-T).normalize(),s[1].setComponents(l+a,f+u,p+v,b+T).normalize(),s[2].setComponents(l+o,f+h,p+y,b+I).normalize(),s[3].setComponents(l-o,f-h,p-y,b-I).normalize(),i)s[4].setComponents(c,d,m,S).normalize(),s[5].setComponents(l-c,f-d,p-m,b-S).normalize();else if(s[4].setComponents(l-c,f-d,p-m,b-S).normalize(),t===Ii)s[5].setComponents(l+c,f+d,p+m,b+S).normalize();else if(t===pa)s[5].setComponents(c,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($s)}intersectsSprite(e){$s.center.set(0,0,0);let t=Om.distanceTo(e.center);return $s.radius=.7071067811865476+t,$s.applyMatrix4(e.matrixWorld),this.intersectsSphere($s)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(bo.x=s.normal.x>0?e.max.x:e.min.x,bo.y=s.normal.y>0?e.max.y:e.min.y,bo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ks=class extends xn{constructor(e,t,i,s,r=Lt,a=Lt,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;let u=this;function h(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(h))}clone(){return new this.constructor(this.image).copy(this)}update(){let e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}};var Sa=class extends xn{constructor(e=[],t=Is,i,s,r,a,o,c,l,u){super(e,t,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ba=class extends xn{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var As=class extends xn{constructor(e,t,i=Ui,s,r,a,o=En,c=En,l,u=Xi,h=1){if(u!==Xi&&u!==Ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ho=class extends As{constructor(e,t=Ui,i=Is,s,r,a=En,o=En,c,l=Xi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ma=class extends xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Dr=class n extends Yi{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],d=0,f=0;v("z","y","x",-1,-1,i,t,e,a,r,0),v("z","y","x",1,-1,i,t,-e,a,r,1),v("x","z","y",1,1,e,i,t,s,a,2),v("x","z","y",1,-1,e,i,-t,s,a,3),v("x","y","z",1,-1,e,t,i,s,r,4),v("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new vi(l,3)),this.setAttribute("normal",new vi(u,3)),this.setAttribute("uv",new vi(h,2));function v(y,m,p,T,I,S,b,w,A,x,M){let D=S/A,U=b/x,z=S/2,B=b/2,L=w/2,P=A+1,V=x+1,Y=0,ue=0,q=new ie;for(let le=0;le<V;le++){let ce=le*U-B;for(let Xe=0;Xe<P;Xe++){let qe=Xe*D-z;q[y]=qe*T,q[m]=ce*I,q[p]=L,l.push(q.x,q.y,q.z),q[y]=0,q[m]=0,q[p]=w>0?1:-1,u.push(q.x,q.y,q.z),h.push(Xe/A),h.push(1-le/x),Y+=1}}for(let le=0;le<x;le++)for(let ce=0;ce<A;ce++){let Xe=d+ce+P*le,qe=d+ce+P*(le+1),nt=d+(ce+1)+P*(le+1),me=d+(ce+1)+P*le;c.push(Xe,qe,me),c.push(qe,nt,me),ue+=6}o.addGroup(f,ue,M),f+=ue,d+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var _i=class n extends Yi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,f=[],v=[],y=[],m=[];for(let p=0;p<u;p++){let T=p*d-a;for(let I=0;I<l;I++){let S=I*h-r;v.push(S,-T,0),y.push(0,0,1),m.push(I/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){let I=T+l*p,S=T+l*(p+1),b=T+1+l*(p+1),w=T+1+l*p;f.push(I,S,w),f.push(S,b,w)}this.setIndex(f),this.setAttribute("position",new vi(v,3)),this.setAttribute("normal",new vi(y,3)),this.setAttribute("uv",new vi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};function Qs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(ed(s))s.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(ed(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Bn(n){let e={};for(let t=0;t<n.length;t++){let i=Qs(n[t]);for(let s in i)e[s]=i[s]}return e}function ed(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Bm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vu(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}var Wd={clone:Qs,merge:Bn},km=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,gn=class extends Zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=km,this.fragmentShader=zm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=Bm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ct().setHex(s.value);break;case"v2":this.uniforms[i].value=new mt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new ie().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Ut().fromArray(s.value);break;case"m3":this.uniforms[i].value=new xt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ln().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Vo=class extends gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Go=class extends Zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Wo=class extends Zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function yr(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Bc(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Cs=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Xo=class extends Cs{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zc,endingEnd:zc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hc:r=e,o=2*t-i;break;case Vc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Hc:a=e,c=2*i-t;break;case Vc:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,v=(i-t)/(s-t),y=v*v,m=y*v,p=-d*m+2*d*y-d*v,T=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*v+1,I=(-1-f)*m+(1.5+f)*y+.5*v,S=f*m-f*y;for(let b=0;b!==o;++b)r[b]=p*a[u+b]+T*a[l+b]+I*a[c+b]+S*a[h+b];return r}},qo=class extends Cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}},$o=class extends Cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Yo=class extends Cs{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let v=(i-t)/(s-t),y=1-v;for(let m=0;m!==o;++m)r[m]=a[l+m]*y+a[c+m]*v;return r}let d=o*2,f=e-1;for(let v=0;v!==o;++v){let y=a[l+v],m=a[c+v],p=f*d+v*2,T=h[p],I=h[p+1],S=e*d+v*2,b=u[S],w=u[S+1],A=Vm(i,t,T,b,s);r[v]=Xd(A,y,I,w,m)}return r}};function Xd(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Hm(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Vm(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Xd(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let c=Hm(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var ri=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=yr(t,this.TimeBufferType),this.values=yr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:yr(e.times,Array),values:yr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Bc(e.settings)&&(i.settings={inTangents:yr(e.settings.inTangents,Array),outTangents:yr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new $o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new qo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Yo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ha:t=this.InterpolantFactoryMethodDiscrete;break;case Fo:t=this.InterpolantFactoryMethodLinear;break;case Eo:t=this.InterpolantFactoryMethodSmooth;break;case kc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return vt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ha;case this.InterpolantFactoryMethodLinear:return Fo;case this.InterpolantFactoryMethodSmooth:return Eo;case this.InterpolantFactoryMethodBezier:return kc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Bc(this.settings)&&(td(this.settings.inTangents,e),td(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(_t("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(_t("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){_t("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){_t("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&im(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){_t("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Eo,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{let h=o*i,d=h-i,f=h+i;for(let v=0;v!==i;++v){let y=t[h+v];if(y!==t[d+v]||y!==t[f+v]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Bc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function td(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}ri.prototype.ValueTypeName="";ri.prototype.TimeBufferType=Float32Array;ri.prototype.ValueBufferType=Float32Array;ri.prototype.DefaultInterpolation=Fo;var Rs=class extends ri{constructor(e,t,i){super(e,t,i)}};Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=ha;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Zo=class extends ri{constructor(e,t,i,s){super(e,t,i,s)}};Zo.prototype.ValueTypeName="color";var Ko=class extends ri{constructor(e,t,i,s){super(e,t,i,s)}};Ko.prototype.ValueTypeName="number";var Jo=class extends Cs{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let u=l+o;l!==u;l+=4)$i.slerpFlat(r,0,a,l-o,a,l,c);return r}},wa=class extends ri{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Jo(this.times,this.values,this.getValueSize(),e)}};wa.prototype.ValueTypeName="quaternion";wa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ps=class extends ri{constructor(e,t,i){super(e,t,i)}};Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=ha;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var jo=class extends ri{constructor(e,t,i,s){super(e,t,i,s)}};jo.prototype.ValueTypeName="vector";var Ao={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(nd(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!nd(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function nd(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Qo=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],v=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},qd=new Qo,Nr=class{constructor(e){this.manager=e!==void 0?e:qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Nr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sr=new WeakMap,el=class extends Nr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ao.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Sr.get(a);h===void 0&&(h=[],Sr.set(a,h)),h.push({onLoad:t,onError:s})}return a}let o=Ar("img");function c(){u(),t&&t(this);let h=Sr.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Sr.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),Ao.remove(`image:${e}`);let d=Sr.get(this)||[];for(let f=0;f<d.length;f++){let v=d[f];v.onError&&v.onError(h)}Sr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ao.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var ds=class extends Nr{constructor(e){super(e)}load(e,t,i,s){let r=new xn,a=new el(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}};var Mo=new ie,wo=new $i,Wi=new ie,fs=class extends xi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Mo,wo,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,wo,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Mo,wo,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,wo,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ms=new ie,id=new mt,sd=new mt,On=class extends fs{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan(ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z),Ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ms.x,Ms.y).multiplyScalar(-e/Ms.z)}getViewSize(e,t){return this.getViewBounds(e,id,sd),t.subVectors(sd,id)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ca*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ea=class extends fs{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}};var br=-90,Mr=1,tl=class extends xi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new On(br,Mr,e,t);s.layers=this.layers,this.add(s);let r=new On(br,Mr,e,t);r.layers=this.layers,this.add(r);let a=new On(br,Mr,e,t);a.layers=this.layers,this.add(a);let o=new On(br,Mr,e,t);o.layers=this.layers,this.add(o);let c=new On(br,Mr,e,t);c.layers=this.layers,this.add(c);let l=new On(br,Mr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}},nl=class extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var xu="\\[\\]\\.:\\/",Gm=new RegExp("["+xu+"]","g"),_u="[^"+xu+"]",Wm="[^"+xu.replace("\\.","")+"]",Xm=/((?:WC+[\/:])*)/.source.replace("WC",_u),qm=/(WCOD+)?/.source.replace("WCOD",Wm),$m=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_u),Ym=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_u),Zm=new RegExp("^"+Xm+qm+$m+Ym+"$"),Km=["material","materials","bones","map"],Gc=class{constructor(e,t,i){let s=i||Qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Qt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gm,"")}static parseTrackName(e){let t=Zm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Km.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){vt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){_t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){_t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){_t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){_t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){_t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){_t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){_t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;_t("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){_t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){_t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qt.Composite=Gc;Qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qt.prototype.GetterByBindingType=[Qt.prototype._getValue_direct,Qt.prototype._getValue_array,Qt.prototype._getValue_arrayElement,Qt.prototype._getValue_toArray];Qt.prototype.SetterByBindingTypeAndVersioning=[[Qt.prototype._setValue_direct,Qt.prototype._setValue_direct_setNeedsUpdate,Qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_array,Qt.prototype._setValue_array_setNeedsUpdate,Qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_arrayElement,Qt.prototype._setValue_arrayElement_setNeedsUpdate,Qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_fromArray,Qt.prototype._setValue_fromArray_setNeedsUpdate,Qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $y=new Float32Array(1);var Wc=class n{static{n.prototype.isMatrix2=!0}constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};function yu(n,e,t,i){let s=Jm(i);switch(t){case uu:return n*e;case du:return n*e/s.components*s.byteLength;case cl:return n*e/s.components*s.byteLength;case Ds:return n*e*2/s.components*s.byteLength;case ul:return n*e*2/s.components*s.byteLength;case hu:return n*e*3/s.components*s.byteLength;case Pn:return n*e*4/s.components*s.byteLength;case hl:return n*e*4/s.components*s.byteLength;case Ra:case Pa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ia:case La:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fl:case ml:return Math.max(n,16)*Math.max(e,8)/4;case dl:case pl:return Math.max(n,8)*Math.max(e,8)/2;case gl:case vl:case _l:case yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xl:case Da:case Sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case bl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ml:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case wl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case El:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Tl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Al:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Cl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Pl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Il:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Ll:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Dl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Nl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ul:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fl:case Ol:case Bl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case kl:case zl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Na:case Hl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jm(n){switch(n){case ai:case au:return{byteLength:1,components:1};case Or:case ou:case Oi:return{byteLength:2,components:1};case ol:case ll:return{byteLength:2,components:4};case Ui:case al:case Fi:return{byteLength:4,components:1};case lu:case cu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function mf(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Qm(n){let e=new WeakMap;function t(o,c){let l=o.array,u=o.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){let u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,v)=>f.start-v.start);let d=0;for(let f=1;f<h.length;f++){let v=h[d],y=h[f];y.start<=v.start+v.count+1?v.count=Math.max(v.count,y.start+y.count-v.start):(++d,h[d]=y)}h.length=d+1;for(let f=0,v=h.length;f<v;f++){let y=h[f];n.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var e0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,n0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,r0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,o0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,c0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,f0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,p0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,b0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,M0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,w0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,E0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,T0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,k0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,V0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,q0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,$0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Z0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,J0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,j0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Q0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ng=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,ig=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ag=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,og=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ug=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,vg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_g=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Pg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ng=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Og=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,kg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$g=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ev=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,av=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ov=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_v=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ev=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Av=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Rv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tt={alphahash_fragment:e0,alphahash_pars_fragment:t0,alphamap_fragment:n0,alphamap_pars_fragment:i0,alphatest_fragment:s0,alphatest_pars_fragment:r0,aomap_fragment:a0,aomap_pars_fragment:o0,batching_pars_vertex:l0,batching_vertex:c0,begin_vertex:u0,beginnormal_vertex:h0,bsdfs:d0,iridescence_fragment:f0,bumpmap_pars_fragment:p0,clipping_planes_fragment:m0,clipping_planes_pars_fragment:g0,clipping_planes_pars_vertex:v0,clipping_planes_vertex:x0,color_fragment:_0,color_pars_fragment:y0,color_pars_vertex:S0,color_vertex:b0,common:M0,cube_uv_reflection_fragment:w0,defaultnormal_vertex:E0,displacementmap_pars_vertex:T0,displacementmap_vertex:A0,emissivemap_fragment:C0,emissivemap_pars_fragment:R0,colorspace_fragment:P0,colorspace_pars_fragment:I0,envmap_fragment:L0,envmap_common_pars_fragment:D0,envmap_pars_fragment:N0,envmap_pars_vertex:U0,envmap_physical_pars_fragment:q0,envmap_vertex:F0,fog_vertex:O0,fog_pars_vertex:B0,fog_fragment:k0,fog_pars_fragment:z0,gradientmap_pars_fragment:H0,lightmap_pars_fragment:V0,lights_lambert_fragment:G0,lights_lambert_pars_fragment:W0,lights_pars_begin:X0,lights_toon_fragment:$0,lights_toon_pars_fragment:Y0,lights_phong_fragment:Z0,lights_phong_pars_fragment:K0,lights_physical_fragment:J0,lights_physical_pars_fragment:j0,lights_fragment_begin:Q0,lights_fragment_maps:eg,lights_fragment_end:tg,lightprobes_pars_fragment:ng,logdepthbuf_fragment:ig,logdepthbuf_pars_fragment:sg,logdepthbuf_pars_vertex:rg,logdepthbuf_vertex:ag,map_fragment:og,map_pars_fragment:lg,map_particle_fragment:cg,map_particle_pars_fragment:ug,metalnessmap_fragment:hg,metalnessmap_pars_fragment:dg,morphinstance_vertex:fg,morphcolor_vertex:pg,morphnormal_vertex:mg,morphtarget_pars_vertex:gg,morphtarget_vertex:vg,normal_fragment_begin:xg,normal_fragment_maps:_g,normal_pars_fragment:yg,normal_pars_vertex:Sg,normal_vertex:bg,normalmap_pars_fragment:Mg,clearcoat_normal_fragment_begin:wg,clearcoat_normal_fragment_maps:Eg,clearcoat_pars_fragment:Tg,iridescence_pars_fragment:Ag,opaque_fragment:Cg,packing:Rg,premultiplied_alpha_fragment:Pg,project_vertex:Ig,dithering_fragment:Lg,dithering_pars_fragment:Dg,roughnessmap_fragment:Ng,roughnessmap_pars_fragment:Ug,shadowmap_pars_fragment:Fg,shadowmap_pars_vertex:Og,shadowmap_vertex:Bg,shadowmask_pars_fragment:kg,skinbase_vertex:zg,skinning_pars_vertex:Hg,skinning_vertex:Vg,skinnormal_vertex:Gg,specularmap_fragment:Wg,specularmap_pars_fragment:Xg,tonemapping_fragment:qg,tonemapping_pars_fragment:$g,transmission_fragment:Yg,transmission_pars_fragment:Zg,uv_pars_fragment:Kg,uv_pars_vertex:Jg,uv_vertex:jg,worldpos_vertex:Qg,background_vert:ev,background_frag:tv,backgroundCube_vert:nv,backgroundCube_frag:iv,cube_vert:sv,cube_frag:rv,depth_vert:av,depth_frag:ov,distance_vert:lv,distance_frag:cv,equirect_vert:uv,equirect_frag:hv,linedashed_vert:dv,linedashed_frag:fv,meshbasic_vert:pv,meshbasic_frag:mv,meshlambert_vert:gv,meshlambert_frag:vv,meshmatcap_vert:xv,meshmatcap_frag:_v,meshnormal_vert:yv,meshnormal_frag:Sv,meshphong_vert:bv,meshphong_frag:Mv,meshphysical_vert:wv,meshphysical_frag:Ev,meshtoon_vert:Tv,meshtoon_frag:Av,points_vert:Cv,points_frag:Rv,shadow_vert:Pv,shadow_frag:Iv,sprite_vert:Lv,sprite_frag:Dv},$e={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Qi={basic:{uniforms:Bn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Bn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Bn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Bn([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Bn([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Bn([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Bn([$e.points,$e.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Bn([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Bn([$e.common,$e.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Bn([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Bn([$e.sprite,$e.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:Bn([$e.common,$e.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:Bn([$e.lights,$e.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Qi.physical={uniforms:Bn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};var Wl={r:0,b:0,g:0},Nv=new ln,gf=new xt;gf.set(-1,0,0,0,1,0,0,0,1);function Uv(n,e,t,i,s,r){let a=new Ct(0),o=s===!0?0:1,c,l,u=null,h=0,d=null;function f(T){let I=T.isScene===!0?T.background:null;if(I&&I.isTexture){let S=T.backgroundBlurriness>0;I=e.get(I,S)}return I}function v(T){let I=!1,S=f(T);S===null?m(a,o):S&&S.isColor&&(m(S,1),I=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(T,I){let S=f(I);S&&(S.isCubeTexture||S.mapping===Aa)?(l===void 0&&(l=new mn(new Dr(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Qs(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Nv.makeRotationFromEuler(I.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(gf),l.material.toneMapped=At.getTransfer(S.colorSpace)!==Xt,(u!==S||h!==S.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,d=n.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new mn(new _i(2,2),new gn({name:"BackgroundMaterial",uniforms:Qs(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.toneMapped=At.getTransfer(S.colorSpace)!==Xt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,d=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,I){T.getRGB(Wl,vu(n)),t.buffers.color.setClear(Wl.r,Wl.g,Wl.b,I,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,I=1){a.set(T),o=I,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:v,addToRenderList:y,dispose:p}}function Fv(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(U,z,B,L,P){let V=!1,Y=h(U,L,B,z);r!==Y&&(r=Y,l(r.object)),V=f(U,L,B,P),V&&v(U,L,B,P),P!==null&&e.update(P,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,S(U,z,B,L),P!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function c(){return n.createVertexArray()}function l(U){return n.bindVertexArray(U)}function u(U){return n.deleteVertexArray(U)}function h(U,z,B,L){let P=L.wireframe===!0,V=i[z.id];V===void 0&&(V={},i[z.id]=V);let Y=U.isInstancedMesh===!0?U.id:0,ue=V[Y];ue===void 0&&(ue={},V[Y]=ue);let q=ue[B.id];q===void 0&&(q={},ue[B.id]=q);let le=q[P];return le===void 0&&(le=d(c()),q[P]=le),le}function d(U){let z=[],B=[],L=[];for(let P=0;P<t;P++)z[P]=0,B[P]=0,L[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:B,attributeDivisors:L,object:U,attributes:{},index:null}}function f(U,z,B,L){let P=r.attributes,V=z.attributes,Y=0,ue=B.getAttributes();for(let q in ue)if(ue[q].location>=0){let ce=P[q],Xe=V[q];if(Xe===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(Xe=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(Xe=U.instanceColor)),ce===void 0||ce.attribute!==Xe||Xe&&ce.data!==Xe.data)return!0;Y++}return r.attributesNum!==Y||r.index!==L}function v(U,z,B,L){let P={},V=z.attributes,Y=0,ue=B.getAttributes();for(let q in ue)if(ue[q].location>=0){let ce=V[q];ce===void 0&&(q==="instanceMatrix"&&U.instanceMatrix&&(ce=U.instanceMatrix),q==="instanceColor"&&U.instanceColor&&(ce=U.instanceColor));let Xe={};Xe.attribute=ce,ce&&ce.data&&(Xe.data=ce.data),P[q]=Xe,Y++}r.attributes=P,r.attributesNum=Y,r.index=L}function y(){let U=r.newAttributes;for(let z=0,B=U.length;z<B;z++)U[z]=0}function m(U){p(U,0)}function p(U,z){let B=r.newAttributes,L=r.enabledAttributes,P=r.attributeDivisors;B[U]=1,L[U]===0&&(n.enableVertexAttribArray(U),L[U]=1),P[U]!==z&&(n.vertexAttribDivisor(U,z),P[U]=z)}function T(){let U=r.newAttributes,z=r.enabledAttributes;for(let B=0,L=z.length;B<L;B++)z[B]!==U[B]&&(n.disableVertexAttribArray(B),z[B]=0)}function I(U,z,B,L,P,V,Y){Y===!0?n.vertexAttribIPointer(U,z,B,P,V):n.vertexAttribPointer(U,z,B,L,P,V)}function S(U,z,B,L){y();let P=L.attributes,V=B.getAttributes(),Y=z.defaultAttributeValues;for(let ue in V){let q=V[ue];if(q.location>=0){let le=P[ue];if(le===void 0&&(ue==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),ue==="instanceColor"&&U.instanceColor&&(le=U.instanceColor)),le!==void 0){let ce=le.normalized,Xe=le.itemSize,qe=e.get(le);if(qe===void 0)continue;let nt=qe.buffer,me=qe.type,xe=qe.bytesPerElement,X=me===n.INT||me===n.UNSIGNED_INT||le.gpuType===al;if(le.isInterleavedBufferAttribute){let W=le.data,_e=W.stride,Ce=le.offset;if(W.isInstancedInterleavedBuffer){for(let N=0;N<q.locationSize;N++)p(q.location+N,W.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let N=0;N<q.locationSize;N++)m(q.location+N);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let N=0;N<q.locationSize;N++)I(q.location+N,Xe/q.locationSize,me,ce,_e*xe,(Ce+Xe/q.locationSize*N)*xe,X)}else{if(le.isInstancedBufferAttribute){for(let W=0;W<q.locationSize;W++)p(q.location+W,le.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let W=0;W<q.locationSize;W++)m(q.location+W);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let W=0;W<q.locationSize;W++)I(q.location+W,Xe/q.locationSize,me,ce,Xe*xe,Xe/q.locationSize*W*xe,X)}}else if(Y!==void 0){let ce=Y[ue];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(q.location,ce);break;case 3:n.vertexAttrib3fv(q.location,ce);break;case 4:n.vertexAttrib4fv(q.location,ce);break;default:n.vertexAttrib1fv(q.location,ce)}}}}T()}function b(){M();for(let U in i){let z=i[U];for(let B in z){let L=z[B];for(let P in L){let V=L[P];for(let Y in V)u(V[Y].object),delete V[Y];delete L[P]}}delete i[U]}}function w(U){if(i[U.id]===void 0)return;let z=i[U.id];for(let B in z){let L=z[B];for(let P in L){let V=L[P];for(let Y in V)u(V[Y].object),delete V[Y];delete L[P]}}delete i[U.id]}function A(U){for(let z in i){let B=i[z];for(let L in B){let P=B[L];if(P[U.id]===void 0)continue;let V=P[U.id];for(let Y in V)u(V[Y].object),delete V[Y];delete P[U.id]}}}function x(U){for(let z in i){let B=i[z],L=U.isInstancedMesh===!0?U.id:0,P=B[L];if(P!==void 0){for(let V in P){let Y=P[V];for(let ue in Y)u(Y[ue].object),delete Y[ue];delete P[V]}delete B[L],Object.keys(B).length===0&&delete i[z]}}}function M(){D(),a=!0,r!==s&&(r=s,l(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:M,resetDefaultState:D,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:T}}function Ov(n,e,t){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),t.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Bv(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Pn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let x=A===Oi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ai&&A!==Fi&&!x&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",u=c(l);u!==l&&(vt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),I=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:v,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:I,maxFragmentUniforms:S,maxSamples:b,samples:w}}function kv(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Pi,o=new xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let v=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||v===null||v.length===0||r&&!m)r?u(null):l();else{let T=r?0:i,I=T*4,S=p.clippingState||null;c.value=S,S=u(v,d,I,f);for(let b=0;b!==I;++b)S[b]=t[b];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,v){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=c.value,v!==!0||m===null){let p=f+y*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let I=0,S=f;I!==y;++I,S+=4)a.copy(h[I]).applyMatrix4(T,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var Hr=4,zv=6,Hv=20,Vv=256,Fa=new Ea,$d=new Ct,Su=null,bu=0,Mu=0,wu=!1,Gv=new ie,er=new ie,ql=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=Gv}=r;Su=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Su,bu,Mu),this._renderer.xr.enabled=wu,e.scissorTest=!1,zr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Is||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Su=this._renderer.getRenderTarget(),bu=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:Oi,format:Pn,colorSpace:da,depthBuffer:!1},s=Yd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yd(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Wv(r)),this._blurMaterial=qv(r,e,t),this._ggxMaterial=Xv(r,e,t)}return s}_compileMaterial(e){let t=new mn(new Yi,e);this._renderer.compile(t,Fa)}_sceneToCubeUV(e,t,i,s,r){let c=new On(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor($d),h.toneMapping=Ni,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new Dr,new _a({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,p=!0):(m.color.copy($d),p=!0);for(let I=0;I<6;I++){let S=I%3;S===0?(c.up.set(0,l[I],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[I],r.y,r.z)):S===1?(c.up.set(0,0,l[I]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[I],r.z)):(c.up.set(0,l[I],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[I]));let b=this._cubeSize;zr(s,S*b,I>2?b:0,b,b),h.setRenderTarget(s),p&&h.render(y,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=T}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Is||e.mapping===js;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;zr(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,Fa)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=l*1.25,f=h*d,{_lodMax:v}=this,y=this._sizeLods[i],m=3*y*(i>v-Hr?i-v+Hr:0),p=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=v-t,zr(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,Fa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=v-i,zr(e,m,p,3*y,2*y),s.setRenderTarget(e),s.render(o,Fa)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-Hr?s-this._lodMax+Hr:0),d=4*(this._cubeSize-u);zr(t,h,d,3*u,2*u),a.setRenderTarget(t),a.render(c,Fa)}};function Wv(n){let e=[],t=[],i=n,s=n-Hr+1+zv;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,d=6,f=3,v=new Float32Array(f*d*h),y=new Float32Array(f*d*h);for(let p=0;p<h;p++){let T=p%3*2/3-1,I=p>2?0:-1,S=[T,I,0,T+2/3,I,0,T+2/3,I+1,0,T,I,0,T+2/3,I+1,0,T,I+1,0];v.set(S,f*d*p);for(let b=0;b<d;b++){let w=u[b*2]*2-1,A=u[b*2+1]*2-1;p===0?er.set(1,A,w):p===1?er.set(-w,1,-A):p===2?er.set(-w,A,1):p===3?er.set(-1,A,-w):p===4?er.set(-w,-1,A):er.set(w,A,-1),er.toArray(y,(p*d+b)*f)}}let m=new Yi;m.setAttribute("position",new gi(v,f)),m.setAttribute("outputDirection",new gi(y,f)),t.push(new mn(m,null)),i>Hr&&i--}return{lodMeshes:t,sizeLods:e}}function Yd(n,e,t){let i=new on(n,e,t);return i.texture.mapping=Aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zr(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Xv(n,e,t){return new gn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function qv(n,e,t){return new gn({name:"SphericalGaussianBlur",defines:{SAMPLES:Hv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Zl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Zd(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Kd(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yi,depthTest:!1,depthWrite:!1})}function Zl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var $l=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Sa(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Dr(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:Qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:yi});r.uniforms.tEquirect.value=t;let a=new mn(s,r),o=t.minFilter;return t.minFilter===Ji&&(t.minFilter=Lt),new tl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function $v(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===il||f===sl)if(e.has(d)){let v=e.get(d).texture;return o(v,d.mapping)}else{let v=d.image;if(v&&v.height>0){let y=new $l(v.height);return y.fromEquirectangularTexture(n,d),e.set(d,y),d.addEventListener("dispose",l),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,v=f===il||f===sl,y=f===Is||f===js;if(v||y){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new ql(n)),m=v?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let T=d.image;return v&&T&&T.height>0||y&&T&&c(T)?(i===null&&(i=new ql(n)),m=v?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,f){return f===il?d.mapping=Is:f===sl&&(d.mapping=js),d}function c(d){let f=0,v=6;for(let y=0;y<v;y++)d[y]!==void 0&&f++;return f===v}function l(d){let f=d.target;f.removeEventListener("dispose",l);let v=e.get(f);v!==void 0&&(e.delete(f),v.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let v=t.get(f);v!==void 0&&(t.delete(f),v.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Yv(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ys("WebGLRenderer: "+i+" extension not supported."),s}}}function Zv(n,e,t,i){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)e.update(d[f],n.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,v=h.attributes.position,y=0;if(v===void 0)return;if(f!==null){let T=f.array;y=f.version;for(let I=0,S=T.length;I<S;I+=3){let b=T[I+0],w=T[I+1],A=T[I+2];d.push(b,w,w,A,A,b)}}else{let T=v.array;y=v.version;for(let I=0,S=T.length/3-1;I<S;I+=3){let b=I+0,w=I+1,A=I+2;d.push(b,w,w,A,A,b)}}let m=new(v.count>=65535?xa:va)(d,1);m.version=y;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Kv(n,e,t){let i;function s(h){i=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,d){n.drawElements(i,d,r,h*a),t.update(d,i,1)}function l(h,d,f){f!==0&&(n.drawElementsInstanced(i,d,r,h*a,f),t.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Jv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:_t("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function jv(n,e,t){let i=new WeakMap,s=new Ut;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==h){let M=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],I=0;f===!0&&(I=1),v===!0&&(I=2),y===!0&&(I=3);let S=o.attributes.position.count*I,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let w=new Float32Array(S*b*4*h),A=new ma(w,S,b,h);A.type=Fi,A.needsUpdate=!0;let x=I*4;for(let D=0;D<h;D++){let U=m[D],z=p[D],B=T[D],L=S*b*4*D;for(let P=0;P<U.count;P++){let V=P*x;f===!0&&(s.fromBufferAttribute(U,P),w[L+V+0]=s.x,w[L+V+1]=s.y,w[L+V+2]=s.z,w[L+V+3]=0),v===!0&&(s.fromBufferAttribute(z,P),w[L+V+4]=s.x,w[L+V+5]=s.y,w[L+V+6]=s.z,w[L+V+7]=0),y===!0&&(s.fromBufferAttribute(B,P),w[L+V+8]=s.x,w[L+V+9]=s.y,w[L+V+10]=s.z,w[L+V+11]=B.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new mt(S,b)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let v=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",v),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Qv(n,e,t,i,s){let r=new WeakMap;function a(l){let u=s.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var ex={[jc]:"LINEAR_TONE_MAPPING",[Qc]:"REINHARD_TONE_MAPPING",[eu]:"CINEON_TONE_MAPPING",[tu]:"ACES_FILMIC_TONE_MAPPING",[iu]:"AGX_TONE_MAPPING",[su]:"NEUTRAL_TONE_MAPPING",[nu]:"CUSTOM_TONE_MAPPING"};function tx(n,e,t,i,s,r){let a=new on(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Yi;l.setAttribute("position",new vi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new vi([0,2,0,0,2,0],2));let u=new Vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new mn(l,u),d=new Ea(-1,1,1,-1,0,1),f=null,v=null,y=!1,m,p=null,T=[],I=!1;this.setSize=function(S,b){a.setSize(S,b),o!==null&&o.setSize(S,b),c!==null&&c.setSize(S,b);for(let w=0;w<T.length;w++){let A=T[w];A.setSize&&A.setSize(S,b)}},this.setEffects=function(S){T=S,I=T.length>0&&T[0].isRenderPass===!0;let b=a.width,w=a.height;T.length>0&&o===null&&(o=new on(b,w,{type:Oi,depthBuffer:!1,stencilBuffer:!1}),c=new on(b,w,{type:Oi,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<T.length;A++){let x=T[A];x.setSize&&x.setSize(b,w)}},this.begin=function(S,b){if(y||S.toneMapping===Ni&&T.length===0)return!1;if(p=b,b!==null){let w=b.width,A=b.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return I===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=Ni,!0},this.hasRenderPass=function(){return I},this.end=function(S,b){S.toneMapping=m,y=!0;let w=a,A=o;for(let x=0;x<T.length;x++){let M=T[x];M.enabled!==!1&&(M.render(S,A,w,b),M.needsSwap!==!1&&(w=A,A=A===o?c:o))}if(f!==S.outputColorSpace||v!==S.toneMapping){f=S.outputColorSpace,v=S.toneMapping,u.defines={},At.getTransfer(f)===Xt&&(u.defines.SRGB_TRANSFER="");let x=ex[v];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(p),S.render(h,d),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var vf=new xn,Au=new As(1,1),xf=new ma,_f=new ko,yf=new Sa,Jd=[],jd=[],Qd=new Float32Array(16),ef=new Float32Array(9),tf=new Float32Array(4);function Gr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Jd[s];if(r===void 0&&(r=new Float32Array(s),Jd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function _n(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function yn(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Kl(n,e){let t=jd[e];t===void 0&&(t=new Int32Array(e),jd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function nx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function ix(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2fv(this.addr,e),yn(t,e)}}function sx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;n.uniform3fv(this.addr,e),yn(t,e)}}function rx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4fv(this.addr,e),yn(t,e)}}function ax(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,i))return;tf.set(i),n.uniformMatrix2fv(this.addr,!1,tf),yn(t,i)}}function ox(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,i))return;ef.set(i),n.uniformMatrix3fv(this.addr,!1,ef),yn(t,i)}}function lx(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,i))return;Qd.set(i),n.uniformMatrix4fv(this.addr,!1,Qd),yn(t,i)}}function cx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ux(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2iv(this.addr,e),yn(t,e)}}function hx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3iv(this.addr,e),yn(t,e)}}function dx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4iv(this.addr,e),yn(t,e)}}function fx(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function px(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;n.uniform2uiv(this.addr,e),yn(t,e)}}function mx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;n.uniform3uiv(this.addr,e),yn(t,e)}}function gx(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;n.uniform4uiv(this.addr,e),yn(t,e)}}function vx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Au.compareFunction=t.isReversedDepthBuffer()?Gl:Vl,r=Au):r=vf,t.setTexture2D(e||r,s)}function xx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||_f,s)}function _x(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||yf,s)}function yx(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||xf,s)}function Sx(n){switch(n){case 5126:return nx;case 35664:return ix;case 35665:return sx;case 35666:return rx;case 35674:return ax;case 35675:return ox;case 35676:return lx;case 5124:case 35670:return cx;case 35667:case 35671:return ux;case 35668:case 35672:return hx;case 35669:case 35673:return dx;case 5125:return fx;case 36294:return px;case 36295:return mx;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return vx;case 35679:case 36299:case 36307:return xx;case 35680:case 36300:case 36308:case 36293:return _x;case 36289:case 36303:case 36311:case 36292:return yx}}function bx(n,e){n.uniform1fv(this.addr,e)}function Mx(n,e){let t=Gr(e,this.size,2);n.uniform2fv(this.addr,t)}function wx(n,e){let t=Gr(e,this.size,3);n.uniform3fv(this.addr,t)}function Ex(n,e){let t=Gr(e,this.size,4);n.uniform4fv(this.addr,t)}function Tx(n,e){let t=Gr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ax(n,e){let t=Gr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Cx(n,e){let t=Gr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Rx(n,e){n.uniform1iv(this.addr,e)}function Px(n,e){n.uniform2iv(this.addr,e)}function Ix(n,e){n.uniform3iv(this.addr,e)}function Lx(n,e){n.uniform4iv(this.addr,e)}function Dx(n,e){n.uniform1uiv(this.addr,e)}function Nx(n,e){n.uniform2uiv(this.addr,e)}function Ux(n,e){n.uniform3uiv(this.addr,e)}function Fx(n,e){n.uniform4uiv(this.addr,e)}function Ox(n,e,t){let i=this.cache,s=e.length,r=Kl(t,s);_n(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Au:a=vf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Bx(n,e,t){let i=this.cache,s=e.length,r=Kl(t,s);_n(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||_f,r[a])}function kx(n,e,t){let i=this.cache,s=e.length,r=Kl(t,s);_n(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||yf,r[a])}function zx(n,e,t){let i=this.cache,s=e.length,r=Kl(t,s);_n(i,r)||(n.uniform1iv(this.addr,r),yn(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||xf,r[a])}function Hx(n){switch(n){case 5126:return bx;case 35664:return Mx;case 35665:return wx;case 35666:return Ex;case 35674:return Tx;case 35675:return Ax;case 35676:return Cx;case 5124:case 35670:return Rx;case 35667:case 35671:return Px;case 35668:case 35672:return Ix;case 35669:case 35673:return Lx;case 5125:return Dx;case 36294:return Nx;case 36295:return Ux;case 36296:return Fx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ox;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return kx;case 36289:case 36303:case 36311:case 36292:return zx}}var Cu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Sx(t.type)}},Ru=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Hx(t.type)}},Pu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Eu=/(\w+)(\])?(\[|\.)?/g;function nf(n,e){n.seq.push(e),n.map[e.id]=e}function Vx(n,e,t){let i=n.name,s=i.length;for(Eu.lastIndex=0;;){let r=Eu.exec(i),a=Eu.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){nf(t,l===void 0?new Cu(o,n,e):new Ru(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new Pu(o),nf(t,h)),t=h}}}var Vr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Vx(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function sf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Gx=37297,Wx=0;function Xx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var rf=new xt;function qx(n){At._getMatrix(rf,At.workingColorSpace,n);let e=`mat3( ${rf.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(n)){case fa:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function af(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Xx(n.getShaderSource(e),o)}else return r}function $x(n,e){let t=qx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Yx={[jc]:"Linear",[Qc]:"Reinhard",[eu]:"Cineon",[tu]:"ACESFilmic",[iu]:"AgX",[su]:"Neutral",[nu]:"Custom"};function Zx(n,e){let t=Yx[e];return t===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xl=new ie;function Kx(){At.getLuminanceCoefficients(Xl);let n=Xl.x.toFixed(4),e=Xl.y.toFixed(4),t=Xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ba).join(`
`)}function jx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Qx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ba(n){return n!==""}function of(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lf(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var e_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iu(n){return n.replace(e_,n_)}var t_=new Map;function n_(n,e){let t=Tt[e];if(t===void 0){let i=t_.get(e);if(i!==void 0)t=Tt[i],vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Iu(t)}var i_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(n){return n.replace(i_,s_)}function s_(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uf(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var r_={[Ta]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"};function a_(n){return r_[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var o_={[Is]:"ENVMAP_TYPE_CUBE",[js]:"ENVMAP_TYPE_CUBE",[Aa]:"ENVMAP_TYPE_CUBE_UV"};function l_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":o_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var c_={[js]:"ENVMAP_MODE_REFRACTION"};function u_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":c_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var h_={[Jc]:"ENVMAP_BLENDING_MULTIPLY",[Td]:"ENVMAP_BLENDING_MIX",[Ad]:"ENVMAP_BLENDING_ADD"};function d_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":h_[n.combine]||"ENVMAP_BLENDING_NONE"}function f_(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function p_(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=a_(t),l=l_(t),u=u_(t),h=d_(t),d=f_(t),f=Jx(t),v=jx(r),y=s.createProgram(),m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ba).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ba).join(`
`),p.length>0&&(p+=`
`)):(m=[uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ba).join(`
`),p=[uf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?Tt.tonemapping_pars_fragment:"",t.toneMapping!==Ni?Zx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,$x("linearToOutputTexel",t.outputColorSpace),Kx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ba).join(`
`)),a=Iu(a),a=of(a,t),a=lf(a,t),o=Iu(o),o=of(o,t),o=lf(o,t),a=cf(a),o=cf(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let I=T+m+a,S=T+p+o,b=sf(s,s.VERTEX_SHADER,I),w=sf(s,s.FRAGMENT_SHADER,S);s.attachShader(y,b),s.attachShader(y,w),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function A(U){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(y)||"",B=s.getShaderInfoLog(b)||"",L=s.getShaderInfoLog(w)||"",P=z.trim(),V=B.trim(),Y=L.trim(),ue=!0,q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ue=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,b,w);else{let le=af(s,b,"vertex"),ce=af(s,w,"fragment");_t("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+P+`
`+le+`
`+ce)}else P!==""?vt("WebGLProgram: Program Info Log:",P):(V===""||Y==="")&&(q=!1);q&&(U.diagnostics={runnable:ue,programLog:P,vertexShader:{log:V,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(b),s.deleteShader(w),x=new Vr(s,y),M=Qx(s,y)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(y,Gx)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wx++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=w,this}var m_=0,Lu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Du(e),t.set(e,i)),i}},Du=class{constructor(e){this.id=m_++,this.code=e,this.usedTimes=0}};function g_(n){return n===Ds||n===Da||n===Na}function v_(n,e,t,i,s,r){let a=new ga,o=new Lu,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return c.add(x),x===0?"uv":`uv${x}`}function y(x,M,D,U,z,B){let L=U.fog,P=z.geometry,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ue=e.get(x.envMap||V,Y),q=ue&&ue.mapping===Aa?ue.image.height:null,le=f[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&vt("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let ce=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Xe=ce!==void 0?ce.length:0,qe=0;P.morphAttributes.position!==void 0&&(qe=1),P.morphAttributes.normal!==void 0&&(qe=2),P.morphAttributes.color!==void 0&&(qe=3);let nt,me,xe,X;if(le){let Rt=Qi[le];nt=Rt.vertexShader,me=Rt.fragmentShader}else{nt=x.vertexShader,me=x.fragmentShader;let Rt=o.getVertexShaderStage(x),pt=o.getFragmentShaderStage(x);o.update(x,Rt,pt),xe=Rt.id,X=pt.id}let W=n.getRenderTarget(),_e=n.state.buffers.depth.getReversed(),Ce=z.isInstancedMesh===!0,N=z.isBatchedMesh===!0,ae=!!x.map,ye=!!x.matcap,K=!!ue,pe=!!x.aoMap,R=!!x.lightMap,G=!!x.bumpMap&&x.wireframe===!1,J=!!x.normalMap,oe=!!x.displacementMap,Ee=!!x.emissiveMap,Se=!!x.metalnessMap,Ve=!!x.roughnessMap,C=x.anisotropy>0,Ye=x.clearcoat>0,Be=x.dispersion>0,E=x.retroreflectivity>0,g=x.iridescence>0,k=x.sheen>0,j=x.transmission>0,se=C&&!!x.anisotropyMap,fe=Ye&&!!x.clearcoatMap,we=Ye&&!!x.clearcoatNormalMap,te=Ye&&!!x.clearcoatRoughnessMap,re=g&&!!x.iridescenceMap,be=g&&!!x.iridescenceThicknessMap,je=k&&!!x.sheenColorMap,Ne=k&&!!x.sheenRoughnessMap,Le=!!x.specularMap,Qe=!!x.specularColorMap,it=!!x.specularIntensityMap,ft=j&&!!x.transmissionMap,H=j&&!!x.thicknessMap,Me=!!x.gradientMap,de=!!x.alphaMap,Ue=x.alphaTest>0,ke=!!x.alphaHash,ve=!!x.extensions,et=Ni;x.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(et=n.toneMapping);let Ze={shaderID:le,shaderType:x.type,shaderName:x.name,vertexShader:nt,fragmentShader:me,defines:x.defines,customVertexShaderID:xe,customFragmentShaderID:X,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:N,batchingColor:N&&z._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&z.instanceColor!==null,instancingMorph:Ce&&z.morphTexture!==null,outputColorSpace:W===null?n.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ae,matcap:ye,envMap:K,envMapMode:K&&ue.mapping,envMapCubeUVHeight:q,aoMap:pe,lightMap:R,bumpMap:G,normalMap:J,displacementMap:oe,emissiveMap:Ee,normalMapObjectSpace:J&&x.normalMapType===Pd,normalMapTangentSpace:J&&x.normalMapType===fu,packedNormalMap:J&&x.normalMapType===fu&&g_(x.normalMap.format),metalnessMap:Se,roughnessMap:Ve,anisotropy:C,anisotropyMap:se,clearcoat:Ye,clearcoatMap:fe,clearcoatNormalMap:we,clearcoatRoughnessMap:te,dispersion:Be,retroreflection:E,iridescence:g,iridescenceMap:re,iridescenceThicknessMap:be,sheen:k,sheenColorMap:je,sheenRoughnessMap:Ne,specularMap:Le,specularColorMap:Qe,specularIntensityMap:it,transmission:j,transmissionMap:ft,thicknessMap:H,gradientMap:Me,opaque:x.transparent===!1&&x.blending===Fr&&x.alphaToCoverage===!1,alphaMap:de,alphaTest:Ue,alphaHash:ke,combine:x.combine,mapUv:ae&&v(x.map.channel),aoMapUv:pe&&v(x.aoMap.channel),lightMapUv:R&&v(x.lightMap.channel),bumpMapUv:G&&v(x.bumpMap.channel),normalMapUv:J&&v(x.normalMap.channel),displacementMapUv:oe&&v(x.displacementMap.channel),emissiveMapUv:Ee&&v(x.emissiveMap.channel),metalnessMapUv:Se&&v(x.metalnessMap.channel),roughnessMapUv:Ve&&v(x.roughnessMap.channel),anisotropyMapUv:se&&v(x.anisotropyMap.channel),clearcoatMapUv:fe&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:we&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:be&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:je&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&v(x.sheenRoughnessMap.channel),specularMapUv:Le&&v(x.specularMap.channel),specularColorMapUv:Qe&&v(x.specularColorMap.channel),specularIntensityMapUv:it&&v(x.specularIntensityMap.channel),transmissionMapUv:ft&&v(x.transmissionMap.channel),thicknessMapUv:H&&v(x.thicknessMap.channel),alphaMapUv:de&&v(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(J||C),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!P.attributes.uv&&(ae||de),fog:!!L,useFog:x.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&J===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:_e,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Xe,morphTextureStride:qe,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:et,decodeVideoTexture:ae&&x.map.isVideoTexture===!0&&At.getTransfer(x.map.colorSpace)===Xt,decodeVideoTextureEmissive:Ee&&x.emissiveMap.isVideoTexture===!0&&At.getTransfer(x.emissiveMap.colorSpace)===Xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ki,flipSided:x.side===cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ve&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&x.extensions.multiDraw===!0||N)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function m(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)M.push(D),M.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(p(M,x),T(M,x),M.push(n.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function p(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function T(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function I(x){let M=f[x.type],D;if(M){let U=Qi[M];D=Wd.clone(U.uniforms)}else D=x.uniforms;return D}function S(x,M){let D=u.get(M);return D!==void 0?++D.usedTimes:(D=new p_(n,M,x,s),l.push(D),u.set(M,D)),D}function b(x){if(--x.usedTimes===0){let M=l.indexOf(x);l[M]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function A(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:I,acquireProgram:S,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:A}}function x_(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function __(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function hf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function df(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,v,y,m,p){let T=n[e];return T===void 0?(T={id:d.id,object:d,geometry:f,material:v,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:p},n[e]=T):(T.id=d.id,T.object=d,T.geometry=f,T.material=v,T.materialVariant=a(d),T.groupOrder=y,T.renderOrder=d.renderOrder,T.z=m,T.group=p),e++,T}function c(d,f,v,y,m,p,T){T.reversedDepth===!0&&(m=-m);let I=o(d,f,v,y,m,p);v.transmission>0?i.push(I):v.transparent===!0?s.push(I):t.push(I)}function l(d,f,v,y,m,p){let T=o(d,f,v,y,m,p);v.transmission>0?i.unshift(T):v.transparent===!0?s.unshift(T):t.unshift(T)}function u(d,f){t.length>1&&t.sort(d||__),i.length>1&&i.sort(f||hf),s.length>1&&s.sort(f||hf)}function h(){for(let d=e,f=n.length;d<f;d++){let v=n[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function y_(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new df,n.set(i,[a])):s>=r.length?(a=new df,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function S_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ie,color:new Ct};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return n[e.id]=t,t}}}function b_(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var M_=0;function w_(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function E_(n){let e=new S_,t=b_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new ie);let s=new ie,r=new ln,a=new ln;function o(l){let u=0,h=0,d=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let f=0,v=0,y=0,m=0,p=0,T=0,I=0,S=0,b=0,w=0,A=0,x=0,M=0,D=0;l.sort(w_);for(let z=0,B=l.length;z<B;z++){let L=l[z],P=L.color,V=L.intensity,Y=L.distance,ue=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Ds?ue=L.shadow.map.texture:ue=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=P.r*V,h+=P.g*V,d+=P.b*V;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],V);D++}else if(L.isSunLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let le=L.shadow,ce=t.get(L);ce.shadowIntensity=le.intensity,ce.shadowBias=le.bias,ce.shadowNormalBias=le.normalBias,ce.shadowRadius=le.radius,ce.shadowMapSize.copy(le.mapSize).multiply(le.getFrameExtents()),i.sunShadow[v]=ce,i.sunShadowMap[v]=ue;let Xe=le.getViewportCount();for(let qe=0;qe<Xe;qe++)i.sunShadowMatrix[y+qe]=le.getMatrix(qe),i.sunShadowCascade[y+qe]=le._cascadeData[qe];y+=Xe,v++}i.sun[f]=q,f++}else if(L.isDirectionalLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let le=L.shadow,ce=t.get(L);ce.shadowIntensity=le.intensity,ce.shadowBias=le.bias,ce.shadowNormalBias=le.normalBias,ce.shadowRadius=le.radius,ce.shadowMapSize=le.mapSize,i.directionalShadow[m]=ce,i.directionalShadowMap[m]=ue,i.directionalShadowMatrix[m]=L.shadow.matrix,b++}i.directional[m]=q,m++}else if(L.isSpotLight){let q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(P).multiplyScalar(V),q.distance=Y,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[T]=q;let le=L.shadow;if(L.map&&(i.spotLightMap[x]=L.map,x++,le.updateMatrices(L),L.castShadow&&M++),i.spotLightMatrix[T]=le.matrix,L.castShadow){let ce=t.get(L);ce.shadowIntensity=le.intensity,ce.shadowBias=le.bias,ce.shadowNormalBias=le.normalBias,ce.shadowRadius=le.radius,ce.shadowMapSize=le.mapSize,i.spotShadow[T]=ce,i.spotShadowMap[T]=ue,A++}T++}else if(L.isRectAreaLight){let q=e.get(L);q.color.copy(P).multiplyScalar(V),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[I]=q,I++}else if(L.isPointLight){let q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){let le=L.shadow,ce=t.get(L);ce.shadowIntensity=le.intensity,ce.shadowBias=le.bias,ce.shadowNormalBias=le.normalBias,ce.shadowRadius=le.radius,ce.shadowMapSize=le.mapSize,ce.shadowCameraNear=le.camera.near,ce.shadowCameraFar=le.camera.far,i.pointShadow[p]=ce,i.pointShadowMap[p]=ue,i.pointShadowMatrix[p]=L.shadow.matrix,w++}i.point[p]=q,p++}else if(L.isHemisphereLight){let q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(V),q.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[S]=q,S++}}I>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=$e.LTC_FLOAT_1,i.rectAreaLTC2=$e.LTC_FLOAT_2):(i.rectAreaLTC1=$e.LTC_HALF_1,i.rectAreaLTC2=$e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;let U=i.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==p||U.spotLength!==T||U.rectAreaLength!==I||U.hemiLength!==S||U.numSunShadows!==v||U.numDirectionalShadows!==b||U.numPointShadows!==w||U.numSpotShadows!==A||U.numSpotMaps!==x||U.numLightProbes!==D)&&(i.sun.length=f,i.directional.length=m,i.spot.length=T,i.rectArea.length=I,i.point.length=p,i.hemi.length=S,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+x-M,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=D,U.sunLength=f,U.directionalLength=m,U.pointLength=p,U.spotLength=T,U.rectAreaLength=I,U.hemiLength=S,U.numSunShadows=v,U.numDirectionalShadows=b,U.numPointShadows=w,U.numSpotShadows=A,U.numSpotMaps=x,U.numLightProbes=D,i.version=M_++)}function c(l,u){let h=0,d=0,f=0,v=0,y=0,m=0,p=u.matrixWorldInverse;for(let T=0,I=l.length;T<I;T++){let S=l[T];if(S.isSunLight){let b=i.sun[h];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),h++}else if(S.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(S.isSpotLight){let b=i.spot[v];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),v++}else if(S.isRectAreaLight){let b=i.rectArea[y];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(S.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){let b=i.point[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function ff(n){let e=new E_(n),t=[],i=[],s=[];function r(d){h.camera=d,t.length=0,i.length=0,s.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function u(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function T_(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new ff(n),e.set(s,[o])):r>=a.length?(o=new ff(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var A_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,C_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,R_=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],P_=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],pf=new ln,Oa=new ie,Tu=new ie;function I_(n,e,t){let i=new ya,s=new mt,r=new mt,a=new Ut,o=new Go,c=new Wo,l={},u=t.maxTextureSize,h={[Zi]:cn,[cn]:Zi,[Ki]:Ki},d=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:A_,fragmentShader:C_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let v=new Yi;v.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new mn(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ta;let p=this.type;this.render=function(w,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===od&&(vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ta);let M=n.getRenderTarget(),D=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),z=n.state;z.setBlending(yi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let B=p!==this.type;B&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(P=>P.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,P=w.length;L<P;L++){let V=w[L],Y=V.shadow;if(Y===void 0){vt("WebGLShadowMap:",V,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let ue=Y.getFrameExtents();s.multiply(ue),r.copy(Y.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ue.x),s.x=r.x*ue.x,Y.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ue.y),s.y=r.y*ue.y,Y.mapSize.y=r.y));let q=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=q,Y.map===null||B===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Ur){if(V.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new on(s.x,s.y,{format:Ds,type:Oi,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),Y.map.texture.name=V.name+".shadowMap",Y.map.depthTexture=new As(s.x,s.y,Fi),Y.map.depthTexture.name=V.name+".shadowMapDepth",Y.map.depthTexture.format=Xi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=En,Y.map.depthTexture.magFilter=En}else V.isPointLight?(Y.map=new $l(s.x),Y.map.depthTexture=new Ho(s.x,Ui)):(Y.map=new on(s.x,s.y),Y.map.depthTexture=new As(s.x,s.y,Ui)),Y.map.depthTexture.name=V.name+".shadowMap",Y.map.depthTexture.format=Xi,this.type===Ta?(Y.map.depthTexture.compareFunction=q?Gl:Vl,Y.map.depthTexture.minFilter=Lt,Y.map.depthTexture.magFilter=Lt):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=En,Y.map.depthTexture.magFilter=En);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let le=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();V.isPointLight!==!0&&Y.updateMatrices(V,x);for(let ce=0;ce<le;ce++){let Xe=Y.getCamera(ce);if(V.isPointLight){let qe=Y.camera,nt=Y.matrix,me=V.distance||qe.far;me!==qe.far&&(qe.far=me,qe.updateProjectionMatrix()),Oa.setFromMatrixPosition(V.matrixWorld),qe.position.copy(Oa),Tu.copy(qe.position),Tu.add(R_[ce]),qe.up.copy(P_[ce]),qe.lookAt(Tu),qe.updateMatrixWorld(),nt.makeTranslation(-Oa.x,-Oa.y,-Oa.z),pf.multiplyMatrices(qe.projectionMatrix,qe.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(pf,qe.coordinateSystem,qe.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,ce),n.clear();else{ce===0&&(n.setRenderTarget(Y.map),n.clear());let qe=Y.getViewport(ce);a.set(r.x*qe.x,r.y*qe.y,r.x*qe.z,r.y*qe.w),z.viewport(a)}i=Y.getFrustum(ce),S(A,x,Xe,V,this.type)}Y.isPointLightShadow!==!0&&this.type===Ur&&T(Y,x),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(M,D,U)};function T(w,A){let x=e.update(y);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new on(s.x,s.y,{format:Ds,type:Oi}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,x,d,y,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,x,f,y,null)}function I(w,A,x,M){let D=null,U=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)D=U;else if(D=x.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let z=D.uuid,B=A.uuid,L=l[z];L===void 0&&(L={},l[z]=L);let P=L[B];P===void 0&&(P=D.clone(),L[B]=P,A.addEventListener("dispose",b)),D=P}if(D.visible=A.visible,D.wireframe=A.wireframe,M===Ur?D.side=A.shadowSide!==null?A.shadowSide:A.side:D.side=A.shadowSide!==null?A.shadowSide:h[A.side],D.alphaMap=A.alphaMap,D.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,D.map=A.map,D.clipShadows=A.clipShadows,D.clippingPlanes=A.clippingPlanes,D.clipIntersection=A.clipIntersection,D.displacementMap=A.displacementMap,D.displacementScale=A.displacementScale,D.displacementBias=A.displacementBias,D.wireframeLinewidth=A.wireframeLinewidth,D.linewidth=A.linewidth,x.isPointLight===!0&&D.isMeshDistanceMaterial===!0){let z=n.properties.get(D);z.light=x}return D}function S(w,A,x,M,D){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&D===Ur)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let B=e.update(w),L=w.material;if(Array.isArray(L)){let P=B.groups;for(let V=0,Y=P.length;V<Y;V++){let ue=P[V],q=L[ue.materialIndex];if(q&&q.visible){let le=I(w,q,M,D);w.onBeforeShadow(n,w,A,x,B,le,ue),n.renderBufferDirect(x,null,B,le,w,ue),w.onAfterShadow(n,w,A,x,B,le,ue)}}}else if(L.visible){let P=I(w,L,M,D);w.onBeforeShadow(n,w,A,x,B,P,null),n.renderBufferDirect(x,null,B,P,w,null),w.onAfterShadow(n,w,A,x,B,P,null)}}let z=w.children;for(let B=0,L=z.length;B<L;B++)S(z[B],A,x,M,D)}function b(w){w.target.removeEventListener("dispose",b);for(let x in l){let M=l[x],D=w.target.uuid;D in M&&(M[D].dispose(),delete M[D])}}}function L_(n,e){function t(){let H=!1,Me=new Ut,de=null,Ue=new Ut(0,0,0,0);return{setMask:function(ke){de!==ke&&!H&&(n.colorMask(ke,ke,ke,ke),de=ke)},setLocked:function(ke){H=ke},setClear:function(ke,ve,et,Ze,Rt){Rt===!0&&(ke*=Ze,ve*=Ze,et*=Ze),Me.set(ke,ve,et,Ze),Ue.equals(Me)===!1&&(n.clearColor(ke,ve,et,Ze),Ue.copy(Me))},reset:function(){H=!1,de=null,Ue.set(-1,0,0,0)}}}function i(){let H=!1,Me=!1,de=null,Ue=null,ke=null;return{setReversed:function(ve){if(Me!==ve){let et=e.get("EXT_clip_control");ve?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Me=ve;let Ze=ke;ke=null,this.setClear(Ze)}},getReversed:function(){return Me},setTest:function(ve){ve?W(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(ve){de!==ve&&!H&&(n.depthMask(ve),de=ve)},setFunc:function(ve){if(Me&&(ve=Vd[ve]),Ue!==ve){switch(ve){case Co:n.depthFunc(n.NEVER);break;case Ro:n.depthFunc(n.ALWAYS);break;case Po:n.depthFunc(n.LESS);break;case Tr:n.depthFunc(n.LEQUAL);break;case Io:n.depthFunc(n.EQUAL);break;case Lo:n.depthFunc(n.GEQUAL);break;case Do:n.depthFunc(n.GREATER);break;case No:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ue=ve}},setLocked:function(ve){H=ve},setClear:function(ve){ke!==ve&&(ke=ve,Me&&(ve=1-ve),n.clearDepth(ve))},reset:function(){H=!1,de=null,Ue=null,ke=null,Me=!1}}}function s(){let H=!1,Me=null,de=null,Ue=null,ke=null,ve=null,et=null,Ze=null,Rt=null;return{setTest:function(pt){H||(pt?W(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(pt){Me!==pt&&!H&&(n.stencilMask(pt),Me=pt)},setFunc:function(pt,Vt,Jt){(de!==pt||Ue!==Vt||ke!==Jt)&&(n.stencilFunc(pt,Vt,Jt),de=pt,Ue=Vt,ke=Jt)},setOp:function(pt,Vt,Jt){(ve!==pt||et!==Vt||Ze!==Jt)&&(n.stencilOp(pt,Vt,Jt),ve=pt,et=Vt,Ze=Jt)},setLocked:function(pt){H=pt},setClear:function(pt){Rt!==pt&&(n.clearStencil(pt),Rt=pt)},reset:function(){H=!1,Me=null,de=null,Ue=null,ke=null,ve=null,et=null,Ze=null,Rt=null}}}let r=new t,a=new i,o=new s,c=new WeakMap,l=new WeakMap,u={},h={},d={},f=new WeakMap,v=[],y=null,m=!1,p=null,T=null,I=null,S=null,b=null,w=null,A=null,x=new Ct(0,0,0),M=0,D=!1,U=null,z=null,B=null,L=null,P=null,V=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,ue=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(q)[1]),Y=ue>=1):q.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),Y=ue>=2);let le=null,ce={},Xe=n.getParameter(n.SCISSOR_BOX),qe=n.getParameter(n.VIEWPORT),nt=new Ut().fromArray(Xe),me=new Ut().fromArray(qe);function xe(H,Me,de,Ue){let ke=new Uint8Array(4),ve=n.createTexture();n.bindTexture(H,ve),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<de;et++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(Me+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return ve}let X={};X[n.TEXTURE_2D]=xe(n.TEXTURE_2D,n.TEXTURE_2D,1),X[n.TEXTURE_CUBE_MAP]=xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[n.TEXTURE_2D_ARRAY]=xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),X[n.TEXTURE_3D]=xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),W(n.DEPTH_TEST),a.setFunc(Tr),G(!1),J(Xc),W(n.CULL_FACE),pe(yi);function W(H){u[H]!==!0&&(n.enable(H),u[H]=!0)}function _e(H){u[H]!==!1&&(n.disable(H),u[H]=!1)}function Ce(H,Me){return d[H]!==Me?(n.bindFramebuffer(H,Me),d[H]=Me,H===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Me),H===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function N(H,Me){let de=v,Ue=!1;if(H){de=f.get(Me),de===void 0&&(de=[],f.set(Me,de));let ke=H.textures;if(de.length!==ke.length||de[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,et=ke.length;ve<et;ve++)de[ve]=n.COLOR_ATTACHMENT0+ve;de.length=ke.length,Ue=!0}}else de[0]!==n.BACK&&(de[0]=n.BACK,Ue=!0);Ue&&n.drawBuffers(de)}function ae(H){return y!==H?(n.useProgram(H),y=H,!0):!1}let ye={[Js]:n.FUNC_ADD,[cd]:n.FUNC_SUBTRACT,[ud]:n.FUNC_REVERSE_SUBTRACT};ye[hd]=n.MIN,ye[dd]=n.MAX;let K={[fd]:n.ZERO,[pd]:n.ONE,[md]:n.SRC_COLOR,[Zc]:n.SRC_ALPHA,[Sd]:n.SRC_ALPHA_SATURATE,[_d]:n.DST_COLOR,[vd]:n.DST_ALPHA,[gd]:n.ONE_MINUS_SRC_COLOR,[Kc]:n.ONE_MINUS_SRC_ALPHA,[yd]:n.ONE_MINUS_DST_COLOR,[xd]:n.ONE_MINUS_DST_ALPHA,[bd]:n.CONSTANT_COLOR,[Md]:n.ONE_MINUS_CONSTANT_COLOR,[wd]:n.CONSTANT_ALPHA,[Ed]:n.ONE_MINUS_CONSTANT_ALPHA};function pe(H,Me,de,Ue,ke,ve,et,Ze,Rt,pt){if(H===yi){m===!0&&(_e(n.BLEND),m=!1);return}if(m===!1&&(W(n.BLEND),m=!0),H!==ld){if(H!==p||pt!==D){if((T!==Js||b!==Js)&&(n.blendEquation(n.FUNC_ADD),T=Js,b=Js),pt)switch(H){case Fr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qc:n.blendFunc(n.ONE,n.ONE);break;case $c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:_t("WebGLState: Invalid blending: ",H);break}else switch(H){case Fr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case $c:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yc:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",H);break}I=null,S=null,w=null,A=null,x.set(0,0,0),M=0,p=H,D=pt}return}ke=ke||Me,ve=ve||de,et=et||Ue,(Me!==T||ke!==b)&&(n.blendEquationSeparate(ye[Me],ye[ke]),T=Me,b=ke),(de!==I||Ue!==S||ve!==w||et!==A)&&(n.blendFuncSeparate(K[de],K[Ue],K[ve],K[et]),I=de,S=Ue,w=ve,A=et),(Ze.equals(x)===!1||Rt!==M)&&(n.blendColor(Ze.r,Ze.g,Ze.b,Rt),x.copy(Ze),M=Rt),p=H,D=!1}function R(H,Me){H.side===Ki?_e(n.CULL_FACE):W(n.CULL_FACE);let de=H.side===cn;Me&&(de=!de),G(de),H.blending===Fr&&H.transparent===!1?pe(yi):pe(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),r.setMask(H.colorWrite);let Ue=H.stencilWrite;o.setTest(Ue),Ue&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ee(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?W(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function G(H){U!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),U=H)}function J(H){H!==rd?(W(n.CULL_FACE),H!==z&&(H===Xc?n.cullFace(n.BACK):H===ad?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),z=H}function oe(H){H!==B&&(Y&&n.lineWidth(H),B=H)}function Ee(H,Me,de){H?(W(n.POLYGON_OFFSET_FILL),(L!==Me||P!==de)&&(L=Me,P=de,a.getReversed()&&(Me=-Me),n.polygonOffset(Me,de))):_e(n.POLYGON_OFFSET_FILL)}function Se(H){H?W(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function Ve(H){H===void 0&&(H=n.TEXTURE0+V-1),le!==H&&(n.activeTexture(H),le=H)}function C(H,Me,de){de===void 0&&(le===null?de=n.TEXTURE0+V-1:de=le);let Ue=ce[de];Ue===void 0&&(Ue={type:void 0,texture:void 0},ce[de]=Ue),(Ue.type!==H||Ue.texture!==Me)&&(le!==de&&(n.activeTexture(de),le=de),n.bindTexture(H,Me||X[H]),Ue.type=H,Ue.texture=Me)}function Ye(){let H=ce[le];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Be(){try{n.compressedTexImage2D(...arguments)}catch(H){_t("WebGLState:",H)}}function E(){try{n.compressedTexImage3D(...arguments)}catch(H){_t("WebGLState:",H)}}function g(){try{n.texSubImage2D(...arguments)}catch(H){_t("WebGLState:",H)}}function k(){try{n.texSubImage3D(...arguments)}catch(H){_t("WebGLState:",H)}}function j(){try{n.compressedTexSubImage2D(...arguments)}catch(H){_t("WebGLState:",H)}}function se(){try{n.compressedTexSubImage3D(...arguments)}catch(H){_t("WebGLState:",H)}}function fe(){try{n.texStorage2D(...arguments)}catch(H){_t("WebGLState:",H)}}function we(){try{n.texStorage3D(...arguments)}catch(H){_t("WebGLState:",H)}}function te(){try{n.texImage2D(...arguments)}catch(H){_t("WebGLState:",H)}}function re(){try{n.texImage3D(...arguments)}catch(H){_t("WebGLState:",H)}}function be(H){return h[H]!==void 0?h[H]:n.getParameter(H)}function je(H,Me){h[H]!==Me&&(n.pixelStorei(H,Me),h[H]=Me)}function Ne(H){nt.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),nt.copy(H))}function Le(H){me.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),me.copy(H))}function Qe(H,Me){let de=l.get(Me);de===void 0&&(de=new WeakMap,l.set(Me,de));let Ue=de.get(H);Ue===void 0&&(Ue=n.getUniformBlockIndex(Me,H.name),de.set(H,Ue))}function it(H,Me){let Ue=l.get(Me).get(H);c.get(Me)!==Ue&&(n.uniformBlockBinding(Me,Ue,H.__bindingPointIndex),c.set(Me,Ue))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},h={},le=null,ce={},d={},f=new WeakMap,v=[],y=null,m=!1,p=null,T=null,I=null,S=null,b=null,w=null,A=null,x=new Ct(0,0,0),M=0,D=!1,U=null,z=null,B=null,L=null,P=null,nt.set(0,0,n.canvas.width,n.canvas.height),me.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:W,disable:_e,bindFramebuffer:Ce,drawBuffers:N,useProgram:ae,setBlending:pe,setMaterial:R,setFlipSided:G,setCullFace:J,setLineWidth:oe,setPolygonOffset:Ee,setScissorTest:Se,activeTexture:Ve,bindTexture:C,unbindTexture:Ye,compressedTexImage2D:Be,compressedTexImage3D:E,texImage2D:te,texImage3D:re,pixelStorei:je,getParameter:be,updateUBOMapping:Qe,uniformBlockBinding:it,texStorage2D:fe,texStorage3D:we,texSubImage2D:g,texSubImage3D:k,compressedTexSubImage2D:j,compressedTexSubImage3D:se,scissor:Ne,viewport:Le,reset:ft}}function D_(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new mt,u=new WeakMap,h=new Set,d,f=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(E,g){return v?new OffscreenCanvas(E,g):Ar("canvas")}function m(E,g,k){let j=1,se=Be(E);if((se.width>k||se.height>k)&&(j=k/Math.max(se.width,se.height)),j<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let fe=Math.floor(j*se.width),we=Math.floor(j*se.height);d===void 0&&(d=y(fe,we));let te=g?y(fe,we):d;return te.width=fe,te.height=we,te.getContext("2d").drawImage(E,0,0,fe,we),vt("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+fe+"x"+we+")."),te}else return"data"in E&&vt("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),E;return E}function p(E){return E.generateMipmaps}function T(E){n.generateMipmap(E)}function I(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(E,g,k,j,se,fe=!1){if(E!==null){if(n[E]!==void 0)return n[E];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let we;j&&(we=e.get("EXT_texture_norm16"),we||vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=g;if(g===n.RED&&(k===n.FLOAT&&(te=n.R32F),k===n.HALF_FLOAT&&(te=n.R16F),k===n.UNSIGNED_BYTE&&(te=n.R8),k===n.UNSIGNED_SHORT&&we&&(te=we.R16_EXT),k===n.SHORT&&we&&(te=we.R16_SNORM_EXT)),g===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(te=n.R8UI),k===n.UNSIGNED_SHORT&&(te=n.R16UI),k===n.UNSIGNED_INT&&(te=n.R32UI),k===n.BYTE&&(te=n.R8I),k===n.SHORT&&(te=n.R16I),k===n.INT&&(te=n.R32I)),g===n.RG&&(k===n.FLOAT&&(te=n.RG32F),k===n.HALF_FLOAT&&(te=n.RG16F),k===n.UNSIGNED_BYTE&&(te=n.RG8),k===n.UNSIGNED_SHORT&&we&&(te=we.RG16_EXT),k===n.SHORT&&we&&(te=we.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(te=n.RG8UI),k===n.UNSIGNED_SHORT&&(te=n.RG16UI),k===n.UNSIGNED_INT&&(te=n.RG32UI),k===n.BYTE&&(te=n.RG8I),k===n.SHORT&&(te=n.RG16I),k===n.INT&&(te=n.RG32I)),g===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(te=n.RGB8UI),k===n.UNSIGNED_SHORT&&(te=n.RGB16UI),k===n.UNSIGNED_INT&&(te=n.RGB32UI),k===n.BYTE&&(te=n.RGB8I),k===n.SHORT&&(te=n.RGB16I),k===n.INT&&(te=n.RGB32I)),g===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),k===n.UNSIGNED_INT&&(te=n.RGBA32UI),k===n.BYTE&&(te=n.RGBA8I),k===n.SHORT&&(te=n.RGBA16I),k===n.INT&&(te=n.RGBA32I)),g===n.RGB&&(k===n.UNSIGNED_SHORT&&we&&(te=we.RGB16_EXT),k===n.SHORT&&we&&(te=we.RGB16_SNORM_EXT),k===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(te=n.R11F_G11F_B10F)),g===n.RGBA){let re=fe?fa:At.getTransfer(se);k===n.FLOAT&&(te=n.RGBA32F),k===n.HALF_FLOAT&&(te=n.RGBA16F),k===n.UNSIGNED_BYTE&&(te=re===Xt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT&&we&&(te=we.RGBA16_EXT),k===n.SHORT&&we&&(te=we.RGBA16_SNORM_EXT),k===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function b(E,g){let k;return E?g===null||g===Ui||g===Br?k=n.DEPTH24_STENCIL8:g===Fi?k=n.DEPTH32F_STENCIL8:g===Or&&(k=n.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ui||g===Br?k=n.DEPTH_COMPONENT24:g===Fi?k=n.DEPTH_COMPONENT32F:g===Or&&(k=n.DEPTH_COMPONENT16),k}function w(E,g){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==En&&E.minFilter!==Lt?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function A(E){let g=E.target;g.removeEventListener("dispose",A),M(g),g.isVideoTexture&&u.delete(g),g.isHTMLTexture&&h.delete(g)}function x(E){let g=E.target;g.removeEventListener("dispose",x),U(g)}function M(E){let g=i.get(E);if(g.__webglInit===void 0)return;let k=E.source,j=f.get(k);if(j){let se=j[g.__cacheKey];se.usedTimes--,se.usedTimes===0&&D(E),Object.keys(j).length===0&&f.delete(k)}i.remove(E)}function D(E){let g=i.get(E);n.deleteTexture(g.__webglTexture);let k=E.source,j=f.get(k);delete j[g.__cacheKey],a.memory.textures--}function U(E){let g=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(g.__webglFramebuffer[j]))for(let se=0;se<g.__webglFramebuffer[j].length;se++)n.deleteFramebuffer(g.__webglFramebuffer[j][se]);else n.deleteFramebuffer(g.__webglFramebuffer[j]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[j])}else{if(Array.isArray(g.__webglFramebuffer))for(let j=0;j<g.__webglFramebuffer.length;j++)n.deleteFramebuffer(g.__webglFramebuffer[j]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let j=0;j<g.__webglColorRenderbuffer.length;j++)g.__webglColorRenderbuffer[j]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[j]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let k=E.textures;for(let j=0,se=k.length;j<se;j++){let fe=i.get(k[j]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),a.memory.textures--),i.remove(k[j])}i.remove(E)}let z=0;function B(){z=0}function L(){return z}function P(E){z=E}function V(){let E=z;return E>=s.maxTextures&&vt("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),z+=1,E}function Y(E){let g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function ue(E,g){let k=i.get(E);if(E.isVideoTexture&&C(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&k.__version!==E.version){let j=E.image;if(j===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(k,E,g);return}}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+g)}function q(E,g){let k=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){_e(k,E,g);return}else E.isExternalTexture&&(k.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+g)}function le(E,g){let k=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){_e(k,E,g);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+g)}function ce(E,g){let k=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&k.__version!==E.version){Ce(k,E,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+g)}let Xe={[us]:n.REPEAT,[mi]:n.CLAMP_TO_EDGE,[Uo]:n.MIRRORED_REPEAT},qe={[En]:n.NEAREST,[Cd]:n.NEAREST_MIPMAP_NEAREST,[Ca]:n.NEAREST_MIPMAP_LINEAR,[Lt]:n.LINEAR,[rl]:n.LINEAR_MIPMAP_NEAREST,[Ji]:n.LINEAR_MIPMAP_LINEAR},nt={[Ld]:n.NEVER,[Od]:n.ALWAYS,[Dd]:n.LESS,[Vl]:n.LEQUAL,[Nd]:n.EQUAL,[Gl]:n.GEQUAL,[Ud]:n.GREATER,[Fd]:n.NOTEQUAL};function me(E,g){if(g.type===Fi&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Lt||g.magFilter===rl||g.magFilter===Ca||g.magFilter===Ji||g.minFilter===Lt||g.minFilter===rl||g.minFilter===Ca||g.minFilter===Ji)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Xe[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Xe[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Xe[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,qe[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,qe[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,nt[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===En||g.minFilter!==Ca&&g.minFilter!==Ji||g.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function xe(E,g){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",A));let j=g.source,se=f.get(j);se===void 0&&(se={},f.set(j,se));let fe=Y(g);if(fe!==E.__cacheKey){se[fe]===void 0&&(se[fe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),se[fe].usedTimes++;let we=se[E.__cacheKey];we!==void 0&&(se[E.__cacheKey].usedTimes--,we.usedTimes===0&&D(g)),E.__cacheKey=fe,E.__webglTexture=se[fe].texture}return k}function X(E,g,k){return Math.floor(Math.floor(E/k)/g)}function W(E,g,k,j){let fe=E.updateRanges;if(fe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,k,j,g.data);else{fe.sort((je,Ne)=>je.start-Ne.start);let we=0;for(let je=1;je<fe.length;je++){let Ne=fe[we],Le=fe[je],Qe=Ne.start+Ne.count,it=X(Le.start,g.width,4),ft=X(Ne.start,g.width,4);Le.start<=Qe+1&&it===ft&&X(Le.start+Le.count-1,g.width,4)===it?Ne.count=Math.max(Ne.count,Le.start+Le.count-Ne.start):(++we,fe[we]=Le)}fe.length=we+1;let te=t.getParameter(n.UNPACK_ROW_LENGTH),re=t.getParameter(n.UNPACK_SKIP_PIXELS),be=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let je=0,Ne=fe.length;je<Ne;je++){let Le=fe[je],Qe=Math.floor(Le.start/4),it=Math.ceil(Le.count/4),ft=Qe%g.width,H=Math.floor(Qe/g.width),Me=it,de=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ft),t.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,ft,H,Me,de,k,j,g.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,te),t.pixelStorei(n.UNPACK_SKIP_PIXELS,re),t.pixelStorei(n.UNPACK_SKIP_ROWS,be)}}function _e(E,g,k){let j=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(j=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(j=n.TEXTURE_3D);let se=xe(E,g),fe=g.source;t.bindTexture(j,E.__webglTexture,n.TEXTURE0+k);let we=i.get(fe);if(fe.version!==we.__version||se===!0){if(t.activeTexture(n.TEXTURE0+k),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let de=At.getPrimaries(At.workingColorSpace),Ue=g.colorSpace===nn?null:At.getPrimaries(g.colorSpace),ke=g.colorSpace===nn||de===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let re=m(g.image,!1,s.maxTextureSize);re=Ye(g,re);let be=r.convert(g.format,g.colorSpace),je=r.convert(g.type),Ne=S(g.internalFormat,be,je,g.normalized,g.colorSpace,g.isVideoTexture);me(j,g);let Le,Qe=g.mipmaps,it=g.isVideoTexture!==!0,ft=we.__version===void 0||se===!0,H=fe.dataReady,Me=w(g,re);if(g.isDepthTexture)Ne=b(g.format===Ls,g.type),ft&&(it?t.texStorage2D(n.TEXTURE_2D,1,Ne,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Ne,re.width,re.height,0,be,je,null));else if(g.isDataTexture)if(Qe.length>0){it&&ft&&t.texStorage2D(n.TEXTURE_2D,Me,Ne,Qe[0].width,Qe[0].height);for(let de=0,Ue=Qe.length;de<Ue;de++)Le=Qe[de],it?H&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Le.width,Le.height,be,je,Le.data):t.texImage2D(n.TEXTURE_2D,de,Ne,Le.width,Le.height,0,be,je,Le.data);g.generateMipmaps=!1}else it?(ft&&t.texStorage2D(n.TEXTURE_2D,Me,Ne,re.width,re.height),H&&W(g,re,be,je)):t.texImage2D(n.TEXTURE_2D,0,Ne,re.width,re.height,0,be,je,re.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){it&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Ne,Qe[0].width,Qe[0].height,re.depth);for(let de=0,Ue=Qe.length;de<Ue;de++)if(Le=Qe[de],g.format!==Pn)if(be!==null)if(it){if(H)if(g.layerUpdates.size>0){let ke=yu(Le.width,Le.height,g.format,g.type);for(let ve of g.layerUpdates){let et=Le.data.subarray(ve*ke/Le.data.BYTES_PER_ELEMENT,(ve+1)*ke/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,ve,Le.width,Le.height,1,be,et)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Le.width,Le.height,re.depth,be,Le.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,Ne,Le.width,Le.height,re.depth,0,Le.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Le.width,Le.height,re.depth,be,je,Le.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,Ne,Le.width,Le.height,re.depth,0,be,je,Le.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{it&&ft&&t.texStorage2D(n.TEXTURE_2D,Me,Ne,Qe[0].width,Qe[0].height);for(let de=0,Ue=Qe.length;de<Ue;de++)Le=Qe[de],g.format!==Pn?be!==null?it?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,Le.width,Le.height,be,Le.data):t.compressedTexImage2D(n.TEXTURE_2D,de,Ne,Le.width,Le.height,0,Le.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?H&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,Le.width,Le.height,be,je,Le.data):t.texImage2D(n.TEXTURE_2D,de,Ne,Le.width,Le.height,0,be,je,Le.data)}else if(g.isDataArrayTexture)if(it){if(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Ne,re.width,re.height,re.depth),H)if(g.layerUpdates.size>0){let de=yu(re.width,re.height,g.format,g.type);for(let Ue of g.layerUpdates){let ke=re.data.subarray(Ue*de/re.data.BYTES_PER_ELEMENT,(Ue+1)*de/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ue,re.width,re.height,1,be,je,ke)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,be,je,re.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ne,re.width,re.height,re.depth,0,be,je,re.data);else if(g.isData3DTexture)it?(ft&&t.texStorage3D(n.TEXTURE_3D,Me,Ne,re.width,re.height,re.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,be,je,re.data)):t.texImage3D(n.TEXTURE_3D,0,Ne,re.width,re.height,re.depth,0,be,je,re.data);else if(g.isFramebufferTexture){if(ft)if(it)t.texStorage2D(n.TEXTURE_2D,Me,Ne,re.width,re.height);else{let de=re.width,Ue=re.height;for(let ke=0;ke<Me;ke++)t.texImage2D(n.TEXTURE_2D,ke,Ne,de,Ue,0,be,je,null),de>>=1,Ue>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){let de=n.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),re.parentNode!==de){de.appendChild(re),h.add(g),de.onpaint=Ue=>{let ke=Ue.changedElements;for(let ve of h)ke.includes(ve.image)&&(ve.needsUpdate=!0)},de.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,re);else{let ke=n.RGBA,ve=n.RGBA,et=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,ke,ve,et,re)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(it&&ft){let de=Be(Qe[0]);t.texStorage2D(n.TEXTURE_2D,Me,Ne,de.width,de.height)}for(let de=0,Ue=Qe.length;de<Ue;de++)Le=Qe[de],it?H&&t.texSubImage2D(n.TEXTURE_2D,de,0,0,be,je,Le):t.texImage2D(n.TEXTURE_2D,de,Ne,be,je,Le);g.generateMipmaps=!1}else if(it){if(ft){let de=Be(re);t.texStorage2D(n.TEXTURE_2D,Me,Ne,de.width,de.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,je,re)}else t.texImage2D(n.TEXTURE_2D,0,Ne,be,je,re);p(g)&&T(j),we.__version=fe.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function Ce(E,g,k){if(g.image.length!==6)return;let j=xe(E,g),se=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+k);let fe=i.get(se);if(se.version!==fe.__version||j===!0){t.activeTexture(n.TEXTURE0+k);let we=At.getPrimaries(At.workingColorSpace),te=g.colorSpace===nn?null:At.getPrimaries(g.colorSpace),re=g.colorSpace===nn||we===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let be=g.isCompressedTexture||g.image[0].isCompressedTexture,je=g.image[0]&&g.image[0].isDataTexture,Ne=[];for(let ve=0;ve<6;ve++)!be&&!je?Ne[ve]=m(g.image[ve],!0,s.maxCubemapSize):Ne[ve]=je?g.image[ve].image:g.image[ve],Ne[ve]=Ye(g,Ne[ve]);let Le=Ne[0],Qe=r.convert(g.format,g.colorSpace),it=r.convert(g.type),ft=S(g.internalFormat,Qe,it,g.normalized,g.colorSpace),H=g.isVideoTexture!==!0,Me=fe.__version===void 0||j===!0,de=se.dataReady,Ue=w(g,Le);me(n.TEXTURE_CUBE_MAP,g);let ke;if(be){H&&Me&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,ft,Le.width,Le.height);for(let ve=0;ve<6;ve++){ke=Ne[ve].mipmaps;for(let et=0;et<ke.length;et++){let Ze=ke[et];g.format!==Pn?Qe!==null?H?de&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,et,0,0,Ze.width,Ze.height,Qe,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,et,ft,Ze.width,Ze.height,0,Ze.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,et,0,0,Ze.width,Ze.height,Qe,it,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,et,ft,Ze.width,Ze.height,0,Qe,it,Ze.data)}}}else{if(ke=g.mipmaps,H&&Me){ke.length>0&&Ue++;let ve=Be(Ne[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,ft,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(je){H?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ne[ve].width,Ne[ve].height,Qe,it,Ne[ve].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ft,Ne[ve].width,Ne[ve].height,0,Qe,it,Ne[ve].data);for(let et=0;et<ke.length;et++){let Rt=ke[et].image[ve].image;H?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,et+1,0,0,Rt.width,Rt.height,Qe,it,Rt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,et+1,ft,Rt.width,Rt.height,0,Qe,it,Rt.data)}}else{H?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Qe,it,Ne[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,ft,Qe,it,Ne[ve]);for(let et=0;et<ke.length;et++){let Ze=ke[et];H?de&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,et+1,0,0,Qe,it,Ze.image[ve]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ve,et+1,ft,Qe,it,Ze.image[ve])}}}p(g)&&T(n.TEXTURE_CUBE_MAP),fe.__version=se.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function N(E,g,k,j,se,fe){let we=r.convert(k.format,k.colorSpace),te=r.convert(k.type),re=S(k.internalFormat,we,te,k.normalized,k.colorSpace),be=i.get(g),je=i.get(k);if(je.__renderTarget=g,!be.__hasExternalTextures){let Ne=Math.max(1,g.width>>fe),Le=Math.max(1,g.height>>fe);se===n.TEXTURE_3D||se===n.TEXTURE_2D_ARRAY?t.texImage3D(se,fe,re,Ne,Le,g.depth,0,we,te,null):t.texImage2D(se,fe,re,Ne,Le,0,we,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),Ve(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,j,se,je.__webglTexture,0,Se(g)):(se===n.TEXTURE_2D||se>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,j,se,je.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ae(E,g,k){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){let j=g.depthTexture,se=j&&j.isDepthTexture?j.type:null,fe=b(g.stencilBuffer,se),we=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ve(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se(g),fe,g.width,g.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se(g),fe,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,fe,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,we,n.RENDERBUFFER,E)}else{let j=g.textures;for(let se=0;se<j.length;se++){let fe=j[se],we=r.convert(fe.format,fe.colorSpace),te=r.convert(fe.type),re=S(fe.internalFormat,we,te,fe.normalized,fe.colorSpace);Ve(g)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se(g),re,g.width,g.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se(g),re,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,re,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(E,g,k){let j=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let se=i.get(g.depthTexture);if(se.__renderTarget=g,(!se.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),j){if(se.__webglInit===void 0&&(se.__webglInit=!0,g.depthTexture.addEventListener("dispose",A)),se.__webglTexture===void 0){se.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),me(n.TEXTURE_CUBE_MAP,g.depthTexture);let be=r.convert(g.depthTexture.format),je=r.convert(g.depthTexture.type),Ne;g.depthTexture.format===Xi?Ne=n.DEPTH_COMPONENT24:g.depthTexture.format===Ls&&(Ne=n.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Ne,g.width,g.height,0,be,je,null)}}else ue(g.depthTexture,0);let fe=se.__webglTexture,we=Se(g),te=j?n.TEXTURE_CUBE_MAP_POSITIVE_X+k:n.TEXTURE_2D,re=g.depthTexture.format===Ls?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Xi)Ve(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,te,fe,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,re,te,fe,0);else if(g.depthTexture.format===Ls)Ve(g)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,re,te,fe,0,we):n.framebufferTexture2D(n.FRAMEBUFFER,re,te,fe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function K(E){let g=i.get(E),k=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){let j=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),j){let se=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,j.removeEventListener("dispose",se)};j.addEventListener("dispose",se),g.__depthDisposeCallback=se}g.__boundDepthTexture=j}if(E.depthTexture&&!g.__autoAllocateDepthBuffer)if(k)for(let j=0;j<6;j++)ye(g.__webglFramebuffer[j],E,j);else{let j=E.texture.mipmaps;j&&j.length>0?ye(g.__webglFramebuffer[0],E,0):ye(g.__webglFramebuffer,E,0)}else if(k){g.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[j]),g.__webglDepthbuffer[j]===void 0)g.__webglDepthbuffer[j]=n.createRenderbuffer(),ae(g.__webglDepthbuffer[j],E,!1);else{let se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=g.__webglDepthbuffer[j];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,fe)}}else{let j=E.texture.mipmaps;if(j&&j.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),ae(g.__webglDepthbuffer,E,!1);else{let se=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,fe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(E,g,k){let j=i.get(E);g!==void 0&&N(j.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&K(E)}function R(E){let g=E.texture,k=i.get(E),j=i.get(g);E.addEventListener("dispose",x);let se=E.textures,fe=E.isWebGLCubeRenderTarget===!0,we=se.length>1;if(we||(j.__webglTexture===void 0&&(j.__webglTexture=n.createTexture()),j.__version=g.version,a.memory.textures++),fe){k.__webglFramebuffer=[];for(let te=0;te<6;te++)if(g.mipmaps&&g.mipmaps.length>0){k.__webglFramebuffer[te]=[];for(let re=0;re<g.mipmaps.length;re++)k.__webglFramebuffer[te][re]=n.createFramebuffer()}else k.__webglFramebuffer[te]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){k.__webglFramebuffer=[];for(let te=0;te<g.mipmaps.length;te++)k.__webglFramebuffer[te]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(we)for(let te=0,re=se.length;te<re;te++){let be=i.get(se[te]);be.__webglTexture===void 0&&(be.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&Ve(E)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let te=0;te<se.length;te++){let re=se[te];k.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[te]);let be=r.convert(re.format,re.colorSpace),je=r.convert(re.type),Ne=S(re.internalFormat,be,je,re.normalized,re.colorSpace,E.isXRRenderTarget===!0),Le=Se(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,Le,Ne,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,k.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),ae(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture),me(n.TEXTURE_CUBE_MAP,g);for(let te=0;te<6;te++)if(g.mipmaps&&g.mipmaps.length>0)for(let re=0;re<g.mipmaps.length;re++)N(k.__webglFramebuffer[te][re],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,re);else N(k.__webglFramebuffer[te],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);p(g)&&T(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let te=0,re=se.length;te<re;te++){let be=se[te],je=i.get(be),Ne=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Ne=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ne,je.__webglTexture),me(Ne,be),N(k.__webglFramebuffer,E,be,n.COLOR_ATTACHMENT0+te,Ne,0),p(be)&&T(Ne)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(te=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,j.__webglTexture),me(te,g),g.mipmaps&&g.mipmaps.length>0)for(let re=0;re<g.mipmaps.length;re++)N(k.__webglFramebuffer[re],E,g,n.COLOR_ATTACHMENT0,te,re);else N(k.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,te,0);p(g)&&T(te),t.unbindTexture()}E.depthBuffer&&K(E)}function G(E){let g=E.textures;for(let k=0,j=g.length;k<j;k++){let se=g[k];if(p(se)){let fe=I(E),we=i.get(se).__webglTexture;t.bindTexture(fe,we),T(fe),t.unbindTexture()}}}let J=[],oe=[];function Ee(E){if(E.samples>0){if(Ve(E)===!1){let g=E.textures,k=E.width,j=E.height,se=n.COLOR_BUFFER_BIT,fe=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=i.get(E),te=g.length>1;if(te)for(let be=0;be<g.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);let re=E.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let be=0;be<g.length;be++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(se|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(se|=n.STENCIL_BUFFER_BIT)),te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,we.__webglColorRenderbuffer[be]);let je=i.get(g[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,je,0)}n.blitFramebuffer(0,0,k,j,0,0,k,j,se,n.NEAREST),c===!0&&(J.length=0,oe.length=0,J.push(n.COLOR_ATTACHMENT0+be),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&(J.push(fe),oe.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,oe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,J))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let be=0;be<g.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,we.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,we.__webglColorRenderbuffer[be]);let je=i.get(g[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,we.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Se(E){return Math.min(s.maxSamples,E.samples)}function Ve(E){let g=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function C(E){let g=a.render.frame;u.get(E)!==g&&(u.set(E,g),E.update())}function Ye(E,g){let k=E.colorSpace,j=E.format,se=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==da&&k!==nn&&(At.getTransfer(k)===Xt?(j!==Pn||se!==ai)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",k)),g}function Be(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.getTextureUnits=L,this.setTextureUnits=P,this.setTexture2D=ue,this.setTexture2DArray=q,this.setTexture3D=le,this.setTextureCube=ce,this.rebindTextures=pe,this.setupRenderTarget=R,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=K,this.setupFrameBufferTexture=N,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function N_(n,e){function t(i,s=nn){let r,a=At.getTransfer(s);if(i===ai)return n.UNSIGNED_BYTE;if(i===ol)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ll)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===cu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===au)return n.BYTE;if(i===ou)return n.SHORT;if(i===Or)return n.UNSIGNED_SHORT;if(i===al)return n.INT;if(i===Ui)return n.UNSIGNED_INT;if(i===Fi)return n.FLOAT;if(i===Oi)return n.HALF_FLOAT;if(i===uu)return n.ALPHA;if(i===hu)return n.RGB;if(i===Pn)return n.RGBA;if(i===Xi)return n.DEPTH_COMPONENT;if(i===Ls)return n.DEPTH_STENCIL;if(i===du)return n.RED;if(i===cl)return n.RED_INTEGER;if(i===Ds)return n.RG;if(i===ul)return n.RG_INTEGER;if(i===hl)return n.RGBA_INTEGER;if(i===Ra||i===Pa||i===Ia||i===La)if(a===Xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dl||i===fl||i===pl||i===ml)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gl||i===vl||i===xl||i===_l||i===yl||i===Da||i===Sl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gl||i===vl)return a===Xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===xl)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===_l)return r.COMPRESSED_R11_EAC;if(i===yl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Da)return r.COMPRESSED_RG11_EAC;if(i===Sl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bl||i===Ml||i===wl||i===El||i===Tl||i===Al||i===Cl||i===Rl||i===Pl||i===Il||i===Ll||i===Dl||i===Nl||i===Ul)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===bl)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ml)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wl)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===El)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tl)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Al)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cl)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rl)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pl)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Il)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ll)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dl)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Nl)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ul)return a===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fl||i===Ol||i===Bl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Fl)return a===Xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ol)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===kl||i===zl||i===Na||i===Hl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===kl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===zl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Br?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var U_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Nu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ma(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new gn({vertexShader:U_,fragmentShader:F_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mn(new _i(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Uu=class extends qi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,v=null,y=typeof XRWebGLBinding<"u",m=new Nu,p={},T=t.getContextAttributes(),I=null,S=null,b=[],w=[],A=new mt,x=null,M=null,D=new On;D.viewport=new Ut;let U=new On;U.viewport=new Ut;let z=[D,U],B=new nl,L=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let W=b[X];return W===void 0&&(W=new Ir,b[X]=W),W.getTargetRaySpace()},this.getControllerGrip=function(X){let W=b[X];return W===void 0&&(W=new Ir,b[X]=W),W.getGripSpace()},this.getHand=function(X){let W=b[X];return W===void 0&&(W=new Ir,b[X]=W),W.getHandSpace()};function V(X){let W=w.indexOf(X.inputSource);if(W===-1)return;let _e=b[W];_e!==void 0&&(_e.update(X.inputSource,X.frame,l||a),_e.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",ue);for(let X=0;X<b.length;X++){let W=w[X];W!==null&&(w[X]=null,b[X].disconnect(W))}L=null,P=null,m.reset();for(let X in p)delete p[X];if(e.setRenderTarget(I),f=null,d=null,h=null,s=null,S=null,xe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),M!==null){let X=M.camera;X.fov=M.fov,X.zoom=M.zoom,X.updateProjectionMatrix(),M=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(I=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",ue),T.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ce=null,N=null;T.depth&&(N=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=T.stencil?Ls:Xi,Ce=T.stencil?Br:Ui);let ae={colorFormat:t.RGBA8,depthFormat:N,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(ae),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new on(d.textureWidth,d.textureHeight,{format:Pn,type:ai,depthTexture:new As(d.textureWidth,d.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let _e={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new on(f.framebufferWidth,f.framebufferHeight,{format:Pn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),xe.setContext(s),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ue(X){for(let W=0;W<X.removed.length;W++){let _e=X.removed[W],Ce=w.indexOf(_e);Ce>=0&&(w[Ce]=null,b[Ce].disconnect(_e))}for(let W=0;W<X.added.length;W++){let _e=X.added[W],Ce=w.indexOf(_e);if(Ce===-1){for(let ae=0;ae<b.length;ae++)if(ae>=w.length){w.push(_e),Ce=ae;break}else if(w[ae]===null){w[ae]=_e,Ce=ae;break}if(Ce===-1)break}let N=b[Ce];N&&N.connect(_e)}}let q=new ie,le=new ie;function ce(X,W,_e){q.setFromMatrixPosition(W.matrixWorld),le.setFromMatrixPosition(_e.matrixWorld);let Ce=q.distanceTo(le),N=W.projectionMatrix.elements,ae=_e.projectionMatrix.elements,ye=N[14]/(N[10]-1),K=N[14]/(N[10]+1),pe=(N[9]+1)/N[5],R=(N[9]-1)/N[5],G=(N[8]-1)/N[0],J=(ae[8]+1)/ae[0],oe=ye*G,Ee=ye*J,Se=Ce/(-G+J),Ve=Se*-G;if(W.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ve),X.translateZ(Se),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),N[10]===-1)X.projectionMatrix.copy(W.projectionMatrix),X.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{let C=ye+Se,Ye=K+Se,Be=oe-Ve,E=Ee+(Ce-Ve),g=pe*K/Ye*C,k=R*K/Ye*C;X.projectionMatrix.makePerspective(Be,E,g,k,C,Ye),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Xe(X,W){W===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(W.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let W=X.near,_e=X.far;m.texture!==null&&(m.depthNear>0&&(W=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),B.near=U.near=D.near=W,B.far=U.far=D.far=_e,(L!==B.near||P!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),L=B.near,P=B.far),B.layers.mask=X.layers.mask|6,D.layers.mask=B.layers.mask&-5,U.layers.mask=B.layers.mask&-3;let Ce=X.parent,N=B.cameras;Xe(B,Ce);for(let ae=0;ae<N.length;ae++)Xe(N[ae],Ce);N.length===2?ce(B,D,U):B.projectionMatrix.copy(D.projectionMatrix),M===null&&X.isPerspectiveCamera&&(M={camera:X,fov:X.fov,zoom:X.zoom}),qe(X,B,Ce)};function qe(X,W,_e){_e===null?X.matrix.copy(W.matrixWorld):(X.matrix.copy(_e.matrixWorld),X.matrix.invert(),X.matrix.multiply(W.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(W.projectionMatrix),X.projectionMatrixInverse.copy(W.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Rr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(X){return p[X]};let nt=null;function me(X,W){if(u=W.getViewerPose(l||a),v=W,u!==null){let _e=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Ce=!1;_e.length!==B.cameras.length&&(B.cameras.length=0,Ce=!0);for(let K=0;K<_e.length;K++){let pe=_e[K],R=null;if(f!==null)R=f.getViewport(pe);else{let J=h.getViewSubImage(d,pe);R=J.viewport,K===0&&(e.setRenderTargetTextures(S,J.colorTexture,J.depthStencilTexture),e.setRenderTarget(S))}let G=z[K];G===void 0&&(G=new On,G.layers.enable(K),G.viewport=new Ut,z[K]=G),G.matrix.fromArray(pe.transform.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale),G.projectionMatrix.fromArray(pe.projectionMatrix),G.projectionMatrixInverse.copy(G.projectionMatrix).invert(),G.viewport.set(R.x,R.y,R.width,R.height),K===0&&(B.matrix.copy(G.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ce===!0&&B.cameras.push(G)}let N=s.enabledFeatures;if(N&&N.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=i.getBinding();let K=h.getDepthInformation(_e[0]);K&&K.isValid&&K.texture&&m.init(K,s.renderState)}if(N&&N.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let K=0;K<_e.length;K++){let pe=_e[K].camera;if(pe){let R=p[pe];R||(R=new Ma,p[pe]=R);let G=h.getCameraImage(pe);R.sourceTexture=G}}}}for(let _e=0;_e<b.length;_e++){let Ce=w[_e],N=b[_e];Ce!==null&&N!==void 0&&N.update(Ce,W,l||a)}nt&&nt(X,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),v=null}let xe=new mf;xe.setAnimationLoop(me),this.setAnimationLoop=function(X){nt=X},this.dispose=function(){}}},O_=new ln,Sf=new xt;Sf.set(-1,0,0,0,1,0,0,0,1);function B_(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,vu(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,I,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(r(m,p),v(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,T,I):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=e.get(p),I=T.envMap,S=T.envMapRotation;I&&(m.envMap.value=I,m.envMapRotation.value.setFromMatrix4(O_.makeRotationFromEuler(S)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Sf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,I){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=I*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function k_(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){let w=b.program;i.uniformBlockBinding(S,w)}function l(S,b){let w=s[S.id];w===void 0&&(m(S),w=u(S),s[S.id]=w,S.addEventListener("dispose",T));let A=b.program;i.updateUBOMapping(S,A);let x=e.render.frame;r[S.id]!==x&&(d(S),r[S.id]=x)}function u(S){let b=h();S.__bindingPointIndex=b;let w=n.createBuffer(),A=S.__size,x=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,A,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,w),w}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return _t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let b=s[S.id],w=S.uniforms,A=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let x=0,M=w.length;x<M;x++){let D=w[x];if(Array.isArray(D))for(let U=0,z=D.length;U<z;U++)f(D[U],x,U,A);else f(D,x,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,b,w,A){if(y(S,b,w,A)===!0){let x=S.__offset,M=S.value;if(Array.isArray(M)){let D=0;for(let U=0;U<M.length;U++){let z=M[U],B=p(z);v(z,S.__data,D),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(D+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(M,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,S.__data)}}function v(S,b,w){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,w)}function y(S,b,w,A){let x=S.value,M=b+"_"+w;if(A[M]===void 0)return typeof x=="number"||typeof x=="boolean"?A[M]=x:ArrayBuffer.isView(x)?A[M]=x.slice():A[M]=x.clone(),!0;{let D=A[M];if(typeof x=="number"||typeof x=="boolean"){if(D!==x)return A[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(D.equals(x)===!1)return D.copy(x),!0}}return!1}function m(S){let b=S.uniforms,w=0,A=16;for(let M=0,D=b.length;M<D;M++){let U=Array.isArray(b[M])?b[M]:[b[M]];for(let z=0,B=U.length;z<B;z++){let L=U[z],P=Array.isArray(L.value)?L.value:[L.value];for(let V=0,Y=P.length;V<Y;V++){let ue=P[V],q=p(ue),le=w%A,ce=le%q.boundary,Xe=le+ce;w+=ce,Xe!==0&&A-Xe<q.storage&&(w+=A-Xe),L.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=w,w+=q.storage}}}let x=w%A;return x>0&&(w+=A-x),S.__size=w,S.__cache={},this}function p(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):vt("WebGLRenderer: Unsupported uniform value type.",S),b}function T(S){let b=S.target;b.removeEventListener("dispose",T);let w=a.indexOf(b.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function I(){for(let S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:I}}var z_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ji=null;function H_(){return ji===null&&(ji=new Di(z_,16,16,Ds,Oi),ji.name="DFG_LUT",ji.minFilter=Lt,ji.magFilter=Lt,ji.wrapS=mi,ji.wrapT=mi,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}var Yl=class{constructor(e={}){let{canvas:t=kd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ai}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;let y=f,m=new Set([hl,ul,cl]),p=new Set([ai,Ui,Or,Br,ol,ll]),T=new Uint32Array(4),I=new Int32Array(4),S=new ie,b=null,w=null,A=[],x=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,U=!1,z=null,B=null,L=null,P=null;this._outputColorSpace=si;let V=0,Y=0,ue=null,q=-1,le=null,ce=new Ut,Xe=new Ut,qe=null,nt=new Ct(0),me=0,xe=t.width,X=t.height,W=1,_e=null,Ce=null,N=new Ut(0,0,xe,X),ae=new Ut(0,0,xe,X),ye=!1,K=new ya,pe=!1,R=!1,G=new ln,J=new ie,oe=new Ut,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Ve(){return ue===null?W:1}let C=i;function Ye(_,F){return t.getContext(_,F)}let Be,E,g,k,j,se,fe,we,te,re,be,je,Ne,Le,Qe,it,ft,H,Me,de,Ue,ke,ve;try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Rt,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",Vt,!1),C===null){let F="webgl2";if(C=Ye(F,_),C===null)throw Ye(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(_){throw t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Vt,!1),_t("WebGLRenderer: "+_.message),_}function et(){Be=new Yv(C),Be.init(),Ue=new N_(C,Be),E=new Bv(C,Be,e,Ue),g=new L_(C,Be),E.reversedDepthBuffer&&d&&g.buffers.depth.setReversed(!0),B=C.createFramebuffer(),L=C.createFramebuffer(),P=C.createFramebuffer(),k=new Jv(C),j=new x_,se=new D_(C,Be,g,j,E,Ue,k),fe=new $v(D),we=new Qm(C),ke=new Fv(C,we),te=new Zv(C,we,k,ke),re=new Qv(C,te,we,ke,k),H=new jv(C,E,se),Qe=new kv(j),be=new v_(D,fe,Be,E,ke,Qe),je=new B_(D,j),Ne=new y_,Le=new T_(Be),ft=new Uv(D,fe,g,re,v,c),it=new I_(D,re,E),ve=new k_(C,k,E,g),Me=new Ov(C,Be,k),de=new Kv(C,Be,k),k.programs=be.programs,D.capabilities=E,D.extensions=Be,D.properties=j,D.renderLists=Ne,D.shadowMap=it,D.state=g,D.info=k}y!==ai&&(M=new tx(y,t.width,t.height,o,s,r));let Ze=new Uu(D,C);this.xr=Ze,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let _=Be.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Be.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(_){_!==void 0&&(W=_,this.setSize(xe,X,!1))},this.getSize=function(_){return _.set(xe,X)},this.setSize=function(_,F,ee=!0){if(Ze.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=_,X=F,t.width=Math.floor(_*W),t.height=Math.floor(F*W),ee===!0&&(t.style.width=_+"px",t.style.height=F+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,_,F)},this.getDrawingBufferSize=function(_){return _.set(xe*W,X*W).floor()},this.setDrawingBufferSize=function(_,F,ee){xe=_,X=F,W=ee,t.width=Math.floor(_*ee),t.height=Math.floor(F*ee),this.setViewport(0,0,_,F)},this.setEffects=function(_){if(y===ai){_t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(_){for(let F=0;F<_.length;F++)if(_[F].isOutputPass===!0){vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(_||[])},this.getCurrentViewport=function(_){return _.copy(ce)},this.getViewport=function(_){return _.copy(N)},this.setViewport=function(_,F,ee,Z){_.isVector4?N.set(_.x,_.y,_.z,_.w):N.set(_,F,ee,Z),g.viewport(ce.copy(N).multiplyScalar(W).round())},this.getScissor=function(_){return _.copy(ae)},this.setScissor=function(_,F,ee,Z){_.isVector4?ae.set(_.x,_.y,_.z,_.w):ae.set(_,F,ee,Z),g.scissor(Xe.copy(ae).multiplyScalar(W).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(_){g.setScissorTest(ye=_)},this.setOpaqueSort=function(_){_e=_},this.setTransparentSort=function(_){Ce=_},this.getClearColor=function(_){return _.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor(...arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha(...arguments)},this.clear=function(_=!0,F=!0,ee=!0){let Z=0;if(_){let Q=!1;if(ue!==null){let De=ue.texture.format;Q=m.has(De)}if(Q){let De=ue.texture.type,ze=p.has(De),Te=ft.getClearColor(),Ae=ft.getClearAlpha(),Ge=Te.r,ht=Te.g,Ke=Te.b;ze?(T[0]=Ge,T[1]=ht,T[2]=Ke,T[3]=Ae,C.clearBufferuiv(C.COLOR,0,T)):(I[0]=Ge,I[1]=ht,I[2]=Ke,I[3]=Ae,C.clearBufferiv(C.COLOR,0,I))}else Z|=C.COLOR_BUFFER_BIT}F&&(Z|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&(Z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&C.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(_){_.setRenderer(this),z=_},this.dispose=function(){t.removeEventListener("webglcontextlost",Rt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Vt,!1),ft.dispose(),Ne.dispose(),Le.dispose(),j.dispose(),fe.dispose(),re.dispose(),ke.dispose(),ve.dispose(),be.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",Hn),Ze.removeEventListener("sessionend",es),un.stop()};function Rt(_){_.preventDefault(),mu("WebGLRenderer: Context Lost."),U=!0}function pt(){mu("WebGLRenderer: Context Restored."),U=!1;let _=k.autoReset,F=it.enabled,ee=it.autoUpdate,Z=it.needsUpdate,Q=it.type;et(),k.autoReset=_,it.enabled=F,it.autoUpdate=ee,it.needsUpdate=Z,it.type=Q}function Vt(_){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function Jt(_){let F=_.target;F.removeEventListener("dispose",Jt),Si(F)}function Si(_){Kn(_),j.remove(_)}function Kn(_){let F=j.get(_).programs;F!==void 0&&(F.forEach(function(ee){be.releaseProgram(ee)}),_.isShaderMaterial&&be.releaseShaderCache(_))}this.renderBufferDirect=function(_,F,ee,Z,Q,De){F===null&&(F=Ee);let ze=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Te=at(_,F,ee,Z,Q);g.setMaterial(Z,ze);let Ae=ee.index,Ge=1;if(Z.wireframe===!0){if(Ae=te.getWireframeAttribute(ee),Ae===void 0)return;Ge=2}let ht=ee.drawRange,Ke=ee.attributes.position,Fe=ht.start*Ge,ut=(ht.start+ht.count)*Ge;De!==null&&(Fe=Math.max(Fe,De.start*Ge),ut=Math.min(ut,(De.start+De.count)*Ge)),Ae!==null?(Fe=Math.max(Fe,0),ut=Math.min(ut,Ae.count)):Ke!=null&&(Fe=Math.max(Fe,0),ut=Math.min(ut,Ke.count));let Nt=ut-Fe;if(Nt<0||Nt===1/0)return;ke.setup(Q,Z,Te,ee,Ae);let wt,tt=Me;if(Ae!==null&&(wt=we.get(Ae),tt=de,tt.setIndex(wt)),Q.isMesh)Z.wireframe===!0?(g.setLineWidth(Z.wireframeLinewidth*Ve()),tt.setMode(C.LINES)):tt.setMode(C.TRIANGLES);else if(Q.isLine){let ot=Z.linewidth;ot===void 0&&(ot=1),g.setLineWidth(ot*Ve()),Q.isLineSegments?tt.setMode(C.LINES):Q.isLineLoop?tt.setMode(C.LINE_LOOP):tt.setMode(C.LINE_STRIP)}else Q.isPoints?tt.setMode(C.POINTS):Q.isSprite&&tt.setMode(C.TRIANGLES);if(Q.isBatchedMesh)if(Be.get("WEBGL_multi_draw"))tt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let ot=Q._multiDrawStarts,Re=Q._multiDrawCounts,zt=Q._multiDrawCount,lt=Ae?we.get(Ae).bytesPerElement:1,rn=j.get(Z).currentProgram.getUniforms();for(let An=0;An<zt;An++)rn.setValue(C,"_gl_DrawID",An),tt.render(ot[An]/lt,Re[An])}else if(Q.isInstancedMesh)tt.renderInstances(Fe,Nt,Q.count);else if(ee.isInstancedBufferGeometry){let ot=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Re=Math.min(ee.instanceCount,ot);tt.renderInstances(Fe,Nt,Re)}else tt.render(Fe,Nt)};function vn(_,F,ee,Z){z!==null&&_.isNodeMaterial&&z.setObject(Z,_),pe===!0&&Qe.setState(_,ee,!1),_.transparent===!0&&_.side===Ki&&_.forceSinglePass===!1?(_.side=cn,_.needsUpdate=!0,ms(_,F,Z),_.side=Zi,_.needsUpdate=!0,ms(_,F,Z),_.side=Ki):ms(_,F,Z)}this.compile=function(_,F,ee=null){ee===null&&(ee=_),z!==null&&z.renderStart(_,F,ee),w=Le.get(ee),w.init(F),x.push(w),ee.traverseVisible(function(Q){Q.isLight&&Q.layers.test(F.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),_!==ee&&_.traverseVisible(function(Q){Q.isLight&&Q.layers.test(F.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),w.setupLights(),z!==null&&z.updateLights(w.state.lightsArray),R=this.localClippingEnabled,pe=Qe.init(this.clippingPlanes,R),pe===!0&&Qe.setGlobalState(this.clippingPlanes,F),z!==null&&it.render(w.state.shadowsArray,ee,F);let Z=new Set;return _.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let De=Q.material;if(De)if(Array.isArray(De))for(let ze=0;ze<De.length;ze++){let Te=De[ze];vn(Te,ee,F,Q),Z.add(Te)}else vn(De,ee,F,Q),Z.add(De)}),w=x.pop(),z!==null&&z.renderEnd(),Z},this.compileAsync=function(_,F,ee=null){let Z=this.compile(_,F,ee);return new Promise(Q=>{function De(){if(Z.forEach(function(ze){let Ae=j.get(ze).currentProgram;(Ae===void 0||Ae.isReady())&&Z.delete(ze)}),Z.size===0){Q(_);return}setTimeout(De,10)}Be.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Jn=null;function In(_){Jn&&Jn(_)}function Hn(){un.stop()}function es(){un.start()}let un=new mf;un.setAnimationLoop(In),typeof self<"u"&&un.setContext(self),this.setAnimationLoop=function(_){Jn=_,Ze.setAnimationLoop(_),_===null?un.stop():un.start()},Ze.addEventListener("sessionstart",Hn),Ze.addEventListener("sessionend",es),this.render=function(_,F){if(F!==void 0&&F.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;z!==null&&z.renderStart(_,F);let ee=Ze.enabled===!0&&Ze.isPresenting===!0,Z=M!==null&&(ue===null||ee)&&M.begin(D,ue);if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(F),F=Ze.getCamera()),_.isScene===!0&&_.onBeforeRender(D,_,F,ue),w=Le.get(_,x.length),w.init(F),w.state.textureUnits=se.getTextureUnits(),x.push(w),G.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),K.setFromProjectionMatrix(G,Ii,F.reversedDepth),R=this.localClippingEnabled,pe=Qe.init(this.clippingPlanes,R),b=Ne.get(_,A.length),b.init(),A.push(b),Ze.enabled===!0&&Ze.isPresenting===!0){let ze=D.xr.getDepthSensingMesh();ze!==null&&Vn(ze,F,-1/0,D.sortObjects)}Vn(_,F,0,D.sortObjects),b.finish(),z!==null&&z.updateLights(w.state.lightsArray),D.sortObjects===!0&&b.sort(_e,Ce),Se=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,Se&&ft.addToRenderList(b,_),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pe===!0&&Qe.beginShadows();let Q=w.state.shadowsArray;if(it.render(Q,_,F),pe===!0&&Qe.endShadows(),(Z&&M.hasRenderPass())===!1){let ze=b.opaque,Te=b.transmissive;if(w.setupLights(),F.isArrayCamera){let Ae=F.cameras;if(Te.length>0)for(let Ge=0,ht=Ae.length;Ge<ht;Ge++){let Ke=Ae[Ge];oi(ze,Te,_,Ke)}Se&&ft.render(_);for(let Ge=0,ht=Ae.length;Ge<ht;Ge++){let Ke=Ae[Ge];$n(b,_,Ke,Ke.viewport)}}else Te.length>0&&oi(ze,Te,_,F),Se&&ft.render(_),$n(b,_,F)}ue!==null&&Y===0&&(se.updateMultisampleRenderTarget(ue),se.updateRenderTargetMipmap(ue)),Z&&M.end(D),_.isScene===!0&&_.onAfterRender(D,_,F),ke.resetDefaultState(),q=-1,le=null,x.pop(),x.length>0?(w=x[x.length-1],se.setTextureUnits(w.state.textureUnits),pe===!0&&Qe.setGlobalState(D.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,z!==null&&z.renderEnd()};function Vn(_,F,ee,Z){if(_.visible===!1)return;if(_.layers.test(F.layers)){if(_.isGroup)ee=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(F);else if(_.isLightProbeGrid)w.pushLightProbeGrid(_);else if(_.isLight)w.pushLight(_),_.castShadow&&w.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||_.intersectsFrustum(K)){Z&&oe.setFromMatrixPosition(_.matrixWorld).applyMatrix4(G);let ze=re.update(_),Te=_.material;Te.visible&&b.push(_,ze,Te,ee,oe.z,null,F)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||_.intersectsFrustum(K))){let ze=re.update(_),Te=_.material;if(Z&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),oe.copy(_.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),oe.copy(ze.boundingSphere.center)),oe.applyMatrix4(_.matrixWorld).applyMatrix4(G)),Array.isArray(Te)){let Ae=ze.groups;for(let Ge=0,ht=Ae.length;Ge<ht;Ge++){let Ke=Ae[Ge],Fe=Te[Ke.materialIndex];Fe&&Fe.visible&&b.push(_,ze,Fe,ee,oe.z,Ke,F)}}else Te.visible&&b.push(_,ze,Te,ee,oe.z,null,F)}}let De=_.children;for(let ze=0,Te=De.length;ze<Te;ze++)Vn(De[ze],F,ee,Z)}function $n(_,F,ee,Z){let{opaque:Q,transmissive:De,transparent:ze}=_;w.setupLightsView(ee),pe===!0&&Qe.setGlobalState(D.clippingPlanes,ee),Z&&g.viewport(ce.copy(Z)),Q.length>0&&li(Q,F,ee),De.length>0&&li(De,F,ee),ze.length>0&&li(ze,F,ee),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function oi(_,F,ee,Z){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Z.id]===void 0){let Fe=Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Z.id]=new on(1,1,{generateMipmaps:!0,type:Fe?Oi:ai,minFilter:Ji,samples:Math.max(4,E.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:At.workingColorSpace})}let De=w.state.transmissionRenderTarget[Z.id],ze=Z.viewport||ce;De.setSize(ze.z*D.transmissionResolutionScale,ze.w*D.transmissionResolutionScale);let Te=D.getRenderTarget(),Ae=D.getActiveCubeFace(),Ge=D.getActiveMipmapLevel();D.setRenderTarget(De),D.getClearColor(nt),me=D.getClearAlpha(),me<1&&D.setClearColor(16777215,.5),D.clear(),Se&&ft.render(ee);let ht=D.toneMapping;D.toneMapping=Ni;let Ke=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),w.setupLightsView(Z),pe===!0&&Qe.setGlobalState(D.clippingPlanes,Z),li(_,ee,Z),se.updateMultisampleRenderTarget(De),se.updateRenderTargetMipmap(De),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let ut=0,Nt=F.length;ut<Nt;ut++){let wt=F[ut],{object:tt,geometry:ot,material:Re,group:zt}=wt;if(Re.side===Ki&&tt.layers.test(Z.layers)){let lt=Re.side;Re.side=cn,Re.needsUpdate=!0,Bi(tt,ee,Z,ot,Re,zt),Re.side=lt,Re.needsUpdate=!0,Fe=!0}}Fe===!0&&(se.updateMultisampleRenderTarget(De),se.updateRenderTargetMipmap(De))}D.setRenderTarget(Te,Ae,Ge),D.setClearColor(nt,me),Ke!==void 0&&(Z.viewport=Ke),D.toneMapping=ht}function li(_,F,ee){let Z=F.isScene===!0?F.overrideMaterial:null;for(let Q=0,De=_.length;Q<De;Q++){let ze=_[Q],{object:Te,geometry:Ae,group:Ge}=ze,ht=ze.material;ht.allowOverride===!0&&Z!==null&&(ht=Z),Te.layers.test(ee.layers)&&Bi(Te,F,ee,Ae,ht,Ge)}}function Bi(_,F,ee,Z,Q,De){z!==null&&Q.isNodeMaterial&&z.setObject(_,Q),_.onBeforeRender(D,F,ee,Z,Q,De),_.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),Q.onBeforeRender(D,F,ee,Z,_,De),Q.transparent===!0&&Q.side===Ki&&Q.forceSinglePass===!1?(Q.side=cn,Q.needsUpdate=!0,D.renderBufferDirect(ee,F,Z,Q,_,De),Q.side=Zi,Q.needsUpdate=!0,D.renderBufferDirect(ee,F,Z,Q,_,De),Q.side=Ki):D.renderBufferDirect(ee,F,Z,Q,_,De),_.onAfterRender(D,F,ee,Z,Q,De)}function ms(_,F,ee){F.isScene!==!0&&(F=Ee);let Z=j.get(_),Q=w.state.lights,De=w.state.shadowsArray,ze=Q.state.version,Te=be.getParameters(_,Q.state,De,F,ee,w.state.lightProbeGridArray),Ae=be.getProgramCacheKey(Te),Ge=Z.programs;Z.environment=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?F.environment:null,Z.fog=F.fog;let ht=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap;Z.envMap=fe.get(_.envMap||Z.environment,ht),Z.envMapRotation=Z.environment!==null&&_.envMap===null?F.environmentRotation:_.envMapRotation,Ge===void 0&&(_.addEventListener("dispose",Jt),Ge=new Map,Z.programs=Ge);let Ke=Ge.get(Ae);if(Ke!==void 0){if(Z.currentProgram===Ke&&Z.lightsStateVersion===ze)return gs(_,Te),Ke}else Te.uniforms=be.getUniforms(_),z!==null&&_.isNodeMaterial&&z.build(_,ee,Te),_.onBeforeCompile(Te,D),Ke=be.acquireProgram(Te,Ae),Ge.set(Ae,Ke),Z.uniforms=Te.uniforms;let Fe=Z.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Fe.clippingPlanes=Qe.uniform),gs(_,Te),Z.needsLights=Et(_),Z.lightsStateVersion=ze,Z.needsLights&&(Fe.ambientLightColor.value=Q.state.ambient,Fe.lightProbe.value=Q.state.probe,Fe.sunLights.value=Q.state.sun,Fe.sunLightShadows.value=Q.state.sunShadow,Fe.directionalLights.value=Q.state.directional,Fe.directionalLightShadows.value=Q.state.directionalShadow,Fe.spotLights.value=Q.state.spot,Fe.spotLightShadows.value=Q.state.spotShadow,Fe.rectAreaLights.value=Q.state.rectArea,Fe.ltc_1.value=Q.state.rectAreaLTC1,Fe.ltc_2.value=Q.state.rectAreaLTC2,Fe.pointLights.value=Q.state.point,Fe.pointLightShadows.value=Q.state.pointShadow,Fe.hemisphereLights.value=Q.state.hemi,Fe.sunShadowMatrix.value=Q.state.sunShadowMatrix,Fe.sunShadowCascade.value=Q.state.sunShadowCascade,Fe.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Fe.spotLightMatrix.value=Q.state.spotLightMatrix,Fe.spotLightMap.value=Q.state.spotLightMap,Fe.pointShadowMatrix.value=Q.state.pointShadowMatrix),Z.lightProbeGrid=w.state.lightProbeGridArray.length>0,Z.currentProgram=Ke,Z.uniformsList=null,Ke}function ts(_){if(_.uniformsList===null){let F=_.currentProgram.getUniforms();_.uniformsList=Vr.seqWithValue(F.seq,_.uniforms)}return _.uniformsList}function gs(_,F){let ee=j.get(_);ee.outputColorSpace=F.outputColorSpace,ee.batching=F.batching,ee.batchingColor=F.batchingColor,ee.instancing=F.instancing,ee.instancingColor=F.instancingColor,ee.instancingMorph=F.instancingMorph,ee.skinning=F.skinning,ee.morphTargets=F.morphTargets,ee.morphNormals=F.morphNormals,ee.morphColors=F.morphColors,ee.morphTargetsCount=F.morphTargetsCount,ee.numClippingPlanes=F.numClippingPlanes,ee.numIntersection=F.numClipIntersection,ee.vertexAlphas=F.vertexAlphas,ee.vertexTangents=F.vertexTangents,ee.toneMapping=F.toneMapping}function Ie(_,F){if(_.length===0)return null;if(_.length===1)return _[0].texture!==null?_[0]:null;S.setFromMatrixPosition(F.matrixWorld);for(let ee=0,Z=_.length;ee<Z;ee++){let Q=_[ee];if(Q.texture!==null&&Q.boundingBox.containsPoint(S))return Q}return null}function at(_,F,ee,Z,Q){F.isScene!==!0&&(F=Ee),se.resetTextureUnits();let De=F.fog,ze=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?F.environment:null,Te=ue===null?D.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:At.workingColorSpace,Ae=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Ge=fe.get(Z.envMap||ze,Ae),ht=Z.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Ke=!!ee.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Fe=!!ee.morphAttributes.position,ut=!!ee.morphAttributes.normal,Nt=!!ee.morphAttributes.color,wt=Ni;Z.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(wt=D.toneMapping);let tt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ot=tt!==void 0?tt.length:0,Re=j.get(Z),zt=w.state.lights;if(pe===!0&&(R===!0||_!==le)){let Gt=_===le&&Z.id===q;Qe.setState(Z,_,Gt)}let lt=!1;Z.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==zt.state.version||Re.outputColorSpace!==Te||Q.isBatchedMesh&&Re.batching===!1||!Q.isBatchedMesh&&Re.batching===!0||Q.isBatchedMesh&&Re.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Re.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Re.instancing===!1||!Q.isInstancedMesh&&Re.instancing===!0||Q.isSkinnedMesh&&Re.skinning===!1||!Q.isSkinnedMesh&&Re.skinning===!0||Q.isInstancedMesh&&Re.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Re.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Re.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Re.instancingMorph===!1&&Q.morphTexture!==null||Re.envMap!==Ge||Z.fog===!0&&Re.fog!==De||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Qe.numPlanes||Re.numIntersection!==Qe.numIntersection)||Re.vertexAlphas!==ht||Re.vertexTangents!==Ke||Re.morphTargets!==Fe||Re.morphNormals!==ut||Re.morphColors!==Nt||Re.toneMapping!==wt||Re.morphTargetsCount!==ot||!!Re.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,Re.__version=Z.version);let rn=Re.currentProgram;lt===!0&&(rn=ms(Z,F,Q),z&&Z.isNodeMaterial&&z.onUpdateProgram(Z,rn,Re));let An=!1,Yn=!1,Ln=!1,Bt=rn.getUniforms(),qt=Re.uniforms;if(g.useProgram(rn.program)&&(An=!0,Yn=!0,Ln=!0),Z.id!==q&&(q=Z.id,Yn=!0),Re.needsLights){let Gt=Ie(w.state.lightProbeGridArray,Q);Re.lightProbeGrid!==Gt&&(Re.lightProbeGrid=Gt,Yn=!0)}if(An||le!==_){g.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),Bt.setValue(C,"projectionMatrix",_.projectionMatrix),Bt.setValue(C,"viewMatrix",_.matrixWorldInverse);let ci=Bt.map.cameraPosition;ci!==void 0&&ci.setValue(C,J.setFromMatrixPosition(_.matrixWorld)),E.logarithmicDepthBuffer&&Bt.setValue(C,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Bt.setValue(C,"isOrthographic",_.isOrthographicCamera===!0),le!==_&&(le=_,Yn=!0,Ln=!0)}if(Re.needsLights&&(zt.state.sunShadowMap.length>0&&Bt.setValue(C,"sunShadowMap",zt.state.sunShadowMap,se),zt.state.directionalShadowMap.length>0&&Bt.setValue(C,"directionalShadowMap",zt.state.directionalShadowMap,se),zt.state.spotShadowMap.length>0&&Bt.setValue(C,"spotShadowMap",zt.state.spotShadowMap,se),zt.state.pointShadowMap.length>0&&Bt.setValue(C,"pointShadowMap",zt.state.pointShadowMap,se)),Q.isSkinnedMesh){Bt.setOptional(C,Q,"bindMatrix"),Bt.setOptional(C,Q,"bindMatrixInverse");let Gt=Q.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Bt.setValue(C,"boneTexture",Gt.boneTexture,se))}Q.isBatchedMesh&&(Bt.setOptional(C,Q,"batchingTexture"),Bt.setValue(C,"batchingTexture",Q._matricesTexture,se),Bt.setOptional(C,Q,"batchingIdTexture"),Bt.setValue(C,"batchingIdTexture",Q._indirectTexture,se),Bt.setOptional(C,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Bt.setValue(C,"batchingColorTexture",Q._colorsTexture,se));let Gn=ee.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&H.update(Q,ee,rn),(Yn||Re.receiveShadow!==Q.receiveShadow)&&(Re.receiveShadow=Q.receiveShadow,Bt.setValue(C,"receiveShadow",Q.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&F.environment!==null&&(qt.envMapIntensity.value=F.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=H_()),Yn){if(Bt.setValue(C,"toneMappingExposure",D.toneMappingExposure),Re.needsLights&&bt(qt,Ln),De&&Z.fog===!0&&je.refreshFogUniforms(qt,De),je.refreshMaterialUniforms(qt,Z,W,X,w.state.transmissionRenderTarget[_.id]),Re.needsLights&&Re.lightProbeGrid){let Gt=Re.lightProbeGrid;qt.probesSH.value=Gt.texture,qt.probesMin.value.copy(Gt.boundingBox.min),qt.probesMax.value.copy(Gt.boundingBox.max),qt.probesResolution.value.copy(Gt.resolution)}Vr.upload(C,ts(Re),qt,se)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Vr.upload(C,ts(Re),qt,se),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Bt.setValue(C,"center",Q.center),Bt.setValue(C,"modelViewMatrix",Q.modelViewMatrix),Bt.setValue(C,"normalMatrix",Q.normalMatrix),Bt.setValue(C,"modelMatrix",Q.matrixWorld),Z.uniformsGroups!==void 0){let Gt=Z.uniformsGroups;for(let ci=0,ki=Gt.length;ci<ki;ci++){let ui=Gt[ci];ve.update(ui,rn),ve.bind(ui,rn)}}return rn}function bt(_,F){_.ambientLightColor.needsUpdate=F,_.lightProbe.needsUpdate=F,_.sunLights.needsUpdate=F,_.sunLightShadows.needsUpdate=F,_.directionalLights.needsUpdate=F,_.directionalLightShadows.needsUpdate=F,_.pointLights.needsUpdate=F,_.pointLightShadows.needsUpdate=F,_.spotLights.needsUpdate=F,_.spotLightShadows.needsUpdate=F,_.rectAreaLights.needsUpdate=F,_.hemisphereLights.needsUpdate=F}function Et(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return ue},this.setRenderTargetTextures=function(_,F,ee){let Z=j.get(_);Z.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),j.get(_.texture).__webglTexture=F,j.get(_.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:ee,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,F){let ee=j.get(_);ee.__webglFramebuffer=F,ee.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(_,F=0,ee=0){ue=_,V=F,Y=ee;let Z=null,Q=!1,De=!1;if(_){let Te=j.get(_);if(Te.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(C.FRAMEBUFFER,Te.__webglFramebuffer),ce.copy(_.viewport),Xe.copy(_.scissor),qe=_.scissorTest,g.viewport(ce),g.scissor(Xe),g.setScissorTest(qe),q=-1;return}else if(Te.__webglFramebuffer===void 0)se.setupRenderTarget(_);else if(Te.__hasExternalTextures)se.rebindTextures(_,j.get(_.texture).__webglTexture,j.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let ht=_.depthTexture;if(Te.__boundDepthTexture!==ht){if(ht!==null&&j.has(ht)&&(_.width!==ht.image.width||_.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(_)}}let Ae=_.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(De=!0);let Ge=j.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Ge[F])?Z=Ge[F][ee]:Z=Ge[F],Q=!0):_.samples>0&&se.useMultisampledRTT(_)===!1?Z=j.get(_).__webglMultisampledFramebuffer:Array.isArray(Ge)?Z=Ge[ee]:Z=Ge,ce.copy(_.viewport),Xe.copy(_.scissor),qe=_.scissorTest}else ce.copy(N).multiplyScalar(W).floor(),Xe.copy(ae).multiplyScalar(W).floor(),qe=ye;if(ee!==0&&(Z=B),g.bindFramebuffer(C.FRAMEBUFFER,Z)&&g.drawBuffers(_,Z),g.viewport(ce),g.scissor(Xe),g.setScissorTest(qe),Q){let Te=j.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,ee)}else if(De){let Te=F;for(let Ae=0;Ae<_.textures.length;Ae++){let Ge=j.get(_.textures[Ae]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ae,Ge.__webglTexture,ee,Te)}}else if(_!==null&&ee!==0){let Te=j.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Te.__webglTexture,ee)}q=-1};function Mt(_){let F=j.get(_);return(F.__readFormat!==_.format||F.__readType!==_.type)&&(F.__readFormat=_.format,F.__readType=_.type,F.__formatReadable=E.textureFormatReadable(_.format),F.__typeReadable=E.textureTypeReadable(_.type)),F}this.readRenderTargetPixels=function(_,F,ee,Z,Q,De,ze,Te=0){if(!(_&&_.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=j.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ze!==void 0&&(Ae=Ae[ze]),Ae){g.bindFramebuffer(C.FRAMEBUFFER,Ae);try{let Ge=_.textures[Te],ht=Ge.format,Ke=Ge.type;_.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Te);let Fe=Mt(Ge);if(Fe.__formatReadable===!1){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=_.width-Z&&ee>=0&&ee<=_.height-Q&&C.readPixels(F,ee,Z,Q,Ue.convert(ht),Ue.convert(Ke),De)}finally{let Ge=ue!==null?j.get(ue).__webglFramebuffer:null;g.bindFramebuffer(C.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(_,F,ee,Z,Q,De,ze,Te=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=j.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ze!==void 0&&(Ae=Ae[ze]),Ae)if(F>=0&&F<=_.width-Z&&ee>=0&&ee<=_.height-Q){g.bindFramebuffer(C.FRAMEBUFFER,Ae);let Ge=_.textures[Te],ht=Ge.format,Ke=Ge.type;_.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Te);let Fe=Mt(Ge);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ut=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,ut),C.bufferData(C.PIXEL_PACK_BUFFER,De.byteLength,C.STREAM_READ),C.readPixels(F,ee,Z,Q,Ue.convert(ht),Ue.convert(Ke),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);let Nt=ue!==null?j.get(ue).__webglFramebuffer:null;g.bindFramebuffer(C.FRAMEBUFFER,Nt);let wt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Hd(C,wt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,ut),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,De),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(ut),C.deleteSync(wt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,F=null,ee=0){let Z=Math.pow(2,-ee),Q=Math.floor(_.image.width*Z),De=Math.floor(_.image.height*Z),ze=F!==null?F.x:0,Te=F!==null?F.y:0;se.setTexture2D(_,0),C.copyTexSubImage2D(C.TEXTURE_2D,ee,0,0,ze,Te,Q,De),g.unbindTexture()},this.copyTextureToTexture=function(_,F,ee=null,Z=null,Q=0,De=0){let ze,Te,Ae,Ge,ht,Ke,Fe,ut,Nt,wt=_.isCompressedTexture?_.mipmaps[De]:_.image;if(ee!==null)ze=ee.max.x-ee.min.x,Te=ee.max.y-ee.min.y,Ae=ee.isBox3?ee.max.z-ee.min.z:1,Ge=ee.min.x,ht=ee.min.y,Ke=ee.isBox3?ee.min.z:0;else{let qt=Math.pow(2,-Q);ze=Math.floor(wt.width*qt),Te=Math.floor(wt.height*qt),_.isDataArrayTexture?Ae=wt.depth:_.isData3DTexture?Ae=Math.floor(wt.depth*qt):Ae=1,Ge=0,ht=0,Ke=0}Z!==null?(Fe=Z.x,ut=Z.y,Nt=Z.z):(Fe=0,ut=0,Nt=0);let tt=Ue.convert(F.format),ot=Ue.convert(F.type),Re;F.isData3DTexture?(se.setTexture3D(F,0),Re=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(se.setTexture2DArray(F,0),Re=C.TEXTURE_2D_ARRAY):(se.setTexture2D(F,0),Re=C.TEXTURE_2D),g.activeTexture(C.TEXTURE0),g.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),g.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),g.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);let zt=g.getParameter(C.UNPACK_ROW_LENGTH),lt=g.getParameter(C.UNPACK_IMAGE_HEIGHT),rn=g.getParameter(C.UNPACK_SKIP_PIXELS),An=g.getParameter(C.UNPACK_SKIP_ROWS),Yn=g.getParameter(C.UNPACK_SKIP_IMAGES);g.pixelStorei(C.UNPACK_ROW_LENGTH,wt.width),g.pixelStorei(C.UNPACK_IMAGE_HEIGHT,wt.height),g.pixelStorei(C.UNPACK_SKIP_PIXELS,Ge),g.pixelStorei(C.UNPACK_SKIP_ROWS,ht),g.pixelStorei(C.UNPACK_SKIP_IMAGES,Ke);let Ln=_.isDataArrayTexture||_.isData3DTexture,Bt=F.isDataArrayTexture||F.isData3DTexture;if(_.isDepthTexture){let qt=j.get(_),Gn=j.get(F),Gt=j.get(qt.__renderTarget),ci=j.get(Gn.__renderTarget);g.bindFramebuffer(C.READ_FRAMEBUFFER,Gt.__webglFramebuffer),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let ki=0;ki<Ae;ki++)Ln&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,j.get(_).__webglTexture,Q,Ke+ki),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,j.get(F).__webglTexture,De,Nt+ki)),C.blitFramebuffer(Ge,ht,ze,Te,Fe,ut,ze,Te,C.DEPTH_BUFFER_BIT,C.NEAREST);g.bindFramebuffer(C.READ_FRAMEBUFFER,null),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(Q!==0||_.isRenderTargetTexture||j.has(_)){let qt=j.get(_),Gn=j.get(F);g.bindFramebuffer(C.READ_FRAMEBUFFER,L),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,P);for(let Gt=0;Gt<Ae;Gt++)Ln?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,qt.__webglTexture,Q,Ke+Gt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,qt.__webglTexture,Q),Bt?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Gn.__webglTexture,De,Nt+Gt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Gn.__webglTexture,De),Q!==0?C.blitFramebuffer(Ge,ht,ze,Te,Fe,ut,ze,Te,C.COLOR_BUFFER_BIT,C.NEAREST):Bt?C.copyTexSubImage3D(Re,De,Fe,ut,Nt+Gt,Ge,ht,ze,Te):C.copyTexSubImage2D(Re,De,Fe,ut,Ge,ht,ze,Te);g.bindFramebuffer(C.READ_FRAMEBUFFER,null),g.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Bt?_.isDataTexture||_.isData3DTexture?C.texSubImage3D(Re,De,Fe,ut,Nt,ze,Te,Ae,tt,ot,wt.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(Re,De,Fe,ut,Nt,ze,Te,Ae,tt,wt.data):C.texSubImage3D(Re,De,Fe,ut,Nt,ze,Te,Ae,tt,ot,wt):_.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,De,Fe,ut,ze,Te,tt,ot,wt.data):_.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,De,Fe,ut,wt.width,wt.height,tt,wt.data):C.texSubImage2D(C.TEXTURE_2D,De,Fe,ut,ze,Te,tt,ot,wt);g.pixelStorei(C.UNPACK_ROW_LENGTH,zt),g.pixelStorei(C.UNPACK_IMAGE_HEIGHT,lt),g.pixelStorei(C.UNPACK_SKIP_PIXELS,rn),g.pixelStorei(C.UNPACK_SKIP_ROWS,An),g.pixelStorei(C.UNPACK_SKIP_IMAGES,Yn),De===0&&F.generateMipmaps&&C.generateMipmap(Re),g.unbindTexture()},this.initRenderTarget=function(_){j.get(_).__webglFramebuffer===void 0&&se.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?se.setTextureCube(_,0):_.isData3DTexture?se.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?se.setTexture2DArray(_,0):se.setTexture2D(_,0),g.unbindTexture()},this.resetState=function(){V=0,Y=0,ue=null,g.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}};var V_=`
vec4 sn_mod289(vec4 x){ return x - floor(x * (1.0 / 289.0)) * 289.0; }
float sn_mod289(float x){ return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 sn_permute(vec4 x){ return sn_mod289(((x * 34.0) + 1.0) * x); }
float sn_permute(float x){ return sn_mod289(((x * 34.0) + 1.0) * x); }
vec4 sn_tis(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }
float sn_tis(float r){ return 1.79284291400159 - 0.85373472095314 * r; }
vec4 sn_grad4(float j, vec4 ip){
  const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);
  vec4 p, s;
  p.xyz = floor(fract(vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;
  p.w = 1.5 - dot(abs(p.xyz), ones.xyz);
  s = vec4(lessThan(p, vec4(0.0)));
  p.xyz = p.xyz + (s.xyz * 2.0 - 1.0) * s.www;
  return p;
}
float snoise(vec4 v){
  const vec4 C = vec4(0.138196601125011, 0.276393202250021, 0.414589803375032, -0.447213595499958);
  vec4 i = floor(v + dot(v, vec4(0.309016994374947451)));
  vec4 x0 = v - i + dot(i, C.xxxx);
  vec4 i0;
  vec3 isX = step(x0.yzw, x0.xxx);
  vec3 isYZ = step(x0.zww, x0.yyz);
  i0.x = isX.x + isX.y + isX.z;
  i0.yzw = 1.0 - isX;
  i0.y += isYZ.x + isYZ.y;
  i0.zw += 1.0 - isYZ.xy;
  i0.z += isYZ.z;
  i0.w += 1.0 - isYZ.z;
  vec4 i3 = clamp(i0, 0.0, 1.0);
  vec4 i2 = clamp(i0 - 1.0, 0.0, 1.0);
  vec4 i1 = clamp(i0 - 2.0, 0.0, 1.0);
  vec4 x1 = x0 - i1 + C.xxxx;
  vec4 x2 = x0 - i2 + C.yyyy;
  vec4 x3 = x0 - i3 + C.zzzz;
  vec4 x4 = x0 + C.wwww;
  i = sn_mod289(i);
  float j0 = sn_permute(sn_permute(sn_permute(sn_permute(i.w) + i.z) + i.y) + i.x);
  vec4 j1 = sn_permute(sn_permute(sn_permute(sn_permute(
      i.w + vec4(i1.w, i2.w, i3.w, 1.0))
    + i.z + vec4(i1.z, i2.z, i3.z, 1.0))
    + i.y + vec4(i1.y, i2.y, i3.y, 1.0))
    + i.x + vec4(i1.x, i2.x, i3.x, 1.0));
  vec4 ip = vec4(1.0 / 294.0, 1.0 / 49.0, 1.0 / 7.0, 0.0);
  vec4 p0 = sn_grad4(j0, ip);
  vec4 p1 = sn_grad4(j1.x, ip);
  vec4 p2 = sn_grad4(j1.y, ip);
  vec4 p3 = sn_grad4(j1.z, ip);
  vec4 p4 = sn_grad4(j1.w, ip);
  vec4 norm = sn_tis(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  p4 *= sn_tis(dot(p4, p4));
  vec3 m0 = max(0.6 - vec3(dot(x0, x0), dot(x1, x1), dot(x2, x2)), 0.0);
  vec2 m1 = max(0.6 - vec2(dot(x3, x3), dot(x4, x4)), 0.0);
  m0 = m0 * m0; m1 = m1 * m1;
  return 49.0 * (dot(m0 * m0, vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2)))
               + dot(m1 * m1, vec2(dot(p3, x3), dot(p4, x4))));
}`,Wr=`
float luma(vec3 c){ return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
vec3 saturateColor(vec3 c, float s){ return mix(vec3(luma(c)), c, s); }
// cover-fit an image of imageAspect into a surface of planeAspect, cropping around pivot
vec2 coverUv(vec2 uv, float planeAspect, float imageAspect, vec2 pivot){
  vec2 s = planeAspect > imageAspect ? vec2(1.0, imageAspect / planeAspect) : vec2(planeAspect / imageAspect, 1.0);
  return (uv - pivot) * s + pivot;
}
// zoom < 1 magnifies around pivot; > 1 shows more (edge smear is hidden by the T10 card insets)
vec2 zoomUv(vec2 uv, float zoom, vec2 pivot){ return (uv - pivot) * zoom + pivot; }
// b = half size, r = corner radius
float roundedBoxSDF(vec2 p, vec2 b, float r){
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}
// smoothstep that stays defined when lo == hi (becomes a step)
float safeSmooth(float lo, float hi, float x){
  float t = clamp((x - lo) / max(hi - lo, 1e-5), 0.0, 1.0);
  return t * t * (3.0 - 2.0 * t);
}`,Ou=`
#ifndef RGB_RASTER_OFFSET
#define RGB_RASTER_OFFSET 0.01
#endif
#ifndef RGB_PIXEL_FACTOR
#define RGB_PIXEL_FACTOR 75.0
#endif
vec4 pixelPass(sampler2D tColor, sampler2D tNoiseTex, vec2 uv, vec2 scale, float cells, float sat,
               vec2 dotSize, vec2 rgbOffset, vec3 channelWeight, float aspect, float rnd){
  vec2 grid = vec2(cells * aspect, cells) * scale;
  vec2 block = floor(uv * grid / 16.0);
  float n = texture(tNoiseTex, (block + 0.5) / 64.0 + vec2(rnd, rnd * 1.37)).r;
  n = n * n * 2.0;
  vec4 outc = vec4(0.0);
  for (int k = 0; k < 3; k++) {
    vec2 suv = uv + rgbOffset * channelWeight[k] * n;
    vec2 cid = floor(suv * grid);
    float d = length(fract(suv * grid) - 0.5) * 2.0;
    float m = safeSmooth(dotSize.x, dotSize.y, d);
    vec3 c = saturateColor(texture(tColor, (cid + 0.5) / grid).rgb, sat);
    outc[k] = c[k] * m;
    outc.a = max(outc.a, m);
  }
  return outc;
}
// fix4 (G04/G07): halftonePass, the same call as pixelPass but e is the cell's peach coverage drawn as a cosine
// halftone: small e a round dot, e 0.5 a diamond, high e peach with small round dark holes. Capped at 0.92 so no cell
// ever turns into a solid square block (ref's bands are round dots, the hand and phone included).
vec4 halftonePass(sampler2D tColor, sampler2D tNoiseTex, vec2 uv, float cells, float e,
                  vec2 rgbOffset, vec3 channelWeight, float aspect, float rnd){
  vec2 grid = vec2(cells * aspect, cells);
  vec2 block = floor(uv * grid / 16.0);
  float n = texture(tNoiseTex, (block + 0.5) / 64.0 + vec2(rnd, rnd * 1.37)).r;
  n = n * n * 2.0;
  float t = 1.0 - 2.0 * min(e, 0.92);
  vec4 outc = vec4(0.0);
  for (int k = 0; k < 3; k++) {
    vec2 suv = uv + rgbOffset * channelWeight[k] * n;
    vec2 cid = floor(suv * grid);
    vec2 q = (fract(suv * grid) - 0.5) * 6.2831853;
    float m = smoothstep(t - 0.09, t + 0.09, 0.5 * (cos(q.x) + cos(q.y))) * step(0.03, e);
    outc[k] = texture(tColor, (cid + 0.5) / grid)[k] * m;
    outc.a = max(outc.a, m);
  }
  return outc;
}
// pixelise: nearest-cell sample, cells rows tall, aspect corrected
vec4 pixelise(sampler2D t, vec2 uv, float cells, float aspect){
  vec2 grid = vec2(cells * aspect, cells);
  return texture(t, (floor(uv * grid) + 0.5) / grid);
}`,Fu=`
varying vec2 vUv;
void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }`,G_=`
#define NOISE_SCALE 1.25
uniform vec2 uMouse;
uniform float uTime, uAspect;
varying vec2 vUv;
varying float vNoiseMask;
${V_}
void main(){
  vUv = uv;
  vec2 pos = position.xy * 2.0;
  vNoiseMask = snoise(vec4((pos.x - uMouse.x * 0.2) * uAspect * NOISE_SCALE,
                           (pos.y - uMouse.y * 0.2) * NOISE_SCALE, 0.0, uTime * 0.33)) * 0.5 + 0.5;
  gl_Position = vec4(pos, 0.0, 1.0);
}`,W_=`
uniform sampler2D tScene, uFaceMask, uVideo, tVideoHQ, tRest, tWheel;
uniform float uWheel;
// P2 (gap build 21 Nov): video grade in the A swing (G04), depth sweeps after the hero (G15), car parallax and light
// (G19), windscreen star streaks (G24/G65). Depth maps: RGB normal (x right, y up, z to viewer), A nearness, still uv.
uniform sampler2D tTransitionColor, tNoise, tPhoneDepth, tCarDepth, tCarSky, tStars;
uniform float uOverlay, uLandCut;
uniform vec2 uLandDiag;   // fix4 (G04): landing band diagonal (desktop 0.3, shift 0.19; phone off)
uniform float uVideoSat, uSweep3, uSweep4, uSweep5, uSweep7, uRandom, uTime, uDpr, T3, T7, uStarsCar, uStarsOpen, uDepthOn;
uniform vec2 uMouse, uResolution;
uniform float uAspect, uVideoAspect, uRestAspect, uGlyphDot, uPreloaderOpacity, uTransitionPreloader;
uniform float uFaceMaskScreen, uVideoTransition, uHQMix;
uniform float uDotsUnder, uDotsDim;   // fix4 (G01): 0..1, the ring dots leave where the scene (peach, cards) is opaque
uniform float uSceneOn;      // integration perf: 0 while the man/cards scene is empty (hero.js), the glyph pass is skipped
uniform float T1, T2, T5, T6;
uniform vec2 uVideoPivot, uVideoOffset;
varying vec2 vUv;
varying float vNoiseMask;
${Wr}
${Ou}
// G04: the swing drains the video towards grey and cools the skin a little (ref's grade dips at 1.6 to 2.1 s)
vec3 gradeVideo(vec3 c){
  vec3 g = saturateColor(c, uVideoSat);
  float cool = 0.1 * clamp((1.0 - uVideoSat) / 0.4, 0.0, 1.0);
  return mix(g, vec3(0.95, 0.92, 0.9) * (luma(g) / 0.9256), cool);
}

// ---- phone screen in motion (js/screenfx.js; screenfix 21 Nov) ----
// uScrH: video uv (top-left origin) -> UI uv (0..1, top-left), the tracked screen's homography for the frame the
// video element presented. uScrA: matte tile origin (atlas uv, top-left), matte channel, UI gain (dims with the
// video). uScrB: key reference (green - max(r, b) of the screen), corner radius and gate growth (UI px), on.
// The ...2 set is the same for the HQ element. uScrAtlas: tile size in atlas uv, tile size in matte px.
uniform sampler2D tScreenUI, tScreenMatte;
uniform mat3 uScrH, uScrH2;
uniform vec4 uScrA, uScrA2, uScrB, uScrB2, uScrAtlas, uScrFrame;
uniform float uScrFrameMix, uScrRestVideo, uScrDespill, uScrFeather;
// spill suppression: only pixels with a clear green excess (the screen, its smear and spill) lose it
vec3 scrDespill(vec3 c){ float m = max(c.r, c.b); return vec3(c.r, mix(c.g, min(c.g, m), smoothstep(0.015, 0.06, c.g - m)), c.b); }
vec3 screenComp(vec3 c, vec2 vuv, mat3 H, vec4 A, vec4 B){
  if (B.w < 0.5) return uScrDespill > 0.5 ? scrDespill(c) : c;
  vec3 h = H * vec3(vuv.x, 1.0 - vuv.y, 1.0);
  vec2 s = h.xy / h.z;
  vec2 px = s * vec2(300.0, 689.0);
  float sd = roundedBoxSDF(px - vec2(150.0, 344.5), vec2(150.0, 344.5), B.y);
  // the gate: the screen's rounded rect, grown so a smeared (motion-blurred) edge is still keyed
  float gate = 1.0 - smoothstep(B.z * 0.5, B.z, sd);
  // difference key, normalised by this frame's screen green (glare and the darker fade-out frames key the same)
  float d = c.g - max(c.r, c.b);
  float k = clamp((d - 0.12 * B.x) / (0.7 * B.x), 0.0, 1.0);
  // the offline matte: screen that shows (1) vs fingers in front (0), rectified to the UI rect
  vec2 ms = clamp(s * uScrAtlas.zw, vec2(0.5), uScrAtlas.zw - 0.5);
  vec2 auv = A.xy + ms / uScrAtlas.zw * uScrAtlas.xy;
  vec3 mt = texture(tScreenMatte, vec2(auv.x, 1.0 - auv.y)).rgb;
  float m = (A.z < 0.5 ? mt.r : (A.z < 1.5 ? mt.g : mt.b)) * step(sd, 0.0);
  float a = gate * max(k, m);
  vec3 ui = texture(tScreenUI, vec2(clamp(s.x, 0.0, 1.0), 1.0 - clamp(s.y, 0.0, 1.0))).rgb * A.w;
  return mix(scrDespill(c), ui, a);
}

// LED lattice: one colour sample per cell, a rounded-square hole that shrinks as the cell brightens
vec4 glyphKnockout(sampler2D tex, vec2 uv, float aspect){
  float cellsY = 1.0 / (0.005 * mix(aspect, 1.0 / aspect, 0.5));
  vec2 grid = vec2(cellsY * aspect, cellsY);
  vec2 cell = floor(uv * grid);
  vec2 local = fract(uv * grid) - 0.5;
  vec4 c = texture(tex, (cell + 0.5) / grid);
  float lum = luma(c.rgb);
  float glyph = clamp(floor(lum * 9.0 * 5.662), 0.0, 8.0);
  float shade = clamp(floor(lum * 9.0), 0.0, 8.0);
  c.rgb = saturateColor(c.rgb, 1.05);
  float hs = 0.5 - 0.05 * glyph * (1.0 - uGlyphDot) / 0.8;
  float r = min(0.0925, hs);
  float sdf = roundedBoxSDF(local, vec2(hs), r);
  float px = fwidth(uv.y) * cellsY;
  float cov = glyph > 0.0 ? smoothstep(-0.5 * px, 0.5 * px, sdf) : 0.0;
  return vec4(max((c.rgb - shade * 0.04) * 1.4, 0.0), c.a) * cov;
}

void main(){
  vec4 sceneCol = texture(tScene, vUv);
  vec2 videoUv = coverUv(vUv, uAspect, uVideoAspect, uVideoPivot);
  // over the green window the video eases into the DOM plate's framing (screenfx.js), so the hand-over matches
  videoUv = mix(videoUv, vUv * uScrFrame.xy + uScrFrame.zw, uScrFrameMix);
  // G19 rests 3 and 4: the car / landscape shifts with the cursor by depth (ref 0.005 uv, far moves most)
  vec2 carUv0 = coverUv(vUv, uAspect, uRestAspect, uVideoPivot);
  vec4 carND = texture(tCarDepth, carUv0);
  vec2 carPar = vec2(uMouse.x, -uMouse.y) * (1.0 - carND.a) * 0.005 * T6 * uDepthOn;
  videoUv += carPar;

  // glyph knockout only where face mask R and the drifting noise blobs overlap.
  // uFaceMaskScreen = 1: the mask is a live screen-space render (follows the billboard) instead of a 16:9 frame.
  // (an empty scene gives sceneCol = glyph = 0, so the uniform branch below changes no pixel)
  vec4 col = vec4(0.0);
  if (uSceneOn > 0.5) {
    float noiseMask = smoothstep(0.5, 0.66, vNoiseMask);
    float face = texture(uFaceMask, mix(videoUv, vUv, uFaceMaskScreen)).r;
    vec4 glyph = glyphKnockout(tScene, vUv, uAspect);   // uses fwidth: only under a uniform branch
    col = mix(sceneCol, glyph, noiseMask * face);
  }

  // scroll video under the scene: rest still when the segment is at rest, HQ clip over the B jump, shown from T2
  // rest stills keep their own aspect (the phone's portrait stills are not the video's shape)
  vec2 restUv = coverUv(vUv, uAspect, uRestAspect, uVideoPivot);
  restUv = mix(restUv, vUv * uScrFrame.xy + uScrFrame.zw, uScrFrameMix);
  restUv += carPar;
  // the phone UI on the green screen (both video elements); at rests 1 and 2 the video frame is the rest picture
  // (the DOM plate is that same frame), so uScrRestVideo keeps the video there instead of the older still
  float vInside = step(0.0, videoUv.x) * step(videoUv.x, 1.0) * step(0.0, videoUv.y) * step(videoUv.y, 1.0);
  vec3 vMain = screenComp(gradeVideo(texture(uVideo, videoUv).rgb), videoUv, uScrH, uScrA, uScrB);
  vec3 base = mix(texture(tRest, restUv).rgb, vMain, max(uVideoTransition, uScrRestVideo));
  if (uHQMix > 0.0) base = mix(base, screenComp(gradeVideo(texture(tVideoHQ, videoUv).rgb), videoUv, uScrH2, uScrA2, uScrB2), uHQMix);
  // fix2 R07 (scroll lane, applied fix3): the phone A-swing zoom-out frame gets soft top / bottom edges (uScrFeather, video uv)
  float vIn = uScrFeather > 0.0
    ? step(0.0, videoUv.x) * step(videoUv.x, 1.0) * smoothstep(0.0, uScrFeather, videoUv.y) * smoothstep(0.0, uScrFeather, 1.0 - videoUv.y)
    : vInside;
  base *= mix(1.0, vIn, uScrFrameMix);
  col += vec4(base, 1.0) * T2 * max(1.0 - T5, T6) * (1.0 - col.a);

  // G15: peach pixel bands through the depth of the phone scene (uSweep3 at the rest 1 landing, uSweep4 over B,
  // uSweep5 at the start of C) and a darker brown band through the car (uSweep7, C). 50 rows, #CCA084 / #8C6E5C.
  // overlay mode (hero.js): while the DOM rest plate covers the frame, the canvas is lifted over it and draws the
  // sweep cells only, on transparent
  if (uOverlay > 0.5) col = vec4(0.0);
  if (uDepthOn > 0.5) {
    float fs = uSweep3 + uSweep4 + uSweep5;
    if (fs > 0.0005 && T6 < 0.999) {
      vec4 nd = pixelise(tPhoneDepth, restUv, 50.0, uRestAspect);
      float front = mix(1.5, -0.5, fract(fs));
      // fix2 (R09): the C-start band (uSweep5) is wider (0.4): ref has his head and hand peach at once at C 0.1
      float bw = mix(0.25, 0.4, step(0.0005, uSweep5) * step(uSweep5, 0.9995));
      // fix3 (item 7): the rest-1 landing band (uSweep3 alone) is narrow (0.14) so it sits on his head (nearness ~0.95)
      // only, as ref's (y 1992-2151); at 0.25 it also covered his neck and shoulder
      // fix4 (G04): 0.2 (was 0.14): ref's landing dots are big and cover the head (y 1992-2151), ours were sparse
      bw = mix(bw, 0.2, step(0.0005, uSweep3) * step(uSweep3, 0.9995) * (1.0 - step(0.0005, uSweep4)));
      // fix4 (G04, desktop): the landing band crosses his head on a diagonal from the back of the head (top left) to
      // the face, as ref's (y 1946 corner dots, 1992 back of head, 2151 face, the top left already clearing):
      // while uSweep3 runs alone the depth key gets uLandDiag.x * (v - u) - uLandDiag.y
      float landK = step(0.0005, uSweep3) * step(uSweep3, 0.9995) * (1.0 - step(0.0005, uSweep4));
      // (left half only, where his head is: the hand and phone keep their depth timing); the band is asymmetric there:
      // a leading edge of growing dots (0.08 = about a third of the head), a solid core, then it clears (0.05-0.17)
      float landL = landK * step(0.001, uLandDiag.x) * (1.0 - smoothstep(0.42, 0.5, restUv.x));
      float keyN = nd.a + landL * (uLandDiag.x * (restUv.y - restUv.x) - uLandDiag.y);
      float dN = keyN - front;
      float eBand = mix(1.0 - smoothstep(0.0, bw, abs(dN)),
                        dN > 0.0 ? 1.0 - smoothstep(0.05, 0.17, dN) : 1.0 - smoothstep(0.0, 0.08, -dN), landL);
      float e = eBand * step(0.125, nd.a) * (1.0 - T6) * T3;   // T3: the phone scene is in (A 1.0-1.5)
      // fix3 (item 7, desktop): during the landing band his shoulder (as near as his head in the depth map) stays clear:
      // cells below uLandCut (still uv, y up) are left out while uSweep3 runs alone
      float land = step(0.0005, uSweep3) * step(uSweep3, 0.9995) * (1.0 - step(0.0005, uSweep4));
      // (left half only: the hand and phone on the right still get the band as it runs on after the landing)
      e *= mix(1.0, smoothstep(uLandCut - 0.05, uLandCut + 0.05, (floor(restUv.y * 50.0) + 0.5) / 50.0), land * (1.0 - smoothstep(0.42, 0.5, restUv.x)));
      // fix4 (G04/G07): round halftone dots (was pixelPass, whose e 1 core is a solid square block on the hand/phone)
      vec4 sw = halftonePass(tTransitionColor, tNoise, restUv, 50.0, min(1.0, e * 1.2), vec2(0.0, 0.005), vec3(0.0, 1.0, 2.0), uRestAspect, uRandom);
      // P3 hand-off: over B the band stays translucent on the phone screen, so the feed reads through it
      // fix3 (item 6): the C-start band (uSweep5) also stays off the phone screen (ref: head and hand peach, the
      // phone stays dark), the B band keeps its translucent screen
      bool sw5on = uSweep5 > 0.0005 && uSweep5 < 0.9995;
      if ((uSweep4 > 0.0005 && uSweep4 < 0.9995) || sw5on) {
        bool hq = uHQMix > 0.5;
        vec4 sB = hq ? uScrB2 : uScrB;
        if (sB.w > 0.5) {
          vec3 hh = (hq ? uScrH2 : uScrH) * vec3(videoUv.x, 1.0 - videoUv.y, 1.0);
          vec2 pp = hh.xy / hh.z * vec2(300.0, 689.0);
          float scrIn = 1.0 - smoothstep(-2.0, 2.0, roundedBoxSDF(pp - vec2(150.0, 344.5), vec2(150.0, 344.5), sB.y));
          sw *= 1.0 - (sw5on ? 0.9 : 0.65) * scrIn;
        }
      }
      col = sw + col * (1.0 - sw.a);
    }
    if (uSweep7 > 0.0005 && uSweep7 < 0.9995) {
      vec4 nd = pixelise(tCarDepth, restUv, 50.0, uRestAspect);
      float front = mix(1.5, -0.5, uSweep7);
      float e = (1.0 - smoothstep(0.0, 0.25, abs(nd.a - front))) * step(0.125, nd.a) * T6 * T2;
      vec4 sw = pixelPass(tTransitionColor, tNoise, restUv, vec2(1.0), 50.0, 1.0,
                          vec2(1.5 - 1.5 * e, 2.5 - 2.5 * e), vec2(0.0, 0.005), vec3(0.0, 1.0, 2.0), uRestAspect, uRandom);
      sw.rgb *= 0.686;                                         // #CCA084 -> #8C6E5C on the car
      col = sw + col * (1.0 - sw.a);
    }
    // G19: car light, warm #EAC17B, strongest with the cursor on the left, only on near surfaces
    vec3 Nc = carND.rgb * 2.0 - 1.0;
    float Lc = 0.33 * max(dot(Nc, vec3(-uMouse.x, uMouse.y, 0.0)), 0.0) * T7 * smoothstep(0.0, 0.2, carND.a) * T2;
    col.rgb += vec3(0.9176, 0.7569, 0.4824) * Lc * col.a;
    // G24/G65: star streaks through the windscreen (car sky mask, then the full frame once the window opens)
    float sky = max(texture(tCarSky, restUv).r * uStarsCar, uStarsOpen) * T7 * T6 * T2;
    if (sky > 0.002) {
      vec2 px = vUv * uResolution / uDpr / 1024.0;              // one tile = 1024 css px, 10 streaks (~40 on screen)
      vec2 dir = vec2(-0.03, -0.0064) * uTime;                   // along the streaks (-12 deg, rising to the right)
      float st = texture(tStars, px + dir).a
               + texture(tStars, px * 0.8 + vec2(0.37, 0.11) + dir * 0.7).a * 0.8
               + texture(tStars, px * 1.25 + vec2(0.71, 0.53) + dir * 1.3).a * 0.6;
      col.rgb += vec3(st * 0.66 * sky);
    }
  }

  // rest 3: the steering wheel lights up as ref's does: the whole wheel (rim, hub, spokes; hands stay in front)
  // turns into a solid white LED field on a 75-cell lattice with a fine dark dot in each cell, a thin vertical RGB
  // fringe on its edges and a soft halo. Cells switch on in a random order as uWheel rises. Mask in the still's uv.
  if (uWheel > 0.001) {
    vec2 wg = vec2(75.0 * uAspect, 75.0);
    vec2 cid = floor(vUv * wg);
    vec2 wuv = coverUv((cid + 0.5) / wg, uAspect, uRestAspect, uVideoPivot);
    float fr = 0.3 / 75.0;
    float mC = texture(tWheel, wuv).r;
    vec3 m3 = vec3(texture(tWheel, wuv + vec2(0.0, fr)).r, mC, texture(tWheel, wuv - vec2(0.0, fr)).r);
    m3 = mix(vec3(mC), m3, 0.6);                 // a thin, pastel fringe rather than pure R/G/B cells
    float h = fract(sin(dot(cid, vec2(12.9898, 78.233))) * 43758.5453);
    float on = smoothstep(h, h + 0.15, uWheel * 1.15);
    vec2 lc = fract(vUv * wg) - 0.5;
    float px = fwidth(vUv.y) * 75.0;
    float fine = 1.0 - 0.3 * (1.0 - smoothstep(0.09, 0.09 + px, length(lc)));
    float cover = clamp(max(m3.r, max(m3.g, m3.b)), 0.0, 1.0) * on * T2;
    col.rgb = mix(col.rgb, m3 * fine * 1.05, cover);
    // halo: the mask's blurred mip around the real (unquantised) position
    vec2 suv = coverUv(vUv, uAspect, uRestAspect, uVideoPivot);
    float halo = texture(tWheel, suv, 3.5).r * 0.6 + texture(tWheel, suv, 5.0).r * 0.4;
    col.rgb += vec3(0.9, 0.95, 1.0) * halo * 0.55 * uWheel * T2 * (1.0 - cover);
  }

  // ring halftone over the video, 140 cells (uVideo holds the loader frame while preloading, then the scroll video)
  vec3 vid = texture(uVideo, videoUv + uVideoOffset).rgb;
  vec2 g = fract(vec2(vUv.x * 140.0 * uAspect, vUv.y * 140.0));
  float d = length(g - 0.5) * 2.0;
  float l = min(luma(vid) * 1.3, 1.0);
  float dots = step(d, 1.25 * l) * step(0.5 * l, d) * step(0.1, l) * 0.5;
  dots *= max(max(min(T1, 1.0 - T2), min(T5, 1.0 - T6)), 1.0 - uTransitionPreloader) * uPreloaderOpacity;
  dots *= 1.0 - uOverlay;
  // fix3 (item 5): in the intro the frontal loader dots leave wherever the band or the colour man has arrived (ref
  // 28.14 -> 28.34 s), instead of lying over the turned colour photo as a second, ghosted face
  dots *= 1.0 - (1.0 - step(0.999, uTransitionPreloader)) * clamp(sceneCol.a * 1.5, 0.0, 1.0);
  // fix4 (G01): in the exit glide the video's ring dots stay under the peach silhouette (and the cards), so his
  // face no longer shows through the peach (hero.js raises uDotsUnder once the photo man has left)
  dots *= 1.0 - uDotsUnder * clamp(sceneCol.a * 1.5, 0.0, 1.0);
  dots *= 1.0 - uDotsDim;   // fix4 (G01, phone): the video's dots step back while the peach silhouette holds the screen
  col = vec4(dots) + col * (1.0 - dots);

  gl_FragColor = col;
}`,X_=`
#define KAWASE_N 4
uniform sampler2D tInput;
uniform vec2 uTexel;          // 1 / source size
varying vec2 vUv;
void main(){
  vec2 hp = uTexel * 0.5;
  vec4 s = texture(tInput, vUv) * 4.0;
  for (int k = 0; k < KAWASE_N; k++) {
    float a = (float(k) + 0.5) * 6.28318530718 / float(KAWASE_N);
    s += texture(tInput, vUv + vec2(cos(a), sin(a)) * 1.41421356 * hp);   // ring on the half-pixel diagonal
  }
  gl_FragColor = s / (4.0 + float(KAWASE_N));
}`,q_=`
#define KAWASE_N 4
uniform sampler2D tInput;
uniform vec2 uTexel;
varying vec2 vUv;
void main(){
  vec2 hp = uTexel * 0.5;
  vec4 s = vec4(0.0);
  float w = 0.0;
  for (int k = 0; k < 2 * KAWASE_N; k++) {
    float a = float(k) * 3.14159265359 / float(KAWASE_N);
    bool outer = (k - 2 * (k / 2)) == 0;
    float rad = outer ? 2.0 : 1.41421356;
    float wk = outer ? 1.0 : 2.0;
    s += texture(tInput, vUv + vec2(cos(a), sin(a)) * rad * hp) * wk;
    w += wk;
  }
  gl_FragColor = s / w;
}`,$_=`
uniform sampler2D tComposite, tBloom, tNoise, tGrid;
uniform vec2 uResolution, uZoomPivot;
uniform vec4 uCardInset;      // css px: top, right, bottom, left
uniform float uAspect, uTime, uDpr;
uniform float T7, T8, T9, T10;
uniform float uOverlay;
uniform float uFloor;     // G61/G62 (P3 hand-off): neutral room floor at rests 1/2, driven by screens.js
uniform float uZoomStrength, uSharpen, uBloomStrength, uFogStrength, uGridOpacity, uGridCells, uCardRadius;
uniform vec3 uBackground, uExitColor, uFogColor, uTint;
varying vec2 vUv;
${Wr}
void main(){
  vec2 uv = zoomUv(vUv, 1.0 + T10 * 0.03, vec2(0.5));
  uv = zoomUv(uv, 1.0 - (T8 + T9) * uZoomStrength, uZoomPivot);

  // 5-tap unsharp mask
  vec2 tx = 1.0 / uResolution;
  vec4 c = texture(tComposite, uv);
  vec4 avg = (texture(tComposite, uv + vec2(tx.x, 0.0)) + texture(tComposite, uv - vec2(tx.x, 0.0))
            + texture(tComposite, uv + vec2(0.0, tx.y)) + texture(tComposite, uv - vec2(0.0, tx.y))) * 0.25;
  c += (c - avg) * uSharpen;
  if (uOverlay > 0.5) {
    // sweep-only overlay over the DOM plate: premultiplied, with its bloom, nothing else
    vec3 bl = texture(tBloom, uv).rgb * max(uBloomStrength, 0.45);
    gl_FragColor = vec4(c.rgb + bl, clamp(max(c.a, max(bl.r, max(bl.g, bl.b))), 0.0, 1.0));
    return;
  }
  // composite RT is premultiplied over transparent; put it on the page background
  vec3 col = c.rgb + uBackground * (1.0 - clamp(c.a, 0.0, 1.0));

  // teal tint in the top-left corner, only as T7 rises
  col += uTint * smoothstep(0.66, 1.0, vUv.y) * (1.0 - smoothstep(0.0, 0.5, vUv.x)) * T7;

  col += texture(tBloom, uv).rgb * uBloomStrength;

  // fog: noise warped by itself, stronger towards the edges
  vec2 asp = vec2(uAspect, 1.0);
  float n0 = texture(tNoise, vUv * 0.5 * asp - uTime * 0.1).r;
  float n1 = texture(tNoise, vUv * 0.5 * asp * n0).g;
  vec2 centered = (vUv - 0.5) * 2.0 * asp;
  float fog = smoothstep(0.25, 1.0, n1) * uFogStrength * min(length(centered * 0.5), 1.0);
  col = mix(col, uFogColor, fog);
  col = max(col, vec3(uFloor));

  // grid overlay, scrolling up
  vec4 gr = texture(tGrid, (vUv - vec2(0.0, uTime * 0.005)) * vec2(uGridCells * uAspect, uGridCells));
  col = mix(col, gr.rgb, gr.a * uGridOpacity);

  // exit: the hero shrinks into a rounded card, page colour outside
  if (T10 > 0.0) {
    vec2 p = vUv * uResolution;
    vec4 ins = uCardInset * uDpr * T10;
    vec2 lo = vec2(ins.w, ins.z), hi = uResolution - vec2(ins.y, ins.x);
    float rad = uCardRadius * uDpr * T10;
    vec2 cen = (lo + hi) * 0.5;
    // ref rounds only the bottom corners; the card stays flush with the top edge
    float d = p.y < cen.y ? roundedBoxSDF(p - cen, (hi - lo) * 0.5, rad) : roundedBoxSDF(p - cen, (hi - lo) * 0.5, 0.0);
    col = mix(col, uExitColor, smoothstep(-0.5, 0.5, d));
  }
  gl_FragColor = vec4(col, 1.0);
}`;function Y_(n=256){let e=new Uint8Array(n*n*4),t=[[2,.55],[4,.3],[8,.15]],i=o=>o*o*(3-2*o),s=1337,r=()=>(s=s*16807%2147483647)/2147483647;for(let o=0;o<4;o++){let c=new Float32Array(n*n);for(let[d,f]of t){let v=new Float32Array(d*d).map(r);for(let y=0;y<n;y++){let m=y/n*d,p=Math.floor(m),T=i(m-p),I=(p+1)%d;for(let S=0;S<n;S++){let b=S/n*d,w=Math.floor(b),A=i(b-w),x=(w+1)%d,M=v[p*d+w],D=v[p*d+x],U=v[I*d+w],z=v[I*d+x];c[y*n+S]+=f*((M+(D-M)*A)*(1-T)+(U+(z-U)*A)*T)}}}let l=new Float32Array(n*n);for(let d=0;d<n;d++)for(let f=0;f<n;f++){let v=0;for(let y=-1;y<=1;y++)for(let m=-1;m<=1;m++)v+=c[(d+y+n)%n*n+(f+m+n)%n];l[d*n+f]=v/9}let u=1/0,h=-1/0;for(let d of l)u=Math.min(u,d),h=Math.max(h,d);for(let d=0;d<l.length;d++)e[d*4+o]=Math.round((.2+.6*(l[d]-u)/(h-u))*255)}let a=new Di(e,n,n,Pn);return a.wrapS=a.wrapT=us,a.magFilter=a.minFilter=Lt,a.colorSpace=nn,a.needsUpdate=!0,a}function Z_(n=64,e=2){let t=new Uint8Array(n*n*4),i=e*2;for(let r=0;r<n;r++)for(let a=0;a<n;a++){let o=Math.min(a,n-a),c=Math.min(r,n-r),l=o<i&&c<i?255:a<e||r<e?80:0,u=(r*n+a)*4;t[u]=t[u+1]=t[u+2]=255,t[u+3]=l}let s=new Di(t,n,n,Pn);return s.wrapS=s.wrapT=us,s.magFilter=Lt,s.minFilter=Ji,s.generateMipmaps=!0,s.anisotropy=4,s.colorSpace=nn,s.needsUpdate=!0,s}function K_(){let n=[[0,[120,88,72]],[.5,[176,124,100]],[1,[200,156,132]]],e=256,t=new Uint8Array(e*4);for(let s=0;s<e;s++){let r=s/(e-1),a=0;for(;a<n.length-2&&r>n[a+1][0];)a++;let[o,c]=n[a],[l,u]=n[a+1],h=(r-o)/(l-o);for(let d=0;d<3;d++)t[s*4+d]=Math.round(c[d]+(u[d]-c[d])*h);t[s*4+3]=255}let i=new Di(t,e,1,Pn);return i.magFilter=i.minFilter=Lt,i.colorSpace=nn,i.needsUpdate=!0,i}function J_(n){let e=new Di(new Uint8Array([n,n,n,255]),1,1,Pn);return e.colorSpace=nn,e.needsUpdate=!0,e}var tr=4;function bf(n,{width:e,height:t,isMobile:i=!1,reducedMotion:s=!1}={}){let r={noise:Y_(),grid:Z_(),transitionColor:K_(),black:J_(0)},a={minFilter:Lt,magFilter:Lt,generateMipmaps:!1,depthBuffer:!1,stencilBuffer:!1},o=new on(1,1,{...a,depthBuffer:!0}),c=new on(1,1,a),l=Array.from({length:tr},()=>new on(1,1,a)),u=Array.from({length:tr-1},()=>new on(1,1,a)),h={uResolution:{value:new mt(1,1)},uAspect:{value:1},uDpr:{value:1},uTime:{value:0},uRandom:{value:Math.random()},uMouse:{value:new mt},T1:{value:0},T2:{value:0},T3:{value:0},T4:{value:0},T5:{value:0},T6:{value:0},T7:{value:0},T8:{value:0},T9:{value:0},T10:{value:0},uPreloaderOpacity:{value:0},uTransitionPreloader:{value:0},uVideo:{value:r.black},uVideoAspect:{value:i?.75:16/9},uVideoPivot:{value:i?new mt(.5,.5):new mt(.5,1)},uVideoOffset:{value:new mt(0,0)},uFaceMask:{value:r.black},uFaceMaskScreen:{value:0},uGlyphDot:{value:.3},tVideoHQ:{value:r.black},tRest:{value:r.black},tWheel:{value:r.black},tScreenUI:{value:r.black},tScreenMatte:{value:r.black},uScrH:{value:new xt},uScrH2:{value:new xt},uScrA:{value:new Ut(0,0,0,0)},uScrA2:{value:new Ut(0,0,0,0)},uScrB:{value:new Ut(0,0,0,0)},uScrB2:{value:new Ut(0,0,0,0)},uScrAtlas:{value:new Ut(1,1,1,1)},uScrFrame:{value:new Ut(1,1,0,0)},uScrFrameMix:{value:0},uScrRestVideo:{value:0},uScrDespill:{value:0},uScrFeather:{value:0},uWheel:{value:0},uOverlay:{value:0},uLandCut:{value:i?-1:.4},uLandDiag:{value:new mt(i?0:.3,i?0:.19)},uVideoSat:{value:1},uSweep3:{value:0},uSweep4:{value:0},uSweep5:{value:0},uSweep7:{value:0},tPhoneDepth:{value:r.black},tCarDepth:{value:r.black},tCarSky:{value:r.black},tStars:{value:r.black},uStarsCar:{value:1},uStarsOpen:{value:0},uDepthOn:{value:0},uVideoTransition:{value:1},uRestAspect:{value:i?.75:16/9},uHQMix:{value:0},uZoomStrength:{value:i?.04:.08},uZoomPivot:{value:i?new mt(.5,.5):new mt(1,1)},uSharpen:{value:.25},uBloomStrength:{value:.45},uFogStrength:{value:.125},uFogColor:{value:new Ct(1,1,1)},uGridOpacity:{value:i?.072:.056},uGridCells:{value:52.5},uFloor:{value:0},uSceneOn:{value:1},uDotsUnder:{value:0},uDotsDim:{value:0},uTint:{value:new ie(0,.05,.075)},uCardRadius:{value:i?24:41.25},uCardInset:{value:new Ut(0,36,23.4,36)},uExitColor:{value:new Ct(16579836)},uBackground:{value:new Ct(723724)},tNoise:{value:r.noise},tGrid:{value:r.grid},tTransitionColor:{value:r.transitionColor}},d=(P,V,Y)=>new gn({vertexShader:V,fragmentShader:P,uniforms:{...h,...Y},depthTest:!1,depthWrite:!1,blending:yi}),f=d(W_,G_,{tScene:{value:o.texture}}),v=d(X_,Fu,{tInput:{value:null},uTexel:{value:new mt}}),y=d(q_,Fu,{tInput:{value:null},uTexel:{value:new mt}}),m=d($_,Fu,{tComposite:{value:c.texture},tBloom:{value:u[0].texture}}),p=new fs,T=(P,V)=>{let Y=new mn(P,V);Y.frustumCulled=!1;let ue=new hs;return ue.add(Y),{scene:ue,mesh:Y}},I=T(new _i(1,1,100,100),f),S=new _i(1,1),b=T(S,v),w=T(S,m);function A(P,V){let Y=n.getPixelRatio(),ue=Math.max(1,Math.floor(P*Y)),q=Math.max(1,Math.floor(V*Y));o.setSize(ue,q),c.setSize(ue,q);for(let ce=0;ce<tr;ce++)l[ce].setSize(Math.max(1,ue>>ce+1),Math.max(1,q>>ce+1));for(let ce=0;ce<tr-1;ce++)u[ce].setSize(Math.max(1,ue>>ce+1),Math.max(1,q>>ce+1));h.uResolution.value.set(ue,q),h.uAspect.value=P/V,h.uDpr.value=Y;let le=Math.max(16,P/105);h.uCardInset.value.set(0,.025*P,Math.max(0,(.05-.015*(P/V))*V),.025*P),h.uCardRadius.value=i?24:1.5625*le*1.65,B={top:0,right:.025*P,bottom:h.uCardInset.value.z,left:.025*P,radius:h.uCardRadius.value}}function x(P,V,Y){b.mesh.material=P,P.uniforms.tInput.value=V.texture,P.uniforms.uTexel.value.set(1/V.width,1/V.height),n.setRenderTarget(Y),n.render(b.scene,p)}function M(){x(v,c,l[0]);for(let V=1;V<tr;V++)x(v,l[V-1],l[V]);let P=l[tr-1];for(let V=tr-2;V>=0;V--)x(y,P,u[V]),P=u[V]}let D=new Ct,U=performance.now(),z=0,B=null,L={uniforms:h,textures:r,autoTime:!s,sceneTarget:o,sceneEmpty:!1,setSize:A,get cardInset(){return B},render(P,V){let Y=performance.now();L.autoTime&&(h.uTime.value+=Math.min((Y-U)/1e3,1/30),Y-z>200&&(h.uRandom.value=Math.random(),z=Y)),U=Y;let ue=n.getRenderTarget();n.getClearColor(D);let q=n.getClearAlpha(),le=n.autoClear;n.autoClear=!0,n.setClearColor(0,0),n.setRenderTarget(o),L.sceneEmpty?n.clear():n.render(P,V),n.setRenderTarget(c),n.render(I.scene,p),(h.uBloomStrength.value>0||h.uOverlay.value>.5)&&M(),n.setRenderTarget(ue),n.render(w.scene,p),n.setClearColor(D,q),n.autoClear=le},compile(P,V){n.compile(I.scene,p),b.mesh.material=y,n.compile(b.scene,p),b.mesh.material=v,n.compile(b.scene,p),n.compile(w.scene,p),P&&V&&n.compile(P,V)},dispose(){[o,c,...l,...u].forEach(P=>P.dispose()),[f,v,y,m].forEach(P=>P.dispose()),I.mesh.geometry.dispose(),S.dispose(),Object.values(r).forEach(P=>P.dispose())}};return A(e,t),L}var{gsap:Ns,ScrollTrigger:ka,Lenis:Mf}=window,wf=48,j_=[0,3.95,5.7,9.5,11.2],[Df,Nf,Bu,Ef,Q_]=j_,ey=6.2,ty=[-1,0,1,2,2,2],ny=[0,1,2,3,3,4],ku={T1:0,T2:0,T3:0,T4:0,T5:0,T6:0,T7:0,T8:0,T9:0,T10:0,uVideoTransition:1,heroFrameIndex:0,uCardsFade:1,uCardsSpin:0,uCardsSwing:0,uSweep1:0,uSweep4:0,uBloomStrength:.45,uHQMix:0,hqProgress:0,videoTime:Df,uVideoSat:1,uSweep7:0,uStarsCar:1,uStarsOpen:0},Tf=Object.keys(ku),Xr=600,Af=(n,e)=>{let t=Math.min(1,Math.max(0,e))*Xr,i=Math.floor(t),s=n[i],r=n[Math.min(Xr,i+1)];return Math.abs(r-s)<.05?s+(r-s)*(t-i):s};function iy(n,e=!1){return[{id:"A",on:"hero",start:`top+=${n?5:10}% top`,end:"bottom top",duration:1.7,length:1.5,build(t){t.tw("T1",0,1,0,1.17),t.tw("uSweep1",0,1,0,1.17),t.tw("uCardsFade",1,0,.2,.4,"power2.out"),t.tw("uCardsSpin",0,Math.PI/8,0,.5,"power2.in"),t.tw("uVideoSat",1,.75,.45,.05),t.tw("uVideoSat",.75,.35,.7025,.2025),t.tw("uVideoSat",.35,.8,1.019,.063),t.tw("uVideoSat",.8,1,1.3,.12),t.tw("videoTime",Df,Nf,.5,1),t.tw("T2",0,1,.7,.25),t.tw("T3",0,1,1,.5),t.tw("uVideoTransition",1,0,1.4,.1)}},{id:"B",on:"steps",start:"top+=0.5% top",end:"top+=20% top",duration:1.1,length:1,build(t){t.tw("uVideoTransition",0,1,0,.05),t.tw("T4",0,1,0,1),t.tw("uSweep4",0,1,0,1),t.tw("hqProgress",0,1,0,.5),t.tw("uHQMix",0,1,0,.05),t.tw("uHQMix",1,0,.45,.1),t.set("heroFrameIndex",1,.225),t.set("videoTime",Bu,.5),t.tw("uVideoTransition",1,0,.93,.07)}},{id:"C",on:"steps",start:"top+=20.5% top",end:"top+=45% top",duration:1.6,length:2,build(t){t.tw("uVideoTransition",0,1,0,.2),t.tw("T5",0,1,0,.2),t.tw("videoTime",Bu,Ef,.3,1.7),t.set("heroFrameIndex",2,1),t.tw("uBloomStrength",.45,0,1,.2),t.tw("T6",0,1,1,.2),t.tw("T7",0,1,.9,.3),t.tw("uSweep7",0,1,1.12,.86),t.tw("uVideoTransition",1,0,1.9,.1)}},{id:"E",on:"steps",start:"top+=45.5% top",end:"top+=72.5% top",duration:1.7,length:1.0744,build(t){t.tw("uVideoTransition",0,1,0,.1),t.tw("T8",0,1,0,1.0744,"power3.inOut");let i=e?.2:0;t.tw("videoTime",Ef,10,.15,.47-i),t.tw("videoTime",10,10.45,.62-i,e?.13:.14),t.tw("videoTime",10.45,Q_,e?.55:.76,e?.5244:.3144),t.set("heroFrameIndex",3,.7-i),t.tw("uStarsCar",1,0,.58-i,.1),t.tw("uStarsOpen",0,1,.68-i,.1),t.tw("uVideoTransition",1,0,.85-i,.1)}},{id:"E3",on:"steps",start:"top+=72.5% top",end:"top+=90.5% top",duration:.9,length:2,build(t){t.tw("T10",0,1,1,1)}}]}var jl=class extends Ks{constructor(e){if(super(e),this.colorSpace=nn,this.minFilter=Lt,this.magFilter=Lt,this.presented={frames:0,mediaTime:-1},"requestVideoFrameCallback"in e){let t=(i,s)=>{this.presented.frames++,this.presented.mediaTime=s.mediaTime,e.requestVideoFrameCallback(t)};e.requestVideoFrameCallback(t)}else e.addEventListener("seeked",()=>{this.needsUpdate=!0,this.presented.frames++,this.presented.mediaTime=e.currentTime})}update(){}};function Cf(n){let e=document.createElement("video");return e.muted=!0,e.defaultMuted=!0,e.playsInline=!0,e.setAttribute("muted",""),e.setAttribute("playsinline",""),e.preload="auto",e.crossOrigin="anonymous",e.src=n,e}function Rf(n,e=15e3){return new Promise((t,i)=>{if(n.readyState>=2)return t();let s=setTimeout(()=>i(new Error("video load timeout")),e);n.addEventListener("loadeddata",()=>{clearTimeout(s),t()},{once:!0}),n.addEventListener("error",()=>{clearTimeout(s),i(n.error||new Error("video error"))},{once:!0}),n.play().then(()=>n.pause()).catch(()=>{})})}async function Pf(n){await window.__first;let e=await fetch(n);if(!e.ok)throw new Error(`${n}: ${e.status}`);return URL.createObjectURL(await e.blob())}function If(n){let e=document.createElement("video");return n.mp4&&e.canPlayType('video/mp4; codecs="avc1.640028"')?n.mp4:n.webm}function Lf(n){let e=0,t=0,i=()=>{Math.abs(n.currentTime-e)>1e-4&&(t=performance.now(),n.currentTime=e)};n.addEventListener("seeked",()=>{if(t){let r=performance.now()-t;r<400&&(s.lat+=(r-s.lat)*.2),t=0}i()});let s=r=>{e=(Math.floor(r*wf+1e-4)+.5)/wf,n.seeking||i()};return s.lat=30,s}async function sy(n){let e=await Pf(If(n)),t=n.hq?await Pf(If(n.hq)):e,i=Cf(e),s=Cf(t);await Promise.all([Rf(i),Rf(s)]),i.pause(),s.pause();let r=n.hq?[0,.99*s.duration]:[Nf,Bu],a={main:i,hq:s,hqRange:r,urls:[e,t],texture:new jl(i),hqTexture:new jl(s),seekMain:Lf(i),seekHQ:Lf(s)};return i.currentTime=0,s.currentTime=r[0],a}function ry(n){let e=new ds;return n.map(t=>{let i=e.load(t);return i.colorSpace=nn,i.generateMipmaps=!1,i.minFilter=Lt,i})}async function Uf({lenisOptions:n={},uniforms:e={},video:t=null,onStep:i=null,onSnap:s=null,hero:r='[data-scroll="hero"]',steps:a='[data-scroll="steps"]',stepsScrollDistance:o=ey,sizeSections:c=!0}={}){Ns.registerPlugin(ka);let l=matchMedia("(prefers-reduced-motion: reduce)").matches,u=innerWidth,h=u<768,d=u<992,f={hero:typeof r=="string"?document.querySelector(r):r,steps:typeof a=="string"?document.querySelector(a):a};if(!f.hero||!f.steps)throw new Error("initScroll: hero / steps section missing");if(c){let N=CSS.supports("height","1svh")?"svh":"vh";f.hero.style.height="190vh",f.steps.style.height=`calc(100${N} + 100${N} * ${o})`}"scrollRestoration"in history&&(history.scrollRestoration="manual"),window.scrollTo(0,0);let v=null;!l&&Mf&&(v=new Mf({infinite:!1,lerp:h?1:.115,smoothWheel:!h,syncTouch:!0,touchMultiplier:1,wheelMultiplier:1.3,autoResize:!0,virtualScroll:N=>D()?(N.event?.cancelable&&N.event.preventDefault(),!1):!0,...n}),v.on("scroll",ka.update),Ns.ticker.add(y),Ns.ticker.lagSmoothing(0),v.scrollTo(0,{immediate:!0,force:!0}));function y(N){v.raf(N*1e3)}let m={...ku},p={snaps:0},T=null,I={...ku},S=iy(d,h).map(N=>{let ae={...I},ye=Ns.timeline({paused:!0,defaults:{ease:"none"}});N.build({tw:(G,J,oe,Ee,Se,Ve="none")=>ye.fromTo(ae,{[G]:J},{[G]:oe,duration:Se,ease:Ve,immediateRender:!1},Ee),set:(G,J,oe)=>ye.set(ae,{[G]:J},oe)}),ye.set({},{},N.length);let K=new Float32Array(Xr+1),pe=new Float32Array(Xr+1);for(let G=0;G<=Xr;G++)ye.progress(G/Xr),K[G]=ae.videoTime,pe[G]=ae.hqProgress;ye.progress(1),I={...ae},ye.progress(0);let R={...N,proxy:ae,tl:ye,st:null,vtab:K,htab:pe};return R.st=ka.create({trigger:f[N.on],start:N.start,end:N.end,onUpdate:G=>L(R,G)}),R}),b=!0,w=0,A=0,x=()=>{b=!0},M=1600,D=()=>h&&!b&&!T&&performance.now()-A<M;function U(){!v||!D()||(Math.abs(v.animatedScroll-w)>.5||Math.abs(window.scrollY-w)>.5)&&v.scrollTo(w,{immediate:!0,force:!0})}let z=N=>{let ae=S.indexOf(N);return ae<=0?0:S[ae-1].st.end+1},B=(N,ae)=>h?z(N):ae.start-1;["touchstart","wheel","keydown","pointerdown"].forEach(N=>addEventListener(N,x,{passive:!0,capture:!0}));function L(N,ae){if(!v||T)return;let ye=ae.progress;if(ye<=.01||ye>=.99)return;if(!b&&(performance.now()-A>1200||Math.abs(ae.scroll()-w)>innerHeight*.6)&&(b=!0),!b){v.scrollTo(w,{immediate:!0,force:!0});return}let K=ae.direction>0,pe=K?ae.end+1:B(N,ae);T={id:N.id,forward:K,t0:performance.now(),from:v.animatedScroll,to:pe,dur:N.duration},p.snaps++,s?.({id:N.id,phase:"start",forward:K,from:ae.scroll(),to:pe}),v.scrollTo(pe,{lock:!0,duration:N.duration,easing:R=>R,onComplete:()=>{let R=performance.now()-T.t0;if(T=null,b=!1,w=pe,A=performance.now(),s?.({id:N.id,phase:"end",forward:K,ms:R,scroll:v.scroll}),h){let G=K&&N.id==="E"?S.find(J=>J.id==="E3"):!K&&N.id==="E3"?S.find(J=>J.id==="E"):null;G&&P(G,K)}}})}function P(N,ae){let ye=v.animatedScroll,K=ae?N.st.end+1:B(N,N.st);T={id:N.id,forward:ae,t0:performance.now(),chained:!0,from:ye,to:K,dur:N.duration},p.snaps++,s?.({id:N.id,phase:"start",forward:ae,from:ye,to:K,chained:!0}),v.scrollTo(K,{lock:!0,duration:N.duration,easing:pe=>pe,force:!0,onComplete:()=>{let pe=performance.now()-T.t0;T=null,b=!1,w=K,A=performance.now(),s?.({id:N.id,phase:"end",forward:ae,ms:pe,scroll:v.scroll,chained:!0})}})}let V=null,Y=[],ue=t?sy(t).then(N=>(V=N,e.tVideo&&(e.tVideo.value=N.texture),e.tVideoHQ&&(e.tVideoHQ.value=N.hqTexture),Ce.video=N,Xe(!0),N)):Promise.resolve(null);if(t?.stills?.length){let N=()=>{Y=ry(t.stills),Ce.stills=Y,Xe(!0)};Promise.resolve(window.__first).then(()=>setTimeout(N,0))}let q=0,le=-1;function ce(){return v?v.animatedScroll:window.scrollY}function Xe(N=!1,ae=m.videoTime,ye=m.hqProgress){for(let pe=0;pe<Tf.length;pe++){let R=Tf[pe],G=e[R]||e["u"+R];G&&(G.value=m[R])}let K=Math.round(m.heroFrameIndex);(N||K!==le)&&Y[K]&&(le=K,e.tRest&&(e.tRest.value=Y[K])),V&&(V.seekMain(ae),(m.uHQMix>0&&!window.__v8?.glCovered||N)&&V.seekHQ(V.hqRange[0]+(V.hqRange[1]-V.hqRange[0])*ye))}function qe(N,ae){let ye=T;if(!V||!ye||ye.to==null||!(ye.dur>0))return null;let K=Math.min(110,1.5*V.seekMain.lat+8),pe=ae+(ye.to-ye.from)/(ye.dur*1e3)*K;pe=ye.to>=ye.from?Math.min(pe,ye.to):Math.max(pe,ye.to);let R=(pe-N.st.start)/Math.max(1,N.st.end-N.st.start);return[Af(N.vtab,R),Af(N.htab,R)]}function nt(N,ae){if(N===q)return;q=N;let ye=ty[N],K=ny[N];document.querySelectorAll("[data-step-pill]").forEach((pe,R)=>{let G=R===ye;pe.classList.toggle("is-active",G),G?pe.setAttribute("aria-current","step"):pe.removeAttribute("aria-current"),pe.textContent=G?`Step 0${R+1}`:`0${R+1}`}),document.querySelectorAll("[data-rail-tick]").forEach((pe,R)=>pe.classList.toggle("is-active",R===K)),i?.({rest:N,step:ye,tick:K,direction:ae})}function me(){U();let N=ce(),ae=0;for(let G=0;G<S.length;G++)N>=S[G].st.start&&(ae=G);let ye=S[ae],K=Ns.utils.clamp(0,1,(N-ye.st.start)/Math.max(1,ye.st.end-ye.st.start));ye.tl.progress(K),Object.assign(m,ye.proxy);let pe=qe(ye,N);pe?Xe(!1,pe[0],pe[1]):Xe();let R=q;for(;R<S.length&&N>=S[R].st.end;)R++;for(;R>0&&N<S[R-1].st.start;)R--;R!==q&&nt(R,R>q?1:-1)}Ns.ticker.add(me);let xe=N=>N<768?0:N<992?1:2,X=xe(u),W=0,_e=()=>{clearTimeout(W),W=setTimeout(()=>{xe(innerWidth)!==X&&location.reload()},250)};addEventListener("resize",_e),ka.refresh(),nt(0,0),q=0,document.querySelectorAll("[data-rail-tick]").forEach((N,ae)=>N.classList.toggle("is-active",ae===0)),document.querySelectorAll("[data-step-pill]").forEach((N,ae)=>{N.classList.remove("is-active"),N.textContent=`0${ae+1}`}),me();let Ce={lenis:v,state:m,stats:p,ready:ue,video:null,stills:Y,phoneE:h,segments:S.map(N=>({id:N.id,duration:N.duration,get start(){return N.st.start},get end(){return N.st.end}})),get rest(){return q},get snapping(){return T},stop(){v?.stop()},start(){v?.start()},refresh(){ka.refresh(),me()},destroy(){Ns.ticker.remove(me),v&&(Ns.ticker.remove(y),v.destroy()),S.forEach(N=>{N.st.kill(),N.tl.kill()}),removeEventListener("resize",_e),["touchstart","wheel","keydown","pointerdown"].forEach(N=>removeEventListener(N,x,{capture:!0})),V&&(V.texture.dispose(),V.hqTexture.dispose(),[V.main,V.hq].forEach(N=>{N.removeAttribute("src"),N.load()}),new Set(V.urls).forEach(N=>URL.revokeObjectURL(N))),Y.forEach(N=>N.dispose())}};return Ce}var ay={"loader-rise":{gain:.7,files:[]},"reveal-hit":{gain:.8,files:[],throttle:120},"card-tick":{gain:.35,files:[],throttle:45},"chapter-whoosh":{gain:.75,files:[],throttle:250},"cta-pop":{gain:.6,files:[],throttle:80}},NM=new URL("../assets/sound/",import.meta.url);var nr=null,oy=null,ly=!1;var cy=new Map,Ff=new Map;function zu(n,e={}){if(!ly||!nr||nr.state!=="running")return;let t=cy.get(n),i=ay[n];if(!t||!i)return;let s=performance.now();if(!(i.throttle&&s-(Ff.get(n)||-1e9)<i.throttle)){Ff.set(n,s);try{let r=nr.createBufferSource();r.buffer=t[Math.random()*t.length|0],e.rate&&(r.playbackRate.value=e.rate);let a=nr.createGain();a.gain.value=i.gain*(e.volume==null?1:e.volume);let o=r;if(o.connect(a),o=a,e.pan&&nr.createStereoPanner){let c=nr.createStereoPanner();c.pan.value=Math.max(-1,Math.min(1,e.pan)),o.connect(c),o=c}o.connect(oy),r.start(nr.currentTime+Math.max(0,e.delay||0)),r.onended=()=>{try{o.disconnect(),a.disconnect()}catch{}}}catch{}}}var qr=300,Hu=689,za={u:.5,v:.35,w:2.6,h:.42,a:1},qu=innerWidth>=992,uy=`assets/rest/rest12_${qu?"d":"m"}_plate.jpg`,hy=`assets/rest/rest12_${qu?"d":"m"}_screen.json`,Of=15,Bf=[{src:"assets/ads/picks/bewakoof_3673683892796703.webp",cat:"Fashion"},{src:"assets/ads/picks/giva_1317925740231727.webp",cat:"Jewellery"},{src:"assets/ads/picks/lenskart_1606394743775356.webp",cat:"Eyewear"},{src:"assets/ads/picks/lenskart_26725618430462841.webp",cat:"Eyewear"},{src:"assets/ads/picks/lenskart_981739014381065.webp",cat:"Eyewear"},{src:"assets/ads/picks/neemans_1809156937117006.webp",cat:"Footwear"},{src:"assets/ads/picks/sereko_manual_20261012_1.webp",cat:"Skincare"},{src:"assets/ads/picks/sleepy_owl_coffee_926592760393383.webp",cat:"Coffee"},{src:"assets/ads/picks/the_souled_store_1420998273216879.webp",cat:"Fashion"},{src:"assets/ads/picks/wakefit_1255301093350351.webp",cat:"Home"},{src:"assets/ads/picks/reel_bodywash.mp4",poster:"assets/ads/picks/reel_bodywash_poster.jpg",cat:"Body wash",video:!0},{src:"assets/ads/picks/reel_garden.mp4",poster:"assets/ads/picks/reel_garden_poster.jpg",cat:"Garden decor",video:!0},{src:"assets/ads/picks/31_thick_oil_thicker_hair.webp",cat:"Castor oil"},{src:"assets/ads/picks/bd_21_en_rs_849_20_glasses_of_chaas.webp",cat:"Food"},{src:"assets/ads/picks/r5_09_threeshades.webp",cat:"Oral care"},{src:"assets/ads/picks/r5_16_smileprep.webp",cat:"Oral care"},{src:"assets/ads/picks/habbits_r6_pickany3.webp",cat:"Oral care"},{src:"assets/ads/picks/r2_3_15_off_grid_4x5.webp",cat:"Home decor"},{src:"assets/ads/picks/30_x7_p_nopins.webp",cat:"Body care"},{src:"assets/ads/picks/31_x8_h_gaping.webp",cat:"Body care"}],ps={src:"assets/ads/food_mug_nb.mp4",still:"assets/white/mug_still_nb.jpg",loop:[.1,1.85],thumb:[60,340,270,270]},Ql={x:18,y:425,w:44,h:44},dy=[[{label:"Break-even ROAS",value:"Day 1",pill:"Set first",glyph:"target",at:[-.335,-.17],atM:[-.36,-.17],tilt:[14,7,1]},{label:"Each sale counted",value:"2x",pill:["Broken","Fixed"],glyph:"meta",at:[-.415,.355],atM:[-.43,.35],tilt:[14,-6,4]},{label:"Product page",value:"Missing proof",pill:"Fix +",glyph:"page",at:[.235,.375],atM:[.12,.37],tilt:[-14,-6,3.5]}],[{label:"Amazon reviews pulled",value:"997",pill:"One castor oil study",avatar:"stars",at:[-.325,-.175],atM:[-.36,-.19],tilt:[14,7,-1]},{label:"Also read",value:"Reddit threads",pill:"In their words",avatar:"bubble",at:[.36,-.06],atM:[.2,-.08],tilt:[-14,5,-1]},{label:"Also studied",value:"Rivals' ads",pill:"Ad Library",avatar:"card",at:[.075,.5],atM:[-.03,.47],tilt:[-8,-8,-3]}]],kf={desk:[{eb:[.322,.144],fsE:21,fsN:56,fsU:20,p0:[.306,.283],p3:[.75,-.006],dropX:.371,hy:.327,hx:[.371,1],pillFs:18,pillH:40},{eb:[.125,.306],fsE:26,fsN:76,fsU:26,p0:[-.02,.545],p3:[.75,-.006],dropX:.555,hy:.599,hx:[0,1],pillFs:24,pillH:54}],mob:[{eb:[.5,.326],fsE:17,fsN:38,fsU:16,p0:[.385,.515],p3:[1.02,.367],dropX:.39,hy:.542,hx:[.39,1],pillFs:14,pillH:38,pillY:.424},{eb:[.5,.32],fsE:17,fsN:38,fsU:16,p0:[-.02,.646],p3:[1.02,.405],dropX:.595,hy:.717,hx:[0,1],pillFs:14,pillH:38,pillY:.423}]},zf=[334,679,1127,1471],Wu=n=>n<0?0:n>1?1:n,qn=(n,e,t)=>Wu((t-n)/(e-n)),kn=(n,e,t)=>{let i=qn(n,e,t);return i*i*(3-2*i)},Ft=(n,e,t)=>n+(e-n)*t,Hf=n=>n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2,Je=n=>Math.round(n*100)/100,Ha={target:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="10" cy="10" r="7.2"/><circle cx="10" cy="10" r="3.4"/><path d="M10 1.5v4M10 14.5v4M1.5 10h4M14.5 10h4" stroke-linecap="round"/></svg>',meta:'<svg viewBox="0 0 24 20" fill="none" stroke="#4f8cff" stroke-width="2.2" stroke-linecap="round"><path d="M3 13.5c0-4.5 2.2-8 4.6-8 3.2 0 5.6 9 8.8 9 1.9 0 3.6-2 3.6-5s-1.6-4.6-3.3-4.6c-3.3 0-5.6 8.6-9 8.6C5 13.5 3 13 3 13.5z"/></svg>',store:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><path d="M3 8.5V17h14V8.5"/><path d="M2 8.5 3.6 3h12.8L18 8.5c0 1.4-1.1 2.2-2.4 2.2S13.2 9.9 13.2 8.5c0 1.4-1.1 2.2-2.4 2.2S8.4 9.9 8.4 8.5c0 1.4-1.1 2.2-2.4 2.2S2 9.9 2 8.5z"/><path d="M8 17v-4.5h4V17"/></svg>',page:'<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"><rect x="4" y="2.5" width="12" height="15" rx="2.2"/><path d="M7 7h6M7 10.5h6M7 14h3.5" stroke-linecap="round"/></svg>',stars:'<svg viewBox="0 0 24 24" fill="#f1f2f3"><path d="M12 3.2l2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.1 6.9 18.9 8 13.2l-4.3-4 5.8-.7z"/></svg>',bubble:'<svg viewBox="0 0 24 24" fill="none" stroke="#f1f2f3" stroke-width="1.8" stroke-linejoin="round"><path d="M4 5.5h16v10H10l-4.5 3.8V15.5H4z"/><path d="M8 9.3h8M8 12h5" stroke-linecap="round"/></svg>',card:'<svg viewBox="0 0 24 24" fill="none" stroke="#f1f2f3" stroke-width="1.8" stroke-linejoin="round"><rect x="4" y="3.5" width="16" height="17" rx="2.5"/><rect x="7" y="6.5" width="10" height="7" rx="1"/><path d="M7 17h6" stroke-linecap="round"/></svg>',check:'<svg viewBox="0 0 12 12" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6.2l2 2 4-4.4"/></svg>',search:'<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="5.2" cy="5.2" r="3.6"/><path d="M8 8l2.6 2.6" stroke-linecap="round"/></svg>',status:'<svg viewBox="0 0 54 12" fill="#f1f2f3"><rect x="0" y="7" width="3" height="4" rx=".8"/><rect x="4.5" y="5" width="3" height="6" rx=".8"/><rect x="9" y="3" width="3" height="8" rx=".8"/><rect x="13.5" y="1" width="3" height="10" rx=".8"/><path d="M22 4.6a8 8 0 0 1 11 0l-1.3 1.4a6 6 0 0 0-8.4 0zM24.6 7.3a4.3 4.3 0 0 1 5.8 0L27.5 10.4z"/><rect x="37.5" y="1.5" width="14" height="9" rx="2.6" fill="none" stroke="#f1f2f3" stroke-opacity=".5"/><rect x="39" y="3" width="10" height="6" rx="1.4"/><rect x="52.4" y="4.4" width="1.4" height="3.4" rx=".7" fill-opacity=".5"/></svg>'},Vu=n=>Ha[n]||"";function fy(n,e,t){let[[i,s],[r,a],[o,c],[l,u]]=t,h=i-r+o-l,d=s-a+c-u,f,v,y=i,m,p,T=s,I=0,S=0;if(Math.abs(h)<1e-9&&Math.abs(d)<1e-9)f=r-i,v=l-i,m=a-s,p=u-s;else{let w=r-o,A=l-o,x=a-c,M=u-c,D=w*M-A*x;I=(h*M-A*d)/D,S=(w*d-h*x)/D,f=r-i+I*r,v=l-i+S*l,m=a-s+I*a,p=u-s+S*u}return`matrix3d(${[f/n,m/n,0,I/n,v/e,p/e,0,S/e,0,0,1,0,y,T,0,1].map(w=>+w.toFixed(7)).join(",")})`}var Xu=(n,e,t,i,s)=>{let r=1-s;return[r*r*r*n[0]+3*r*r*s*e[0]+3*r*s*s*t[0]+s*s*s*i[0],r*r*r*n[1]+3*r*r*s*e[1]+3*r*s*s*t[1]+s*s*s*i[1]]};function py(n,e){let t=0,i=1;for(let s=0;s<22;s++){let r=(t+i)/2;Xu(...n,r)[0]<e?t=r:i=r}return(t+i)/2}function my(n,e){let t=e[0]-n[0],i=e[1]-n[1];return[n,[n[0]+.48*t,n[1]+.082*i],[n[0]+.83*t,n[1]+.227*i],e]}function $t(n,e,t){let i=document.createElement(n);return e&&(i.className=e),t!=null&&(i.innerHTML=t),i}function gy(){let n=new WeakMap;return(e,t,i)=>{let s=n.get(e);s||(s={},n.set(e,s)),s[t]!==i&&(s[t]=i,e.style[t]=i)}}function Us(n,e,t){n.classList.contains(e)!==t&&n.classList.toggle(e,t)}var Gu=(n,e)=>n>=e*.72?"none":`radial-gradient(circle at 50% 50%, #000 ${n.toFixed(2)}px, transparent ${(n+.6).toFixed(2)}px) 0 0 / ${e}px ${e}px repeat`;function Vf({scroll:n,post:e=null,reduce:t=matchMedia("(prefers-reduced-motion: reduce)").matches}={}){let i=window.gsap,s=typeof e=="function"?e:()=>e,r=document.getElementById("darkRun"),a=document.getElementById("stepsSticky"),o=document.getElementById("stepBlock"),c=document.getElementById("system"),l=document.documentElement;if(!n||!r||!a)return{onStep(){},onSnap(){},destroy(){}};let u=gy(),h=matchMedia("(hover: none)").matches,d=$t("div","si-wrap");d.setAttribute("aria-hidden","true");let f=$t("div","si"),v=$t("div","si-stage"),y=$t("canvas","si-plate");y.width=1024,y.height=1024;let m=$t("canvas","si-plate si-plate-head");m.width=2,m.height=2;let p=$t("div","si-grid"),T=$t("div","si-light"),I=$t("div","si-glow");I.style.display="none";let S=$t("div","scr"),b=$t("div","si-gglow");v.append(y,S,m,b,T,p);let w=$t("div","si-gglow-gl"),A=$t("div","si-gglow");w.append(A);let x=$t("div","sw-layer"),M=$t("div","si-label","");f.append(v,w,x,M),d.append(f);let D=r.querySelector(".gl-wrap");D?D.after(d):r.prepend(d);let U=()=>`<div class="st-bar"><span>9:41</span>${Ha.status}</div>`,z=(O,ne,$,he,He)=>`<div class="ua-row"><span class="ua-ic">${Vu(O)}</span>
    <span class="ua-txt"><b>${ne}</b><span>${$}</span></span>
    <span class="ua-st"><i class="s-chk">Checking<span class="ua-dots"><i></i><i></i><i></i></span></i><i class="s-val">${he}</i>${He?`<i class="s-fix s-green">${He}</i>`:""}</span></div>`,B=$t("div","scr-ui ui-a",`${U()}
    <div class="ua-app">Nerve System</div>
    <div class="ua-title">Get ready for<br>your first ad</div>
    <div class="ua-sub">Checks done before a dollar<br>goes into ads.</div>
    <div class="ua-search">${Ha.search}<span>Search a check</span></div>
    <div class="ua-heads"><span>Check</span><span>Status</span></div>
    <div class="ua-rows">
      ${z("target","Margins","Break-even ROAS set","Day 1")}
      ${z("meta","Tracking","Each sale counted 2x",'<span class="s-red">Broken</span>',"Fixed")}
      ${z("store","Store","Weak spots, missing proof",'<span class="s-green">Fixed</span>')}
    </div>
    <div class="ua-total"><div class="ua-total-row"><span>Ready for ads</span><b class="ua-count">0/3</b></div><div class="ua-bar"><i></i></div></div>
    <div class="ua-btn">Start ads</div>`),L=$t("div","scr-ui ui-b",`${U()}
    <div class="ub-head">Average order <svg viewBox="0 0 14 14"><circle cx="7" cy="7" r="7" fill="#2f6bff"/><path d="M4 7.2l2 2 4-4.4" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    <div class="ub-big">$<span class="ub-val">20</span></div>
    <div class="ub-line">\u25B2 from $20 before the sale</div>
    <svg class="ub-chart" viewBox="0 0 300 190" aria-hidden="true">
      <defs>
        <linearGradient id="ubArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3cbe69" stop-opacity=".78"/><stop offset=".22" stop-color="#3cbe69" stop-opacity=".42"/><stop offset=".6" stop-color="#3cbe69" stop-opacity=".12"/><stop offset="1" stop-color="#3cbe69" stop-opacity="0"/></linearGradient>
        <filter id="ubBlur" x="-10%" y="-40%" width="120%" height="180%"><feGaussianBlur stdDeviation="5"/></filter>
        <clipPath id="ubClip"><rect class="ub-clip" x="0" y="0" width="0" height="190"/></clipPath>
      </defs>
      <path d="M0 52H300M0 140H300" stroke="rgba(255,255,255,.08)" stroke-dasharray="2 4"/>
      <text x="6" y="47">$43</text><text x="6" y="135">$20</text>
      <g clip-path="url(#ubClip)"><path d="M0 140H128V52H300V190H0Z" fill="url(#ubArea)"/></g>
      <line class="ub-mline" x1="128" y1="30" x2="128" y2="186" stroke="rgba(241,242,243,.45)" stroke-dasharray="2 3"/>
      <path class="ub-glowline" d="M0 140H128V52H300" fill="none" stroke="#4fe08a" stroke-opacity=".85" stroke-width="9" filter="url(#ubBlur)" pathLength="1" stroke-dasharray="1 1" stroke-dashoffset="1" stroke-linejoin="round"/>
      <path class="ub-path" d="M0 140H128V52H300" fill="none" stroke="#4fe08a" stroke-width="2.2" pathLength="1" stroke-dasharray="1 1" stroke-dashoffset="1" stroke-linejoin="round"/>
    </svg>
    <div class="ub-mark">+1 free mug</div>
    <div class="ub-tabs"><span>Before offer</span><span class="is-sel">After offer</span></div>
    <div class="ub-list-head">Sales by ad</div>
    <div class="ub-row r1"><span class="ub-thumb"><canvas width="88" height="88"></canvas></span><span class="ub-txt"><b>One video, six ads</b><span>Free mug offer</span></span><span class="ub-pct ub-p1">0.0%</span><span class="ub-share"><i></i></span></div>
    <div class="ub-row r2"><span class="ub-stack"><i style="background-image:url(assets/ads/food_mug_nb_th1.jpg)"></i><i style="background-image:url(assets/ads/food_mug_nb_th2.jpg)"></i></span><span class="ub-txt"><b>All other ads</b></span><span class="ub-pct ub-p2">0.0%</span><span class="ub-share"><i></i></span></div>
    <div class="ub-row r3"><span class="ub-thumb"></span><span class="ub-skel"><i></i><i></i></span></div>
    <div class="ub-row r4"><span class="ub-thumb"></span><span class="ub-skel"><i></i><i></i></span></div>
    <div class="ub-fade"></div>`),P=$t("canvas","scr-run");S.append(B,L,P,$t("div","scr-notch"),$t("div","scr-home"),$t("div","scr-glass")),S.setAttribute("role","img");let V=$t("p","sr","Phone: Get ready for your first ad. Margins: break-even ROAS set, day 1. Tracking: each sale counted 2x, fixed. Store: weak spots, missing proof, fixed. Ready for ads, 3 of 3."),Y=$t("p","sr","Phone: Average order $43 during a sale with a free mug and new prices, from $20 before it. Meta-tracked sales by ad: one video run as six ads, 74.8%. All other ads, 25.2%.");a.append(V,Y);let ue=[...B.querySelectorAll(".ua-row")],q=B.querySelector(".ua-count"),le=B.querySelector(".ua-bar i"),ce=B.querySelector(".ua-btn"),Xe=L.querySelector(".ub-val"),qe=L.querySelector(".ub-line"),nt=L.querySelector(".ub-path"),me=L.querySelector(".ub-glowline"),xe=L.querySelector(".ub-clip"),X=L.querySelector(".ub-mark"),W=L.querySelector(".ub-mline"),_e=L.querySelector(".ub-p1"),Ce=L.querySelector(".ub-p2"),N=L.querySelector(".r1 .ub-share i"),ae=L.querySelector(".r2 .ub-share i"),ye=L.querySelector(".ub-thumb canvas"),K=ye.getContext("2d"),pe=dy.map((O,ne)=>O.map($=>{let he=$t("div","sw"),He=Array.isArray($.pill)?`<span class="sw-pill flip"><span class="p-a">${$.pill[0]}</span><span class="p-b">${$.pill[1]}</span></span>`:`<span class="sw-pill"><span>${$.pill}</span></span>`;return he.innerHTML=($.avatar?`<span class="sw-av">${Vu($.avatar)}<b>${Ha.check}</b></span>`:"")+`<span class="sw-t sw-label">${$.label}</span><span class="sw-t sw-value">${$.glyph?Vu($.glyph):""}<span>${$.value}</span></span><span class="sw-t sw-foot">${He}</span>`,he.querySelectorAll(".sw-t").forEach(Pe=>{Pe.style.opacity="1",Pe.style.transform="none",Pe.style.transition="none"}),he.classList.add("is-pop",ne===0?"sw-r1":"sw-r2"),x.append(he),{n:he,w:$,ch:ne,v:0,pop:!1}})),R=pe[0][1].n.querySelector(".sw-pill.flip"),G=$t("div","arc");G.innerHTML=`<svg class="arc-svg" aria-hidden="true">
      <defs>
        <linearGradient id="arcStroke" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".8"/><stop offset=".55" stop-color="#fff" stop-opacity=".95"/><stop offset="1" stop-color="#fff" stop-opacity="1"/></linearGradient>
        <linearGradient id="arcFill" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".72"/><stop offset=".5" stop-color="#fff" stop-opacity=".5"/><stop offset="1" stop-color="#fff" stop-opacity=".3"/></linearGradient>
      </defs>
      <path class="arc-fill" fill="url(#arcFill)"/>
      <line class="arc-horizon" stroke="rgba(255,255,255,.85)" stroke-width="1.5"/>
      <line class="arc-drop" stroke="rgba(241,242,243,.5)" stroke-width="1"/>
      <path class="arc-g2" fill="none" stroke="#fff" stroke-opacity=".07" stroke-width="22" stroke-linecap="round"/>
      <path class="arc-g1" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="12" stroke-linecap="round"/>
      <path class="arc-line" fill="none" stroke="url(#arcStroke)" stroke-width="4.5" stroke-linecap="round"/>
      <circle class="arc-halo" r="17" fill="rgba(28,30,32,.5)" stroke="rgba(255,255,255,.22)"/>
      <circle class="arc-node" r="6.5" fill="#f4f4f2"/>
    </svg>
    <div class="arc-txt" aria-hidden="true"><div class="arc-eyebrow">One food brand, Meta ads total</div>
      <div class="arc-numrow"><span class="arc-num"></span><span class="arc-unit">purchases</span></div></div>
    <div class="arc-pill" aria-hidden="true"><span class="p-1">Month one, May 2026</span><span class="p-2">After four months, Aug 2026</span></div>
    <p class="sr">One food brand: 334 purchases tracked from Meta ads in May 2026; 1,471 in total from May to Aug 2026.</p>`,a.insertBefore(G,o||a.firstChild);let J=O=>G.querySelector(O),oe={fill:J(".arc-fill"),hor:J(".arc-horizon"),drop:J(".arc-drop"),g2:J(".arc-g2"),g1:J(".arc-g1"),line:J(".arc-line"),halo:J(".arc-halo"),node:J(".arc-node"),grad:J("#arcStroke"),fillGrad:J("#arcFill"),svg:J(".arc-svg"),txt:J(".arc-txt"),eb:J(".arc-eyebrow"),num:J(".arc-num"),unit:J(".arc-unit"),pill:J(".arc-pill"),p1:J(".arc-pill .p-1"),p2:J(".arc-pill .p-2")};oe.p1.style.transition=oe.p2.style.transition="none";let Ee=[];["c",3,"comma",2,1,0].forEach(O=>{if(O==="c")return;if(O==="comma"){let he=$t("span","od-comma",",");oe.num.append(he),Ee.push({comma:he});return}let ne=$t("span","od-col"),$=$t("span","od-strip");$.innerHTML="01234567890".split("").map(he=>`<span>${he}</span>`).join(""),ne.append($),oe.num.append(ne),Ee.push({k:O,col:ne,strip:$,last:0})});let Se=null,Ve=!1,C=y.getContext("2d",{willReadFrequently:!1}),Ye=new Image;Ye.decoding="async";let Be=O=>{let ne=window.requestIdleCallback||(he=>setTimeout(()=>he({timeRemaining:()=>50}),120)),$=()=>ne(he=>{if(n.snapping){setTimeout($,250);return}O(he)},{timeout:3e3});$()};Ye.onload=()=>Be(E);function E(){let O=y.width,ne=y.height;try{C.drawImage(Ye,0,0,O,ne);let $=C.getImageData(0,0,O,ne),he=$.data,He=window.__v8?.screenfx?.hasFloor?.()?Of:0,Pe=new Uint8ClampedArray(256),dt=[[0,5],[2,6],[4,8.4],[8,18],[16,32],[32,58],[64,106],[96,150],[128,189],[160,208],[255,252]];for(let We=0,st=0;We<256;We++){for(;st<dt.length-2&&We>dt[st+1][0];)st++;let[Pt,Oe]=dt[st],[ge,gt]=dt[st+1];Pe[We]=Math.max(He,Oe+(gt-Oe)*(We-Pt)/(ge-Pt))}for(let We=0;We<he.length;We+=4){let st=he[We],Pt=he[We+1],Oe=he[We+2],ge=st>Oe?st:Oe;he[We]=Pe[st],he[We+1]=Pe[Pt>ge?ge:Pt],he[We+2]=Pe[Oe]}C.putImageData($,0,0)}catch{C.drawImage(Ye,0,0,O,ne)}Ve=!0,zt=!0,qu&&Be(k)}let g=!1;function k(){let O=new Image;O.src="assets/rest/rest12_d_depth.png",O.decode().then(()=>Be(()=>{let ne=O.naturalWidth,$=O.naturalHeight,he=y.width,He=y.height,Pe=document.createElement("canvas");Pe.width=ne,Pe.height=$;let dt=Pe.getContext("2d",{willReadFrequently:!0});dt.drawImage(O,0,0);let We=dt.getImageData(0,0,ne,$),st=We.data;for(let gt=0;gt<st.length;gt+=4){let yt=st[gt+3];st[gt]=st[gt+1]=st[gt+2]=0,st[gt+3]=yt<=175?0:yt>=200?255:(yt-175)*10.2}dt.putImageData(We,0,0);let Pt=document.createElement("canvas");Pt.width=ne,Pt.height=$;let Oe=Pt.getContext("2d");for(let gt=0;gt<16;gt++){let yt=gt/16*Math.PI*2;Oe.drawImage(Pe,Math.cos(yt)*7,Math.sin(yt)*7)}Oe.drawImage(Pe,0,0),m.width=he,m.height=He,m.style.width=he+"px",m.style.height=He+"px";let ge=m.getContext("2d");ge.drawImage(Pt,0,0,he,He),"filter"in ge&&(ge.clearRect(0,0,he,He),ge.filter=`blur(${Math.round(he/ne*3)}px)`,ge.drawImage(Pt,0,0,he,He),ge.filter="none"),ge.globalCompositeOperation="source-in",ge.drawImage(y,0,0),ge.globalCompositeOperation="source-over",g=!0,zt=!0})).catch(()=>{})}Ye.onerror=()=>{},Promise.resolve(window.__first).then(()=>fetch(hy)).then(O=>O.ok?O.json():null).then(O=>{if(!O||!O.frames?.length)return;Se=O;let[ne,$]=O.size||[1024,1024];y.width=ne,y.height=$,y.style.width=ne+"px",y.style.height=$+"px",Ye.src=uy,zt=!0}).catch(()=>{});function j(O){let ne=Se.frames;if(ne.length===1||O<=ne[0].t)return ne[0].corners;for(let $=1;$<ne.length;$++)if(O<=ne[$].t){let he=ne[$-1],He=ne[$],Pe=(O-he.t)/Math.max(1e-6,He.t-he.t);return he.corners.map((dt,We)=>[Ft(dt[0],He.corners[We][0],Pe),Ft(dt[1],He.corners[We][1],Pe)])}return ne[ne.length-1].corners}let se=Bf.map(O=>({...O,img:null,bm:null,ok:!1,bg:null,ui:null,vid:null})),fe=null,we=!1,te=Math.round(qr*1.5),re=Math.round(Hu*1.5),be=te/qr;function je(){Promise.resolve(window.__first).then(Ne)}function Ne(){se.forEach(O=>{if(O.img)return;let ne=new Image;if(ne.decoding="async",ne.src=O.video?O.poster:O.src,O.img=ne,(ne.decode?ne.decode():Promise.resolve()).then(()=>{if(!window.createImageBitmap)return ne;let $=Math.round(te*1.06),he=Math.round($*ne.naturalHeight/ne.naturalWidth);return createImageBitmap(ne,{resizeWidth:$,resizeHeight:he,resizeQuality:"high"}).catch(()=>createImageBitmap(ne))}).catch(()=>ne.complete&&ne.naturalWidth?ne:Promise.reject()).then($=>{O.bm=$,O.ok=!0,ms()},()=>{}),O.video){let $=document.createElement("video");$.muted=!0,$.defaultMuted=!0,$.playsInline=!0,$.loop=!0,$.preload="auto",$.setAttribute("muted",""),$.setAttribute("playsinline",""),$.src=O.src,O.vid=$,$.addEventListener("loadeddata",()=>{O.vOk=!0},{once:!0})}}),fe||(fe=document.createElement("video"),fe.muted=!0,fe.defaultMuted=!0,fe.playsInline=!0,fe.loop=!1,fe.setAttribute("muted",""),fe.setAttribute("playsinline",""),fe.preload="auto",fe.src=ps.src,fe.addEventListener("loadeddata",()=>{we=!0,fe.currentTime<ps.loop[0]&&(fe.currentTime=.9)},{once:!0}),fe.addEventListener("error",()=>{we=!1}))}setTimeout(je,t?0:3500),P.width=te,P.height=re;let Le=P.getContext("2d"),Qe=()=>{let O=document.createElement("canvas");return O.width=te,O.height=re,O},it=document.createElement("canvas");it.width=12,it.height=16;let ft=it.getContext("2d"),H=2,Me=[.05,.315,.58],de=.265,Ue=Me[0],ke=.85,ve=.965,et=(()=>{let Pe=new Float64Array(257),dt=new Float32Array(257),We=new Float32Array(257);for(let ge=0;ge<=256;ge++){let gt=ge/256;Pe[ge]=gt<.28?gt/.28*(gt/.28):Math.exp(-6.2*(gt-.28))}let st=0,Pt=[0];for(let ge=1;ge<=256;ge++)st+=(Pe[ge]+Pe[ge-1])/2/256,Pt.push(st);for(let ge=0;ge<=256;ge++){let gt=ge/256,yt=gt<=.55?0:(gt-.55)/(1-.55),rt=Math.sin(Math.PI*yt);dt[ge]=Pt[ge]/st+.05*rt*rt}for(let ge=0;ge<=256;ge++){let gt=Math.max(0,ge-1),yt=Math.min(256,ge+1);We[ge]=(dt[yt]-dt[gt])/((yt-gt)/256)}dt[256]=1;let Oe=(ge,gt)=>{let yt=Math.min(256,Math.max(0,gt*256)),rt=Math.min(255,yt|0),kt=yt-rt;return ge[rt]+(ge[rt+1]-ge[rt])*kt};return{x:ge=>Oe(dt,ge),v:ge=>Oe(We,ge)}})(),Ze=O=>O*O*(3-2*O),Rt=O=>6*O*(1-O),pt=1,Vt=0,Jt=0,Si=null;function Kn(O){let ne=0,$=0;for(let he=0;he<Me.length;he++){let He=(O-Me[he])/de;if(!(He<=0)){if(He>=1){ne+=1;continue}t?(ne+=Ze(He),$+=Rt(He)/de):pt>0?(ne+=et.x(He),$+=et.v(He)/de):(ne+=1-et.x(1-He),$+=et.v(1-He)/de)}}return[ne,$]}let vn=()=>Jt*H%Bf.length;function Jn(){let O=n.snapping;!O||O.id!=="B"||O===Si||(Si=O,pt=O.forward?1:-1,O.forward&&(Vt=vn(),Jt++))}let In=Qe(),Hn=!1;function es(){let O=In.getContext("2d"),ne=be;O.clearRect(0,0,te,re);let $=O.createLinearGradient(0,0,0,110*ne);$.addColorStop(0,"rgba(0,0,0,.42)"),$.addColorStop(1,"rgba(0,0,0,0)"),O.fillStyle=$,O.fillRect(0,0,te,110*ne),O.fillStyle="#f1f2f3",O.textBaseline="middle",O.font=`${13*ne}px Geist, system-ui, sans-serif`,O.fillText("9:41",28*ne,23*ne),O.font=`${17*ne}px Geist, system-ui, sans-serif`,O.fillText("Reels",20*ne,64*ne),O.strokeStyle="rgba(241,242,243,.95)",O.lineWidth=1.6*ne,O.lineJoin="round";let he=qr-34,He=64;un(O,(he-10)*ne,(He-8)*ne,20*ne,16*ne,4.5*ne),O.stroke(),O.beginPath(),O.arc(he*ne,He*ne,4.2*ne,0,6.2832),O.stroke();let Pe=new Image;Pe.onload=()=>{O.drawImage(Pe,(qr-22-54)*ne,17.5*ne,54*ne,12*ne),Hn=!0},Pe.onerror=()=>{Hn=!0},Pe.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(Ha.status.replace("<svg ",'<svg xmlns="http://www.w3.org/2000/svg" width="54" height="12" '))}function un(O,ne,$,he,He,Pe){O.beginPath(),O.roundRect?O.roundRect(ne,$,he,He,Pe):O.rect(ne,$,he,He)}function Vn(O){let ne=Qe(),$=ne.getContext("2d");$.fillStyle="#060606",$.fillRect(0,0,te,re);let he=O.bm,He=he.width||he.naturalWidth,Pe=he.height||he.naturalHeight;return ft.clearRect(0,0,12,16),ft.drawImage(he,0,0,He,Pe,0,0,12,16),$.imageSmoothingEnabled=!0,$.drawImage(it,-te*.1,-re*.1,te*1.2,re*1.2),$.fillStyle="rgba(0,0,0,.42)",$.fillRect(0,0,te,re),ne}function $n(O){let ne=Qe(),$=ne.getContext("2d"),he=be,He=te,Pe=re,dt=$.createLinearGradient(0,Pe*.62,0,Pe);dt.addColorStop(0,"rgba(0,0,0,0)"),dt.addColorStop(1,"rgba(0,0,0,.6)"),$.fillStyle=dt,$.fillRect(0,Pe*.62,He,Pe*.38),$.strokeStyle="rgba(255,255,255,.95)",$.fillStyle="rgba(255,255,255,.95)",$.lineWidth=1.9*he,$.lineJoin="round",$.lineCap="round";let We=(qr-27)*he,st=Pe-236*he,Pt=52*he,Oe=10.5*he,ge=st;$.beginPath(),$.moveTo(We,ge+Oe*.85),$.bezierCurveTo(We-Oe*1.5,ge-Oe*.1,We-Oe*.9,ge-Oe*1.25,We,ge-Oe*.45),$.bezierCurveTo(We+Oe*.9,ge-Oe*1.25,We+Oe*1.5,ge-Oe*.1,We,ge+Oe*.85),$.stroke(),ge+=Pt,$.beginPath(),$.arc(We,ge,Oe*.95,Math.PI*.62,Math.PI*2.5),$.lineTo(We-Oe*1.02,ge+Oe*1.02),$.closePath(),$.stroke(),ge+=Pt,$.beginPath(),$.moveTo(We-Oe,ge-Oe*.8),$.lineTo(We+Oe,ge-Oe*.8),$.lineTo(We-Oe*.15,ge+Oe),$.lineTo(We-Oe*.35,ge-Oe*.05),$.closePath(),$.stroke(),$.beginPath(),$.moveTo(We-Oe*.35,ge-Oe*.05),$.lineTo(We+Oe,ge-Oe*.8),$.stroke(),ge+=Pt*.85;for(let rt=-1;rt<=1;rt++)$.beginPath(),$.arc(We+rt*5.5*he,ge,1.7*he,0,6.2832),$.fill();let gt=34*he,yt=Pe-74*he;return $.lineWidth=1.4*he,$.strokeStyle="rgba(255,255,255,.85)",$.beginPath(),$.arc(gt,yt,12*he,0,6.2832),$.stroke(),$.fillStyle="rgba(255,255,255,.22)",$.beginPath(),$.arc(gt,yt,9.5*he,0,6.2832),$.fill(),$.textBaseline="alphabetic",$.font=`${10*he}px Geist, system-ui, sans-serif`,$.fillStyle="rgba(255,255,255,.72)",$.fillText("Sponsored",54*he,yt-2*he),$.font=`${14*he}px Geist, system-ui, sans-serif`,$.fillStyle="#fff",$.fillText(O,54*he,yt+14*he),$.fillStyle="rgba(255,255,255,.5)",un($,22*he,Pe-44*he,168*he,4*he,2*he),$.fill(),$.fillStyle="rgba(255,255,255,.3)",un($,22*he,Pe-34*he,110*he,4*he,2*he),$.fill(),ne}let oi={ui:null};function li(O){!O.bg&&O.ok&&(O.bg=Vn(O)),O.ui||(O.ui=$n(O.cat))}let Bi=!1;function ms(){if(Bi||!se.every(he=>he.ok))return;Bi=!0;let O=window.requestIdleCallback||(he=>setTimeout(he,50)),ne=[...se],$=he=>{if(n.snapping){O($,{timeout:2e3});return}for(;ne.length&&(!he||he.timeRemaining()>4);){let He=ne.shift();He.ui=null,li(He)}if(ne.length){O($,{timeout:2e3});return}oi.ui=$n("Food"),es()};(document.fonts?.ready||Promise.resolve()).then(()=>O($,{timeout:1500}))}function ts(O,ne){return ne&&ne.readyState>=2&&!ne.seeking&&ne.videoWidth&&(O.cv||(O.cv=document.createElement("canvas"),O.cx=O.cv.getContext("2d")),O.cv.width!==ne.videoWidth&&(O.cv.width=ne.videoWidth,O.cv.height=ne.videoHeight),O.grab!==ne.currentTime&&(O.grab=ne.currentTime,O.cx.drawImage(ne,0,0),O.cvOk=!0)),O.cvOk?O.cv:null}let gs={},Ie=()=>we?ts(gs,fe):gs.cvOk?gs.cv:null,at=O=>Array.from({length:H},(ne,$)=>se[(O+$)%se.length]),bt=new Set;function Et(O){let ne=new Set(O.filter($=>$.vid));se.forEach($=>{if($.vid)if(ne.has($)){if($.vid.paused){let he=$.vid.play();he&&he.catch(()=>{})}}else $.vid.paused||$.vid.pause()}),bt=ne}let Mt="",_=O=>se[(Vt+O-1)%se.length],F=(O,ne,$,he=1)=>{let He=be,Pe=2.4*He,dt=ne+re-4*He;O.globalAlpha=he*.28,O.fillStyle="#fff",O.fillRect(0,dt,te,Pe),O.globalAlpha=he*.95,O.fillRect(0,dt,te*Math.max(0,Math.min(1,$)),Pe),O.globalAlpha=he},ee=()=>we?(fe.currentTime-ps.loop[0])/(ps.loop[1]-ps.loop[0]):0;function Z(O,ne,$){O.globalAlpha=$,O.fillStyle="#20398f",O.fillRect(0,ne,te,re);let he=Ie();if(he){let He=he.width,Pe=he.height,dt=Math.max(te/He,re/Pe);O.drawImage(he,(te-He*dt)/2,ne+(re-Pe*dt)/2,He*dt,Pe*dt)}oi.ui&&O.drawImage(oi.ui,0,ne),F(O,ne,ee(),$)}function Q(O,ne,$,he,He){let Pe=_(ne);if(O.globalAlpha=He,!Pe.ok){O.fillStyle="#060606",O.fillRect(0,$,te,re);return}li(Pe),O.drawImage(Pe.bg,0,$);let dt=Wu((he-Me[ne-1])/.6),We=Pe.vid&&ts(Pe,Pe.vid)||Pe.bm,st=We.width||We.naturalWidth,Pt=We.height||We.naturalHeight;if(Pt/st>=1.6){let ge=Math.max(te/st,re/Pt);O.drawImage(We,(te-st*ge)/2,$+(re-Pt*ge)/2,st*ge,Pt*ge)}else{let ge=Pe.vid?1:1+.045*(t?0:dt),gt=te*ge,yt=gt*Pt/st;O.drawImage(We,(te-gt)/2,$+re*.46-yt/2-re*.008*dt,gt,yt)}O.drawImage(Pe.ui,0,$);let Oe=Pe.vid;F(O,$,Oe&&Oe.duration?Oe.currentTime/Oe.duration:dt,He)}function De(O,ne,$,he){he&&O.clearRect(0,0,te,re);for(let He=1;He<=H+1;He++){let Pe=Math.round((He-ne)*re*4)/4;Pe>=re||Pe<=-re||(He<=H?Q(O,He,Pe,$,1):Z(O,Pe,1))}O.globalAlpha=1}function ze(O,ne=Le,$=!0){let he=te,He=re;if(O<ke){let[bi,zs]=Kn(O);De(ne,bi,O,$);let is=Math.min(1,Math.max(0,bi));return ne.globalAlpha=is,Hn&&is>0&&ne.drawImage(In,0,0),ne.globalAlpha=1,Mt=`${bi.toFixed(4)}:${Vt}`,window.__v8&&(window.__v8.feed={pB:O,P:bi,V:zs,off:Vt,dir:pt,n:(window.__v8.feed?.n||0)+1}),window.__v8&&!window.__v8.feedDir&&(window.__v8.feedDir=Mi=>{pt=Mi}),window.__v8&&!window.__v8.feedSetOff&&(window.__v8.feedSetOff=Mi=>{Vt=Mi,Jt=Math.ceil(Mi/H)}),Math.min(1,bi)}let Pe=Hf(qn(ke,ve,O)),dt=Ql.x*be,We=Ql.y*be,st=Ql.w*be,Pt=Ql.h*be,Oe=Ft(0,dt,Pe),ge=Ft(0,We,Pe),gt=Ft(he,st,Pe),yt=Ft(He,Pt,Pe),rt=Ft(26,10,Pe)*be;$&&ne.clearRect(0,0,he,He),ne.save(),un(ne,Oe,ge,gt,yt,rt),ne.clip();let kt=fe?.videoWidth||540,an=fe?.videoHeight||960,[bn,jn,Wn]=ps.thumb,Zt=Math.max(he/kt,He/an),zi=(he-kt*Zt)/2,ks=(He-an*Zt)/2,vs=gt/Wn,sr=Oe-bn*vs,Cn=ge-jn*vs,Dn=Ft(Zt,st/Wn,Pe),hi=Ft(zi,sr,Pe),ns=Ft(ks,Cn,Pe),di=Ie();di?ne.drawImage(di,hi,ns,kt*Dn,an*Dn):(ne.fillStyle="#20398f",ne.fill());let Qn=1-qn(0,.3,Pe);return Qn>0&&oi.ui&&(ne.globalAlpha=Qn,ne.drawImage(oi.ui,Oe,ge,gt,yt)),ne.restore(),ne.globalAlpha=Qn,Qn>0&&Hn&&ne.drawImage(In,0,0),ne.globalAlpha=1,Mt=`s${Pe.toFixed(4)}`,1}function Te(){let O=Ie();if(!O)return;let[ne,$,he]=ps.thumb;K.drawImage(O,ne,$,he,he,0,0,ye.width,ye.height)}let Ae={draw:0,area:0,val:20,pct:0},Ge=()=>{nt.setAttribute("stroke-dashoffset",(1-Ae.draw).toFixed(4)),me.setAttribute("stroke-dashoffset",(1-Ae.draw).toFixed(4)),xe.setAttribute("width",(Ae.area*300).toFixed(1)),Xe.textContent=String(Math.round(Ae.val)),_e.textContent=(Ae.pct*74.8).toFixed(1)+"%",Ce.textContent=(Ae.pct*25.2).toFixed(1)+"%",N.style.transform=`scaleX(${(Ae.pct*.748).toFixed(4)})`,ae.style.transform=`scaleX(${(Ae.pct*.252).toFixed(4)})`},ht=128/388,Ke=216/388,Fe=i.timeline({paused:!0,onUpdate:Ge});Fe.to(Ae,{draw:ht,area:128/300,duration:.5,ease:"none"},0).fromTo(X,{autoAlpha:0,y:-10},{autoAlpha:1,y:0,duration:.32,ease:"back.out(2.2)"},.45).fromTo(W,{opacity:0},{opacity:1,duration:.25,ease:"none"},.45).to(Ae,{draw:Ke,duration:.2,ease:"power1.inOut"},.75).to(Ae,{val:43,duration:.45,ease:"power2.out"},.75).fromTo(qe,{autoAlpha:0,y:4},{autoAlpha:1,y:0,duration:.3,ease:"power2.out"},1.05).to(Ae,{draw:1,area:1,duration:.5,ease:"none"},.95).to(Ae,{pct:1,duration:.6,ease:"power2.out"},1.45),Fe.progress(0),Ge();let ut=!1;function Nt(O){ut||(ut=!0,t||O?Fe.progress(1):Fe.restart())}function wt(){ut&&(ut=!1,Fe.pause(0),Ge())}let tt=0,ot=0,Re=null,zt=!0,lt={x:0,y:0,tx:0,ty:0};function rn(){tt=f.clientWidth||innerWidth,ot=f.clientHeight||innerHeight;let O=tt>=992,ne,$,he;O?(he=Math.min(.56*ot,.75*tt),ne=.677*tt,$=.437*ot):(he=Math.min(.47*ot,1.1*tt),ne=.606*tt,$=.58*ot),Re={desk:O,cx:ne,cy:$,sh:he},oe.svg.setAttribute("viewBox",`0 0 ${tt} ${ot}`),zt=!0}rn();let An=0;addEventListener("resize",()=>{clearTimeout(An),An=setTimeout(rn,60)}),!t&&!h&&addEventListener("pointermove",O=>{lt.tx=O.clientX/innerWidth*2-1,lt.ty=O.clientY/innerHeight*2-1},{passive:!0});let Yn=Object.fromEntries(n.segments.map(O=>[O.id,O])),Ln={y:NaN,mx:NaN,my:NaN},Bt=334,qt=performance.now(),Gn=!1,Gt=!1,ci=!1,ki=!1,ui=0,eh=0,th=!1,nh=O=>(Math.atan2(O[1][1]-O[0][1],O[1][0]-O[0][0])+Math.atan2(O[2][1]-O[3][1],O[2][0]-O[3][0]))*90/Math.PI,qa=null;function Qf(){if(qa)return qa;let ne=window.__v8?.screenfx?.restMotion(3.95,5.7);if(!ne||!Se)return null;let[$]=Se.size||[1024,1024],he=$/ne.vw,He=ne.a.map(([yt,rt])=>[yt*he,rt*he]),Pe=ne.b.map(([yt,rt])=>[yt*he,rt*he]),dt=[0,1].map(yt=>He.reduce((rt,kt)=>rt+kt[yt],0)/4),We=[0,1].map(yt=>Pe.reduce((rt,kt)=>rt+kt[yt],0)/4),st=0,Pt=0,Oe=0;He.forEach((yt,rt)=>{let kt=yt[0]-dt[0],an=yt[1]-dt[1],bn=Pe[rt][0]-We[0],jn=Pe[rt][1]-We[1];st+=kt*bn+an*jn,Pt+=kt*jn-an*bn,Oe+=kt*kt+an*an});let ge=st/Oe,gt=Pt/Oe;return qa={a:He,b:Pe,k:he,sim:{s:Math.hypot(ge,gt),th:Math.atan2(gt,ge),tx:We[0]-dt[0],ty:We[1]-dt[1],c:dt}},qa}function ih(){let O=n.lenis?n.lenis.animatedScroll:scrollY,ne=performance.now(),$=Math.min(.1,(ne-qt)/1e3);if(qt=ne,!h&&!t){let St=1-Math.exp(-10*$);lt.x+=(lt.tx-lt.x)*St,lt.y+=(lt.ty-lt.y)*St}let he=Math.abs(lt.x-Ln.mx)>5e-4||Math.abs(lt.y-Ln.my)>5e-4,He=!!window.__v8?.sweepActive;if(He!==th&&(th=He,zt=!0),!zt&&O===Ln.y&&!he&&!Gt&&!ep())return;Ln.y=O,Ln.mx=lt.x,Ln.my=lt.y,zt=!1;let{A:Pe,B:dt,C:We,E:st,E3:Pt}=Yn,Oe=qn(Pe.start,Pe.end,O)*1.5,ge=qn(dt.start,dt.end,O),gt=qn(We.start,We.end,O),yt=!!n.snapping,rt=window.__v8?.screenfx,kt=!!(rt&&rt.ready&&n.video);kt&&rt.prepare();let an=kt?kn(1.42,1.5,Oe):kn(1.02,1.18,Oe),bn=qn(0,.07,gt);kt&&rt.setFloor?.(kn(.95,1.4,Oe)*(1-bn)*Of/255);let Wn=kt&&He?0:an*(1-qn(.055,.07,gt)),Zt=Wn>.002&&!!Se;Zt!==Gn&&(Gn=Zt,u(v,"visibility",Zt?"visible":"hidden"),u(v,"display",Zt?"block":"none"),Us(M,"is-on",Zt&&Ve),Us(l,"si-on",Zt));let zi=Zt&&Ve&&Wn>=.999&&bn<=0;window.__v8&&(window.__v8.glCovered=zi);let ks=Wn>=.999?1:0;ui+=(ks-ui)*(1-Math.exp(-$*3)),Math.abs(ui-ks)>.002?zt=!0:ui=ks;let[vs,sr]=Se?Se.size||[1024,1024]:[1024,1024],Cn=kt?Qf():null,Dn=Cn?Cn.a:Se?j(n.state.videoTime||0):null,hi=0,ns=0,di=0,Qn=0,bi=null;if(Dn){let St=(Dn[0][0]+Dn[1][0]+Dn[2][0]+Dn[3][0])/4,Rn=(Dn[0][1]+Dn[1][1]+Dn[2][1]+Dn[3][1])/4,en=Math.max(tt/vs,ot/sr),ei,Nn;if(Re.desk)ei=(tt-vs*en)/2+St*en,Nn=ot-sr*en+Rn*en;else{let dn=Dn.map(Mn=>Mn[0]),Ei=Math.max(...dn)-Math.min(...dn);en=Math.min(en,.92*tt/Ei),ei=tt*.5,Nn=ot*.56}let It=kn(.1,.9,ge),Kt={x:-lt.x*.0075*tt,y:lt.y*.0075*ot},hn={x:Kt.x+(-lt.x*.0032*tt-Kt.x)*ui,y:Kt.y+(lt.y*.005*ot-Kt.y)*ui},fi=ei-St*en+Kt.x,wi=Nn-Rn*en+Kt.y;window.__v8&&(window.__v8.scrPlate={s:en,ox:fi,oy:wi,k:Cn?Cn.k:vs/(Re.desk?1280:720),W:tt,H:ot});let Ht;if(Cn){let dn=1+(Cn.sim.s-1)*It,Ei=Cn.sim.th*It,Mn=Math.cos(Ei)*dn,ti=Math.sin(Ei)*dn,tn=Cn.sim.tx*It,jt=Cn.sim.ty*It,[Zn,Hs]=Cn.sim.c,rr=en*Mn,ar=en*ti,$a=fi+en*(Zn+tn-Mn*Zn+ti*Hs),nc=wi+en*(Hs+jt-ti*Zn-Mn*Hs);Ve&&u(y,"transform",`matrix(${rr.toFixed(6)},${ar.toFixed(6)},${(-ar).toFixed(6)},${rr.toFixed(6)},${Je($a)},${Je(nc)})`),g&&u(m,"transform",`matrix(${rr.toFixed(6)},${ar.toFixed(6)},${(-ar).toFixed(6)},${rr.toFixed(6)},${Je($a+hn.x-Kt.x)},${Je(nc+hn.y-Kt.y)})`),Ht=Cn.a.map((Kr,Jr)=>[fi+Ft(Kr[0],Cn.b[Jr][0],It)*en,wi+Ft(Kr[1],Cn.b[Jr][1],It)*en])}else{let dn=1+.06*It,Ei=-.012*ot*It,Mn=en*dn,ti=ei-St*Mn+Kt.x,tn=Nn+Ei-Rn*Mn+Kt.y;Ve&&u(y,"transform",`translate3d(${Je(ti)}px,${Je(tn)}px,0) scale(${Mn.toFixed(5)})`),g&&u(m,"transform",`translate3d(${Je(ti+hn.x-Kt.x)}px,${Je(tn+hn.y-Kt.y)}px,0) scale(${Mn.toFixed(5)})`),Ht=Dn.map(([jt,Zn])=>[ti+jt*Mn,tn+Zn*Mn])}if(ns=(Ht[0][0]+Ht[1][0]+Ht[2][0]+Ht[3][0])/4,di=(Ht[0][1]+Ht[1][1]+Ht[2][1]+Ht[3][1])/4,Qn=nh(Ht),hi=(Math.hypot(Ht[3][0]-Ht[0][0],Ht[3][1]-Ht[0][1])+Math.hypot(Ht[2][0]-Ht[1][0],Ht[2][1]-Ht[1][1]))/2,Zt){let dn=.7*en,Ei=Ht.map(([Mn,ti])=>{let tn=Mn-ns,jt=ti-di,Zn=Math.hypot(tn,jt)||1;return[Mn+tn/Zn*dn,ti+jt/Zn*dn]});u(S,"transform",fy(qr,Hu,Ei)),bi=Ht}}if(!Zt&&kt&&rt.quad){let St=rt.quad;ns=(St[0][0]+St[1][0]+St[2][0]+St[3][0])/4,di=(St[0][1]+St[1][1]+St[2][1]+St[3][1])/4,hi=(Math.hypot(St[3][0]-St[0][0],St[3][1]-St[0][1])+Math.hypot(St[2][0]-St[1][0],St[2][1]-St[1][1]))/2,Qn=nh(St)}let zs=Zt||kt&&rt.visible;if(Zt){u(v,"opacity",Wn.toFixed(3)),Us(M,"is-on",Ve&&Wn>.5);let St=Re.desk?11:8,Rn=bn>0?Gu((1-bn)*St*.72,St):"none";u(v,"webkitMask",Rn),u(v,"mask",Rn),u(T,"transform",`translate3d(${Je((lt.x*.5+.5)*tt)}px,${Je((lt.y*.5+.5)*ot)}px,0)`),u(T,"opacity",h?"0":(.2*(1-kn(.5,1,lt.x*.5+.5))*ui).toFixed(3))}if(zs){let St=qn(1.06,1.22,Oe),Rn=St>=1?"none":Gu(St*7*.72,7);u(B,"webkitMask",Rn),u(B,"mask",Rn);let en=[1.12,1.18,1.24],ei=[1.2,1.28,1.36];ue.forEach((tn,jt)=>{Us(tn,"is-in",Oe>=en[jt]),Us(tn,"is-done",Oe>=ei[jt])});let Nn=Oe>=1.47;Us(ue[1],"is-fixed",Nn),Us(R,"is-fixed",Nn),Nn&&!ci?(ci=!0,zu("card-tick")):Nn||(ci=!1);let It=(Oe>=ei[0]?1:0)+(Oe>=ei[2]?1:0)+(Nn?1:0);q._v!==It&&(q._v=It,q.textContent=`${It}/3`),le._f!==It&&(le._f=It,le.style.setProperty("--f",String(It/3)));let Kt=ge<.045?qn(0,.045,ge):1-qn(.045,.09,ge);u(ce,"transform",`scale(${(1-.08*Kt).toFixed(3)})`),u(ce,"filter",Kt>.01?`brightness(${(1-.25*Kt).toFixed(3)})`:"none"),ge>.02&&!ki?(ki=!0,zu("cta-pop")):ge<=.005&&(ki=!1),Jn();let hn=Math.min(1,Math.max(0,Kn(ge)[0]));pt>0&&ge>=Me[0]+.5*de&&(hn=1);let fi=hn>=1?0:1-.3*hn;u(B,"opacity",fi.toFixed(3)),u(B,"visibility",hn>=1?"hidden":"visible"),u(B,"transform",hn>0?`translate3d(0,${(-hn*Hu).toFixed(2)}px,0)`:"none");let wi=ge>Ue&&ge<ve+.015;if(u(P,"visibility",wi&&Zt?"visible":"hidden"),wi&&Zt){let tn=performance.now();ze(ge),window.__v8?.feed&&(window.__v8.feed.ms=performance.now()-tn)}else wi&&(Mt=`${Kn(ge)[0].toFixed(4)}:${Vt}`);let Ht=kn(ke,ve,ge);u(L,"opacity",Ht.toFixed(3)),u(L,"visibility",Ht>0?"visible":"hidden"),Ht>0&&Te();let dn=Zt&&bi?Ht*Ae.area*ui:0,Ei=(tn,jt,Zn,Hs)=>{let rr=(ah,ip)=>[0,1].map(Ya=>Ft(Ft(jt[0][Ya],jt[1][Ya],ah),Ft(jt[3][Ya],jt[2][Ya],ah),ip)),[ar,$a]=rr(za.u,za.v),Kr=(Math.hypot(jt[1][0]-jt[0][0],jt[1][1]-jt[0][1])+Math.hypot(jt[2][0]-jt[3][0],jt[2][1]-jt[3][1]))/2*za.w,Jr=Hs*za.h;u(tn,"visibility","visible"),u(tn,"width",Je(Kr)+"px"),u(tn,"height",Je(Jr)+"px"),u(tn,"transform",`translate3d(${Je(ar-Kr/2)}px,${Je($a-Jr/2)}px,0) rotate(${Qn.toFixed(2)}deg)`),u(tn,"opacity",(Zn*za.a).toFixed(3))};dn>.003?Ei(b,bi,dn,hi):(u(b,"visibility","hidden"),u(b,"opacity","0")),Zt&&(eh=ui);let Mn=!Zt&&kt&&rt.visible&&rt.quad&&gt>0&&bn<1?rt.quad:null,ti=Mn?Ht*Ae.area*eh:0;if(ti>.003){Ei(A,Mn,ti,hi);let tn=bn>0?Gu((1-bn)*(Re.desk?11:8)*.72,Re.desk?11:8):"none";u(w,"webkitMask",tn),u(w,"mask",tn),u(w,"visibility","visible")}else u(w,"visibility","hidden"),u(A,"opacity","0");if(kt){let tn=[1.12,1.18,1.2,1.24,1.28,1.36,1.47],jt=0;for(let Zn of tn)Oe>=Zn&&jt++;rt.setContent({aIdx:jt,aOpacity:fi,aShift:hn,aDissolve:St,aPress:Kt,run:P,runOn:wi,runDraw:wi?Zn=>{let Hs=performance.now();ze(ge,Zn,!1),window.__v8?.feed&&(window.__v8.feed.ms=performance.now()-Hs)}:null,runKey:Mt+":"+ge.toFixed(4),bVis:Ht,thumb:Ht>0&&we?ye:null})}}else u(w,"visibility","hidden"),u(A,"opacity","0");if(zs&&hi>0){let St=(hi/504*(Re.desk?1:.68)).toFixed(3);x._k!==St&&(x._k=St,x.style.setProperty("--k",St));let Rn=1-qn(.86,.9,ge),en=1-qn(0,.05,gt),ei=kn(.88,.95,ge);pe.forEach((Nn,It)=>Nn.forEach((Kt,hn)=>{let fi;It===0?fi=qn(1.22+.045*hn,1.38+.045*hn,Oe)*Rn:fi=ei*en,ir(Kt,fi,hi,ns,di,hn,Qn)}))}else pe.forEach(St=>St.forEach(Rn=>ir(Rn,0)));let is=O>=dt.end-1&&O<We.start+(We.end-We.start)*.01;is&&yt?Yr||(Yr=ne):Yr=0,is&&(!yt||ne-Yr>2500)?Nt(!1):!is&&O<dt.end-1&&wt();let Mi=!t&&fe&&Oe>=1.2&&O<We.start+(We.end-We.start)*.1;if(Mi&&fe.paused&&!yt&&we){let St=fe.play();St&&St.catch(()=>{})}else!Mi&&fe&&!fe.paused&&fe.pause();if(Gt=!!(fe&&!fe.paused),Gt&&fe.currentTime>ps.loop[1]&&(fe.currentTime=ps.loop[0]),!t){let St=ge>0&&ge<ke&&O<dt.end-1,Rn=!yt&&Oe>=1.5&&ge<=0;Et(St?at(Vt):Rn?at(vn()):[])}tp(O,gt,$)}let sh=!1,Yr=0,ep=()=>sh||Fe.isActive()||Yr>0||pe[1].some(O=>i.isTweening(O));function ir(O,ne,$,he,He,Pe,dt=0){let We=O.n;if(ne<=.001){u(We,"visibility","hidden"),u(We,"opacity","0");return}let[st,Pt]=Re.desk?O.w.at:O.w.atM||O.w.at,[Oe,ge,gt]=O.w.tilt,yt=he+st*$,rt=He+Pt*$,kt=(1-ne)*6;if(u(We,"visibility","visible"),!Re.desk){(!O.size||O.sizeK!==x._k)&&(O.size=[We.offsetWidth,We.offsetHeight],O.sizeK=x._k);let[bn,jn]=O.size,Wn=10;if(yt=Math.min(Math.max(yt,Wn+bn/2),tt-Wn-bn/2),tt>=768){if(ir._wh!==tt+"x"+ot){let Zt=document.getElementById("stepCopy"),zi=document.getElementById("stepPills");ir._wh=tt+"x"+ot,ir._top=Math.min(Zt?Zt.offsetTop:ot*.82,zi?zi.offsetTop-80:ot)-16}rt=Math.min(Math.max(rt,96+jn/2),ir._top-jn/2)}else rt=Math.min(Math.max(rt,ot*.24+jn/2),ot*.9-jn/2)}u(We,"opacity",ne.toFixed(3));let an=.94+.06*ne;u(We,"transform",`translate3d(${Je(yt)}px,${Je(rt+kt)}px,0) translate(-50%,-50%) perspective(700px) rotateY(${Oe}deg) rotateX(${ge}deg) rotateZ(${(dt+(gt||0)).toFixed(2)}deg) scale(${an.toFixed(3)})`)}let rh=!1;function tp(O,ne,$){let{E:he}=Yn,He=n.state.videoTime||0,dt=n.phoneE?kn(.77,.85,ne):kn(.85,.94,ne);O>he.start&&(dt=1-.85*(kn(10.15,10.3,He)*(1-(n.phoneE?kn(10.32,10.4,He):kn(10.42,10.55,He)))));let We=dt>.002;if(We!==rh&&(rh=We,u(G,"visibility",We?"visible":"hidden")),!We)return;u(G,"opacity",dt.toFixed(3));let st=O>he.start?Hf(qn(10,n.phoneE?10.4:10.6,He)):0,Pt=Re.desk?kf.desk:kf.mob,Oe=Pt[0],ge=Pt[1],gt=[Ft(Oe.p0[0],ge.p0[0],st)*tt,Ft(Oe.p0[1],ge.p0[1],st)*ot],yt=[Ft(Oe.p3[0],ge.p3[0],st)*tt,Ft(Oe.p3[1],ge.p3[1],st)*ot],rt=my(gt,yt),kt=Ft(Oe.dropX,ge.dropX,st)*tt,an=Ft(Oe.hy,ge.hy,st)*ot,bn=py(rt,kt),jn=Xu(...rt,bn),Wn=`M${Je(rt[0][0])} ${Je(rt[0][1])}C${Je(rt[1][0])} ${Je(rt[1][1])} ${Je(rt[2][0])} ${Je(rt[2][1])} ${Je(rt[3][0])} ${Je(rt[3][1])}`;oe.line.setAttribute("d",Wn),oe.g1.setAttribute("d",Wn),oe.g2.setAttribute("d",Wn),oe.grad.setAttribute("x1",Je(rt[0][0])),oe.grad.setAttribute("y1",Je(rt[0][1])),oe.grad.setAttribute("x2",Je(rt[3][0])),oe.grad.setAttribute("y2",Je(rt[3][1]));let Zt=24,zi=`M${Je(rt[0][0])} ${Je(an)}L${Je(rt[0][0])} ${Je(rt[0][1])}`;for(let It=1;It<=Zt;It++){let Kt=Xu(...rt,bn*It/Zt);zi+=`L${Je(Kt[0])} ${Je(Kt[1])}`}zi+=`L${Je(kt)} ${Je(an)}Z`,oe.fill.setAttribute("d",zi),u(oe.fill,"opacity",kn(.35,.9,st).toFixed(3)),Zr(oe.fillGrad,{y1:Je(Math.min(rt[0][1],jn[1])),y2:Je(an)});let ks=Ft(Oe.hx[0],ge.hx[0],st)*tt,vs=Ft(Oe.hx[1],ge.hx[1],st)*tt;Zr(oe.hor,{x1:Je(ks),y1:Je(an),x2:Je(vs),y2:Je(an)}),Zr(oe.drop,{x1:Je(kt),y1:Je(jn[1]),x2:Je(kt),y2:Je(an)}),Zr(oe.halo,{cx:Je(kt),cy:Je(an)}),Zr(oe.node,{cx:Je(kt),cy:Je(an)});let sr=Ft(Oe.fsE,ge.fsE,st),Cn=Ft(Oe.fsN,ge.fsN,st),Dn=Ft(Oe.fsU,ge.fsU,st);u(oe.eb,"fontSize",sr.toFixed(2)+"px"),u(oe.num,"fontSize",Cn.toFixed(2)+"px"),u(oe.unit,"fontSize",Dn.toFixed(2)+"px");let hi=Ft(Oe.eb[0],ge.eb[0],st)*tt,ns=Ft(Oe.eb[1],ge.eb[1],st)*ot;u(oe.txt,"transform",Re.desk?`translate3d(${Je(hi)}px,${Je(ns)}px,0)`:`translate3d(${Je(hi)}px,${Je(ns)}px,0) translateX(-50%)`),u(oe.txt,"textAlign",Re.desk?"left":"center");let di=Re.desk?1-kn(.25,.75,st):0,Qn=(It,Kt,hn)=>`rgb(${Math.round(Ft(246,It,di))},${Math.round(Ft(246,Kt,di))},${Math.round(Ft(246,hn,di))})`;u(oe.txt,"color",Qn(10,11,12)),u(oe.eb,"color",Qn(46,54,56)),u(oe.unit,"color",Qn(40,46,48)),u(oe.txt,"textShadow",di>.5?"none":"");let bi=Ft(Oe.pillFs,ge.pillFs,st),zs=Ft(Oe.pillH,ge.pillH,st);u(oe.pill,"fontSize",bi.toFixed(2)+"px"),u(oe.pill,"height",zs.toFixed(1)+"px"),Re.desk?u(oe.pill,"transform",`translate3d(${Je(kt+26)}px,${Je(an-zs/2)}px,0)`):u(oe.pill,"transform",`translate3d(${Je(tt/2)}px,${Je(Ft(Oe.pillY,ge.pillY,st)*ot)}px,0) translateX(-50%)`),Us(oe.pill,"is-2",st>=.985),u(oe.p1,"opacity",(1-kn(.4,.6,st)).toFixed(3)),u(oe.p2,"opacity",kn(.6,.8,st).toFixed(3));let is=st*3,Mi=Math.min(2,Math.floor(is)),St=Ft(zf[Mi],zf[Mi+1],is-Mi),Rn=Math.abs(St-Bt)/Math.max($,1/240);Bt=St,np(St,Rn);let en=-lt.x*.005*tt,ei=lt.y*.005*ot,Nn=n.state.T10||0;if(Nn>0){let It=window.__v8?.cardInset,Kt=It?It.top:0,hn=It?It.right:.025*tt,fi=It?It.bottom:(.05-.015*tt/ot)*ot,wi=It?It.left:.025*tt,Ht=It?.radiusBottom??It?.radius??(Re.desk?41:24),dn=It?.t10!=null&&It.t10>0?1:Nn;u(G,"clipPath",`inset(${Je(Kt*dn)}px ${Je(hn*dn)}px ${Je(fi*dn)}px ${Je(wi*dn)}px round 0 0 ${Je(Ht*dn)}px ${Je(Ht*dn)}px)`),u(G,"transform",`translate3d(${Je(en)}px,${Je(ei)}px,0) scale(${(1/(1+.03*Nn)).toFixed(5)})`)}else u(G,"clipPath","none"),u(G,"transform",`translate3d(${Je(en)}px,${Je(ei)}px,0)`)}function Zr(O,ne){for(let $ in ne)O.setAttribute($,ne[$])}function np(O,ne){let $=Math.floor(O);sh=!1;let he=O>=999.5;Ee.forEach(He=>{if(He.comma){u(He.comma,"width",he?"":"0px"),u(He.comma,"opacity",he?"1":"0");return}let Pe=Math.pow(10,He.k),dt=O-Math.floor(O/Pe)*Pe,We=He.k===0?O-$:Wu(dt-(Pe-1)),st=(Math.floor(O/Pe)+We)%10,Pt=He.k<3||he;u(He.col,"width",Pt?"0.62em":"0px"),u(He.strip,"transform",`translateY(${(-st*10/11*100/10).toFixed(3)}%)`)})}return i.ticker.add(ih),document.fonts?.ready?.then(()=>{zt=!0}),{onStep(){zt=!0},onSnap(){zt=!0},refresh(){rn()},destroy(){i.ticker.remove(ih),d.remove(),G.remove(),V.remove(),Y.remove(),fe?.pause()}}}var $u=[["Fix before spending.","I learn your margins, fix your tracking and fix your store before a single dollar goes into ads."],["Find the nerve.","I pull 1,000+ reviews and comments, build an offer they can't refuse, then make 20 to 30 ads."],["Scale what hits.","Seven days hands off. Then budgets rise in steps above your break-even, with 10 new ads every week."]],vy="Zero was the hardest part.",xy=12.7,Va=n=>n<0?0:n>1?1:n;function Gf(n,e,t,i){let s=3*n,r=3*(t-n)-s,a=1-s-r,o=3*e,c=3*(i-e)-o,l=1-o-c,u=f=>((a*f+r)*f+s)*f,h=f=>((l*f+c)*f+o)*f,d=f=>(3*a*f+2*r)*f+s;return f=>{if(f<=0)return 0;if(f>=1)return 1;let v=f;for(let y=0;y<6;y++){let m=u(v)-f,p=d(v);if(Math.abs(m)<1e-6||Math.abs(p)<1e-6)break;v-=m/p}if(Math.abs(u(v)-f)>1e-4){let y=0,m=1;for(let p=0;p<24;p++)v=(y+m)/2,u(v)<f?y=v:m=v}return h(v)}}var _y=Gf(.5,0,0,1),yy=Gf(.5,1.8,.62,1);function Yu(n,e,t="chars"){n.textContent="",n.setAttribute("aria-label",e);let i=0,s=e.split(`
`);s.forEach((r,a)=>{r.split(" ").forEach((o,c,l)=>{let u=document.createElement("span");if(u.className="st-w",u.setAttribute("aria-hidden","true"),t==="words"){let h=document.createElement("span");h.className="st-c",h.textContent=o,h.style.setProperty("--i",i++),u.append(h)}else for(let h of o){let d=document.createElement("span");d.className="st-c",d.textContent=h,d.style.setProperty("--i",i++),u.append(d)}n.append(u),c<l.length-1&&n.append(" ")}),a<s.length-1&&n.append(" ",document.createElement("br"))}),n.style.setProperty("--st-count",String(Math.max(1,i)))}function Wf({reduce:n=!1}={}){let{gsap:e}=window,t=K=>document.getElementById(K);if(!document.querySelector("link[data-screens-css]")){let K=document.createElement("link");K.rel="stylesheet",K.href=new URL("../css/screens.css",import.meta.url).href,K.dataset.screensCss="",document.head.append(K)}t("phoneWrap")?.remove();let i=t("stepTitle"),s=t("stepSub"),r=t("stepPills"),a=t("stepCopy"),o=[...r.querySelectorAll("[data-step-pill]")],c=[...document.querySelectorAll("[data-rail-tick]")],l=t("exitBand"),u=l.querySelector("a"),h=l.querySelector(".exit-line"),d=l.querySelector(".exit-icon"),f=t("rail"),v=t("stepBlock"),y=t("stepsSticky"),m=t("system"),p=document.querySelector(".nav .notice"),T=[...document.querySelectorAll("[data-hero-copy]")],I=()=>innerWidth<768,S=document.querySelector(".nav .nav-blur");if(S)for(;S.children.length<4;)S.append(document.createElement("div"));let b=document.querySelector(".step-note"),w=document.createElement("div");w.className="steps-shadow",w.setAttribute("aria-hidden","true"),y.insertBefore(w,v);let A=document.createElement("h3");A.className="steps-outro st-paused",Yu(A,`Zero was the
hardest part.`),A.setAttribute("aria-label",vy),v.append(A),d.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="rgba(241,242,243,.6)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>',h.classList.add("st-blur-a"),Yu(h,h.textContent.trim(),"words");let x=u.textContent.replace(/\s*→\s*$/,"").trim(),M='<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 8.5l5-5M4.5 3.5h4v4"/></svg>';u.classList.add("xb"),u.setAttribute("aria-label",x),u.innerHTML=`<span class="xb-ic xb-ic-hover" aria-hidden="true">${M}</span><span class="xb-text" aria-hidden="true">${Array.from(x).map((K,pe)=>{let R=K===" "?"&nbsp;":K;return`<span class="xb-c" style="--i:${pe}"><span>${R}</span><span>${R}</span></span>`}).join("")}</span><span class="xb-ic xb-ic-default" aria-hidden="true">${M}</span>`;let D=e.timeline({paused:!0});D.fromTo(l,{autoAlpha:0,scale:.98,yPercent:10},{autoAlpha:1,scale:1,yPercent:0,duration:.5,ease:yy});let U=!1;function z(K){K!==U&&(U=K,l.classList.toggle("is-on",K),u.tabIndex=K?0:-1,K?(l.classList.add("is-revealed"),B(h,"st-blur"),n?D.progress(1):D.timeScale(1).play()):n?(D.progress(0),l.classList.remove("is-revealed")):(D.eventCallback("onReverseComplete",()=>{U||l.classList.remove("is-revealed")}),D.timeScale(2).reverse()))}function B(K,pe,R=!1){if(R||(K.querySelectorAll(".st-c").forEach(G=>{G.style.animation="none"}),K.offsetWidth,K.querySelectorAll(".st-c").forEach(G=>{G.style.animation=""})),pe){let G=K.classList.contains(`${pe}-a`);K.classList.remove(`${pe}-a`,`${pe}-b`),K.classList.add(`${pe}-${G?"b":"a"}`)}}let L=-1,P=!1,V={v:n?1:0},Y={v:0,blur:0};i.classList.add("st-blur-a","st-paused");function ue(K,pe){if(K===L)return;let R=L<0;L=K,Yu(i,$u[K][0]),P&&B(i,"st-blur",!0),!pe||n||R?(s.textContent=$u[K][1],e.set(s,{autoAlpha:1,y:0})):e.to(s,{autoAlpha:0,y:-8,duration:.12,ease:"power2.out",overwrite:!0,onComplete(){s.textContent=$u[K][1],e.fromTo(s,{autoAlpha:0,y:8},{autoAlpha:1,y:0,duration:.22,ease:"power2.out"})}}),q(K),qe(),p?.classList.toggle("is-hidden",K>=2),nt()}function q(K){o.forEach((pe,R)=>{let G=R===K;pe.classList.toggle("is-active",G),G?pe.setAttribute("aria-current","step"):pe.removeAttribute("aria-current");let J=G?`Step 0${R+1}`:`0${R+1}`;pe.textContent!==J&&(pe.textContent=J)}),requestAnimationFrame(()=>le(K))}function le(K){if(I()){r.style.transform="";return}let pe=Math.max(0,K),R=parseFloat(getComputedStyle(document.documentElement).fontSize)||16,G=parseFloat(getComputedStyle(i).lineHeight)||i.offsetHeight,J=-pe*2.5*R+(G-3.25*R)/2;r.style.transform=`translateY(${J.toFixed(2)}px)`}let ce=!1,Xe=-1;function qe(){let K=L===2&&!ce?n?1:.5:0;if(K===Xe)return;let pe=ce&&Xe>0;Xe=K,e.to(w,{opacity:K,duration:n?0:pe?.3:.5,ease:"power2.out",overwrite:!0})}function nt(){b?.classList.toggle("is-hidden",!P||L>=2)}let me=-1;function xe(K){me=K,c.forEach((pe,R)=>pe.classList.toggle("is-active",R===K))}ue(0,!1);function X(K){K!==P&&(P=K,e.to(V,{v:K?1:0,duration:n?0:K?.6:.3,ease:K?_y:"power1.out",overwrite:!0}),i.classList.toggle("st-paused",!K),K&&B(i,"st-blur"),nt())}let W=!1;function _e(K){K!==W&&(W=K,e.killTweensOf(Y),K?(Y.v=1,Y.blur=0,A.classList.add("is-revealed"),A.classList.remove("st-paused"),B(A,"st-blur")):e.to(Y,{v:0,blur:8,duration:n?0:.4,ease:"power2.out",onComplete(){A.classList.remove("is-revealed"),A.classList.add("st-paused")}}))}A.classList.add("st-blur-a");function Ce(){q(L<0?0:L),me>=0&&xe(me),f.classList.toggle("is-hidden",I()),ae?.onStep()}function N(K){ae?.onSnap(K)}let ae=null;function ye(K){try{ae=Vf({scroll:K,post:()=>window.__v8?.post,reduce:n})}catch(g){console.warn("screens",g)}let pe=Object.fromEntries(K.segments.map(g=>[g.id,g])),R=t("darkRun"),G=t("nav"),J=document.querySelector(".footer"),oe=0,Ee=0,Se=1/0,Ve=0,C=innerHeight,Ye=0,Be=()=>{let g=R.offsetTop+R.offsetHeight;oe=g-innerHeight*.85,Ee=g-45,Se=J?J.offsetTop:1/0,Ve=0;for(let k=m;k;k=k.offsetParent)Ve+=k.offsetTop;C=m.offsetHeight/xy,Ye=Ve+m.offsetHeight-innerHeight,ae?.refresh?.()};Be(),addEventListener("resize",()=>requestAnimationFrame(Be)),window.ScrollTrigger&&window.ScrollTrigger.addEventListener("refresh",Be),f.classList.toggle("is-hidden",I());let E={hero:-1,lock:"",outro:"",railPast:!1,railExp:!1,railDark:null,fill:"",sp:-1,clip:""};e.ticker.add(()=>{let g=K.lenis?K.lenis.animatedScroll:scrollY,k=pe.A,j=k.end-k.start,se=I()?1-Va((g-k.start-j*.17)/(j*.2)):1-Va((g-k.start)/(j*.34));Math.abs(se-E.hero)>.002&&(E.hero=se,T.forEach(pt=>{pt.style.opacity=se.toFixed(3)}));let fe=(g-Ve)/C,we=(fe-4.5)/12;X(g>=k.end-2);let te=fe<1?0:fe<4.5?1:2;ue(te,!0);let re=Va(te===0?fe:te===1?(fe-1)/3.5:(fe-4.5)/4.8);Math.abs(re-E.sp)>.002&&(E.sp=re,o[te].style.setProperty("--sp",re.toFixed(3)));let be=g<k.end-2?0:we>=.519?4:1+te;be!==me&&xe(be);let je=Math.min(1,2*Va((we-.4)/.2));_e(we>=.199);let Ne=V.v*(1-je),Le=Math.max(1-V.v,je)*8,Qe=Ne.toFixed(3)+"|"+Le.toFixed(2);if(Qe!==E.lock){E.lock=Qe;for(let pt of[r,a])pt.style.opacity=Ne.toFixed(3),pt.style.filter=Le>.05?`blur(${Le.toFixed(2)}px)`:"",pt.style.visibility=Ne<.002?"hidden":""}let it=Y.v*(1-je),ft=Math.max(Y.blur,je*8),H=it.toFixed(3)+"|"+ft.toFixed(2);H!==E.outro&&(E.outro=H,A.style.opacity=it.toFixed(3),A.style.filter=ft>.05?`blur(${ft.toFixed(2)}px)`:""),z(we>=.519||g>Ye+2);let Me=window.__v8?.cardInset,de=K.state?.T10||0,Ue=de>.001||g>Ye+2;Ue!==ce&&(ce=Ue,qe());let ke="none";if(de>.001){let pt=window.__v8?.post?.uniforms,Vt=pt?.uCardInset?.value,Jt=innerWidth,Si=innerHeight,[Kn,vn,Jn,In]=Me?[+Me.top||0,+Me.right||0,+Me.bottom||0,+Me.left||0]:Vt?[Vt.x,Vt.y,Vt.z,Vt.w]:[0,.025*Jt,Math.max(0,(.05-.015*Jt/Si)*Si),.025*Jt],Hn=+(Me?.radiusBottom??Me?.radius??pt?.uCardRadius?.value??(I()?24:41.25)),es=+(Me?.radiusTop??0),un=Me?.t10!=null?1:de,Vn=$n=>($n*un).toFixed(1)+"px";ke=`inset(${Vn(Kn)} ${Vn(vn)} ${Vn(Jn)} ${Vn(In)} round ${Vn(es)} ${Vn(es)} ${Vn(Hn)} ${Vn(Hn)})`}ke!==E.clip&&(E.clip=ke,w.style.clipPath=ke);let ve=we>=.519;ve!==E.railExp&&(E.railExp=ve,f.classList.toggle("is-expanded",ve));let et=Se-innerHeight*.5,Ze=g>et;Ze!==E.railPast&&(E.railPast=Ze,f.classList.toggle("is-past",Ze));let Rt=g<oe+innerHeight*.35;if(Rt!==E.railDark&&(E.railDark=Rt,f.classList.toggle("is-on-dark",Rt)),ve){let pt=Ve+C*10.74,Jt=((12+29*Va((g-pt)/Math.max(1,et-pt)))/41).toFixed(3);Jt!==E.fill&&(E.fill=Jt,f.style.setProperty("--fill",Jt))}})}return{onStep:Ce,onSnap:N,attach:ye}}pc();var Xf=300,qf=689,Sn=1.5,Sy=8,by=1.62,My=.09,ec=(n,e,t)=>{let i=Math.min(1,Math.max(0,(t-n)/(e-n)));return i*i*(3-2*i)};function $f({U:n,desktop:e,api:t,renderer:i=null}){let s=e?"d":"m",r={ready:!1,track:null,visible:!1,active:!1},a=null,o=48,c=null,l=1,u=1,h=new xn,d=me=>new Promise((xe,X)=>new ds().load(me,xe,void 0,X));Promise.all([Promise.resolve(window.__first).then(()=>fetch(`assets/video/screen_track_${s}.json`)).then(me=>me.ok?me.json():Promise.reject(me.status))]).then(async([me])=>{let xe=await d(`assets/video/${me.matte.src}`);xe.colorSpace=nn,xe.generateMipmaps=!1,xe.minFilter=Lt,xe.magFilter=Lt,xe.wrapS=xe.wrapT=mi,xe.needsUpdate=!0,n.tScreenMatte.value=xe,a=me.frames,o=me.fps||48,c=me.matte,[l,u]=me.size,r.track=me,n.uScrAtlas.value.set(c.tile[0]/c.size[0],c.tile[1]/c.size[1],c.tile[0],c.tile[1]),r.radius=me.cornerRadiusUI||30;let X=a.filter(W=>W.visible&&W.conf>.8).map(W=>W.ref).sort((W,_e)=>W-_e);r.refRest=X.length?X[Math.floor(X.length*.6)]:.5,r.ready=!0}).catch(me=>{console.warn("[screenfx] no track",me)});let f=me=>{let xe={ok:!1,bm:null},X=new Image;return X.decoding="async",X.src=`assets/scr/${me}.webp`,X.decode().then(()=>window.createImageBitmap?createImageBitmap(X,{resizeWidth:Math.round(Xf*Sn),resizeHeight:Math.round(qf*Sn),resizeQuality:"high"}):X).catch(()=>X.naturalWidth?X:Promise.reject()).then(W=>{xe.bm=W,xe.ok=!0,w=!0},()=>{}),xe},v=null,y=()=>{v||(v={top:f("top"),b:f("b"),a:Array.from({length:Sy},(me,xe)=>f(`a${xe}`))})};setTimeout(y,1200);let m=document.createElement("canvas");m.width=Math.round(Xf*Sn),m.height=Math.round(qf*Sn);let p=m.getContext("2d"),T=document.createElement("canvas");T.width=m.width,T.height=m.height;let I=T.getContext("2d"),S=new ba(m);S.colorSpace=nn,S.minFilter=Lt,S.magFilter=Lt,S.generateMipmaps=!1,S.anisotropy=4,n.tScreenUI.value=S;let b={aIdx:0,aOpacity:1,aShift:0,aDissolve:1,aPress:0,run:null,runDraw:null,runOn:!1,runKey:"",bVis:0,thumb:null},w=!0,A=0,x=-1,M=0,D="";r.setContent=me=>{Object.assign(b,me)};let U=new Map;function z(me,xe){let X=me.toFixed(2)+":"+xe,W=U.get(X);if(W)return W;U.size>64&&U.clear();let _e=4,Ce=document.createElement("canvas");Ce.width=Ce.height=Math.round(xe*_e);let N=Ce.getContext("2d");return N.fillStyle="#000",N.beginPath(),N.arc(Ce.width/2,Ce.width/2,me*_e,0,Math.PI*2),N.fill(),W=p.createPattern(Ce,"repeat"),W.setTransform&&W.setTransform(new DOMMatrix().scale(xe/Ce.width)),U.set(X,W),W}function B(me){v||y(),b.aIdx!==A&&(x=A,A=b.aIdx,M=me);let xe=x>=0?Math.min(1,(me-M)/300):1;xe>=1&&(x=-1);let X=[A,x,xe.toFixed(2),b.aOpacity.toFixed(3),b.aShift.toFixed(4),b.aDissolve.toFixed(3),b.aPress.toFixed(3),b.runOn?b.runKey:"-",b.bVis.toFixed(3),v?.a.filter(Ce=>Ce.ok).length,v?.b.ok,v?.top.ok,b.thumb||b.runOn?Math.floor(me/50):0].join("|");if(X===D&&!w)return!1;D=X,w=!1;let W=m.width,_e=m.height;if(p.globalCompositeOperation="source-over",p.globalAlpha=1,p.fillStyle="#050506",p.fillRect(0,0,W,_e),b.aOpacity>.001&&v){I.globalCompositeOperation="source-over",I.clearRect(0,0,W,_e);let Ce=(N,ae)=>{let ye=v.a[N];!ye?.ok||ae<=0||(I.globalAlpha=ae,I.drawImage(ye.bm,0,0,W,_e),I.globalAlpha=1)};x>=0?(Ce(x,1),Ce(A,xe)):Ce(A,1),b.aDissolve<1&&(I.globalCompositeOperation="destination-in",I.fillStyle=z(Math.max(.01,b.aDissolve*7*.72*Sn),7*Sn),I.fillRect(0,0,W,_e),I.globalCompositeOperation="source-over"),p.globalAlpha=b.aOpacity,p.drawImage(T,0,-Math.round(b.aShift*_e*4)/4),p.globalAlpha=1}return b.runOn&&b.runDraw&&W===b.run?.width?(p.save(),b.runDraw(p),p.restore(),p.globalAlpha=1):b.runOn&&b.run&&p.drawImage(b.run,0,0,W,_e),b.bVis>.001&&v?.b.ok&&(p.globalAlpha=b.bVis,p.drawImage(v.b.bm,0,0,W,_e),b.thumb&&(p.save(),p.beginPath(),p.roundRect?p.roundRect(18*Sn,425*Sn,44*Sn,44*Sn,10*Sn):p.rect(18*Sn,425*Sn,44*Sn,44*Sn),p.clip(),p.drawImage(b.thumb,18*Sn,425*Sn,44*Sn,44*Sn),p.restore()),p.globalAlpha=1),v?.top.ok&&p.drawImage(v.top.bm,0,0,W,_e),S.needsUpdate=!0,!0}let L=new xt;function P(me){let[[xe,X],[W,_e],[Ce,N],[ae,ye]]=me,K=xe-W+Ce-ae,pe=X-_e+N-ye,R,G,J,oe,Ee=0,Se=0,Ve=W-Ce,C=ae-Ce,Ye=_e-N,Be=ye-N,E=Ve*Be-C*Ye;return Math.abs(K)<1e-12&&Math.abs(pe)<1e-12?(R=W-xe,G=ae-xe,J=_e-X,oe=ye-X):(Ee=(K*Be-C*pe)/E,Se=(Ve*pe-K*Ye)/E,R=W-xe+Ee*W,G=ae-xe+Se*ae,J=_e-X+Ee*_e,oe=ye-X+Se*ye),L.set(R,G,xe,J,oe,X,Ee,Se,1).invert(),L}let V=(me,xe)=>{let X=me>=0?me:xe,W=me>=0?Math.round(X*o):Math.floor(X*o+1e-4);return a[Math.min(a.length-1,Math.max(0,W))]};function Y(me){if(me&&me.visible)return me;if(!me||!a)return null;for(let xe=1;xe<=6;xe++)for(let X of[me.i-xe,me.i+xe]){let W=a[X];if(W&&W.visible&&W.i===X)return W}return null}function ue(me,xe,X,W){let _e=Y(me);if(!_e||!_e.corners||!_e.tile)return W.value.w=0,null;xe.value.copy(P(_e.corners));let[Ce,N]=_e.tile,ae=Ce%c.cols,ye=Math.floor(Ce/c.cols),K=Math.min(1,Math.max(.15,_e.ref/r.refRest));return X.value.set(ae*c.tile[0]/c.size[0],ye*c.tile[1]/c.size[1],N,K),W.value.set(_e.ref,r.radius,_e.conf<.6?26:12,1),_e}let q={sx:1,sy:1,ox:0,oy:0};function le(){let me=n.uAspect.value,xe=n.uVideoAspect.value,X=n.uVideoPivot.value,W=me>xe?1:me/xe,_e=me>xe?xe/me:1;return q.sx=W,q.sy=_e,q.ox=X.x*(1-W),q.oy=X.y*(1-_e),q}r.frameWeight=0,r.swing={w:0,top:0,bot:1},r.mapCss=null,r.update=function(xe=performance.now()){ce(),r.active=r.visible&&!window.__v8?.glCovered,r.active&&B(xe)},r.prepare=()=>ce();function ce(){let me=t.video,xe=t.state;if(!(r.ready&&!!me)){r.swing.w=0,n.uScrB.value.w=0,n.uScrB2.value.w=0,n.uScrDespill.value=0,n.uScrRestVideo.value=0,n.uScrFrameMix.value=0,r.visible=!1;return}let W=xe.videoTime||0,_e=V(me.texture.presented?.mediaTime??-1,W),Ce=ue(_e,n.uScrH,n.uScrA,n.uScrB),N=!!Ce,ae=!1;if(xe.uHQMix>.001){let Be=me.hqRange[0]+(me.hqRange[1]-me.hqRange[0])*(xe.hqProgress||0);ae=!!ue(V(me.hqTexture.presented?.mediaTime??-1,Be),n.uScrH2,n.uScrA2,n.uScrB2)}else n.uScrB2.value.w=0;r.visible=N||ae;let ye=r.track.first/o,K=(r.track.last+1)/o;n.uScrDespill.value=W>ye-.2&&W<K+.2?1:0,n.uScrRestVideo.value=Math.round(xe.heroFrameIndex)<=1?1:0;let pe=window.__v8?.scrPlate,R=pe?ec(2.3,3.4,W)*(1-ec(5.95,6.6,W)):0;r.frameWeight=R;let G=le(),J=G.sx,oe=G.sy,Ee=G.ox,Se=G.oy,Ve=e||!n.uScrFeather?0:ec(.8,1.15,W)*(1-ec(1.85,2.25,W));if(n.uScrFeather&&(n.uScrFeather.value=Ve>0&&R<=0?My:0),Ve>0){let Be=1+(by-1)*Ve,E=.5,g=.2;Ee+=J*E*(1-Be),Se+=oe*g*(1-Be),J*=Be,oe*=Be}if(r.swing.w=R<=0?Ve:0,R<=0&&Ve>0)n.uScrFrame.value.set(J,oe,Ee,Se),n.uScrFrameMix.value=1,r.swing.top=1-(1-Se)/oe,r.swing.bot=1+Se/oe;else if(R>0){let Be=pe.s*pe.k,E=pe.W/(Be*l),g=-pe.ox/(Be*l),k=pe.H/(Be*u),j=1-(pe.H-pe.oy)/(Be*u);J+=(E-J)*R,oe+=(k-oe)*R,Ee+=(g-Ee)*R,Se+=(j-Se)*R,n.uScrFrame.value.set(J,oe,Ee,Se),n.uScrFrameMix.value=1}else n.uScrFrameMix.value=0;let C=pe?.W||innerWidth,Ye=pe?.H||innerHeight;r.mapCss=(Be,E)=>{let g=Be/l,k=1-E/u;return[(g-Ee)/J*C,(1-(k-Se)/oe)*Ye]},r.quad=N?Ce.corners.map(([Be,E])=>r.mapCss(Be*l,E*u)):null}r.restMotion=(me,xe)=>{if(!r.ready)return null;let X=V(-1,me),W=V(-1,xe);if(!X?.visible||!W?.visible)return null;let _e=Ce=>Ce.corners.map(([N,ae])=>[N*l,ae*u]);return{a:_e(X),b:_e(W),vw:l,vh:u}},r.videoSize=()=>[l,u],r.hasFloor=()=>!!n.uFloor,r.setFloor=me=>n.uFloor?(n.uFloor.value!==me&&(n.uFloor.value=me),!0):!1;let Xe=!1,qe=()=>{if(Xe)return;if(!(r.ready&&v&&v.top.ok&&v.b.ok&&v.a.every(xe=>xe.ok))){setTimeout(qe,500);return}Xe=!0,w=!0,B(performance.now());try{i?.initTexture(S),i?.initTexture(n.tScreenMatte.value)}catch{}},nt=window.requestIdleCallback||(me=>setTimeout(me,200));return setTimeout(()=>nt(qe,{timeout:3e3}),2500),r}At.enabled=!1;var{gsap:$r}=window,Fs=document.documentElement,zn=matchMedia("(prefers-reduced-motion: reduce)").matches,Yf=matchMedia("(hover: none)").matches,Ot=innerWidth>=992,Ga=new URLSearchParams(location.search),Ju="assets/video/",Os="assets/rest/",Bs=Ot?"_d":"_m",Zf=Ot?"_d":"_m",wy={webm:Ju+`soumil_scroll${Zf}.webm`,mp4:Ju+`soumil_scroll${Zf}.mp4`,stills:[`${Os}rest12${Bs}_still.jpg`,`${Os}rest12${Bs}_still.jpg`,`${Os}rest3${Bs}.jpg`,`${Os}rest4${Bs}.jpg`]};function Ey(n,e,t,i){let s=3*n,r=3*(t-n)-s,a=1-s-r,o=3*e,c=3*(i-e)-o,l=1-o-c,u=f=>((a*f+r)*f+s)*f,h=f=>((l*f+c)*f+o)*f,d=f=>(3*a*f+2*r)*f+s;return f=>{if(f<=0)return 0;if(f>=1)return 1;let v=f;for(let y=0;y<8;y++){let m=u(v)-f;if(Math.abs(m)<1e-6)break;let p=d(v);if(Math.abs(p)<1e-6)break;v-=m/p}return h(Math.min(1,Math.max(0,v)))}}var Ty=Ey(.215,.61,.355,1),Ay=n=>new Promise(e=>setTimeout(e,n*1e3)),Wa=document.getElementById("loader"),tc=document.getElementById("loaderMark"),Cy=document.getElementById("loaderLine"),Ry=window.__lettersDone||Promise.resolve(),Tn=document.querySelector(".hero .giant");if(Tn&&!Tn.querySelector(".gc")){let n=Tn.textContent.trim(),e=0;Tn.setAttribute("aria-label",n),Tn.textContent="",n.split(" ").forEach((t,i,s)=>{let r=document.createElement("span");r.className="gw",r.setAttribute("aria-hidden","true");for(let a of t){let o=document.createElement("span");o.className="gc",o.textContent=a,o.style.setProperty("--i",e++),r.append(o)}Tn.append(r),i<s.length-1&&Tn.append(" ")}),Tn.style.setProperty("--st",`${Math.min(30,Math.max(8,260/Math.max(1,e))).toFixed(1)}ms`)}var Kf=()=>{Fs.classList.add("is-ready"),Tn?.classList.add("is-revealing")},Zu=document.querySelector(".chips-track"),Jf=()=>{Zu?.scrollWidth&&Zu.style.setProperty("--mq-dur",`${(Zu.scrollWidth/2/15.2).toFixed(2)}s`)};Jf();document.fonts?.ready.then(Jf);var ju=Wf({reduce:zn}),Ku={cardsIn:{value:zn?1:0}},Xa={uSweep1:{value:0},uCardsFade:{value:1},uCardsSpin:{value:0},uCardsSwing:{value:0}},Qu={value:null};function Py(){if(Ga.has("nogl"))return null;try{return document.createElement("canvas").getContext("webgl2")?new Yl({canvas:document.getElementById("gl"),alpha:!0,antialias:!1,depth:!1,stencil:!1,powerPreference:"high-performance"}):null}catch{return null}}var sn=Py(),jf={...Xa,tVideo:Qu},Yt=await Uf({uniforms:jf,video:wy,onStep:ju.onStep,onSnap:ju.onSnap});ju.attach(Yt);zn||Yt.stop();window.__v8={api:Yt};try{ia({lenis:Yt.lenis,scroll:Yt})}catch(n){console.warn("[hero] white failed",n)}sn?await Ly():Iy();function Iy(){Fs.classList.add("webgl-not-available"),Kf(),Wa.remove(),Fs.classList.remove("loading"),Yt.start(),Yt.ready.then(n=>{n&&(n.main.className="steps-video",n.main.setAttribute("aria-hidden","true"),document.getElementById("stepsSticky").prepend(n.main))}).catch(()=>{})}async function Ly(){let n=zn?Promise.resolve():(async()=>{let Ie=[...document.querySelectorAll("#nav, #rail, [data-intro]")];Ie.forEach(at=>{at.style.opacity="0.001"}),Fs.classList.remove("loading");for(let at=0;at<4;at++)await new Promise(bt=>requestAnimationFrame(bt));Fs.classList.add("loading"),Ie.forEach(at=>{at.style.opacity=""})})(),e=sn.domElement,t=()=>[e.clientWidth||innerWidth,e.clientHeight||innerHeight];sn.setPixelRatio(Math.min(devicePixelRatio,innerWidth<768?1.5:1.15)),sn.setSize(...t(),!1);let[i,s]=t(),r=bf(sn,{width:i,height:s,isMobile:!Ot,reducedMotion:zn}),a=r.uniforms,o=Ga.has("noscreenfx")?null:$f({U:a,desktop:Ot,api:Yt,renderer:sn});window.__v8.screenfx=o,a.uBackground.value.set(921102),a.uFaceMaskScreen.value=1;for(let Ie of["T1","T2","T3","T4","T5","T6","T7","T8","T9","T10","uVideoTransition","uHQMix","uBloomStrength","tVideoHQ","tRest","uVideoSat","uSweep4","uSweep7","uStarsCar","uStarsOpen"])jf[Ie]=a[Ie];Yt.refresh();let c=new ds,l=Ie=>new Promise((at,bt)=>c.load(Ie,Et=>{Et.colorSpace=nn,Et.anisotropy=sn.capabilities.getMaxAnisotropy(),at(Et)},void 0,bt)),[u,h,d,f,v,y]=await Promise.all([...["soumil_color","soumil_normaldepth","soumil_eyesmask"].map(Ie=>l(`assets/${Ie}${Ot?Ie==="soumil_eyesmask"?"_d3":"":"_m"}.webp`)),l(Ot&&sn.capabilities.maxTextureSize>=6144?"assets/dash_atlas.webp":"assets/dash_atlas_m.webp"),l("assets/soumil_loader.webp"),l(`assets/fx/soumil_sweep${Ot?"":"_m"}.png`)]);window.__firstDone?.();let m=u.image.width/u.image.height,p={};Promise.resolve(window.__first).then(()=>Promise.all([l(`${Os}rest12${Bs}_depth.png`),l(`${Os}rest3${Bs}_depth.png`),l(`${Os}rest4${Bs}_depth.png`),l(`${Os}rest3${Bs}_sky.png`),l("assets/fx/stars.png")])).then(([Ie,at,bt,Et,Mt])=>{for(let _ of[Ie,at,bt,Et])_.minFilter=Lt,_.generateMipmaps=!1;Mt.wrapS=Mt.wrapT=us,Object.assign(p,{p12:Ie,p3:at,p4:bt}),a.tPhoneDepth.value=Ie,a.tCarDepth.value=at,a.tCarSky.value=Et,a.tStars.value=Mt,a.uDepthOn.value=1}).catch(Ie=>console.warn("[hero] rest depth maps",Ie));let T=null,I=new hs,S=new On(32,i/s,.1,100);S.position.set(0,0,5);function b(Ie,at){let bt=Ie/at,Et=Math.tan(Ua.degToRad(16))/(Ot?1:.625);bt>1.8&&(Et*=1.8/bt),S.fov=Ua.radToDeg(2*Math.atan(Et)),S.aspect=bt,Ot?S.setViewOffset(Ie,at,0,Math.min(1.8-bt,0)*at/3.6,Ie,at):S.clearViewOffset(),S.updateProjectionMatrix()}let w=Ot?[1,1]:[1,1.5],A=Ot?[-.1,.02]:[-.025,.02],x=3.1,M=[1,0,0],D={value:new ie(...M)},U=Ot?1:1/1.5,z=U>m?[1,m/U]:[U/m,1],B={value:new mt(.0075*1.6*z[0]/M[0],.0075*z[1]/M[0])},L=`
    uniform vec3 uFit;
    vec2 photoUv(vec2 c){ return (c - 0.5) / uFit.x + 0.5 + uFit.yz; }
    // zero outside the photo; its cut sides and bottom fade into the background
    float photoEdge(vec2 p){
      vec2 i = step(vec2(0.0), p) * step(p, vec2(1.0));
      return i.x * i.y * smoothstep(0.0, 0.03, p.x) * smoothstep(1.0, 0.97, p.x) * smoothstep(0.0, 0.04, p.y);
    }`,P=`
    uniform vec2 uScale; varying vec2 vUv;
    void main(){
      vUv = uv;
      vec4 mv = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);
      mv.xy += position.xy * uScale;
      gl_Position = projectionMatrix * mv;
    }`,V={uScale:{value:new mt(x,x)},tDiffuse:{value:u},tNormalDepth:{value:h},tSweepMap:{value:y},tNoise:a.tNoise,tTransitionColor:a.tTransitionColor,uRandom:a.uRandom,uMouse:a.uMouse,uPlaneAspect:{value:w[0]/w[1]},uImageAspect:{value:m},uTransitionPreloader:{value:zn?1:0},uSweepPreloader:{value:zn?1:0},uTransition1:a.T1,uSweep1:Xa.uSweep1,uFit:D,uPar:B,uSweepFit:{value:new ie(...Ot?[.355,.085,-.02]:[.27,.15,.13])},uRimMip:{value:6},uHeadTail:{value:Ot?.25:.14},uRimFar:{value:Ot?.64:2},uShapeBody:{value:Ot?0:1},uRimTail:{value:Ot?.24:.13},uRimEdge:{value:new mt(...Ot?[.62,.995]:[.55,.98])},uHeadKey:{value:new Ut(1,...Ot?[.03,.32,.46]:[.06,.42,.48])},uHeadKey2:{value:new ie(...Ot?[.43,0,.45]:[.3,0,.32])},uHeadKey3:{value:new ie(...Ot?[.41,.1,.04]:[.43,.1,.03])},uECap:{value:new mt(...Ot?[.9,.8]:[.86,.45])}},Y=new gn({uniforms:V,transparent:!0,premultipliedAlpha:!0,depthTest:!1,depthWrite:!1,vertexShader:P,fragmentShader:`
      uniform sampler2D tDiffuse, tNormalDepth, tNoise, tTransitionColor, tSweepMap;
      uniform vec2 uMouse, uPar;
      uniform vec3 uSweepFit;
      uniform float uPlaneAspect, uImageAspect, uTransitionPreloader, uSweepPreloader, uTransition1, uSweep1, uRandom;
      varying vec2 vUv;
      ${Wr}
      ${Ou}
      ${L}
      #define COLOR_HIGHLIGHT vec3(0.9176, 0.6941, 0.4824)
      uniform float uRimMip, uHeadTail, uRimFar, uShapeBody, uRimTail;
      uniform vec2 uRimEdge;
      uniform vec4 uHeadKey;    // fix4: on, photo luma lo / hi, face-side split (photo x)
      uniform vec3 uHeadKey2;
      uniform vec3 uHeadKey3;   // fix4: head arrival key (base, spread), departure shift   // fix4: head floor (photo v), shoulder rim keep (0 = none), body tail
      uniform vec2 uECap;       // fix4: peach coverage cap (body/head), rim-cell cap
      // fix3: pixelPass with round halftone dots: one dot per 50-row cell, radius 1.45 e (in half-cells: e 1 fills the
      // cell to its corners, e 0.5 is a round dot, small e a small dot; as e falls the corners open first, which reads
      // as round dark holes in the peach like ref's), same colour ramp and noisy RGB split as pixelPass
      // fix4 (G01/G02): cosine halftone instead of growing discs: e is the cell's peach coverage; small e is a small
      // round dot at the cell centre, e 0.5 a diamond, high e a peach field with small round dark holes (ref's
      // "peach with dark holes"); never a square cell (e is capped below 1 by the caller), so edges and the rim read
      // as round dots, not blocks
      vec4 dotPass(vec2 uv, float e, float aspect){
        vec2 grid = vec2(50.0 * aspect, 50.0);
        vec2 block = floor(uv * grid / 16.0);
        float n = texture(tNoise, (block + 0.5) / 64.0 + vec2(uRandom, uRandom * 1.37)).r;
        n = n * n * 2.0;
        float t = 1.0 - 2.0 * e;
        vec4 o = vec4(0.0);
        for (int k = 0; k < 3; k++) {
          vec2 suv = uv + vec2(0.0, 0.005) * float(k) * n;
          vec2 cid = floor(suv * grid);
          vec2 q = (fract(suv * grid) - 0.5) * 6.2831853;
          float f = 0.5 * (cos(q.x) + cos(q.y));
          float m = smoothstep(t - 0.09, t + 0.09, f) * step(0.03, e);
          o[k] = texture(tTransitionColor, (cid + 0.5) / grid).rgb[k] * m;
          o.a = max(o.a, m);
        }
        return o;
      }
      void main(){
        vec2 uv = photoUv(coverUv(vUv, uPlaneAspect, uImageAspect, vec2(0.5)));
        float d = smoothstep(0.0, 1.0, 1.0 - texture(tNormalDepth, uv).a);
        uv += vec2(uMouse.x, -uMouse.y) * d * uPar;                   // depth parallax (G09: ref's on-screen travel)
        vec4 nd = pixelise(tNormalDepth, uv, 50.0, uImageAspect);       // 50 cells tall, drives the transitions
        vec3 N = texture(tNormalDepth, uv).rgb * 2.0 - 1.0;
        vec4 col = texture(tDiffuse, uv);
        col.a *= photoEdge(uv);
        // warm rim light, strongest with the cursor on the left, off on the shoulders
        float L = max(dot(N, vec3(1.0 - uMouse.x, uMouse.y, 0.0)), 0.0);
        L = L * L * 0.5 * smoothstep(0.25, 0.75, vUv.y) * col.a * (1.0 - uTransition1);
        // fix2 (21 Nov): one 50-row cell grid for the reveal, the photo exit and the peach band
        vec2 cgrid = vec2(50.0 * uImageAspect, 50.0);
        vec2 cid = floor(uv * cgrid), cuv = (cid + 0.5) / cgrid;
        float h = fract(sin(dot(cid, vec2(12.9898, 78.233))) * 43758.5453);
        float nearS = texture(tSweepMap, cuv).r;
        // peach pixel band: front 1.5 -> -0.5 through the sweep order map (torso bottom 0.86 -> shoulders/neck 0.54,
        // head 0.49, silhouette rim 0.30, 0 outside). fix2: cells within ~2 cells of the silhouette sort towards the
        // rim (the photo alpha's blurred mip says how close the edge is), so the band ends on a 2-cell halftone rim on
        // the head and shoulders as ref's (y 1144) instead of a 1-cell outline; both edges of the band are
        // 0.2 wide, so the halftone holes grow over ~4 cells on either side, and uSweepFit.z shifts the band per device.
        // rim zone from the alpha's blurred mip (uRimMip 6: mip 7 marked most of the head as rim, fix3 check)
        float cov = textureLod(tDiffuse, cuv, uRimMip).a;
        float edge = 1.0 - smoothstep(uRimEdge.x, uRimEdge.y, cov);   // fix3: desktop (0.62, 0.995), 2-3 cells thick (was 0.55, 0.98)
        // fix3 (item 4): ref's rim stays on the head and the near (screen-left) shoulder only: the far shoulder
        // (photo x past uRimFar, below v 0.45: shoulder line, not the ear or the back of the head) is not pulled to the rim key, so it fills and leaves with the body
        float far = (1.0 - smoothstep(0.42, 0.48, cuv.y)) * smoothstep(uRimFar, uRimFar + 0.06, cuv.x) * step(0.05, nearS);
        edge *= 1.0 - far;
        float key = nearS - (nearS - 0.30) * edge * step(0.30, nearS) * step(nearS, 0.62);
        float nearB = mix(nearS, max(nearS, 0.6), far);    // the sweep map's own rim cells (0.30) on the far shoulder too
        key = mix(key, nearB, far);
        // fix3 (item 2, phone): the torso keys by its depth below the shoulder line (inside cells counted straight up,
        // 12 at most), so the band's top edge runs parallel to the shoulders instead of a flat full-width slab
        if (uShapeBody > 0.5 && nearS > 0.56) {
          float dep = 0.0, stop = 0.0;
          for (int k = 1; k <= 12; k++) {
            stop = max(stop, step(texture(tSweepMap, cuv + vec2(0.0, float(k) / cgrid.y)).r, 0.56));   // neck/head cells stop it too
            dep += 1.0 - stop;
          }
          key = mix(key, 0.56 + 0.30 * smoothstep(0.0, 12.0, dep), 0.85);
        }
        float pre = step(0.001, uSweepPreloader) * step(uSweepPreloader, 0.999);
        float keyI = 0.95 - 0.75 * cuv.y;   // the intro band rises straight up the photo (bottom 0.95 -> top 0.2)
        float front = mix(1.5, -0.5, fract(uSweepPreloader + uSweep1)) + uSweepFit.z * step(0.0005, uSweep1);
        // fix4 (G02/G01): the head no longer keys as one flat 0.49 (an even grid of equal dots on the way in, a flat
        // fill, then a full outline). ref's head band works from the inside out (desktop frames y 919-1241): dots
        // grow first deep inside the head (temple / cheek), the head fills, its centre opens into big dark holes
        // (1095) and clears (1144) while the outline still holds, and the last peach is the face-side and neck edge
        // (1241), the back of the head having cleared. Cells order by depth inside the silhouette (the alpha's mips 6-7,
        // ~6 cells deep, the sweep map's own rim ramp near the edge), a little by how lit the photo is, and the back
        // edge a little before the face-side edge.
        float headC = 0.0, keyA = -9.0;
        if (uHeadKey.x > 0.5 && nearS > 0.05 && nearS < 0.52 && cuv.y > uHeadKey2.x) {
          float rI = clamp((nearS - 0.30) / 0.20, 0.0, 1.0);
          float deep = smoothstep(0.8, 0.97, 0.5 * (textureLod(tDiffuse, cuv, 6.0).a + textureLod(tDiffuse, cuv, 7.0).a));
          float lum = smoothstep(uHeadKey.y, uHeadKey.z, luma(texture(tDiffuse, cuv).rgb));
          float xs = 1.0 - smoothstep(uHeadKey.w - 0.1, uHeadKey.w + 0.1, cuv.x);   // face side (screen-left)
          float f = clamp(0.72 * deep * rI + 0.13 * lum + 0.45 * (1.0 - xs) * (1.0 - rI), 0.0, 1.0);
          key = 0.30 + 0.24 * f + uHeadKey3.z * rI;      // departure: inside first, the rim last
          keyA = uHeadKey3.x + uHeadKey3.y * f;          // arrival: nearly together (919 centre only, 1013 all of it)
          headC = 1.0;
          edge = (1.0 - rI) * mix(0.35, 1.0, xs);       // the face-side / chin / neck rim holds longest (uRimTail)
        } else if (uHeadKey.x > 0.5 && nearS >= 0.52) {
          edge *= uHeadKey2.y;                           // shoulders: no long outline, they fill and leave with the body
          key = mix(nearS, key, uHeadKey2.y);
        }
        float dS = key - front;
        // leading edge 0.2; the tail has a solid core then fades, long on the body (0.32: the shoulders stay filled
        // while the head fills, ref y 1013) and on the head uHeadTail (fix3 desktop 0.25, was 0.14: the head
        // cleared to a rim 60-80 px before ref's, which is still filled at y 1095 and half-cleared at 1144)
        // fix4: body tail uHeadKey2.z (desktop 0.45: the shoulders stay a thick dotted fill at y 1095, ref)
        float Lt = mix(mix(uHeadTail, uHeadKey2.z, smoothstep(0.5, 0.62, nearB) * (1.0 - headC)), uRimTail, edge);
        float Ll = 0.2, e0 = 1.0;
        float Ls = mix(0.4, mix(0.08, 0.4, edge), headC);   // fix4: the head's tail fades from near its front (holes grow), the rim keeps a solid core
        // the intro band is one halftone band rising from the bottom (ref 28.14 s), on the photo only, no rim: the
        // colour follows right behind it. fix3 (item 5): soft (lead 0.16 = ~11 rows of growing dots, tail 0.12) instead
        // of the narrow hard slab across his face
        if (pre > 0.5) { dS = keyI - front; Lt = 0.12; Ll = 0.16; Ls = 0.4; e0 = step(0.5, texture(tDiffuse, cuv).a); }
        float lead = (headC > 0.5 && pre < 0.5) ? front - keyA : -dS;
        float e = (lead > 0.0 ? 1.0 - smoothstep(0.0, Ll, lead) : (dS > 0.0 ? 1.0 - smoothstep(Lt * Ls, Lt, dS) : 1.0)) * step(0.05, nearS) * e0;
        // fix3 (item 5): the intro band never fills solid. fix4 (G06): round dots only (cosine halftone at e <= 0.4: separate round
        // dots, so the band never reads as square cells), and the band is a body
        // band: it rises from the bottom of the sweater and thins to small dots over the neck and face
        // (ref 28.14 s: round-dot peach band on the lower body only; the colour man follows)
        e *= mix(1.0, 0.4 * (1.0 - 0.35 * smoothstep(0.36, 0.5, cuv.y)), pre);
        // fix3 (item 4/2): round halftone dots at the silhouette: a cell the outline cuts gets a smaller dot (its own
        // alpha coverage, mip 4 ~ one cell), so the edge is round dots like ref's, not square blocks
        e *= mix(1.0, smoothstep(0.1, 0.8, textureLod(tDiffuse, cuv, 4.0).a), step(0.0005, uSweep1) * (1.0 - pre));
        // fix3 (item 2, phone): on the torso the dots shrink over the last 4 cells before the photo's side (the phone
        // photo's sweater is cut straight down at x ~0.69), so the band has no hard vertical edge
        if (uShapeBody > 0.5 && nearS > 0.56) {
          float hx = 1.0;
          for (int k = 1; k <= 4; k++) {
            float o = float(k) / cgrid.x;
            float out1 = step(min(texture(tSweepMap, cuv + vec2(o, 0.0)).r, texture(tSweepMap, cuv - vec2(o, 0.0)).r), 0.05);
            hx = min(hx, mix(1.0, float(k - 1) / 4.0, out1));
          }
          e *= smoothstep(0.0, 1.0, hx);
        }
        // fix4: exit band coverage caps: the core stays peach with small dark holes (never a flat slab of solid cells),
        // the rim cells stay round dots (phone: a dotted rim, not a thick square-cell outline)
        e = mix(e, min(e, mix(uECap.x, uECap.y, edge)), step(0.0005, uSweep1) * (1.0 - pre));
        // pixelated reveal: sideways by normal.x, and (fix2) every cell the intro band has already passed, so the colour
        // follows one band rising from the bottom (ref 28.14 -> 28.34 s) instead of scattered cells
        float showIn = max(step(mix(1.5, -0.5, uTransitionPreloader), nd.r),
                           step(0.001, uSweepPreloader) * step(mix(1.5, -0.5, uSweepPreloader) + 0.03 + 0.08 * h, keyI));   // fix4 (G06): + 0.08 h, a ragged cell edge, not a straight line across his face   // check_hero: +0.03 (was +0.1) so the colour starts under the band's fading tail (Lt 0.07); +0.1 left a 3-cell black bar across his eyes behind the band
        // fix2 exit: the photo leaves in whole cells over a short T1 window (uSweepFit.xy: start, length), face front
        // (normal to screen-left) first, ragged; gone before the band reaches the head (ref desktop y 833-919,
        // phone y 537-761)
        float tOut = clamp((uTransition1 - uSweepFit.x) / uSweepFit.y, 0.0, 1.0);
        float kOut = clamp(nd.r * 1.25, 0.0, 1.0) * 0.75 + 0.25 * h;
        float showOut = step(nd.r, mix(1.5, -0.5, uTransition1)) * step(tOut * 1.02, kOut);
        float swept = step(0.0005, uSweep1) * step(front - 0.1, nearS) * step(0.05, nearS);
        float show = min(showIn, showOut) * (1.0 - swept);
        col.a *= show; L *= show;
        col.rgb *= col.a * mix(1.0, 0.8, smoothstep(0.1, 0.4, uTransition1));
        e *= max(show, max(step(0.0005, uSweep1), pre));   // the intro band also covers the cells still in dots
        // fix3: round halftone dots (radius grows with e, ref's look) instead of pixelPass's square with a hole
        vec4 sweep = dotPass(uv, e, uImageAspect);
        col = sweep + col * (1.0 - sweep.a);
        col += vec4(COLOR_HIGHLIGHT * L, L);
        gl_FragColor = col;
      }`}),ue=new _i(w[0],w[1]),q=new mn(ue,Y);q.position.set(A[0],A[1],0),q.renderOrder=0,q.frustumCulled=!1,I.add(q);let le=Ga.has("dots"),ce=new Di(new Uint8Array([255,255,255,255]),1,1);ce.needsUpdate=!0;let Xe=new on(1,1,{depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}),qe=new hs,nt=new gn({uniforms:{uScale:V.uScale,tMask:{value:d},tNormalDepth:V.tNormalDepth,uMouse:a.uMouse,uPlaneAspect:V.uPlaneAspect,uImageAspect:V.uImageAspect,uOn:V.uTransitionPreloader,uOff:{value:0},uFit:D,uPar:B},depthTest:!1,depthWrite:!1,vertexShader:P,fragmentShader:`
      uniform sampler2D tMask, tNormalDepth; uniform vec2 uMouse, uPar; uniform float uPlaneAspect, uImageAspect, uOn, uOff; varying vec2 vUv;
      ${Wr}
      ${L}
      void main(){
        vec2 uv = photoUv(coverUv(vUv, uPlaneAspect, uImageAspect, vec2(0.5)));
        uv += vec2(uMouse.x, -uMouse.y) * smoothstep(0.0, 1.0, 1.0 - texture(tNormalDepth, uv).a) * uPar;
        gl_FragColor = vec4(vec3(texture(tMask, uv).r * uOn * (1.0 - uOff) * photoEdge(uv)), 1.0);   // fix4: uOff, no LED lattice on the exit peach
      }`}),me=new mn(ue,nt);me.position.copy(q.position),me.frustumCulled=!1,qe.add(me),a.uFaceMask.value=le?ce:Xe.texture;let xe=Ot?null:{a:[.475,.324],dt:.1,k:[1,1.02,1.04,1.06,1.1,1.14,1.19,1.28,1.31,1.37,1.42,1.41,1.4,1.43,1.51,1.6,1.65],dx:[-.01,0,.016,.038,.078,.106,.122,.132,.136,.116,.078,.046,.014,-.012,-.068,-.148,-.228],dy:[-.006,-.018,-.042,-.078,-.12,-.168,-.21,-.252,-.294,-.336,-.36,-.372,-.372,-.384,-.396,-.426,-.414]},X=.88,W=[.3,.56],_e=.8,Ce=(Ie,at,bt)=>{let Et=Math.min(1,Math.max(0,(bt-Ie)/(at-Ie)));return Et*Et*(3-2*Et)},N=new ie;function ae(Ie){let at=1,bt=A[0],Et=A[1];if(Ie&&xe){let Mt=Math.min(xe.k.length-1.001,Math.max(0,(Yt.state.videoTime||0)/xe.dt)),_=Math.floor(Mt),F=Mt-_,ee=Gn=>Gn[_]+(Gn[_+1]-Gn[_])*F,Z=ee(xe.k)/xe.k[0],Q=ee(xe.dx)-xe.dx[0],De=ee(xe.dy)-xe.dy[0],ze=a.uAspect.value,Te=a.uVideoAspect.value,Ae=a.uVideoPivot.value,Ge=ze>Te?[1,Te/ze]:[ze/Te,1],ht=a.uScrFrameMix.value,Ke=a.uScrFrame.value,Fe=[(1-ht)*Ge[0]+ht*Ke.x,(1-ht)*Ge[1]+ht*Ke.y],ut=[(1-ht)*Ae.x*(1-Ge[0])+ht*Ke.z,(1-ht)*Ae.y*(1-Ge[1])+ht*Ke.w],Nt=[Ae.x*(1-Ge[0]),Ae.y*(1-Ge[1])],wt=xe.a,tt=[(wt[0]-Nt[0])/Ge[0],(1-wt[1]-Nt[1])/Ge[1]],ot=[(wt[0]+Q-ut[0])/Fe[0],(1-wt[1]-De-ut[1])/Fe[1]];at=Z*Ge[1]/Fe[1];let Re=Yt.state.videoTime||0,zt=at,lt=Ce(.2,.6,Re)*(1-Ce(.85,1.05,Re));at=Math.min(at,1-(1-X)*lt),ot[0]=Math.min(Math.max(ot[0],W[0]),W[1]),ot[1]=Math.min(ot[1],1-(1-_e)*lt),window.__v8.follow={kRaw:+zt.toFixed(3),k:+at.toFixed(3),sx:+ot[0].toFixed(3),sy:+ot[1].toFixed(3)},N.set(0,0,0).project(S);let rn=(N.x+1)/2,An=(N.y+1)/2;N.set(1,1,0).project(S);let Yn=(N.x+1)/2-rn,Ln=(N.y+1)/2-An,Bt=[(tt[0]-rn)/Yn,(tt[1]-An)/Ln],qt=[(ot[0]-rn)/Yn,(ot[1]-An)/Ln];bt=qt[0]+at*(A[0]-Bt[0]),Et=qt[1]+at*(A[1]-Bt[1])}(q.position.x!==bt||q.position.y!==Et)&&(q.position.set(bt,Et,0),me.position.set(bt,Et,0)),V.uScale.value.set(x*at,x*at)}let ye=new Li,K=new Li,pe=new Li;ye.add(K),K.add(pe),I.add(ye);let R=Ot?.2:.233,G=Ot?0:-.5,J=Ot?{y:.05,s:R,rx:.2}:{y:-.75,s:.22,rx:-.2};K.position.set(0,J.y,0),K.scale.setScalar(J.s),K.rotation.set(J.rx,-.56,-.23);let oe={cols:4,rows:2,n:8},Ee={value:zn?1:0},Se={value:zn?1:0},Ve={value:0},C={value:0},Ye=Ie=>new gn({uniforms:{tMap:{value:f},uCell:{value:new Ut},uAlpha:Ie===cn?Ee:Se,uStreak:Ve,uDissolve:C},side:Ie,transparent:!0,premultipliedAlpha:!0,depthTest:Ie===cn,depthWrite:Ie===cn,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform sampler2D tMap; uniform vec4 uCell; uniform float uAlpha, uStreak, uDissolve; varying vec2 vUv;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      vec4 cell(vec2 uv){
        vec2 q = clamp(uv, 0.0, 1.0);
        vec4 c = texture(tMap, uCell.xy + q * uCell.zw);
        c.rgb *= c.a;
        return c * step(abs(uv.x - 0.5), 0.5);
      }
      void main(){
        // back faces read mirrored otherwise; flip so the far cards' numbers still read the right way round
        vec2 uv = gl_FrontFacing ? vUv : vec2(1.0 - vUv.x, vUv.y);
        vec4 c;
        if (uStreak < 0.002) c = cell(uv);
        else {
          // motion streak along the card's travel (the ring's tangent = the card's own x), 12 taps, tails fade
          c = vec4(0.0); float wsum = 0.0;
          for (int i = 0; i < 12; i++) {
            float t = float(i) / 11.0, w = 1.0 - 0.6 * t;
            c += cell(uv + vec2(t * uStreak, 0.0)) * w; wsum += w;
          }
          c /= wsum;
        }
        // the swing ends with the cards breaking into pixel blocks (their video 1.9 to 2.2 s)
        if (uDissolve > 0.0) {
          vec2 b = floor(uv * vec2(18.0, 12.0));
          float h = hash(b + floor(gl_FragCoord.xy / 4096.0));
          c *= step(uDissolve, h * 0.999);
          c.rgb *= 1.0 + 1.5 * step(uDissolve - 0.12, h) * step(h, uDissolve + 0.1) * step(0.001, uDissolve);
        }
        gl_FragColor = c * uAlpha;
      }`}),Be=new _i(2.599,1.733),E=[];for(let Ie=-150;Ie<=180;Ie+=30)(Ie+360)/30%2===1?E.push([Ie,1.266],[Ie,-1.266]):E.push([Ie,0]);for(let Ie of[cn,Zi])E.forEach(([at,bt],Et)=>{let Mt=Et%oe.n,_=Ye(Ie);_.uniforms.uCell.value.set(Mt%oe.cols/oe.cols,1-(Math.floor(Mt/oe.cols)+1)/oe.rows,1/oe.cols,1/oe.rows);let F=new mn(Be,_),ee=Ua.degToRad(at);F.position.set(Math.cos(ee)*6.5,bt,Math.sin(ee)*6.5),F.lookAt(0,bt,0),F.rotateY(Math.PI),F.renderOrder=Ie===cn?-1:1,F.frustumCulled=!1,pe.add(F)});let g=1.6,k={tDiffuse:{value:v},uRect:{value:new Ut(0,0,1,1)},uEye:{value:new mt(.5,.5)},uPlaneAspect:V.uPlaneAspect,uImageAspect:{value:v.image.width/v.image.height},uResolution:a.uResolution,uDpr:a.uDpr,uZoom:{value:g},uZoom0:{value:g},uBlur:{value:1},uRise:{value:0},uOpacity:{value:1},uFit:D,uGain:{value:1/(1+.45)}},j="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy * 2.0, 0.0, 1.0); }",se=`
    uniform sampler2D tDiffuse; uniform vec4 uRect; uniform vec2 uEye, uResolution;
    uniform float uPlaneAspect, uImageAspect, uDpr, uZoom, uZoom0, uBlur, uRise, uOpacity, uGain;
    varying vec2 vUv;
    ${Wr}
    ${L}
    vec4 photo(vec2 s){
      vec2 b = (s - uRect.xy) / uRect.zw;                       // screen uv -> billboard uv
      if (b.x < 0.0 || b.y < 0.0 || b.x > 1.0 || b.y > 1.0) return vec4(0.0);
      vec2 p = photoUv(coverUv(b, uPlaneAspect, uImageAspect, vec2(0.5)));
      vec4 c = texture(tDiffuse, p);
      c.a *= photoEdge(p);
      return vec4(c.rgb * c.a, c.a);
    }
    void main(){
      // zoom about the eye; as the zoom grows the eye also slides to the centre of the screen (in step with log zoom)
      float k = clamp(log(max(uZoom, 1.0)) / log(max(uZoom0, 1.0001)), 0.0, 1.0);
      vec2 c = mix(uEye, vec2(0.5), k);
      vec4 col = vec4(0.0);
      vec2 r = uBlur * 20.0 * uDpr / uResolution;               // about 20 css px of blur at uBlur 1
      for (int i = 0; i < 12; i++) {
        float a = float(i) * 2.39996, rr = sqrt((float(i) + 0.5) / 12.0);
        vec2 p = vUv + vec2(cos(a), sin(a)) * rr * r;
        col += photo(uEye + (p - c) / uZoom);
      }
      col /= 12.0;
      gl_FragColor = vec4(col.rgb * uGain, col.a) * uRise * uOpacity;
    }`,fe=Ie=>new gn({uniforms:Ie,vertexShader:j,fragmentShader:se,transparent:!0,premultipliedAlpha:!0,depthTest:!1,depthWrite:!1}),we=new _i(1,1),te=new mn(we,fe(k));te.frustumCulled=!1,te.renderOrder=-2,I.add(te);let re={...k,uZoom:{value:1},uBlur:{value:0},uRise:{value:1},uOpacity:{value:1},uGain:{value:1}},be=null;if(!zn&&!Ga.has("noclip"))try{let Ie=document.createElement("video"),at=Ju+"soumil_loader_turn"+(Ot?"":"_m")+(Ie.canPlayType('video/webm; codecs="vp9"')?".webm":".mp4"),bt=new AbortController,Et=setTimeout(()=>bt.abort(),900),Mt=await fetch(at,{signal:bt.signal});if(Mt.ok){let _=document.createElement("video");_.muted=!0,_.playsInline=!0,_.setAttribute("muted",""),_.setAttribute("playsinline",""),_.preload="auto",_.src=URL.createObjectURL(await Mt.blob()),await new Promise((ee,Z)=>{_.addEventListener("loadeddata",ee,{once:!0}),_.addEventListener("error",Z,{once:!0}),_.play().then(()=>_.pause()).catch(()=>{})}),_.pause(),_.currentTime=0;let F=new Ks(_);F.colorSpace=nn,F.minFilter=F.magFilter=Lt,F.generateMipmaps=!1,re.tDiffuse={value:F},re.uImageAspect={value:_.videoWidth/_.videoHeight},be=_}clearTimeout(Et)}catch{be=null}let je=new mn(we,fe(re));je.frustumCulled=!1;let Ne=new hs;Ne.add(je);let Le=new on(1,1,{depthBuffer:!1,stencilBuffer:!1,generateMipmaps:!1}),Qe=new fs,it=new mt(.4309,.6777);function ft(){S.updateMatrixWorld();let Ie=x*w[0]/2,at=x*w[1]/2,bt=new ie(A[0]-Ie,A[1]-at,0).project(S),Et=new ie(A[0]+Ie,A[1]+at,0).project(S),Mt=(bt.x+1)/2,_=(bt.y+1)/2,F=(Et.x+1)/2,ee=(Et.y+1)/2;k.uRect.value.set(Mt,_,F-Mt,ee-_);let Z=w[0]/w[1],Q=Z>m?[1,m/Z]:[Z/m,1],De=(it.x-.5-M[1])*M[0]+.5,ze=(it.y-.5-M[2])*M[0]+.5,Te=(De-.5)/Q[0]+.5,Ae=(ze-.5)/Q[1]+.5;k.uEye.value.set(Mt+Te*(F-Mt),_+Ae*(ee-_))}function H(){let[Ie,at]=t();sn.setSize(Ie,at,!1),r.setSize(Ie,at),b(Ie,at);let bt=a.uResolution.value.x,Et=a.uResolution.value.y;Xe.setSize(Math.max(1,bt>>2),Math.max(1,Et>>2)),Le.setSize(Math.max(1,bt>>1),Math.max(1,Et>>1)),ft(),Me&&(a.uVideoAspect.value=Ie/at)}let Me=!zn;H();let de={grid:a.uGridOpacity.value,fog:a.uFogStrength.value};Me&&(a.uGridOpacity.value=0,a.uFogStrength.value=0);let Ue=0;addEventListener("resize",()=>{clearTimeout(Ue),Ue=setTimeout(H,60)});let ke=16/9;Yt.ready.then(Ie=>{if(Ie){ke=(Ie.main.videoWidth||16)/(Ie.main.videoHeight||9),a.tVideoHQ.value=Ie.hqTexture;try{for(let at of[Qu.value,Ie.hqTexture])at&&at.image&&at.image.readyState>=2&&sn.initTexture(at)}catch{}}}).catch(()=>{});let ve=()=>{Me=!1,a.uVideoAspect.value=ke,a.uVideoPivot.value.set(.5,Ot?1:.5),a.uVideoOffset.value.set(0,0),te.visible=!1};Me?(a.uVideo.value=Le.texture,a.uVideoAspect.value=a.uAspect.value,a.uVideoPivot.value.set(.5,.5)):(a.uPreloaderOpacity.value=1,a.uTransitionPreloader.value=1,ve());let et=new mt;Yf||addEventListener("pointermove",Ie=>et.set(Ie.clientX/innerWidth*2-1,-(Ie.clientY/innerHeight*2-1)),{passive:!0}),r.compile(I,S),sn.compile(qe,S),sn.compile(Ne,Qe),await Promise.race([document.fonts.ready,Ay(3)]);let Ze=document.getElementById("darkRun"),Rt=e.parentElement,pt=0,Vt=()=>{pt=Ze.offsetTop+Ze.offsetHeight};Vt(),addEventListener("resize",Vt),window.ScrollTrigger?.addEventListener("refresh",Vt);let Jt=0,Si=Ie=>Yt.segments.find(at=>at.id===Ie),Kn=Si("A"),vn=Si("B"),Jn=Si("C"),In={v:0,wait:0},Hn={v:0},es=Ie=>(Ie=Math.min(1,Math.max(0,Ie)),Ie*Ie*Ie*(Ie*(Ie*6-15)+10)),un=(Ie,at,bt)=>{let Et=Math.min(1,Math.max(0,(bt-Ie)/(at-Ie)));return Et*Et*(3-2*Et)};$r.ticker.add((Ie,at)=>{let bt=Math.min(at/1e3,.03333333333333333),Et=Math.min(at/1e3,.25);zn||(Jt+=bt),Yf||a.uMouse.value.lerp(et,1-Math.exp(-10*bt));let Mt=Yt.lenis?Yt.lenis.animatedScroll:scrollY,_=Yt.state.videoTime||0,F=!vn||Mt<vn.start,ee=F&&!zn?un(.5,1.4,_)*(1-un(2.25,2.55,_)):0,Z=Math.min(1,Math.max(0,(_-1.25)/1.25)),Q=F?es(Z):0;if(pe.rotation.y=Jt*.1+Xa.uCardsSpin.value-Q*1.6,K.scale.setScalar(J.s*(1+.9*Q)),K.position.y=J.y,K.rotation.x=J.rx,Ve.value=ee>.001?.3*30*Z*Z*(1-Z)*(1-Z)/1.9:0,C.value=0,ye.rotation.y=a.uMouse.value.x*.1,ye.rotation.x=a.uMouse.value.y*.05,Ee.value=Math.max(Ku.cardsIn.value*Xa.uCardsFade.value,ee*.8*(1-un(1.2,1.7,_))),Se.value=Math.max(Ee.value,ee),Kn&&vn&&Jn){let Ke=(Mt-Kn.start)/Math.max(1,Kn.end-Kn.start);Mt>=vn.start+1?In.v=1:Mt>=Kn.end-1?In.v=Math.min(1,Math.max(In.v,.29)+Et*.33):Ke>=.83?In.v=.215+.075*Math.min(1,(Ke-.83)/.12):In.v=0;let Fe=(Mt-Jn.start)/Math.max(1,Jn.end-Jn.start);if(Hn.v=Mt>=Jn.start+1?Math.min(1,(Ot?.2:.28)+(Ot?3.4:4.8)*Math.max(0,Fe)):0,a.uSweep3.value=In.v,a.uSweep5.value=Hn.v,Mt>vn.start&&Mt<vn.end){let Nt=(Mt-vn.start)/Math.max(1,vn.end-vn.start),wt=Ot?[[0,0],[.2,0],[.26,.215],[.4,.3],[.48,.36],[.737,.78],[1,.95]]:[[0,0],[.45,.5],[.573,.69],[.697,.72],[.834,.82],[1,1]],tt=1;for(let ot=1;ot<wt.length;ot++)if(Nt<=wt[ot][0]){let[Re,zt]=wt[ot-1],[lt,rn]=wt[ot];tt=zt+(rn-zt)*(Nt-Re)/(lt-Re);break}a.uSweep4.value=tt}let ut=Mt>vn.start&&Mt<vn.end;window.__v8.sweepActive=In.v>0&&In.v<1||ut||Hn.v>0&&Hn.v<1}p.p3&&(a.tCarDepth.value=Math.round(Yt.state.heroFrameIndex)>=3?p.p4:p.p3),Me||(a.uVideo.value=Qu.value||r.textures.black);let De=Yt.stills[Math.round(Yt.state.heroFrameIndex)],ze=Yt.video?.texture?.presented,Te=!1;if(ze&&ze.mediaTime>=0&&!Me&&a.uHQMix.value<.01){let Ke=Yt.state.videoTime,Fe=Ke>=10.6?3:Ke>=8.6?2:Ke>=2.3&&Ke<=3.95?0:-1,ut=Math.abs(ze.mediaTime-Ke)>.45;ut&&Fe>=0&&Yt.stills[Fe]&&(De=Yt.stills[Fe],Te=!0),window.__v8.videoLag=ut?+(ze.mediaTime-Ke).toFixed(2):0}if(De){a.tRest.value=De;let Ke=De.image;Ke&&Ke.width&&(a.uRestAspect.value=Ke.width/Ke.height)}if(a.uWheel.value=T&&Math.round(Yt.state.heroFrameIndex)===2?a.T7.value*(1-a.uVideoTransition.value):0,Mt>pt){window.__v8.glCulled=!0;return}window.__v8.glCulled=!1,o?.update(),Te&&(a.uVideoTransition.value=0,a.uScrRestVideo.value=0),ae(!Me&&F&&!zn);{let Ke=V.uSweepFit.value,Fe=un(Ke.x+Ke.y*.5,Ke.x+Ke.y,a.T1.value)*(F?1:0);a.uDotsUnder.value=Fe,nt.uniforms.uOff.value=Fe,a.uDotsDim.value=Ot?0:.75*Fe*(1-un(.8,1,_))}let Ae=!o&&!!(window.__v8.glCovered&&window.__v8.sweepActive&&a.uDepthOn.value>.5);if(window.__v8.glCovered&&!Ae){Rt.style.zIndex&&(Rt.style.zIndex="");return}a.uOverlay.value=Ae?1:0;let Ge=!Me&&a.T1.value>=1&&Xa.uSweep1.value>=1&&Ee.value<=0&&Se.value<=0;r.sceneEmpty=Ge,a.uSceneOn.value=Ge?0:1,Me&&(sn.setRenderTarget(Le),sn.setClearColor(0,0),sn.clear(),sn.render(Ne,Qe)),!le&&!Ge&&(sn.setRenderTarget(Xe),sn.setClearColor(0,1),sn.clear(),sn.render(qe,S)),sn.setRenderTarget(null),r.render(I,S);let ht=Ae?"2":"";Rt.style.zIndex!==ht&&(Rt.style.zIndex=ht),ms(at)});let $n=sn.getPixelRatio(),oi=0,li=0,Bi=0;window.__v8.dpr=$n;function ms(Ie){Me||zn||Ga.has("fixeddpr")||!Yt.snapping||(Ie>0&&Ie<250&&(oi+=Ie,li++),li>=48&&(oi/li>26&&$n>1&&(Bi=Math.max(1,$n-.25)),oi=0,li=0))}$r.ticker.add(()=>{!Bi||Yt.snapping||($n=Bi,Bi=0,window.__v8.dpr=$n,sn.setPixelRatio($n),H())});let ts=0;if(document.addEventListener("visibilitychange",()=>{document.hidden?ts=performance.now():ts&&performance.now()-ts>300*1e3&&location.reload()}),Object.assign(window.__v8,{post:r,scene:I,camera:S,manMat:Y,loaderU:k,hold:Ku,loaderClip:be,ring:J}),Object.defineProperty(window.__v8,"cardInset",{get:()=>r.cardInset,configurable:!0}),zn){Wa.remove(),Fs.classList.remove("loading"),Kf();return}await gs();async function gs(){await new Promise(ut=>requestAnimationFrame(()=>requestAnimationFrame(ut))),await n,window.__startWriting?.(),await Ry;let Ie=parseFloat(getComputedStyle(tc).fontSize),bt=1/(parseFloat(getComputedStyle(Wa).getPropertyValue("--k"))||2.2),Et=Ie*.5,Mt=tc.getBoundingClientRect(),_=document.querySelector(".pill-logo")?.getBoundingClientRect(),F=_&&_.width?_.left+12:innerWidth*.032,ee=_&&_.height?_.top+_.height/2:Ot?42:31,Z=F-(Mt.left+Et*bt),Q=ee-(Mt.top+Mt.height/2),De={v:Math.log(g)};performance.mark("v8:flight"),k.uOpacity.value=0;let ze=$r.timeline();ze.to(tc,{x:Z,y:Q,scale:bt,duration:1.475,ease:"expo.inOut"},0).to(Cy,{autoAlpha:0,duration:.5,ease:"power2.inOut"},0).to(k.uRise,{value:1,duration:1.075,ease:"power2.inOut"},.25).to(k.uBlur,{value:0,duration:1.1,ease:"power1.inOut"},.25).to(a.uGridOpacity,{value:de.grid,duration:1.075,ease:"power2.inOut"},.25).to(a.uFogStrength,{value:de.fog,duration:1.075,ease:"power2.inOut"},.25).to(De,{v:0,duration:1.75,ease:"power2.inOut",onUpdate:()=>{k.uZoom.value=Math.exp(De.v)}},1.13);let Te=$r.timeline({defaults:{ease:"none"}});be&&(Te.add(()=>{let ut=Math.max(0,Math.min(1,be.duration||1)-.01);be.play().catch(()=>{let Nt={t:0},wt=0,tt=()=>{!be.seeking&&Math.abs(be.currentTime-wt)>.001&&(be.currentTime=wt)};be.addEventListener("seeked",tt),$r.to(Nt,{t:ut,duration:1,ease:"none",onUpdate:()=>{wt=Nt.t,tt()}})})},.9),Ot&&a.uVideoOffset.value.set(.0125,0)),Te.to(a.uPreloaderOpacity,{value:1,duration:.6},0).to(k.uOpacity,{value:0,duration:.6},0).fromTo(V.uSweepPreloader,{value:.2},{value:1,duration:.7,immediateRender:!1},.62).to(V.uTransitionPreloader,{value:1,duration:.45},.87).to(Ku.cardsIn,{value:1,duration:.5},.87).to(a.uTransitionPreloader,{value:1,duration:.25},1.02).add(ve,1.32).to(tc,{scale:0,duration:.45,ease:"expo.inOut"},.2).add(()=>{Fs.classList.remove("loading"),Wa.style.display="none"},.65).fromTo(["#nav","#rail"],{autoAlpha:0},{autoAlpha:1,duration:.6,ease:"power1.out"},.65);let Ae=[1,2,3].map(ut=>[...document.querySelectorAll(`[data-intro="${ut}"]`)].filter(Nt=>Nt!==Tn)),Ge=Tn?Tn.querySelectorAll(".gc").length:1,Ke=[.87,.92,.92+Math.max(.8,.8+.015*(Ge-1))-.4];Te.add(()=>Fs.classList.add("is-ready"),Ke[0]);let Fe=()=>{Tn.animate&&(Tn.style.animation="none",Tn.animate([{filter:"blur(0.16em)"},{filter:"blur(0.12em)",offset:.3},{filter:"blur(0.05em)",offset:.62},{filter:"blur(0.012em)",offset:.88},{filter:"blur(0)"}],{duration:1400,easing:"linear",fill:"backwards"}))};if(Tn&&Te.set(Tn,{autoAlpha:1},Ke[1]).add(()=>{Tn.classList.add("is-revealing"),Fe()},Ke[1]),Ae.forEach((ut,Nt)=>ut.length&&Te.fromTo(ut,{autoAlpha:0,yPercent:100,filter:"blur(8px)"},{autoAlpha:1,yPercent:0,filter:"blur(0px)",duration:.8,ease:Ty,clearProps:"filter,transform"},Ke[Nt])),ze.add(Te,1).add(()=>performance.mark("v8:handoff"),1),await ze.then(),performance.mark("v8:intro-end"),be){let ut=be.currentSrc||be.src;re.tDiffuse.value?.dispose?.(),be.pause(),be.removeAttribute("src"),be.load(),ut&&ut.startsWith("blob:")&&URL.revokeObjectURL(ut)}Wa.remove(),$r.set(["#nav","#rail"],{clearProps:"opacity,visibility"}),Yt.start()}}
