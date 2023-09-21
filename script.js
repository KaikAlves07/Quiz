// Função para verificar a resposta
function verificarResposta() {
    // Obtém o valor selecionado
    var respostaSelecionada = document.querySelector('input[name="opcao"]:checked');
    
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