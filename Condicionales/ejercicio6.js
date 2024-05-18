
function solicitarDatosPersona() {
    var nombre = prompt("Ingrese su nombre:");
    var edad = parseInt(prompt("Ingrese su edad:"));
    var altura = parseFloat(prompt("Ingrese su altura en centímetros:"));
    var vision = parseFloat(prompt("Ingrese su visión (de 0 a 10):"));

    return {
        nombre: nombre,
        edad: edad,
        altura: altura,
        vision: vision
    };
}


function puedeConducir(persona) {
    if (persona.edad >= 18 && persona.altura > 150 && persona.vision >= 8) {
        return true;
    } else {
        return false;
    }
}


var persona = solicitarDatosPersona();


if (puedeConducir(persona)) {
    console.log(persona.nombre + ", estás capacitado/a para conducir.");
} else {
    console.log(persona.nombre + ", no estás capacitado/a para conducir.");
}
