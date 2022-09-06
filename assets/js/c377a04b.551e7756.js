"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1269:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,slug:"/"},o="Obsidian Advanced URI",s={unversionedId:"index",id:"index",title:"Obsidian Advanced URI",description:"Overview",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/obsidian-advanced-uri/",draft:!1,editUrl:"https://github.com/Vinzent03/obsidian-advanced-uri/tree/master/docs/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"sidebar",next:{title:"Installing",permalink:"/obsidian-advanced-uri/installing"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Motivation",id:"motivation",level:2},{value:"External resources",id:"external-resources",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"obsidian-advanced-uri"},"Obsidian Advanced URI"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Vinzent03/obsidian-advanced-uri"},"Obsidian Advanced URI")," allows you to control many different features in Obsidian just by opening some URIs. Because they are just text and don't require any mouse clicks or keyboard inputs, they are perfect to automate your Obsidian workflow."),(0,r.kt)("p",null,"You can for example "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/obsidian-advanced-uri/actions/navigation"},"open files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/obsidian-advanced-uri/actions/writing"},"edit files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/obsidian-advanced-uri/actions/writing"},"create files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/obsidian-advanced-uri/actions/navigation"},"open workspaces")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/obsidian-advanced-uri/actions/navigation"},"navigate to headings/blocks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/obsidian-advanced-uri/actions/search_replace"},"automated search and replace in a file"))),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"I created this ",(0,r.kt)("a",{parentName:"p",href:"https://obsidian.md"},"Obsidian")," plugin initially to load workspaces per URI.\nI even created a ",(0,r.kt)("a",{parentName:"p",href:"https://forum.obsidian.md/t/load-workspace-per-url-scheme/7120"},"feature request")," on the forum to add that feature to Obsidian's own URI schema, but I ended up solving it myself with this plugin. "),(0,r.kt)("p",null,"Since then, many new features were added (most of them from feature requests on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Vinzent03/obsidian-advanced-uri"},"GitHub"),").\nAs today, I don't even use this plugin anymore, but I'm very happy that ",(0,r.kt)("strong",{parentName:"p"},"many")," others do, partly on a daily basis."),(0,r.kt)("h2",{id:"external-resources"},"External resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[","iOS] ",(0,r.kt)("a",{parentName:"li",href:"https://forum.obsidian.md/t/journal-log-workflow-drafts-like-just-start-writing-for-your-daily-notes-ios/18382"},'Drafts like "just start writing" for your daily notes')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://forum.obsidian.md/t/meta-url-scheme-actions-parameters/7035"},"Meta - URL Scheme Actions & Parameters")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/chrisgrieser/shimmering-obsidian"},"Shimmering Obsidian")," an Alfred workflow using many Advanced URI features under the hood")),(0,r.kt)("admonition",{title:"Supporting",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you find this plugin useful and would like to support its development, you can support me on ",(0,r.kt)("a",{parentName:"p",href:"https://Ko-fi.com/Vinzent"},"Ko-fi"),"."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://ko-fi.com/F1F195IQ5"},(0,r.kt)("img",{parentName:"a",src:"https://ko-fi.com/img/githubbutton_sm.svg",alt:"Ko-fi"})))))}p.isMDXComponent=!0}}]);