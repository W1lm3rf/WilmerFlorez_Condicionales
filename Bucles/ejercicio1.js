
/* Ejercicio 1 */
/* let numeroejercicio1 = parseInt(prompt("Ingrese el numero de tabla a mostrar: "));
for(let i=1; i<=10; i++){
    let multiplicar = (numeroejercicio1 * i);
    console.log(numeroejercicio1+" X "+i+" = " + multiplicar);
} */


/* Ejercicio 2 */
/* let numeroejercicio2;
let suma = 0;

do {
    numeroejercicio2 = parseInt(prompt("Ingrese un numero. (ingrese 0 para terminar)"));

    if(!isNaN(numeroejercicio2)){
        suma += numeroejercicio2;
    }else{
        console.log("Numero no valido");
    }

    console.log(suma);
} while (numeroejercicio2 !== 0); */

/* Ejercicio 3 */
/* let numeroSecreto = Math.floor(Math.random() * 100) + 1;

let intentos = 0;

while (true) {
    
    let numeroIngresado = parseInt(prompt("Intenta adivinar el número (entre 1 y 100): "));

    
    if (!isNaN(numeroIngresado)) { 
        intentos++;

        if (numeroIngresado === numeroSecreto) {
            console.log(`¡Felicitaciones! Adivinaste el número secreto ${numeroSecreto} en ${intentos} intentos.`);
            break;
        } else if (numeroIngresado < numeroSecreto) {
            console.log("El número es mayor, intenta de nuevo.");
        } else {
            console.log("El número es menor, intenta de nuevo.");
        }
    } else {
        console.log("Por favor, ingresa un número válido.");
    }
} */


/* Ejercicio 4 */
/* 
let numeroejercicio4 = parseInt(prompt("Ingresa un número para verificar si es primo:"));
if (!isNaN(numeroejercicio4)) {
    let divisores = 0;
    for (let i = 1; i <= numeroejercicio4 / 2; i++) {
        
        if (numeroejercicio4 % i === 0) {
            divisores++;
        }
    }if (divisores === 1) {
        console.log(`${numeroejercicio4} es un número primo.`);
    } else {
        console.log(`${numeroejercicio4} no es un número primo.`);
    }
} else {
    console.log("Por favor, ingresa un número válido.");
} */

/* Ejercicio 5 */
/* 
let numeroejercicio5 = parseInt(prompt("Ingresa un número para mostrar todos sus divisores:"));

if (!isNaN(numeroejercicio5) && numeroejercicio5 > 0) {
    console.log(`Los divisores de ${numeroejercicio5} son:`);

    for (let i = 1; i <= numeroejercicio5; i++) {
        
        if (numeroejercicio5 % i === 0) {
            console.log(i);
        }
    }
} else {
    console.log("Por favor, ingresa un número entero positivo válido.");
} */


/* Ejercicio 6 */

/* let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


console.log("Los elementos del array son:");
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
} */


/* Ejercicio 7 */

/* let numeroejercicio7 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];


console.log("El doble de cada elemento del array es:");
for (let i = 0; i < numeroejercicio7.length; i++) {
    console.log(numeroejercicio7[i] * 2);
} */

/* Ejercicio 8 */

/* let familia = [
    { nombre: "Juan", edad: 35, relacion: "Padre", profesion: "Ingeniero" },
    { nombre: "María", edad: 32, relacion: "Madre", profesion: "Doctora" },
    { nombre: "Pedro", edad: 10, relacion: "Hijo", profesion: "Estudiante" },
    { nombre: "Ana", edad: 8, relacion: "Hija", profesion: "Estudiante" },
    { nombre: "Carlos", edad: 65, relacion: "Abuelo", profesion: "Jubilado" }
];


console.log("Presentación de la familia:");

for (let i = 0; i < familia.length; i++) {
    const miembro = familia[i];
    console.log(`${miembro.relacion}: ${miembro.nombre}, ${miembro.edad} años, ${miembro.profesion}.`);
} */


/* Ejercicio 9 */

