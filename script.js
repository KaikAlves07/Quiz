let nome = window.prompt("Digite seu nome:")
window.alert("Bem vindo(a): " + nome)

// Função para verificar a resposta
function verificarResposta() {
    // Obtém o valor selecionado
    let respostaSelecionada = document.querySelector('input[name="opcao"]:checked');
    
    // Verifica se uma opção foi selecionada
    if (respostaSelecionada) {
        var resposta = respostaSelecionada.value;
        
        // Verifica se a resposta selecionada é a correta
        if (resposta === "Lord Voldemort") {
            document.getElementById("mensagem").innerHTML = "Você acertou!";
        } else {
            document.getElementById("mensagem").innerHTML = "Você errou.";
        }
    } else {
        document.getElementById("mensagem").innerHTML = "Por favor, selecione uma resposta.";
    }
}

// Associa a função ao clique do botão
document.getElementById("verificarResposta").addEventListener("click", verificarResposta);



function verificarResposta_a() {
   
    let respostaSelecionada_a = document.querySelector('input[name="opcao1"]:checked');
    
    
    if (respostaSelecionada_a) {
        var resposta_a = respostaSelecionada_a.value;
        
        
        if (resposta_a === "Gringotts") {
            document.getElementById("mensagem_a").innerHTML = "Você acertou!";
        } else {
            document.getElementById("mensagem_a").innerHTML = "Você errou.";
        }
    } else {
        document.getElementById("mensagem_a").innerHTML = "Por favor, selecione uma resposta.";
    }
}


document.getElementById("verificarResposta_a").addEventListener("click", verificarResposta_a);

