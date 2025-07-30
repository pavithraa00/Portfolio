// Animate skill bars when in view
const bars = document.querySelectorAll('.bar span');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.getAttribute('data-width');
        }
    });
}, { threshold: 0.5 });

bars.forEach(bar => observer.observe(bar));
