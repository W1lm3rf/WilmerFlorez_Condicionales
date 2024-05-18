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
function pintarNotas(notasFiltradas) {
    const contenedorNotas = document.getElementById('contenedorNotas');
    contenedorNotas.innerHTML = '';

    if (notasFiltradas.length === 0) {
        const mensaje = document.createElement('p');
        mensaje.innerText = 'NO HAY NOTAS PARA MOSTRAR';
        contenedorNotas.appendChild(mensaje);
    } else {
        notasFiltradas.forEach(nota => {
            const card = document.createElement('div');
            card.classList.add('card');

            const cardTitle = document.createElement('h4');
            cardTitle.innerText = nota.titulo;

            const cardContent = document.createElement('p');
            cardContent.innerText = nota.texto;

            // Crear el checkbox para marcar como realizada
            const checkboxLabel = document.createElement('label');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = nota.realizada;
            checkbox.onclick = function() {
                marcarRealizada(nota.id);
            };

            checkboxLabel.appendChild(checkbox);
            checkboxLabel.appendChild(document.createTextNode(' Realizada'));

            // Crear el botón de eliminar
            const deleteButton = document.createElement('button');
            deleteButton.innerText = 'Eliminar';
            deleteButton.onclick = function() {
                borrarNota(nota.id);
            };
            card.appendChild(checkbox);
            card.appendChild(checkboxLabel);
            card.appendChild(cardTitle);
            card.appendChild(cardContent);
            card.appendChild(deleteButton);

            contenedorNotas.appendChild(card);
        });
    }
}

// Función para borrar una nota por ID
function borrarNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    aplicarFiltros();
}

// Función para guardar una nueva nota
function guardarNota() {
    let titulo = document.getElementById('titulo').value;
    let nota = document.getElementById('nota').value;
    
    if (titulo && nota) {
        idGlobal++;
        let nuevaNota = {
            id: idGlobal,
            titulo: titulo,
            texto: nota,
            realizada: false
        };
        notas.push(nuevaNota);
        aplicarFiltros();

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
    aplicarFiltros();
}

// Función para marcar una nota como realizada
function marcarRealizada(id) {
    let nota = notas.find(nota => nota.id === id);
    if (nota) {
        nota.realizada = !nota.realizada;
        aplicarFiltros();
    }
}

// Función para filtrar por el estado realizada
function filtrarPorRealizadas(notas) {
    let filtroRealizadas = document.getElementById('filtroRealizadas').checked;
    if (filtroRealizadas) {
        return notas.filter(nota => nota.realizada);
    }
    return notas;
}

// Función para filtrar por texto
function filtrarPorTexto(notas, texto) {
    if (texto) {
        return notas.filter(nota => 
            nota.titulo.toLowerCase().includes(texto.toLowerCase()) ||
            nota.texto.toLowerCase().includes(texto.toLowerCase())
        );
    }
    return notas;
}

// Función para aplicar los filtros
function aplicarFiltros() {
    let texto = document.getElementById('buscarTexto').value;
    let notasFiltradas = filtrarPorTexto(notas, texto);
    notasFiltradas = filtrarPorRealizadas(notasFiltradas);
    pintarNotas(notasFiltradas);
}

// Pintar las notas iniciales
aplicarFiltros();
