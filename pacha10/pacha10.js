import "../style.css"
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const itinerarioInfo = [
  {
    title: "Llegada a Lima",
    desc: "De acuerdo al horario de su vuelo estaremos pendiente a su llegada. En el aeropuerto de Lima nuestro agente lo esperará con un cartel con su nombre; este lo llevará con dirección a su alojamiento donde podrá descansar y prepararse para iniciar su aventura por Perú."
  },
  {
    title: "City Tour Lima",
    desc: "La primera excursión que realizaremos es el City Tour en Lima, esta excursión presenta sus tres periodos históricos de Lima: prehispánico, colonial y moderno. Esta excursión asi como las siguientes irá acompañado por un guía que estará siempre respondiendo sus preguntas."
  },
  {
    title: "Ica Paracas Full Day",
    desc: "Esta excursión iniciará con un viaje al Balneario de Paracas. Continuaremos nuestro viaje hacia Ica donde visitaremos la Bodega Nietto y ﬁnalmente nos dirigiremos a la Laguna de la Huacachina donde podremos realizar actividades como Sandboarding."
  },
  {
    title: "Vuelo a Cusco",
    desc: "De acuerdo al horario de vuelo nuestra movilidad pasara por su alojamiento y le llevara con dirección al Aeropuerto para el vuelo hacia la ciudad del Cusco. A la salida del Aeropuerto de Cusco un agente nuestro lo esperara con un cartel para trasladarlo a su alojamiento."
  },
  {
    title: "Maras – Moray con Cuatrimotos",
    desc: "Esta aventura inicia trasladándonos al poblado de Cruzpata donde tendremos una practica de manejo, luego continuaremos el recorrido hacia las terrazas experimentales de Moray y conoceremos las minas de sal de Maras."
  },
  {
    title: "Valle Conexión",
    desc: "Iniciaremos esta excursion con una vista del Valle Sagrado en el Mirador de Taray. Luego nos dirigiremos a Pisac donde visitaremos el complejo arqueológico. Posteriormente tomaremos rumbo a Urubamba donde tendremos el almuerzo Buffet y terminaremos en Ollantaytambo."
  },
  {
    title: "Machu Picchu",
    desc: "Nuestro guía le esperara a la hora y en el lugar de encuentro para dirigirnos a la estación de buses y ser transportados hacia la Llaqta de Machu Picchu. En Machu Picchu el recorrido será con nuestro guía profesional y tendrá tiempo suﬁciente para tomarse las mejores fotos."
  },
  {
    title: "Montaña de Colores",
    desc: "Esta excursión inicia a las 04:00 de la mañana dirigiéndonos al distrito de Cusipata donde tendremos nuestro desayuno, luego nos dirigiremos a la localidad de Chillihuani donde iniciara nuestra caminata hacia la Montaña de Colores."
  },
  {
    title: "Tour Vivencial Andino",
    desc: "Esta experiencia se realiza en Ccaccaccollo donde realizaremos actividades como observar el Proceso de la Fibra de Camélidos, la caminata al Circuito de Miradores, ser participes de una Danza Típica y Ceremonia Andina y participar del trabajo cotidiano de los pobladores."
  },
{
    title: "Retorno",
    desc: "Esta excursión inicia a las 04:00 de la mañana dirigiéndonos al distrito de Cusipata donde tendremos nuestro desayuno, luego nos dirigiremos a la localidad de Chillihuani donde iniciara nuestra caminata hacia la Montaña de Colores."
  }
]



