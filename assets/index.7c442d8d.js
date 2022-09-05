(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const v of r.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&s(v)}).observe(document,{childList:!0,subtree:!0});function l(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=l(n);fetch(n.href,r)}})();function E(){}function xe(t){return t()}function be(){return Object.create(null)}function D(t){t.forEach(xe)}function Ne(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let se;function O(t,e){return se||(se=document.createElement("a")),se.href=e,t===se.href}function Fe(t){return Object.keys(t).length===0}function c(t,e){t.appendChild(e)}function T(t,e,l){t.insertBefore(e,l||null)}function H(t){t.parentNode.removeChild(t)}function W(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function f(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function p(){return F(" ")}function Be(){return F("")}function A(t,e,l,s){return t.addEventListener(e,l,s),()=>t.removeEventListener(e,l,s)}function i(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function Oe(t){return Array.from(t.childNodes)}function ae(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function De(t,e,l,s){l===null?t.style.removeProperty(e):t.style.setProperty(e,l,s?"important":"")}let ge;function R(t){ge=t}const Y=[],ye=[],ne=[],we=[],Ze=Promise.resolve();let fe=!1;function Ge(){fe||(fe=!0,Ze.then(Ie))}function ve(t){ne.push(t)}const ue=new Set;let ie=0;function Ie(){const t=ge;do{for(;ie<Y.length;){const e=Y[ie];ie++,R(e),Je(e.$$)}for(R(null),Y.length=0,ie=0;ye.length;)ye.pop()();for(let e=0;e<ne.length;e+=1){const l=ne[e];ue.has(l)||(ue.add(l),l())}ne.length=0}while(Y.length);for(;we.length;)we.pop()();fe=!1,ue.clear(),R(t)}function Je(t){if(t.fragment!==null){t.update(),D(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ve)}}const ce=new Set;let Ke;function Q(t,e){t&&t.i&&(ce.delete(t),t.i(e))}function re(t,e,l,s){if(t&&t.o){if(ce.has(t))return;ce.add(t),Ke.c.push(()=>{ce.delete(t),s&&(l&&t.d(1),s())}),t.o(e)}else s&&s()}function oe(t){t&&t.c()}function U(t,e,l,s){const{fragment:n,on_mount:r,on_destroy:v,after_update:h}=t.$$;n&&n.m(e,l),s||ve(()=>{const u=r.map(xe).filter(Ne);v?v.push(...u):D(u),t.$$.on_mount=[]}),h.forEach(ve)}function V(t,e){const l=t.$$;l.fragment!==null&&(D(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Ye(t,e){t.$$.dirty[0]===-1&&(Y.push(t),Ge(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(t,e,l,s,n,r,v,h=[-1]){const u=ge;R(t);const o=t.$$={fragment:null,ctx:null,props:r,update:E,not_equal:n,bound:be(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:be(),dirty:h,skip_bound:!1,root:e.target||u.$$.root};v&&v(o.root);let y=!1;if(o.ctx=l?l(t,e.props||{},(q,$,...C)=>{const S=C.length?C[0]:$;return o.ctx&&n(o.ctx[q],o.ctx[q]=S)&&(!o.skip_bound&&o.bound[q]&&o.bound[q](S),y&&Ye(t,q)),$}):[],o.update(),y=!0,D(o.before_update),o.fragment=s?s(o.ctx):!1,e.target){if(e.hydrate){const q=Oe(e.target);o.fragment&&o.fragment.l(q),q.forEach(H)}else o.fragment&&o.fragment.c();e.intro&&Q(t.$$.fragment),U(t,e.target,e.anchor,e.customElement),Ie()}R(u)}class ee{$destroy(){V(this,1),this.$destroy=E}$on(e,l){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(l),()=>{const n=s.indexOf(l);n!==-1&&s.splice(n,1)}}$set(e){this.$$set&&!Fe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const J=[];function Re(t,e=E){let l;const s=new Set;function n(h){if(K(t,h)&&(t=h,l)){const u=!J.length;for(const o of s)o[1](),J.push(o,t);if(u){for(let o=0;o<J.length;o+=2)J[o][0](J[o+1]);J.length=0}}}function r(h){n(h(t))}function v(h,u=E){const o=[h,u];return s.add(o),s.size===1&&(l=e(n)||E),h(t),()=>{s.delete(o),s.size===0&&(l(),l=null)}}return{set:n,update:r,subscribe:v}}const me=Re(0);function $e(t,e,l){const s=t.slice();return s[8]=e[l],s[10]=l,s}function Le(t){let e,l,s=t[8]+"",n,r,v,h;return{c(){e=f("li"),l=f("a"),n=F(s),r=p(),v=f("div"),h=p(),i(l,"href","#!"),i(l,"class","link svelte-qa0dl4"),i(v,"class","line-"+t[8]+" svelte-qa0dl4"),i(e,"class","item svelte-qa0dl4")},m(u,o){T(u,e,o),c(e,l),c(l,n),c(e,r),c(e,v),c(e,h)},p:E,d(u){u&&H(e)}}}function Ce(t){let e,l;return{c(){e=f("div"),l=F(t[0]),i(e,"class","notification svelte-qa0dl4")},m(s,n){T(s,e,n),c(e,l)},p(s,n){n&1&&ae(l,s[0])},d(s){s&&H(e)}}}function We(t){let e;return{c(){e=f("div"),e.innerHTML='<p class="svelte-qa0dl4">Your cart is empty.</p>',i(e,"class","empty svelte-qa0dl4")},m(l,s){T(l,e,s)},p:E,d(l){l&&H(e)}}}function Qe(t){let e,l,s,n,r,v,h,u,o,y,q,$,C,S,z,k,_,m,b,g,a,L,d;return{c(){e=f("div"),l=f("div"),s=f("div"),s.innerHTML='<img src="images/image-product-1-thumbnail.jpg" alt="sneaker-preview" class="svelte-qa0dl4"/>',n=p(),r=f("div"),v=f("p"),v.textContent="Autumn Limited Edition Sneakers",h=p(),u=f("p"),o=F("$125.00 x "),y=F(t[0]),q=p(),$=f("strong"),C=F("$"),S=F(t[1]),z=F(".00"),k=p(),_=f("div"),m=f("img"),g=p(),a=f("div"),a.innerHTML='<button class="svelte-qa0dl4">Checkout</button>',i(s,"class","check-img svelte-qa0dl4"),i(v,"id","shoe"),i(v,"class","svelte-qa0dl4"),De($,"color","black"),i($,"class","svelte-qa0dl4"),i(u,"id","cost"),i(u,"class","svelte-qa0dl4"),i(r,"class","check-desc svelte-qa0dl4"),O(m.src,b="images/icon-delete.svg")||i(m,"src",b),i(m,"alt","trash"),i(m,"class","svelte-qa0dl4"),i(_,"class","check-trash svelte-qa0dl4"),i(l,"class","summary svelte-qa0dl4"),i(a,"class","checkout-btn svelte-qa0dl4"),i(e,"class","checkout svelte-qa0dl4")},m(w,B){T(w,e,B),c(e,l),c(l,s),c(l,n),c(l,r),c(r,v),c(r,h),c(r,u),c(u,o),c(u,y),c(u,q),c(u,$),c($,C),c($,S),c($,z),c(l,k),c(l,_),c(_,m),c(e,g),c(e,a),L||(d=A(m,"click",t[6]),L=!0)},p(w,B){B&1&&ae(y,w[0]),B&2&&ae(S,w[1])},d(w){w&&H(e),L=!1,d()}}}function Ue(t){let e,l,s,n,r,v,h,u,o,y,q,$,C,S,z,k,_,m,b,g,a,L,d,w,B,te,he,Z,_e,de,pe,G=t[7],P=[];for(let M=0;M<G.length;M+=1)P[M]=Le($e(t,G,M));let x=t[0]!=0&&Ce(t);function qe(M,I){return M[0]!=0?Qe:We}let le=qe(t),N=le(t);return{c(){e=f("div"),l=f("div"),n=p(),r=f("nav"),v=f("div"),v.innerHTML='<img src="images/icon-menu.svg" alt="menu-icon" class="svelte-qa0dl4"/>',h=p(),u=f("div"),u.innerHTML='<img src="images/logo.svg" alt="" class="svelte-qa0dl4"/>',o=p(),y=f("ul"),q=f("div"),q.innerHTML='<img src="images/icon-close.svg" alt="x-icon" class="svelte-qa0dl4"/>',$=p();for(let M=0;M<P.length;M+=1)P[M].c();S=p(),z=f("div"),k=f("div"),x&&x.c(),_=p(),m=f("img"),g=p(),a=f("div"),L=f("div"),L.innerHTML='<p class="svelte-qa0dl4">Cart</p>',d=p(),w=f("div"),N.c(),he=p(),Z=f("img"),i(l,"class",s="overlay "+(t[2]?"overlay-active":"")+" svelte-qa0dl4"),i(v,"class","burger svelte-qa0dl4"),i(u,"class","logo svelte-qa0dl4"),i(q,"class","x-icon svelte-qa0dl4"),i(y,"class",C="list "+(t[2]?"active":"")+" svelte-qa0dl4"),i(m,"id","cart"),O(m.src,b="images/icon-cart.svg")||i(m,"src",b),i(m,"alt","cart-icon"),i(m,"class","svelte-qa0dl4"),i(L,"class","menu-head svelte-qa0dl4"),i(w,"class","menu-body svelte-qa0dl4"),i(w,"style",B=t[0]!=0?"":"display: flex;"),i(a,"class",te="cart-menu "+(t[3]?"visible":"")+" svelte-qa0dl4"),i(k,"class","cart-wrap svelte-qa0dl4"),i(Z,"id","profile"),O(Z.src,_e="images/image-avatar.png")||i(Z,"src",_e),i(Z,"alt","profile-pic"),i(Z,"class","svelte-qa0dl4"),i(z,"class","user-icons svelte-qa0dl4"),i(r,"class","navbar svelte-qa0dl4"),i(e,"class","svelte-qa0dl4")},m(M,I){T(M,e,I),c(e,l),c(e,n),c(e,r),c(r,v),c(r,h),c(r,u),c(r,o),c(r,y),c(y,q),c(y,$);for(let j=0;j<P.length;j+=1)P[j].m(y,null);c(r,S),c(r,z),c(z,k),x&&x.m(k,null),c(k,_),c(k,m),c(k,g),c(k,a),c(a,L),c(a,d),c(a,w),N.m(w,null),c(z,he),c(z,Z),de||(pe=[A(l,"click",t[4]),A(v,"click",t[4]),A(q,"click",t[4]),A(m,"click",t[5])],de=!0)},p(M,[I]){if(I&4&&s!==(s="overlay "+(M[2]?"overlay-active":"")+" svelte-qa0dl4")&&i(l,"class",s),I&128){G=M[7];let j;for(j=0;j<G.length;j+=1){const ke=$e(M,G,j);P[j]?P[j].p(ke,I):(P[j]=Le(ke),P[j].c(),P[j].m(y,null))}for(;j<P.length;j+=1)P[j].d(1);P.length=G.length}I&4&&C!==(C="list "+(M[2]?"active":"")+" svelte-qa0dl4")&&i(y,"class",C),M[0]!=0?x?x.p(M,I):(x=Ce(M),x.c(),x.m(k,_)):x&&(x.d(1),x=null),le===(le=qe(M))&&N?N.p(M,I):(N.d(1),N=le(M),N&&(N.c(),N.m(w,null))),I&1&&B!==(B=M[0]!=0?"":"display: flex;")&&i(w,"style",B),I&8&&te!==(te="cart-menu "+(M[3]?"visible":"")+" svelte-qa0dl4")&&i(a,"class",te)},i:E,o:E,d(M){M&&H(e),W(P,M),x&&x.d(),N.d(),de=!1,D(pe)}}}function Ve(t,e,l){let s=0,n=0;me.subscribe(q=>{l(0,s=q),l(1,n=125*s)});let r=!1,v=!1;return[s,n,r,v,()=>l(2,r=!r),()=>l(3,v=!v),()=>{me.update(q=>0)},["Collections","Men ","Women","About","Contact"]]}class Xe extends ee{constructor(e){super(),X(this,e,Ve,Ue,K,{})}}function Me(t,e,l){const s=t.slice();return s[14]=e[l],s[16]=l,s}function Se(t,e,l){const s=t.slice();return s[14]=e[l],s[16]=l,s}function ze(t,e,l){const s=t.slice();return s[14]=e[l],s[16]=l,s}function He(t,e,l){const s=t.slice();return s[14]=e[l],s[16]=l,s}function Te(t){let e,l,s,n,r,v,h,u,o,y,q,$,C,S,z,k,_=t[1],m=[];for(let a=0;a<_.length;a+=1)m[a]=Ae(He(t,_,a));let b=t[2],g=[];for(let a=0;a<b.length;a+=1)g[a]=Ee(ze(t,b,a));return{c(){e=f("div"),l=p(),s=f("div"),n=f("div"),n.innerHTML='<svg width="14" height="15" xmlns="http://www.w3.org/2000/svg" class="svelte-l5qasq"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="white" fill-rule="evenodd" class="svelte-l5qasq"></path></svg>',r=p(),v=f("div"),v.innerHTML='<svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" class="svelte-l5qasq"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" class="svelte-l5qasq"></path></svg>',h=p(),u=f("div"),u.innerHTML='<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg" class="svelte-l5qasq"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" class="svelte-l5qasq"></path></svg>',o=p(),y=f("img"),$=p();for(let a=0;a<m.length;a+=1)m[a].c();C=p(),S=f("div");for(let a=0;a<g.length;a+=1)g[a].c();i(e,"class","overlay overlay-active svelte-l5qasq"),i(n,"class","close svelte-l5qasq"),i(v,"class","control prev svelte-l5qasq"),i(u,"class","control next svelte-l5qasq"),i(y,"class","image-list active-img svelte-l5qasq"),O(y.src,q=t[1][0])||i(y,"src",q),i(y,"alt","shoes-0"),i(y,"data-index","LB-0"),i(S,"class","thumb-preview svelte-l5qasq"),i(s,"class","lightbox svelte-l5qasq")},m(a,L){T(a,e,L),T(a,l,L),T(a,s,L),c(s,n),c(s,r),c(s,v),c(s,h),c(s,u),c(s,o),c(s,y),c(s,$);for(let d=0;d<m.length;d+=1)m[d].m(s,null);c(s,C),c(s,S);for(let d=0;d<g.length;d+=1)g[d].m(S,null);z||(k=[A(e,"click",t[7]),A(n,"click",t[7]),A(v,"click",t[8]),A(u,"click",t[9])],z=!0)},p(a,L){if(L&2){_=a[1];let d;for(d=0;d<_.length;d+=1){const w=He(a,_,d);m[d]?m[d].p(w,L):(m[d]=Ae(w),m[d].c(),m[d].m(s,C))}for(;d<m.length;d+=1)m[d].d(1);m.length=_.length}if(L&36){b=a[2];let d;for(d=0;d<b.length;d+=1){const w=ze(a,b,d);g[d]?g[d].p(w,L):(g[d]=Ee(w),g[d].c(),g[d].m(S,null))}for(;d<g.length;d+=1)g[d].d(1);g.length=b.length}},d(a){a&&H(e),a&&H(l),a&&H(s),W(m,a),W(g,a),z=!1,D(k)}}}function et(t){let e,l;return{c(){e=f("img"),i(e,"class","image-list svelte-l5qasq"),O(e.src,l=t[14])||i(e,"src",l),i(e,"alt","shoes-"+t[16]),i(e,"data-index","LB-"+t[16])},m(s,n){T(s,e,n)},p:E,d(s){s&&H(e)}}}function Ae(t){let e,l=t[16]!=0&&et(t);return{c(){l&&l.c(),e=Be()},m(s,n){l&&l.m(s,n),T(s,e,n)},p(s,n){s[16]!=0&&l.p(s,n)},d(s){l&&l.d(s),s&&H(e)}}}function Ee(t){let e,l,s,n,r,v;function h(){return t[10](t[16])}return{c(){e=f("div"),l=f("img"),n=p(),i(l,"tabindex","0"),i(l,"class","thumb-image svelte-l5qasq"),O(l.src,s=t[14])||i(l,"src",s),i(l,"alt","preview-"+t[16]),i(l,"data-index","LB-"+t[16]),i(e,"class","thumb-wrapper svelte-l5qasq")},m(u,o){T(u,e,o),c(e,l),c(e,n),r||(v=A(e,"click",h),r=!0)},p(u,o){t=u},d(u){u&&H(e),r=!1,v()}}}function tt(t){let e,l;return{c(){e=f("img"),i(e,"class","main-image svelte-l5qasq"),O(e.src,l=t[14])||i(e,"src",l),i(e,"data-index",t[16]),i(e,"alt","main-"+t[16])},m(s,n){T(s,e,n)},p:E,d(s){s&&H(e)}}}function je(t){let e,l=t[16]!=0&&tt(t);return{c(){l&&l.c(),e=Be()},m(s,n){l&&l.m(s,n),T(s,e,n)},p(s,n){s[16]!=0&&l.p(s,n)},d(s){l&&l.d(s),s&&H(e)}}}function Pe(t){let e,l,s,n,r,v;function h(){return t[13](t[16])}return{c(){e=f("div"),l=f("img"),n=p(),i(l,"tabindex","0"),i(l,"class","preview-image svelte-l5qasq"),O(l.src,s=t[14])||i(l,"src",s),i(l,"data-index",t[16]),i(l,"alt","preview-"+t[16]),i(e,"class","prev-wrapper svelte-l5qasq")},m(u,o){T(u,e,o),c(e,l),c(e,n),r||(v=A(l,"click",h),r=!0)},p(u,o){t=u},d(u){u&&H(e),r=!1,v()}}}function lt(t){let e,l,s,n,r,v,h,u,o,y,q,$,C,S,z,k=t[0]&&Te(t),_=t[1],m=[];for(let a=0;a<_.length;a+=1)m[a]=je(Se(t,_,a));let b=t[2],g=[];for(let a=0;a<b.length;a+=1)g[a]=Pe(Me(t,b,a));return{c(){e=f("section"),k&&k.c(),l=p(),s=f("div"),n=f("div"),r=f("img"),h=p();for(let a=0;a<m.length;a+=1)m[a].c();u=p(),o=f("div"),o.innerHTML='<svg width="12" height="18" xmlns="http://www.w3.org/2000/svg" class="svelte-l5qasq"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" class="svelte-l5qasq"></path></svg>',y=p(),q=f("div"),q.innerHTML='<svg width="13" height="18" xmlns="http://www.w3.org/2000/svg" class="svelte-l5qasq"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" class="svelte-l5qasq"></path></svg>',$=p(),C=f("div");for(let a=0;a<g.length;a+=1)g[a].c();i(r,"class","main-image active svelte-l5qasq"),O(r.src,v=t[1][0])||i(r,"src",v),i(r,"alt","main-img"),i(r,"data-index","0"),i(o,"class","m-control m-prev svelte-l5qasq"),i(q,"class","m-control m-next svelte-l5qasq"),i(C,"class","picture-previews svelte-l5qasq"),i(n,"class","main-picture svelte-l5qasq"),i(s,"class","container svelte-l5qasq"),i(e,"id","gallery")},m(a,L){T(a,e,L),k&&k.m(e,null),c(e,l),c(e,s),c(s,n),c(n,r),c(n,h);for(let d=0;d<m.length;d+=1)m[d].m(n,null);c(n,u),c(n,o),c(n,y),c(n,q),c(n,$),c(n,C);for(let d=0;d<g.length;d+=1)g[d].m(C,null);S||(z=[A(o,"click",t[11]),A(q,"click",t[12]),A(n,"click",t[7])],S=!0)},p(a,[L]){if(a[0]?k?k.p(a,L):(k=Te(a),k.c(),k.m(e,l)):k&&(k.d(1),k=null),L&2){_=a[1];let d;for(d=0;d<_.length;d+=1){const w=Se(a,_,d);m[d]?m[d].p(w,L):(m[d]=je(w),m[d].c(),m[d].m(n,u))}for(;d<m.length;d+=1)m[d].d(1);m.length=_.length}if(L&68){b=a[2];let d;for(d=0;d<b.length;d+=1){const w=Me(a,b,d);g[d]?g[d].p(w,L):(g[d]=Pe(w),g[d].c(),g[d].m(C,null))}for(;d<g.length;d+=1)g[d].d(1);g.length=b.length}},i:E,o:E,d(a){a&&H(e),k&&k.d(),W(m,a),W(g,a),S=!1,D(z)}}}function st(t,e,l){const s=["images/image-product-1.jpg","images/image-product-2.jpg","images/image-product-3.jpg","images/image-product-4.jpg"],n=["images/image-product-1-thumbnail.jpg","images/image-product-2-thumbnail.jpg","images/image-product-3-thumbnail.jpg","images/image-product-4-thumbnail.jpg"],r=_=>{const m=document.querySelector(".active-img"),b=parseInt(m.getAttribute("data-index").replace("LB-",""));if(_==="next"){let g=0;b==3?(g=0,m.classList.remove("active-img"),document.querySelector(`[data-index="LB-${g}"]`).classList.add("active-img")):(g=b+1,m.classList.remove("active-img"),document.querySelector(`[data-index="LB-${g}"]`).classList.add("active-img"))}if(_==="prev"){let g=0;b==0?(g=3,m.classList.remove("active-img"),document.querySelector(`[data-index="LB-${g}"]`).classList.add("active-img")):(g=b-1,m.classList.remove("active-img"),document.querySelector(`[data-index="LB-${g}"]`).classList.add("active-img"))}},v=_=>{const m=document.querySelector(".active"),b=parseInt(m.getAttribute("data-index"));if(_==="next"){let g=0;b==3?(g=0,m.classList.remove("active"),document.querySelector(`[data-index="${g}"]`).classList.add("active")):(g=b+1,m.classList.remove("active"),document.querySelector(`[data-index="${g}"]`).classList.add("active"))}if(_==="prev"){let g=0;b==0?(g=3,m.classList.remove("active"),document.querySelector(`[data-index="${g}"]`).classList.add("active")):(g=b-1,m.classList.remove("active"),document.querySelector(`[data-index="${g}"]`).classList.add("active"))}},h=_=>{document.querySelector(".active-img").classList.remove("active-img"),document.querySelector(`[data-index="LB-${_}"]`).classList.add("active-img")},u=_=>{document.querySelector(".active").classList.remove("active"),document.querySelector(`[data-index="${_}"]`).classList.add("active")};let o=!1;return[o,s,n,r,v,h,u,()=>l(0,o=!o),()=>r("prev"),()=>r("next"),_=>h(_),()=>v("prev"),()=>v("next"),_=>u(_)]}class it extends ee{constructor(e){super(),X(this,e,st,lt,K,{})}}function nt(t){let e,l,s,n,r,v,h,u,o,y,q,$,C,S,z,k,_,m,b,g,a,L,d;return{c(){e=f("section"),l=f("div"),s=f("p"),s.textContent="SNEAKER COMPANY",n=p(),r=f("h1"),r.textContent="Fall Limited Edition Sneakers",v=p(),h=f("p"),h.textContent="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they\u2019ll withstand everything the weather can offer.",u=p(),o=f("div"),o.innerHTML=`<h3 id="price" class="svelte-6druzc">$125.00</h3>  
            <p id="discount" class="svelte-6druzc">50%</p> 
            <p id="price-old" class="svelte-6druzc">$250.00</p>`,y=p(),q=f("div"),$=f("div"),C=f("span"),C.textContent="-",S=p(),z=f("span"),k=f("p"),_=F(t[0]),m=p(),b=f("span"),b.textContent="+",g=p(),a=f("button"),a.innerHTML=`<svg id="cart-icon" width="22" height="20" xmlns="http://www.w3.org/2000/svg" class="svelte-6druzc"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#FFFFFF" fill-rule="nonzero" class="svelte-6druzc"></path></svg> 
            Add to cart`,i(s,"id","tagline"),i(s,"class","svelte-6druzc"),i(r,"class","svelte-6druzc"),i(h,"id","description"),i(h,"class","svelte-6druzc"),i(o,"id","price-wrapper"),i(o,"class","svelte-6druzc"),i(C,"id","left"),i(C,"class","svelte-6druzc"),i(k,"class","svelte-6druzc"),i(z,"id","middle"),i(z,"class","svelte-6druzc"),i(b,"id","right"),i(b,"class","svelte-6druzc"),i($,"class","counter svelte-6druzc"),i(a,"class","svelte-6druzc"),i(q,"id","btn-wrapper"),i(q,"class","svelte-6druzc"),i(l,"class","desc-contain svelte-6druzc"),i(e,"id","Description"),i(e,"class","svelte-6druzc")},m(w,B){T(w,e,B),c(e,l),c(l,s),c(l,n),c(l,r),c(l,v),c(l,h),c(l,u),c(l,o),c(l,y),c(l,q),c(q,$),c($,C),c($,S),c($,z),c(z,k),c(k,_),c($,m),c($,b),c(q,g),c(q,a),L||(d=[A(C,"click",t[3]),A(b,"click",t[4]),A(a,"click",t[5])],L=!0)},p(w,[B]){B&1&&ae(_,w[0])},i:E,o:E,d(w){w&&H(e),L=!1,D(d)}}}function ct(t,e,l){let s=0;const n=o=>{switch(o){case"+":l(0,s++,s);break;case"-":l(0,s--,s);break}s<0&&l(0,s=0)},r=o=>{me.update(y=>s)};return[s,n,r,()=>n("-"),()=>n("+"),()=>r()]}class at extends ee{constructor(e){super(),X(this,e,ct,nt,K,{})}}function rt(t){let e,l,s,n,r,v,h,u;return n=new it({}),h=new at({}),{c(){e=f("section"),l=f("div"),s=f("div"),oe(n.$$.fragment),r=p(),v=f("div"),oe(h.$$.fragment),i(s,"class","left svelte-1dgsmu1"),i(v,"class","right svelte-1dgsmu1"),i(l,"class","container svelte-1dgsmu1"),i(e,"id","showcase")},m(o,y){T(o,e,y),c(e,l),c(l,s),U(n,s,null),c(l,r),c(l,v),U(h,v,null),u=!0},p:E,i(o){u||(Q(n.$$.fragment,o),Q(h.$$.fragment,o),u=!0)},o(o){re(n.$$.fragment,o),re(h.$$.fragment,o),u=!1},d(o){o&&H(e),V(n),V(h)}}}class ot extends ee{constructor(e){super(),X(this,e,null,rt,K,{})}}function dt(t){let e,l,s,n,r,v,h;return l=new Xe({}),n=new ot({}),{c(){e=f("main"),oe(l.$$.fragment),s=p(),oe(n.$$.fragment),r=p(),v=f("div"),v.innerHTML=`Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" class="svelte-1u9dmka">Frontend Mentor</a>. 
    Coded by <a href="https://github.com/PaletteJack" class="svelte-1u9dmka">PaletteJack</a>.`,i(v,"class","attribution svelte-1u9dmka")},m(u,o){T(u,e,o),U(l,e,null),c(e,s),U(n,e,null),c(e,r),c(e,v),h=!0},p:E,i(u){h||(Q(l.$$.fragment,u),Q(n.$$.fragment,u),h=!0)},o(u){re(l.$$.fragment,u),re(n.$$.fragment,u),h=!1},d(u){u&&H(e),V(l),V(n)}}}class ut extends ee{constructor(e){super(),X(this,e,null,dt,K,{})}}new ut({target:document.getElementById("app")});
