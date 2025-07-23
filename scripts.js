const modeToggle = document.getElementById('mode-toggle');

modeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    document.querySelector('header').classList.toggle('light-mode');
    document.querySelector('footer').classList.toggle('light-mode');
    document.querySelector('.hero').classList.toggle('light-mode');
    document.querySelector('.why-steam').classList.toggle('light-mode');
    document.querySelectorAll('.feature').forEach((el) => {
        el.classList.toggle('light-mode');
    });
});
