"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7479],{4852:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(9231);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,k=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(k,i(i({ref:t},s),{},{components:n})):r.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},706:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var r=n(328),o=(n(9231),n(4852));const a={title:"Hook\uc744 \uc774\uc6a9\ud558\uc5ec Kakao \uc9c0\ub3c4 API \ubd88\ub7ec\uc624\uae30",sidebar_position:2},i=void 0,p={unversionedId:"setup/withHook",id:"setup/withHook",title:"Hook\uc744 \uc774\uc6a9\ud558\uc5ec Kakao \uc9c0\ub3c4 API \ubd88\ub7ec\uc624\uae30",description:"\ub3d9\uae30\uc801\uc73c\ub85c Kakao Map API\ub97c \ubd88\ub7ec\uc624\uace0 \uc2f6\uac70\ub098, Script \ud0dc\uadf8\ub97c \uc0bd\uc785 \ud558\uae30 \ud798\ub4e0 \uacbd\uc6b0 useInjectKakaoMapApi hook\ub97c \uc774\uc6a9\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/setup/withHook.md",sourceDirName:"setup",slug:"/setup/withHook",permalink:"/docs/setup/withHook",draft:!1,editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/setup/withHook.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Hook\uc744 \uc774\uc6a9\ud558\uc5ec Kakao \uc9c0\ub3c4 API \ubd88\ub7ec\uc624\uae30",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Next.js",permalink:"/docs/setup/next"}},c={},l=[],s={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\ub3d9\uae30\uc801\uc73c\ub85c Kakao Map API\ub97c \ubd88\ub7ec\uc624\uace0 \uc2f6\uac70\ub098, Script \ud0dc\uadf8\ub97c \uc0bd\uc785 \ud558\uae30 \ud798\ub4e0 \uacbd\uc6b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"useInjectKakaoMapApi")," hook\ub97c \uc774\uc6a9\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ud574\ub2f9 Hook\ub97c \uc0ac\uc6a9\uc2dc ",(0,o.kt)("inlineCode",{parentName:"p"},"react-kakao-maps-sdk")," \ub77c\uc774\ube0c\ub7ec\ub9ac \ub0b4\ubd80\uc5d0\uc11c ",(0,o.kt)("inlineCode",{parentName:"p"},"Loader")," \ub97c \ud1b5\ud55c loading \uc0c1\ud0dc\ub97c \uad00\ucc30\ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 \ub80c\ub354\ub9c1 \uc774\ud6c4 hook\ub97c \ud1b5\ud55c Kakao \uc9c0\ub3c4 API\ub97c \ubd88\ub7ec\uc624\ub354\ub77c\ub3c4 \uc790\ub3d9\uc73c\ub85c \ub9ac\ub80c\ub354\ub9c1\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null,"\ud574\ub2f9 hook\ub97c \uc0ac\uc6a9\uc774\ud6c4 \uc804\uc5ed\uc5d0 \uc124\uce58\uac00 \ub418\uace0 \uc774\ud6c4 \uc7ac\ud638\ucd9c(\ub3d9\uc77c\ud55c \uc635\uc158)\uc774 \uc77c\uc5b4\ub098\ub354\ub77c\ub3c4 \uc7ac\uc124\uce58 \ub418\uac70\ub098, \uc81c\uac70\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'function(){\n  const { loading, error } = useInjectKakaoMapApi({\n    appkey: "...", // \ubc1c\uae09 \ubc1b\uc740 APPKEY\n    ...options // \ucd94\uac00 \uc635\uc158\n  })\n\n  return (\n    // Map \ub0b4\ubd80\uc5d0\uc11c loading \uc0c1\ud0dc\ub97c \uc778\uc9c0\ud558\uace0 \uc788\uae30 \ub54c\ubb38\uc5d0 optional rendring\ub97c \ud558\uc9c0 \uc54a\uc544\ub3c4 \ub429\ub2c8\ub2e4.\n    <Map // \uc9c0\ub3c4\ub97c \ud45c\uc2dc\ud560 Container\n      center={{\n        // \uc9c0\ub3c4\uc758 \uc911\uc2ec\uc88c\ud45c\n        lat: 33.450701,\n        lng: 126.570667,\n      }}\n      style={{\n        // \uc9c0\ub3c4\uc758 \ud06c\uae30\n        width: "100%",\n        height: "450px",\n      }}\n      level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n    />\n  );\n}\n')))}d.isMDXComponent=!0}}]);