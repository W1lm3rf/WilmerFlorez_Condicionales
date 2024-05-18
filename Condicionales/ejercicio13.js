
var numeroDNI = prompt("Ingrese el número de su DNI:");
var nombres = prompt("Ingrese su(s) nombre(s):");
var apellidos = prompt("Ingrese su(s) apellido(s):");
var fechaNacimiento = prompt("Ingrese su fecha de nacimiento (DD/MM/AAAA):");


console.log("Datos ingresados:");
console.log("Número de DNI: " + numeroDNI);
console.log("Nombres: " + nombres);
console.log("Apellidos: " + apellidos);
console.log("Fecha de nacimiento: " + fechaNacimiento);


var confirmacion = prompt("¿Son correctos los datos ingresados? (s/n):").toLowerCase();

if (confirmacion === 's' || confirmacion === 'si') {
    
    var dni = {
        numero: numeroDNI,
        nombres: nombres,
        apellidos: apellidos,
        fechaNacimiento: fechaNacimiento
    };

    
    console.log("Registro exitoso. Aquí están los datos de su DNI:");
    console.table(dni);
} else {
    console.log("Vuelva a intentarlo en 1 mes.");
}
