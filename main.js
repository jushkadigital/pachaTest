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
  miniTemp.className= "h-72 w-full max-w-full rounded-lg object-cover object-center"
  // temp. = `<img src="${url}" class="h-40 w-full max-w-full rounded-lg object-cover object-center" >`
    
  temp.appendChild(miniTemp)
  containerGallery1.appendChild(temp)

})


// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}


if(isMobileDevice()){
const mySlidersMejoresDestinos = [
  {imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_3:4/v1711634667/MA_zdayhh.png",label:"Cusco"},
  {imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_3:4/v1711634680/V.CUSCO_ztzzwh.png",label:"Cusco"},
]

const divSwiperMejoresDestinos = document.getElementById('MejoresDestinos')

mySlidersMejoresDestinos.forEach(ele=>{
  const tempDiv = document.createElement('div')
  
  tempDiv.className = "swiper-slide"

  const tempImg = document.createElement("img")
  tempImg.src= ele.imgUrl
  tempImg.className = "w-full h-full"

  tempDiv.appendChild(tempImg)

  const tempLabel = document.createElement('p')
  tempLabel.innerText = ele.label
  
  tempDiv.appendChild(tempLabel)
  divSwiperMejoresDestinos.appendChild(tempDiv)
})
const swiperMejoresDestinos = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
 direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


}else{
  
const swiper1 = document.getElementById('swiper1')
  swiper1.remove()
 const GalleryMejoresDestinos = [
  {imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_3:4/v1711634667/MA_zdayhh.png",label:"Cusco"},
  {imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_3:4/v1711634680/V.CUSCO_ztzzwh.png",label:"Cusco"},
] 

const MejoresDestinos = document.getElementById('galleryMejoresDestinos')

GalleryMejoresDestinos.forEach(ele=>{
  const temp = document.createElement('div') 
  const miniTemp = document.createElement('img')
  miniTemp.src = ele.imgUrl
  miniTemp.className= "h-64 w-full max-w-full rounded-lg object-cover object-center"
  // temp. = `<img src="${url}" class="h-40 w-full max-w-full rounded-lg object-cover object-center" >`
    
  temp.appendChild(miniTemp)
  MejoresDestinos.appendChild(temp)
})

}






