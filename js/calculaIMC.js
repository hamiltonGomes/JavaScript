var primeiroTitulo = document.querySelector("h1");
primeiroTitulo.textContent = 'Aparecida Nutricionista!'; // controlando o valor do conteúdo dentro da tag

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent; // ta pegando o valor da query especificada

    var tdImc = paciente.querySelector(".info-imc");

    var alturaValido = true;
    var pesoValido = true;

    if (peso <= 0 || peso >= 1000) {
        pesoValido = false;
        tdPeso.textContent = "Peso inválido.";
        paciente.style.backgroundColor = "lightcoral";
    }

    else if (altura <= 0 || altura >= 3.00) {
        alturaValido = false;
        tdAltura.textContent = "Altura inválida.";
        paciente.classList.add("paciente-invalido"); //forma de atribuir a classe
    }

    else if (alturaValido && pesoValido) {
        tdImc.textContent = calculaIMC(peso, altura);
    }
}

function calculaIMC(peso, altura) {
    var imc = peso / (altura * altura);

    return imc.toFixed(2);
}