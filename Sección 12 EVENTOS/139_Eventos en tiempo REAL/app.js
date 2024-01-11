

let socket = new WebSocket('ws://localhost:8080');
//socket es un concepto utilizado en programación y redes para establecer una conexión entre dos programas en diferentes dispositivos a través de una red. 

let mensajeIngresado = document.getElementById('mensajeIngresado');
let botonEnviar = document.getElementById('botonEnviar');
//Declaración de variable.

function mostrarMensajes(contenido) {
    let contenedorMensajes = document.getElementById('mensajeChat');
    let elementoMensaje = document.createElement('p');
    elementoMensaje.innerText = contenido;
    contenedorMensajes.appendChild(elementoMensaje);

}

botonEnviar.onclick = function() {
    let mensaje = mensajeIngresado.value;
    
    mostrarMensajes(mensaje);

    socket.send(mensaje);
};

socket.onmessage = function(event) {
    let mensaje =event.data;
    mostrarMensajes(mensaje);
}



