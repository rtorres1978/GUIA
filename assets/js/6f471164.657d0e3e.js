"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6108],{4969:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var t=e(5893),r=e(1151);const a={},i=void 0,c={id:"tailwind/React + Tailwind",title:"React + Tailwind",description:"https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/",source:"@site/docs/tailwind/React + Tailwind.md",sourceDirName:"tailwind",slug:"/tailwind/React + Tailwind",permalink:"/GUIA/docs/tailwind/React + Tailwind",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tailwind/React + Tailwind.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Puntos de quiebre",permalink:"/GUIA/docs/tailwind/Puntos de quiebre"},next:{title:"Tutorial - JavaScript",permalink:"/GUIA/docs/category/tutorial---javascript"}},l={},o=[{value:"App",id:"app",level:2},{value:"Instalaciones",id:"instalaciones",level:2},{value:"postCSS",id:"postcss",level:2},{value:"Package.json",id:"packagejson",level:2},{value:"index.js",id:"indexjs",level:2},{value:"App.jsx",id:"appjsx",level:2},{value:"Card",id:"card",level:2}];function d(n){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/",children:"https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/"})}),"\n",(0,t.jsx)(s.h2,{id:"app",children:"App"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-css",children:"npx create-react-app appTailwind\n"})}),"\n",(0,t.jsx)(s.h2,{id:"instalaciones",children:"Instalaciones"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://tailwindcss.com/docs/installation/#3-create-your-tailwind-config-file-optional",children:"https://tailwindcss.com/docs/installation/#3-create-your-tailwind-config-file-optional"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-css",children:"npm install tailwindcss postcss-cli autoprefixer -D\r\nnpx tailwindcss init\n"})}),"\n",(0,t.jsx)(s.h2,{id:"postcss",children:"postCSS"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://tailwindcss.com/docs/installation/#using-tailwind-with-postcss",children:"https://tailwindcss.com/docs/installation/#using-tailwind-with-postcss"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-css",children:"postcss.config.js\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-css",children:"module.exports = {\r\n  plugins: [\r\n    // ...\r\n    require('tailwindcss'),\r\n    require('autoprefixer'),\r\n    // ...\r\n  ]\r\n}\n"})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Tailwind.css\r\nCrear un directorio src/assets/tailwind.css y en su interior:"}),"\n"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-css",children:"@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\r\n\r\n.btn {\r\n    @apply py-2 px-4 rounded;\r\n}\r\n\r\n.btn-blue {\r\n    @apply bg-blue-500 text-white;\r\n}\r\n\r\n.btn-blue:hover {\r\n    @apply bg-blue-700;\r\n}\r\n\r\n.card {\r\n    @apply rounded overflow-hidden shadow-lg;\r\n}\n"})}),"\n",(0,t.jsx)(s.h2,{id:"packagejson",children:"Package.json"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'"scripts": {\r\n    "start": "npm run watch:css && react-scripts start",\r\n    "build": "npm run build:css && react-scripts build",\r\n    "test": "react-scripts test",\r\n    "eject": "react-scripts eject",\r\n    "build:css": "postcss src/assets/tailwind.css -o src/assets/main.css",\r\n    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"\r\n  },\n'})}),"\n",(0,t.jsx)(s.h2,{id:"indexjs",children:"index.js"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"import React from 'react';\r\nimport ReactDOM from 'react-dom';\r\nimport './assets/main.css';\r\nimport App from './App.jsx';\r\n\r\nReactDOM.render(\r\n  <React.StrictMode>\r\n    <App />\r\n  </React.StrictMode>,\r\n  document.getElementById('root')\r\n);\n"})}),"\n",(0,t.jsx)(s.h2,{id:"appjsx",children:"App.jsx"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"import React from 'react'\r\nimport Card from './components/Card'\r\n\r\n\r\nconst App = () => {\r\n\r\n    return (\r\n        <div className='container mx-auto'>\r\n            <h1>Tailwind CSS</h1>\r\n            <h2>Incorporado con PostCss</h2>\r\n            <button className=\"btn btn-blue btn-blue:hover\">Bot\xf3n</button>\r\n            <div className=\"my-5 flex flex-wrap -mx-2\">\r\n                <div className=\"w-full sm:w-1/2 lg:w-1/3 px-2 my-2\">\r\n                    <Card photo='https://picsum.photos/800/600' />\r\n                </div>\r\n                <div className=\"w-full sm:w-1/2 lg:w-1/3 px-2 my-2\">\r\n                    <Card photo='https://picsum.photos/800/600' />\r\n                </div>\r\n                <div className=\"w-full sm:w-1/2 lg:w-1/3 px-2 my-2\">\r\n                    <Card photo='https://picsum.photos/800/600' />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    )\r\n}\r\n\r\nexport default App\n"})}),"\n",(0,t.jsx)(s.h2,{id:"card",children:"Card"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://tailwindcss.com/components/cards",children:"https://tailwindcss.com/components/cards"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:'import React from \'react\'\r\n\r\nconst Card = ({photo}) => {\r\n    return (\r\n        <div className=\'card\'>\r\n            <img src={photo} alt="" className=\'w-full\' />\r\n            <div className="px-6 py-4">\r\n                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>\r\n                <p className="text-gray-700 text-base">\r\n                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.\r\n                </p>\r\n            </div>\r\n            <div className="px-6 py-4">\r\n                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>\r\n                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>\r\n                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>\r\n            </div>\r\n        </div>\r\n    )\r\n}\r\n\r\nexport default Card\n'})})]})}function p(n={}){const{wrapper:s}={...(0,r.a)(),...n.components};return s?(0,t.jsx)(s,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},1151:(n,s,e)=>{e.d(s,{Z:()=>c,a:()=>i});var t=e(7294);const r={},a=t.createContext(r);function i(n){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function c(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(a.Provider,{value:s},n.children)}}}]);