/* let numeroejercicio9 = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29];

console.log("Números impares del array:");

for (let i = 0; i < numeroejercicio9.length; i++) {
    if (numeroejercicio9[i] % 2 !== 0) {
        console.log(numeroejercicio9[i]);
    }
} */


/* Ejercicio 10 */

/* 
let sumaPares = 0;
let sumaImpares = 0;

while (true) {
    let numeroejercicio10 = parseInt(prompt("Ingresa un número (ingresa 0 para terminar):"));

    if (!isNaN(numeroejercicio10)) {
        
        if (numeroejercicio10 === 0) {
            break;
        }

        if (numeroejercicio10 % 2 === 0) {
            sumaPares += numeroejercicio10;
        } else {
            sumaImpares += numeroejercicio10;
        }
    } else {
        console.log("Por favor, ingresa un número válido.");
    }
}

console.log(`La suma de los números pares es: ${sumaPares}`);
console.log(`La suma de los números impares es: ${sumaImpares}`);
 */


/* Ejercicio 11 */

/* let numeroejercicio11 = [15, 30, 8, 45, 22, 10, 50, 5, 18, 38];

let numeroMasGrande = numeroejercicio11[0];

for (let i = 1; i < numeroejercicio11.length; i++) {
    if (numeroejercicio11[i] > numeroMasGrande) {
        numeroMasGrande = numeroejercicio11[i];
    }
}

console.log(`El número más grande es: ${numeroMasGrande}`);
 */


/* Ejercicio 12 */

/* let numeroejercicio12 = [15, 30, 8, 45, 22, 10, 50, 5, 18, 38];
let numeroMasChico = numeroejercicio12[0];

for (let i = 1; i < numeroejercicio12.length; i++) {
    if (numeroejercicio12[i] < numeroMasChico) {
        numeroMasChico = numeroejercicio12[i];
    }
}
console.log(`El número más pequeño es: ${numeroMasChico}`);
 */



/* Ejercicio 13 */

/* let jugador1 = prompt("Ingrese el nombre del jugador 1:");
let jugador2 = prompt("Ingrese el nombre del jugador 2:");

while (true) {
    let manoJugador1 = prompt(`${jugador1}, elige piedra, papel o tijeras:`).toLowerCase();

    let manoJugador2 = prompt(`${jugador2}, elige piedra, papel o tijeras:`).toLowerCase();

    if (manoJugador1 === manoJugador2) {
        console.log("Ha habido un empate. ¡Sigue jugando!");
    } else {
        let ganador;
        if (
            (manoJugador1 === "piedra" && manoJugador2 === "tijeras") ||
            (manoJugador1 === "papel" && manoJugador2 === "piedra") ||
            (manoJugador1 === "tijeras" && manoJugador2 === "papel")
        ) {
            ganador = jugador1;
        } else {
            ganador = jugador2;
        }
        console.log(`¡${ganador} ha ganado!`);
        break; 
    }
} */


/* Ejercicio 14 */
/* 
for (let i = 1; i <= 5; i++) {
    let linea = '';
    
    for (let j = 1; j <= i; j++) {
        linea += '*';
    }
    console.log(linea);
} */


/* Ejercicio 15 */

/* for (let i = 5; i >= 1; i--) {
    let linea = '';
 
    for (let j = 1; j <= i; j++) {
        linea += '*';
    }
    console.log(linea);
} */

/* Ejercicio 16 */

let numeroejercicio16 = [5, 9, 2, 7, 3, 8, 1, 6, 10, 4];

for (let i = 0; i < numeroejercicio16.length; i++) {
    for (let j = i + 1; j < numeroejercicio16.length; j++) {
        if (numeroejercicio16[i] > numeroejercicio16[j]) {
            // Intercambiar los elementos si el elemento en la posición i es mayor que el elemento en la posición j
            let temp = numeroejercicio16[i];
            numeroejercicio16[i] = numeroejercicio16[j];
            numeroejercicio16[j] = temp;
        }
    }
}
console.log("Array ordenado: " +numeroejercicio16);

