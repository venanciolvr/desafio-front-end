document.addEventListener('DOMContentLoaded', () => {
    const simButton = document.querySelector('.sim');
    const naoButton = document.querySelector('.nao');
    const popupErro = document.getElementById('popup-erro');
    const popupAcerto = document.getElementById('popup-acerto');
    const closeButtons = document.querySelectorAll('.close-popup');

    simButton.addEventListener('click', () => {
        popupErro.classList.add('active');
    });

    naoButton.addEventListener('click', () => {
        popupAcerto.classList.add('active');
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            popupErro.classList.remove('active');
            popupAcerto.classList.remove('active');
        });
    });

    // Fecha popup ao clicar fora
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('popup')) {
            popupErro.classList.remove('active');
            popupAcerto.classList.remove('active');
        }
    });
}); 