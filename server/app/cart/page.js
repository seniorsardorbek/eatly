(()=>{var e={};e.id=565,e.ids=[565],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},7063:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>n.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>p,routeModule:()=>x,tree:()=>d});var r=a(3137),s=a(4647),i=a(4183),n=a.n(i),l=a(1775),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);a.d(t,o);let c=r.AppPageRouteModule,d=["",{children:["cart",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,2997)),"E:\\Git-hub\\Amaliyot\\Ozodbek\\eatly(javascript)\\src\\app\\cart\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,8044)),"E:\\Git-hub\\Amaliyot\\Ozodbek\\eatly(javascript)\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["E:\\Git-hub\\Amaliyot\\Ozodbek\\eatly(javascript)\\src\\app\\cart\\page.jsx"],u="/cart/page",m={require:a,loadChunk:()=>Promise.resolve()},x=new c({definition:{kind:s.x.APP_PAGE,page:"/cart/page",pathname:"/cart",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},3340:(e,t,a)=>{Promise.resolve().then(a.bind(a,3290))},3290:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});var r=a(80),s=a(9885),i=a(2451),n=a.n(i);a(9160);let l=function({data:e,decrementQuantity:t,increment:a}){return(0,r.jsxs)("div",{className:"shopCard",children:[r.jsx(n(),{src:`http://207.154.221.44:4002/${e?.image}`,alt:e.name,width:100,height:100}),(0,r.jsxs)("div",{className:"cartInfo",children:[r.jsx("h5",{children:e.name}),(0,r.jsxs)("p",{children:["$",e.price]})]}),(0,r.jsxs)("div",{className:"cartInfo2",children:[(0,r.jsxs)("div",{className:"btns",children:[r.jsx("button",{className:"decrement",onClick:()=>t(e.id),children:"-"}),r.jsx("span",{className:"price",children:e.quantity}),r.jsx("button",{className:"increment",onClick:()=>a(e.id),children:"+"})]}),(0,r.jsxs)("span",{className:"total",children:["$",e.quantity*e.price]})]})]})};a(2167);let o=function(){let[e,t]=(0,s.useState)();(0,s.useEffect)(()=>{t(JSON.parse(window.localStorage.getItem("orders"))||[])},[]);let a=0;console.log(e),(0,s.useEffect)(()=>{window.localStorage.setItem("orders",JSON.stringify(e))},[e]),a=(()=>{let t=e.reduce((e,t)=>e+t.price*t.quantity,0);return Math.ceil(t)})();let i=e=>{t(t=>t.filter(t=>t.id!==e))},n=a=>{let r=e.find(e=>e.id===a);r&&(1===r.quantity?i(a):t(e=>e.map(e=>e.id===a?{...e,quantity:e.quantity-1}:e)))},o=e=>{t(t=>t.map(t=>t.id===e?{...t,quantity:t.quantity+1}:t))};return r.jsx("main",{children:(0,r.jsxs)("section",{className:"container",children:[r.jsx("div",{className:"ShopCard",children:e.map((e,t)=>r.jsx(l,{data:e,decrementQuantity:n,increment:o},t))}),r.jsx("div",{className:"total",children:(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[r.jsx("span",{children:"Subtotal"}),"$",a]}),(0,r.jsxs)("li",{children:[r.jsx("span",{children:"Delivery"}),"$3.59"]}),(0,r.jsxs)("li",{children:[r.jsx("span",{children:"Total"}),"$",a+4]}),r.jsx("button",{className:"prBtn",children:"Review Payment"})]})})]})})}},2997:(e,t,a)=>{"use strict";a.r(t),a.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>o});var r=a(7536);let s=(0,r.createProxy)(String.raw`E:\Git-hub\Amaliyot\Ozodbek\eatly(javascript)\src\app\cart\page.jsx`),{__esModule:i,$$typeof:n}=s,l=s.default,o=l},3881:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>s});var r=a(6885);let s=e=>{let t=(0,r.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}},2167:()=>{},9160:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),r=t.X(0,[705,631,431],()=>a(7063));module.exports=r})();