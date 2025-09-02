document.addEventListener('DOMContentLoaded', function() {
    const cakeContainer = document.getElementById('cakeContainer');
    const infoOverlay = document.getElementById('infoOverlay');
    const closeInfoButton = document.getElementById('closeInfo');

    cakeContainer.addEventListener('click', function() {
        // Toggle the 'flipped' class on the cake-container
        cakeContainer.classList.toggle('flipped');
    });

    closeInfoButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Previne que o clique no botão feche e reabra instantaneamente
        cakeContainer.classList.remove('flipped');
    });

    // Opcional: Fechar ao clicar fora do overlay (se o overlay fosse um modal)
    // Para este design, o botão de fechar é mais intuitivo.
});