const multiplicaPor2 = () => {
    const valor = parseFloat(prompt("Ingrese un número:"));
    const resultado = valor * 2;
    document.getElementById('resultado').innerHTML = `El resultado de la multiplicación es: ${resultado}`;
};

const divideEntre2 = () => {
    const valor = parseFloat(prompt("Ingrese un número:"));
    const resultado = valor / 2;
    document.getElementById('resultado').innerHTML = `El resultado de la división es: ${resultado}`;
};