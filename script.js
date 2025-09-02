// Espera todo o conteúdo da página carregar
document.addEventListener('DOMContentLoaded', function() {

    // Encontra os elementos pelo ID que demos no HTML
    const botaoVerDetalhes = document.getElementById('botaoVerDetalhes');
    const detalhesFesta = document.getElementById('detalhesFesta');
    const botaoFechar = document.getElementById('botaoFechar');

    // O que acontece quando clicar no botão "Clique aqui"
    botaoVerDetalhes.addEventListener('click', function() {
        detalhesFesta.classList.add('visivel'); // Mostra os detalhes
    });

    // O que acontece quando clicar no botão "Fechar"
    botaoFechar.addEventListener('click', function() {
        detalhesFesta.classList.remove('visivel'); // Esconde os detalhes
    });

});
