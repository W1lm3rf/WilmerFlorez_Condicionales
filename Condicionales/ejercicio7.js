
function solicitarDatos() {
    var nombre = prompt("Ingrese su nombre:");
    var pase = prompt("Ingrese su tipo de pase (vip o normal):").toLowerCase();
    var tieneEntrada = prompt("¿Posee entrada? (s/n):").toLowerCase();

    return {
        nombre: nombre,
        pase: pase,
        tieneEntrada: tieneEntrada === 's' || tieneEntrada === 'si' || tieneEntrada === 'true'
    };
}


function tieneIngresoLibre(persona) {
    return persona.nombre === "ChatGPT" || persona.pase === "vip";
}


function mostrarMensajeBienvenida() {
    console.log("¡Bienvenido/a al evento!");
}


function mostrarMensajeVentaYBienvenida() {
    console.log("¡Venta de entrada exitosa! ¡Bienvenido/a al evento!");
}


function mostrarMensajeRechazoVenta() {
    console.log("Lo sentimos, no tienes suficiente dinero para comprar una entrada.");
}


function mostrarMensajeDespedida() {
    console.log("Gracias por tu visita. ¡Hasta luego!");
}


var persona = solicitarDatos();


if (tieneIngresoLibre(persona)) {
    mostrarMensajeBienvenida();

    if (persona.tieneEntrada) {
        var usarEntrada = prompt("¿Desea utilizar su entrada? (s/n):").toLowerCase();
        if (usarEntrada === 's' || usarEntrada === 'si') {
            mostrarMensajeBienvenida();
        }
    }
} else {
    var comprarEntrada = prompt("¿Desea comprar una entrada? (s/n):").toLowerCase();
    if (comprarEntrada === 's' || comprarEntrada === 'si') {
        var dineroDisponible = parseFloat(prompt("Ingrese la cantidad de dinero disponible:"));
        if (dineroDisponible >= 1000) {
            mostrarMensajeVentaYBienvenida();
        } else {
            mostrarMensajeRechazoVenta();
        }
    } else {
        mostrarMensajeDespedida();
    }
}
