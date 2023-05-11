function sumaNumeros() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = numero1 + numero2;
    document.getElementById('resultado').innerHTML = "El resultado de la suma es: " + resultado;
}

function restaNumeros() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = numero1 - numero2;
    document.getElementById('resultado').innerHTML = "El resultado de la resta es: " + resultado;
}

function multiplicaNumeros() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = numero1 * numero2;
    document.getElementById('resultado').innerHTML = "El resultado de la multiplicación es: " + resultado;
}

function divideNumeros() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = numero1 / numero2;
    document.getElementById('resultado').innerHTML = "El resultado de la división es: " + resultado;
}