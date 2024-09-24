// Función que inicia el proceso de ordenamiento
function ordenarNumeros() {
    // Obtenemos la lista de números introducida por el usuario
    let numeros = document.getElementById('numeros').value.split(',').map(Number);
    let visualizacion = document.getElementById('visualizacion');

    // Limpiamos la visualización anterior
    visualizacion.innerHTML = '';

    // Verificamos que se haya introducido una lista válida
    if (numeros.some(isNaN)) {
        visualizacion.innerHTML = 'Por favor, introduce una lista válida de números separados por comas.';
        return;
    }

    // Ejecutamos el algoritmo de burbuja y visualizamos el proceso
    burbuja(numeros);
}

// Algoritmo de ordenamiento por burbuja con visualización
async function burbuja(arr) {
    let n = arr.length;
    let visualizacion = document.getElementById('visualizacion');

    // Bucle del algoritmo de burbuja
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Intercambiamos los elementos
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }

            // Mostramos la visualización en cada paso
            mostrarNumeros(arr);
            await sleep(500); // Pausa de 500ms para ver los cambios
        }
    }

    // Al finalizar, indicamos que el ordenamiento está completo
    visualizacion.innerHTML += '<p>Ordenamiento completado.</p>';
}

// Función para mostrar los números visualmente
function mostrarNumeros(arr) {
    let visualizacion = document.getElementById('visualizacion');
    visualizacion.innerHTML = '';

    arr.forEach(num => {
        // Creamos una "barra" para cada número
        let barra = document.createElement('div');
        barra.className = 'barra';
        barra.style.height = num * 5 + 'px'; // Escalamos la altura de la barra
        barra.innerText = num;
        visualizacion.appendChild(barra);
    });
}

// Función para pausar la ejecución y visualizar el proceso
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Función para reiniciar el contenido
function reiniciar() {
    document.getElementById('numeros').value = '';
    document.getElementById('visualizacion').innerHTML = '';
}

