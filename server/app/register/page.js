(()=>{var e={};e.id=11,e.ids=[11],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},9491:e=>{"use strict";e.exports=require("assert")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5687:e=>{"use strict";e.exports=require("https")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},649:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>g,originalPathname:()=>u,pages:()=>p,routeModule:()=>h,tree:()=>d});var s=r(3137),a=r(4647),i=r(4183),n=r.n(i),o=r(1775),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(t,l);let c=s.AppPageRouteModule,d=["",{children:["register",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,7522)),"E:\\Git-hub\\Amaliyot\\Ozodbek\\eatly(javascript)\\src\\app\\register\\page.jsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,8044)),"E:\\Git-hub\\Amaliyot\\Ozodbek\\eatly(javascript)\\src\\app\\layout.jsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["E:\\Git-hub\\Amaliyot\\Ozodbek\\eatly(javascript)\\src\\app\\register\\page.jsx"],u="/register/page",g={require:r,loadChunk:()=>Promise.resolve()},h=new c({definition:{kind:a.x.APP_PAGE,page:"/register/page",pathname:"/register",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},4548:(e,t,r)=>{Promise.resolve().then(r.bind(r,5303))},5303:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});var s=r(80),a=r(9885);r(5563);var i=r(1440),n=r.n(i),o=r(2451),l=r.n(o),c=r(4276),d=r(7114),p=r(8522),u=r(309);let g=function(){let e=(0,d.useRouter)(),[t,r]=(0,a.useState)({}),[i,o]=(0,a.useState)(!1),g=e=>{r(r=>({...t,[e.target.name]:e.target.value}))},h=r=>{r.preventDefault(),o(!0),u.T.post("register",t).then(t=>{window.localStorage.setItem("token",JSON.stringify(t.data.data)),o(!1),e.push("/")}).catch(e=>{o(!1),console.log(e),alert(e.data)})};return console.log(i),(0,s.jsxs)("div",{className:"container loginWrapper",children:[(0,s.jsxs)("div",{className:"sectionOne",children:[s.jsx("div",{className:"loginHeader",children:s.jsx("div",{className:"logo",children:s.jsx(p.TR,{})})}),(0,s.jsxs)("div",{className:"login",children:[s.jsx("h3",{children:"Sign Up To eatly"}),(0,s.jsxs)("form",{onSubmit:e=>h(e),children:[s.jsx("input",{onChange:g,type:"text",name:"name",placeholder:"Name"}),s.jsx("input",{onChange:g,type:"text",name:"email",placeholder:"Email"}),s.jsx("input",{onChange:g,type:"password",name:"password",placeholder:"Password"}),s.jsx("span",{className:"forgot",children:"Forget password"}),s.jsx("button",{type:"submit",className:"prBtn",children:"SIGN UP"})]}),(0,s.jsxs)("div",{className:"loginAccordion",children:["Already Have An Account?"," ",s.jsx(n(),{className:"hrefLink",href:"/login",children:"Sign In?"})]})]}),(0,s.jsxs)("div",{className:"loginFooter",children:[s.jsx("span",{children:"Privacy police "}),s.jsx("span",{children:"Copyright 2022"})]})]}),(0,s.jsxs)("div",{className:"sectionTwo",children:[s.jsx("div",{className:"loginImage",children:s.jsx(l(),{alt:"loginImage",src:c.Z})}),(0,s.jsxs)("div",{className:"sectionTwoAccordion",children:[s.jsx("h2",{children:"Find Foods With Love"}),s.jsx("p",{children:"Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money."})]})]})]})}},7522:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>l});var s=r(7536);let a=(0,s.createProxy)(String.raw`E:\Git-hub\Amaliyot\Ozodbek\eatly(javascript)\src\app\register\page.jsx`),{__esModule:i,$$typeof:n}=a,o=a.default,l=o},4276:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});let s={src:"/_next/static/media/loginImage.05d37c79.png",height:477,width:598,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAr0lEQVR42mN49eUjMwMQ/P//X/Derat33r5+9eLL12+v//z58//v37/TGEDg5///yrevnbmyd9uK/2fOHfn8/MXLhI8fP/q/ffvWgAEELt+4OG1KZ+L/2cUMn9aurP2/Y++uDAYYePP6U9Sbt2+vz5/a+f9QrsD/g8va/u+/fD4JJHflxmU2hp8/f137DwR379+7uevEltOnLl9pYkAGnz9/9vj8+VP5hw8ftRmwAADwCWm8XXLYOgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}},5563:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[705,631,258,431,471],()=>r(649));module.exports=s})();