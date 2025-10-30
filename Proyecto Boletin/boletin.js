const notas = [7, 4, 8, 9, 6]; 
const notaMinima = 4; 

const elementoLista = document.getElementById('listaNotas');
const resultadoPromedio = document.getElementById('resultadoPromedio');
const resultadoNotaAlta = document.getElementById('resultadoNotaAlta');
const resultadoAplazados = document.getElementById(' ');

function listarNotas() {
    elementoLista.innerHTML = ""; 
    
    let listaHTML = ""; 
    
    for (let i = 0; i < notas.length; i++) {
        listaHTML = listaHTML + "<li>" + notas[i] + "</li>";
    }
    
    elementoLista.innerHTML = listaHTML;
    
    resultadoPromedio.textContent = "Resultado: ";
    resultadoNotaAlta.textContent = "Resultado: ";
    resultadoAplazados.textContent = "Resultado: ";
}

function calcularPromedio() {
    const promedio = notas.reduce((suma, nota) => suma + nota, 0) / notas.length;
    const redondeado = Math.round(promedio * 10) / 10;
    resultadoPromedio.textContent = "Resultado: " + redondeado;
}

function notaMasAlta() {
    const notaMaxima = Math.max(...notas);
    resultadoNotaAlta.textContent = "Resultado: " + notaMaxima;
}

function hayAplazados() {
    const hayAplazo = notas.some(nota => nota < notaMinima);
    const mensaje = hayAplazo ? "Sí" : "No";
    resultadoAplazados.textContent = "Resultado: " + mensaje;
}

listarNotas();
