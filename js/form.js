var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");

    var pacienteNovo = criandoPacientes(form);

    var pacienteTr = adicionandoTr(pacienteNovo)

    var tabelaPacientes = document.querySelector("#tabela-pacientes")

    tabelaPacientes.appendChild(pacienteTr)
})

function criandoPacientes(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente
}

function adicionandoTr(paciente) {
    var pacienteTr = document.createElement('tr')

    var tdNome = document.createElement('td')
    var tdPeso = document.createElement('td')
    var tdAltura = document.createElement('td')
    var tdGordura = document.createElement('td')
    var tdIMC = document.createElement('td')

    tdNome.textContent = paciente.nome;
    tdPeso.textContent = paciente.peso;
    tdAltura.textContent = paciente.altura;
    tdGordura.textContent = paciente.gordura;
    tdIMC.textContent = paciente.imc;

    pacienteTr.appendChild(tdNome)
    pacienteTr.appendChild(tdPeso)
    pacienteTr.appendChild(tdAltura)
    pacienteTr.appendChild(tdGordura)
    pacienteTr.appendChild(tdIMC)

    return pacienteTr;
}