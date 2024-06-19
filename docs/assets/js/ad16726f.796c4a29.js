"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[50228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,r(r({ref:t},c),{},{components:n})):a.createElement(f,r({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={title:"Project Level Config",slug:"project-config.html"},r=void 0,s={unversionedId:"framework/project_config",id:"version-5.6/framework/project_config",title:"Project Level Config",description:"Kotest is flexible and has many ways to configure tests, such as configuring the order of tests inside a spec, or how",source:"@site/versioned_docs/version-5.6/framework/project_config.md",sourceDirName:"framework",slug:"/framework/project-config.html",permalink:"/docs/5.6/framework/project-config.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.6/framework/project_config.md",tags:[],version:"5.6",frontMatter:{title:"Project Level Config",slug:"project-config.html"},sidebar:"framework",previous:{title:"Test Case Config",permalink:"/docs/5.6/framework/testcaseconfig.html"},next:{title:"System properties",permalink:"/docs/5.6/framework/framework-config-props.html"}},l={},p=[{value:"Runtime Detection",id:"runtime-detection",level:2},{value:"Parallelism",id:"parallelism",level:2},{value:"Assertion Mode",id:"assertion-mode",level:2},{value:"Global Assert Softly",id:"global-assert-softly",level:2},{value:"Duplicate Test Name Handling",id:"duplicate-test-name-handling",level:2},{value:"Fail On Ignored Tests",id:"fail-on-ignored-tests",level:2},{value:"Ordering",id:"ordering",level:2},{value:"Test Ordering",id:"test-ordering",level:3},{value:"Spec Ordering",id:"spec-ordering",level:3},{value:"Test Naming",id:"test-naming",level:2},{value:"Test Case",id:"test-case",level:3},{value:"Test Name Tags",id:"test-name-tags",level:3},{value:"Test name whitespace",id:"test-name-whitespace",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Kotest is flexible and has many ways to configure tests, such as configuring the order of tests inside a spec, or how\ntest classes are created. Sometimes you may want to set this at a global level and for that you need to use\nproject-level-config."),(0,o.kt)("p",null,"Project level configuration can be used by creating an object or class that extends from ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractProjectConfig"),"."),(0,o.kt)("p",null,"Any configuration set at the Spec level or directly on a test will override the config specified at the project level."),(0,o.kt)("p",null,"Some configuration options available in ",(0,o.kt)("inlineCode",{parentName:"p"},"KotestProjectConfig")," include parallelism of tests, failing specs with ignored\ntests, global ",(0,o.kt)("inlineCode",{parentName:"p"},"AssertSoftly"),", and reusable listeners or extensions."),(0,o.kt)("h2",{id:"runtime-detection"},"Runtime Detection"),(0,o.kt)("p",null,"At runtime, Kotest will scan for classes that extend ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractProjectConfig")," and instantiate them, using any\nconfiguration values defined in those classes."),(0,o.kt)("p",null,"You can create more than one config class in different modules, and any on the current classpath will be detected and\nconfigs merged. This is effective for allowing common config to be placed into a root module. In the case of clashes,\none value will be arbitrarily picked, so it is not recommended adding competing settings to different configs."),(0,o.kt)("p",null,"If you have a large project, then you may wish to disable the auto scanning for these config classes if it is incurring\na significant startup cost. You can do this by\nsetting a system property or environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.framework.classpath.scanning.config.disable")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"Once auto scanning is disabled, if you wish to still use project config, you can specify a well known class name which\nKotest will reflectively instantiate. The system property or environment variable to use\nis ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.framework.config.fqn"),"."),(0,o.kt)("p",null,"For example, setting:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kotest.framework.classpath.scanning.config.disable=true\nkotest.framework.config.fqn=com.wibble.KotestConfig\n")),(0,o.kt)("p",null,"Will disable runtime scanning, and look for a class ",(0,o.kt)("inlineCode",{parentName:"p"},"com.wibble.KotestConfig"),". The class must still\ninherit ",(0,o.kt)("inlineCode",{parentName:"p"},"AbstractProjectConfig"),"."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Another related setting is ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.framework.classpath.scanning.autoscan.disable")," which can also be set to false for speed.\nWith auto scan disabled, Kotest will not scan the classpath looking for for ",(0,o.kt)("inlineCode",{parentName:"p"},"@AutoScan")," annotated extensions.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"System properties set in your gradle file won't be picked up by the intellij plugin if you have that installed.\nInstead, look to specify the properties inside a ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.properties")," file. Full details ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.6/intellij/intellij-properties.html"},"here"),".")),(0,o.kt)("h2",{id:"parallelism"},"Parallelism"),(0,o.kt)("p",null,"You can ask Kotest to run specs in parallel to take advantage of modern cpus with several cores by setting the parallelism level (default is 1). Tests inside a spec are always executed sequentially."),(0,o.kt)("p",null,"To do this, override ",(0,o.kt)("inlineCode",{parentName:"p"},"parallelism")," inside your config and set it to a value higher than 1.\nThe number set is the number of concurrently executing specs. For example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"object KotestProjectConfig : AbstractProjectConfig() {\n    override val parallelism = 3\n}\n")),(0,o.kt)("p",null,"An alternative way to enable this is the system property ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.framework.parallelism")," which will always (if defined) take priority over the value here."),(0,o.kt)("p",null,"Some tests may not play nice in parallel, so you can opt out individual specs and force them to be executed in isolation by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"@DoNotParallelize")," annotation on the spec."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This is only available on the JVM target.")),(0,o.kt)("h2",{id:"assertion-mode"},"Assertion Mode"),(0,o.kt)("p",null,"You can ask Kotest to fail the build, or warn in std err, if a test is executed that does not use a Kotest assertion."),(0,o.kt)("p",null,"To do this, set ",(0,o.kt)("inlineCode",{parentName:"p"},"assertionMode")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"AssertionMode.Error")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"AssertionMode.Warn")," inside your config. For example.\nAn alternative way to enable this is the system property ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.framework.assertion.mode")," which will always (if defined) take priority over the value here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"object KotestProjectConfig : AbstractProjectConfig() {\n    override val assertionMode = AssertionMode.Error\n}\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Assertion mode only works for Kotest assertions and not other assertion libraries. This is because the assertions need to opt-in\nto the assertion mode when enabled.")),(0,o.kt)("h2",{id:"global-assert-softly"},"Global Assert Softly"),(0,o.kt)("p",null,"Assert softly is very useful to batch up errors into a single failure. If we want to enable this for every test automatically, we can do this in a config.\nAn alternative way to enable this is by setting system property ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.framework.assertion.globalassertsoftly")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," which will always (if defined) take priority over the value here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"object KotestProjectConfig : AbstractProjectConfig() {\n    override val globalAssertSoftly = true\n}\n")),(0,o.kt)("h2",{id:"duplicate-test-name-handling"},"Duplicate Test Name Handling"),(0,o.kt)("p",null,"By default, Kotest will rename a test if it has the same name as another test in the same scope. It will append _1, _2\nand so on to the test name. This is useful for automatically generated tests."),(0,o.kt)("p",null,"You can change this behavior globally by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"duplicateTestNameMode")," to either ",(0,o.kt)("inlineCode",{parentName:"p"},"DuplicateTestNameMode.Error")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"DuplicateTestNameMode.Warn"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Error")," will fail the test suite on a repeated name, and warn will rename but output a warning."),(0,o.kt)("h2",{id:"fail-on-ignored-tests"},"Fail On Ignored Tests"),(0,o.kt)("p",null,"You may wish to consider an ignored test as a failure.\nTo enable this feature, set ",(0,o.kt)("inlineCode",{parentName:"p"},"failOnIgnoredTests")," to true inside your project config. For example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"object KotestProjectConfig : AbstractProjectConfig() {\n    override val failOnIgnoredTests = true\n}\n")),(0,o.kt)("h2",{id:"ordering"},"Ordering"),(0,o.kt)("p",null,"Kotest supports ordering both specs and tests independently."),(0,o.kt)("h3",{id:"test-ordering"},"Test Ordering"),(0,o.kt)("p",null,"When running multiple tests from a Spec, there's a certain order on how to execute them."),(0,o.kt)("p",null,"By default, a sequential order is used (the order that tests are defined in the spec), but this can be changed. For available options see ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.6/framework/test-ordering.html"},"test ordering"),"."),(0,o.kt)("h3",{id:"spec-ordering"},"Spec Ordering"),(0,o.kt)("p",null,"By default, the ordering of Spec classes is not defined. This is often sufficient, when we have no preference, but if we\nneed control over the execution order of specs, we can use ",(0,o.kt)("a",{parentName:"p",href:"/docs/5.6/framework/spec-ordering.html"},"spec ordering"),"."),(0,o.kt)("h2",{id:"test-naming"},"Test Naming"),(0,o.kt)("p",null,"Test names can be adjusted in several ways."),(0,o.kt)("h3",{id:"test-case"},"Test Case"),(0,o.kt)("p",null,"Test names case can be controlled by changing the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"testNameCase"),"."),(0,o.kt)("p",null,"By default, the value is ",(0,o.kt)("inlineCode",{parentName:"p"},"TestNameCase.AsIs")," which makes no change."),(0,o.kt)("p",null,"By setting the value to ",(0,o.kt)("inlineCode",{parentName:"p"},"TestNameCase.Lowercase")," a test's name will be lowercase in output."),(0,o.kt)("p",null,"If you are using a spec that adds in prefixes to the test names (should as WordSpec or BehaviorSpec) then the\nvalues ",(0,o.kt)("inlineCode",{parentName:"p"},"TestNameCase.Sentence")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"TestNameCase.InitialLowercase")," can be useful."),(0,o.kt)("h3",{id:"test-name-tags"},"Test Name Tags"),(0,o.kt)("p",null,"Another using test name option is ",(0,o.kt)("inlineCode",{parentName:"p"},"testNameAppendTags")," which, when set to true, will include any applicable tags in the\ntest name.\nFor example, if a test ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," was defined in a spec with the tags ",(0,o.kt)("inlineCode",{parentName:"p"},"linux")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"spark")," then the test name would be\nadjusted\nto be ",(0,o.kt)("inlineCode",{parentName:"p"},"foo [linux, spark]")),(0,o.kt)("p",null,"This setting can also be set using a system property or environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.framework.testname.append.tags")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h3",{id:"test-name-whitespace"},"Test name whitespace"),(0,o.kt)("p",null,"If you define test names over several lines then ",(0,o.kt)("inlineCode",{parentName:"p"},"removeTestNameWhitespace")," can be useful. Take this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'"""this is\n   my test case""" {\n  // test here\n}\n')),(0,o.kt)("p",null,"Then the test name in output will be ",(0,o.kt)("inlineCode",{parentName:"p"},"this is   my test case"),". By setting ",(0,o.kt)("inlineCode",{parentName:"p"},"removeTestNameWhitespace")," to true,\nthen this name will be trimmed to ",(0,o.kt)("inlineCode",{parentName:"p"},"this is my test case"),"."),(0,o.kt)("p",null,"An alternative way to enable this is by setting system property ",(0,o.kt)("inlineCode",{parentName:"p"},"kotest.framework.testname.multiline")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," which will always (if defined) take priority over the value here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"object KotestProjectConfig : AbstractProjectConfig() {\n    override val testNameRemoveWhitespace = true\n}\n")))}d.isMDXComponent=!0}}]);