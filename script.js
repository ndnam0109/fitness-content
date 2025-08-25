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

// Header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.98)';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .category-card, .screenshot');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Mobile menu toggle (if needed for smaller screens)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('mobile-active');
}

// Update App Store link when app is published
function updateAppStoreLink(appId) {
    const appStoreLinks = document.querySelectorAll('.app-store-button, .primary-button');
    const appStoreUrl = `https://apps.apple.com/app/id${appId}`;
    
    appStoreLinks.forEach(link => {
        link.href = appStoreUrl;
    });
}

// Add loading state for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        // If image is already loaded
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// Copy email to clipboard function (for contact)
function copyEmail() {
    navigator.clipboard.writeText('skateboardfitness@gmail.com').then(function() {
        // Show temporary success message
        const originalText = event.target.textContent;
        event.target.textContent = 'Email copied!';
        setTimeout(() => {
            event.target.textContent = originalText;
        }, 2000);
    });
}

// Analytics tracking (placeholder - implement when needed)
function trackEvent(eventName, properties = {}) {
    // Implement analytics tracking here when ready
    console.log('Event tracked:', eventName, properties);
}

// Track download button clicks
document.addEventListener('click', function(e) {
    if (e.target.closest('.app-store-button, .primary-button')) {
        trackEvent('download_button_click', {
            location: e.target.closest('section').id || 'unknown'
        });
    }
});