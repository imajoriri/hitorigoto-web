(self["webpackChunkhitorigoto_web"]=self["webpackChunkhitorigoto_web"]||[]).push([[443],{5714:function(t,e,o){"use strict";o.r(e);var n=o(8081),a=o.n(n),d=o(3645),r=o.n(d),i=r()(a());i.push([t.id,".ql-editor{padding:0!important}.ql-editor ol,.ql-editor ul{padding-left:0!important}.chatInput{margin:0 4px 4px 4px;display:flex;align-items:flex-end}.chatInput__quillEditor{padding:8px}.chatInput__submit{background-color:#87cefa;width:40px;height:24px;border-radius:4px;color:#fff;font-size:12px}.chatInputEditor.ql-container{border:1px solid #d1d5db;border-radius:4px;height:auto!important;padding:8px;width:100%;margin-right:4px}",""]),e["default"]=i},1612:function(t,e,o){"use strict";o.r(e);var n=o(8081),a=o.n(n),d=o(3645),r=o.n(d),i=r()(a());i.push([t.id,".ql-editor{padding:0!important}.ql-editor ol,.ql-editor ul{padding-left:0!important}.threadRow{padding:8px}.threadRow:hover{background-color:#f6f6f6!important;cursor:pointer!important}",""]),e["default"]=i},8777:function(t,e,o){"use strict";o.r(e);var n=o(8081),a=o.n(n),d=o(3645),r=o.n(d),i=r()(a());i.push([t.id,".ql-editor{padding:0!important}.ql-editor ol,.ql-editor ul{padding-left:0!important}.threadDetail{border-left:1px solid #ececec;padding:8px;height:100%}.threadDetaillHeader{display:flex;justify-content:flex-end;margin-bottom:4px}.threadDeleteButton{color:#87cefa;width:40px}",""]),e["default"]=i},4361:function(t,e,o){"use strict";o.r(e);var n=o(8081),a=o.n(n),d=o(3645),r=o.n(d),i=r()(a());i.push([t.id,".ql-editor{padding:0!important}.ql-editor ol,.ql-editor ul{padding-left:0!important}.threadView{height:100%;display:flex}.threadView div{width:100%}.threadMain{display:flex;flex-direction:column;justify-content:flex-end;height:100%;padding:8px}",""]),e["default"]=i},8307:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return c}});var n=o(3396);const a={class:"about"},d=(0,n._)("h1",null,"This is an about page",-1),r=[d];function i(t,e){return(0,n.wg)(),(0,n.iD)("div",a,r)}var l=o(89);const s={},u=(0,l.Z)(s,[["render",i]]);var c=u},8526:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return Z}});var n=o(3396);const a={class:"threadView"},d={span:12,class:"threadMain"};function r(t,e,o,r,i,l){const s=(0,n.up)("thread-row"),u=(0,n.up)("chat-input"),c=(0,n.up)("thread-detail");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n._)("div",d,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.threads,((e,o)=>((0,n.wg)(),(0,n.iD)("div",{key:e.bodyHTML},[(0,n.Wm)(s,{"body-html":e.bodyHTML,onOpen:e=>t.clickThreadRow(o)},null,8,["body-html","onOpen"])])))),128)),(0,n.Wm)(u,{onSubmit:t.addThread},null,8,["onSubmit"])]),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(t.openThreadIndexes,((e,o)=>((0,n.wg)(),(0,n.iD)("div",{key:t.threads[o].bodyHTML},[(0,n.Wm)(c,{"body-html":t.threads[e].bodyHTML,onUpdated:o=>t.updatedThreadDetail(e,o),onDelete:()=>t.deleteThreadDetail(o)},null,8,["body-html","onUpdated","onDelete"])])))),128))])}o(7658);var i=o(4870),l=o(6769);const s={class:"chatInput"};function u(t,e,o,a,d,r){const i=(0,n.up)("QuillEditor");return(0,n.wg)(),(0,n.iD)("div",s,[(0,n.Wm)(i,{theme:"bubble",toolbar:"essential",ref:"myEditor",class:"chatInputEditor",placeholder:"なんでも、独り言をどうぞ"},null,512),(0,n._)("button",{onClick:e[0]||(e[0]=e=>t.submit()),class:"chatInput__submit"},[(0,n.Wm)(l.t,{icon:"mdi-send"})])])}var c=o(6149),p=(0,n.aZ)({components:{},setup(t,e){const o=(0,i.iH)(c.Bn),a=()=>{if(o.value){const t=o.value,n=t.getHTML();e.emit("submit",n),t.setText("")}},d=t=>"Enter"===t.key&&(t.ctrlKey||t.metaKey);return(0,n.bv)((()=>{document.addEventListener("keydown",(t=>{if(o.value){const e=o.value.getQuill().hasFocus();e&&d(t)&&a()}}))})),{myEditor:o,submit:a}}}),h=(o(3252),o(89));const f=(0,h.Z)(p,[["render",u]]);var m=f,b=o(7327);class g{constructor(t){(0,b.Z)(this,"bodyHTML",void 0),this.bodyHTML=t.bodyHTML}}const v={class:"threadRow"};function y(t,e,o,a,d,r){const i=(0,n.up)("el-button"),l=(0,n.up)("QuillEditor");return(0,n.wg)(),(0,n.iD)("div",v,[(0,n.Wm)(i,{onClick:e[0]||(e[0]=()=>t.open()),link:"",type:"primary"},{default:(0,n.w5)((()=>[(0,n.Uk)("thread >")])),_:1}),(0,n.Wm)(l,{enable:!1,"read-only":!0,theme:"",content:t.bodyHtml,"content-type":"html"},null,8,["content"])])}var w=(0,n.aZ)({components:{},props:{bodyHtml:{type:String,required:!0}},setup(t,e){const o=()=>{e.emit("open")};return{open:o}}});o(338);const x=(0,h.Z)(w,[["render",y]]);var T=x;const M={class:"threadDetail"},H={class:"threadDetaillHeader"};function D(t,e,o,a,d,r){const i=(0,n.up)("el-button"),s=(0,n.up)("QuillEditor");return(0,n.wg)(),(0,n.iD)("div",M,[(0,n._)("div",H,[(0,n.Wm)(i,{plain:"",onClick:e[0]||(e[0]=()=>t.deleteClick()),class:"threadDeleteButton",size:"small",text:""},{default:(0,n.w5)((()=>[(0,n.Wm)(l.t,{icon:"mdi-close"})])),_:1})]),(0,n.Wm)(s,{theme:"bubble",toolbar:"essential",ref:"editor",contentType:"html",content:t.bodyHtml,"onUpdate:content":t.update},null,8,["content","onUpdate:content"])])}var _=(0,n.aZ)({components:{},props:{bodyHtml:{type:String,required:!0}},setup(t,e){const o=(0,i.iH)(c.Bn),n=()=>{const t=o.value.getHTML();e.emit("updated",t)},a=()=>{e.emit("delete")};return{update:n,editor:o,deleteClick:a}}});o(4862);const k=(0,h.Z)(_,[["render",D]]);var q=k,I=(0,n.aZ)({components:{ChatInput:m,ThreadRow:T,ThreadDetail:q},setup(){const t="openThreadIndexes",e="threads",o=(0,i.iH)([]),n=(0,i.iH)([]),a=localStorage.getItem(e);if(a){const t=JSON.parse(a);t instanceof Array&&(o.value=t.map((t=>new g({bodyHTML:t.bodyHTML}))))}const d=localStorage.getItem(t);if(d){const t=JSON.parse(d);t instanceof Array&&(n.value=t.map((t=>t)))}const r=()=>localStorage.setItem(e,JSON.stringify(o.value)),l=()=>localStorage.setItem(t,JSON.stringify(n.value)),s=t=>{o.value.push(new g({bodyHTML:t})),r()},u=t=>{n.value.includes(t)||(n.value.push(t),l())},c=(t,e)=>{o.value.splice(t,1,new g({bodyHTML:e})),r()},p=t=>{n.value.splice(t,1),l()};return{addThread:s,openThreadIndexes:n,threads:o,clickThreadRow:u,updatedThreadDetail:c,deleteThreadDetail:p}}});o(8957);const L=(0,h.Z)(I,[["render",r]]);var Z=L},3252:function(t,e,o){var n=o(5714);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=o(7037).Z;a("91454b5a",n,!0,{sourceMap:!1,shadowMode:!1})},338:function(t,e,o){var n=o(1612);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=o(7037).Z;a("6b1974fd",n,!0,{sourceMap:!1,shadowMode:!1})},4862:function(t,e,o){var n=o(8777);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=o(7037).Z;a("37701bae",n,!0,{sourceMap:!1,shadowMode:!1})},8957:function(t,e,o){var n=o(4361);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=o(7037).Z;a("ae0aa966",n,!0,{sourceMap:!1,shadowMode:!1})}}]);
//# sourceMappingURL=about.1c42759a.js.map