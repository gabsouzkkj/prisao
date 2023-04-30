var intervalId = '';
var nomeProcurado = document.getElementById("procurado_input").value; 

function atualizarTime() {
    if (intervalId !== undefined) {
        clearInterval(intervalId);
    }

    nomeProcurado = document.getElementById("procurado_input").value;
    
    if (nomeProcurado !== '') {
        tempoMinutos = document.getElementById("tempo_input").value;

        if (tempoMinutos > 0) {
            tempoSegundos = tempoMinutos * 60;
            cronometroElemento = document.getElementById("resultado_atual");

            function contador() {
                tempoSegundos--;
                cronometroElemento.innerHTML = nomeProcurado + ' está sendo procurado. Você tem até ' + formatarTime(tempoSegundos) + ' para encontra-lo!';

                if (tempoSegundos === 0) {
                    clearInterval(intervalId);
                }
            }

            intervalId = setInterval(contador, 1000);
        } else {
            alert('Por favor, você precisa adicionar uma quantidade de tempo, não apenas o nome!');
            document.getElementById("resultado_atual").innerHTML = "";
        }
    } else {
        alert('Por favor, informe o nome do Procurado antes de iniciar o cronometro!');
        document.getElementById("resultado_atual").innerHTML = "";
    }
}

function limparCamp() {
    document.getElementById("procurado_input").value = "";
    document.getElementById("tempo_input").value = "";

    clearInterval(intervalId);

    document.getElementById("resultado_atual").innerHTML = "";
}

function formatarTime(segundos) {
    // horas = Math.floor(segundos / 3600); -- Caso você quiser usar o da hora também biston, só substituir o return por: return formatarNum(horas) + ":" +  formatarNum(minutos) + ":" + formatarNum(segundos);
    minutos = Math.floor((segundos % 3600) / 60);
    segundos = segundos % 60;

     return formatarNum(minutos) + ":" + formatarNum(segundos);
}

function formatarNum(numero) {
    return numero.toString().padStart(2, '0');
}
