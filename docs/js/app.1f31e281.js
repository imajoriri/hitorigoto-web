(function(){var t={1401:function(t,e,n){"use strict";n.r(e);var o=n(8081),a=n.n(o),i=n(3645),r=n.n(i),l=r()(a());l.push([t.id,".ql-editor{padding:0!important}.ql-editor ol,.ql-editor ul{padding-left:0!important}.chatInput{margin:0 4px 4px 4px;display:flex;align-items:flex-end}.chatInput__quillEditor{padding:8px}.chatInput__submit{background-color:#87cefa;width:40px;height:24px;border-radius:4px;color:#fff;font-size:12px}.chatInputEditor.ql-container{border:1px solid #d1d5db;border-radius:4px;height:auto!important;padding:8px;width:100%;margin-right:4px}",""]),e["default"]=l},5290:function(t,e,n){"use strict";n.r(e);var o=n(8081),a=n.n(o),i=n(3645),r=n.n(i),l=r()(a());l.push([t.id,".ql-editor[data-v-ab47f146]{padding:0!important}.ql-editor ol[data-v-ab47f146],.ql-editor ul[data-v-ab47f146]{padding-left:0!important}.commentList[data-v-ab47f146]{padding:8px;text-align:start;overflow:auto}.commentList__time[data-v-ab47f146]{font-size:12px;color:grey}.commentList__editor[data-v-ab47f146]{padding:0!important}",""]),e["default"]=l},6877:function(t,e,n){"use strict";n.r(e);var o=n(8081),a=n.n(o),i=n(3645),r=n.n(i),l=r()(a());l.push([t.id,".ql-editor{padding:0!important}.ql-editor ol,.ql-editor ul{padding-left:0!important}.channel{border-left:1px solid #f2f2f2;padding:0 4px 4px 4px;display:flex;flex-direction:column}.channelHeader{display:flex;justify-content:flex-end;margin-bottom:4px}.channelDelete{color:#87cefa;width:40px}.channelChatInputArea{display:flex;align-items:flex-end}.channelChatSubmitButton{background-color:#87cefa;width:40px;height:24px;border-radius:4px;color:#fff;font-size:12px}.channnelChatEditor.ql-container{border:1px solid #d1d5db;border-radius:4px;height:auto!important;padding:8px;width:100%;margin-right:4px}.channnelMemoEditor.ql-container{height:auto!important;background-color:#f2f2f2;padding:8px;max-height:60vh;border-radius:4px}.channelChatText{flex-grow:1;margin-top:4px;display:flex;flex-direction:column-reverse;margin-bottom:4px;overflow:scroll}.channelChatTextDate{font-size:12px;height:14px;color:grey}",""]),e["default"]=l},5003:function(t,e,n){"use strict";n.r(e);var o=n(8081),a=n.n(o),i=n(3645),r=n.n(i),l=r()(a());l.push([t.id,".ql-editor{padding:0!important}.ql-editor ol,.ql-editor ul{padding-left:0!important}.home{height:100%;flex-flow:column;display:flex;justify-content:flex-end;position:fixed;left:0;right:0;bottom:0;top:0}.home__header{display:flex;flex-direction:row-reverse;margin:4px}.home__chat{display:flex;flex-direction:column;justify-content:flex-end}.home__main{overflow:scroll;flex-grow:1;margin-bottom:4px;display:flex}.home__main__cell{width:100%}",""]),e["default"]=l},8709:function(t,e,n){"use strict";var o=n(9242),a=n(3396),i=n(6003),r=n(2230);function l(t,e,n,o,l,c){const u=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(i.q,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r.O,null,{default:(0,a.w5)((()=>[(0,a.Wm)(u)])),_:1})])),_:1})}var c=(0,a.aZ)({name:"App",data(){return{}}}),u=n(89);const d=(0,u.Z)(c,[["render",l]]);var s=d,f=n(2483),p=n(3062),m=n(6769);const h={class:"home"},g={class:"home__header"},v={class:"home__main"},b={class:"home__main__cell home__chat"};function x(t,e,n,o,i,r){const l=(0,a.up)("comment-list"),c=(0,a.up)("chat-input"),u=(0,a.up)("channel-row");return(0,a.wg)(),(0,a.iD)("div",h,[(0,a._)("header",g,[(0,a.Wm)(p.T,{variant:"outlined",color:"primary",size:"small",onClick:t.addMemo},{default:(0,a.w5)((()=>[(0,a.Uk)(" Add memo "),(0,a.Wm)(m.t,{icon:"mdi-plus"})])),_:1},8,["onClick"])]),(0,a._)("div",v,[(0,a._)("div",b,[(0,a.Wm)(l,{chats:t.chats},null,8,["chats"]),(0,a.Wm)(c,{onSubmit:t.chatSubmit},null,8,["onSubmit"])]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.memos,((e,n)=>((0,a.wg)(),(0,a.j4)(u,{key:n.toString(),html:e,class:"home__main__cell",onDeleteClick:e=>t.deleteClick(n),onTextChange:e=>t.memoChange(n,e)},null,8,["html","onDeleteClick","onTextChange"])))),128))])])}n(7658);const _={class:"channel"},y={class:"channelHeader"},w={class:"channelChatText"},C=(0,a._)("div",{class:"channelChatTextDate"},"1/23 16:32",-1),A={class:"channelChatInputArea"};function k(t,e,n,o,i,r){const l=(0,a.up)("el-button"),c=(0,a.up)("QuillEditor");return(0,a.wg)(),(0,a.iD)("div",_,[(0,a._)("div",y,[(0,a.Wm)(l,{plain:"",onClick:t.deleteClick,class:"channelDelete",size:"small",text:""},{default:(0,a.w5)((()=>[(0,a.Wm)(m.t,{icon:"mdi-close"})])),_:1},8,["onClick"])]),(0,a.Wm)(c,{class:"channnelMemoEditor",theme:"bubble","onUpdate:content":t.updatedMemo,ref:"channelMemoEditor",contentType:"html",content:t.html,toolbar:"essential",placeholder:"整理途中のメモはここに"},null,8,["onUpdate:content","content"]),(0,a._)("div",w,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.chats,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t.createdAt.toDateString()},[C,(0,a.Wm)(c,{enable:!1,"read-only":!0,theme:"",content:t.html,"content-type":"html"},null,8,["content"])])))),128))]),(0,a._)("div",A,[(0,a.Wm)(c,{class:"channnelChatEditor",ref:"channelChatEditor",theme:"bubble",placeholder:"一時的なメモはここに"},null,512),(0,a._)("button",{class:"channelChatSubmitButton",onClick:e[0]||(e[0]=(...e)=>t.submitChat&&t.submitChat(...e))},[(0,a.Wm)(m.t,{icon:"mdi-send"})])])])}var E=n(7327);class M{constructor(t){(0,E.Z)(this,"html",void 0),(0,E.Z)(this,"createdAt",void 0),this.html=t.html,this.createdAt=t.createdAt}}var O=n(6149),j=n(4870),D=(0,a.aZ)({components:{},props:{html:{type:String,required:!1}},setup(t,e){const n=(0,j.iH)(O.Bn),o=()=>{if(n.value){const t=n.value.getHTML();e.emit("text-change",t)}},i=()=>{e.emit("delete-click")},r=(0,j.iH)([]),l=(0,j.iH)(O.Bn),c=()=>{if(l.value){const t=l.value,e=t.getHTML(),n=new M({html:e,createdAt:new Date});r.value.push(n),t.setText("")}},u=t=>"Enter"===t.key&&(t.ctrlKey||t.metaKey);return(0,a.bv)((()=>{document.addEventListener("keydown",(t=>{if(l.value){const e=l.value.getQuill().hasFocus();e&&u(t)&&c()}}))})),{deleteClick:i,updatedMemo:o,channelMemoEditor:n,channelChatEditor:l,submitChat:c,chats:r}}});n(8504);const S=(0,u.Z)(D,[["render",k]]);var T=S;const q={class:"chatInput"};function I(t,e,n,o,i,r){const l=(0,a.up)("QuillEditor");return(0,a.wg)(),(0,a.iD)("div",q,[(0,a.Wm)(l,{theme:"bubble",ref:"myEditor",class:"chatInputEditor",placeholder:"なんでも、独り言をどうぞ"},null,512),(0,a._)("button",{onClick:e[0]||(e[0]=e=>t.submit()),class:"chatInput__submit"},[(0,a.Wm)(m.t,{icon:"mdi-send"})])])}var Z=(0,a.aZ)({components:{},setup(t,e){const n=(0,j.iH)(O.Bn),o=()=>{if(n.value){const t=n.value,o=t.getHTML();e.emit("submit",o),t.setText("")}},i=t=>"Enter"===t.key&&(t.ctrlKey||t.metaKey);return(0,a.bv)((()=>{document.addEventListener("keydown",(t=>{if(n.value){const e=n.value.getQuill().hasFocus();e&&i(t)&&o()}}))})),{myEditor:n,submit:o}}});n(8030);const H=(0,u.Z)(Z,[["render",I]]);var L=H;const W=t=>((0,a.dD)("data-v-ab47f146"),t=t(),(0,a.Cn)(),t),B={class:"commentList"},N=W((()=>(0,a._)("div",{class:"commentList__time"},"1/23 16:32",-1)));function P(t,e,n,o,i,r){const l=(0,a.up)("QuillEditor");return(0,a.wg)(),(0,a.iD)("div",B,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.chats,(t=>((0,a.wg)(),(0,a.iD)("div",{key:t.createdAt.toDateString()},[N,(0,a.Wm)(l,{class:"commentList__editor",enable:!1,"read-only":!0,theme:"",content:t.html,"content-type":"html"},null,8,["content"])])))),128))])}var U=(0,a.aZ)({components:{},props:{chats:{type:Array,required:!0}}});n(7204);const z=(0,u.Z)(U,[["render",P],["__scopeId","data-v-ab47f146"]]);var K=z,Q=(0,a.aZ)({name:"HomeView",components:{CommentList:K,ChatInput:L,ChannelRow:T},setup(){const t=(0,j.iH)([]),e=(0,j.iH)([]),n=localStorage.getItem("key_name");if(n){const e=JSON.parse(n);t.value=e}const o=t=>{e.value.push(new M({html:t,createdAt:new Date}))},a=()=>{t.value.push("")},i=e=>{t.value.splice(e,1);const n=JSON.stringify(t.value);localStorage.setItem("key_name",n)},r=(e,n)=>{t.value[e]=n;const o=JSON.stringify(t.value);localStorage.setItem("key_name",o)};return{chats:e,memos:t,chatSubmit:o,addMemo:a,deleteClick:i,memoChange:r}}});n(4060);const Y=(0,u.Z)(Q,[["render",x]]);var R=Y;const J=[{path:"/",name:"home",component:R},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,8307))}],V=(0,f.p7)({history:(0,f.r5)(),routes:J});var F=V,G=n(65),X=(0,G.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),$=(n(735),n(5133),n(8685)),tt=(0,$.Rd)();async function et(){const t=await n.e(461).then(n.t.bind(n,3657,23));t.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}n(8060),n(9172);var nt=n(3595);n(3587);et(),(0,o.ri)(s).use(F).use(X).use(tt).use(nt.Z).component("QuillEditor",O.Bn).mount("#app")},8030:function(t,e,n){var o=n(1401);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);var a=n(7037).Z;a("dbcaf240",o,!0,{sourceMap:!1,shadowMode:!1})},7204:function(t,e,n){var o=n(5290);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);var a=n(7037).Z;a("66b4936c",o,!0,{sourceMap:!1,shadowMode:!1})},8504:function(t,e,n){var o=n(6877);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);var a=n(7037).Z;a("80609930",o,!0,{sourceMap:!1,shadowMode:!1})},4060:function(t,e,n){var o=n(5003);o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.id,o,""]]),o.locals&&(t.exports=o.locals);var a=n(7037).Z;a("6e40d52b",o,!0,{sourceMap:!1,shadowMode:!1})},6270:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAIAAADZF8uwAAAAGUlEQVQYV2M4gwH+YwCGIasIUwhT25BVBADtzYNYrHvv4gAAAABJRU5ErkJggg=="},9235:function(t){"use strict";t.exports="data:image/svg+xml;utf8,%3Csvg class=%27icon%27 width=%27200%27 height=%27200%27 viewBox=%270 0 1024 1024%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath fill=%27currentColor%27 d=%27M406.656 706.944L195.84 496.256a32 32 0 10-45.248 45.248l256 256 512-512a32 32 0 00-45.248-45.248L406.592 706.944z%27%3E%3C/path%3E%3C/svg%3E"}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var i=e[o]={id:o,loaded:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,function(){var t=[];n.O=function(e,o,a,i){if(!o){var r=1/0;for(d=0;d<t.length;d++){o=t[d][0],a=t[d][1],i=t[d][2];for(var l=!0,c=0;c<o.length;c++)(!1&i||r>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[c])}))?o.splice(c--,1):(l=!1,i<r&&(r=i));if(l){t.splice(d--,1);var u=a();void 0!==u&&(e=u)}}return e}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[o,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){var t,e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__};n.t=function(o,a){if(1&a&&(o=this(o)),8&a)return o;if("object"===typeof o&&o){if(4&a&&o.__esModule)return o;if(16&a&&"function"===typeof o.then)return o}var i=Object.create(null);n.r(i);var r={};t=t||[null,e({}),e([]),e(e)];for(var l=2&a&&o;"object"==typeof l&&!~t.indexOf(l);l=e(l))Object.getOwnPropertyNames(l).forEach((function(t){r[t]=function(){return o[t]}}));return r["default"]=function(){return o},n.d(i,r),i}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+{443:"about",461:"webfontloader"}[t]+"."+{443:"4c67a7af",461:"29d4b9b9"}[t]+".js"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="hitorigoto-web:";n.l=function(o,a,i,r){if(t[o])t[o].push(a);else{var l,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var s=u[d];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==e+i){l=s;break}}l||(c=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",e+i),l.src=o),t[o]=[a];var f=function(e,n){l.onerror=l.onload=null,clearTimeout(p);var a=t[o];if(delete t[o],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),c&&document.head.appendChild(l)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p=""}(),function(){n.b=document.baseURI||self.location.href;var t={143:0};n.f.j=function(e,o){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)o.push(a[2]);else{var i=new Promise((function(n,o){a=t[e]=[n,o]}));o.push(a[2]=i);var r=n.p+n.u(e),l=new Error,c=function(o){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var i=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",l.name="ChunkLoadError",l.type=i,l.request=r,a[1](l)}};n.l(r,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,i,r=o[0],l=o[1],c=o[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(c)var d=c(n)}for(e&&e(o);u<r.length;u++)i=r[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(d)},o=self["webpackChunkhitorigoto_web"]=self["webpackChunkhitorigoto_web"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(8709)}));o=n.O(o)})();
//# sourceMappingURL=app.1f31e281.js.map