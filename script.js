document.addEventListener('DOMContentLoaded', function() {
    const conviteContainer = document.getElementById('conviteContainer');
    const cliqueAquiMsg = document.getElementById('cliqueAqui');

    conviteContainer.addEventListener('click', function() {
        // Adiciona ou remove a classe 'virado' para fazer a animação de virar
        this.classList.toggle('virado');

        // Esconde a mensagem "Clique aqui" para sempre depois do primeiro clique
        if (!cliqueAquiMsg.classList.contains('escondido')) {
            cliqueAquiMsg.classList.add('escondido');
        }
    });
});
