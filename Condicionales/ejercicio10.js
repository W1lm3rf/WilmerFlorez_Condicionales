
var jugador1 = prompt("Jugador 1, elige 'PIEDRA', 'PAPEL' o 'TIJERAS':").toUpperCase();


if (jugador1 !== "PIEDRA" && jugador1 !== "PAPEL" && jugador1 !== "TIJERAS") {
    console.log("¡Jugador 1 ha hecho trampa! Ingrese 'PIEDRA', 'PAPEL' o 'TIJERAS'.");
} else {
    
    var jugador2 = prompt("Jugador 2, elige 'PIEDRA', 'PAPEL' o 'TIJERAS':").toUpperCase();

    
    if (jugador2 !== "PIEDRA" && jugador2 !== "PAPEL" && jugador2 !== "TIJERAS") {
        console.log("¡Jugador 2 ha hecho trampa! Ingrese 'PIEDRA', 'PAPEL' o 'TIJERAS'.");
    } else {
        
        if (jugador1 === jugador2) {
            console.log("¡Ha habido un empate!");
        } else if (
            (jugador1 === "PIEDRA" && jugador2 === "TIJERAS") ||
            (jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
            (jugador1 === "TIJERAS" && jugador2 === "PAPEL")
        ) {
            console.log("¡Jugador 1 ha ganado!");
        } else {
            console.log("¡Jugador 2 ha ganado!");
        }
    }
}
