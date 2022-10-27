/**
 test del curso de manipulacion del dom aplicando practicas del curso de ecmascript
 **/
import fetch from '../_snowpack/pkg/node-fetch.js'
const baseUrl = 'https://platzi-avo.vercel.app'
const nodeCtr = document.querySelector('#app')
//body  title and subtitle
const h1 = document.querySelector('h1')
      h1.classList = 'mb-2 text-5xl g-color font-bold'
const h3 = document.querySelector('h3')
      h3.classList = 'text-md p-color'
// intl API
const formatPrice = (price) => {
    const newPrice = new globalThis.Intl.NumberFormat('es-ES', {
        style: 'currency',
        currency: 'USD'
    }).format(price)
    return newPrice
}
// WEB API STEPS with top level await ecs 13
const allProducts = []
// avo API
const response = await fetch(`${baseUrl}/api/avo`)
const products = await response.json()

products.data.forEach(element => {
    const img = document.createElement('img')
          img.src = `${baseUrl}${element.image}`

    const title = document.createElement('span')
          title.textContent = element.name

    const price = document.createElement('span')
          price.textContent = formatPrice(element.price)
    
    const container = document.createElement('section')
          container.append(img, title, price)
    
    // styles
    nodeCtr.classList = 'mt-16 grid grid-cols-3 grid-rows-3 gap-4 py-4'
    container.classList = 'py-2 flex flex-col justify-center items-center content-evenly gap-1 rounded-lg shadow-md bg-white hover:bg-gray-200'
    img.classList = 'mb-2 img-prod br-50'
    title.classList = 'mt-2 text-2xl t-color'
    price.classList = 'text-xl p-color'
    
    allProducts.push(container)
    nodeCtr.append(...allProducts)
})

// ecs11 = globalThis / previous or popular = window.fetch

// WEB API STEPS with promises
// 1- connect to server
// globalThis.fetch(url)
// // 2- procesar la respuesta y pasarla a  json
// .then((response) => response.json())
// // json > data> renderizar info browser
// .then((data) => {
//     console.log(data);
// })