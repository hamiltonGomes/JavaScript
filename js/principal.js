var primeiroTitulo = document.querySelector("h1");
primeiroTitulo.textContent = "Aparecida Nutricionista"; // controlando o valor do conteúdo dentro da tag

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i <= pacientes.length; i++) {

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent; // ta pegando o valor da query especificada

    var tdImc = paciente.querySelector(".info-imc");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdPeso = paciente.querySelector(".info-peso");

    var alturaValido = true;
    var pesoValido = true;

    if (peso <= 0 || peso >= 1000) {
        pesoValido = false;
        tdPeso.textContent = "Peso inválido.";
        paciente.style.backgroundColor = "lightcoral";
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaValido = false;
        tdAltura.textContent = "Altura inválida.";
        paciente.classList.add("paciente-invalido"); //forma de atribuir a classe
    }

    if (alturaValido && pesoValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}
