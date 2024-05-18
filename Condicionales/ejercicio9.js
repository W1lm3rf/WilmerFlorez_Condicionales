
var edad = parseInt(prompt("Ingrese su edad:"));


if (edad > 100) {
    var confirmacion = prompt("¿Está seguro/a de que tiene " + edad + " años? (s/n):").toLowerCase();
    if (confirmacion === 's' || confirmacion === 'si') {
        console.log("¡Usted tiene " + edad + " años! Debe ser una persona muy sabia.");
    } else {
        console.log("Vamos a intentarlo de nuevo.");
    }
} else if (edad >= 0 && edad <= 12) {
    console.log("Eres un infante.");
} else if (edad >= 13 && edad <= 18) {
    console.log("Eres un adolescente.");
} else if (edad >= 19 && edad <= 45) {
    console.log("Eres un mayor joven.");
} else {
    console.log("Eres un anciano.");
}
