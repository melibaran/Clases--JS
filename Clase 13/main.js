//librerias: codigos ya escritos con clases (sweet alert, luxon): validacion de datos, fechas, animaciones,ajax
// se puede descargar la libreria, ponerla en un archivo y conectarla con el HTML
// o con un CDN (con el link). USAR ARCHIVO MINIFICADOS
//AHORA SE USA VANILLA JS
//Gsap: libreria de animaciones 

//sweet alert:
const boton = document.getElementById("btn");
boton.addEventListener("click",()=> {
    Swal.fire("mi nombre es Meli")
})


//Toastify:
Toastify({
    text:"meli",
    className: "info"
}).showToast(); 
//tambien esto se puede poner adento de sweet alert para  qse abra el toastify

onclick: () => {
//todo lo de adento de toastify({})....
}
//(se ejecuta cuando se hace click sobre el toast)

//Luxon: se usa Datetime o si se quiere la fecha de ahora es Datetime.now

//Slick, Chasrt.js, mmenujs, greensock, threejs