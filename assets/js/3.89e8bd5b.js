(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{316:function(e,t,a){},317:function(e,t,a){},318:function(e,t,a){},319:function(e,t,a){},320:function(e,t,a){"use strict";a(17);var o=a(55),r=a(315),n=Object(o.b)({components:{RecoIcon:r.b},props:{pageInfo:{type:Object,default:()=>({})},currentTag:{type:String,default:""},showAccessNumber:{type:Boolean,default:!1}},setup(e,t){const a=Object(o.c)().proxy;return{numStyle:{fontSize:".9rem",fontWeight:"normal",color:"#999"},goTags:e=>{a.$route.path!==`/tag/${e}/`&&a.$router.push({path:`/tag/${e}/`})},formatDateValue:e=>new Intl.DateTimeFormat(a.$lang).format(new Date(e))}}}),s=(a(322),a(1)),i=Object(s.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.pageInfo.frontmatter.author||e.$themeConfig.author?a("reco-icon",{attrs:{icon:"reco-account"}},[a("span",[e._v(e._s(e.pageInfo.frontmatter.author||e.$themeConfig.author))])]):e._e(),e._v(" "),e.pageInfo.frontmatter.date?a("reco-icon",{attrs:{icon:"reco-date"}},[a("span",[e._v(e._s(e.formatDateValue(e.pageInfo.frontmatter.date)))])]):e._e(),e._v(" "),!0===e.showAccessNumber?a("reco-icon",{attrs:{icon:"reco-eye"}},[a("AccessNumber",{attrs:{idVal:e.pageInfo.path,numStyle:e.numStyle}})],1):e._e(),e._v(" "),e.pageInfo.frontmatter.tags?a("reco-icon",{staticClass:"tags",attrs:{icon:"reco-tag"}},e._l(e.pageInfo.frontmatter.tags,(function(t,o){return a("span",{key:o,staticClass:"tag-item",class:{active:e.currentTag==t},on:{click:function(a){return a.stopPropagation(),e.goTags(t)}}},[e._v(e._s(t))])})),0):e._e()],1)}),[],!1,null,"1ff7123e",null);t.a=i.exports},322:function(e,t,a){"use strict";a(316)},323:function(e,t,a){"use strict";a(317)},324:function(e,t,a){"use strict";a(318)},325:function(e,t,a){"use strict";var o=a(55),r={methods:{_getStoragePage(){const e=window.location.pathname,t=JSON.parse(sessionStorage.getItem("currentPage"));return null===t||e!==t.path?(sessionStorage.setItem("currentPage",JSON.stringify({page:1,path:""})),1):parseInt(t.page)},_setStoragePage(e){const t=window.location.pathname;sessionStorage.setItem("currentPage",JSON.stringify({page:e,path:t}))}}},n=a(315),s=a(320),i=Object(o.b)({components:{PageInfo:s.a,RecoIcon:n.b},props:["item","currentPage","currentTag"]}),c=(a(323),a(1)),l=Object(c.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"abstract-item",on:{click:function(t){return e.$router.push(e.item.path)}}},[e.item.frontmatter.sticky?a("reco-icon",{attrs:{icon:"reco-sticky"}}):e._e(),e._v(" "),a("div",{staticClass:"title"},[e.item.frontmatter.keys?a("reco-icon",{attrs:{icon:"reco-lock"}}):e._e(),e._v(" "),a("router-link",{attrs:{to:e.item.path}},[e._v(e._s(e.item.title))])],1),e._v(" "),a("div",{staticClass:"abstract",domProps:{innerHTML:e._s(e.item.excerpt)}}),e._v(" "),a("PageInfo",{attrs:{pageInfo:e.item,currentTag:e.currentTag}})],1)}),[],!1,null,"ff2c8be0",null).exports,u=Object(o.b)({mixins:[r],components:{NoteAbstractItem:l},props:["data","currentTag"],setup(e,t){const a=Object(o.c)().proxy,{data:r}=Object(o.i)(e),n=Object(o.h)(1),s=Object(o.a)(()=>{const e=(n.value-1)*a.$perPage,t=n.value*a.$perPage;return r.value.slice(e,t)});return Object(o.e)(()=>{n.value=a._getStoragePage()||1}),{currentPage:n,currentPageData:s,getCurrentPage:e=>{n.value=e,a._setStoragePage(e),t.emit("paginationChange",e)}}},watch:{$route(){this.currentPage=this._getStoragePage()||1}}}),p=(a(324),Object(c.a)(u,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"abstract-wrapper"},[e._l(e.currentPageData,(function(t){return a("NoteAbstractItem",{key:t.path,attrs:{item:t,currentPage:e.currentPage,currentTag:e.currentTag}})})),e._v(" "),a("pagation",{staticClass:"pagation",attrs:{total:e.data.length,currentPage:e.currentPage},on:{getCurrentPage:e.getCurrentPage}})],2)}),[],!1,null,"5a259143",null));t.a=p.exports},328:function(e,t,a){"use strict";a(319)},330:function(e,t,a){"use strict";var o=a(55),r=a(24),n=Object(o.b)({props:{currentTag:{type:String,default:""}},setup(e,t){const a=Object(o.c)().proxy;return{tags:Object(o.a)(()=>[{name:a.$recoLocales.all,path:"/tag/"},...a.$tagesList]),tagClick:e=>{t.emit("getCurrentTag",e)},getOneColor:r.b}}}),s=(a(328),a(1)),i=Object(s.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tags"},e._l(e.tags,(function(t,o){return a("span",{directives:[{name:"show",rawName:"v-show",value:!t.pages||t.pages&&t.pages.length>0,expression:"!item.pages || (item.pages && item.pages.length > 0)"}],key:o,class:{active:t.name==e.currentTag},style:{backgroundColor:e.getOneColor()},on:{click:function(a){return e.tagClick(t)}}},[e._v(e._s(t.name))])})),0)}),[],!1,null,"125939b4",null);t.a=i.exports},351:function(e,t,a){},352:function(e,t,a){},353:function(e,t,a){},354:function(e,t,a){},355:function(e,t,a){},356:function(e,t,a){},388:function(e,t,a){"use strict";a(351)},389:function(e,t,a){"use strict";a(352)},390:function(e,t,a){e.exports=a.p+"assets/img/bg.2cfdbb33.svg"},391:function(e,t,a){"use strict";a(353)},392:function(e,t,a){"use strict";a(354)},393:function(e,t,a){"use strict";a(355)},394:function(e){e.exports=JSON.parse('{"a":"1.6.6"}')},395:function(e,t,a){"use strict";a(356)},410:function(e,t,a){"use strict";a.r(t);var o=a(55),r=a(331),n=a(315),s=Object(o.b)({components:{NavLink:r.a,ModuleTransition:n.a},setup(e,t){const a=Object(o.c)().proxy;return{recoShowModule:Object(o.a)(()=>a&&a.$parent.recoShowModule),actionLink:Object(o.a)(()=>a&&{link:a.$frontmatter.actionLink,text:a.$frontmatter.actionText}),heroImageStyle:Object(o.a)(()=>a.$frontmatter.heroImageStyle||{maxHeight:"200px",margin:"6rem auto 1.5rem"})}}}),i=(a(388),a(1)),c=Object(i.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"hero"},[a("ModuleTransition",[e.recoShowModule&&e.$frontmatter.heroImage?a("img",{style:e.heroImageStyle||{},attrs:{src:e.$withBase(e.$frontmatter.heroImage),alt:"hero"}}):e._e()]),e._v(" "),a("ModuleTransition",{attrs:{delay:"0.04"}},[e.recoShowModule&&null!==e.$frontmatter.heroText?a("h1",{style:{marginTop:e.$frontmatter.heroImage?"0px":"140px"}},[e._v("\n        "+e._s(e.$frontmatter.heroText||e.$title||"vuePress-theme-reco")+"\n      ")]):e._e()]),e._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[e.recoShowModule&&null!==e.$frontmatter.tagline?a("p",{staticClass:"description"},[e._v("\n        "+e._s(e.$frontmatter.tagline||e.$description||"Welcome to your vuePress-theme-reco site")+"\n      ")]):e._e()]),e._v(" "),a("ModuleTransition",{attrs:{delay:"0.16"}},[e.recoShowModule&&e.$frontmatter.actionText&&e.$frontmatter.actionLink?a("p",{staticClass:"action"},[a("NavLink",{staticClass:"action-button",attrs:{item:e.actionLink}})],1):e._e()])],1),e._v(" "),a("ModuleTransition",{attrs:{delay:"0.24"}},[e.recoShowModule&&e.$frontmatter.features&&e.$frontmatter.features.length?a("div",{staticClass:"features"},e._l(e.$frontmatter.features,(function(t,o){return a("div",{key:o,staticClass:"feature"},[a("h2",[e._v(e._s(t.title))]),e._v(" "),a("p",[e._v(e._s(t.details))])])})),0):e._e()]),e._v(" "),a("ModuleTransition",{attrs:{delay:"0.32"}},[a("Content",{directives:[{name:"show",rawName:"v-show",value:e.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports,l=(a(17),a(330)),u=a(346),p=a.n(u),g=a(24);const d=()=>{const e=Object(o.c)().proxy,t=Object(o.h)(!0),a=Object(o.g)({left:0,top:0});return Object(o.e)(()=>{t.value=!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)}),{popupWindowStyle:a,showDetail:o=>{const r=o.target;r.querySelector(".popup-window-wrapper").style.display="block";const n=r.querySelector(".popup-window"),s=document.querySelector(".info-wrapper"),{clientWidth:i}=r,{clientWidth:c,clientHeight:l}=n;if(t)a.left=(i-c)/2+"px",a.top=-l+"px",s.style.overflow="visible",e.$nextTick(()=>{(e=>{const{offsetWidth:t}=document.body,{x:o,width:r}=e.getBoundingClientRect(),n=t-(o+r);if(n<0){const{offsetLeft:t}=e;a.left=t+n+"px"}})(n)});else{const e=function(e){const t=document,a=e.getBoundingClientRect();let o=a.left,r=a.top;return o+=t.documentElement.scrollLeft||t.body.scrollLeft,r+=t.documentElement.scrollTop||t.body.scrollTop,{left:o,top:r}};s.style.overflow="hidden";const t=e(r).left-e(s).left;a.left=-t+(s.clientWidth-n.clientWidth)/2+"px",a.top=-l+"px"}},hideDetail:e=>{e.target.querySelector(".popup-window-wrapper").style.display="none"}}};var m=Object(o.b)({setup(e,t){const a=Object(o.c)().proxy,{popupWindowStyle:r,showDetail:n,hideDetail:s}=d();return{dataAddColor:Object(o.a)(()=>{const{friendLink:e=[]}=a&&a.$themeConfig;return e.map(e=>(e.color=Object(g.b)(),e))}),popupWindowStyle:r,showDetail:n,hideDetail:s,getImgUrl:e=>{const{logo:t="",email:o=""}=e;return t&&/^http/.test(t)?t:t&&!/^http/.test(t)?a.$withBase(t):`//1.gravatar.com/avatar/${p()(o||"")}?s=50&amp;d=mm&amp;r=x`}}}}),h=(a(389),Object(i.a)(m,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"friend-link-wrapper"},e._l(e.dataAddColor,(function(t,o){return a("div",{key:o,staticClass:"friend-link-item",attrs:{target:"_blank"},on:{mouseenter:function(t){return e.showDetail(t)},mouseleave:function(t){return e.hideDetail(t)}}},[a("span",{staticClass:"list-style",style:{backgroundColor:t.color}}),e._v("\n    "+e._s(t.title)+"\n    "),a("transition",{attrs:{name:"fade"}},[a("div",{staticClass:"popup-window-wrapper"},[a("div",{ref:"popupWindow",refInFor:!0,staticClass:"popup-window",style:e.popupWindowStyle},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:e.getImgUrl(t)}})]),e._v(" "),a("div",{staticClass:"info"},[a("div",{staticClass:"title"},[a("h4",[e._v(e._s(t.title))]),e._v(" "),a("a",{staticClass:"btn-go",style:{backgroundColor:t.color},attrs:{href:t.link,target:"_blank"}},[e._v("GO")])]),e._v(" "),t.desc?a("p",[e._v(e._s(t.desc))]):e._e()])])])])],1)})),0)}),[],!1,null,"7e691180",null).exports),f=a(325),v=a(363),_=Object(o.b)({components:{NoteAbstract:f.a,TagList:l.a,FriendLink:h,ModuleTransition:n.a,PersonalInfo:v.a,RecoIcon:n.b},setup(e,t){const r=Object(o.c)().proxy,n=Object(o.g)({recoShow:!1,heroHeight:0}),s=Object(o.a)(()=>r&&r.$parent.recoShowModule),i=Object(o.a)(()=>r.$frontmatter.heroImageStyle||{}),c=Object(o.a)(()=>{const e={textAlign:"center",overflow:"hidden",background:`url(${r.$frontmatter.bgImage?r.$withBase(r.$frontmatter.bgImage):a(390)}) center/cover no-repeat`},{bgImageStyle:t}=r.$frontmatter;return t?{...e,...t}:e});return Object(o.e)(()=>{n.heroHeight=document.querySelector(".hero").clientHeight,n.recoShow=!0}),{recoShowModule:s,heroImageStyle:i,bgImageStyle:c,...Object(o.i)(n),getOneColor:g.b}},methods:{paginationChange(e){setTimeout(()=>{window.scrollTo(0,this.heroHeight)},100)},getPagesByTags(e){this.$router.push({path:e.path})}}}),b=(a(391),Object(i.a)(_,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home-blog"},[a("div",{staticClass:"hero",style:Object.assign({},e.bgImageStyle)},[a("div",[a("ModuleTransition",[e.recoShowModule&&e.$frontmatter.heroImage?a("img",{staticClass:"hero-img",style:e.heroImageStyle||{},attrs:{src:e.$withBase(e.$frontmatter.heroImage),alt:"hero"}}):e._e()]),e._v(" "),a("ModuleTransition",{attrs:{delay:"0.04"}},[e.recoShowModule&&null!==e.$frontmatter.heroText?a("h1",[e._v("\n          "+e._s(e.$frontmatter.heroText||e.$title||"vuePress-theme-reco")+"\n        ")]):e._e()]),e._v(" "),a("ModuleTransition",{attrs:{delay:"0.08"}},[e.recoShowModule&&null!==e.$frontmatter.tagline?a("p",{staticClass:"description"},[e._v("\n          "+e._s(e.$frontmatter.tagline||e.$description||"Welcome to your vuePress-theme-reco site")+"\n        ")]):e._e()])],1)]),e._v(" "),a("ModuleTransition",{attrs:{delay:"0.16"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.recoShowModule,expression:"recoShowModule"}],staticClass:"home-blog-wrapper"},[a("div",{staticClass:"blog-list"},[a("note-abstract",{attrs:{data:e.$recoPosts},on:{paginationChange:e.paginationChange}})],1),e._v(" "),a("div",{staticClass:"info-wrapper"},[a("PersonalInfo"),e._v(" "),a("h4",[a("reco-icon",{attrs:{icon:"reco-category"}}),e._v(" "+e._s(e.$recoLocales.category))],1),e._v(" "),a("ul",{staticClass:"category-wrapper"},e._l(this.$categories.list,(function(t,o){return a("li",{key:o,staticClass:"category-item"},[a("router-link",{attrs:{to:t.path}},[a("span",{staticClass:"category-name"},[e._v(e._s(t.name))]),e._v(" "),a("span",{staticClass:"post-num",style:{backgroundColor:e.getOneColor()}},[e._v(e._s(t.pages.length))])])],1)})),0),e._v(" "),a("hr"),e._v(" "),0!==e.$tags.list.length?a("h4",[a("reco-icon",{attrs:{icon:"reco-tag"}}),e._v(" "+e._s(e.$recoLocales.tag))],1):e._e(),e._v(" "),a("TagList",{on:{getCurrentTag:e.getPagesByTags}}),e._v(" "),e.$themeConfig.friendLink&&0!==e.$themeConfig.friendLink.length?a("h4",[a("reco-icon",{attrs:{icon:"reco-friend"}}),e._v(" "+e._s(e.$recoLocales.friendLink))],1):e._e(),e._v(" "),a("FriendLink")],1)])]),e._v(" "),a("ModuleTransition",{attrs:{delay:"0.24"}},[a("Content",{directives:[{name:"show",rawName:"v-show",value:e.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,null,null).exports),C=a(320),$=a(9),w=Object(o.b)({setup(e,t){const a=Object(o.c)().proxy;return{headers:Object(o.a)(()=>a.$showSubSideBar?a.$page.headers:[]),isLinkActive:e=>{const t=Object($.f)(a.$route,a.$page.path+"#"+e.slug);return t&&setTimeout(()=>{document.querySelector(".reco-side-"+e.slug).scrollIntoView()},300),t}}},render(e){return e("ul",{class:{"sub-sidebar-wrapper":!0},style:{width:this.headers.length>0?"12rem":"0"}},[...this.headers.map(t=>e("li",{class:{active:this.isLinkActive(t),["level-"+t.level]:!0},attr:{key:t.title}},[e("router-link",{class:{"sidebar-link":!0,["reco-side-"+t.slug]:!0},props:{to:`${this.$page.path}#${t.slug}`}},t.title)]))])}}),y=(a(392),Object(i.a)(w,void 0,void 0,!1,null,"70334359",null).exports);function S(e,t,a){const o=[];!function e(t,a){for(let o=0,r=t.length;o<r;o++)"group"===t[o].type?e(t[o].children||[],a):a.push(t[o])}(t,o);for(let t=0;t<o.length;t++){const r=o[t];if("page"===r.type&&r.path===decodeURIComponent(e.path))return o[t+a]}}var O=Object(o.b)({components:{PageInfo:C.a,ModuleTransition:n.a,SubSidebar:y},props:["sidebarItems"],setup(e,t){const a=Object(o.c)().proxy,{sidebarItems:r}=Object(o.i)(e),n=Object(o.a)(()=>a.$parent.recoShowModule),s=Object(o.a)(()=>{const{isShowComments:e}=a.$frontmatter,{showComment:t}=a.$themeConfig.valineConfig||{showComment:!0};return!1!==t&&!1!==e||!1===t&&!0===e}),i=Object(o.a)(()=>{const{$themeConfig:{valineConfig:e},$themeLocaleConfig:{valineConfig:t}}=a||{},o=t||e;return o&&0!=o.visitor}),c=Object(o.a)(()=>!1!==a.$themeConfig.lastUpdated&&a.$page.lastUpdated),l=Object(o.a)(()=>"string"==typeof a.$themeLocaleConfig.lastUpdated?a.$themeLocaleConfig.lastUpdated:"string"==typeof a.$themeConfig.lastUpdated?a.$themeConfig.lastUpdated:"Last Updated"),u=Object(o.a)(()=>{const e=a.$frontmatter.prev;return!1===e?void 0:e?Object($.l)(a.$site.pages,e,a.$route.path):(t=a.$page,o=r.value,S(t,o,-1));var t,o}),p=Object(o.a)(()=>{const e=a.$frontmatter.next;return!1===p?void 0:e?Object($.l)(a.$site.pages,e,a.$route.path):(t=a.$page,o=r.value,S(t,o,1));var t,o}),g=Object(o.a)(()=>{if(!1===a.$frontmatter.editLink)return!1;const{repo:e,editLinks:t,docsDir:o="",docsBranch:r="master",docsRepo:n=e}=a.$themeConfig;return n&&t&&a.$page.relativePath?function(e,t,a,o,r){if(/bitbucket.org/.test(e)){return($.j.test(t)?t:e).replace($.d,"")+"/src"+`/${o}/`+(a?a.replace($.d,"")+"/":"")+r+`?mode=edit&spa=0&at=${o}&fileviewer=file-view-default`}return($.j.test(t)?t:"https://github.com/"+t).replace($.d,"")+"/edit"+`/${o}/`+(a?a.replace($.d,"")+"/":"")+r}(e,n,o,r,a.$page.relativePath):""}),d=Object(o.a)(()=>a.$themeLocaleConfig.editLinkText||a.$themeConfig.editLinkText||"Edit this page"),m=Object(o.a)(()=>a.$showSubSideBar?{}:{paddingRight:"0"});return{recoShowModule:n,shouldShowComments:s,showAccessNumber:i,lastUpdated:c,lastUpdatedText:l,prev:u,next:p,editLink:g,editLinkText:d,pageStyle:m}}}),j=(a(393),Object(i.a)(O,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("main",{staticClass:"page",style:e.pageStyle},[a("ModuleTransition",{attrs:{delay:"0.08"}},[a("section",{directives:[{name:"show",rawName:"v-show",value:e.recoShowModule,expression:"recoShowModule"}]},[a("div",{staticClass:"page-title"},[a("h1",{staticClass:"title"},[e._v(e._s(e.$page.title))]),e._v(" "),a("PageInfo",{attrs:{pageInfo:e.$page,showAccessNumber:e.showAccessNumber}})],1),e._v(" "),a("Content",{staticClass:"theme-reco-content"})],1)]),e._v(" "),a("ModuleTransition",{attrs:{delay:"0.16"}},[e.recoShowModule?a("footer",{staticClass:"page-edit"},[e.editLink?a("div",{staticClass:"edit-link"},[a("a",{attrs:{href:e.editLink,target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(e.editLinkText))]),e._v(" "),a("OutboundLink")],1):e._e(),e._v(" "),e.lastUpdated?a("div",{staticClass:"last-updated"},[a("span",{staticClass:"prefix"},[e._v(e._s(e.lastUpdatedText)+": ")]),e._v(" "),a("span",{staticClass:"time"},[e._v(e._s(e.lastUpdated))])]):e._e()]):e._e()]),e._v(" "),a("ModuleTransition",{attrs:{delay:"0.24"}},[e.recoShowModule&&(e.prev||e.next)?a("div",{staticClass:"page-nav"},[a("p",{staticClass:"inner"},[e.prev?a("span",{staticClass:"prev"},[e.prev?a("router-link",{staticClass:"prev",attrs:{to:e.prev.path}},[e._v("\n            "+e._s(e.prev.title||e.prev.path)+"\n          ")]):e._e()],1):e._e(),e._v(" "),e.next?a("span",{staticClass:"next"},[e.next?a("router-link",{attrs:{to:e.next.path}},[e._v("\n            "+e._s(e.next.title||e.next.path)+"\n          ")]):e._e()],1):e._e()])]):e._e()]),e._v(" "),a("ModuleTransition",{attrs:{delay:"0.32"}},[e.recoShowModule?a("Comments",{attrs:{isShowComments:e.shouldShowComments}}):e._e()],1),e._v(" "),a("ModuleTransition",[e.recoShowModule?a("SubSidebar",{staticClass:"side-bar"}):e._e()],1)],1)}),[],!1,null,null,null).exports),x=a(394),k=Object(o.b)({components:{RecoIcon:n.b},setup(e,t){const a=Object(o.c)().proxy,r=Object(o.a)(()=>{const{$themeConfig:{valineConfig:e},$themeLocaleConfig:{valineConfig:t}}=a,o=t||e;return o&&0!=o.visitor});return{version:x.a,showAccessNumber:r}}}),T=(a(395),Object(i.a)(k,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer-wrapper"},[a("span",[a("reco-icon",{attrs:{icon:"reco-theme"}}),e._v(" "),a("a",{attrs:{target:"blank",href:"https://vuepress-theme-reco.recoluan.com"}},[e._v(e._s("vuepress-theme-reco@"+e.version))])],1),e._v(" "),e.$themeConfig.record?a("span",[a("reco-icon",{attrs:{icon:"reco-beian"}}),e._v(" "),a("a",{attrs:{href:e.$themeConfig.recordLink||"#"}},[e._v(e._s(e.$themeConfig.record))])],1):e._e(),e._v(" "),a("span",[a("reco-icon",{attrs:{icon:"reco-copyright"}}),e._v(" "),a("a",[e.$themeConfig.author?a("span",[e._v(e._s(e.$themeConfig.author))]):e._e(),e._v("\n        \n      "),e.$themeConfig.startYear&&e.$themeConfig.startYear!=(new Date).getFullYear()?a("span",[e._v(e._s(e.$themeConfig.startYear)+" - ")]):e._e(),e._v("\n      "+e._s((new Date).getFullYear())+"\n    ")])],1),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.showAccessNumber,expression:"showAccessNumber"}]},[a("reco-icon",{attrs:{icon:"reco-eye"}}),e._v(" "),a("AccessNumber",{attrs:{idVal:"/"}})],1),e._v(" "),e.$themeConfig.cyberSecurityRecord?a("p",{staticClass:"cyber-security"},[a("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png",alt:""}}),e._v(" "),a("a",{attrs:{href:e.$themeConfig.cyberSecurityLink||"#"}},[e._v(e._s(e.$themeConfig.cyberSecurityRecord))])]):e._e(),e._v(" "),a("Comments",{attrs:{isShowComments:!1}})],1)}),[],!1,null,"0a3fd326",null).exports),I=a(329),M=a(327),P=Object(o.b)({mixins:[M.a],components:{HomeBlog:b,Home:c,Page:j,Common:I.a,Footer:T},setup(e,t){const a=Object(o.c)().proxy;return{sidebarItems:Object(o.a)(()=>a.$page?Object($.m)(a.$page,a.$page.regularPath,a.$site,a.$localePath):[]),homeCom:Object(o.a)(()=>{const{type:e}=a.$themeConfig||{};return void 0!==e?"blog"==e?"HomeBlog":e:"Home"})}}}),L=(a(321),Object(i.a)(P,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Common",{attrs:{sidebarItems:e.sidebarItems,showModule:e.recoShowModule}},[e.$frontmatter.home?a(e.homeCom,{tag:"component"}):a("Page",{attrs:{"sidebar-items":e.sidebarItems}}),e._v(" "),e.$frontmatter.home?a("Footer",{staticClass:"footer"}):e._e()],1)}),[],!1,null,null,null));t.default=L.exports}}]);