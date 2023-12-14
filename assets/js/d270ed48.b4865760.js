"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[425],{7903:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=s(5893),r=s(1151);const a={sidebar_position:2},t=void 0,o={id:"tailwind/Conceptos b\xe1sicos",title:"Conceptos b\xe1sicos",description:"Cada clase de utilidad en Tailwind se puede aplicar condicionalmente en diferentes puntos de interrupci\xf3n, lo que hace que sea muy f\xe1cil crear interfaces responsivas complejas sin tener que salir de su HTML.",source:"@site/docs/tailwind/Conceptos b\xe1sicos.md",sourceDirName:"tailwind",slug:"/tailwind/Conceptos b\xe1sicos",permalink:"/GUIA/docs/tailwind/Conceptos b\xe1sicos",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tailwind/Conceptos b\xe1sicos.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Instalacion",permalink:"/GUIA/docs/tailwind/Instalacion"},next:{title:"Animaciones",permalink:"/GUIA/docs/tailwind/Animaciones"}},c={},d=[{value:"Personalizando tu tema",id:"personalizando-tu-tema",level:2},{value:"Funciones y directivas",id:"funciones-y-directivas",level:2}];function l(e){const n={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Cada clase de utilidad en Tailwind se puede aplicar condicionalmente en diferentes puntos de interrupci\xf3n, lo que hace que sea muy f\xe1cil crear interfaces responsivas complejas sin tener que salir de su HTML."}),"\n",(0,i.jsx)(n.p,{children:"Hay cinco puntos de interrupci\xf3n de forma predeterminada, inspirados en resoluciones de dispositivos comunes:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"pquiebre",src:s(971).Z+"",width:"756",height:"252"}),"\r\nTailwind genera un max-*modificador correspondiente para cada punto de interrupci\xf3n, por lo que est\xe1n disponibles los siguientes modificadores:\r\n",(0,i.jsx)(n.img,{alt:"pquiebre",src:s(8810).Z+"",width:"785",height:"241"})]}),"\n",(0,i.jsx)(n.h2,{id:"personalizando-tu-tema",children:"Personalizando tu tema"}),"\n",(0,i.jsx)(n.p,{children:"Si desea cambiar cosas como su paleta de colores, escala de espaciado, escala de tipograf\xeda o puntos de interrupci\xf3n, agregue sus personalizaciones a la themesecci\xf3n de su tailwind.config.jsarchivo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JS",children:"/** @type {import('tailwindcss').Config} */\r\nmodule.exports = {\r\n  theme: {\r\n    screens: {\r\n      sm: '480px',\r\n      md: '768px',\r\n      lg: '976px',\r\n      xl: '1440px',\r\n    },\r\n    colors: {\r\n      'blue': '#1fb6ff',\r\n      'pink': '#ff49db',\r\n      'orange': '#ff7849',\r\n      'green': '#13ce66',\r\n      'gray-dark': '#273444',\r\n      'gray': '#8492a6',\r\n      'gray-light': '#d3dce6',\r\n    },\r\n    fontFamily: {\r\n      sans: ['Graphik', 'sans-serif'],\r\n      serif: ['Merriweather', 'serif'],\r\n    },\r\n    extend: {\r\n      spacing: {\r\n        '128': '32rem',\r\n        '144': '36rem',\r\n      },\r\n      borderRadius: {\r\n        '4xl': '2rem',\r\n      }\r\n    }\r\n  }\r\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"funciones-y-directivas",children:"Funciones y directivas"}),"\n",(0,i.jsx)(n.p,{children:"Una referencia para las funciones y directivas personalizadas que Tailwind expone en su CSS."}),"\n",(0,i.jsx)(n.p,{children:"\u200b\r\nDirectivas\r\nLas directivas son reglas at personalizadas espec\xedficas de Tailwind que puede usar en su CSS y que ofrecen una funcionalidad especial para proyectos de Tailwind CSS."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-JS",children:"/**\r\n * This injects Tailwind's base styles and any base styles registered by\r\n * plugins.\r\n */\r\n@tailwind base;\r\n\r\n/**\r\n * This injects Tailwind's component classes and any component classes\r\n * registered by plugins.\r\n */\r\n@tailwind components;\r\n\r\n/**\r\n * This injects Tailwind's utility classes and any utility classes registered\r\n * by plugins.\r\n */\r\n@tailwind utilities;\r\n\r\n/**\r\n * Use this directive to control where Tailwind injects the hover, focus,\r\n * responsive, dark mode, and other variants of each class.\r\n *\r\n * If omitted, Tailwind will append these classes to the very end of\r\n * your stylesheet by default.\r\n */\r\n@tailwind variants;\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8810:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/max-95fbe09d6e8ae9da0a5ed8c8852c2bc0.png"},971:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/pquiebre-302137959524b770be9567e71180cf48.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>t});var i=s(7294);const r={},a=i.createContext(r);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);