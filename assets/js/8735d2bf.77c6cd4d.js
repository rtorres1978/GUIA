"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2965],{6751:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var s=i(5893),t=i(1151);const l={},r="Personalizaci\xf3n",a={id:"tailwind/Personalizaci\xf3n",title:"Personalizaci\xf3n",description:"https://tailwindcss.com/docs/installation/",source:"@site/docs/tailwind/Personalizaci\xf3n.md",sourceDirName:"tailwind",slug:"/tailwind/Personalizaci\xf3n",permalink:"/GUIA/docs/tailwind/Personalizaci\xf3n",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tailwind/Personalizaci\xf3n.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GUIA DE TAILWIND",permalink:"/GUIA/docs/tailwind/Guia-de-tailwind"},next:{title:"Puntos de quiebre",permalink:"/GUIA/docs/tailwind/Puntos de quiebre"}},c={},o=[{value:"Intalaci\xf3n",id:"intalaci\xf3n",level:2},{value:"npm tailwind",id:"npm-tailwind",level:2},{value:"Archivos",id:"archivos",level:2},{value:"Compilar",id:"compilar",level:2},{value:"Personalizar",id:"personalizar",level:2},{value:"Extensi\xf3n VSC",id:"extensi\xf3n-vsc",level:2},{value:"Ejemplos:",id:"ejemplos",level:3},{value:"Extracting classes using @apply",id:"extracting-classes-using-apply",level:2},{value:"Components",id:"components",level:2},{value:"Navigation (Navbar)",id:"navigation-navbar",level:2}];function d(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"personalizaci\xf3n",children:"Personalizaci\xf3n"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://tailwindcss.com/docs/installation/",children:"https://tailwindcss.com/docs/installation/"})}),"\n",(0,s.jsx)(e.h2,{id:"intalaci\xf3n",children:"Intalaci\xf3n"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["Tener instalado node.js ",(0,s.jsx)(e.a,{href:"https://nodejs.org/es/",children:" https://nodejs.org/es/"})]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"Crear package.json"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"npm init -y\n"})}),"\n",(0,s.jsx)(e.h2,{id:"npm-tailwind",children:"npm tailwind"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"npm i tailwindcss\n"})}),"\n",(0,s.jsx)(e.h2,{id:"archivos",children:"Archivos"}),"\n",(0,s.jsx)(e.p,{children:"Crear un directorio src/estilos.css y en su interior:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-css",children:"@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\n"})}),"\n",(0,s.jsx)(e.h2,{id:"compilar",children:"Compilar"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-css",children:"npx tailwindcss build src/estilos.css -o public/output.css\n"})}),"\n",(0,s.jsx)(e.p,{children:"Crear arhivo public/index.html y llamar a los estilos:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<html lang="es">\r\n\r\n<head>\r\n    <meta charset="UTF-8">\r\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\r\n    <title>Document</title>\r\n    <link rel="stylesheet" href="output.css">\r\n</head>\r\n\r\n<body>\r\n    <h1 class="mt-20">Hola Tailwind</h1>\r\n</body>\r\n\r\n</html>\n'})}),"\n",(0,s.jsx)(e.h2,{id:"personalizar",children:"Personalizar"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://tailwindcss.com/docs/configuration",children:"https://tailwindcss.com/docs/configuration"}),"\r\n",(0,s.jsx)(e.a,{href:"https://tailwindcss.com/docs/configuration#scaffolding-the-entire-default-configuration",children:"https://tailwindcss.com/docs/configuration#scaffolding-the-entire-default-configuration"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"npx tailwindcss init --full\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"npx tailwindcss init\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"module.exports = {\r\n  purge: [],\r\n  theme: {\r\n    extend: {},\r\n  },\r\n  variants: {},\r\n  plugins: [],\r\n}\n"})}),"\n",(0,s.jsx)(e.h2,{id:"extensi\xf3n-vsc",children:"Extensi\xf3n VSC"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss",children:"https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsx)(e.p,{children:"Funciona si existe el archivo tailwind.config.js"}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"ejemplos",children:"Ejemplos:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"module.exports = {\r\n  purge: [],\r\n  theme: {\r\n    extend: {\r\n      colors: {\r\n        danger: '#ff5f40',\r\n        info: {\r\n          900: '#234e52',\r\n          800: '#285e61',\r\n        }\r\n      },\r\n    },\r\n    fontFamily: {\r\n      rale: ['Raleway'],\r\n    },\r\n  },\r\n  variants: {},\r\n  plugins: [],\r\n}\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-css",children:"@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;900&display=swap');\r\n\r\n@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-css",children:'<body>\r\n    <h1 class="bg-danger text-xl font-rale font-hairline">Hola Tailwind</h1>\r\n    <h2 class="bg-info-900 text-white">Hola dos mundo</h2>\r\n</body>\n'})}),"\n",(0,s.jsx)(e.p,{children:"No olvide compilar su c\xf3digo:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"npx tailwindcss build src/estilos.css -o public/output.css\n"})}),"\n",(0,s.jsx)(e.h2,{id:"extracting-classes-using-apply",children:"Extracting classes using @apply"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-css",children:"@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;900&display=swap');\r\n\r\n@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\r\n\r\n/* Estamos ocupando una fuente personalizada \"Rale\" */\r\n.btn {\r\n    @apply font-rale py-2 px-4 rounded;\r\n}\r\n\r\n.btn-blue {\r\n    @apply bg-blue-500 text-white;\r\n}\r\n\r\n.btn-blue:hover {\r\n    @apply bg-blue-700;\r\n}\n"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-css",children:'\x3c!-- Extracting classes using @apply --\x3e\r\n<button class="btn btn-blue">\r\n    Button\r\n</button>\n'})}),"\n",(0,s.jsx)(e.p,{children:"No olvide compilar su c\xf3digo:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"npx tailwindcss build src/estilos.css -o public/output.css\n"})}),"\n",(0,s.jsx)(e.h2,{id:"components",children:"Components"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://tailwindcss.com/components",children:"https://tailwindcss.com/components"})}),"\n",(0,s.jsx)(e.h2,{id:"navigation-navbar",children:"Navigation (Navbar)"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://tailwindcss.com/components/navigation",children:"https://tailwindcss.com/components/navigation"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:'<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">\r\n  <div class="flex items-center flex-shrink-0 text-white mr-6">\r\n    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>\r\n    <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>\r\n  </div>\r\n  <div class="block lg:hidden">\r\n    <button id=\'boton\' class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">\r\n      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>\r\n    </button>\r\n  </div>\r\n  <div id=\'menu\' class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">\r\n    <div class="text-sm lg:flex-grow">\r\n      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">\r\n        Docs\r\n      </a>\r\n      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">\r\n        Examples\r\n      </a>\r\n      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">\r\n        Blog\r\n      </a>\r\n    </div>\r\n    <div>\r\n      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>\r\n    </div>\r\n  </div>\r\n</nav>\n'})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-html",children:"const boton = document.querySelector('#boton');\r\nconst menu = document.querySelector('#menu');\r\n\r\nboton.addEventListener('click', () => {\r\n    console.log('click')\r\n    menu.classList.toggle('hidden')\r\n})\n"})})]})}function h(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>a,a:()=>r});var s=i(7294);const t={},l=s.createContext(t);function r(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);