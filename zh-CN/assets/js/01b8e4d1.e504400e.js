"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[75],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="\u6846\u67b6",c={unversionedId:"concepts/schema",id:"concepts/schema",title:"\u6846\u67b6",description:"\u4f20\u9012\u503c\u7ed9 URI \u7684\u65b9\u5f0f\u4e0e\u5176\u4ed6 URL \u65b9\u5f0f\u7c7b\u4f3c",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/concepts/schema.md",sourceDirName:"concepts",slug:"/concepts/schema",permalink:"/obsidian-advanced-uri/zh-CN/concepts/schema",draft:!1,editUrl:"https://github.com/Vinzent03/obsidian-advanced-uri/tree/master/docs/docs/concepts/schema.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"\u5f00\u59cb\u4f7f\u7528",permalink:"/obsidian-advanced-uri/zh-CN/getting_started"},next:{title:"\u7f16\u7801",permalink:"/obsidian-advanced-uri/zh-CN/concepts/encoding"}},p={},l=[{value:"\u5e93\u53c2\u6570",id:"\u5e93\u53c2\u6570",level:2}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6846\u67b6"},"\u6846\u67b6"),(0,a.kt)("p",null,"\u4f20\u9012\u503c\u7ed9 URI \u7684\u65b9\u5f0f\u4e0e\u5176\u4ed6 URL \u65b9\u5f0f\u7c7b\u4f3c"),(0,a.kt)("p",null,"\u51e0\u4e4e\u6bcf\u4e00\u4e2a URI \u90fd\u5f00\u59cb\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"obsidian://advanced-uri"),"\u3002\u503c\u88ab\u8bbe\u7f6e\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"?"),"\u540e\u7684\u952e\u503c\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"key=value"),"\u4e2d\u3002\u952e\u503c\u5bf9\u672c\u8eab\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"&"),"\u8fdb\u884c\u5206\u5272"),(0,a.kt)("p",null,"\u4f8b\u5982\u4e0b\u9762\u7684\u793a\u4f8b URI\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-url"},"obsidian://advanced-uri?key1=value1&key2=value2\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u786e\u4fdd\u4f60\u7684\u503c\u88ab\u5b8c\u6574\u7684 ",(0,a.kt)("a",{parentName:"p",href:"encoding"},"\u7f16\u7801"))),(0,a.kt)("h2",{id:"\u5e93\u53c2\u6570"},"\u5e93\u53c2\u6570"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6bcf\u4e00\u4e2a")," Obsidian URI \u90fd\u652f\u6301",(0,a.kt)("inlineCode",{parentName:"p"},"vault"),"\u53c2\u6570\u6765\u5b9a\u4e49\u6267\u884c URI \u7684\u76ee\u6807\u5e93\u3002\u5982\u679c\u5c06\u5176\u7f6e\u7a7a\uff0c\u5219\u5c06\u4f7f\u7528\u4f60\u6700\u8fd1\u4e00\u6b21\u4f7f\u7528\u7684\u5e93\u3002"),(0,a.kt)("admonition",{title:"Example",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u7279\u5b9a\u5e93:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-uri"},"obsidian://advanced-uri?vault=myVault&key1=value1\n")),(0,a.kt)("p",{parentName:"admonition"},"\u6700\u8fd1\u4f7f\u7528\u7684\u5e93:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-uri"},"obsidian://advanced-uri?key1=value1\n"))))}u.isMDXComponent=!0}}]);