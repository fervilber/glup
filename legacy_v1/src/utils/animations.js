export function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Select all elements with data-animate attribute
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el, index) => {
        // Add base class for preparation
        el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');

        // Add staggered delay if requested
        if (el.dataset.delay) {
            el.style.transitionDelay = `${el.dataset.delay}ms`;
        }

        observer.observe(el);
    });

    // Custom class for visible state
    // We handle this by adding a global style or checking for the class in CSS? 
    // Tailwind approach: add utility classes via JS when visible.
    // Better approach: use a specific class that overrides the hidden state.

    // Logic update:
    // Initial state: opacity-0 translate-y-8
    // Visible state: opacity-100 translate-y-0
}
