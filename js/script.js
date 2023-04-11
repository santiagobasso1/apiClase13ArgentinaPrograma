// //MUESTRA API SIN FETCH CON HTTPREQUEST

// //Creamos el objeto para realizar la solicitud
// let httpRequest = new XMLHttpRequest();
// //Ejecutamos el metodo "GET" sobre la url de la API
// httpRequest.open('GET', 'https://api.coincap.io/v2/assets', true);
// //Configuramos para que acepte JSON
// httpRequest.setRequestHeader('Accept', 'application/json');
// httpRequest.onload = async () => {
//     if (httpRequest.status === 200) {
//         const datosApi = await JSON.parse(httpRequest.responseText);
//         //Aqui dentro utilizamos la información de la API
//         //Muestra las criptos de la API


//         //Filtramos para ver solamente el nombre de las criptos
//         //const preciosCripto = datosApi.data.map(cripto => cripto.priceUsd);
//         // console.log(nombresCriptos)

//         // //Para cada nombre de estas criptos lo mostramos en una lista DESORDENADA en este caso
//         datosApi.data.forEach(cripto => {
//             const li = document.createElement("li");
//             li.textContent = cripto.rank + "- " +cripto.name + "      $" + cripto.priceUsd
//             document.getElementById("listaCriptos").appendChild(li);
//         });
//     }
// };
// //Ejecutamos
// httpRequest.send();


//MUESTRA DATOS COINCAP CON FETCH

async function obtenerDatos() {
    const response = await fetch('https://api.coincap.io/v2/assets');
    const datosApi = await response.json();
    //Aqui dentro utilizamos la información de la API
    //Muestra las criptos de la API
    //Filtramos para ver solamente el nombre de las criptos
    const nombresCriptos = datosApi.data.map(cripto => cripto.id);
    console.log(nombresCriptos)
    //Para cada nombre de estas criptos lo mostramos en una lista DESORDENADA en este caso
    datosApi.data.forEach(cripto => {
        const li = document.createElement("li");
        li.textContent = cripto.rank + "- " + cripto.name + "      $" + cripto.priceUsd
        document.getElementById("listaCriptos").appendChild(li);
    });
}

obtenerDatos();


//MUESTRA EL GET DE LA API DE LA DIAPOSITIVA

// //Creamos el objeto para realizar la solicitud
// let xhr = new XMLHttpRequest();
// //Ejecutamos el metodo "GET" sobre la url de la API
// xhr.open('GET', 'https://reqres.in/api/users', true);
// //Configuramos para que acepte JSON
// xhr.setRequestHeader('Accept', 'application/json');
// xhr.onload = async () => {
//     if (xhr.status === 200) {
//         datosApi = await JSON.parse(xhr.responseText);
//         //Aqui dentro utilizamos la información de la API
//         //Muestra las criptos de la API
//         console.log(datosApi.data)
//     }
// };
// xhr.send();


// // Creamos el objeto para realizar la solicitud
let xhr = new XMLHttpRequest();
// Ejecutamos el metodo "POST" sobre la url de la API
xhr.open('POST', 'https://reqres.in/api/users', true);
// Configuramos para que acepte JSON
xhr.setRequestHeader('Content-Type', 'application/json');
// Creamos el objeto usuario
const usuario = {
    name: 'Baldu',
    job: 'Programador'
};
// Enviamos el objeto usuario como una cadena JSON en el cuerpo de la solicitud
xhr.send(JSON.stringify(usuario));
xhr.onload = async () => {
    if (xhr.status === 201) {
        datosApi = await JSON.parse(xhr.responseText);
        // Aqui dentro utilizamos la información de la API
        // Mostramos el usuario creado
        console.log(datosApi)
    }
};
