
let boton =  document.getElementById('miBoton');
//Declaramos la variable 
//Llamada a los eventos y aplicamos la función
boton.addEventListener('click' , function(){
    alert('El boton recibio el eveento click!!!!'); 
})
//Declaramos la función
function mostrarMensaje(){
    alert("Mostramos la función en el vento click, con otro tipo de declarción")
};

function mouseover() {
    alert("Al pasar por encima del boton")
}
//Llamada al evento y la función
boton.addEventListener('click' , mostrarMensaje);

//boton.addEventListener('mouseover', mouseover);