console.log(itinerarioInfo)

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
    tempImg.loading = "lazy"
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



  const itinerarioGA = [
    { title: "Llegada a Lima", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_360,h_203,ar_16:9/v1711645766/LLEGADA-LIMA_yyqeed.png", desc: "De acuerdo al horario de su vuelo estaremos pendiente a su llegada. En el aeropuerto de Lima nuestro agente lo esperará con un cartel con su nombre; este lo llevará con dirección a su alojamiento donde podrá descansar y prepararse para iniciar su aventura por Perú." },
    { title: "CityTour", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_360,h_203,ar_16:9/v1712329297/cityTourMobileIti_khuehs.png", desc: "Esta excursión iniciará con un viaje al Balneario de Paracas. Continuaremos nuestro viaje hacia Ica donde visitaremos la Bodega Nietto y finalmente nos dirigiremos a la Laguna de la Huacachina donde podremos realizar actividades como Sandboarding." },
    { title: "Icas paracas", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_360,h_203,ar_16:9/v1711646387/HUACACHINS_cya0q5.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "vuelo Cusco", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_360,h_203,ar_16:9/v1712329158/cuscoMobilIti_vxcsuc.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "Maras – Moray con Cuatrimoto", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_360,h_203,ar_16:9/v1712329158/marasMobilTiti_z7hzb7.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "Valle Conexión", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_360,h_203,ar_16:9/v1712329480/VALLE_rtmor2.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "machu ueou", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_360,h_203,ar_16:9/v1712067908/MACHU_mmv4xy.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "Montaña de Colores", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_360,h_203,ar_16:9/v1712067921/MONTA%C3%91A_p5qbjx.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "Tour Vivencial An", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_360,h_203,ar_16:9/v1712067939/TOUR_VIVENCIAL_ANDINO_jjsc4m.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "Retorno", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_360,h_203,ar_16:9/v1712067980/RETORNO-LIMA_mhfiq3.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
  ]

  const itinerario =  itinerarioInfo.map((ele,idx)=>({
    ...ele,imgUrl:itinerarioGA[idx].imgUrl
  }))


  const valueWithZero = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16']

  const divItinerario = document.getElementById('mobileItinerario')

  itinerario.forEach((ele, index) => {
    const tempDiv = document.createElement('div')
    tempDiv.className = "flex flex-col items-center gap-y-5"
    const tempImg = document.createElement('img')
    tempImg.src = ele.imgUrl
    tempImg.loading = "lazy"
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

    tempDiv.className = "swiper-slide relative"

    const tempImg = document.createElement("img")
    tempImg.src = ele.imgUrl
    tempImg.loading = "lazy"
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
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_3:4/v1711815955/G2_llopch.png", label: "Cusco" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_3:4/v1711815961/G3_jyij4r.png", label: "Cusco" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_3:4/v1711815955/G1_ug0oar.png", label: "Cusco" },
  ]

  mySlidersGuia.forEach(ele => {
    const tempDiv = document.createElement('div')

    tempDiv.className = "swiper-slide relative"

    const tempImg = document.createElement("img")
    tempImg.src = ele.imgUrl
    tempImg.loading = "lazy"
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
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_3:4/v1712068735/P3_mqgfjq.png", label: "Cusco" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_3:4/v1712068734/P2_qnzuiy.png", label: "Cusco" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_3:4/v1712068728/P1_xz8wvc.png", label: "Cusco" },

  ]

  mySlidersComida.forEach(ele => {
    const tempDiv = document.createElement('div')

    tempDiv.className = "swiper-slide relative "

    const tempImg = document.createElement("img")
    tempImg.src = ele.imgUrl
    tempImg.loading = "lazy"
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
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_3:4/v1712072055/WALKING_e9ffn7.png", label: "Cusco" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_3:4/v1712072047/PLANTA_x0iwxz.png", label: "Cusco" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_crop,ar_3:4/v1712072062/PICNIC_sqzjvs.png", label: "Cusco" },

  ]

  mySlidersFinal.forEach(ele => {
    const tempDiv = document.createElement('div')

    tempDiv.className = "swiper-slide relative "

    const tempImg = document.createElement("img")
    tempImg.src = ele.imgUrl
    tempImg.loading = "lazy"
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


  const divSwiperAutori = document.getElementById('Autori')
  const mySlidersAutori = [
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_270,h_360,ar_3:4/v1712239545/certiOne1024x1024_lef8ld.png", label: "certificados por la direccion de comercio exterior y turismo" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_270,h_360,ar_3:4/v1712239545/certiTwo1024x1024_vroqgv.png", label: "certificados por el gobierno regional del cusco" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_270,h_360,ar_3:4/v1712239546/certiThree1024x1024_fixvnh.png", label: "licencia" },
  ]
  mySlidersAutori.forEach(ele => {
    const tempDiv = document.createElement('div')

    tempDiv.className = "swiper-slide relative "

    const tempImg = document.createElement("img")
    tempImg.src = ele.imgUrl
    tempImg.loading = "lazy"
    tempImg.className = " w-[90%] h-full  rounded-[25px] object-cover object-center"
    const label = document.createElement('p')
    label.className = "absolute bottom-0 left-2 text-white text-md font-bold uppercase px-2 bg-[#B65F00] w-full text-center h-14 text-align"
    label.innerText = ele.label


    // const label = document.createElement('p')
    //   label.className = "absolute bottom-5 left-2 text-white text-3xl font-bold"
    //   label.innerText = ele.label

    tempDiv.appendChild(tempImg)
    tempDiv.appendChild(label)
    // tempDiv.appendChild(label)

    // const tempLabel = document.createElement('p')
    // tempLabel.innerText = ele.label

    // tempDiv.appendChild(tempLabel)
    divSwiperAutori.appendChild(tempDiv)
  })
  const swiperAutori = new Swiper('#swiperAutori', {
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
    miniTemp.loading = "lazy"
    miniTemp.className = "h-96 w-full max-w-full rounded-lg object-cover object-center"
    const label = document.createElement('p')
    label.className = "absolute bottom-5 left-2 text-white text-3xl font-bold"
    label.innerText = ele.label

    // temp. = `<img src="${url}" class="h-40 w-full max-w-full rounded-lg object-cover object-center" >`

    temp.appendChild(miniTemp)
    temp.appendChild(label)
    MejoresDestinos.appendChild(temp)
  })

  const itinerarioGA = [
    { title: "Llegada a Lima", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1711645766/LLEGA_LIM_Mesa_de_trabajo_1_bttsbn.png", desc: "De acuerdo al horario de su vuelo estaremos pendiente a su llegada. En el aeropuerto de Lima nuestro agente lo esperará con un cartel con su nombre; este lo llevará con dirección a su alojamiento donde podrá descansar y prepararse para iniciar su aventura por Perú." },
    { title: "CityTour", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1712328138/CTIY-LIMA_Mesa-de-trabajo-1_j9kxfz.png", desc: "Esta excursión iniciará con un viaje al Balneario de Paracas. Continuaremos nuestro viaje hacia Ica donde visitaremos la Bodega Nietto y finalmente nos dirigiremos a la Laguna de la Huacachina donde podremos realizar actividades como Sandboarding." },
    { title: "Icas paracas", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1711646398/HUANCAC_Mesa_de_trabajo_1_r9m0dp.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "vuelo Cusco", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1712065865/vuelo_cusco_Mesa_de_trabajo_1_qy3im1.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "Maras – Moray con Cuatrimoto", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1712328138/cu_Mesa-de-trabajo-1-1_tqossg.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "Valle Conexión", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1712066099/valle_conexi%C3%B3n_Mesa_de_trabajo_1_myqvpe.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "machu ueou", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1712066103/machu_picchu_Mesa_de_trabajo_1_a7blvp.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "Montaña de Colores", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1712066108/monta%C3%B1a_7_colores_Mesa_de_trabajo_1_yjo3yj.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "Tour Vivencial An", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1712066333/tour_ccaccacollo_Mesa_de_trabajo_1_oqt9be.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
    { title: "Retorno", imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/v1712066453/vuelo_a_lima_Mesa_de_trabajo_1_afiqz0.png", desc: "De acuerdo al horario de vuelonuestra movilidad pasara por sualojamiento y le llevara con direcciónal Aeropuerto para el vuelo hacia laciudad del Cusco. A la salida delAeropuerto de Cusco un agentenuestro lo esperara con un cartelpara trasladarlo a su alojamiento." },
  ]

const itinerario =  itinerarioInfo.map((ele,idx)=>({
    ...ele,imgUrl:itinerarioGA[idx].imgUrl
  }))
  const divItinerario = document.getElementById('itinerario')
  const ballNumbers = document.getElementById('ballNumbers')
  itinerario.forEach((ele, index) => {
    const tempDiv = document.createElement('div')
    tempDiv.className = "flex flex-row w-full mb-8 ml-3"

    const tempImg = document.createElement('img')
    tempImg.src = ele.imgUrl
    tempImg.loading = "lazy"
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
    miniTemp.loading = "lazy"
    miniTemp.className = "h-72 w-full max-w-full rounded-lg object-cover object-center"
    // temp. = `<img src="${url}" class="h-40 w-full max-w-full rounded-lg object-cover object-center" >`
    temp.appendChild(miniTemp)
    containerGalleryHoteles.appendChild(temp)
  })


  const galleryTren = [
    "https://res.cloudinary.com/denkdx0za/image/upload/v1711814017/Group_1_a1qorm.png",
    "https://res.cloudinary.com/denkdx0za/image/upload/v1711814017/Group_3_dbvffi.png",
    "https://res.cloudinary.com/denkdx0za/image/upload/v1711814016/Group_2_nzdrnu.png",
  ]

  const containerGalleryTren = document.getElementById('galleryTren')
  galleryTren.forEach(url => {
    const temp = document.createElement('div')
    const miniTemp = document.createElement('img')
    miniTemp.src = url
    miniTemp.loading = "lazy"
    miniTemp.className = "h-72 w-full max-w-full rounded-lg object-cover object-center"
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
    miniTemp.loading = "lazy"
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
    miniTemp.loading = "lazy"
    miniTemp.src = url
    miniTemp.className = "h-72 w-full max-w-full rounded-lg object-cover object-center"
    // temp. = `<img src="${url}" class="h-40 w-full max-w-full rounded-lg object-cover object-center" >`
    temp.appendChild(miniTemp)
    containerGalleryComida.appendChild(temp)
  })


  const galleryAutori = [
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_600,h_600,ar_1:1/v1712239545/certiOne1024x1024_lef8ld.png", label: "certificados por la direccion de comercio exterior y turismo" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_600,h_600,ar_1:1/v1712239545/certiTwo1024x1024_vroqgv.png", label: "certificados por el gobierno regional del cusco" },
    { imgUrl: "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_600,h_600,ar_1:1/v1712239546/certiThree1024x1024_fixvnh.png", label: "licencia" },
  ]

  const containerGalleryAutori = document.getElementById('galleryAutori')
  galleryAutori.forEach(ele => {
    const temp = document.createElement('div')
    temp.className = "relative"
    const miniTemp = document.createElement('img')
    miniTemp.loading = "lazy"
    miniTemp.src = ele.imgUrl
    miniTemp.className = "h-96 w-full max-w-full rounded-lg object-cover object-center"

    const label = document.createElement('p')
    label.className = "absolute bottom-0 left-2 text-white text-md font-bold uppercase px-2 bg-[#B65F00] w-full text-center h-14 text-align"
    label.innerText = ele.label

    temp.appendChild(miniTemp)
    temp.appendChild(label)
    containerGalleryAutori.appendChild(temp)
  })


  const galleryFinal = ["https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_600,h_450,ar_4:3/v1712072072/CENASHOW_jolhhf.png", "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_600,h_450,ar_4:3/v1712072055/WALKING_e9ffn7.png", "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_600,h_450,ar_4:3/v1712072047/PLANTA_x0iwxz.png", "https://res.cloudinary.com/denkdx0za/image/upload/c_fill,w_600,h_450,ar_4:3/v1712072062/PICNIC_sqzjvs.png"]

  const containerGalleryFinal = document.getElementById('galleryFinal')
  galleryFinal.forEach(url => {
    const temp = document.createElement('div')
    const miniTemp = document.createElement('img')
    miniTemp.loading = "lazy"
    miniTemp.src = url
    miniTemp.className = "h-96 w-full max-w-full rounded-lg object-cover object-center"
    // temp. = `<img src="${url}" class="h-40 w-full max-w-full rounded-lg object-cover object-center" >`
    temp.appendChild(miniTemp)
    containerGalleryFinal.appendChild(temp)
  })

}




const ansQues = [
  {
    q: "¿Cuál es la mejor temporada para hacer una excursión en Cusco, Lima , Ica , Puerto Maldonado?",
    a: "CUSCO . La temporada seca es la mejor, va de mayo a octubre, es considerada la mejor para visitar Cusco y Machu Picchu. Puesto que hay menos probabilidades de lluvias, y los días suelen ser más soleados y agradables. Si quieres disfrutar de las fiestas tradicionales como la Fiesta del Sol o el Inti Raymi, te recomiendo ir entre junio y agosto.LIMA Lima tiene un clima subtropical y una temporada de verano que va de diciembre a abril. Durante estos meses, el clima es más cálido y seco, ideal para explorar la ciudad y sus alrededores. Sin embargo, ten en cuenta que Lima puede ser visitada durante todo el año.ICA.La región de Ica tiene un clima desértico con temperaturas elevadas. La mejor época para visitar Ica y sus atracciones como la Reserva Nacional de Paracas y el oasis de Huacachina es durante la temporada seca, de mayo a octubre.PUERO MALDONADO :La temporada seca, de abril a noviembre, es generalmente más recomendada para excursiones en la selva, ya que los niveles de agua son más bajos y las condiciones son más propicias para explorar la flora y fauna."
  },

  {
    q: "A que altura se encuentra la montaña de 7 colores y laguna de humantay y cuál es la temperatura",
    a: "Laguna Humantay: La Laguna Humantay está ubicada a una altitud aproximada de 4,200 metros sobre el nivel del mar (13,780 pies). Temperatura: La temperatura en la Laguna Humantay puede variar, pero generalmente, debido a su elevada altitud, las temperaturas pueden ser heladas. Durante el día, las temperaturas pueden oscilar entre 10°C y 15°C (50°F a 59°F), mientras que por la noche pueden descender significativamente. Montaña Vinicunca (Montaña de Siete Colores): La Montaña Vinicunca, también conocida como la Montaña de Siete Colores o Rainbow Mountain, se encuentra a una altitud elevada, alrededor de 5,200 metros sobre el nivel del mar (17,060 pies). Temperatura: La temperatura en la Montaña de Siete Colores puede ser bastante fría debido a su altitud. Durante el día, las temperaturas pueden rondar los 5°C a 10°C (41°F a 50°F) y pueden descender por debajo de cero durante la noche. Es importante llevar ropa abrigada debido a las bajas temperaturas y la exposición al viento."
  },
  {
    q: "Qué tipo de ropa debo llevar para mis excursiones en Cusco , Lima , Ica , Puerto Mladonado?",
    a: "Cusco : Viste capas ligeras , cómodas y abrigadoras . Incluye una camiseta de manga larga o corta, pantalones ligeros y un sombrero para protegerte del sol. Para las temporadas de lluvias en Cusco lleva ropa muy abrigadora y casacas o un suéter inpermiables . Lima:Lima tiene un clima templado. Usa ropa ligera, como camisetas, pantalones cortos o faldas, y un sombrero para protegerte del sol. Lleva protector solar. Ica (Huacachina y Paracas): Debido al clima desértico, lleva ropa fresca y protector solar. Un sombrero y gafas de sol son esenciales. Y para las noches puede ser una chaqueta o suéter ligero. Puerto Maldonado (Amazonía): Usa ropa ligera y cómoda debido al clima cálido y húmedo. Un sombrero y repelente de insectos son esenciales. Un impermeable también puede ser útil, ya que la región puede experimentar lluvias."
  },

  {
    q: "Que puedo hacer para prevenir el mal de altura",
    a: "Antes del viaje: Debes informarte sobre la altitud de los lugares que vas a visitar y planificar tu ruta de forma gradual y progresiva2. No subas más de 500 metros al día y descansa un día extra cada 1000 metros Durante el viaje: Bebe abundante agua y líquidos isotónicos para mantenerte hidratado y evitar la deshidratación4 Come alimentos variados y ricos en hidratos de carbono para tener energía y evitar el hambre Evita el alcohol, el tabaco y las comidas muy copiosas que pueden empeorar los síntomas"
  },
  {
    q: "Qué hacer si me afecto la altura del lugar",
    a: "Descender a una altitud más baja: Si los síntomas son graves o empeoran, desciende a una altitud más baja tan pronto como sea posible. Descanso y aclimatación: Tómate un tiempo para descansar y permitir que tu cuerpo se aclimate gradualmente a la altitud. Hidratación:Bebe mucha agua para combatir la deshidratación, pero evita el alcohol y la cafeína, ya que pueden contribuir a la deshidratación. Medicamentos: Considera el uso de medicamentos recetados por un médico, para aliviar los síntomas del mal de altura. Oxígeno suplementario: En algunos lugares, se puede proporcionar oxígeno suplementario en caso de emergencia. Busca ayuda médica y considera el uso de oxígeno si es necesario."
  },
  {
    q: "¿Con qué método de pago se pueden efectuar la reserva de un tour?",
    a: "Los medios de pagos que se pueden utilizar para reservar un tour es mediante links de pago de las plataformas de IZIPAY , OPENPAY ,PAYPAL . Estos pagos permiten el uso de trarjeta de debito y  crédito: como Visa, MasterCard, American Express y otras."
  },
  {
    q: "Que documentos necesito para mis excursiones en el Peru?",
    a: "Dependiendo del pais de donde vienes es muy importante que tengas tu cedula de identidad o pasaporte . En caso de tu pasaporte asegúrate que esté vigente por lo menos seis meses despues desde tu fecha de viaje."
  },
  {
    q: "Que documentos necesito para ingresar a Machupicchu",
    a: "Para poder ingresar a la fortaleza de Machu Picchu, uno de los destinos turísticos más icónicos de Perú, necesitarás ciertos documentos. Boleto de entrada a Machu Picchu: Este es el documento principal que necesitarás. Debes comprar tu boleto de entrada con anticipación, ya sea en línea o en Cusco (o Aguas Calientes, el pueblo cercano a Machu Picchu). Cedula de Identidad o Pasaporte: Lleva contigo el pasaporte o cedula de identidad con el que hiciste la reserva de tu boleto de entrada."
  },
  {
    q: "Que tickets necesito para llegar y entrar a Machupicchu",
    a: "Para llegar y entrar a Machu Picchu, necesitarás varios tickets y documentos. Aquí hay una lista de los tickets esenciales que deberías considerar: Boleto de tren: Si viajas desde Cusco o el Valle Sagrado, necesitarás un boleto de tren para llegar a Aguas Calientes. Asegúrate de reservar tu boleto de tren con anticipación. Boleto de autobús a Machu Picchu (opcional): Desde Aguas Calientes, el acceso a Machu Picchu se realiza mediante un servicio de autobús que sube la empinada carretera hasta la entrada del sitio arqueológico. Puedes comprar los boletos para el autobús en Aguas Calientes antes de abordar o reservarlos con anticipacion . Boleto de entrada a Machu Picchu: El boleto de entrada a Machu Picchu es esencial y debe ser adquirido con anticipación. Puedes comprar estos boletos a través de la página web oficial del Ministerio de Cultura de Perú o en agencias autorizadas. Pasaporte: Lleva contigo el pasaporte con el que hiciste la reserva de tu boleto de entrada a Machu Picchu. La entrada al sitio arqueológico suele requerir la presentación del pasaporte."
  },
  {
    q: "¿Debo tener mi vacuna contra la fiebre amarillas para hacer mis excursiones en Puerto Maldonado?",
    a: "La vacuna contra la fiebre amarilla es recomendada para aquellos que viajan a áreas donde existe el riesgo de contraer la enfermedad, y esto incluye algunas regiones de América del Sur, como la Amazonía, donde se encuentra Puerto Maldonado en Perú. Aunque la fiebre amarilla no es obligatoria para ingresar a Perú desde la mayoría de los países, la situación puede variar, y algunos países pueden requerir la vacuna como parte de sus regulaciones de salud pública Aunque la vacuna contra la fiebre amarilla puede no ser obligatoria para ingresar a Puerto Maldonado , se recomienda encarecidamente para aquellos que viajan a áreas de riesgo, como la Amazonía. La fiebre amarilla es transmitida por mosquitos y puede ser una enfermedad grave."
  },

]

const faq = document.querySelector(".faq-container")


ansQues.forEach((ele) => {
  const dd = document.createElement('div')
  dd.className = "faq "
  dd.innerHTML = `<h3 class="faq-title">
                        ${ele.q}
            </h3>
            <p class="faq-text">
                        ${ele.a}
            </p>
            <button class="faq-toggle">
              
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
</svg>
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
document.addEventListener("DOMContentLoaded", function() {
  var lazyFrames = [].slice.call(document.querySelectorAll(".lazy-iframe"));

  if ("IntersectionObserver" in window) {
    var lazyFrameObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var lazyFrame = entry.target;
          lazyFrame.src = lazyFrame.dataset.src;
          lazyFrameObserver.unobserve(lazyFrame);
        }
      });
    });

    lazyFrames.forEach(function(lazyFrame) {
      lazyFrameObserver.observe(lazyFrame);
    });
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    lazyFrames.forEach(function(lazyFrame) {
      lazyFrame.src = lazyFrame.dataset.src;
    });
  }
});
