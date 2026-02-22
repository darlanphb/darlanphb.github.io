// Menu Responsivo
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('open');
        toggle.textContent = menu.classList.contains('open') ? '✕' : '☰';
    });
});

// Acordeão (para seções expansíveis)
const accordions = document.querySelectorAll('.accordion-toggle');
accordions.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const parent = toggle.parentElement;
        parent.classList.toggle('open');
    });
});

// Outras funções: Adicione aqui se precisar de carrossel (use vanilla JS ou biblioteca leve como Swiper se expandir).
