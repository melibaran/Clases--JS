//sugar Sintax: ir aumentando el valor: num++
//Operador ternario: simplica el condicional: condicion ? caso1(si es true) : caso2(si es false)

const persona = [
    {nombre : "juan", apellido: "rodriguez", casado:true},
    {nombre : "martina", apellido: "martinez", casado:false}
]
const parrafo = document.querySelector("#parrafo");

personas.array.forEach(persona => {
    parrafo.innerHTML +=
    <div>
        <h3>${persona.nombre} ${persona.apellido}</h3>
        <p>${persona.casado ? "casado" : "soltreo"}</p>
    </div>

}); 

//operador AND:
carrito.length === 0 && cosole.log("el carrito está vacío");

//Operador OR: evalúa si es FALSY (0, null, undefined, NaN, false) o no:
console.log(0||"Falsy");

// Operador nullish: igual que el OR, solo que con ??: solo es nullish si es null o undefined

// objeto condicional: para acceder al objeto/ propiedad se le agrega al lado un ?
const usuario = null;
console.log(usuario?.nombre || "el usuario no existe");

/*Destructuración: guardan en variables las propiedades del objeto
let {prop1, prop2} = objeto 
/*LOS NOMBRES DE LOS OBJETOS TIENEN QUE COINCIDIR CON EL DE LAS PROPIEDAS*/

const mascota = {
    nombre : "luci",
    edad: 18
} 
//se puede agregar valores por default como el de genero que si no está tira el valor de default
let {nombre,edad,genero= "desconocido"} = mascota; //como hacer let nombre = mascota.nombre
cosole.log(edad);

//Alias: se pone luego del nombre de la prpiedad para que se más facil de usar
const nombres = {
    item_id: id,
    nombre_mascota_td: nombre
}

//Destructuración en parámetros:
const imprimirDatos = ({nombre, edad}) => {
    parrafo.innerHTML += `
        <h3>${nombre}</h3>
        <p>Edad: ${edad}</p>
    `
}

const mascotas = [
    {nombre: "lucky", edad: 3},
    {nombre: "simba", edad: 6},
    {nombre: "darwin", edad: 5},
    {nombre: "daisy", edad: 3}
]

mascotas.forEach(mascota => {
    imprimirDatos(mascota)
})

//el evento es un objeto y 
window.addEventListener(`click`, ({x,y}) => {
    cosole.log(x,y)
})

//Destructuración de arrays (se pone entre []):  NO se usa mucho
const nombres1= ["juan", "daniel", "mariano"]

const [a,b] = nombres1 //a seria juan y b seria daniel 

//Spread (desparramar un arrays o un objeto):
const names= ["juan", "daniel", "mariano"]
console.log(...nombres) //saca cada uno de los elementos del arrays
//(seria como poner console.log("juan", "daniel", "mariano"))

//Spread de dos arrays:
const nombree1 = ["luis", "julio"]
const nombree2 = ["mario", "mati"]
const Names = [...nombree1, ...nombree2]

//Spread en objetos: 
const usuario1 = {
    nombres: "julia",
    edad: 18
}
const usuario2  = {
    ...usuario1
}
cosole.log(usuario2) // {nombre;"julia", edad:18}


//Rest parametrs (poner parametros cuando no sabemos cuantos parametros vamos a tener):
function sumar(...numeros) {
    console.log(numeros)
}


//ALGO UTIL PARA EL PROYECTO: Math.max: para que me de el numero mas alto

//TAREA: DOM EVENTOS STORAGE Y JSON