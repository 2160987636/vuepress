(window.webpackJsonp=window.webpackJsonp||[]).push([[1,31,34,35],{346:function(e,t,o){"use strict";o.d(t,"a",(function(){return a})),o.d(t,"b",(function(){return i}));o(134);var n=o(0);function a(){const e=Object(n.d)();if(!e)throw new Error("must be called in setup");return(null==e?void 0:e.proxy)||{}}function i(){const e=Object(n.j)(!1);return Object(n.f)(()=>{e.value=!0}),Object(n.g)(()=>{e.value=!1,setTimeout(()=>{e.value=!0},100)}),{recoShowModule:e}}},353:function(e,t,o){},359:function(e,t,o){"use strict";o.r(t);o(16);var n=o(0),a=o(17),i=o(347),r=o(346),s=Object(n.c)({components:{RecoIcon:i.b},props:{item:{required:!0},typeKey:String,current:String},setup(e,t){const o=Object(r.a)(),{item:i,typeKey:s}=Object(n.k)(e);let l=Object(n.j)("");const c=Object(n.e)("userLinks"),u=Object(n.a)(()=>Object(a.d)(i.value.link)),d=Object(n.a)(()=>o.$site.locales?Object.keys(o.$site.locales).some(e=>e===u.value):"/"===u.value);Object(n.l)(()=>o.$route.path,e=>{let t={},n=o.$route.path.split("/"),r=n.indexOf("document");r>=0&&r+2<n.length&&(t.version=n[r+1],t.language=n[r+2]),!Object.keys(t).length>0&&(t.language=c.value[0].items[0].text,t.version=c.value[1].items[0].text);let u=i.value.link;if("version"===s.value){let e=c.value[0].items.filter(e=>e.text===t.language);if(e.length>0){let t=e[0].link;u=`/document${i.value.link}${t}`}}else if("language"===s.value){let e=c.value[1].items.filter(e=>e.text===t.version);if(e.length>0){u=`/document${e[0].link}${i.value.link}`}}l.value=Object(a.d)(u)},{immediate:!0,deep:!0}),Object(n.f)(()=>{});return{link:u,exact:d,isExternal:a.f,isMailto:a.g,isTel:a.h,changeLink:()=>{o.$router.push(l.value)},myLink:l}}}),l=o(2),c=Object(l.a)(s,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.isExternal(e.link)?t("a",{staticClass:"nav-link external",attrs:{href:e.link,target:e.isMailto(e.link)||e.isTel(e.link)?null:"_blank",rel:e.isMailto(e.link)||e.isTel(e.link)?null:"noopener noreferrer"}},[t("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n  "+e._s(e.item.text)+"\n  "),t("OutboundLink")],1):t("a",{staticClass:"nav-link",class:{"router-link-active":e.current===e.item.text},attrs:{exact:e.exact},on:{click:e.changeLink}},[t("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v("\n  "+e._s(e.item.text)+"\n")],1)}),[],!1,null,null,null);t.default=c.exports},361:function(e,t,o){"use strict";o.r(t);var n=o(0),a=Object(n.c)({name:"DropdownTransition",setup:(e,t)=>({setHeight:e=>{e.style.height=e.scrollHeight+"px"},unsetHeight:e=>{e.style.height=""}})}),i=(o(363),o(2)),r=Object(i.a)(a,(function(){var e=this._self._c;this._self._setupProxy;return e("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);t.default=r.exports},363:function(e,t,o){"use strict";o(353)},364:function(e,t,o){},371:function(e,t,o){},372:function(e,t,o){},379:function(e,t,o){"use strict";o(364)},384:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n={light:{"--default-color-10":"rgba(255, 255, 255, 1)","--default-color-9":"rgba(255, 255, 255, .9)","--default-color-8":"rgba(255, 255, 255, .8)","--default-color-7":"rgba(255, 255, 255, .7)","--default-color-6":"rgba(255, 255, 255, .6)","--default-color-5":"rgba(255, 255, 255, .5)","--default-color-4":"rgba(255, 255, 255, .4)","--default-color-3":"rgba(255, 255, 255, .3)","--default-color-2":"rgba(255, 255, 255, .2)","--default-color-1":"rgba(255, 255, 255, .1)","--background-color":"#fff","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, 0.1)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, 0.2)","--text-color":"#242424","--text-color-sub":"#7F7F7F","--border-color":"#eaecef","--code-color":"rgba(27, 31, 35, 0.05)","--mask-color":"#888"},dark:{"--default-color-10":"rgba(0, 0, 0, 1)","--default-color-9":"rgba(0, 0, 0, .9)","--default-color-8":"rgba(0, 0, 0, .8)","--default-color-7":"rgba(0, 0, 0, .7)","--default-color-6":"rgba(0, 0, 0, .6)","--default-color-5":"rgba(0, 0, 0, .5)","--default-color-4":"rgba(0, 0, 0, .4)","--default-color-3":"rgba(0, 0, 0, .3)","--default-color-2":"rgba(0, 0, 0, .2)","--default-color-1":"rgba(0, 0, 0, .1)","--background-color":"#181818","--box-shadow":"0 1px 8px 0 rgba(0, 0, 0, .6)","--box-shadow-hover":"0 2px 16px 0 rgba(0, 0, 0, .7)","--text-color":"rgba(255, 255, 255, .8)","--text-color-sub":"#8B8B8B","--border-color":"rgba(0, 0, 0, .3)","--code-color":"rgba(0, 0, 0, .3)","--mask-color":"#000"}};function a(e){const t=document.querySelector(":root"),o=n[e],a="dark"===e?"light":"dark";for(const e in o)t.style.setProperty(e,o[e]);t.classList.remove(a),t.classList.add(e)}function i(e){if("auto"!==e)return void a(e);const t=window.matchMedia("(prefers-color-scheme: dark)").matches,o=window.matchMedia("(prefers-color-scheme: light)").matches;if(t&&a("dark"),o&&a("light"),!t&&!o){console.log("You specified no preference for a color scheme or your browser does not support it. I schedule dark mode during night time.");const e=(new Date).getHours();a(e<6||e>=18?"dark":"light")}}},385:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o(347),i=o(359),r=o(361),s=o(346),l=Object(n.c)({components:{NavLink:i.default,DropdownTransition:r.default,RecoIcon:a.b},props:{item:{required:!0}},setup(e,t){const o=Object(n.j)(!1),a=Object(s.a)(),i=Object(n.j)("");return Object(n.l)(()=>a.$route.path,t=>{let o={},n=a.$route.path.split("/"),r=n.indexOf("document");var s;(r>=0&&r+2<n.length&&(o.version=n[r+1],o.language=n[r+2]),Object.keys(o).length>0)?i.value=o[e.item.key]:null!==(s=e.item)&&void 0!==s&&s.items&&e.item.items.length>0?i.value=e.item.items[0].text?e.item.items[0].text:item.text:i.value=item.text},{immediate:!0,deep:!0}),{open:o,toggle:()=>{o.value=!o.value},current:i}}}),c=(o(379),o(2)),u=Object(c.a)(l,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"dropdown-wrapper",class:{open:e.open}},[t("a",{staticClass:"dropdown-title",on:{click:e.toggle}},[t("span",{staticClass:"title"},[t("reco-icon",{attrs:{icon:""+e.item.icon}}),e._v(" "),e._v("\n      "+e._s(e.current)+" \n    ")],1),e._v(" "),t("span",{staticClass:"arrow",class:e.open?"down":"right"})]),e._v(" "),t("DropdownTransition",[t("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"nav-dropdown"},e._l(e.item.items,(function(o,n){return t("li",{key:o.link||n,staticClass:"dropdown-item"},["links"===o.type?t("h4",[e._v(e._s(o.text))]):e._e(),e._v(" "),"links"===o.type?t("ul",{staticClass:"dropdown-subitem-wrapper"},e._l(o.items,(function(e){return t("li",{key:e.link,staticClass:"dropdown-subitem"},[t("NavLink",{attrs:{item:e}})],1)})),0):t("NavLink",{attrs:{item:o,typeKey:e.item.key,current:e.current}})],1)})),0)])],1)}),[],!1,null,null,null);t.default=u.exports},387:function(e,t,o){},388:function(e,t,o){"use strict";o(371)},389:function(e,t,o){"use strict";o(372)},390:function(e,t,o){},403:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o(347),i=o(385),r=o(17),s=o(359),l=o(346),c=Object(n.c)({components:{NavLink:s.default,DropdownLink:i.default,RecoIcon:a.b},setup(e,t){const o=Object(l.a)(),a=Object(n.a)(()=>o.$themeLocaleConfig.nav||o.$themeConfig.nav||[]),i=Object(n.a)(()=>{const e=o.$site.locales||{};if(e&&Object.keys(e).length>1){const t=o.$page.path,n=o.$router.options.routes,i=o.$themeConfig.locales||{},r={text:o.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(a=>{const r=e[a],s=i[a]&&i[a].label||r.lang;let l;return r.lang===o.$lang?l=t:(l=t.replace(o.$localeConfig.path,a),n.some(e=>e.path===l)||(l=a)),{text:s,link:l}})};return[...a.value,r]}const t=o.$themeConfig.blogConfig||{},n=a.value.some(e=>!t.category||e.text===(t.category.text||"分类")),i=a.value.some(e=>!t.tag||e.text===(t.tag.text||"标签"));if(!n&&Object.hasOwnProperty.call(t,"category")){const e=t.category,n=o.$categories;a.value.splice(parseInt(e.location||2)-1,0,{items:n.list.map(e=>(e.link=e.path,e.text=e.name,e)),text:e.text||o.$recoLocales.category,type:"links",icon:"reco-category"})}if(!i&&Object.hasOwnProperty.call(t,"tag")){const e=t.tag;a.value.splice(parseInt(e.location||3)-1,0,{link:"/tag/",text:e.text||o.$recoLocales.tag,type:"links",icon:"reco-tag"})}return a.value}),s=Object(n.a)(()=>{(o.nav||[]).map(e=>Object.assign(Object(r.j)(e),{items:(e.items||[]).map(r.j)}));return(o.nav||[]).map(e=>Object.assign(Object(r.j)(e),{items:(e.items||[]).map(r.j)}))}),c=Object(n.a)(()=>{const{repo:e}=o.$themeConfig;return e?/^https?:/.test(e)?e:"https://github.com/"+e:""}),u=Object(n.a)(()=>{if(!o.repoLink)return"";if(o.$themeConfig.repoLabel)return o.$themeConfig.repoLabel;const e=o.repoLink.match(/^https?:\/\/[^/]+/)[0],t=["GitHub","GitLab","Bitbucket"];for(let o=0;o<t.length;o++){const n=t[o];if(new RegExp(n,"i").test(e))return n}return"Source"});return Object(n.h)("userLinks",s),{userNav:a,nav:i,userLinks:s,repoLink:c,repoLabel:u}}}),u=(o(388),o(2)),d=Object(u.a)(c,(function(){var e=this,t=e._self._c;e._self._setupProxy;return e.userLinks.length||e.repoLink?t("nav",{staticClass:"nav-links"},[e._l(e.userLinks,(function(e){return t("div",{key:e.link,staticClass:"nav-item"},["links"===e.type?t("DropdownLink",{attrs:{item:e}}):t("NavLink",{attrs:{item:e}})],1)})),e._v(" "),e.repoLink?t("a",{staticClass:"repo-link",attrs:{href:e.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t("reco-icon",{attrs:{icon:"reco-"+e.repoLabel.toLowerCase()}}),e._v("\n    "+e._s(e.repoLabel)+"\n    "),t("OutboundLink")],1):e._e()],2):e._e()}),[],!1,null,null,null);t.default=d.exports},406:function(e,t,o){"use strict";o.r(t);var n=o(384),a={name:"ModeOptions",data:()=>({modeOptions:[{mode:"light",title:"护眼模式"},{mode:"dark",title:"暗黑模式"}],currentMode:"auto"}),mounted(){this.currentMode=localStorage.getItem("mode")||this.$themeConfig.mode||"auto";var e=this;window.matchMedia("(prefers-color-scheme: dark)").addListener(()=>{"auto"===e.$data.currentMode&&Object(n.a)(e.$data.currentMode)}),window.matchMedia("(prefers-color-scheme: light)").addListener(()=>{"auto"===e.$data.currentMode&&Object(n.a)(e.$data.currentMode)}),this.$emit("changeMode",this.currentMode),Object(n.a)(this.currentMode)},methods:{selectMode(e){e!==this.currentMode&&(this.currentMode=e,Object(n.a)(e),localStorage.setItem("mode",e),this.$emit("changeMode",e))},getClass(e){return e!==this.currentMode?e:e+" active"}}},i=(o(389),o(2)),r=Object(i.a)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mode-options"},[t("ul",{staticClass:"color-mode-options"},e._l(e.modeOptions,(function(o,n){return t("li",{key:n,class:e.getClass(o.mode),on:{click:function(t){return e.selectMode(o.mode)}}},[e._v(e._s(o.title))])})),0)])}),[],!1,null,null,null);t.default=r.exports},408:function(e,t,o){"use strict";o(387)},410:function(e,t,o){"use strict";o(390)},422:function(e,t,o){"use strict";t.a={}},424:function(e,t,o){},436:function(e,t,o){"use strict";o.r(t);var n=o(347),a=o(409),i=o.n(a),r=o(406),s=o(384),l={name:"UserSettings",directives:{"click-outside":i.a},components:{ModePicker:r.default,RecoIcon:n.b,ModuleTransition:n.a},data:()=>({showMenu:!1}),mounted(){const e=this.$themeConfig.mode||"auto",{modePicker:t}=this.$themeConfig;!1===t&&("auto"===e&&(window.matchMedia("(prefers-color-scheme: dark)").addListener(()=>{Object(s.a)(e)}),window.matchMedia("(prefers-color-scheme: light)").addListener(()=>{Object(s.a)(e)})),Object(s.a)(e))},methods:{hideMenu(){this.showMenu=!1},changeMode(e){this.$emit("changeMode",e)}}},c=(o(410),o(2)),u=Object(c.a)(l,(function(){var e=this,t=e._self._c;return!1!==e.$themeConfig.modePicker?t("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.hideMenu,expression:"hideMenu"}],staticClass:"color-picker"},[t("a",{staticClass:"color-button",on:{click:function(t){t.preventDefault(),e.showMenu=!e.showMenu}}},[t("reco-icon",{attrs:{icon:"reco-theme"}})],1),e._v(" "),t("ModuleTransition",{attrs:{transform:["translate(-50%, 0)","translate(-50%, -10px)"]}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"color-picker-menu"},[t("ModePicker",{on:{changeMode:e.changeMode}})],1)])],1):e._e()}),[],!1,null,null,null);t.default=u.exports},444:function(e,t,o){"use strict";o.r(t);o(408);var n=o(2),a=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("div",{staticClass:"sidebar-button",on:{click:function(t){return e.$emit("toggle-sidebar")}}},[t("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[t("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);t.default=a.exports},455:function(e,t,o){"use strict";o(424)},469:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o(422),i=o(443),r=o(444),s=o(403),l=o(436),c=o(346),u=Object(n.c)({components:{SidebarButton:r.default,NavLinks:s.default,SearchBox:i.a,AlgoliaSearchBox:a.a,Mode:l.default},setup(e,t){const o=Object(n.j)("light"),a=Object(c.a)();console.log("instance",a);const i=Object(n.j)(null),r=Object(n.a)(()=>a.$toolbagAddress||""),s=Object(n.a)(()=>a.$themeLocaleConfig.algolia||a.$themeConfig.algolia||{}),l=Object(n.a)(()=>s.value&&s.value.apiKey&&s.value.indexName);function u(e,t){return e.ownerDocument.defaultView.getComputedStyle(e,null)[t]}Object(n.f)(()=>{const e=parseInt(u(a.$el,"paddingLeft"))+parseInt(u(a.$el,"paddingRight")),t=()=>{document.documentElement.clientWidth<719?i.value=null:i.value=a.$el.offsetWidth-e-(a.$refs.siteName&&a.$refs.siteName.offsetWidth||0)};t(),window.addEventListener("resize",t,!1),window.addEventListener("storage",e=>{console.log("storage值发生变化后触发:",e)})});return{linksWrapMaxWidth:i,algolia:s,isAlgoliaSearch:l,css:u,jumpTo:()=>{window.open(a.$themeConfig.toolbagAddress+"simulation")},changeMode:e=>{o.value=e},currentMode:o,toolbagAddress:r,jumpToWeb:()=>{window.open(a.$themeConfig.toolbagAddress)}}}}),d=(o(455),o(2)),g=Object(d.a)(u,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("header",{staticClass:"navbar"},[t("SidebarButton",{on:{"toggle-sidebar":function(t){return e.$emit("toggle-sidebar")}}}),e._v(" "),t("div",{staticClass:"nav-home-link"},[t("router-link",{staticClass:"home-link",attrs:{to:e.$localePath}},[e.$themeConfig.logo?t("img",{staticClass:"logo",attrs:{src:e.$withBase("dark"!==e.currentMode?e.$themeConfig.logo:e.$themeConfig.logoDark),alt:e.$siteTitle},on:{click:e.jumpToWeb}}):e._e()]),e._v(" "),t("div",{staticClass:"nav-home-text"},[e.$siteTitle?t("span",{ref:"siteName",staticClass:"site-name"},[e._v(e._s(e.$siteTitle))]):e._e(),e._v(" "),t("Mode",{on:{changeMode:e.changeMode}})],1)],1),e._v(" "),t("div",{staticClass:"links",style:e.linksWrapMaxWidth?{"max-width":e.linksWrapMaxWidth+"px"}:{}},[t("div",{staticClass:"second-link",on:{click:function(t){return e.jumpTo()}}},[t("img",{attrs:{src:"/link-icon.png"}}),e._v("\n      二次开发工具包\n    ")]),e._v(" "),t("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);t.default=g.exports}}]);