function mostrarResultado() {
    var nombre = "Carlos";
    var edad = 30;
    var direccion = "Av. Independencia";
    var ciudad = "Buenos Aires";

    var resultado = "Mi nombre es " + nombre + ", tengo " + edad + " años y vivo en " + direccion + ", " + ciudad;
    document.getElementById("resultado").innerHTML = resultado;
}