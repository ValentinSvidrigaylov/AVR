(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(t,e,r){"use strict";r.r(e);var o=r(127),n=r.n(o);for(var l in o)["default"].indexOf(l)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(l);e.default=n.a},127:function(t,e,r){var o="theme-preference",n=function(){localStorage.setItem(o,d.value),l()},l=function(){var t;document.firstElementChild.setAttribute("data-theme",d.value),null===(t=document.querySelector("#theme-toggle"))||void 0===t||t.setAttribute("aria-label",d.value)},d={value:localStorage.getItem(o)?localStorage.getItem(o):window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"};l(),document.querySelector("#theme-toggle").addEventListener("click",(function(){d.value="light"===d.value?"dark":"light",n()})),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(t){var e=t.matches;d.value=e?"dark":"light",n()}))},128:function(t,e,r){"use strict";r.r(e);var o=r(129),n=r.n(o);for(var l in o)["default"].indexOf(l)<0&&function(t){r.d(e,t,(function(){return o[t]}))}(l);e.default=n.a},129:function(t,e,r){var o=document.documentElement,b=document.body,n="scrollTop",l="scrollHeight";window.onload=function(){window.onscroll=function(){(o[n]||b[n])/((o[l]||b[l])-o.clientHeight)*100>20?document.querySelector("#to-top").setAttribute("data-down","true"):document.querySelector("#to-top").setAttribute("data-down","false")},document.querySelector("#to-top").onclick=function(){window.scrollTo(0,0)}}},175:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return n}));var o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticStyle:{"margin-top":"0.7rem"},attrs:{id:"theme-button-cover"}},[e("button",{staticClass:"theme-toggle",attrs:{id:"theme-toggle",title:"Сменить тему","aria-label":"light","aria-live":"polite"}},[e("svg",{staticClass:"sun-and-moon",attrs:{"aria-hidden":"true",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("mask",{staticClass:"moon",attrs:{id:"moon-mask"}},[e("rect",{attrs:{x:"0",y:"0",width:"100%",height:"100%",fill:"white"}}),t._v(" "),e("circle",{attrs:{cx:"24",cy:"10",r:"6",fill:"black"}})]),t._v(" "),e("circle",{staticClass:"sun",attrs:{cx:"12",cy:"12",r:"6",mask:"url(#moon-mask)",fill:"currentColor"}}),t._v(" "),e("g",{staticClass:"sun-beams",attrs:{stroke:"currentColor"}},[e("line",{attrs:{x1:"12",y1:"1",x2:"12",y2:"3"}}),t._v(" "),e("line",{attrs:{x1:"12",y1:"21",x2:"12",y2:"23"}}),t._v(" "),e("line",{attrs:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}}),t._v(" "),e("line",{attrs:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}}),t._v(" "),e("line",{attrs:{x1:"1",y1:"12",x2:"3",y2:"12"}}),t._v(" "),e("line",{attrs:{x1:"21",y1:"12",x2:"23",y2:"12"}}),t._v(" "),e("line",{attrs:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}}),t._v(" "),e("line",{attrs:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}})])])])])},n=[]},176:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return n}));var o=function(){var t=this;t._self._c,t._self._setupProxy;return t._m(0)},n=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticStyle:{"margin-top":"0.7rem"},attrs:{id:"theme-button-cover"}},[e("button",{staticClass:"to-top",attrs:{id:"to-top",title:"Наверх"}},[t._v(" ↑ ")])])}]},230:function(t,e,r){var content=r(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("70739ade",content,!0,{sourceMap:!1})},231:function(t,e,r){var content=r(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("b724097c",content,!0,{sourceMap:!1})},232:function(t,e,r){var content=r(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("42d3ac24",content,!0,{sourceMap:!1})},243:function(t,e,r){"use strict";var o=r(44),component=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"wrapper"}},[e("header",{staticClass:"sticky-top"},[e("div",{staticClass:"split-90-10"},[e("nav",{staticClass:"navbar"},[e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/",title:"На главную"}},[t._v("Главная страница")]),t._v(" "),e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/history",title:"История"}},[t._v("История")]),t._v(" "),e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/usage",title:"Применение"}},[t._v("Применение")]),t._v(" "),e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/architecture",title:"Структура"}},[t._v("Структура")]),t._v(" "),e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/sources",title:"Источники информации"}},[t._v("Источники информации")]),t._v(" "),e("NuxtLink",{staticClass:"nav-link",attrs:{to:"/about",title:"Об авторе"}},[t._v("Об авторе")])],1),t._v(" "),e("ThemeButton")],1),t._v(" "),e("hr")]),t._v(" "),e("main",[e("Nuxt"),t._v(" "),e("ToTopButton"),t._v(" "),e("NavButtons")],1),t._v(" "),e("footer")])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{ThemeButton:r(307).default,ToTopButton:r(310).default,NavButtons:r(335).default})},244:function(t,e,r){r(245),t.exports=r(246)},301:function(t,e,r){var content=r(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("6c92dffa",content,!0,{sourceMap:!1})},302:function(t,e,r){var o=r(54)((function(i){return i[1]}));o.push([t.i,'@font-face{font-family:"Inter",sans-serif;src:url(https://fonts.googleapis.com/css2?family=Inter:wght@300;900)}html{--background-color:#fff;--outer-background-color:linear-gradient(180deg,#caa6f3 0%,#a43afa) no-repeat;--color:#000;--a-color:#000;scroll-behavior:smooth}html[data-theme=dark]{--background-color:#2e2e2e!important;--color:#fff!important;--outer-background-color:linear-gradient(180deg,#556e80 0%,#374d5e) no-repeat;--a-color:#fff}a{color:#000;color:var(--a-color)}a,a:hover{-webkit-text-decoration:underline!important;text-decoration:underline!important}a:hover{filter:invert(1)}body{background:linear-gradient(180deg,#caa6f3 0,#a43afa) no-repeat;background:var(--outer-background-color);font-family:"Inter",sans-serif;font-size:1em;font-weight:400;height:100%;margin:0;min-height:100vh;padding:0}.split-1-99{display:grid;grid-template-columns:1fr 99fr}.split-2-98{display:grid;grid-template-columns:2fr 98fr}.split-3-97{display:grid;grid-template-columns:3fr 97fr}.split-4-96{display:grid;grid-template-columns:4fr 96fr}.split-5-95{display:grid;grid-template-columns:5fr 95fr}.split-6-94{display:grid;grid-template-columns:6fr 94fr}.split-7-93{display:grid;grid-template-columns:7fr 93fr}.split-8-92{display:grid;grid-template-columns:8fr 92fr}.split-9-91{display:grid;grid-template-columns:9fr 91fr}.split-10-90{display:grid;grid-template-columns:10fr 90fr}.split-11-89{display:grid;grid-template-columns:11fr 89fr}.split-12-88{display:grid;grid-template-columns:12fr 88fr}.split-13-87{display:grid;grid-template-columns:13fr 87fr}.split-14-86{display:grid;grid-template-columns:14fr 86fr}.split-15-85{display:grid;grid-template-columns:15fr 85fr}.split-16-84{display:grid;grid-template-columns:16fr 84fr}.split-17-83{display:grid;grid-template-columns:17fr 83fr}.split-18-82{display:grid;grid-template-columns:18fr 82fr}.split-19-81{display:grid;grid-template-columns:19fr 81fr}.split-20-80{display:grid;grid-template-columns:20fr 80fr}.split-21-79{display:grid;grid-template-columns:21fr 79fr}.split-22-78{display:grid;grid-template-columns:22fr 78fr}.split-23-77{display:grid;grid-template-columns:23fr 77fr}.split-24-76{display:grid;grid-template-columns:24fr 76fr}.split-25-75{display:grid;grid-template-columns:25fr 75fr}.split-26-74{display:grid;grid-template-columns:26fr 74fr}.split-27-73{display:grid;grid-template-columns:27fr 73fr}.split-28-72{display:grid;grid-template-columns:28fr 72fr}.split-29-71{display:grid;grid-template-columns:29fr 71fr}.split-30-70{display:grid;grid-template-columns:30fr 70fr}.split-31-69{display:grid;grid-template-columns:31fr 69fr}.split-32-68{display:grid;grid-template-columns:32fr 68fr}.split-33-67{display:grid;grid-template-columns:33fr 67fr}.split-34-66{display:grid;grid-template-columns:34fr 66fr}.split-35-65{display:grid;grid-template-columns:35fr 65fr}.split-36-64{display:grid;grid-template-columns:36fr 64fr}.split-37-63{display:grid;grid-template-columns:37fr 63fr}.split-38-62{display:grid;grid-template-columns:38fr 62fr}.split-39-61{display:grid;grid-template-columns:39fr 61fr}.split-40-60{display:grid;grid-template-columns:40fr 60fr}.split-41-59{display:grid;grid-template-columns:41fr 59fr}.split-42-58{display:grid;grid-template-columns:42fr 58fr}.split-43-57{display:grid;grid-template-columns:43fr 57fr}.split-44-56{display:grid;grid-template-columns:44fr 56fr}.split-45-55{display:grid;grid-template-columns:45fr 55fr}.split-46-54{display:grid;grid-template-columns:46fr 54fr}.split-47-53{display:grid;grid-template-columns:47fr 53fr}.split-48-52{display:grid;grid-template-columns:48fr 52fr}.split-49-51{display:grid;grid-template-columns:49fr 51fr}.split-50-50{display:grid;grid-template-columns:50fr 50fr}.split-51-49{display:grid;grid-template-columns:51fr 49fr}.split-52-48{display:grid;grid-template-columns:52fr 48fr}.split-53-47{display:grid;grid-template-columns:53fr 47fr}.split-54-46{display:grid;grid-template-columns:54fr 46fr}.split-55-45{display:grid;grid-template-columns:55fr 45fr}.split-56-44{display:grid;grid-template-columns:56fr 44fr}.split-57-43{display:grid;grid-template-columns:57fr 43fr}.split-58-42{display:grid;grid-template-columns:58fr 42fr}.split-59-41{display:grid;grid-template-columns:59fr 41fr}.split-60-40{display:grid;grid-template-columns:60fr 40fr}.split-61-39{display:grid;grid-template-columns:61fr 39fr}.split-62-38{display:grid;grid-template-columns:62fr 38fr}.split-63-37{display:grid;grid-template-columns:63fr 37fr}.split-64-36{display:grid;grid-template-columns:64fr 36fr}.split-65-35{display:grid;grid-template-columns:65fr 35fr}.split-66-34{display:grid;grid-template-columns:66fr 34fr}.split-67-33{display:grid;grid-template-columns:67fr 33fr}.split-68-32{display:grid;grid-template-columns:68fr 32fr}.split-69-31{display:grid;grid-template-columns:69fr 31fr}.split-70-30{display:grid;grid-template-columns:70fr 30fr}.split-71-29{display:grid;grid-template-columns:71fr 29fr}.split-72-28{display:grid;grid-template-columns:72fr 28fr}.split-73-27{display:grid;grid-template-columns:73fr 27fr}.split-74-26{display:grid;grid-template-columns:74fr 26fr}.split-75-25{display:grid;grid-template-columns:75fr 25fr}.split-76-24{display:grid;grid-template-columns:76fr 24fr}.split-77-23{display:grid;grid-template-columns:77fr 23fr}.split-78-22{display:grid;grid-template-columns:78fr 22fr}.split-79-21{display:grid;grid-template-columns:79fr 21fr}.split-80-20{display:grid;grid-template-columns:80fr 20fr}.split-81-19{display:grid;grid-template-columns:81fr 19fr}.split-82-18{display:grid;grid-template-columns:82fr 18fr}.split-83-17{display:grid;grid-template-columns:83fr 17fr}.split-84-16{display:grid;grid-template-columns:84fr 16fr}.split-85-15{display:grid;grid-template-columns:85fr 15fr}.split-86-14{display:grid;grid-template-columns:86fr 14fr}.split-87-13{display:grid;grid-template-columns:87fr 13fr}.split-88-12{display:grid;grid-template-columns:88fr 12fr}.split-89-11{display:grid;grid-template-columns:89fr 11fr}.split-90-10{display:grid;grid-template-columns:90fr 10fr}.split-91-9{display:grid;grid-template-columns:91fr 9fr}.split-92-8{display:grid;grid-template-columns:92fr 8fr}.split-93-7{display:grid;grid-template-columns:93fr 7fr}.split-94-6{display:grid;grid-template-columns:94fr 6fr}.split-95-5{display:grid;grid-template-columns:95fr 5fr}.split-96-4{display:grid;grid-template-columns:96fr 4fr}.split-97-3{display:grid;grid-template-columns:97fr 3fr}.split-98-2{display:grid;grid-template-columns:98fr 2fr}.split-99-1{display:grid;grid-template-columns:99fr 1fr}.split-100-0{display:grid;grid-template-columns:100fr 0fr}@media(max-width:600px){.mobile-no-split{display:flex!important;flex-direction:column}.mobile-no-split .mobile-first{order:-2147483647}}main{background:#fff;background:var(--background-color);box-sizing:border-box;margin-left:auto;margin-right:auto;padding:.5rem;width:80vw}@media(max-width:600px){main{width:100vw}}footer,header,nav{background:#fff;background:var(--background-color);margin:0!important}nav a{-webkit-text-decoration:none!important;text-decoration:none!important}img{display:block}figure{margin:0}figure figcaption{font-style:italic;padding:1em;text-align:center}figure figcaption *{margin:0!important}hr{border-color:#000;border-color:var(--color);margin:0}.nuxt-link-exact-active{-webkit-text-decoration:underline!important;text-decoration:underline!important}',""]),o.locals={},t.exports=o},303:function(t,e,r){var content=r(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("486e8705",content,!0,{sourceMap:!1})},304:function(t,e,r){var o=r(54)((function(i){return i[1]}));o.push([t.i,"@import url(https://unpkg.com/open-props/easings.min.css);"]),o.push([t.i,":where(html){--ease-1:cubic-bezier(.25,0,.5,1);--ease-2:cubic-bezier(.25,0,.4,1);--ease-3:cubic-bezier(.25,0,.3,1);--ease-4:cubic-bezier(.25,0,.2,1);--ease-5:cubic-bezier(.25,0,.1,1);--ease-in-1:cubic-bezier(.25,0,1,1);--ease-in-2:cubic-bezier(.50,0,1,1);--ease-in-3:cubic-bezier(.70,0,1,1);--ease-in-4:cubic-bezier(.90,0,1,1);--ease-in-5:cubic-bezier(1,0,1,1);--ease-out-1:cubic-bezier(0,0,.75,1);--ease-out-2:cubic-bezier(0,0,.50,1);--ease-out-3:cubic-bezier(0,0,.3,1);--ease-out-4:cubic-bezier(0,0,.1,1);--ease-out-5:cubic-bezier(0,0,0,1);--ease-in-out-1:cubic-bezier(.1,0,.9,1);--ease-in-out-2:cubic-bezier(.3,0,.7,1);--ease-in-out-3:cubic-bezier(.5,0,.5,1);--ease-in-out-4:cubic-bezier(.7,0,.3,1);--ease-in-out-5:cubic-bezier(.9,0,.1,1);--ease-elastic-1:cubic-bezier(.5,.75,.75,1.25);--ease-elastic-2:cubic-bezier(.5,1,.75,1.25);--ease-elastic-3:cubic-bezier(.5,1.25,.75,1.25);--ease-elastic-4:cubic-bezier(.5,1.5,.75,1.25);--ease-elastic-5:cubic-bezier(.5,1.75,.75,1.25);--ease-squish-1:cubic-bezier(.5,-.1,.1,1.5);--ease-squish-2:cubic-bezier(.5,-.3,.1,1.5);--ease-squish-3:cubic-bezier(.5,-.5,.1,1.5);--ease-squish-4:cubic-bezier(.5,-.7,.1,1.5);--ease-squish-5:cubic-bezier(.5,-.9,.1,1.5);--ease-step-1:steps(2);--ease-step-2:steps(3);--ease-step-3:steps(4);--ease-step-4:steps(7);--ease-step-5:steps(10)}.sun-and-moon>.moon,.sun-and-moon>.sun,.sun-and-moon>.sun-beams{transform-origin:center center}.sun-and-moon>.moon,.sun-and-moon>.sun{fill:var(--icon-fill)}.theme-toggle:focus-visible>.sun-and-moon>.moon{fill:var(--icon-fill-hover)}.theme-toggle:focus-visible>.sun-and-moon>.sun{fill:var(--icon-fill-hover)}.theme-toggle:hover>.sun-and-moon>.moon,.theme-toggle:hover>.sun-and-moon>.sun{fill:var(--icon-fill-hover)}.sun-and-moon>.sun-beams{stroke:var(--icon-fill);stroke-width:2px}.theme-toggle:focus-visible .sun-and-moon>.sun-beams{stroke:var(--icon-fill-hover)}.theme-toggle:hover .sun-and-moon>.sun-beams{stroke:var(--icon-fill-hover)}[data-theme=dark] .sun-and-moon>.sun{transform:scale(1.75)}[data-theme=dark] .sun-and-moon>.sun-beams{opacity:0}[data-theme=dark] .sun-and-moon>.moon>circle{transform:translate(-7px)}@supports (cx:1){[data-theme=dark] .sun-and-moon>.moon>circle{cx:17;transform:translate(0)}}@media (prefers-reduced-motion:no-preference){.sun-and-moon>.sun{transition:transform .5s var(--ease-elastic-3)}.sun-and-moon>.sun-beams{transition:transform .5s var(--ease-elastic-4),opacity .5s var(--ease-3)}.sun-and-moon .moon>circle{transition:transform .25s var(--ease-out-5)}@supports (cx:1){.sun-and-moon .moon>circle{transition:cx .25s var(--ease-out-5)}}[data-theme=dark] .sun-and-moon>.sun{transform:scale(1.75);transition-duration:.25s;transition-timing-function:var(--ease-3)}[data-theme=dark] .sun-and-moon>.sun-beams{transform:rotate(-25deg);transition-duration:.15s}[data-theme=dark] .sun-and-moon>.moon>circle{transition-delay:.25s;transition-duration:.5s}}.theme-toggle{--size:2rem;--icon-fill:#454d54;--icon-fill-hover:#22262a;-webkit-tap-highlight-color:transparent;aspect-ratio:1;background:none;border:none;border-radius:50%;cursor:pointer;height:2rem;height:var(--size);outline-offset:5px;padding:0;touch-action:manipulation;width:2rem;width:var(--size)}.theme-toggle>svg{stroke-linecap:round;height:100%;width:100%}[data-theme=dark] .theme-toggle{--icon-fill:#abb3ba;--icon-fill-hover:#e2e6e9}@media (hover:none){.theme-toggle{--size:48px}}*{box-sizing:border-box;margin:0}html{color-scheme:light}html[data-theme=dark]{color-scheme:dark}@supports not (color-scheme:dark){html[data-theme=dark]{background:#111}}html{--background-color:#fff;--color:#000}html[data-theme=dark]{--background-color:#000;--color:#fff}body{background-color:#fff;background-color:var(--background-color);color:#000;color:var(--color)}div#theme-button-cover{float:left;margin:.4rem;transition:.4s ease;width:10vw}div#theme-button-cover button#theme-toggle{transition:.4s ease}@media (pointer:fine) and (min-width:1000px){html[data-theme=dark] div#theme-button-cover button#theme-toggle{transform:translateX(100%)}}",""]),o.locals={},t.exports=o},305:function(t,e,r){var content=r(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("18c9ba14",content,!0,{sourceMap:!1})},306:function(t,e,r){var o=r(54)((function(i){return i[1]}));o.push([t.i,"#to-top{background:var(--background-color);border:1px solid #000;border-radius:50%;bottom:1rem;color:var(--color);font-size:1.5em;position:fixed;right:1rem;visibility:hidden}#to-top[data-down=true]{visibility:visible}",""]),o.locals={},t.exports=o},307:function(t,e,r){"use strict";r.r(e);var o=r(175),n=r(126);for(var l in n)["default"].indexOf(l)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(l);r(308);var d=r(44),component=Object(d.a)(n.default,o.a,o.b,!1,null,null,null);e.default=component.exports},308:function(t,e,r){"use strict";r(230)},309:function(t,e,r){var o=r(54)((function(i){return i[1]}));o.push([t.i,"@import url(https://unpkg.com/open-props/easings.min.css);"]),o.push([t.i,":where(html){--ease-1:cubic-bezier(.25,0,.5,1);--ease-2:cubic-bezier(.25,0,.4,1);--ease-3:cubic-bezier(.25,0,.3,1);--ease-4:cubic-bezier(.25,0,.2,1);--ease-5:cubic-bezier(.25,0,.1,1);--ease-in-1:cubic-bezier(.25,0,1,1);--ease-in-2:cubic-bezier(.50,0,1,1);--ease-in-3:cubic-bezier(.70,0,1,1);--ease-in-4:cubic-bezier(.90,0,1,1);--ease-in-5:cubic-bezier(1,0,1,1);--ease-out-1:cubic-bezier(0,0,.75,1);--ease-out-2:cubic-bezier(0,0,.50,1);--ease-out-3:cubic-bezier(0,0,.3,1);--ease-out-4:cubic-bezier(0,0,.1,1);--ease-out-5:cubic-bezier(0,0,0,1);--ease-in-out-1:cubic-bezier(.1,0,.9,1);--ease-in-out-2:cubic-bezier(.3,0,.7,1);--ease-in-out-3:cubic-bezier(.5,0,.5,1);--ease-in-out-4:cubic-bezier(.7,0,.3,1);--ease-in-out-5:cubic-bezier(.9,0,.1,1);--ease-elastic-1:cubic-bezier(.5,.75,.75,1.25);--ease-elastic-2:cubic-bezier(.5,1,.75,1.25);--ease-elastic-3:cubic-bezier(.5,1.25,.75,1.25);--ease-elastic-4:cubic-bezier(.5,1.5,.75,1.25);--ease-elastic-5:cubic-bezier(.5,1.75,.75,1.25);--ease-squish-1:cubic-bezier(.5,-.1,.1,1.5);--ease-squish-2:cubic-bezier(.5,-.3,.1,1.5);--ease-squish-3:cubic-bezier(.5,-.5,.1,1.5);--ease-squish-4:cubic-bezier(.5,-.7,.1,1.5);--ease-squish-5:cubic-bezier(.5,-.9,.1,1.5);--ease-step-1:steps(2);--ease-step-2:steps(3);--ease-step-3:steps(4);--ease-step-4:steps(7);--ease-step-5:steps(10)}.sun-and-moon>.moon,.sun-and-moon>.sun,.sun-and-moon>.sun-beams{transform-origin:center center}.sun-and-moon>.moon,.sun-and-moon>.sun{fill:var(--icon-fill)}.theme-toggle:focus-visible>.sun-and-moon>.moon{fill:var(--icon-fill-hover)}.theme-toggle:focus-visible>.sun-and-moon>.sun{fill:var(--icon-fill-hover)}.theme-toggle:hover>.sun-and-moon>.moon,.theme-toggle:hover>.sun-and-moon>.sun{fill:var(--icon-fill-hover)}.sun-and-moon>.sun-beams{stroke:var(--icon-fill);stroke-width:2px}.theme-toggle:focus-visible .sun-and-moon>.sun-beams{stroke:var(--icon-fill-hover)}.theme-toggle:hover .sun-and-moon>.sun-beams{stroke:var(--icon-fill-hover)}[data-theme=dark] .sun-and-moon>.sun{transform:scale(1.75)}[data-theme=dark] .sun-and-moon>.sun-beams{opacity:0}[data-theme=dark] .sun-and-moon>.moon>circle{transform:translate(-7px)}@supports (cx:1){[data-theme=dark] .sun-and-moon>.moon>circle{cx:17;transform:translate(0)}}@media (prefers-reduced-motion:no-preference){.sun-and-moon>.sun{transition:transform .5s var(--ease-elastic-3)}.sun-and-moon>.sun-beams{transition:transform .5s var(--ease-elastic-4),opacity .5s var(--ease-3)}.sun-and-moon .moon>circle{transition:transform .25s var(--ease-out-5)}@supports (cx:1){.sun-and-moon .moon>circle{transition:cx .25s var(--ease-out-5)}}[data-theme=dark] .sun-and-moon>.sun{transform:scale(1.75);transition-duration:.25s;transition-timing-function:var(--ease-3)}[data-theme=dark] .sun-and-moon>.sun-beams{transform:rotate(-25deg);transition-duration:.15s}[data-theme=dark] .sun-and-moon>.moon>circle{transition-delay:.25s;transition-duration:.5s}}.theme-toggle{--size:2rem;--icon-fill:#454d54;--icon-fill-hover:#22262a;-webkit-tap-highlight-color:transparent;aspect-ratio:1;background:none;border:none;border-radius:50%;cursor:pointer;height:2rem;height:var(--size);outline-offset:5px;padding:0;touch-action:manipulation;width:2rem;width:var(--size)}.theme-toggle>svg{stroke-linecap:round;height:100%;width:100%}[data-theme=dark] .theme-toggle{--icon-fill:#abb3ba;--icon-fill-hover:#e2e6e9}@media (hover:none){.theme-toggle{--size:48px}}*{box-sizing:border-box;margin:0}html{color-scheme:light}html[data-theme=dark]{color-scheme:dark}@supports not (color-scheme:dark){html[data-theme=dark]{background:#111}}html{--background-color:#fff;--color:#000}html[data-theme=dark]{--background-color:#000;--color:#fff}body{background-color:#fff;background-color:var(--background-color);color:#000;color:var(--color)}div#theme-button-cover{float:left;margin:.4rem;transition:.4s ease;width:10vw}div#theme-button-cover button#theme-toggle{transition:.4s ease}@media (pointer:fine) and (min-width:1000px){html[data-theme=dark] div#theme-button-cover button#theme-toggle{transform:translateX(100%)}}",""]),o.locals={},t.exports=o},310:function(t,e,r){"use strict";r.r(e);var o=r(176),n=r(128);for(var l in n)["default"].indexOf(l)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(l);r(311);var d=r(44),component=Object(d.a)(n.default,o.a,o.b,!1,null,null,null);e.default=component.exports},311:function(t,e,r){"use strict";r(231)},312:function(t,e,r){var o=r(54)((function(i){return i[1]}));o.push([t.i,"#to-top{background:var(--background-color);border:1px solid #000;border-radius:50%;bottom:1rem;color:var(--color);font-size:1.5em;position:fixed;right:1rem;visibility:hidden}#to-top[data-down=true]{visibility:visible}",""]),o.locals={},t.exports=o},313:function(t,e,r){"use strict";r(232)},314:function(t,e,r){var o=r(54)((function(i){return i[1]}));o.push([t.i,"html[data-theme=light]{--side-nav-color:#1e1e1e}html[data-theme=dark]{--side-nav-color:#e1e1e1}.fixed_nav{background:var(--background-color);border:.1em solid #000;border-radius:.5rem;bottom:1%;color:var(--side-color);display:inline-block;left:50%;position:fixed;transform:translate(-50%,-50%);z-index:2147483647}@media (max-width:400px){.fixed_nav{bottom:-1.5%;left:75%;width:45vw}}.fixed_nav>a{padding:0 .8rem}.fixed_nav>a:hover{background-color:var(--side-nav-color);border-radius:.5rem;filter:invert(1);-webkit-text-decoration:underline!important;text-decoration:underline!important}.hide_fixed_nav,.nav-link{display:inline-block}.hide_fixed_nav{bottom:2.5%;left:2.5%;position:fixed}.hide_fixed_nav>button{background:var(--background-color);border:.1em solid #000;border-radius:.5rem;color:var(--side-color)}",""]),o.locals={},t.exports=o},335:function(t,e,r){"use strict";r.r(e);var o=r(29),n=(r(1),r(3),r(11),r(161),{data:function(){return{reduced:!0,urls:["/","/history","/usage","/architecture","/sources","/about"],currentRoute:"",currentRouteRaw:"",url_home:"/",url_back:"",url_forth:"",showBack:!0,showForth:!0}},methods:{HideButtons:function(){console.log(2),"undefined"!=typeof document&&Object(o.a)(document.getElementsByClassName("fixed_nav")).forEach((function(t){t.style.display="none"==t.style.display?"block":"none"}))},CheckIndexes:function(){this.reduced&&(this.url_back==this.urls[this.urls.length-1]?this.showBack=!1:this.showBack=!0,this.url_forth==this.urls[0]?this.showForth=!1:this.showForth=!0)}},beforeMount:function(){this.currentRoute=location.pathname.match(/[\w/]*\/(\w*)/i)[1],this.currentRouteRaw=location.pathname,this.url_back=this.urls[this.urls.indexOf(location.pathname)-1>-1?this.urls.indexOf(location.pathname)-1:this.urls.length-1],this.url_forth=this.urls[this.urls.indexOf(location.pathname)+1<this.urls.length?this.urls.indexOf(location.pathname)+1:0],this.CheckIndexes()},watch:{$route:function(t,e){console.log(t),this.currentRouteRaw=t.path,this.currentRoute=this.currentRouteRaw.match(/[\w/]*(\/\w*)/i)[1]||"",console.log(this.currentRouteRaw),console.log(this.currentRoute),this.url_back=this.urls[this.urls.indexOf(this.currentRoute)>0?this.urls.indexOf(this.currentRoute)-1:this.urls.length-1],this.url_forth=this.urls[this.urls.indexOf(this.currentRoute)+1<this.urls.length?this.urls.indexOf(this.currentRoute)+1:0],this.CheckIndexes()}}}),l=(r(313),r(44)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"outer_fixed_nav"},[e("div",{staticClass:"hide_fixed_nav"},[e("button",{on:{click:function(e){return t.HideButtons()}}},[t._v("Скрыть/Показать")])]),t._v(" "),e("div",{ref:"fixed_nav",staticClass:"fixed_nav"},[t.showBack?e("NuxtLink",{staticClass:"nav-link",attrs:{to:{path:t.url_back},title:"Назад"}},[t._v("Назад")]):t._e(),t._v(" "),e("NuxtLink",{staticClass:"nav-link",attrs:{to:{path:t.url_home},title:"На главную"}},[t._v("На главную")]),t._v(" "),t.showForth?e("NuxtLink",{staticClass:"nav-link",attrs:{to:{path:t.url_forth},title:"Вперёд"}},[t._v("Вперёд")]):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports}},[[244,12,1,13]]]);