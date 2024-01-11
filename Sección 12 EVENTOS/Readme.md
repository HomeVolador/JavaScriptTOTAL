1. Qué son los eventos.
    Acciones, sucesos, interanciones...
    addEventListener() --- Agregar un escuchador de eventos... Siempre atentoo de como asociar eventos a elementos del DOM.
    Los más comunes:
        Clik - double click - mouseover -keydown
2. Manejar eventos en el DOM.
    Atentos al objeto "event". recuperar información de eventos
        event.target------------------Identificamos los elementos que desencadenan lo elementos.
        event.currentTarge   
        event.preventDefault---------Evitar la acción predeterminada de algún evento.     
3. Eventos del teclador y  ratón.
    keydown-----------Al presionar una tecla.
    keyup-------------Al soltar la tecla.
    keypress----------Ambos al mismo tiempo.

    click-------------
    mousemove
    mouseover
    mouseout  

5. Eventos en tiempo real.
    Son los que te permiten actualizar el contenido de una web sin tener que refrescar:

        websocket -------------------- Comunicación bidireccional cliente/servidor
         
        http/2 server push

6. Eventos personalizados. 