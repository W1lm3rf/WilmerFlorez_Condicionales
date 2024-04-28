
var color = prompt("Ingrese un color:").toLowerCase();


switch (color) {
    case "blanco":
    case "negro":
        console.log("Falta de color.");
        break;
    case "verde":
        console.log("El color de la naturaleza.");
        break;
    case "azul":
        console.log("El color del agua.");
        break;
    case "amarillo":
        console.log("El color del sol.");
        break;
    case "rojo":
        console.log("El color del fuego.");
        break;
    case "marrón":
        console.log("El color de la tierra.");
        break;
    default:
        console.log("Excelente elección, no lo teníamos pensado.");
}
