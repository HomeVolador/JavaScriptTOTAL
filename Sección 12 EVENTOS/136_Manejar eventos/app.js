
let boton =  document.getElementById('miBoton');
let div = document.getElementById('miDiv');
let enlace = document.getElementById('miEnlace');
//Declaramos la variable 

function evitarEnlace(event) {
    event.preventDefault();
    alert('Enlace NO habilitado');
}

function mostrarMensaje(event) {
    alert(event.target);
    alert(event.currentTarget);
}


div.addEventListener('click', mostrarMensaje);
//boton.addEventListener('click', mostrarMensaje);

enlace,addEventListener('click', evitarEnlace);



