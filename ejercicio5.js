
function solicitarDatosPersona(numeroPersona) {
    var nombre = prompt("Ingrese el nombre de la persona " + numeroPersona + ":");
    var edad = parseInt(prompt("Ingrese la edad de la persona " + numeroPersona + ":"));
    var altura = parseFloat(prompt("Ingrese la altura en centímetros de la persona " + numeroPersona + ":"));

    return {
        nombre: nombre,
        edad: edad,
        altura: altura
    };
}


var persona1 = solicitarDatosPersona(1);


var persona2 = solicitarDatosPersona(2);


function compararPersonas(persona1, persona2) {
    
    var personaMasAlta = persona1.altura > persona2.altura ? persona1.nombre : persona2.nombre;

    
    var personaMayorEdad = persona1.edad > persona2.edad ? persona1.nombre : persona2.nombre;

   
    console.log("La persona más alta es: " + personaMasAlta);
    console.log("La persona de mayor edad es: " + personaMayorEdad);
}


compararPersonas(persona1, persona2);
