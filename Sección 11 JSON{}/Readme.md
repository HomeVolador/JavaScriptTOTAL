1. Que és json - JAavaScript Object Notation - Notación de Objetos en JavaScript
    Se utuliza para transmitir datos de un servidor a paguina web o al reves,
    de un formulario a la base de datos del servidor.


        https://developer.mozilla.org/es/docs/Glossary/JSON


2. Como accederlo
    .json
    Todos los tipos de datos son validos en json, string, arrays, classe 
    Sensibles a mayusculas y minusculas, llaves y coimillas dobles obligatorias, valores separados por comas.
    Solo propiedades y no Metodos.

    ANOTACIÓN INDEPENDIENTE DE JAVASCRIPTS QUIERE DECIR QUE PUEDE SER LEIDO POR OTROS LENGUAJES.
    
3. XMLHttRequest() Acceso a los datos Json desde JavaScript
    let xhr = XMLHttRequest()    ---- Creamos la variable del nuevo objeto para pedirle los valores.

4. fetch()   = Extraer o recuperar.
    Solicitudes HTTP asíncronas.
    Alternativa a XMLHttpRequest
    Con una interface más simple y más limpia.

    fetche (recibe la url o el archivo.json)
        .then(respuesta => res.json())
        devolviendo una promesa(valor que estará disponible) que se resuelve con la respuesta del servidor.

5. catch()  = Atrapar errores.
6. Peticiones y promesas
7. Manejo de respuestas.