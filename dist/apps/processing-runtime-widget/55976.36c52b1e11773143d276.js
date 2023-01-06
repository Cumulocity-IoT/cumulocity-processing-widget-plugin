"use strict";(self.webpackChunkcumulocity_processing_widget_plugin=self.webpackChunkcumulocity_processing_widget_plugin||[]).push([[55976],{55976:function(t,e,o){var n;o.r(e),o.d(e,{PlacementForBs5:function(){return i},Positioning:function(){return V},PositioningService:function(){return q},checkMargins:function(){return W},positionElements:function(){return Y}});var r,i,s=o(38310),a=o(40761),f=o(80179),l=o(89754);function m(t,e){if(1!==t.nodeType)return[];const o=t.ownerDocument.defaultView?.getComputedStyle(t,null);return e?o&&o[e]:o}function p(t){if(!t)return document.documentElement;let e,o=t?.offsetParent;for(;null===o&&t.nextElementSibling&&e!==t.nextElementSibling;)e=t.nextElementSibling,o=e.offsetParent;const n=o&&o.nodeName;return n&&"BODY"!==n&&"HTML"!==n?o&&-1!==["TH","TD","TABLE"].indexOf(o.nodeName)&&"static"===m(o,"position")?p(o):o:e?e.ownerDocument.documentElement:document.documentElement}function c(t){return null!==t.parentNode?c(t.parentNode):t}function h(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;const o=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?t:e,r=o?e:t,i=document.createRange();i.setStart(n,0),i.setEnd(r,0);const s=i.commonAncestorContainer;if(t!==s&&e!==s||n.contains(r))return function(t){const{nodeName:e}=t;return"BODY"!==e&&("HTML"===e||p(t.firstElementChild)===t)}(s)?s:p(s);const a=c(t);return a.host?h(a.host,e):h(t,c(e).host)}function u(t){if(!t||!t.parentElement)return document.documentElement;let e=t.parentElement;for(;e?.parentElement&&"none"===m(e,"transform");)e=e.parentElement;return e||document.documentElement}function g(t,e){const o="x"===e?"Left":"Top",n="Left"===o?"Right":"Bottom";return parseFloat(t[`border${o}Width`])+parseFloat(t[`border${n}Width`])}function d(t,e,o,n){const r=e,i=o;return Math.max(r[`offset${t}`],r[`scroll${t}`],i[`client${t}`],i[`offset${t}`],i[`scroll${t}`],0)}function b(t){const e=t.body,o=t.documentElement;return{height:d("Height",e,o),width:d("Width",e,o)}}function w(t){return{...t,right:(t.left||0)+t.width,bottom:(t.top||0)+t.height}}function N(t){return"number"==typeof t||"[object Number]"===Object.prototype.toString.call(t)}function E(t){const e=t.getBoundingClientRect();if(!(e&&N(e.top)&&N(e.left)&&N(e.bottom)&&N(e.right)))return e;const o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},n="HTML"===t.nodeName?b(t.ownerDocument):void 0,r=n?.width||t.clientWidth||N(e.right)&&N(o.left)&&e.right-o.left||0,i=n?.height||t.clientHeight||N(e.bottom)&&N(o.top)&&e.bottom-o.top||0;let s=t.offsetWidth-r,a=t.offsetHeight-i;if(s||a){const e=m(t);s-=g(e,"x"),a-=g(e,"y"),o.width-=s,o.height-=a}return w(o)}function M(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function v(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}const{overflow:e,overflowX:o,overflowY:n}=m(t);return/(auto|scroll|overlay)/.test(String(e)+String(n)+String(o))?t:v(M(t))}function y(t,e,o=!1){const n="HTML"===e.nodeName,r=E(t),i=E(e),s=(v(t),m(e)),a=parseFloat(s.borderTopWidth),f=parseFloat(s.borderLeftWidth);o&&n&&(i.top=Math.max(i.top??0,0),i.left=Math.max(i.left??0,0));const l=w({top:(r.top??0)-(i.top??0)-a,left:(r.left??0)-(i.left??0)-f,width:r.width,height:r.height});if(l.marginTop=0,l.marginLeft=0,n){const t=parseFloat(s.marginTop),e=parseFloat(s.marginLeft);N(l.top)&&(l.top-=a-t),N(l.bottom)&&(l.bottom-=a-t),N(l.left)&&(l.left-=f-e),N(l.right)&&(l.right-=f-e),l.marginTop=t,l.marginLeft=e}return l}function x(t,e="top"){const o="top"===e?"scrollTop":"scrollLeft",n=t.nodeName;if("BODY"===n||"HTML"===n){const e=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||e)[o]}return t[o]}function O(t){const e=t.nodeName;return"BODY"!==e&&"HTML"!==e&&("fixed"===m(t,"position")||O(M(t)))}function $(t,e,o=0,n,r=!1){let i={top:0,left:0};const s=r?u(t):h(t,e);if("viewport"===n)i=function(t,e=!1){const o=t.ownerDocument.documentElement,n=y(t,o),r=Math.max(o.clientWidth,window.innerWidth||0),i=Math.max(o.clientHeight,window.innerHeight||0),s=e?0:x(o),a=e?0:x(o,"left");return w({top:s-Number(n?.top)+Number(n?.marginTop),left:a-Number(n?.left)+Number(n?.marginLeft),width:r,height:i})}(s,r);else{let o;"scrollParent"===n?(o=v(M(e)),"BODY"===o.nodeName&&(o=t.ownerDocument.documentElement)):o="window"===n?t.ownerDocument.documentElement:n;const a=y(o,s,r);if(a&&"HTML"===o.nodeName&&!O(s)){const{height:e,width:o}=b(t.ownerDocument);N(i.top)&&N(a.top)&&N(a.marginTop)&&(i.top+=a.top-a.marginTop),N(i.top)&&(i.bottom=Number(e)+Number(a.top)),N(i.left)&&N(a.left)&&N(a.marginLeft)&&(i.left+=a.left-a.marginLeft),N(i.top)&&(i.right=Number(o)+Number(a.left))}else a&&(i=a)}return N(i.left)&&(i.left+=o),N(i.top)&&(i.top+=o),N(i.right)&&(i.right-=o),N(i.bottom)&&(i.bottom-=o),i}function T({width:t,height:e}){return t*e}function D(t,e,o,n,r=["top","bottom","right","left"],a="viewport",f=0){if(-1===t.indexOf("auto"))return t;const l=$(o,n,f,a),m={top:{width:l?.width??0,height:(e?.top??0)-(l?.top??0)},right:{width:(l?.right??0)-(e?.right??0),height:l?.height??0},bottom:{width:l?.width??0,height:(l?.bottom??0)-(e?.bottom??0)},left:{width:(e.left??0)-(l?.left??0),height:l?.height??0}},p=Object.keys(m).map((t=>({position:t,...m[t],area:T(m[t])}))).sort(((t,e)=>e.area-t.area));let c=p.filter((({width:t,height:e})=>t>=o.clientWidth&&e>=o.clientHeight));c=c.filter((({position:t})=>r.some((e=>e===t))));const h=c.length>0?c[0].position:p[0].position,u=t.split(" ")[1];return o.className=o.className.replace(/bs-tooltip-auto/g,`bs-tooltip-${(0,s.getBsVer)().isBs5?i[h]:h}`),h+(u?`-${u}`:"")}!function(t){t.top="top",t.bottom="bottom",t.left="left",t.right="right",t.auto="auto",t.end="right",t.start="left",t["top left"]="top left",t["top right"]="top right",t["right top"]="right top",t["right bottom"]="right bottom",t["bottom right"]="bottom right",t["bottom left"]="bottom left",t["left bottom"]="left bottom",t["left top"]="left top",t["top start"]="top left",t["top end"]="top right",t["end top"]="right top",t["end bottom"]="right bottom",t["bottom end"]="bottom right",t["bottom start"]="bottom left",t["start bottom"]="start bottom",t["start top"]="left top"}(r||(r={})),function(t){t.top="top",t.bottom="bottom",t.left="start",t.right="end",t.auto="auto",t.end="end",t.start="start",t["top left"]="top start",t["top right"]="top end",t["right top"]="end top",t["right bottom"]="end bottom",t["bottom right"]="bottom end",t["bottom left"]="bottom start",t["left bottom"]="start bottom",t["left top"]="start top",t["top start"]="top start",t["top end"]="top end",t["end top"]="end top",t["end bottom"]="end bottom",t["bottom end"]="bottom end",t["bottom start"]="bottom start",t["start bottom"]="start bottom",t["start top"]="start top"}(i||(i={}));const L=(t,e=0)=>t?parseFloat(t):e;function F(t){const e=t.ownerDocument.defaultView?.getComputedStyle(t),o=L(e?.marginTop)+L(e?.marginBottom),n=L(e?.marginLeft)+L(e?.marginRight);return{width:Number(t.offsetWidth)+n,height:Number(t.offsetHeight)+o}}function B(t,e,o){return y(e,o?u(t):h(t,e),o)}function P(t,e,o){const n=o.split(" ")[0],r=F(t),i={width:r.width,height:r.height},s=-1!==["right","left"].indexOf(n),a=s?"top":"left",f=s?"left":"top",l=s?"height":"width",m=s?"width":"height";return i[a]=(e[a]??0)+e[l]/2-r[l]/2,i[f]=n===f?(e[f]??0)-r[m]:e[function(t){const e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,(t=>e[t]))}(f)]??0,i}function S(t,e){return!!t.modifiers[e]?.enabled}const H={top:["top","top start","top end"],bottom:["bottom","bottom start","bottom end"],start:["start","start top","start bottom"],end:["end","end top","end bottom"]};function I(t,e){return!!(0,s.getBsVer)().isBs5&&H[e].includes(t)}function W(t){return(0,s.getBsVer)().isBs5?I(t,"end")?"ms-2":I(t,"start")?"me-2":I(t,"top")?"mb-2":I(t,"bottom")?"mt-2":"":""}function R(t,e,o){t&&e&&Object.keys(e).forEach((n=>{let r="";var i;-1!==["width","height","top","right","bottom","left"].indexOf(n)&&(""!==(i=e[n])&&!isNaN(parseFloat(i))&&isFinite(Number(i)))&&(r="px"),o?o.setStyle(t,n,`${String(e[n])}${r}`):t.style[n]=String(e[n])+r}))}function k(t){let e=t.offsets.target;const o=t.instance.target.querySelector(".arrow");if(!o)return t;const n=-1!==["left","right"].indexOf(t.placement.split(" ")[0]),r=n?"height":"width",i=n?"Top":"Left",s=i.toLowerCase(),a=n?"left":"top",f=n?"bottom":"right",l=F(o)[r],p=t.placement.split(" ")[1];(t.offsets.host[f]??0)-l<(e[s]??0)&&(e[s]-=(e[s]??0)-((t.offsets.host[f]??0)-l)),Number(t.offsets.host[s])+Number(l)>(e[f]??0)&&(e[s]+=Number(t.offsets.host[s])+Number(l)-Number(e[f])),e=w(e);const c=m(t.instance.target),h=parseFloat(c[`margin${i}`])||0,u=parseFloat(c[`border${i}Width`])||0;let g;if(p){const e=parseFloat(c.borderRadius)||0,o=Number(h+u+e);g=s===p?Number(t.offsets.host[s])+o:Number(t.offsets.host[s])+Number(t.offsets.host[r]-o)}else g=Number(t.offsets.host[s])+Number(t.offsets.host[r]/2-l/2);let d=g-(e[s]??0)-h-u;return d=Math.max(Math.min(e[r]-(l+5),d),0),t.offsets.arrow={[s]:Math.round(d),[a]:""},t.instance.arrow=o,t}function C(t){if(t.offsets.target=w(t.offsets.target),!S(t.options,"flip"))return t.offsets.target={...t.offsets.target,...P(t.instance.target,t.offsets.host,t.placement)},t;const e=$(t.instance.target,t.instance.host,0,"viewport",!1);let o=t.placement.split(" ")[0],n=t.placement.split(" ")[1]||"";const r=D("auto",t.offsets.host,t.instance.target,t.instance.host,t.options.allowedPositions),i=[o,r];return i.forEach(((r,s)=>{if(o!==r||i.length===s+1)return;o=t.placement.split(" ")[0];const a="left"===o&&Math.floor(t.offsets.target.right??0)>Math.floor(t.offsets.host.left??0)||"right"===o&&Math.floor(t.offsets.target.left??0)<Math.floor(t.offsets.host.right??0)||"top"===o&&Math.floor(t.offsets.target.bottom??0)>Math.floor(t.offsets.host.top??0)||"bottom"===o&&Math.floor(t.offsets.target.top??0)<Math.floor(t.offsets.host.bottom??0),f=Math.floor(t.offsets.target.left??0)<Math.floor(e.left??0),l=Math.floor(t.offsets.target.right??0)>Math.floor(e.right??0),m=Math.floor(t.offsets.target.top??0)<Math.floor(e.top??0),p=Math.floor(t.offsets.target.bottom??0)>Math.floor(e.bottom??0),c="left"===o&&f||"right"===o&&l||"top"===o&&m||"bottom"===o&&p,h=-1!==["top","bottom"].indexOf(o),u=h&&"left"===n&&f||h&&"right"===n&&l||!h&&"left"===n&&m||!h&&"right"===n&&p;(a||c||u)&&((a||c)&&(o=i[s+1]),u&&(n=function(t){return"right"===t?"left":"left"===t?"right":t}(n)),t.placement=o+(n?` ${n}`:""),t.offsets.target={...t.offsets.target,...P(t.instance.target,t.offsets.host,t.placement)})})),t}function _(t){if(!S(t.options,"preventOverflow"))return t;const e="transform",o=t.instance.target.style,{top:n,left:r,[e]:i}=o;o.top="",o.left="",o[e]="";const s=$(t.instance.target,t.instance.host,0,t.options.modifiers.preventOverflow?.boundariesElement||"scrollParent",!1);o.top=n,o.left=r,o[e]=i;const a={primary(e){let o=t.offsets.target[e];return(t.offsets.target[e]??0)<(s[e]??0)&&(o=Math.max(t.offsets.target[e]??0,s[e]??0)),{[e]:o}},secondary(e){const o="right"===e,n=o?"left":"top",r=o?"width":"height";let i=t.offsets.target[n];return(t.offsets.target[e]??0)>(s[e]??0)&&(i=Math.min(t.offsets.target[n]??0,(s[e]??0)-t.offsets.target[r])),{[n]:i}}};return["left","right","top","bottom"].forEach((e=>{const o=-1!==["left","top","start"].indexOf(e)?a.primary:a.secondary;t.offsets.target={...t.offsets.target,...o(e)}})),t}function j(t){const e=t.placement,o=e.split(" ")[0],n=e.split(" ")[1];if(n){const{host:e,target:r}=t.offsets,i=-1!==["bottom","top"].indexOf(o),s=i?"left":"top",a=i?"width":"height",f={start:{[s]:e[s]},end:{[s]:(e[s]??0)+e[a]-r[a]}};t.offsets.target={...r,[s]:s===n?f.start[s]:f.end[s]}}return t}class V{position(t,e){return this.offset(t,e)}offset(t,e){return B(e,t)}positionElements(t,e,o,n,i){const s=[C,j,_,k],a=function(t,e,o,n){if(!t||!e)return;const r=B(t,e);o.match(/^(auto)*\s*(left|right|top|bottom|start|end)*$/)||o.match(/^(left|right|top|bottom|start|end)*(?: (left|right|top|bottom|start|end))*$/)||(o="auto");const i=!!o.match(/auto/g);let s=o.match(/auto\s(left|right|top|bottom|start|end)/)?o.split(" ")[1]||"auto":o;const a=s.match(/^(left|right|top|bottom|start|end)* ?(?!\1)(left|right|top|bottom|start|end)?/);return a&&(s=a[1]+(a[2]?` ${a[2]}`:"")),-1!==["left right","right left","top bottom","bottom top"].indexOf(s)&&(s="auto"),s=D(s,r,t,e,n?n.allowedPositions:void 0),{options:n||{modifiers:{}},instance:{target:t,host:e,arrow:void 0},offsets:{target:P(t,r,s),host:r,arrow:void 0},positionFixed:!1,placement:s,placementAuto:i}}(e,t,r[o],i);if(a)return s.reduce(((t,e)=>e(t)),a)}}const A=new V;function Y(t,e,o,n,r,a){const f=A.positionElements(t,e,o,n,r);if(!f)return;const l=function(t){return{width:t.offsets.target.width,height:t.offsets.target.height,left:Math.floor(t.offsets.target.left??0),top:Math.round(t.offsets.target.top??0),bottom:Math.round(t.offsets.target.bottom??0),right:Math.floor(t.offsets.target.right??0)}}(f);R(e,{"will-change":"transform",top:"0px",left:"0px",transform:`translate3d(${l.left}px, ${l.top}px, 0px)`},a),f.instance.arrow&&R(f.instance.arrow,f.offsets.arrow,a),function(t,e){const o=t.instance.target;let n=o.className;const r=(0,s.getBsVer)().isBs5?i[t.placement]:t.placement;t.placementAuto&&(n=n.replace(/bs-popover-auto/g,`bs-popover-${r}`),n=n.replace(/ms-2|me-2|mb-2|mt-2/g,""),n=n.replace(/bs-tooltip-auto/g,`bs-tooltip-${r}`),n=n.replace(/\sauto/g,` ${r}`),-1!==n.indexOf("popover")&&(n=n+" "+W(r)),-1!==n.indexOf("popover")&&-1===n.indexOf("popover-auto")&&(n+=" popover-auto"),-1!==n.indexOf("tooltip")&&-1===n.indexOf("tooltip-auto")&&(n+=" tooltip-auto")),n=n.replace(/left|right|top|bottom|end|start/g,`${r.split(" ")[0]}`),e?e.setAttribute(o,"class",n):o.className=n}(f,a)}class q{constructor(t,e,o){this.update$$=new l.Subject,this.positionElements=new Map,this.isDisabled=!1,(0,f.isPlatformBrowser)(o)&&t.runOutsideAngular((()=>{this.triggerEvent$=(0,l.merge)((0,l.fromEvent)(window,"scroll",{passive:!0}),(0,l.fromEvent)(window,"resize",{passive:!0}),(0,l.of)(0,l.animationFrameScheduler),this.update$$),this.triggerEvent$.subscribe((()=>{this.isDisabled||this.positionElements.forEach((t=>{Y(Z(t.target),Z(t.element),t.attachment,t.appendToBody,this.options,e.createRenderer(null,null))}))}))}))}position(t){this.addPositionElement(t)}get event$(){return this.triggerEvent$}disable(){this.isDisabled=!0}enable(){this.isDisabled=!1}addPositionElement(t){this.positionElements.set(Z(t.element),t)}calcPosition(){this.update$$.next(null)}deletePositionElement(t){this.positionElements.delete(Z(t))}setOptions(t){this.options=t}}function Z(t){return"string"==typeof t?document.querySelector(t):t instanceof a.ElementRef?t.nativeElement:t??null}q.ɵfac=a["ɵɵngDeclareFactory"]({minVersion:"12.0.0",version:"14.0.6",ngImport:n||(n=o.t(a,2)),type:q,deps:[{token:a.NgZone},{token:a.RendererFactory2},{token:a.PLATFORM_ID}],target:a["ɵɵFactoryTarget"].Injectable}),q.ɵprov=a["ɵɵngDeclareInjectable"]({minVersion:"12.0.0",version:"14.0.6",ngImport:n||(n=o.t(a,2)),type:q,providedIn:"root"}),a["ɵɵngDeclareClassMetadata"]({minVersion:"12.0.0",version:"14.0.6",ngImport:n||(n=o.t(a,2)),type:q,decorators:[{type:a.Injectable,args:[{providedIn:"root"}]}],ctorParameters:function(){return[{type:a.NgZone},{type:a.RendererFactory2},{type:void 0,decorators:[{type:a.Inject,args:[a.PLATFORM_ID]}]}]}})}}]);