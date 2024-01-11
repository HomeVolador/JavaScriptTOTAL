//Definicion de VARIABLES


let selector = document.getElementById("miSelector");
let input = document.getElementById("miInput");
let boton = document.getElementById("miBoton");
let lista = document.getElementById("miListado"); 

let archivo = 'peliculas.json';   //la variable archivo contendra el contenido de json


//Escuchadores de eventos o SOLDADOS
//cambios en el selector
selector.addEventListener('change',cambiarArchivo);
selector.addEventListener('cambioModo', mensajeModo); //cambioModo EVENTO personalizado

input.addEventListener('keydown', verificarInput);

boton.addEventListener('click', buscar);  //Al hacer click ejecutara la función buscar.


//Funciones
function cambiarArchivo(){
    archivo = selector.value;

    let evento = new CustomEvent('cambioModo');
    selector.dispatchEvent(evento);
}

function mensajeModo(){
    alert("El archivo de busqueda ahora es: " + selector.value);
}


function verificarInput(evento){
    if ((evento.keyCode < 65 || evento.keyCode > 90) && evento.keyCode !== 32 && evento.keyCode !== 8) {          
        evento.preventDefault();
    }
}

//Proviene del boton
function buscar() {
    //Limpiamos la lista
    lista.innerHTML = "";

    fetch(archivo)
    .then(respuesta => respuesta.json())
    .then(function(salida) {
        for(let item of salida.data){
                          //Metoddo startswith "Si empieza con los que introducimos en en input, lo pasamos a mayusculas"  
            if(item.nombre.startsWith(input.value.toUpperCase())) {
                let p = document.createElement('p');                //Generamos la variable de la sipnosis
                p.id = item.nombre;                                 //Damos un id para poder llamarlo
                p.innerHTML = item.sinopsis;                        //Lo que tenga el item en la sipnosis
                p.style.display = "none";                           

                let li = document.createElement('li');              //Creamos la variable para la lista
                li.innerHTML = item.nombre;                         //
                li.addEventListener('mouseover', function() {       //Cuando el ratón pase por encima.
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'block';                      //haremos que se muestre
                });

                li.addEventListener('mouseout', function() {        //Cuando se retira el maus no se mostrara
                    let p = document.getElementById(item.nombre);
                    p.style.display = 'none';
                });

                li.appendChild(p);                                  //Agregamos a li
                lista.appendChild(li);                              //Tambien la incluimos en nuestra lista.
            }
        }
    })
    .catch(function(error) {
        console.log(error);
    })
}