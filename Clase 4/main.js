//function nombreUtil (parametros - opcional) {codigo}
function mostrarNombre () {
    let nombre = prompt("cual es tu nombre?");
    alert(`tu nombre es ${nombre}`);
}

//siempre hay que llamar a una funcion asi despues de declararla:
//mostrarNombre();

function aprobarNota () {
    let nota = prompt("cual fue tu not?");
    if (nota>4) {
        alert("aprobaste");
    } 
    else {
        alert ("DESAPROBASTE");
    }
}

//aprobarNota();

function suma (num1, num2) {
    let resultado = num1 + num2;
    return resultado; //lo que queremos que devuelva (sirve para que no te ponga en console.log not defined)
}

//argumentos (importa la posicion del parametro):
let numero1 = parseInt(prompt("introduzca un nuemro"));
let numero2 = parseInt(prompt("introduzca otro nuemro")); 
suma(numero1, numero2);
suma(50,3);


function calcularDescuento(precio, porcentaje) {
    let valorDescuento = precio * porcentaje /100;
    let precioFinal = precio - valorDescuento;
    return precioFinal;
}

//let valorProducto = calcularDescuento(1000,20);
//cosole.log(valorProducto);

function productoNuevo(){
    let nombreProducto = prompt("como se llama el producto?")
    let precioProdcto = parseFloat(prompt("cuanto sale?"));
    let descuentoProdcto = parsInt(prompt("cuanto descuento le das?"));

    let precioFinal = calcularDescuento(precioProdcto, descuentoProdcto);
    let producto = cosole.log(`el producto nuevo es ${nombreProducto} y su precio final es ${precioFinal}`);
    return producto;
}