//async o programación asincrónica (van en orden). se usa :
console.log("este es el bloque 1")
console.log("==================")

//setTimeout(funcionn.time): el time es en segundos
setTimeout(()=>{
console.log("este es el bloque 2")
console.log("==================") //esto sería lo último que se ejecutaría
}, 5000)

console.log("este es el bloque final") //esto sería lo segundo que se ejecutaría

//Call Stack/"pila de llamadas": se va siguiendo una lista de tareas

//Stack overflow (es un loop infinito):
function fun() {
    fun()
} 
fun()

//Loupe: cuando tenemos funciones o métodos, pasan directo al "Call Stack":
//http://latentflip.com/loupe/


//setInterval (repite un código cada cierto tiempo): 
//VER MOMENT.JS (para d)
//UTIL: https://ourcodeworld.co/articulos/leer/256/top-5-las-mejores-libreria-de-formato-de-fecha-y-hora-de-codigo-abierto-para-javascript
setInterval(() => {
    console.log("tic")
}, 5000)

//Promesas (un evento a futuro que es asincrónico, o sea q en algun momento se puede resolver y a veces no):
