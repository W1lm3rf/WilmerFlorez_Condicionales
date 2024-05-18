
var numero1 = parseFloat(prompt("Ingrese el primer valor numérico:"));
var numero2 = parseFloat(prompt("Ingrese el segundo valor numérico:"));


var operacion = prompt("Ingrese la operación a realizar (suma, resta, multiplicación, división):").toLowerCase();


switch (operacion) {
    case "suma":
        console.log("El resultado de la suma es: " + (numero1 + numero2));
        break;
    case "resta":
        console.log("El resultado de la resta es: " + (numero1 - numero2));
        break;
    case "multiplicación":
        console.log("El resultado de la multiplicación es: " + (numero1 * numero2));
        break;
    case "división":
        if (numero2 !== 0) {
            console.log("El resultado de la división es: " + (numero1 / numero2));
        } else {
            console.log("ERROR: No se puede dividir por cero.");
        }
        break;
    default:
        console.log("Operación no válida. Por favor, ingrese suma, resta, multiplicación o división.");
}
