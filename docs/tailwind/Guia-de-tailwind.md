# GUIA DE TAILWIND

Tailwind CSS funciona escaneando todos sus archivos HTML, componentes JavaScript y cualquier otra plantilla en busca de nombres de clases, generando los estilos correspondientes y luego escribiéndolos en un archivo CSS estático.

esto revisar
Stroke es el trazo  
fill era relleno
rafce
## Instalación
[https://tailwindcss.com/docs/installation#using-tailwind-via-cdn](https://tailwindcss.com/docs/installation#using-tailwind-via-cdn)
```html
<link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
```
##### Desventajas de este método

* No puedes personalizar el tema predeterminado de Tailwind.
* No se puede utilizar cualquier directivas como @apply, @variants, etc.
* No puede habilitar funciones como group-hover
* No puedes instalar complementos de terceros
* Para aprovechar al máximo Tailwind, realmente debería instalarlo a través de npm


## `Instalar VSCODE`
[https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

##### Installation prettier-plugin-tailwindcss
```js
npm install -D prettier prettier-plugin-tailwindcss
```
##### GITHUB
- [https://github.com/tailwindlabs/tailwindcss-intellisense](https://github.com/tailwindlabs/tailwindcss-intellisense
)
- [https://github.com/tailwindlabs/prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- [https://github.com/postcss/autoprefixer](https://github.com/postcss/autoprefixer)

## `Puntos de quiebre`
``` css
/* Small (sm) */
@media (min-width: 640px) { /* ... */ }

/* Medium (md) */
@media (min-width: 768px) { /* ... */ }

/* Large (lg) */
@media (min-width: 1024px) { /* ... */ }

/* Extra Large (xl) */
@media (min-width: 1280px) { /* ... */ }
```
## `Herencia`
En el siguiente ejemplo: Si no configuramos un color se hereda el del menor tamaño, por ejemplo si no configuramos sm se hereda el color del tamaño más pequeño configurado (text-blue-500), así si no configuramos xl se configurará con el color del md (md:text-red-500)

```css
<div class="mx-10 mt-5">
    <h1 class="text-blue-500 md:text-red-500">Título</h1>
</div>
```

## `Preflight`
[https://tailwindcss.com/docs/preflight](https://tailwindcss.com/docs/preflight)

Construido sobre normalize.css, Preflight es un conjunto de estilos base para proyectos de Tailwind que están diseñados para suavizar las inconsistencias entre navegadores y facilitarle el trabajo dentro de las limitaciones de su sistema de diseño.

* Preflight elimina todos los márgenes predeterminados de elementos como encabezados, comillas, párrafos, etc.
* Todos los elementos de encabezado están completamente sin estilo por defecto y tienen el mismo tamaño de fuente y peso de fuente que el texto normal.
* Las listas ordenadas y no ordenadas están sin estilo por defecto, sin viñetas / números y sin margen o relleno.
* Imágenes y otros elementos sustituidos (como svg, video, canvas, y otros) son display: block de forma predeterminada.
* Si alguna vez necesita hacer uno de estos elementos en inline lugar de block, simplemente use la inline.

```css
<h1>Esto es un H1</h1>
<h2>Esto es un H2</h2>
<h3>Esto es un H3</h3>
<h4>Esto es un H4</h4>
<h5>Esto es un H5</h5>
<h6>Esto es un H6</h6>
```
<!-- <img :src="$withBase('/img/container-1.png')"> -->
Para centrar un contenedor utilizamos mx-auto
```
<div class="container mx-auto">
  <!-- ... -->
</div>
```

## `Padding & Margin`

[https://tailwindcss.com/docs/padding](https://tailwindcss.com/docs/padding)

[https://tailwindcss.com/docs/margin](https://tailwindcss.com/docs/margin)

```css
<div class="mt-5 border mx-5 p-10">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, minima cupiditate iusto nobis dolores
        distinctio exercitationem, incidunt animi magni illum est. Eaque excepturi sapiente libero quisquam aliquid?
        Vel, accusantium repudiandae?
    </p>
</div>
```
## `Fuentes`
[https://tailwindcss.com/docs/font-size](https://tailwindcss.com/docs/font-size)

```html
<h1 class="text-6xl">Esto es un H1</h1>
<h2 class="text-5xl">Esto es un H2</h2>
<h3 class="text-4xl">Esto es un H3</h3>
<h4 class="text-3xl">Esto es un H4</h4>
<h5 class="text-2xl">Esto es un H5</h5>
<h6 class="text-xl">Esto es un H6</h6>
```
[https://tailwindcss.com/docs/text-color](https://tailwindcss.com/docs/text-color)

```html
<h1 class="text-6xl text-orange-400">Esto es un H1</h1>
<h2 class="text-5xl text-green-500">Esto es un H2</h2>
<h3 class="text-4xl text-blue-700">Esto es un H3</h3>
<h4 class="text-3xl text-purple-500">Esto es un H4</h4>
<h5 class="text-2xl text-pink-500">Esto es un H5</h5>
<h6 class="text-xl text-red-700">Esto es un H6</h6>
```
[https://tailwindcss.com/docs/text-align](https://tailwindcss.com/docs/text-align)

```html
<h1 class="text-center text-6xl text-orange-400">Esto es un H1</h1>
<h2 class="text-right text-5xl text-green-500">Esto es un H2</h2>

<div class="mt-5 border mx-5 p-10">
    <p class="text-right">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, minima cupiditate iusto nobis dolores
        distinctio exercitationem, incidunt animi magni illum est. Eaque excepturi sapiente libero quisquam aliquid?
        Vel, accusantium repudiandae?
    </p>
</div>
```
[https://tailwindcss.com/docs/text-transform](https://tailwindcss.com/docs/text-transform)
```html
<h3 class="text-4xl text-blue-700 uppercase">Esto es un H3</h3>
<h4 class="text-3xl text-purple-500 lowercase">Esto es un H4</h4>
<h5 class="text-2xl text-pink-500 capitalize">Esto es un H5</h5>
<h6 class="text-xl text-red-700 normal-case">Esto es un H6</h6>
```
## Background Color
[https://tailwindcss.com/docs/background-color]
(https://tailwindcss.com/docs/background-color)
```html
<h1 class="bg-red-900 text-6xl text-white text-center">Esto es un H1</h1>
```
## `Border Radius`
[https://tailwindcss.com/docs/border-radius]
(https://tailwindcss.com/docs/border-radius)
```html
<h1 class="rounded-lg text-6xl text-white text-center bg-red-900 mx-5">Esto es un H1</h1>
```
## `Width`
[https://tailwindcss.com/docs/width](https://tailwindcss.com/docs/width)
```html
<h1 class="w-3/5 text-6xl text-white text-center bg-red-900 rounded-lg mx-5">Esto es un H1</h1>
```
## `Box Shadow`
[https://tailwindcss.com/docs/box-shadow](https://tailwindcss.com/docs/box-shadow)

```html
<h1 class="shadow text-6xl text-center mx-5 w-3/5">Esto es un H1</h1>
```
## `Práctica`
[https://tailwindcss.com/components/cards](https://tailwindcss.com/components/cards)


Personalización 
===============

[https://tailwindcss.com/docs/installation/](https://tailwindcss.com/docs/installation/)

## Intalación
* Tener instalado node.js [ https://nodejs.org/es/]( https://nodejs.org/es/)

Crear package.json

```
npm init -y
```
## npm tailwind
```
npm i tailwindcss
```
## Archivos
Crear un directorio src/estilos.css y en su interior:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## Compilar

```css
npx tailwindcss build src/estilos.css -o public/output.css
```
Crear arhivo public/index.html y llamar a los estilos:
```html
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="output.css">
</head>

<body>
    <h1 class="mt-20">Hola Tailwind</h1>
</body>

</html>
```
## Personalizar
[https://tailwindcss.com/docs/configuration](https://tailwindcss.com/docs/configuration)
[https://tailwindcss.com/docs/configuration#scaffolding-the-entire-default-configuration](https://tailwindcss.com/docs/configuration#scaffolding-the-entire-default-configuration)

```
npx tailwindcss init --full
```
```
npx tailwindcss init
```
```
module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```
## Extensión VSC

[https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

> Funciona si existe el archivo tailwind.config.js

### Ejemplos:

```
module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        danger: '#ff5f40',
        info: {
          900: '#234e52',
          800: '#285e61',
        }
      },
    },
    fontFamily: {
      rale: ['Raleway'],
    },
  },
  variants: {},
  plugins: [],
}
```
```css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;
```

```css
<body>
    <h1 class="bg-danger text-xl font-rale font-hairline">Hola Tailwind</h1>
    <h2 class="bg-info-900 text-white">Hola dos mundo</h2>
</body>
```
No olvide compilar su código:
```
npx tailwindcss build src/estilos.css -o public/output.css
```
## Extracting classes using @apply

``` css
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Estamos ocupando una fuente personalizada "Rale" */
.btn {
    @apply font-rale py-2 px-4 rounded;
}

.btn-blue {
    @apply bg-blue-500 text-white;
}

.btn-blue:hover {
    @apply bg-blue-700;
}
```

```css
<!-- Extracting classes using @apply -->
<button class="btn btn-blue">
    Button
</button>
```
No olvide compilar su código:
```
npx tailwindcss build src/estilos.css -o public/output.css
```

## Components
[https://tailwindcss.com/components](https://tailwindcss.com/components)

## Navigation (Navbar)
[https://tailwindcss.com/components/navigation](https://tailwindcss.com/components/navigation)

```html
<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
  </div>
  <div class="block lg:hidden">
    <button id='boton' class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div id='menu' class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Docs
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Examples
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Blog
      </a>
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
  </div>
</nav>
```

```html
const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');

boton.addEventListener('click', () => {
    console.log('click')
    menu.classList.toggle('hidden')
})
```

## React + Tailwind
[https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/](https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/)

## App

```css
npx create-react-app appTailwind
```

## Instalaciones
[https://tailwindcss.com/docs/installation/#3-create-your-tailwind-config-file-optional](https://tailwindcss.com/docs/installation/#3-create-your-tailwind-config-file-optional)

```css
npm install tailwindcss postcss-cli autoprefixer -D
npx tailwindcss init
```
## postCSS
[https://tailwindcss.com/docs/installation/#using-tailwind-with-postcss](https://tailwindcss.com/docs/installation/#using-tailwind-with-postcss)

```css
postcss.config.js
```

```css
module.exports = {
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    // ...
  ]
}
```

> Tailwind.css
Crear un directorio src/assets/tailwind.css y en su interior:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.btn {
    @apply py-2 px-4 rounded;
}

.btn-blue {
    @apply bg-blue-500 text-white;
}

.btn-blue:hover {
    @apply bg-blue-700;
}

.card {
    @apply rounded overflow-hidden shadow-lg;
}
```
## Package.json

```js
"scripts": {
    "start": "npm run watch:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:css": "postcss src/assets/tailwind.css -o src/assets/main.css",
    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
  },
```

## index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
## App.jsx
```js
import React from 'react'
import Card from './components/Card'


const App = () => {

    return (
        <div className='container mx-auto'>
            <h1>Tailwind CSS</h1>
            <h2>Incorporado con PostCss</h2>
            <button className="btn btn-blue btn-blue:hover">Botón</button>
            <div className="my-5 flex flex-wrap -mx-2">
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
                    <Card photo='https://picsum.photos/800/600' />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
                    <Card photo='https://picsum.photos/800/600' />
                </div>
                <div className="w-full sm:w-1/2 lg:w-1/3 px-2 my-2">
                    <Card photo='https://picsum.photos/800/600' />
                </div>
            </div>
        </div>
    )
}

export default App
```

## Card
[https://tailwindcss.com/components/cards](https://tailwindcss.com/components/cards)

```
import React from 'react'

const Card = ({photo}) => {
    return (
        <div className='card'>
            <img src={photo} alt="" className='w-full' />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
        </div>
    )
}

export default Card
```
## Animaciones

Instalación a través de npm

```
npm init -y
npm i tailwindcss
```

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```
npx tailwindcss init
```

```
npx tailwindcss build src/estilos.css -o public/output.css
```

## Fuentes
[https://fonts.google.com/](https://fonts.google.com/)
```html
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;500;700&display=swap" rel="stylesheet">
```

```js
module.exports = {
  purge: [],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Raleway', 'Arial', 'sans-serif'],
    }
  },
  variants: {
  },
  plugins: [],
}
```

## Animación
[https://tailwindcss.com/docs/transition-timing-function/](https://tailwindcss.com/docs/transition-timing-function/)
```js
<a 
    href="#"
    class="
    inline-block text-sm px-4 py-2 leading-none 
    border rounded text-white border-white
    hover:border-transparent hover:text-teal-500 
    hover:bg-white mt-4 lg:mt-0 
    transition ease-in-outduration-500
    ">
        Download
</a>
```

## Border hover
[https://tailwindcss.com/docs/border-width#responsive-and-pseudo-class-variants](https://tailwindcss.com/docs/border-width#responsive-and-pseudo-class-variants)

```js
module.exports = {
  purge: [],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Raleway', 'Arial', 'sans-serif'],
    }
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
```
```
<div class="text-sm lg:flex-grow">
    <a href="#responsive-header"
        class="
        block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 
        border-b-2 border-teal-500 hover:border-b-2 hover:border-gray-600 
        transition ease-in-out duration-500
        ">
        Docs
    </a>
    <a href="#responsive-header"
        class="
        block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 
        border-b-2 border-teal-500 hover:border-b-2 hover:border-gray-600 
        transition ease-in-out duration-500
        ">
        Examples
    </a>
    <a href="#responsive-header"
        class="
        block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 
        border-b-2 border-teal-500 hover:border-b-2 hover:border-gray-600 
        transition ease-in-out duration-500
        ">
        Blog
    </a>
</div>
```