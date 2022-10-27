
//UTIL(HTTP): https://developer.mozilla.org/es/docs/Learn/Common_questions/What_is_a_web_server

//HTTP: es un protocolo que tranfiere la informacion a una dirección:
// 1 : URL (www.http/coderhouse.com)
// 2 : MÉTODO: GET,para trear info - POST,para mandar info. - PUT,modifica algún dato - DELETE, eliminar algun recurso
// 3 : HEADERS: incluye la info. sobre lo que estoy haciendo
// 4 : BODY: se definen los datos, hecho como json 
// 5 : PARÁMETROS: hay dos tipos:
//QUERY PARAMs: parametros que ayudan para filtrar info. con CLAVE - VALOR separador por &
//(con el ? podemos saber que empieza el QUERY)
//URL PARAMS: enviar parametros en la URL separada por la // entre {}

//API: interfaces de información, donde pedimos y enviamos info.
//UTIL (API): https://apilist.fun/
//EJ: jsonplaceholder, https://fakestoreapi.com/, https://cloud.google.com/apis/docs/overview, 
//tienen una URL BASE y ENDPOINT (el lugar donde se quiere acceder)

//FETCH: acepta dos parametros
//fetch(url, config (optativo))

const boton = document.querySelector("#btn");
const contendor = document.querySelector(".fecth");

const obtenerdatos = () => {
    fetch("./texto.txt")
    .then(response => response.text()) 
    .then(result => console.log(result)) //el resultado es RESOLVE//el resultado es RESOLVE
    .catch(error => console.log(error)) //el resultado es RESOLVE//el resultado es RESOLVE

}

const obtenerdatoss = () => {
    fetch("./datos.json")
    .then(response => response.json()) 
    .then(result=> {
        const datos = result;
        datos.array.forEach(dato => {
            contendor.innerHTML += `
            <h3>${dato.nombre}</h3>
            <p> edad: ${dato.edad} - profesion: ${dato.profesion}</p>
            `
        });
    })
}

//UTIL: https://randomuser.me
const obtenerdatooss = () => {
    fetch("./https://randomuser.me/api")
    .then(response => response.json())
    .then(result=> {
        let data = result.results;
        data.forEach(user => {
            contendor.innerHTML += `
            <div>${user.name.title}</div>
            `
        })
    })   
}

//para postear datos necesitamos la config.:
//UTIL: https://jsonplaceholder.typicode.com    

const nombre= document.getElementById("nombre").value
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body : JSON.stringify({
        title:"este es un dato que enviamos", 
        body: "post",      //todo tiene que estar escrito igual al JSON de la pagina
        userId: 53
    }),
    headers: {
        "Content-type": "apllication/json; charset=UTF-8",
    }
})
    .then(response=> response) //para recibir la respuesta y ver si se mando bien
    .then(dataa =>console.log(dataa)) //se trae la data que se mando


//async await: otra de escribir para que sea más fácil(se le agrega el async)
const obtenerDatos = async () => {
//try....catch
    try{
        let response = await fetch("./https://randomuser.me/api");
        let result = await response.json();
        let data = result.results;
        data.forEach(user => {
            contendor.innerHTML += `
                <div>${user.name.title}</div>
                `
            })   
    } catch(error) {
        console.log(error)
    }
}



boton.onclick = ()=> {
    obtenerdatos()
} 