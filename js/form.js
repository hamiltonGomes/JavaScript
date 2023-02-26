var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement('tr')

    var tdNome = document.createElement('td')
    var tdPeso = document.createElement('td')
    var tdAltura = document.createElement('td')
    var tdGordura = document.createElement('td')
    var tdIMC = document.createElement('td')
    
    tdNome.textContent = nome
    tdPeso.textContent = peso
    tdAltura.textContent = altura
    tdGordura.textContent = gordura
    tdIMC.textContent = calculaIMC(peso, altura)

    pacienteTr.appendChild(tdNome)
    pacienteTr.appendChild(tdPeso)
    pacienteTr.appendChild(tdAltura)
    pacienteTr.appendChild(tdGordura)
    pacienteTr.appendChild(tdIMC)

    var tabelaPacientes = document.querySelector("#tabela-pacientes")

    tabelaPacientes.appendChild(pacienteTr)

})