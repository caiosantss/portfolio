// Language Toggle
const langButtons = document.querySelectorAll('.lang-btn');
const ptElements = document.querySelectorAll('.lang-pt');
const enElements = document.querySelectorAll('.lang-en');

langButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lang = button.getAttribute('data-lang');
        langButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        if (lang === 'pt') {
            ptElements.forEach(el => el.style.display = 'block');
            enElements.forEach(el => el.style.display = 'none');
        } else {
            ptElements.forEach(el => el.style.display = 'none');
            enElements.forEach(el => el.style.display = 'block');
        }
    });
});

// Animation on Scroll
const animatedElements = document.querySelectorAll('.delayed-animation');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

animatedElements.forEach(element => observer.observe(element));