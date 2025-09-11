//Estas funciones son de suma, resta, multiplicacion y division//

const elementoNumero1 = document.getElementById("Numero1");
const elementoNumero2 = document.getElementById("Numero2");
const elementoContenido = document.getElementById("Contenido");

function hacerSuma() {
    const resultado = parseInt(elementoNumero1.value) + parseInt(elementoNumero2.value)
    elementoContenido.textContent = resultado
}

function hacerResta() {
    const resultado = parseInt(elementoNumero1.value) - parseInt(elementoNumero2.value)
    elementoContenido.textContent = resultado
}

function hacerMultiplicacion() {
    const resultado = parseInt(elementoNumero1.value) * parseInt(elementoNumero2.value)
    elementoContenido.textContent = resultado
}

function hacerDivision() {
    const resultado = parseInt(elementoNumero1.value) / parseInt(elementoNumero2.value)
    elementoContenido.textContent = resultado
}

//Estas funciones son de raíz y potencia//

function hacerRaiz() {
    const resultado = Math.sqrt(elementoNumero1.value)
    elementoContenido.textContent = resultado
}

function hacerPotencia() {
    const resultado = Math.pow(elementoNumero1.value, elementoNumero2.value)
    elementoContenido.textContent = resultado
}

//Estas funciones son de Absoluto y Aleatorio//

function numeroAbsoluto() {
    const textoActual = elementoContenido.textContent;
    const numero = Number(textoActual);
    const resultado = Math.abs(numero);
    elementoContenido.textContent = resultado || textoActual;
}

function numeroAleatorio() {
    const resultado = Math.random()
    elementoContenido.textContent = resultado
}

//Estas funciones son de Redondeo//

function redondearCercano() {
    const textoActual = elementoContenido.textContent;
    const numero = Number(textoActual);
    const resultado = Math.round(numero);
    elementoContenido.textContent = resultado || textoActual;
}

function redondearAbajo() {
    const textoActual = elementoContenido.textContent;
    const numero = Number(textoActual);
    const resultado = Math.floor(numero);
    elementoContenido.textContent = resultado || textoActual;
}

function redondearArriba() {
    const textoActual = elementoContenido.textContent;
    const numero = Number(textoActual);
    const resultado = Math.ceil(numero);
    elementoContenido.textContent = resultado || textoActual;
}