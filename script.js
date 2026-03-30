// ============================================
// INNOVERAH - HR Consultancy Website Scripts
// ============================================

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// Contact Form Validation
function validateContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const alertDiv = document.getElementById('formAlert');
    
    let isValid = true;

    // Reset previous errors
    clearErrors();

    // Validate Name
    if (!nameInput.value.trim()) {
        showError('name', 'Name is required');
        isValid = false;
    } else if (nameInput.value.trim().length < 2) {
        showError('name', 'Name must be at least 2 characters');
        isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
        showError('message', 'Message is required');
        isValid = false;
    } else if (messageInput.value.trim().length < 10) {
        showError('message', 'Message must be at least 10 characters');
        isValid = false;
    }

    if (isValid) {
        // Show success message
        if (alertDiv) {
            alertDiv.className = 'alert alert-success show';
            alertDiv.textContent = 'Thank you! Your message has been sent successfully. We will get back to you soon.';
        }
        
        // Reset form
        form.reset();
        
        // Hide success message after 5 seconds
        setTimeout(function() {
            if (alertDiv) {
                alertDiv.classList.remove('show');
            }
        }, 5000);
        
        return false; // Prevent form submission (no backend)
    }

    return false; // Prevent form submission
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = field.parentElement.querySelector('.error');
    
    if (field) {
        field.classList.add('error-input');
    }
    
    if (errorDiv) {
        errorDiv.textContent = message;
        errorDiv.classList.add('show');
    }
}

function clearErrors() {
    const errorInputs = document.querySelectorAll('.error-input');
    const errorMessages = document.querySelectorAll('.error');
    
    errorInputs.forEach(input => {
        input.classList.remove('error-input');
    });
    
    errorMessages.forEach(error => {
        error.classList.remove('show');
    });
}

// Add event listener for form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            validateContactForm();
        });
    }
});

// Add hover effect enhancement for cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card, .service-card, .blog-card, .team-card, .client-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
});

// Scroll to top functionality (optional enhancement)
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll event listener for header shadow enhancement
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    }
});


