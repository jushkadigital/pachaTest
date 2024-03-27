import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const gallery1 = ["https://res.cloudinary.com/denkdx0za/image/upload/v1711571559/asd_ibnvrr.jpg","https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1711570492/F2_ojyc6h.png","https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1711570493/F3_usy095.png"]

const containerGallery1 = document.getElementById('galleryClientesFelices')
gallery1.forEach(url=>{
  const temp = document.createElement('div') 
  const miniTemp = document.createElement('img')
  miniTemp.src = url
  miniTemp.className= "h-40 w-full max-w-full rounded-lg object-cover object-center"
  // temp. = `<img src="${url}" class="h-40 w-full max-w-full rounded-lg object-cover object-center" >`
    
  temp.appendChild(miniTemp)
  containerGallery1.appendChild(temp)

})
