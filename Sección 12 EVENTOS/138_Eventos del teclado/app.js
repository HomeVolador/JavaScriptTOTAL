

let menu = document.getElementById("miMenu");
let boton = document.getElementById("miBoton");
//Declaración de variable.



// boton.addEventListener('click', function(){
//     menu.style.display = 'block';
//     //Activa la lista para que podamos verla.
// });


boton.addEventListener('mouseover', function(){
    menu.style.display = 'block';
    //Activa la lista para que podamos verla.
});

boton.addEventListener('mouseout', function(){
    menu.style.display = 'none';
    //Activa la lista para que podamos verla.
});

// Actuara en todo el documento

document.addEventListener('mousemove', function(event){

    console.log("Posición X: " + event.clientX + " -Posición Y: " + event.clientY)
})



