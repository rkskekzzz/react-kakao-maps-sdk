"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7858],{4852:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(328),a=(n(9231),n(4852));const o={title:"\ucee4\uc2a4\ud140 \ud0c0\uc77c\uc14b1",sidebar_position:22},i=void 0,p={unversionedId:"sample/map/customTileset",id:"sample/map/customTileset",title:"\ucee4\uc2a4\ud140 \ud0c0\uc77c\uc14b1",description:"\uc9c1\uc811 \ub9cc\ub4e0 \ud0c0\uc77c \uc774\ubbf8\uc9c0\ub85c \ud0c0\uc77c\uc14b\uc744 \ub9cc\ub4e4\uc5b4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/docs/sample/map/customTileset.mdx",sourceDirName:"sample/map",slug:"/sample/map/customTileset",permalink:"/docs/sample/map/customTileset",draft:!1,editUrl:"https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/docs/sample/map/customTileset.mdx",tags:[],version:"current",sidebarPosition:22,frontMatter:{title:"\ucee4\uc2a4\ud140 \ud0c0\uc77c\uc14b1",sidebar_position:22},sidebar:"tutorialSidebar",previous:{title:"\ud0c0\uc77c\ub85c\ub4dc \uc774\ubca4\ud2b8 \ub4f1\ub85d\ud558\uae30",permalink:"/docs/sample/map/addTilesloadedEvent"},next:{title:"\ucee4\uc2a4\ud140 \ud0c0\uc77c\uc14b2",permalink:"/docs/sample/map/getTile"}},s={},l=[],c={toc:l},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\uc9c1\uc811 \ub9cc\ub4e0 \ud0c0\uc77c \uc774\ubbf8\uc9c0\ub85c \ud0c0\uc77c\uc14b\uc744 \ub9cc\ub4e4\uc5b4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"original docs : ",(0,a.kt)("a",{parentName:"p",href:"https://apis.map.kakao.com/web/sample/customTileset/"},"https://apis.map.kakao.com/web/sample/customTileset/"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function(){\n  const Main = () => {\n    const domain = \'https://i1.daumcdn.net\'\n    const path = \'/dmaps/apis/openapi/sampleimg/\'\n\n    const plan = (x, y, z) => {\n      y = -y - 1\n      var limit = Math.ceil(3 / Math.pow(2, z))\n\n      if (0 <= y && y < limit && 0 <= x && x < limit) {\n        return domain + path + "planh" + z + "_" + y + "_" + x + ".png"\n      } else {\n        return "https://i1.daumcdn.net/dmaps/apis/white.png"\n      }\n    }\n\n    useEffect(() => {\n      const tileset = new kakao.maps.Tileset({\n        width: 512,\n        height: 512,\n        urlFunc: plan,\n        dark: false,\n        minZoom: 0,\n        maxZoom: 2,\n      })\n      kakao.maps.Tileset.add("PLAN", tileset)\n    }, [])\n\n    return (\n      <>\n        <Map // \uc9c0\ub3c4\ub97c \ud45c\uc2dc\ud560 Container\n          projectionId={null}\n          center={{\n            x: 650,\n            y: -550,\n          }}\n          style={{\n            width: "100%",\n            height: "450px",\n          }}\n          level={3} // \uc9c0\ub3c4\uc758 \ud655\ub300 \ub808\ubca8\n          onCreate={(map) => map.setMapTypeId(kakao.maps.MapTypeId["PLAN"])}\n        >\n          <MapMarker position={{\n            x: 650,\n            y: -550,\n          }}>\n            <div style={{color: "#000000" }}>\ucee4\uc2a4\ud140 \ud0c0\uc77c\uc14b\uc744 \uc62c\ub9b4\uc218 \uc788\uc2b5\ub2c8\ub2e4!</div>\n          </MapMarker>\n        </Map>\n      </>\n    )\n  }\n  return (<Main/>)\n}\n')))}u.isMDXComponent=!0}}]);