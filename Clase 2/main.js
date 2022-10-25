//let texto = "esto es es un numero" ;

//let numero = 1;

//let booleano = true;

//let mayoresa3 = numero>3;

//Condicionales: 
//If (condicion) {codigo que se ejecuta si la condicion es verdadera}:

//let nota = parseInt(prompt ("Qué nota te sacaste?"))

//if (nota>4){
  //  alert ("aprobaste");
//}

// if...else if...else 

//et deportefavorito = prompt("Cual es tu deporte favorito?");

//if (deportefavorito == "voley") {
  //  alert("el mio tambien")
//} else if(deportefavorito == "tenis") {
  //  alert(`tu deporte favorito es ${deportefavorito}, el mio es voley`)
//} else {
  //  alert("el mio es voley") 
//}

//let precio = parseFloat(prompt("cual es el precio?")); 

//if(precio>100) {
  //  console.log("que caro!");
//}

//else if (precio==30) {
//    console.log("justo lo que tengo!")
//}
//else {
   // console.log("me lo llevo!")
//}

/*
let num1 = 1;
let numuno = "1";
let sonIguales = (num1 === numuno);
console.log("son iguales");
if (deportefavorito.toLowerCase() == "volet"){
    alert("que lindo deporte")
}
else {
    alert ("que feo deporte!")}
*/


//ejercicio:
/*
preguntar al usuario su edad
si tiene entre 0 y 17 el dato de salida es "eres un ninio" si tiene entre 18 y 40 
- "sos un joven"
y si tiene mas de 40 
- "trajiste tu baston?"
*/

let edad = parseInt(prompt("Cual es tu edad?"));

if (edad>=0 && edad<=17)  {
    alert("eres un ninio");
} 
else if (edad>=18 && edad<=40) {
    alert("eres un joven");
}
else if(edad>40) {
    alert("trajiste tu baston?")
}
else {
    alert("no es valido");
}

// operador ternario: ? que pasa si si  : que pasa si no
edad > 18 ? alert("sos mayor de edad") : ("sos menor de edad")