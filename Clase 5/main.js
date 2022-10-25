// los objetos siempre van entre llaves:
// objeto literal:
// let nombreObjeto = {propiedad: valor, propiedad1: valor1}

const mascota1 = {
    nombre: "Lucky",
    tipo: "perro",
    edad: 2,
    genero: "masculino",
    duenio: {
        nombre: "juan",
        telefono: 1111,
    }
}

console.log(mascota1);

//2 maneras de acceder a las propiedades que pusimos antes: 
console.log(mascota1.genero);
console.log(mascota1,duenio.telefono); //si hay dos objetos
// tambien se puede hacer:
console.log(mascota1 ["tipo"]); //no es comun


mascota1.castrado = true,
cosole.log(mascota1.castrado);

//CONSTRUCTOR: (que la funcion tengan todas las mismas propiedad)
function Mascota(nombre, tipo, edad, genero) {
    this.nombre = pepe, //asignar un valor a cada propiedad. el this se refiere a cada 
    //mascota particular 
    this.tipo = tipo,
    this.genero = genero,
}

 //el new va para crear el objeto
const daisy = new Mascota ("Daisy", "perro", 3, "Yael", true , "femenino");

cosole.log(daisy)

const crearMascota = ()=> {
    let nombreMascota = prompt("Como se llama la mascota?");
    let tipoMascota = prompt("Que tipo de mascota es?");
    let edadMascota = parseInt(prompt("Que edad tiene?"));
    let duenioMascota = prompt("Como te llamas?");
    let castradoMascota = prompt("esta castrado? pon si o no");
    let generoMascota = prompt("Que genero es?");

    let castradoBoolean = (castradoMascota == 'si');
    const mascota = new Mascota(nombreMascota,tipoMascota,edadMascota,duenioMascota,castradoBoolean,generoMascota);
    console.log(mascota);
    return mascota;
}


/*tarea:
1 - crear una clase con un constructor de productos, que acepte: nombre, categoria, precio y stock
2 - crear un metodo que aplique el 10% de descuento si el precio es mayor a 1000
3 - crear un metodo que se llame comprar y que acepte como parametro la cantidad
este metodo va a revisar si hay suficiente stock para comprar y si lo hay modifica modifica el stock.
*/