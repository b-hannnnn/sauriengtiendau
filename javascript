const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -12% 0px'
});

revealElements.forEach(el => {
    revealObserver.observe(el);
});

const heroImage = document.querySelector('.hero-image');
if (heroImage) {
    heroImage.addEventListener('mousemove', event => {
        const rect = heroImage.getBoundingClientRect();
        const mouseX = (event.clientX - rect.left) / rect.width - 0.5;
        const mouseY = (event.clientY - rect.top) / rect.height - 0.5;
        heroImage.style.transform = `translate(${mouseX * 10}px, ${mouseY * 10}px)`;
    });

    heroImage.addEventListener('mouseleave', () => {
        heroImage.style.transform = 'translate(0, 0)';
    });
}

const sectionLinks = document.querySelectorAll('a[href^="#"]');
sectionLinks.forEach(link => {
    link.addEventListener('click', event => {
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#') && targetId.length > 1) {
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                event.preventDefault();
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});
