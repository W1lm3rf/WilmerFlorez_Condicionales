function calIMC(){
    let estatura = parseInt(document.getElementById('estaturaUsuario').value);
    let peso = parseInt(document.getElementById('pesoUsuario').value);

    let resultado = (peso/((estatura/100)*(estatura/100)));
    
    document.getElementById('resultado').value = resultado.toFixed(2);

    
    document.querySelector('#estaturaUsuario').value = '';
    document.querySelector('#pesoUsuario').value = '';
}


function convertirPeso(){
    let pesoAr = parseFloat(document.getElementById('pesoAr').value);

    let dolar = (pesoAr * 0.0011);

    document.querySelector('#dolar').value = dolar.toFixed(4)
}



/* notas */

// Array para almacenar las notas
let notas = [
    {
        id: 1,
        titulo: 'Sacar la basura',
        texto: 'Mi mamá me va a retar si no lo hago',
        realizada: false
    },
    {
        id: 2,
        titulo: 'Estudiar para el examen',
        texto: 'Tengo que repasar matemáticas',
        realizada: false
    }
];

// Variable para el control del ID global
let idGlobal = 2;

// Función para pintar las notas en forma de tarjetas
function pintarNotas() {
    const contenedorNotas = document.getElementById('contenedorNotas');
    contenedorNotas.innerHTML = '';

    notas.forEach(nota => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardTitle = document.createElement('h4');
        cardTitle.innerText = nota.titulo;

        const cardContent = document.createElement('p');
        cardContent.innerText = nota.texto;

        // Crear el botón de eliminar
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Eliminar';
        deleteButton.onclick = function() {
            borrarNota(nota.id);
        };

        card.appendChild(cardTitle);
        card.appendChild(cardContent);
        card.appendChild(deleteButton);

        contenedorNotas.appendChild(card);
    });
}

// Función para borrar una nota por ID
function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    pintarNotas();
}

// Función para guardar una nueva nota
function guardarNota() {
    const titulo = document.getElementById('titulo').value;
    const nota = document.getElementById('nota').value;
    
    if (titulo && nota) {
        idGlobal++;
        const nuevaNota = {
            id: idGlobal,
            titulo: titulo,
            texto: nota,
            realizada: false
        };
        notas.push(nuevaNota);
        pintarNotas();

        // Limpiar los inputs
        document.getElementById('titulo').value = '';
        document.getElementById('nota').value = '';
    } else {
        alert('Por favor ingrese un título y una nota.');
    }
}

// Función para resetear todas las notas
function resetNotas() {
    notas = [];
    pintarNotas();
}

// Pintar las notas iniciales
pintarNotas();
