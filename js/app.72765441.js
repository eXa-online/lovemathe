(function(e){function t(t){for(var r,u,s=t[0],i=t[1],a=t[2],p=0,l=[];p<s.length;p++)u=s[p],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&l.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(l.length)l.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},c=[];function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/lovemathe/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var f=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"171e":function(e,t,n){e.exports=n.p+"img/4.7a749121.svg"},1868:function(e,t,n){"use strict";n("2a2b")},2008:function(e,t,n){e.exports=n.p+"img/2.2c1af657.svg"},2587:function(e,t,n){var r={"./0.svg":"df4f","./1.svg":"5886","./2.svg":"8f0a","./3.svg":"be87","./4.svg":"6c6a","./5.svg":"970c","./6.svg":"8499"};function o(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=c,e.exports=o,o.id="2587"},"2a2b":function(e,t,n){},"2b08":function(e,t,n){e.exports=n.p+"img/1.fd5f5e37.svg"},"2c00":function(e,t,n){var r={"./0.svg":"777b","./1.svg":"2b08","./2.svg":"2008","./3.svg":"53f7","./4.svg":"171e","./5.svg":"b632","./6.svg":"c5cb"};function o(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=c,e.exports=o,o.id="2c00"},"53f7":function(e,t,n){e.exports=n.p+"img/3.8ec1f6d8.svg"},"545a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function o(e,t,n,o,c,u){var s=Object(r["k"])("QuantityComparison");return Object(r["g"])(),Object(r["c"])(s)}var c={class:"puzzle_body"},u=["src"],s=["src"],i={key:0,class:"puzzle_bottom"},a={class:"puzzle_buttons"},f=["onClick"],p=["src"],l=["src"];function g(e,t,n,o,g,d){return Object(r["g"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",c,[Object(r["f"])("img",{class:"puzzle",src:d.currentPuzzleBody},null,8,u),g.completed?(Object(r["g"])(),Object(r["e"])("img",{key:0,class:"puzzle_badge__large",src:d.currentBadge},null,8,s)):Object(r["d"])("",!0)]),g.completed?Object(r["d"])("",!0):(Object(r["g"])(),Object(r["e"])("div",i,[Object(r["f"])("div",a,[(Object(r["g"])(!0),Object(r["e"])(r["a"],null,Object(r["j"])(d.buttonImages,(function(e,t){return Object(r["g"])(),Object(r["e"])("button",{key:e,onClick:function(e){return d.evalSelection(t)}},[Object(r["f"])("img",{src:e},null,8,p)],8,f)})),128))]),Object(r["f"])("img",{class:"puzzle_badge__small",src:d.currentBadge},null,8,l)]))],64)}var d={name:"CompareQuantities",data:function(){return{completed:!1,badgeIndex:0,puzzleIndex:0,solutions:[0,2,1,0,1,0]}},computed:{buttonImages:function(){return[n("e523"),n("7f04"),n("b0a9")]},currentBadge:function(){return n("2c00")("./".concat(this.badgeIndex,".svg"))},currentPuzzleBody:function(){return n("2587")("./".concat(this.puzzleIndex,".svg"))}},methods:{evalSelection:function(e){var t=e==this.solutions[this.puzzleIndex];t&&this.badgeIndex++,this.puzzleIndex<this.solutions.length&&this.puzzleIndex++,this.puzzleIndex===this.solutions.length&&(this.completed=!0)}}},b=(n("1868"),n("6b0d")),v=n.n(b);const m=v()(d,[["render",g],["__scopeId","data-v-0d5594f3"]]);var O=m,j={name:"App",components:{QuantityComparison:O}};n("ecb9");const x=v()(j,[["render",o]]);var h=x;Object(r["b"])(h).mount("#app")},5886:function(e,t,n){e.exports=n.p+"img/1.fbdfa1f0.svg"},"6c6a":function(e,t,n){e.exports=n.p+"img/4.e810e432.svg"},"777b":function(e,t,n){e.exports=n.p+"img/0.9b1a44eb.svg"},"7f04":function(e,t,n){e.exports=n.p+"img/1.fa9b7449.svg"},8499:function(e,t,n){e.exports=n.p+"img/6.667498c8.svg"},"8f0a":function(e,t,n){e.exports=n.p+"img/2.157f7ed4.svg"},"970c":function(e,t,n){e.exports=n.p+"img/5.94fc4c0d.svg"},b0a9:function(e,t,n){e.exports=n.p+"img/2.e0c0aeee.svg"},b632:function(e,t,n){e.exports=n.p+"img/5.b60d5d17.svg"},be87:function(e,t,n){e.exports=n.p+"img/3.220c2160.svg"},c5cb:function(e,t,n){e.exports=n.p+"img/6.2e0bdf3f.svg"},df4f:function(e,t,n){e.exports=n.p+"img/0.a7ba20e1.svg"},e523:function(e,t,n){e.exports=n.p+"img/0.43c83d4a.svg"},ecb9:function(e,t,n){"use strict";n("545a")}});
//# sourceMappingURL=app.72765441.js.map