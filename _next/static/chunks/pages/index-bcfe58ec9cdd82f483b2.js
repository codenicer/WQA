_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=o,t.useAmp=function(){return o(r.default.useContext(a.AmpStateContext))};var i,r=(i=n("q1tI"))&&i.__esModule?i:{default:i},a=n("lwAK");function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,i=e.hybrid,r=void 0!==i&&i,a=e.hasQuery,o=void 0!==a&&a;return n||r&&o}},"7W2i":function(e,t,n){var i=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=h,t.default=void 0;var i,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var a=i?Object.getOwnPropertyDescriptor(e,r):null;a&&(a.get||a.set)?Object.defineProperty(n,r,a):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(i=n("Xuae"))&&i.__esModule?i:{default:i},o=n("lwAK"),s=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function h(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var _=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(h(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,i={};return function(r){var a=!0,o=!1;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){o=!0;var s=r.key.slice(r.key.indexOf("$")+1);e.has(s)?a=!1:e.add(s)}switch(r.type){case"title":case"base":t.has(r.type)?a=!1:t.add(r.type);break;case"meta":for(var c=0,l=_.length;c<l;c++){var h=_[c];if(r.props.hasOwnProperty(h))if("charSet"===h)n.has(h)?a=!1:n.add(h);else{var u=r.props[h],d=i[h]||new Set;"name"===h&&o||!d.has(u)?(d.add(u),i[h]=d):a=!1}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function p(e){var t=e.children,n=(0,r.useContext)(o.AmpStateContext),i=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(a.default,{reduceComponentsToState:d,headManager:i,inAmpMode:(0,c.isInAmpMode)(n)},t)}p.rewind=function(){};var m=p;t.default=m},"8MtW":function(e,t,n){e.exports={indicator_wrapper:"carousel-indicator_indicator_wrapper___a5PE",carousel_indicator:"carousel-indicator_carousel_indicator__WX9HM"}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var i;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((i=n("q1tI"))&&i.__esModule?i:{default:i}).default.createContext({});t.HeadManagerContext=r},Ijbi:function(e,t,n){var i=n("WkPL");e.exports=function(e){if(Array.isArray(e))return i(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var i=Object.assign.bind(Object);e.exports=i,e.exports.default=e.exports},RIqP:function(e,t,n){var i=n("Ijbi"),r=n("EbDI"),a=n("ZhPi"),o=n("Bnag");e.exports=function(e){return i(e)||r(e)||a(e)||o()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var i=n("nKUr"),r=n("g4pe"),a=n.n(r),o=n("iwvq"),s=n.n(o),c=n("rePB"),l=n("q1tI"),h=n("WULK"),u=n.n(h);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e){var t=e.done,n=void 0===t||t,r=Object(l.useState)(!1),a=r[0],o=r[1],s=Object(l.useState)(!1),c=s[0],h=s[1],_=Object(l.useState)({lastPos:0,scroll:!1,onTop:!0}),p=_[0],m=_[1],f=Object(l.useState)(["".concat(u.a.mobile_nav)]),b=f[0],j=f[1],v=function(){var e=window.pageYOffset;e>120?e<p.lastPos?(m({lastPos:e,scroll:!0,onTop:!1}),h(!1)):(m({lastPos:e,scroll:!1,onTop:!1}),h(!0)):0===e?m(d(d({},p),{},{onTop:!0})):(h(!1),m(d(d({},p),{},{scroll:!1,onTop:!1})))};return Object(l.useEffect)((function(){n&&(j(["".concat(u.a.mobile_nav),"ani-nav"]),c&&(o(!1),j(["".concat(u.a.mobile_nav),"mnav-hide"])),p.scroll&&j(["".concat(u.a.mobile_nav),"ani-nav-scroll-down"]),p.onTop&&j(["".concat(u.a.mobile_nav),"ani-nav"]))}),[c,n,p.onTop]),Object(l.useEffect)((function(){return window.addEventListener("scroll",v),function(){return window.removeEventListener("scroll",v)}}),[p.lastPos]),Object(i.jsxs)("nav",{className:b.join(" "),children:[Object(i.jsxs)("svg",{dataname:"Component 10 \u2013 1",width:"45",height:"45",viewBox:"0 0 64 64",children:[Object(i.jsxs)("g",{id:"Ellipse_2",dataname:"Ellipse 2",fill:"#fff",stroke:"#3c58cb",strokeWidth:"5",children:[Object(i.jsx)("circle",{cx:"32",cy:"32",r:"32",stroke:"none"}),Object(i.jsx)("circle",{cx:"32",cy:"32",r:"29.5",fill:"none"})]}),Object(i.jsx)("text",{id:"WQA",transform:"translate(10 38)",fill:"#001c8e",fontSize:"17",fontFamily:"Poppins-Bold, Poppins",fontWeight:"700",children:Object(i.jsx)("tspan",{x:"0",y:"0",children:"WQA"})})]}),Object(i.jsx)("h5",{children:"More that just a Certifacte"}),Object(i.jsx)("input",{checked:a,onChange:function(){return o(!a)},type:"checkbox",className:u.a.mobile_nav_checkbox}),Object(i.jsx)("div",{className:u.a.mobile_nav_humberger,children:Object(i.jsx)("div",{})}),Object(i.jsx)("div",{className:u.a.mobile_nav_link_container,children:Object(i.jsx)("div",{children:Object(i.jsx)("div",{children:Object(i.jsxs)("ul",{className:u.a.mobile_nav_link_list,children:[Object(i.jsx)("li",{children:Object(i.jsx)("a",{children:Object(i.jsxs)("div",{className:u.a.mobile_nav__list_cont,children:[Object(i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 30.849 27.987",children:Object(i.jsx)("path",{id:"Icon_metro-home",dataname:"Icon metro-home",d:"M33.419,19.715,17.995,7.743,2.571,19.716V14.834L17.995,2.861,33.419,14.834Zm-3.856-.435V30.849H21.851V23.136H14.139v7.712H6.427V19.28L17.995,10.6Z",transform:"translate(-2.571 -2.861)",fill:"#fff"})}),Object(i.jsx)("p",{children:"Home"})]})})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{children:Object(i.jsxs)("div",{className:u.a.mobile_nav__list_cont,children:[Object(i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 18 36",children:Object(i.jsx)("path",{id:"Icon_open-info",dataname:"Icon open-info",d:"M13.5,0A4.5,4.5,0,1,0,18,4.5,4.513,4.513,0,0,0,13.5,0ZM6.75,11.25A6.741,6.741,0,0,0,0,18H4.5A2.25,2.25,0,0,1,9,18c0,1.26-4.5,7.38-4.5,11.25A6.657,6.657,0,0,0,11.25,36,6.741,6.741,0,0,0,18,29.25H13.5a2.25,2.25,0,0,1-4.5,0c0-1.62,4.5-8.28,4.5-11.25A6.8,6.8,0,0,0,6.75,11.25Z",fill:"#fff"})}),Object(i.jsx)("p",{children:"About"})]})})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{children:Object(i.jsxs)("div",{className:u.a.mobile_nav__list_cont,children:[Object(i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 45 25",children:Object(i.jsx)("path",{id:"Icon_awesome-hands-helping",dataname:"Icon awesome-hands-helping",d:"M34.313,13.5H23.625v3.938a5.063,5.063,0,0,1-10.125,0V8.887L8.937,11.63A4.49,4.49,0,0,0,6.75,15.483v3.326L1.125,22.057A2.245,2.245,0,0,0,.3,25.13l5.625,9.745A2.251,2.251,0,0,0,9,35.7l7.27-4.2h9.6a4.5,4.5,0,0,0,4.5-4.5H31.5a2.248,2.248,0,0,0,2.25-2.25v-4.5h.563A1.683,1.683,0,0,0,36,18.563V15.188A1.683,1.683,0,0,0,34.313,13.5ZM44.7,10.87,39.073,1.125A2.251,2.251,0,0,0,36,.3L28.73,4.5H21.544a4.534,4.534,0,0,0-2.384.682L16.8,6.652A2.235,2.235,0,0,0,15.75,8.557v8.88a2.813,2.813,0,0,0,5.625,0V11.25H34.313a3.94,3.94,0,0,1,3.938,3.938v2l5.625-3.248A2.252,2.252,0,0,0,44.7,10.87Z",transform:"translate(0.002 -0.002)",fill:"#fff"})}),Object(i.jsx)("p",{href:"#experiences",children:"Services "})]})})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{children:Object(i.jsxs)("div",{className:u.a.mobile_nav__list_cont,children:[Object(i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 32.835 32.895",children:Object(i.jsx)("path",{id:"Icon_feather-phone",dataname:"Icon feather-phone",d:"M33,25.38v4.5a3,3,0,0,1-3.27,3,29.685,29.685,0,0,1-12.945-4.6,29.25,29.25,0,0,1-9-9A29.685,29.685,0,0,1,3.18,6.27,3,3,0,0,1,6.165,3h4.5a3,3,0,0,1,3,2.58A19.26,19.26,0,0,0,14.715,9.8a3,3,0,0,1-.675,3.165l-1.905,1.9a24,24,0,0,0,9,9l1.9-1.905a3,3,0,0,1,3.165-.675,19.26,19.26,0,0,0,4.215,1.05A3,3,0,0,1,33,25.38Z",transform:"translate(-1.667 -1.5)",fill:"none",stroke:"#fff",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3"})}),Object(i.jsx)("p",{children:"Contact"})]})})}),Object(i.jsx)("li",{children:Object(i.jsx)("a",{children:Object(i.jsxs)("div",{className:u.a.mobile_nav__list_cont,children:[Object(i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 31.5 15",children:Object(i.jsx)("path",{id:"Icon_ionic-md-people",dataname:"Icon ionic-md-people",d:"M23.727,17.153a4.49,4.49,0,0,0,4.3-4.639,4.49,4.49,0,0,0-4.3-4.639,4.49,4.49,0,0,0-4.3,4.639A4.49,4.49,0,0,0,23.727,17.153Zm-11.454,0a4.49,4.49,0,0,0,4.3-4.639,4.49,4.49,0,0,0-4.3-4.639,4.49,4.49,0,0,0-4.3,4.639A4.49,4.49,0,0,0,12.273,17.153Zm0,3.4c-3.365,0-10.023,1.778-10.023,5.412v4.175H22.5V25.966C22.5,22.332,15.638,20.554,12.273,20.554Zm11.454.851a6.958,6.958,0,0,0-1.227.077c1.647,1.314,2.25,2.165,2.25,4.484v4.175h9V25.966C33.75,22.332,27.092,21.4,23.727,21.4Z",transform:"translate(-2.25 -7.875)",fill:"#fff"})}),Object(i.jsx)("p",{children:"Clients "})]})})})]})})})})]})}var m={metaTitle:{home:{meta:"",title:""}},carousel:[{img:"/test.jpg",headline:" We Provide Your Certificate",subHeadline:"NOT CERTIFIED YET? ",button:"Get Certified"},{img:"/test2.jpg",headline:"Head Line Example Here, Lest Go",subHeadline:"SUB-HEADLINE EXAMPLE",button:null}]},f=n("8MtW"),b=n.n(f),j=function(e){var t=e.selected;return Object(i.jsx)("span",{className:b.a.carousel_indicator,style:{opacity:t?"1":"0.3"}})};function v(e){return e.total<2?Object(i.jsx)("div",{className:b.a.indicator_wrapper},e.index):Object(i.jsx)("div",{className:b.a.indicator_wrapper,children:Array.apply(null,Array(e.total)).map((function(t,n){return Object(i.jsx)(j,{selected:e.index===n},n)}))},e.index)}var x=n("vNsR"),w=n.n(x);function g(){return Object(i.jsx)("section",{className:s.a.carousel_container,children:Object(i.jsx)(w.a,{loop:!0,auto:!0,interval:8e3,widgets:[v],children:m.carousel.map((function(e,t){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:s.a.carousel_img,style:{backgroundImage:"url('".concat(e.img,"')")}},t),Object(i.jsxs)("div",{className:s.a.carousel__hero_cont,children:[Object(i.jsx)("h3",{className:s.a.hero_cont__sub_headline,children:e.subHeadline}),Object(i.jsx)("h1",{className:s.a.hero_cont__headline,children:e.headline}),e.button?Object(i.jsx)("button",{className:s.a.hero_cont__headline_cta,children:e.button}):Object(i.jsx)(i.Fragment,{})]})]})}))})})}function O(){return Object(i.jsxs)("section",{className:s.a.introduction_cont,children:[Object(i.jsxs)("div",{className:s.a.intoduction_who_we_are,children:[Object(i.jsx)("h1",{className:s.a.who_we_are__heading,children:"Who We Are"}),Object(i.jsx)("p",{className:s.a.who_we_are__information,children:"Dolore quis sit ad ex eu veniam culpa occaecat cupidatat exercitation voluptate. Deserunt elit et minim magna pariatur quis exercitation amet consectetur excepteur pariatur."}),Object(i.jsx)("button",{className:s.a.who_we_are__cta,children:"Contact Us"})]}),Object(i.jsxs)("div",{className:s.a.intoduction_what_we_do,children:[Object(i.jsx)("img",{className:s.a.who_we_do__icon,src:"/assets/what_we_do.svg",alt:"what we do"}),Object(i.jsx)("h1",{className:s.a.who_we_do__heading,children:"What We Do"}),Object(i.jsx)("p",{className:s.a.who_we_do__information,children:"Dolore quis sit ad ex eu veniam culpa occaecat cupidatat exercitation voluptate. Deserunt elit et minim magna pariatur quis exercitation amet consectetur excepteur pariatur."})]}),Object(i.jsxs)("div",{className:s.a.intoduction_services,children:[Object(i.jsx)("img",{className:s.a.services__icon,src:"/assets/services_icon.svg"}),Object(i.jsx)("h1",{className:s.a.services__heading,children:"Our Services"}),Object(i.jsx)("p",{className:s.a.services__information,children:"Dolore quis sit ad ex eu veniam culpa occaecat cupidatat exercitation voluptate. Deserunt elit et minim magna pariatur quis exercitation amet consectetur excepteur pariatur."})]}),Object(i.jsxs)("div",{className:s.a.train_with_us_container,children:[Object(i.jsx)("img",{src:"/img3.jpg",className:s.a.train_with_us_img}),Object(i.jsxs)("div",{className:s.a.train_with_us_informations,children:[Object(i.jsx)("h1",{className:s.a.train_with_us_heading,children:"We Offer Training"}),Object(i.jsx)("p",{className:s.a.train_with_us_moto,children:"Far far away, behind the word mountains, far from the countries around the world."}),Object(i.jsx)("button",{className:s.a.train_with_us_cta,children:"View Details"}),Object(i.jsxs)("ul",{children:[Object(i.jsxs)("li",{children:[Object(i.jsx)("h5",{children:"700"}),Object(i.jsx)("p",{children:"Certicate Issued"})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("h5",{children:"600"}),Object(i.jsx)("p",{children:"Happy Clients"})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("h5",{children:"999"}),Object(i.jsx)("p",{children:"Business Partners"})]}),Object(i.jsxs)("li",{children:[Object(i.jsx)("h5",{children:"700"}),Object(i.jsx)("p",{children:"Consultant"})]})]})]})]})]})}function y(){return Object(i.jsxs)("footer",{className:s.a.main_footer,children:[Object(i.jsx)("h5",{className:s.a.footer_title,children:"Company"}),Object(i.jsxs)("ul",{className:s.a.footer_title__links,children:[Object(i.jsx)("li",{className:s.a.footer_title__link,children:"Home"}),Object(i.jsx)("li",{className:s.a.footer_title__link,children:"Services"}),Object(i.jsx)("li",{className:s.a.footer_title__link,children:"About"}),Object(i.jsx)("li",{className:s.a.footer_title__link,children:"Contact"})]}),Object(i.jsx)("h5",{className:s.a.footer_title,children:"Contact"}),Object(i.jsxs)("ul",{className:s.a.footer_title__links,children:[Object(i.jsx)("li",{className:s.a.footer_title__link,children:"+81231 1231"}),Object(i.jsx)("li",{className:s.a.footer_title__link,children:"+81231 12312"}),Object(i.jsx)("li",{className:s.a.footer_title__link,children:"email@example.com"})]}),Object(i.jsx)("h5",{className:s.a.footer_title,children:"Services"}),Object(i.jsxs)("ul",{className:s.a.footer_title__links,children:[Object(i.jsx)("li",{className:s.a.footer_title__link,children:"Sub link1"}),Object(i.jsx)("li",{className:s.a.footer_title__link,children:"Sub link2"})]}),Object(i.jsx)("h5",{className:s.a.footer_title,children:"Connect"}),Object(i.jsxs)("ul",{className:s.a.footer_title__links,children:[Object(i.jsx)("li",{className:s.a.footer_title__link,children:Object(i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 34.875 34.873",children:Object(i.jsx)("path",{id:"Icon_awesome-facebook-messenger","data-name":"Icon awesome-facebook-messenger",d:"M18.039.563C8.193.563.563,7.758.563,17.478A16.531,16.531,0,0,0,6.052,29.989c.587.528.466.834.566,4.094a1.4,1.4,0,0,0,1.96,1.235c3.72-1.638,3.768-1.768,4.4-1.6,10.778,2.966,22.461-3.931,22.461-16.245C35.438,7.758,27.885.563,18.039.563ZM28.532,13.579,23.4,21.705a2.628,2.628,0,0,1-3.791.7l-4.084-3.056a1.055,1.055,0,0,0-1.266,0l-5.51,4.179a.829.829,0,0,1-1.2-1.1L12.679,14.3a2.627,2.627,0,0,1,3.791-.7l4.082,3.056a1.055,1.055,0,0,0,1.266,0l5.513-4.175a.827.827,0,0,1,1.2,1.1Z",transform:"translate(-0.563 -0.563)",fill:"#fff"})})}),Object(i.jsx)("li",{className:s.a.footer_title__link,children:Object(i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 31.5 31.5",children:Object(i.jsx)("path",{id:"Icon_awesome-linkedin","data-name":"Icon awesome-linkedin",d:"M29.25,2.25H2.243A2.26,2.26,0,0,0,0,4.521V31.479A2.26,2.26,0,0,0,2.243,33.75H29.25a2.266,2.266,0,0,0,2.25-2.271V4.521A2.266,2.266,0,0,0,29.25,2.25Zm-19.73,27H4.852V14.217H9.527V29.25ZM7.186,12.164A2.707,2.707,0,1,1,9.893,9.457a2.708,2.708,0,0,1-2.707,2.707ZM27.021,29.25H22.352V21.938c0-1.744-.035-3.987-2.426-3.987-2.433,0-2.805,1.9-2.805,3.86V29.25H12.452V14.217h4.479V16.27h.063a4.917,4.917,0,0,1,4.423-2.426c4.725,0,5.6,3.115,5.6,7.165Z",transform:"translate(0 -2.25)",fill:"#fff"})})}),Object(i.jsx)("li",{className:s.a.footer_title__link,children:Object(i.jsx)("svg",{width:"22",height:"20",viewBox:"0 0 36 29.239",children:Object(i.jsx)("path",{id:"Icon_awesome-twitter","data-name":"Icon awesome-twitter",d:"M32.3,10.668c.023.32.023.64.023.959,0,9.754-7.424,20.992-20.992,20.992A20.85,20.85,0,0,1,0,29.307a15.263,15.263,0,0,0,1.782.091,14.776,14.776,0,0,0,9.16-3.152,7.391,7.391,0,0,1-6.9-5.117,9.3,9.3,0,0,0,1.393.114,7.8,7.8,0,0,0,1.942-.251,7.379,7.379,0,0,1-5.916-7.241V13.66A7.431,7.431,0,0,0,4.8,14.6,7.389,7.389,0,0,1,2.513,4.728a20.972,20.972,0,0,0,15.213,7.721,8.329,8.329,0,0,1-.183-1.69A7.385,7.385,0,0,1,30.312,5.711a14.526,14.526,0,0,0,4.683-1.782,7.358,7.358,0,0,1-3.244,4.066A14.791,14.791,0,0,0,36,6.853a15.86,15.86,0,0,1-3.7,3.815Z",transform:"translate(0 -3.381)",fill:"#fff"})})}),Object(i.jsx)("li",{className:s.a.footer_title__link,children:Object(i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 31.518 31.511",children:Object(i.jsx)("path",{id:"Icon_awesome-instagram","data-name":"Icon awesome-instagram",d:"M15.757,9.914a8.079,8.079,0,1,0,8.079,8.079A8.066,8.066,0,0,0,15.757,9.914Zm0,13.331a5.252,5.252,0,1,1,5.252-5.252,5.262,5.262,0,0,1-5.252,5.252ZM26.051,9.584A1.884,1.884,0,1,1,24.166,7.7,1.88,1.88,0,0,1,26.051,9.584ZM31.4,11.5a9.325,9.325,0,0,0-2.545-6.6,9.387,9.387,0,0,0-6.6-2.545c-2.6-.148-10.4-.148-13,0a9.373,9.373,0,0,0-6.6,2.538,9.356,9.356,0,0,0-2.545,6.6c-.148,2.6-.148,10.4,0,13a9.325,9.325,0,0,0,2.545,6.6,9.4,9.4,0,0,0,6.6,2.545c2.6.148,10.4.148,13,0a9.325,9.325,0,0,0,6.6-2.545,9.387,9.387,0,0,0,2.545-6.6c.148-2.6.148-10.392,0-12.994ZM28.041,27.281a5.318,5.318,0,0,1-3,3c-2.074.823-7,.633-9.288.633s-7.221.183-9.288-.633a5.318,5.318,0,0,1-3-3c-.823-2.074-.633-7-.633-9.288s-.183-7.221.633-9.288a5.318,5.318,0,0,1,3-3c2.074-.823,7-.633,9.288-.633s7.221-.183,9.288.633a5.318,5.318,0,0,1,3,3c.823,2.074.633,7,.633,9.288S28.863,25.214,28.041,27.281Z",transform:"translate(0.005 -2.238)",fill:"#fff"})})})]}),Object(i.jsx)("p",{className:s.a.copy_rights,children:"Copyright \xa92021 All rights reserved | This website is owned by WQA Phillippines"})]})}function S(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(a.a,{children:[Object(i.jsx)("meta",{charSet:"utf-8"}),Object(i.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),Object(i.jsx)("meta",{name:"viewport",content:"width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"}),Object(i.jsx)("title",{children:"WQA"})]}),Object(i.jsx)("header",{className:s.a.nav_container,children:Object(i.jsx)(p,{})}),Object(i.jsxs)("main",{className:s.a.container,children:[Object(i.jsx)(g,{}),Object(i.jsx)(O,{}),Object(i.jsx)("section",{className:s.a.iso_section,children:Object(i.jsx)("ul",{className:s.a.iso_list,children:Array(6).fill("wew").map((function(e,t){return Object(i.jsxs)("li",{className:s.a.iso_container,children:[Object(i.jsx)("h1",{className:s.a.iso_title,children:"ISO 41231231"}),Object(i.jsx)("h2",{className:s.a.iso_sub_title,children:"Lorem id ut tempor ullamco labore pariatur pariatur sint."}),Object(i.jsx)("a",{className:s.a.iso_link,children:"See Details"}),Object(i.jsx)("img",{className:s.a.iso_img,src:"/isoiso.webp"})]},t)}))})}),Object(i.jsx)(y,{})]})]})}},SksO:function(e,t){function n(t,i){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,i)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}e.exports=function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}},WULK:function(e,t,n){e.exports={mobile_nav:"mobile-navbar_mobile_nav__3cSKC",mobile_nav_link_container:"mobile-navbar_mobile_nav_link_container__1YPnB",mobile_nav_checkbox:"mobile-navbar_mobile_nav_checkbox__3Njsb",mobile_nav_humberger:"mobile-navbar_mobile_nav_humberger__3tz3A",mobile_nav__list_cont:"mobile-navbar_mobile_nav__list_cont__vVU1W"}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}},Xuae:function(e,t,n){"use strict";var i=n("RIqP"),r=n("lwsE"),a=n("W8MJ"),o=(n("PJYZ"),n("7W2i")),s=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var h=n("q1tI"),u=function(e){o(n,e);var t=l(n);function n(e){var a;return r(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(i(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(h.Component);t.default=u},ZhPi:function(e,t,n){var i=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}},a1gu:function(e,t,n){var i=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?r(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},iwvq:function(e,t,n){e.exports={nav_container:"home_nav_container__2kCEx",container:"home_container__2W4JU",carousel_container:"home_carousel_container__3HltI",carousel_img:"home_carousel_img__2-i6V",carousel__hero_cont:"home_carousel__hero_cont__pny8_",hero_cont__sub_headline:"home_hero_cont__sub_headline__DAxa-",hero_cont__headline:"home_hero_cont__headline__2MYeD",hero_cont__headline_cta:"home_hero_cont__headline_cta__2J9xP",introduction_cont:"home_introduction_cont__cjbmC",intoduction_who_we_are:"home_intoduction_who_we_are__MdcH4",who_we_are__heading:"home_who_we_are__heading__2GoOl",who_we_are__information:"home_who_we_are__information__2dFSF",who_we_are__cta:"home_who_we_are__cta__3010i",intoduction_what_we_do:"home_intoduction_what_we_do__3TntY",who_we_do__icon:"home_who_we_do__icon__3evyw",who_we_do__heading:"home_who_we_do__heading__1okmy",who_we_do__information:"home_who_we_do__information__1Gipj",intoduction_services:"home_intoduction_services__2W4QI",services__icon:"home_services__icon__3cYg1",services__heading:"home_services__heading__2viCq",services__information:"home_services__information__jDMip",train_with_us_container:"home_train_with_us_container__3rzDS",train_with_us_img:"home_train_with_us_img__3118P",train_with_us_informations:"home_train_with_us_informations__1h5h9",train_with_us_cta:"home_train_with_us_cta__8HiZp",iso_section:"home_iso_section__3L8XK",iso_list:"home_iso_list__1A2Z6",iso_container:"home_iso_container__1mWje",iso_title:"home_iso_title__3wSau",iso_sub_title:"home_iso_sub_title__DrfSP",iso_link:"home_iso_link__1WExO",iso_img:"home_iso_img__2glID",main_footer:"home_main_footer__1_Pw8",footer_title:"home_footer_title__39b9X",footer_title__links:"home_footer_title__links__Aubbz",footer_title__link:"home_footer_title__link__15ZhL",copy_rights:"home_copy_rights__1seoS"}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var i;t.__esModule=!0,t.AmpStateContext=void 0;var r=((i=n("q1tI"))&&i.__esModule?i:{default:i}).default.createContext({});t.AmpStateContext=r},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},rePB:function(e,t,n){"use strict";function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return i}))},vNsR:function(e,t,n){"use strict";function i(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=i(n("q1tI")),a=i(n("17x9")),o={width:"100%",height:"100%",position:"relative"},s={width:"100%",height:"100%",position:"absolute"},c=function(e){function t(t){e.call(this,t),this.state={frames:[].concat(t.frames||t.children||[]),current:0},this.mounted=!1,this.debounceTimeoutId=null,this.onTouchStart=this.onTouchStart.bind(this),this.onTouchMove=this.onTouchMove.bind(this),this.onTouchEnd=this.onTouchEnd.bind(this),this.onResize=this.onResize.bind(this),this.autoSlide=this.autoSlide.bind(this),this.prev=this.prev.bind(this),this.next=this.next.bind(this),!1===t.loop&&t.auto&&console.warn("[re-carousel] Auto-slide only works in loop mode.")}return e&&(t.__proto__=e),((t.prototype=Object.create(e&&e.prototype)).constructor=t).prototype.componentDidMount=function(){this.mounted=!0,this.prepareAutoSlide(),this.hideFrames(),this.refs.wrapper.addEventListener("touchmove",this.onTouchMove,{capture:!0}),this.refs.wrapper.addEventListener("touchend",this.onTouchEnd,{capture:!0}),window.addEventListener("resize",this.onResize)},t.prototype.componentWillUnmount=function(){this.mounted=!1,this.clearAutoTimeout(),this.refs.wrapper.removeEventListener("touchmove",this.onTouchMove,{capture:!0}),this.refs.wrapper.removeEventListener("touchend",this.onTouchEnd,{capture:!0}),window.removeEventListener("resize",this.onResize)},t.prototype.componentDidUpdate=function(e,t){this.state.frames.length&&this.state.frames.length!==t.frames.length&&(this.hideFrames(),this.prepareAutoSlide())},t.getDerivedStateFromProps=function(e,t){var n=[].concat(e.frames||e.children||[]),i={frames:n};return n.length&&n.length!==t.frames.length&&(i.current=0),i},t.prototype.hideFrames=function(){for(var e=1;e<this.state.frames.length;e++)this.refs["f"+e].style.opacity=0},t.prototype.onResize=function(){var e=this;clearTimeout(this.debounceTimeoutId),this.debounceTimeoutId=setTimeout((function(){e.updateFrameSize((function(){e.prepareSiblingFrames()}))}),25)},t.prototype.onTouchStart=function(e){if(!(this.state.total<2)){this.clearAutoTimeout(),this.updateFrameSize(),this.prepareSiblingFrames();var t=e.touches&&e.touches[0]||e,n=t.pageX,i=t.pageY;this.setState({startX:n,startY:i,deltaX:0,deltaY:0}),this.refs.wrapper.addEventListener("mousemove",this.onTouchMove,{capture:!0}),this.refs.wrapper.addEventListener("mouseup",this.onTouchEnd,{capture:!0}),this.refs.wrapper.addEventListener("mouseleave",this.onTouchEnd,{capture:!0})}},t.prototype.onTouchMove=function(e){if(!(e.touches&&1<e.touches.length)){this.clearAutoTimeout();var t=e.touches&&e.touches[0]||e,n=t.pageX,i=t.pageY,r=n-this.state.startX,a=i-this.state.startY;this.setState({deltaX:r,deltaY:a}),"x"===this.props.axis&&Math.abs(r)>Math.abs(a)&&(e.preventDefault(),e.stopPropagation()),"y"===this.props.axis&&Math.abs(a)>Math.abs(r)&&(e.preventDefault(),e.stopPropagation()),this.props.loop||(this.state.current===this.state.frames.length-1&&(r<0&&(r/=3),a<0&&(a/=3)),0===this.state.current&&(0<r&&(r/=3),0<a&&(a/=3))),this.moveFramesBy(r,a)}},t.prototype.onTouchEnd=function(){var e=this,t=this.decideEndPosition();t&&this.transitFramesTowards(t),this.refs.wrapper.removeEventListener("mousemove",this.onTouchMove,{capture:!0}),this.refs.wrapper.removeEventListener("mouseup",this.onTouchEnd,{capture:!0}),this.refs.wrapper.removeEventListener("mouseleave",this.onTouchEnd,{capture:!0}),setTimeout((function(){return e.prepareAutoSlide()}),this.props.duration)},t.prototype.decideEndPosition=function(){var e=this.state,t=e.deltaX;void 0===t&&(t=0);var n=e.deltaY;void 0===n&&(n=0);var i=e.current,r=e.frames,a=this.props,o=a.axis,s=a.loop,c=a.minMove;switch(o){case"x":if(!1===s){if(0===i&&0<t)return"origin";if(i===r.length-1&&t<0)return"origin"}return Math.abs(t)<c?"origin":0<t?"right":"left";case"y":if(!1===s){if(0===i&&0<n)return"origin";if(i===r.length-1&&n<0)return"origin"}return Math.abs(n)<c?"origin":0<n?"down":"up"}},t.prototype.moveFramesBy=function(e,t){var n=this.state.movingFrames,i=n.prev,r=n.current,a=n.next,o=this.state,s=o.frameWidth,c=o.frameHeight;switch(this.props.axis){case"x":l(r,e,0),e<0?l(a,e+s,0):l(i,e-s,0);break;case"y":l(r,0,t),t<0?l(a,0,t+c):l(i,0,t-c)}},t.prototype.prepareAutoSlide=function(){var e=this;if(!(this.state.frames.length<2)&&(this.clearAutoTimeout(),this.updateFrameSize((function(){e.prepareSiblingFrames()})),this.mounted&&this.props.loop&&this.props.auto)){var t=setTimeout(this.autoSlide,this.props.interval);this.setState({slider:t})}},t.prototype.autoSlide=function(e){var t=this;switch(this.clearAutoTimeout(),e){case"prev":this.transitFramesTowards("x"===this.props.axis?"right":"down");break;case"next":default:this.transitFramesTowards("x"===this.props.axis?"left":"up")}setTimeout((function(){return t.prepareAutoSlide()}),this.props.duration)},t.prototype.next=function(){var e=this.state,t=e.current,n=e.frames;if(!this.props.loop&&t===n.length-1)return!1;this.autoSlide("next")},t.prototype.prev=function(){if(!this.props.loop&&0===this.state.current)return!1;var e=this.state.movingFrames,t=e.prev;t===e.next&&("x"===this.props.axis?l(t,-this.state.frameWidth,0,0):l(t,0,-this.state.frameHeight,0),t.getClientRects()),this.autoSlide("prev")},t.prototype.clearAutoTimeout=function(){clearTimeout(this.state.slider)},t.prototype.updateFrameSize=function(e){var t=window.getComputedStyle(this.refs.wrapper),n=t.width,i=t.height;this.setState({frameWidth:parseFloat(n.split("px")[0]),frameHeight:parseFloat(i.split("px")[0])},e)},t.prototype.getSiblingFrames=function(){return{current:this.refs["f"+this.getFrameId()],prev:this.refs["f"+this.getFrameId("prev")],next:this.refs["f"+this.getFrameId("next")]}},t.prototype.prepareSiblingFrames=function(){var e=this.getSiblingFrames();return this.props.loop||(0===this.state.current&&(e.prev=void 0),this.state.current===this.state.frames.length-1&&(e.next=void 0)),this.setState({movingFrames:e}),l(e.current,0,0),"x"===this.props.axis?(l(e.prev,-this.state.frameWidth,0),l(e.next,this.state.frameWidth,0)):(l(e.prev,0,-this.state.frameHeight),l(e.next,0,this.state.frameHeight)),e},t.prototype.getFrameId=function(e){var t=this.state,n=t.frames,i=t.current,r=n.length;switch(e){case"prev":return(i-1+r)%r;case"next":return(i+1)%r;default:return i}},t.prototype.transitFramesTowards=function(e){var t=this,n=this.state.movingFrames,i=n.prev,r=n.current,a=n.next,o=this.props,s=o.duration,c=o.axis,h=o.onTransitionEnd,u=this.state.current;switch(e){case"up":l(r,0,-this.state.frameHeight,s),l(a,0,0,s),u=this.getFrameId("next");break;case"down":l(r,0,this.state.frameHeight,s),l(i,0,0,s),u=this.getFrameId("prev");break;case"left":l(r,-this.state.frameWidth,0,s),l(a,0,0,s),u=this.getFrameId("next");break;case"right":l(r,this.state.frameWidth,0,s),l(i,0,0,s),u=this.getFrameId("prev");break;default:l(r,0,0,s),"x"===c?(l(i,-this.state.frameWidth,0,s),l(a,this.state.frameWidth,0,s)):"y"===c&&(l(i,0,-this.state.frameHeight,s),l(a,0,this.state.frameHeight,s))}h&&setTimeout((function(){return h(t.getSiblingFrames())}),s),this.setState({current:u})},t.prototype.render=function(){var e=this,t=this.state,n=t.frames,i=t.current,a=this.props,c=a.widgets,l=a.axis,u=a.loop,_=a.auto,d=a.interval,p=h(o,this.props.style);return r.createElement("div",{style:p},r.createElement("div",{ref:"wrapper",style:h({overflow:"hidden"},p),onTouchStart:this.onTouchStart,className:this.props.className,onMouseDown:this.onTouchStart},n.map((function(e,t){var n=h({zIndex:99-t},s);return r.createElement("div",{ref:"f"+t,key:t,style:n},e)})),this.props.frames&&this.props.children),c&&[].concat(c).map((function(t,a){return r.createElement(t,{key:a,index:i,total:n.length,prevHandler:e.prev,nextHandler:e.next,axis:l,loop:u,auto:_,interval:d})})))},t}(r.Component);function l(e,t,n,i){void 0===i&&(i=0),e&&(e.style.opacity="1",e.style.transitionDuration=i+"ms",e.style.webkitTransitionDuration=i+"ms",e.style.transform="translate("+t+"px, "+n+"px)",e.style.webkitTransform="translate("+t+"px, "+n+"px) translateZ(0)")}function h(e){for(var t=arguments,n=Object(e),i=1;i<arguments.length;i++){var r=t[i];if(null!=r)for(var a in r)r.hasOwnProperty(a)&&(n[a]=r[a])}return n}c.propTypes={axis:a.oneOf(["x","y"]),auto:a.bool,loop:a.bool,interval:a.number,duration:a.number,widgets:a.arrayOf(a.func),frames:a.arrayOf(a.element),style:a.object,minMove:a.number,onTransitionEnd:a.func},c.defaultProps={axis:"x",auto:!1,loop:!1,interval:5e3,duration:300,minMove:42},e.exports=c},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);