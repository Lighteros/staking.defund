"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1412],{61412:function(t,e,n){n.r(e),n.d(e,{default:function(){return Index}});var o=n(18140),i=n(53109),r=n(80095),a=n(79401),l=n(15022);function flip(t,{from:e,to:n},i={}){let r=getComputedStyle(t),a="none"===r.transform?"":r.transform,[l,s]=r.transformOrigin.split(" ").map(parseFloat),c=e.left+e.width*l/n.width-(n.left+l),d=e.top+e.height*s/n.height-(n.top+s),{delay:f=0,duration:p=t=>120*Math.sqrt(t),easing:v=o.an}=i;return{delay:f,duration:(0,o.Z)(p)?p(Math.sqrt(c*c+d*d)):p,easing:v,css:(t,o)=>{let i=t+o*e.width/n.width,r=t+o*e.height/n.height;return`transform: ${a} translate(${o*c}px, ${o*d}px) scale(${i}, ${r});`}}}function add_css$5(t){(0,o.a)(t,"svelte-13cuwwo","div.svelte-13cuwwo{box-sizing:content-box}.border.svelte-13cuwwo{border:2px solid;border-radius:120px;overflow:hidden}")}function create_fragment$5(t){let e,n;return{c(){e=(0,o.j)("div"),(0,o.k)(e,"class","border svelte-13cuwwo"),(0,o.k)(e,"style",n=`
    width: ${t[2]-2*t[3]}px; 
    height: ${t[2]-2*t[3]}px; 
    border-color: var(${t[1]}); 
    padding: ${t[3]}px; 
    background-color: #000644;
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `)},m(n,i){(0,o.b)(n,e,i),e.innerHTML=t[0]},p(t,[i]){1&i&&(e.innerHTML=t[0]),30&i&&n!==(n=`
    width: ${t[2]-2*t[3]}px; 
    height: ${t[2]-2*t[3]}px; 
    border-color: var(${t[1]}); 
    padding: ${t[3]}px; 
    background-color: #000644;
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `)&&(0,o.k)(e,"style",n)},i:o.n,o:o.n,d(t){t&&(0,o.d)(e)}}}function instance$5(t,e,n){let{icon:o}=e,{borderColorVar:i}=e,{size:r}=e,{padding:a=0}=e,{background:l="transparent"}=e;return t.$$set=t=>{"icon"in t&&n(0,o=t.icon),"borderVar"in t&&n(1,i=t.borderColorVar),"size"in t&&n(2,r=t.size),"padding"in t&&n(3,a=t.padding),"background"in t&&n(4,l=t.background)},[o,i,r,a,l]}n(51206),n(42705),n(96331),n(70794),n(79268),n(46748),n(72378),n(25329);let ChainBadge=class ChainBadge extends o.S{constructor(t){super(),(0,o.i)(this,t,instance$5,create_fragment$5,o.s,{icon:0,borderColorVar:1,size:2,padding:3,background:4},add_css$5)}};function add_css$4(t){(0,o.a)(t,"svelte-jvic9v","div.notification-icons-wrapper.svelte-jvic9v{height:32px;width:32px}.border.svelte-jvic9v{border-radius:8px}div.notification-icon.svelte-jvic9v{padding:6px}div.pending-icon.svelte-jvic9v{animation:svelte-jvic9v-blink 2s ease-in infinite;height:100%;width:100%;padding:7px}@keyframes svelte-jvic9v-blink{from,to{opacity:1}50%{opacity:0.2}}div.border-action.svelte-jvic9v{height:32px;min-width:32px;border-radius:8px;overflow:hidden;will-change:transform}div.border-action.svelte-jvic9v:before{content:'';background-image:conic-gradient(#b1b7f2 20deg, #6370e5 120deg);height:140%;width:140%;position:absolute;left:-25%;top:-25%;animation:svelte-jvic9v-rotate 2s infinite linear}div.chain-icon-container.svelte-jvic9v{left:18px;top:18px}@keyframes svelte-jvic9v-rotate{100%{transform:rotate(-360deg)}}")}function create_if_block$4(t){let e,n,i,r,a,l,s,c;let d=o.ao[t[1].type].eventIcon+"",f=!t[1].id.includes("customNotification")&&!t[1].id.includes("preflight"),p="pending"===t[1].type&&create_if_block_2(),v=f&&create_if_block_1$1(t);return{c(){e=(0,o.j)("div"),p&&p.c(),n=(0,o.G)(),i=(0,o.j)("div"),r=(0,o.j)("div"),s=(0,o.G)(),v&&v.c(),(0,o.k)(r,"class",a=(0,o.l)(`notification-icon flex items-center justify-center ${"pending"===t[1].type?"pending-icon":""}`)+" svelte-jvic9v"),(0,o.k)(i,"class","flex items-center justify-center border relative notification-icons-wrapper svelte-jvic9v"),(0,o.k)(i,"style",l=`background:${o.ao[t[1].type].backgroundColor}; color: ${o.ao[t[1].type].iconColor||""}; ${"pending"===t[1].type?"height: 28px; width: 28px; margin: 2px;":`border: 2px solid ${o.ao[t[1].type].borderColor}`}; `),(0,o.k)(e,"class","relative")},m(t,a){(0,o.b)(t,e,a),p&&p.m(e,null),(0,o.m)(e,n),(0,o.m)(e,i),(0,o.m)(i,r),r.innerHTML=d,(0,o.m)(e,s),v&&v.m(e,null),c=!0},p(t,s){"pending"===t[1].type?p||((p=create_if_block_2()).c(),p.m(e,n)):p&&(p.d(1),p=null),(!c||2&s)&&d!==(d=o.ao[t[1].type].eventIcon+"")&&(r.innerHTML=d),(!c||2&s&&a!==(a=(0,o.l)(`notification-icon flex items-center justify-center ${"pending"===t[1].type?"pending-icon":""}`)+" svelte-jvic9v"))&&(0,o.k)(r,"class",a),(!c||2&s&&l!==(l=`background:${o.ao[t[1].type].backgroundColor}; color: ${o.ao[t[1].type].iconColor||""}; ${"pending"===t[1].type?"height: 28px; width: 28px; margin: 2px;":`border: 2px solid ${o.ao[t[1].type].borderColor}`}; `))&&(0,o.k)(i,"style",l),2&s&&(f=!t[1].id.includes("customNotification")&&!t[1].id.includes("preflight")),f?v?(v.p(t,s),2&s&&(0,o.x)(v,1)):((v=create_if_block_1$1(t)).c(),(0,o.x)(v,1),v.m(e,null)):v&&((0,o.y)(),(0,o.A)(v,1,1,()=>{v=null}),(0,o.z)())},i(t){c||((0,o.x)(v),c=!0)},o(t){(0,o.A)(v),c=!1},d(t){t&&(0,o.d)(e),p&&p.d(),v&&v.d()}}}function create_if_block_2(t){let e;return{c(){e=(0,o.j)("div"),(0,o.k)(e,"class","border-action absolute svelte-jvic9v")},m(t,n){(0,o.b)(t,e,n)},d(t){t&&(0,o.d)(e)}}}function create_if_block_1$1(t){let e,n,i;return n=new ChainBadge({props:{icon:t[0].icon,size:16,background:t[0].color,borderColorVar:"--notify-onboard-background, var(--onboard-gray-600, var(--gray-600))",padding:3}}),{c(){e=(0,o.j)("div"),(0,o.F)(n.$$.fragment),(0,o.k)(e,"class","absolute chain-icon-container svelte-jvic9v")},m(t,r){(0,o.b)(t,e,r),(0,o.I)(n,e,null),i=!0},p(t,e){let o={};1&e&&(o.icon=t[0].icon),1&e&&(o.background=t[0].color),n.$set(o)},i(t){i||((0,o.x)(n.$$.fragment,t),i=!0)},o(t){(0,o.A)(n.$$.fragment,t),i=!1},d(t){t&&(0,o.d)(e),(0,o.K)(n)}}}function create_fragment$4(t){let e,n;let i=t[1].type&&create_if_block$4(t);return{c(){i&&i.c(),e=(0,o.e)()},m(t,r){i&&i.m(t,r),(0,o.b)(t,e,r),n=!0},p(t,[n]){t[1].type?i?(i.p(t,n),2&n&&(0,o.x)(i,1)):((i=create_if_block$4(t)).c(),(0,o.x)(i,1),i.m(e.parentNode,e)):i&&((0,o.y)(),(0,o.A)(i,1,1,()=>{i=null}),(0,o.z)())},i(t){n||((0,o.x)(i),n=!0)},o(t){(0,o.A)(i),n=!1},d(t){i&&i.d(t),t&&(0,o.d)(e)}}}function instance$4(t,e,n){let{chainStyles:i=o.a6}=e,{notification:r}=e;return t.$$set=t=>{"chainStyles"in t&&n(0,i=t.chainStyles),"notification"in t&&n(1,r=t.notification)},[i,r]}let StatusIconBadge=class StatusIconBadge extends o.S{constructor(t){super(),(0,o.i)(this,t,instance$4,create_fragment$4,o.s,{chainStyles:0,notification:1},add_css$4)}};function add_css$3(t){(0,o.a)(t,"svelte-pm7idu","div.svelte-pm7idu{display:flex;justify-content:center;font-size:inherit;font-family:inherit;margin:0 1.5rem 0 0.75rem}span.svelte-pm7idu{font-family:inherit;display:flex;align-items:center;margin:0 2px}.time.svelte-pm7idu{color:var(\n      --notify-onboard-timer-color,\n      var(--onboard-gray-300, var(--gray-300))\n    );margin-left:4px}")}function create_if_block$3(t){let e,n,i,r;let a=t[2](t[1]-t[0])+"";return{c(){e=(0,o.t)("-\n    "),n=(0,o.j)("span"),i=(0,o.t)(a),r=(0,o.t)("\n    ago"),(0,o.k)(n,"class","svelte-pm7idu")},m(t,a){(0,o.b)(t,e,a),(0,o.b)(t,n,a),(0,o.m)(n,i),(0,o.b)(t,r,a)},p(t,e){3&e&&a!==(a=t[2](t[1]-t[0])+"")&&(0,o.v)(i,a)},d(t){t&&(0,o.d)(e),t&&(0,o.d)(n),t&&(0,o.d)(r)}}}function create_fragment$3(t){let e;let n=t[0]&&create_if_block$3(t);return{c(){e=(0,o.j)("div"),n&&n.c(),(0,o.k)(e,"class","time svelte-pm7idu")},m(t,i){(0,o.b)(t,e,i),n&&n.m(e,null)},p(t,[o]){t[0]?n?n.p(t,o):((n=create_if_block$3(t)).c(),n.m(e,null)):n&&(n.d(1),n=null)},i:o.n,o:o.n,d(t){t&&(0,o.d)(e),n&&n.d()}}}function instance$3(t,e,n){let r,a;(0,o.c)(t,i._,t=>n(3,r=t)),(0,o.c)(t,i.SP,t=>n(4,a=t));let{startTime:l}=e,s=Date.now(),c=setInterval(()=>{n(1,s=Date.now())},1e3);return(0,o.al)(()=>{clearInterval(c)}),t.$$set=t=>{"startTime"in t&&n(0,l=t.startTime)},[l,s,function(t){let e=Math.floor(t/1e3),n=e<0?0:e;return n>=60?`${Math.floor(n/60).toLocaleString(a)} ${r("notify.time.minutes")}`:`${n.toLocaleString(a)} ${r("notify.time.seconds")}`}]}let Timer=class Timer extends o.S{constructor(t){super(),(0,o.i)(this,t,instance$3,create_fragment$3,o.s,{startTime:0},add_css$3)}};function add_css$2(t){(0,o.a)(t,"svelte-1otz6tt","div.notify-transaction-data.svelte-1otz6tt{font-size:var(\n      --notify-onboard-transaction-font-size,\n      var(--onboard-font-size-6, var(--font-size-6))\n    );font-family:inherit;margin:0px 20px 0px 8px;justify-content:center}.hash-time.svelte-1otz6tt{display:inline-flex;margin-top:4px;font-size:var(\n      --notify-onboard-hash-time-font-size,\n      var(--onboard-font-size-7, var(--font-size-7))\n    );line-height:var(\n      --notify-onboard-hash-time-font-line-height,\n      var(--onboard-font-line-height-4, var(--font-line-height-4))\n    )}.address-hash.svelte-1otz6tt{color:var(\n      --notify-onboard-address-hash-color,\n      var(--onboard-primary-200, var(--primary-200))\n    )}a.address-hash.svelte-1otz6tt{color:var(\n      --notify-onboard-anchor-color,\n      var(--onboard-primary-400, var(--primary-400))\n    )}a.svelte-1otz6tt{display:flex;text-decoration:none;color:inherit}.transaction-status.svelte-1otz6tt{color:var(--notify-onboard-transaction-status, inherit);line-height:var(\n      --notify-onboard-font-size-5,\n      var(--onboard-font-size-5, var(--font-size-5))\n    );font-weight:400;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}")}function create_if_block$2(t){let e,n,i,r;let a=t[0].link?create_if_block_1:create_else_block,l=a(t);return i=new Timer({props:{startTime:t[0].startTime}}),{c(){e=(0,o.j)("span"),l.c(),n=(0,o.G)(),(0,o.F)(i.$$.fragment),(0,o.k)(e,"class","hash-time svelte-1otz6tt")},m(t,a){(0,o.b)(t,e,a),l.m(e,null),(0,o.m)(e,n),(0,o.I)(i,e,null),r=!0},p(t,o){a===(a=t[0].link?create_if_block_1:create_else_block)&&l?l.p(t,o):(l.d(1),(l=a(t))&&(l.c(),l.m(e,n)));let r={};1&o&&(r.startTime=t[0].startTime),i.$set(r)},i(t){r||((0,o.x)(i.$$.fragment,t),r=!0)},o(t){(0,o.A)(i.$$.fragment,t),r=!1},d(t){t&&(0,o.d)(e),l.d(),(0,o.K)(i)}}}function create_else_block(t){let e,n;let i=(0,o.E)(t[0].id)+"";return{c(){e=(0,o.j)("div"),n=(0,o.t)(i),(0,o.k)(e,"class","address-hash svelte-1otz6tt")},m(t,i){(0,o.b)(t,e,i),(0,o.m)(e,n)},p(t,e){1&e&&i!==(i=(0,o.E)(t[0].id)+"")&&(0,o.v)(n,i)},d(t){t&&(0,o.d)(e)}}}function create_if_block_1(t){let e,n,i;let r=(0,o.E)(t[0].id)+"";return{c(){e=(0,o.j)("a"),n=(0,o.t)(r),(0,o.k)(e,"class","address-hash svelte-1otz6tt"),(0,o.k)(e,"href",i=t[0].link),(0,o.k)(e,"target","_blank"),(0,o.k)(e,"rel","noreferrer noopener")},m(t,i){(0,o.b)(t,e,i),(0,o.m)(e,n)},p(t,a){1&a&&r!==(r=(0,o.E)(t[0].id)+"")&&(0,o.v)(n,r),1&a&&i!==(i=t[0].link)&&(0,o.k)(e,"href",i)},d(t){t&&(0,o.d)(e)}}}function create_fragment$2(t){let e,n,i,r,a;let l=t[0].message+"",s=t[0].id&&!t[0].id.includes("customNotification")&&!t[0].id.includes("preflight"),c=s&&create_if_block$2(t);return{c(){e=(0,o.j)("div"),n=(0,o.j)("span"),i=(0,o.t)(l),r=(0,o.G)(),c&&c.c(),(0,o.k)(n,"class","transaction-status svelte-1otz6tt"),(0,o.k)(e,"class","flex flex-column notify-transaction-data svelte-1otz6tt")},m(t,l){(0,o.b)(t,e,l),(0,o.m)(e,n),(0,o.m)(n,i),(0,o.m)(e,r),c&&c.m(e,null),a=!0},p(t,[n]){(!a||1&n)&&l!==(l=t[0].message+"")&&(0,o.v)(i,l),1&n&&(s=t[0].id&&!t[0].id.includes("customNotification")&&!t[0].id.includes("preflight")),s?c?(c.p(t,n),1&n&&(0,o.x)(c,1)):((c=create_if_block$2(t)).c(),(0,o.x)(c,1),c.m(e,null)):c&&((0,o.y)(),(0,o.A)(c,1,1,()=>{c=null}),(0,o.z)())},i(t){a||((0,o.x)(c),a=!0)},o(t){(0,o.A)(c),a=!1},d(t){t&&(0,o.d)(e),c&&c.d()}}}function instance$2(t,e,n){let{notification:o}=e;return t.$$set=t=>{"notification"in t&&n(0,o=t.notification)},[o]}let NotificationContent=class NotificationContent extends o.S{constructor(t){super(),(0,o.i)(this,t,instance$2,create_fragment$2,o.s,{notification:0},add_css$2)}};var s=`
<svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>
</svg>
`;let c=["txPool"],d=["main","matic-main"],f=["Ledger","Trezor","Keystone","KeepKey","D'CENT"],actionableEventCode=t=>c.includes(t),validGasNetwork=t=>d.includes(t),walletSupportsReplacement=t=>t&&f.includes(t.label);async function replaceTransaction({type:t,wallet:e,transaction:n}){let{from:i,input:r,value:a,to:s,nonce:c,gas:d,network:f}=n,p=o.ap[f],{gasPriceProbability:v}=o.a3.get().notify.replacement,{gas:u,apiKey:m}=o.af,[b]=await u.get({chains:[o.ap[f]],endpoint:"blockPrices",apiKey:m}),{maxFeePerGas:y,maxPriorityFeePerGas:h}=b.blockPrices[0].estimatedPrices.find(({confidence:e})=>e===("speedup"===t?v.speedup:v.cancel)),k=(0,o.aq)(y),g=(0,o.aq)(h);return e.provider.request({method:"eth_sendTransaction",params:[{type:"0x2",from:i,to:"cancel"===t?i:s,chainId:parseInt(p),value:`${l.O$.from(a).toHexString()}`,nonce:(0,o.ar)(c),gasLimit:(0,o.ar)(d),maxFeePerGas:k,maxPriorityFeePerGas:g,..."0x"===r?{}:{data:r}}]})}function add_css$1(t){(0,o.a)(t,"svelte-ftkynd",".bn-notify-notification.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{--backround-color:var(--notify-onboard-background, var(--w3o-backround-color, var(--gray-700)));--foreground-color:var(--w3o-foreground-color, var(--gray-600));--text-color:var(--w3o-text-color, #FFF);--border-color:var(--w3o-border-color);font-family:inherit;transition:background 300ms ease-in-out, color 300ms ease-in-out;pointer-events:all;backdrop-filter:blur(5px);width:100%;min-height:56px;display:flex;flex-direction:column;position:relative;overflow:hidden;border:1px solid transparent;border-radius:var(\n      --notify-onboard-border-radius,\n      var(--onboard-border-radius-4, var(--border-radius-4))\n    );background:var(--foreground-color);color:var(--text-color)}.bn-notify-notification-inner.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:0.75rem}.bn-notify-notification.svelte-ftkynd:hover>div.bn-notify-notification-inner.svelte-ftkynd>div.notify-close-btn-desktop.svelte-ftkynd{visibility:visible;opacity:1}div.notify-close-btn.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{margin-left:auto;margin-bottom:auto;height:24px;width:24px;position:absolute;top:8px;right:8px;justify-content:center;align-items:center}div.notify-close-btn-desktop.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{visibility:hidden;transition:visibility 0.15s linear, opacity 0.15s linear;opacity:0}.notify-close-btn.svelte-ftkynd .close-icon.svelte-ftkynd.svelte-ftkynd{width:20px;margin:auto;color:var(--text-color)}.notify-close-btn.svelte-ftkynd>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-color)}.notify-close-btn.svelte-ftkynd:hover>.close-icon.svelte-ftkynd.svelte-ftkynd{color:var(--notify-onboard-close-icon-hover)}.transaction-status.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{color:var(\n      --notify-onboard-transaction-status-color,\n      var(--onboard-primary-100, var(--primary-100))\n    );line-height:14px}.dropdown.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:0px;overflow:hidden;transition:height 150ms ease-in-out}.dropdown-visible.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{height:48px}.dropdown-buttons.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{background-color:var(\n      --notify-onboard-dropdown-background,\n      var(--onboard-gray-700, var(--gray-700))\n    );width:100%;padding:8px}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd{padding:4px 12px;border-radius:var(\n      --notify-onboard-dropdown-border-radius,\n      var(--onboard-border-radius-5, var(--border-radius-5))\n    );background-color:transparent;font-size:var(\n      --notify-onboard-dropdown-font-size,\n      var(--onboard-font-size-6, var(--font-size-6))\n    );color:var(\n      --notify-onboard-dropdown-text-color,\n      var(--onboard-primary-400, var(--primary-400))\n    );transition:all 150ms ease-in-out;cursor:pointer}.dropdown-button.svelte-ftkynd.svelte-ftkynd.svelte-ftkynd:hover{background:var(\n      --notify-onboard-dropdown-btn-hover-background,\n      rgba(146, 155, 237, 0.2)\n    )}")}function create_if_block$1(t){let e,n,i,r,a,l;return{c(){e=(0,o.j)("div"),(n=(0,o.j)("button")).textContent="Cancel",i=(0,o.G)(),(r=(0,o.j)("button")).textContent="Speed-up",(0,o.k)(n,"class","dropdown-button svelte-ftkynd"),(0,o.k)(r,"class","dropdown-button svelte-ftkynd"),(0,o.k)(e,"class","dropdown-buttons flex items-center justify-end svelte-ftkynd")},m(s,c){(0,o.b)(s,e,c),(0,o.m)(e,n),(0,o.m)(e,i),(0,o.m)(e,r),a||(l=[(0,o.p)(n,"click",t[9]),(0,o.p)(r,"click",t[10])],a=!0)},p:o.n,d(t){t&&(0,o.d)(e),a=!1,(0,o.L)(l)}}}function create_fragment$1(t){let e,n,i,r,a,l,c,d,f,p,v,u,m,b;i=new StatusIconBadge({props:{notification:t[0],chainStyles:o.as[o.ap[t[0].network]]}}),a=new NotificationContent({props:{notification:t[0]}});let y="txPool"===t[0].eventCode&&create_if_block$1(t);return{c(){e=(0,o.j)("div"),n=(0,o.j)("div"),(0,o.F)(i.$$.fragment),r=(0,o.G)(),(0,o.F)(a.$$.fragment),l=(0,o.G)(),c=(0,o.j)("div"),d=(0,o.j)("div"),f=(0,o.G)(),p=(0,o.j)("div"),y&&y.c(),(0,o.k)(d,"class","flex items-center close-icon svelte-ftkynd"),(0,o.k)(c,"class","notify-close-btn notify-close-btn-"+t[4].type+" pointer flex svelte-ftkynd"),(0,o.k)(n,"class","flex bn-notify-notification-inner svelte-ftkynd"),(0,o.k)(p,"class","dropdown svelte-ftkynd"),(0,o.H)(p,"dropdown-visible",t[2]&&t[5]&&actionableEventCode(t[0].eventCode)&&validGasNetwork(t[0].network)&&walletSupportsReplacement(t[7])),(0,o.k)(e,"class",v="bn-notify-notification bn-notify-notification-"+t[0].type+"} svelte-ftkynd"),(0,o.H)(e,"bn-notify-clickable",t[0].onClick)},m(v,h){(0,o.b)(v,e,h),(0,o.m)(e,n),(0,o.I)(i,n,null),(0,o.m)(n,r),(0,o.I)(a,n,null),(0,o.m)(n,l),(0,o.m)(n,c),(0,o.m)(c,d),d.innerHTML=s,(0,o.m)(e,f),(0,o.m)(e,p),y&&y.m(p,null),u=!0,m||(b=[(0,o.p)(c,"click",(0,o.J)(t[8])),(0,o.p)(e,"mouseenter",t[11]),(0,o.p)(e,"mouseleave",t[12]),(0,o.p)(e,"click",t[13])],m=!0)},p(t,[n]){let r={};1&n&&(r.notification=t[0]),1&n&&(r.chainStyles=o.as[o.ap[t[0].network]]),i.$set(r);let l={};1&n&&(l.notification=t[0]),a.$set(l),"txPool"===t[0].eventCode?y?y.p(t,n):((y=create_if_block$1(t)).c(),y.m(p,null)):y&&(y.d(1),y=null),(!u||165&n)&&(0,o.H)(p,"dropdown-visible",t[2]&&t[5]&&actionableEventCode(t[0].eventCode)&&validGasNetwork(t[0].network)&&walletSupportsReplacement(t[7])),(!u||1&n&&v!==(v="bn-notify-notification bn-notify-notification-"+t[0].type+"} svelte-ftkynd"))&&(0,o.k)(e,"class",v),(!u||1&n)&&(0,o.H)(e,"bn-notify-clickable",t[0].onClick)},i(t){u||((0,o.x)(i.$$.fragment,t),(0,o.x)(a.$$.fragment,t),u=!0)},o(t){(0,o.A)(i.$$.fragment,t),(0,o.A)(a.$$.fragment,t),u=!1},d(t){t&&(0,o.d)(e),(0,o.K)(i),(0,o.K)(a),y&&y.d(),m=!1,(0,o.L)(b)}}}function instance$1(t,e,n){let r,a,l;(0,o.c)(t,o.w,t=>n(15,r=t)),(0,o.c)(t,i._,t=>n(3,a=t));let{device:s,gas:c}=o.af,{notification:d}=e,{updateParentOnRemove:f}=e,p=!1,v=o.at.getValue().find(({hash:t})=>t===d.id),u=v&&r.find(({accounts:t})=>!!t.find(({address:t})=>t.toLowerCase()===v.from.toLowerCase()));(0,o.al)(()=>{clearTimeout(l)});let click_handler_1=async()=>{try{await replaceTransaction({type:"cancel",wallet:u,transaction:v})}catch(e){let t=`${v.hash.slice(0,9)}:txReplaceError${v.hash.slice(-5)}`;(0,o.aw)({id:t,type:"hint",eventCode:"txError",message:a("notify.transaction.txReplaceError"),key:t,autoDismiss:4e3})}},click_handler_2=async()=>{try{await replaceTransaction({type:"speedup",wallet:u,transaction:v})}catch(e){let t=`${v.hash.slice(0,9)}:txReplaceError${v.hash.slice(-5)}`;(0,o.aw)({id:t,type:"hint",eventCode:"txError",message:a("notify.transaction.txReplaceError"),key:t,autoDismiss:4e3})}};return t.$$set=t=>{"notification"in t&&n(0,d=t.notification),"updateParentOnRemove"in t&&n(1,f=t.updateParentOnRemove)},t.$$.update=()=>{1&t.$$.dirty&&d.autoDismiss&&(l=setTimeout(()=>{(0,o.au)(d.id),(0,o.av)(d.id)},d.autoDismiss))},[d,f,p,a,s,c,v,u,()=>{(0,o.au)(d.id),(0,o.av)(d.id),f()},click_handler_1,click_handler_2,()=>n(2,p=!0),()=>n(2,p=!1),t=>d.onClick&&d.onClick(t)]}let Notification=class Notification extends o.S{constructor(t){super(),(0,o.i)(this,t,instance$1,create_fragment$1,o.s,{notification:0,updateParentOnRemove:1},add_css$1)}};function add_css(t){(0,o.a)(t,"svelte-1h8mmo3","ul.svelte-1h8mmo3{padding-left:0;display:flex;flex-flow:column nowrap;font-size:var(\n      --notify-onboard-font-size,\n      var(--onboard-font-size-5, var(--font-size-5))\n    );list-style-type:none;overflow:visible;scrollbar-width:none;box-sizing:border-box;z-index:var(--notify-onboard-z-index, 300);font-family:var(\n      --notify-onboard-font-family,\n      var(--onboard-font-family-normal, inherit)\n    );margin:8px 0;pointer-events:all}.y-scroll.svelte-1h8mmo3{overflow-y:scroll}.y-visible.svelte-1h8mmo3{overflow-y:visible}li.notification-list-top.svelte-1h8mmo3:not(:first-child){margin-top:8px}li.notification-list-bottom.svelte-1h8mmo3:not(:first-child){margin-bottom:8px}ul.bn-notify-bottomLeft.svelte-1h8mmo3,ul.bn-notify-bottomRight.svelte-1h8mmo3{flex-direction:column-reverse}@media only screen and (max-width: 450px){ul.svelte-1h8mmo3{width:100%}}.bn-notify-clickable:hover{cursor:pointer}.svelte-1h8mmo3::-webkit-scrollbar{display:none}")}function get_each_context(t,e,n){let o=t.slice();return o[12]=e[n],o}function create_if_block(t){let e,n,i,r;let a=[],l=new Map,s=t[2],get_key=t=>t[12].key;for(let e=0;e<s.length;e+=1){let n=get_each_context(t,s,e),o=get_key(n);l.set(o,a[e]=create_each_block(o,n))}return{c(){e=(0,o.j)("ul");for(let t=0;t<a.length;t+=1)a[t].c();(0,o.k)(e,"class",n="bn-notify-"+t[0]+" "+t[5]+" svelte-1h8mmo3"),(0,o.k)(e,"style",i=`${t[0].includes("top")?"justify-content:flex-start;":""}; max-height: calc(100vh - ${t[6].expanded?"412px":t[1]&&"mobile"!==t[7].type?"82px":t[1]||"mobile"!==t[7].type?"24px":"108px"})`)},m(t,n){(0,o.b)(t,e,n);for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(e,null);r=!0},p(t,c){if(517&c){s=t[2],(0,o.y)();for(let t=0;t<a.length;t+=1)a[t].r();a=(0,o.u)(a,c,get_key,1,t,s,l,e,o.aA,create_each_block,null,get_each_context);for(let t=0;t<a.length;t+=1)a[t].a();(0,o.z)()}(!r||33&c&&n!==(n="bn-notify-"+t[0]+" "+t[5]+" svelte-1h8mmo3"))&&(0,o.k)(e,"class",n),(!r||67&c&&i!==(i=`${t[0].includes("top")?"justify-content:flex-start;":""}; max-height: calc(100vh - ${t[6].expanded?"412px":t[1]&&"mobile"!==t[7].type?"82px":t[1]||"mobile"!==t[7].type?"24px":"108px"})`))&&(0,o.k)(e,"style",i)},i(t){if(!r){for(let t=0;t<s.length;t+=1)(0,o.x)(a[t]);r=!0}},o(t){for(let t=0;t<a.length;t+=1)(0,o.A)(a[t]);r=!1},d(t){t&&(0,o.d)(e);for(let t=0;t<a.length;t+=1)a[t].d()}}}function create_each_block(t,e){let n,i,r,a,l,s,c,d,f,p;let v=o.n;return i=new Notification({props:{notification:e[12],updateParentOnRemove:e[9]}}),{key:t,first:null,c(){n=(0,o.j)("li"),(0,o.F)(i.$$.fragment),r=(0,o.G)(),(0,o.k)(n,"class",a=(0,o.l)(`bn-notify-li-${e[0]} ${e[0].includes("top")?"notification-list-top":"notification-list-bottom"}`)+" svelte-1h8mmo3"),this.first=n},m(t,a){(0,o.b)(t,n,a),(0,o.I)(i,n,null),(0,o.m)(n,r),d=!0,f||(p=(0,o.p)(n,"click",(0,o.J)(e[10])),f=!0)},p(t,r){e=t;let l={};4&r&&(l.notification=e[12]),i.$set(l),(!d||1&r&&a!==(a=(0,o.l)(`bn-notify-li-${e[0]} ${e[0].includes("top")?"notification-list-top":"notification-list-bottom"}`)+" svelte-1h8mmo3"))&&(0,o.k)(n,"class",a)},r(){c=n.getBoundingClientRect()},f(){(0,o.ax)(n),v(),(0,o.ay)(n,c)},a(){v(),v=(0,o.az)(n,c,flip,{duration:500})},i(t){d||((0,o.x)(i.$$.fragment,t),t&&(0,o.U)(()=>{d&&(s&&s.end(1),(l=(0,o.V)(n,o.ab,{duration:1200,delay:300,x:e[3],y:e[4],easing:elasticOut})).start())}),d=!0)},o(t){(0,o.A)(i.$$.fragment,t),l&&l.invalidate(),s=(0,o.ak)(n,o.X,{duration:300,easing:o.an}),d=!1},d(t){t&&(0,o.d)(n),(0,o.K)(i),t&&s&&s.end(),f=!1,p()}}}function create_fragment(t){let e,n;let i=t[2].length&&create_if_block(t);return{c(){i&&i.c(),e=(0,o.e)()},m(t,r){i&&i.m(t,r),(0,o.b)(t,e,r),n=!0},p(t,[n]){t[2].length?i?(i.p(t,n),4&n&&(0,o.x)(i,1)):((i=create_if_block(t)).c(),(0,o.x)(i,1),i.m(e.parentNode,e)):i&&((0,o.y)(),(0,o.A)(i,1,1,()=>{i=null}),(0,o.z)())},i(t){n||((0,o.x)(i),n=!0)},o(t){(0,o.A)(i),n=!1},d(t){i&&i.d(t),t&&(0,o.d)(e)}}}function elasticOut(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-35*t)+1}function instance(t,e,n){let i,l,s;let{device:c}=o.af,d=o.a3.select("accountCenter").pipe((0,r.O)(o.a3.get().accountCenter),(0,a.d)(1));(0,o.c)(t,d,t=>n(6,i=t));let{position:f}=e,{sharedContainer:p}=e,{notifications:v}=e;l=0;let u="y-scroll",m=(s=null,(t,e)=>{clearTimeout(s),s=setTimeout(t,e)});return t.$$set=t=>{"position"in t&&n(0,f=t.position),"sharedContainer"in t&&n(1,p=t.sharedContainer),"notifications"in t&&n(2,v=t.notifications)},t.$$.update=()=>{1&t.$$.dirty&&(f.includes("top")?n(4,l=-50):n(4,l=50))},[f,p,v,0,l,u,i,c,d,()=>{"y-visible"!==u&&n(5,u="y-visible"),m(function(){n(5,u="y-scroll")},1e3)},function(e){o.ai.call(this,t,e)}]}let Index=class Index extends o.S{constructor(t){super(),(0,o.i)(this,t,instance,create_fragment,o.s,{position:0,sharedContainer:1,notifications:2},add_css)}}}}]);