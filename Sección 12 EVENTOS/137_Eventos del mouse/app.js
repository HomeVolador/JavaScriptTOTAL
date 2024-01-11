

let campo = document.getElementById("miCampo");
//Declaración de variable.

function verificarSiEsNumero(event){
    //valoración de codigos acciis solo los numeros superiores
    if (event.keyCode < 48 || event.keyCode > 57) {
        //si no es no la mostrara por defecto
        event.preventDefault();
    }
}

campo.addEventListener('keydown', verificarSiEsNumero);

campo.addEventListener('keyup', function(event){
    console.log("Entrada del usuario: " + event.target.value)
});

campo.addEventListener('keypress', function(event){
    console.log("Caracter ingresado: " + event.key);
})


