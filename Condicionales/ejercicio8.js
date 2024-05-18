
var numeroIncognita = Math.floor(Math.random() * 10) + 1;


var intentosMaximos = 3;


for (var intento = 1; intento <= intentosMaximos; intento++) {
    
    var numeroIngresado = parseInt(prompt("Intento " + intento + ": Ingresa un número del 1 al 10:"));

    
    if (numeroIngresado === numeroIncognita) {
        console.log("¡Ganaste! ¡Has adivinado el número!");
        break; 
    } else if (numeroIngresado < numeroIncognita) {
        console.log("El número ingresado es menor, vuelve a intentarlo.");
    } else {
        console.log("El número ingresado es mayor, vuelve a intentarlo.");
    }

    
    if (intento === intentosMaximos) {
        console.log("Lo siento, has agotado tus intentos. El número correcto era: " + numeroIncognita);
    }
}
