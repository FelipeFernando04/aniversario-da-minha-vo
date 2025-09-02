document.addEventListener('DOMContentLoaded', function() {
    const cakeContainer = document.getElementById('cakeContainer');
    const closeInfoButton = document.getElementById('closeInfo');

    cakeContainer.addEventListener('click', function() {
        cakeContainer.classList.toggle('flipped');
    });

    closeInfoButton.addEventListener('click', function(event) {
        event.stopPropagation(); 
        cakeContainer.classList.remove('flipped');
    });
});
