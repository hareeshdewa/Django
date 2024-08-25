document.addEventListener('DOMContentLoaded', () => {
    const aboutPurposeSection = document.querySelector('.about-purpose');
    window.addEventListener('scroll', () => {
        const rect = aboutPurposeSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
            aboutPurposeSection.style.animation = 'fadeIn 1s ease-in-out';
        }
    });
});