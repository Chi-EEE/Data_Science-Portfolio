var L=Object.defineProperty;var q=(t,n,e)=>n in t?L(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var f=(t,n,e)=>(q(t,typeof n!="symbol"?n+"":n,e),e);function B(){}function O(t,n){for(const e in n)t[e]=n[e];return t}function G(t){return t()}function it(){return Object.create(null)}function R(t){t.forEach(G)}function ct(t){return typeof t=="function"}function rt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let p;function lt(t,n){return t===n?!0:(p||(p=document.createElement("a")),p.href=n,t===p.href)}function st(t){return Object.keys(t).length===0}function z(t,...n){if(t==null){for(const i of n)i(void 0);return B}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ot(t,n,e){t.$$.on_destroy.push(z(n,e))}function ut(t,n,e,i){if(t){const c=M(t,n,e,i);return t[0](c)}}function M(t,n,e,i){return t[1]&&i?O(e.ctx.slice(),t[1](i(n))):e.ctx}function at(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const s=[],r=Math.max(n.dirty.length,c.length);for(let o=0;o<r;o+=1)s[o]=n.dirty[o]|c[o];return s}return n.dirty|c}return n.dirty}function ft(t,n,e,i,c,s){if(c){const r=M(n,e,i,s);t.p(r,c)}}function _t(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ht(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function dt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}let b=!1;function mt(){b=!0}function pt(){b=!1}function F(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function I(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&l.push(a)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let l=0;l<n.length;l++){const u=n[l].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:F(1,c,D=>n[e[D]].claim_order,u))-1;i[l]=e[a]+1;const v=a+1;e[v]=l,c=Math.max(v,c)}const s=[],r=[];let o=n.length-1;for(let l=e[c]+1;l!=0;l=i[l-1]){for(s.push(n[l-1]);o>=l;o--)r.push(n[o]);o--}for(;o>=0;o--)r.push(n[o]);s.reverse(),r.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<r.length;l++){for(;u<s.length&&r[l].claim_order>=s[u].claim_order;)u++;const a=u<s.length?s[u]:null;t.insertBefore(r[l],a)}}function U(t,n){if(b){for(I(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function W(t,n,e){t.insertBefore(n,e||null)}function J(t,n,e){b&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function E(t){t.parentNode&&t.parentNode.removeChild(t)}function yt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function S(t){return document.createElement(t)}function K(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function bt(){return N(" ")}function gt(){return N("")}function xt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Et(t){return t.dataset.svelteH}function Tt(t){return Array.from(t.childNodes)}function C(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function j(t,n,e,i,c=!1){C(t);const s=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(n(o)){const l=e(o);return l===void 0?t.splice(r,1):t[r]=l,c||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(n(o)){const l=e(o);return l===void 0?t.splice(r,1):t[r]=l,c?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function Q(t,n,e,i){return j(t,c=>c.nodeName===n,c=>{const s=[];for(let r=0;r<c.attributes.length;r++){const o=c.attributes[r];e[o.name]||s.push(o.name)}s.forEach(r=>c.removeAttribute(r))},()=>i(n))}function Nt(t,n,e){return Q(t,n,e,S)}function V(t,n){return j(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>N(n),!0)}function vt(t){return V(t," ")}function w(t,n,e){for(let i=e;i<t.length;i+=1){const c=t[i];if(c.nodeType===8&&c.textContent.trim()===n)return i}return-1}function wt(t,n){const e=w(t,"HTML_TAG_START",0),i=w(t,"HTML_TAG_END",e+1);if(e===-1||i===-1)return new A(n);C(t);const c=t.splice(e,i-e+1);E(c[0]),E(c[c.length-1]);const s=c.slice(1,c.length-1);for(const r of s)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new A(n,s)}function At(t,n){n=""+n,t.data!==n&&(t.data=n)}function kt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function X(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function Ht(t,n){const e=[];let i=0;for(const c of n.childNodes)if(c.nodeType===8){const s=c.textContent.trim();s===`HEAD_${t}_END`?(i-=1,e.push(c)):s===`HEAD_${t}_START`&&(i+=1,e.push(c))}else i>0&&e.push(c);return e}class Y{constructor(n=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=K(e.nodeName):this.e=S(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)W(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(E)}}class A extends Y{constructor(e=!1,i){super(e);f(this,"l");this.e=this.n=null,this.l=i}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let i=0;i<this.n.length;i+=1)J(this.t,this.n[i],e)}}function Mt(t,n){return new t(n)}let y;function g(t){y=t}function m(){if(!y)throw new Error("Function called outside component initialization");return y}function St(t){m().$$.on_mount.push(t)}function Ct(t){m().$$.after_update.push(t)}function jt(){const t=m();return(n,e,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[n];if(c){const s=X(n,e,{cancelable:i});return c.slice().forEach(r=>{r.call(t,s)}),!s.defaultPrevented}return!0}}function Pt(t,n){return m().$$.context.set(t,n),n}function Dt(t){return m().$$.context.get(t)}const d=[],k=[];let h=[];const H=[],P=Promise.resolve();let T=!1;function Z(){T||(T=!0,P.then(tt))}function Lt(){return Z(),P}function $(t){h.push(t)}const x=new Set;let _=0;function tt(){if(_!==0)return;const t=y;do{try{for(;_<d.length;){const n=d[_];_++,g(n),nt(n.$$)}}catch(n){throw d.length=0,_=0,n}for(g(null),d.length=0,_=0;k.length;)k.pop()();for(let n=0;n<h.length;n+=1){const e=h[n];x.has(e)||(x.add(e),e())}h.length=0}while(d.length);for(;H.length;)H.pop()();T=!1,x.clear(),g(t)}function nt(t){if(t.fragment!==null){t.update(),R(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach($)}}function qt(t){const n=[],e=[];h.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),h=n}export{dt as A,O as B,ht as C,yt as D,Dt as E,lt as F,wt as G,A as H,jt as I,Pt as J,Et as K,Ht as L,R as M,it as N,tt as O,ct as P,st as Q,$ as R,qt as S,y as T,g as U,G as V,d as W,Z as X,mt as Y,pt as Z,bt as a,Ct as b,vt as c,E as d,gt as e,S as f,Nt as g,Tt as h,J as i,xt as j,kt as k,N as l,V as m,At as n,St as o,k as p,Mt as q,ut as r,rt as s,Lt as t,ft as u,_t as v,at as w,U as x,B as y,ot as z};
