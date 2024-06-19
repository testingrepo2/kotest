"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[61725],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},l=Object.keys(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=i.createContext({}),c=function(t){var e=i.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=c(t.components);return i.createElement(o.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),d=c(n),g=r,h=d["".concat(o,".").concat(g)]||d[g]||p[g]||l;return n?i.createElement(h,a(a({ref:e},u),{},{components:n})):i.createElement(h,a({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,a=new Array(l);a[0]=d;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,a[1]=s;for(var c=2;c<l;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50352:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const l={id:"index",title:"IntelliJ Plugin",slug:"intellij-plugin.html",sidebar_label:"Introduction"},a=void 0,s={unversionedId:"intellij/index",id:"version-5.2/intellij/index",title:"IntelliJ Plugin",description:"Kotest offers an IntelliJ plugin available at the jetbrains plugin marketplace (search from within IntelliJ).",source:"@site/versioned_docs/version-5.2/intellij/index.md",sourceDirName:"intellij",slug:"/intellij/intellij-plugin.html",permalink:"/docs/5.2/intellij/intellij-plugin.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.2/intellij/index.md",tags:[],version:"5.2",frontMatter:{id:"index",title:"IntelliJ Plugin",slug:"intellij-plugin.html",sidebar_label:"Introduction"},sidebar:"intellij",next:{title:"Test Explorer",permalink:"/docs/5.2/intellij/intellij-test-explorer.html"}},o={},c=[{value:"Gutter Icons",id:"gutter-icons",level:2},{value:"Running Tests",id:"running-tests",level:2},{value:"Duplicated Test Highlighting",id:"duplicated-test-highlighting",level:2},{value:"Context Menu Run / Debug",id:"context-menu-run--debug",level:2},{value:"Intentions",id:"intentions",level:2}],u={toc:c};function p(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,i.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Kotest offers an ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kotest/kotest-intellij-plugin"},"IntelliJ plugin")," available at the jetbrains plugin ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/14080-kotest"},"marketplace")," (search from within IntelliJ)."),(0,r.kt)("p",null,"This plugin provides run icons for each test, a tool window for test navigation, duplicated test highlighting, assertion intentions, and more."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The Intellij plugin requires Kotest 4.2 or higher and will not run common tests of a multiplatform project")),(0,r.kt)("h2",{id:"gutter-icons"},"Gutter Icons"),(0,r.kt)("p",null,"The plugin provides gutter run icons for specs, top level tests, and nested tests."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gutter_icon_picture",src:n(25958).Z,width:"737",height:"438"})),(0,r.kt)("p",null,"Any tests disabled via a bang or by ",(0,r.kt)("em",{parentName:"p"},"xfunctions")," such as ",(0,r.kt)("inlineCode",{parentName:"p"},"xdescribe"),", will have a disabled test icon in the gutter."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gutter_icon_picture",src:n(50756).Z,width:"907",height:"445"})),(0,r.kt)("h2",{id:"running-tests"},"Running Tests"),(0,r.kt)("p",null,"If you execute a spec from the gutter icon, then all tests in that spec will be executed.\nIf you execute a test, then that test and all nested tests will be executed."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gutter_icon_picture",src:n(46691).Z,width:"685",height:"290"})),(0,r.kt)("h2",{id:"duplicated-test-highlighting"},"Duplicated Test Highlighting"),(0,r.kt)("p",null,"You cannot have two tests with the same name. The plugin will highlight any duplicated test names as errors."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"duplicated_test_picture",src:n(51580).Z,width:"813",height:"414"})),(0,r.kt)("h2",{id:"context-menu-run--debug"},"Context Menu Run / Debug"),(0,r.kt)("p",null,"Right clicking on a package will allow you to run, debug or run with coverage all the tests inside that package."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"run_context_menu_picture",src:n(24389).Z,width:"925",height:"298"})),(0,r.kt)("h2",{id:"intentions"},"Intentions"),(0,r.kt)("p",null,"This plugin has some basic intentions. For example, you can quickly mark a test as disabled."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gutter_icon_picture",src:n(46112).Z,width:"580",height:"148"})),(0,r.kt)("p",null,"Or you can highlight some text and mark it as should throw, or surround with a soft assertion block."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"gutter_icon_picture",src:n(99131).Z,width:"779",height:"303"})))}p.isMDXComponent=!0},51580:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/duplicated_test_string_spec-ccda51db0b69c31a45fb1ca638f83340.png"},50756:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/gutter_disabled-a969740e2b9528bcdbdd5b0c614d6655.png"},25958:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/gutter_icons-0041d916c7c27f35d387a77b0bbb55c0.png"},46691:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/gutter_run-de6404c7cc87cac6abbb0df4b6270edb.png"},46112:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/intention_bang-3503aa10cbd1b39f492d1402aa4d4535.png"},99131:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/intentions_surround-ba5d03db5a4b4caf0249d1cbfbce10ec.png"},24389:(t,e,n)=>{n.d(e,{Z:()=>i});const i=n.p+"assets/images/run_context_menu-574bc3d39bc3447d433eefb3c03e85ed.png"}}]);