/*! For license information please see bundle.js.LICENSE.txt */
!function(){"use strict";var e={485:function(e,t,n){var i=n(81),o=n.n(i),r=n(645),a=n.n(r)()(o());a.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n#main {\n  width: 360px;\n  height: 420px;\n  border-radius: 10px;\n  border: 10px solid #000;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background: #b7d4a8;\n}\n#main #stage {\n  width: 304px;\n  height: 304px;\n  border: 2px solid #000;\n  position: relative;\n}\n#main #stage #snake > div {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border: 1px solid #b7d4a8;\n  background: #000;\n}\n#main #stage #food {\n  width: 10px;\n  height: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: row wrap;\n          flex-flow: row wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  position: absolute;\n  left: 50%;\n  top: 40%;\n}\n#main #stage #food > div {\n  width: 4px;\n  height: 4px;\n  background: #000;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n#main #score-panel {\n  width: 304px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n",""]),t.Z=a},645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var f=[].concat(e[l]);i&&a[f[0]]||(void 0!==r&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=r),n&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=n):f[2]=n),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),t.push(f))}},t}},81:function(e){e.exports=function(e){return e[1]}},379:function(e){var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},a=[],s=0;s<e.length;s++){var c=e[s],l=i.base?c[0]+i.base:c[0],f=r[l]||0,u="".concat(l," ").concat(f);r[l]=f+1;var d=n(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(h);else{var p=o(h,i);i.byIndex=s,t.splice(s,0,{identifier:u,updater:p,references:1})}a.push(u)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=i(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var s=n(r[a]);t[s].references--}for(var c=i(e,o),l=0;l<r.length;l++){var f=n(r[l]);0===t[f].references&&(t[f].updater(),t.splice(f,1))}r=c}}},569:function(e){var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},216:function(e){e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,n){e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var i="";n.supports&&(i+="@supports (".concat(n.supports,") {")),n.media&&(i+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(i+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),i+=n.css,o&&(i+="}"),n.media&&(i+="}"),n.supports&&(i+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(i,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e=n(379),t=n.n(e),i=n(795),o=n.n(i),r=n(569),a=n.n(r),s=n(565),c=n.n(s),l=n(216),f=n.n(l),u=n(589),d=n.n(u),h=n(485),p={};function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}p.styleTagTransform=d(),p.setAttributes=c(),p.insert=a().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=f(),t()(h.Z,p),h.Z&&h.Z.locals&&h.Z.locals;var b=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.snake=document.getElementById("snake"),this.head=document.querySelector("#snake>div"),this.bodies=this.snake.getElementsByTagName("div")}var t,n;return t=e,(n=[{key:"x",get:function(){return this.head.offsetLeft},set:function(e){if(this.x!==e){if(e<0||e>290)throw new Error("蛇撞墙，游戏结束");this.bodies[1]&&this.bodies[1].offsetLeft===e&&(console.log("调头"),e>this.x?(console.log("向右调头le"),e=this.x-10):(console.log("向左调头le"),e=this.x+10)),this.updateBodiesPosition(),this.head.style.left=e+"px",this.checkHeadBody()}}},{key:"y",get:function(){return this.head.offsetTop},set:function(e){if(this.y!==e){if(e<0||e>290)throw new Error("蛇撞墙，游戏结束");this.bodies[1]&&this.bodies[1].offsetTop===e&&(e=e>this.y?this.y-10:this.y+10),this.updateBodiesPosition(),this.head.style.top=e+"px",this.checkHeadBody()}}},{key:"addBody",value:function(){this.snake.insertAdjacentHTML("beforeend","<div></div>")}},{key:"updateBodiesPosition",value:function(){for(var e=this.bodies.length-1;e>0;e--)this.bodies[e].style.left=this.bodies[e-1].offsetLeft+"px",this.bodies[e].style.top=this.bodies[e-1].offsetTop+"px"}},{key:"checkHeadBody",value:function(){for(var e=1;e<this.bodies.length;e++){var t=this.bodies[e];if(this.x===t.offsetLeft&&this.y===t.offsetTop)throw new Error("撞到自己了~~")}}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var x=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.el=document.getElementById("food"),this.x=10*Math.floor(30*Math.random()),this.y=10*Math.floor(30*Math.random()),this.el.style.left=this.x+"px",this.el.style.top=this.y+"px"}var t,n;return t=e,(n=[{key:"update",value:function(){this.x=10*Math.floor(30*Math.random()),this.y=10*Math.floor(30*Math.random()),this.el.style.left=this.x+"px",this.el.style.top=this.y+"px"}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var g=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;m(this,e),this.score=0,this.level=1,this.upScore=n,this.maxLevel=t,this.scoreELe=document.getElementById("score"),this.levelELe=document.getElementById("level")}var t,n;return t=e,(n=[{key:"addScore",value:function(){this.scoreELe.innerHTML=++this.score+"",this.score%this.upScore==0&&this.upLevel()}},{key:"upLevel",value:function(){this.level<this.maxLevel&&(this.levelELe.innerHTML=++this.level+"")}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),k=g;function E(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.direction="",this.snake=new b,this.food=new x,this.scorePanel=new k(10,2),this.init()}var t,n;return t=e,(n=[{key:"init",value:function(){document.addEventListener("keydown",this.keydownHandler.bind(this)),this.run()}},{key:"run",value:function(){var e=this.snake,t=e.x,n=e.y;switch(this.direction){case"ArrowUp":case"Up":n-=10;break;case"ArrowDown":case"Down":n+=10;break;case"ArrowRight":case"Right":t+=10;break;case"ArrowLeft":case"Left":t-=10}this.checkEat(t,n)&&(this.scorePanel.addScore(),this.food.update(),this.snake.addBody());try{this.snake.x=t,this.snake.y=n}catch(e){return void alert(e.message)}clearTimeout(),setTimeout(this.run.bind(this),300-30*(this.scorePanel.level-1))}},{key:"keydownHandler",value:function(e){this.direction=e.key}},{key:"checkEat",value:function(e,t){return e===this.food.x&&t===this.food.y}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())}()}();