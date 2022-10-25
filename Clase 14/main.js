//async o programación asincrónica (van en orden). se usa :
console.log("este es el bloque 1");
console.log("==================");

//setTimeout(funcionn.time): el time es en segundos
setTimeout(()=>{
console.log("este es el bloque 2");
console.log("=================="); //esto sería lo último que se ejecutaría
}, 5000);

console.log("este es el bloque final"); //esto sería lo segundo que se ejecutaría

//Call Stack/"pila de llamadas": se va siguiendo una lista de tareas

//Stack overflow (es un loop infinito):
function fun() {
    fun()
} 
fun();

//Loupe: cuando tenemos funciones o métodos, pasan directo al "Call Stack":
//http://latentflip.com/loupe/


//setInterval (repite un código cada cierto tiempo): 
//VER MOMENT.JS (para d)
//UTIL: https://ourcodeworld.co/articulos/leer/256/top-5-las-mejores-libreria-de-formato-de-fecha-y-hora-de-codigo-abierto-para-javascript
setInterval(() => {
    console.log("tic");
}, 5000);

//Promesas (un evento a futuro que es asincrónico, o sea q en algun momento se puede resolver o rechazar):
//vendría a ser un objeto. SE LE PONEN DOS PARÁMETROS que resuleve y rechaza (resolve,reject):

const Promesa = new Promise ((resolve,reject) => {
    const num = Math.floor(Math.random() * 10);
    setTimeout(() => {
        if (num>5) {
            resolve(num);
        } else {
            reject(new Error("es menor a 5 "));
        }
    }, 2000)
})

console.log(Promesa);

//cuando dice "Pending" es que ni se rechaz ni se resolvió

//A estas promesas se le pueden concatenar:
// Then(): (se ejecuta si la promesa se resolvió)
// Catch(): (se ejecuta si la promesa se rechazó)
// Finally(): (se ejecuta igualmente, sin importar el resultado)

Promesa
    .then(num => console.log(`la promesa fue resuelta, el numero es ${num}`))
    .catch(error => console.log(error)) //el parámetro error lo saca del reject de la promesa anterior
    .finally(()=> console.log("es el fin de la ejecución"))
//then pueden haber varios pero catch y finally NO
//UTIL (Promise): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise

const llamarPorductos = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve(listaProductos)
        }, 5000)
    })
}

const contenedor = document.querySelector("#contenedor")
const mostrarProductos = (arrays) => {
    arrays.forEach(prod=> {
        contenedor.innerHTML += `
        <h3>${prod.title}</h3> 
        <p>${prod.description} </p> 
       ` 
    })
}

llamarProductos()
    .then((res) => mostrarProductos(res))

//UTIL (apis): https://apilist.fun/
