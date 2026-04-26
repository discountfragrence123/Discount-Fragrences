// Add to cart functionality
function addToCart(productName, price) {
    alert(`Added ${productName} to cart - $${price}`);
    // In a real application, this would add the item to a shopping cart
}

// Contact form submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form values
    const name = event.target[0].value;
    const email = event.target[1].value;
    const message = event.target[2].value;
    
    // Simple validation
    if (name && email && message) {
        alert(`Thank you ${name}! Your message has been received. We'll contact you at ${email} soon.`);
        event.target.reset(); // Clear the form
    } else {
        alert('Please fill in all fields');
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});