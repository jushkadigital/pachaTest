import "../style.css"
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const gallery1 = ["https://res.cloudinary.com/denkdx0za/image/upload/v1711571559/asd_ibnvrr.jpg", "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1711570492/F2_ojyc6h.png", "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1711570493/F3_usy095.png", "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1711570491/F5_btfshv.png", "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1711570705/F6_jtoz5l.png"]


const containerGallery1 = document.getElementById('galleryClientesFelices')
console.log(containerGallery1)
gallery1.forEach(url => {
  const temp = document.createElement('div')
  const miniTemp = document.createElement('img')
  miniTemp.src = url
  miniTemp.className = "h-56 lg:h-96 w-full max-w-full rounded-lg object-cover object-bottom"
  // temp. = `<img src="${url}" class="h-40 w-full max-w-full rounded-lg object-cover object-center" >`

  temp.appendChild(miniTemp)
  containerGallery1.appendChild(temp)

})



function isMobileDevice() {
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}


if (isMobileDevice()) {
  const mySlidersMejoresDestinos = [
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_3:4/v1711634667/MA_zdayhh.png", label: "Machu Picchu" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_3:4/v1711634680/V.CUSCO_ztzzwh.png", label: "Cusco" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_3:4/v1711634746/MONTA_gkylny.png", label: "Montaña 7 Colores" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_3:4/v1712065362/LIMA_furzqd.png", label: "Lima" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_3:4/v1711983465/CCACCACCOLLO_qyuywp.png", label: "Caccaccollo" },
  ]

  const divSwiperMejoresDestinos = document.getElementById('MejoresDestinos')

  mySlidersMejoresDestinos.forEach(ele => {
    const tempDiv = document.createElement('div')

    tempDiv.className = "swiper-slide relative ml-2"

    const tempImg = document.createElement("img")
    tempImg.src = ele.imgUrl
    tempImg.className = " w-[90%] h-full rounded-[25px] object-cover object-center"

    const label = document.createElement('p')
    label.className = "absolute bottom-5 left-2 text-white text-3xl font-bold"
    label.innerText = ele.label

    tempDiv.appendChild(tempImg)
    tempDiv.appendChild(label)

    const tempLabel = document.createElement('p')
    tempLabel.innerText = ele.label

    tempDiv.appendChild(tempLabel)
    divSwiperMejoresDestinos.appendChild(tempDiv)
  })
  const swiperMejoresDestinos = new Swiper('#swiper1', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  });


  const tripa = document.getElementById('itinerario')
  tripa.remove()

  // const tripa2 = document.getElementById('tripa')
  // tripa2.remove()


  const itinerario = [
    { title: "Llegada a Lima", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_360,h_203,ar_16:9/v1711645766/LLEGADA-LIMA_yyqeed.png", desc: "De acuerdo al horario de su vuelo estaremos pendiente a su llegada. En el aeropuerto de Lima nuestro agente lo esperará con un cartel con su nombre; este lo llevará con dirección a su alojamiento donde podrá descansar y prepararse para iniciar su aventura por Perú." },
    { title: "Icas Paracas Full Day", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_360,h_203,ar_16:9/v1711646387/HUACACHINS_cya0q5.png", desc: "Esta excursión iniciará con un viaje al Balneario de Paracas. Continuaremos nuestro viaje hacia Ica donde visitaremos la Bodega Nietto y finalmente nos dirigiremos a la Laguna de la Huacachina donde podremos realizar actividades como Sandboarding." },
    { title: "Vuelo a Cusco", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_360,h_203,ar_16:9/v1711634680/V.CUSCO_ztzzwh.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "Valle Conexión", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_360,h_203,ar_16:9/v1712067854/VALLE_prgwdc.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "Machu Picchu", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_360,h_203,ar_16:9/v1712067908/MACHU_mmv4xy.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "Montaña de 7 Colores", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_360,h_203,ar_16:9/v1712067921/MONTA%C3%91A_p5qbjx.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "Tour Vivencial Andino", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_360,h_203,ar_16:9/v1712067939/TOUR_VIVENCIAL_ANDINO_jjsc4m.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "Vuelo a Lima", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_360,h_203,ar_16:9/v1712067980/RETORNO-LIMA_mhfiq3.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
  ]


  const valueWithZero = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16']

  const divItinerario = document.getElementById('mobileItinerario')

  itinerario.forEach((ele, index) => {
    const tempDiv = document.createElement('div')
    tempDiv.className = "flex flex-col items-center gap-y-5"
    const tempImg = document.createElement('img')
    tempImg.src = ele.imgUrl
    tempImg.width = 350
    tempImg.height = 450
    tempImg.className = "rounded-lg "
    const tempHeaders = document.createElement('div')
    tempHeaders.className = "w-4/5 px-10 flex flex-row items-center justify-center"
    const title = document.createElement('p')
    title.className = "font-bold text-[#54595F] text-[20px] w-fit"
    const ball = document.createElement('div')
    ball.className = "shrink-0 grow-0 rounded-full border p-1 px-3  flex flex-col justify-center items-center text-center border-[#B65F00] border-2 mr-2 ml-5"
    ball.innerHTML = `<span class="font-extrabold leading-tight text-[13px] text-[#B65F00]">DÍA</span><span class="font-extrabold leading-tight text-[24px] text-[#B65F00]">${valueWithZero[index]}</span>`

    title.innerText = ele.title
    tempHeaders.appendChild(ball)
    tempHeaders.appendChild(title)

    const desc = document.createElement('p')
    desc.className = "font-semibold text-[#7C7B80] mx-10"
    desc.innerText = ele.desc

    tempDiv.appendChild(tempHeaders)
    tempDiv.appendChild(tempImg)
    tempDiv.appendChild(desc)

    divItinerario.appendChild(tempDiv)
  })


  const divSwiperTren = document.getElementById('Tren')
  const mySlidersTren = [
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1711814017/Group_1_a1qorm.png", label: "Cusco" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1711814017/Group_3_dbvffi.png", label: "Cusco" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1711814016/Group_2_nzdrnu.png", label: "Cusco" },

  ]

  mySlidersTren.forEach(ele => {
    const tempDiv = document.createElement('div')

    tempDiv.className = "swiper-slide relative ml-2"

    const tempImg = document.createElement("img")
    tempImg.src = ele.imgUrl
    tempImg.className = " w-[90%] h-full rounded-[25px] object-cover object-center"

    // const label = document.createElement('p')
    //   label.className = "absolute bottom-5 left-2 text-white text-3xl font-bold"
    //   label.innerText = ele.label

    tempDiv.appendChild(tempImg)
    // tempDiv.appendChild(label)

    // const tempLabel = document.createElement('p')
    // tempLabel.innerText = ele.label

    // tempDiv.appendChild(tempLabel)
    divSwiperTren.appendChild(tempDiv)
  })
  const swiperTren = new Swiper('#swiper2', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  });


  const divSwiperGuia = document.getElementById('Guia')
  const mySlidersGuia = [
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1711814017/Group_1_a1qorm.png", label: "Cusco" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1711814017/Group_3_dbvffi.png", label: "Cusco" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1711814016/Group_2_nzdrnu.png", label: "Cusco" },

  ]

  mySlidersGuia.forEach(ele => {
    const tempDiv = document.createElement('div')

    tempDiv.className = "swiper-slide relative ml-2"

    const tempImg = document.createElement("img")
    tempImg.src = ele.imgUrl
    tempImg.className = " w-[90%] h-full rounded-[25px] object-cover object-center"

    // const label = document.createElement('p')
    //   label.className = "absolute bottom-5 left-2 text-white text-3xl font-bold"
    //   label.innerText = ele.label

    tempDiv.appendChild(tempImg)
    // tempDiv.appendChild(label)

    // const tempLabel = document.createElement('p')
    // tempLabel.innerText = ele.label

    // tempDiv.appendChild(tempLabel)
    divSwiperGuia.appendChild(tempDiv)
  })
  const swiperGuia = new Swiper('#swiper3', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  });


  const divSwiperComida = document.getElementById('Comida')
  const mySlidersComida = [
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1711814017/Group_1_a1qorm.png", label: "Cusco" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1711814017/Group_3_dbvffi.png", label: "Cusco" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1711814016/Group_2_nzdrnu.png", label: "Cusco" },

  ]

  mySlidersComida.forEach(ele => {
    const tempDiv = document.createElement('div')

    tempDiv.className = "swiper-slide relative ml-2"

    const tempImg = document.createElement("img")
    tempImg.src = ele.imgUrl
    tempImg.className = " w-[90%] h-full rounded-[25px] object-cover object-center"

    // const label = document.createElement('p')
    //   label.className = "absolute bottom-5 left-2 text-white text-3xl font-bold"
    //   label.innerText = ele.label

    tempDiv.appendChild(tempImg)
    // tempDiv.appendChild(label)

    // const tempLabel = document.createElement('p')
    // tempLabel.innerText = ele.label

    // tempDiv.appendChild(tempLabel)
    divSwiperComida.appendChild(tempDiv)
  })
  const swiperComida = new Swiper('#swiper4', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  });


  const divSwiperFinal = document.getElementById('Final')
  const mySlidersFinal = [
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1711814017/Group_1_a1qorm.png", label: "Cusco" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1711814017/Group_3_dbvffi.png", label: "Cusco" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1711814016/Group_2_nzdrnu.png", label: "Cusco" },

  ]

  mySlidersFinal.forEach(ele => {
    const tempDiv = document.createElement('div')

    tempDiv.className = "swiper-slide relative ml-2"

    const tempImg = document.createElement("img")
    tempImg.src = ele.imgUrl
    tempImg.className = " w-[90%] h-full  rounded-[25px] object-cover object-center"

    // const label = document.createElement('p')
    //   label.className = "absolute bottom-5 left-2 text-white text-3xl font-bold"
    //   label.innerText = ele.label

    tempDiv.appendChild(tempImg)
    // tempDiv.appendChild(label)

    // const tempLabel = document.createElement('p')
    // tempLabel.innerText = ele.label

    // tempDiv.appendChild(tempLabel)
    divSwiperFinal.appendChild(tempDiv)
  })
  const swiperFinal = new Swiper('#swiper5', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  });


} else {


  const swiper1 = document.getElementById('swiper1')
  swiper1.remove()

  const swiper2 = document.getElementById('swiper2')
  swiper2.remove()

  const swiper3 = document.getElementById('swiper3')
  swiper3.remove()

  const swiper4 = document.getElementById('swiper4')
  swiper4.remove()

  const swiper5 = document.getElementById('swiper5')
  swiper5.remove()

// const gallery1 = ["https://res.cloudinary.com/denkdx0za/image/upload/v1711571559/asd_ibnvrr.jpg", "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1711570492/F2_ojyc6h.png", "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1711570493/F3_usy095.png", "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1711570491/F5_btfshv.png", "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1711570705/F6_jtoz5l.png"]


// const containerGallery1 = document.getElementById('galleryClientesFelices')
// console.log(containerGallery1)
// gallery1.forEach(url => {
//   const temp = document.createElement('div')
//   const miniTemp = document.createElement('img')
//   miniTemp.src = url
//   miniTemp.className = "h-96 w-full max-w-full rounded-lg object-cover object-bottom"
//   // temp. = `<img src="${url}" class="h-40 w-full max-w-full rounded-lg object-cover object-center" >`

//   temp.appendChild(miniTemp)
//   containerGallery1.appendChild(temp)

// })




  const GalleryMejoresDestinos = [
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_3:4/v1711634680/V.CUSCO_ztzzwh.png", label: "Cusco" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_3:4/v1711634667/MA_zdayhh.png", label: "Machu Picchu" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1711634746/MONTA_gkylny.png", label: "Montaña 7 Colores" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1712065362/LIMA_furzqd.png", label: "Lima" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1711983465/CCACCACCOLLO_qyuywp.png", label: "Caccaccollo" },
  ]

  const MejoresDestinos = document.getElementById('galleryMejoresDestinos')

  GalleryMejoresDestinos.forEach(ele => {
    const temp = document.createElement('div')
    temp.className = "relative brightness-75"
    const miniTemp = document.createElement('img')
    miniTemp.src = ele.imgUrl
    miniTemp.className = "h-96 w-full max-w-full rounded-lg object-cover object-center"
    const label = document.createElement('p')
    label.className = "absolute bottom-5 left-2 text-white text-3xl font-bold"
    label.innerText = ele.label

    // temp. = `<img src="${url}" class="h-40 w-full max-w-full rounded-lg object-cover object-center" >`

    temp.appendChild(miniTemp)
    temp.appendChild(label)
    MejoresDestinos.appendChild(temp)
  })

  const itinerario = [
    { title: "Llegada a Lima", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1711645766/LLEGA_LIM_Mesa_de_trabajo_1_bttsbn.png", desc: "De acuerdo al horario de su vuelo estaremos pendiente a su llegada. En el aeropuerto de Lima nuestro agente lo esperará con un cartel con su nombre; este lo llevará con dirección a su alojamiento donde podrá descansar y prepararse para iniciar su aventura por Perú." },
    { title: "Icas Paracas Full Day", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1711646398/HUANCAC_Mesa_de_trabajo_1_r9m0dp.png", desc: "Esta excursión iniciará con un viaje al Balneario de Paracas. Continuaremos nuestro viaje hacia Ica donde visitaremos la Bodega Nietto y finalmente nos dirigiremos a la Laguna de la Huacachina donde podremos realizar actividades como Sandboarding." },
    { title: "Vuelo a Cusco", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1712065865/vuelo_cusco_Mesa_de_trabajo_1_qy3im1.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "Valle Conexión", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1712066099/valle_conexi%C3%B3n_Mesa_de_trabajo_1_myqvpe.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "Machu Picchu", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1712066103/machu_picchu_Mesa_de_trabajo_1_a7blvp.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "Montaña de 7 Colores", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1712066108/monta%C3%B1a_7_colores_Mesa_de_trabajo_1_yjo3yj.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "Tour Vivencial Andino", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1712066333/tour_ccaccacollo_Mesa_de_trabajo_1_oqt9be.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "Vuelo a Lima", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1712066453/vuelo_a_lima_Mesa_de_trabajo_1_afiqz0.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
  ]

  const divItinerario = document.getElementById('itinerario')
  const ballNumbers = document.getElementById('ballNumbers')
  itinerario.forEach((ele, index) => {
    const tempDiv = document.createElement('div')
    tempDiv.className = "flex flex-row w-full mb-8 ml-3"

    const tempImg = document.createElement('img')
    tempImg.src = ele.imgUrl
    tempImg.width = 350
    tempImg.height = 450
    const tempWords = document.createElement('div')
    tempWords.className = "w-1/2 px-10 mt-3"
    const title = document.createElement('p')
    title.className = "font-bold text-[#54595F] text-3xl mb-2"
    const desc = document.createElement('p')
    desc.className = " text-xl text-[#6B7280]"
    title.innerText = ele.title
    desc.innerText = ele.desc
    tempWords.appendChild(title)
    tempWords.appendChild(desc)
    if (index % 2 == 0) {
      const wrapper = document.createElement('div')
      wrapper.className = "w-1/2 flex justify-center"
      wrapper.appendChild(tempImg)
      tempDiv.appendChild(wrapper)
      tempDiv.appendChild(tempWords)
    } else {
      const wrapper = document.createElement('div')
      wrapper.className = "w-1/2 flex justify-center"
      wrapper.appendChild(tempImg)
      tempDiv.appendChild(tempWords)
      tempDiv.appendChild(wrapper)
    }

    const ball = document.createElement('div')
    if (index == 0) {

      ball.className = "w-11 h-11 shrink-0 grow-0 rounded-full bg-[#B65F00] flex items-center justify-center text-white z-10 mt-[100px] font-bold text-xl"
    } else {
      ball.className = "w-11 h-11 shrink-0 grow-0 rounded-full bg-[#B65F00] flex items-center justify-center text-white z-10 font-bold text-xl"
    }
    ball.innerText = `${index + 1}`
    divItinerario.appendChild(tempDiv)
    ballNumbers.appendChild(ball)
  })


  const galleryHoteles = ["https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1712068719/H4_g7zyxv.png", "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1712068716/H5_g1xiky.png", "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1712068713/H6_tmpgui.png", "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1712068708/H3_awywpb.png", "https://res.cloudinary.com/denkdx0za/image/upload/v1712068597/H2_xfp2hv.png", "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1712068568/H1_st9adb.png"]

  const containerGalleryHoteles = document.getElementById('galleryHoteles')
  galleryHoteles.forEach(url => {
    const temp = document.createElement('div')
    const miniTemp = document.createElement('img')
    miniTemp.src = url
    miniTemp.className = "h-72 w-full max-w-full rounded-lg object-cover object-center"
    // temp. = `<img src="${url}" class="h-40 w-full max-w-full rounded-lg object-cover object-center" >`
    temp.appendChild(miniTemp)
    containerGalleryHoteles.appendChild(temp)
  })


  const galleryTren = ["", "", ""]

  const containerGalleryTren = document.getElementById('galleryTren')
  galleryTren.forEach(url => {
    const temp = document.createElement('div')
    const miniTemp = document.createElement('img')
    miniTemp.src = url
    miniTemp.className = "h-56 w-full max-w-full rounded-lg object-cover object-center"
    // temp. = `<img src="${url}" class="h-40 w-full max-w-full rounded-lg object-cover object-center" >`
    temp.appendChild(miniTemp)
    containerGalleryTren.appendChild(temp)
  })

  const galleryGuia = ["https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1711815955/G1_ug0oar.png", "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1711815961/G3_jyij4r.png", "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1711815955/G2_llopch.png"]

  const containerGalleryGuia = document.getElementById('galleryGuia')
  galleryGuia.forEach(url => {
    const temp = document.createElement('div')
    const miniTemp = document.createElement('img')
    miniTemp.src = url
    miniTemp.className = "h-72 w-full max-w-full rounded-lg object-cover object-center"
    // temp. = `<img src="${url}" class="h-40 w-full max-w-full rounded-lg object-cover object-center" >`
    temp.appendChild(miniTemp)
    containerGalleryGuia.appendChild(temp)
  })

  const galleryComida = ["https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1712068735/P3_mqgfjq.png", "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1712068734/P2_qnzuiy.png", "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_1:1/v1712068728/P1_xz8wvc.png"]

  const containerGalleryComida = document.getElementById('galleryComida')
  galleryComida.forEach(url => {
    const temp = document.createElement('div')
    const miniTemp = document.createElement('img')
    miniTemp.src = url
    miniTemp.className = "h-72 w-full max-w-full rounded-lg object-cover object-center"
    // temp. = `<img src="${url}" class="h-40 w-full max-w-full rounded-lg object-cover object-center" >`
    temp.appendChild(miniTemp)
    containerGalleryComida.appendChild(temp)
  })

  const galleryFinal = ["https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_600,h_450,ar_4:3/v1712072072/CENASHOW_jolhhf.png", "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_600,h_450,ar_4:3/v1712072055/WALKING_e9ffn7.png", "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_600,h_450,ar_4:3/v1712072047/PLANTA_x0iwxz.png","https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_600,h_450,ar_4:3/v1712072062/PICNIC_sqzjvs.png"]

  const containerGalleryFinal = document.getElementById('galleryFinal')
  galleryFinal.forEach(url => {
    const temp = document.createElement('div')
    const miniTemp = document.createElement('img')
    miniTemp.src = url
    miniTemp.className = "h-96 w-full max-w-full rounded-lg object-cover object-center"
    // temp. = `<img src="${url}" class="h-40 w-full max-w-full rounded-lg object-cover object-center" >`
    temp.appendChild(miniTemp)
    containerGalleryFinal.appendChild(temp)
  })

}




const ansQues = [
  { q: "aoeeoa", a: "aoeaeo" },

]

const faq = document.querySelector(".faq-container")


ansQues.forEach((ele) => {
  const dd = document.createElement('div')
  dd.className = "faq"
  dd.innerHTML = `<h3 class="faq-title">
                        ${ele.q}
            </h3>
            <p class="faq-text">
                        ${ele.a}
            </p>
            <button class="faq-toggle">
              <i class="fas fa-chevron-down"></i>
              <i class="fas fa-times"></i>
            </button>
`
  faq.appendChild(dd)
})

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

