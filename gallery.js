// Gallery page specific JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeGalleryAnimations();
    initializeGalleryStats();
    initializeAdvancedFiltering();
    initializeMasonry();
});

// Enhanced gallery animations
function initializeGalleryAnimations() {
    // Staggered animation for gallery items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                setTimeout(() => {
                    entry.target.classList.add('gallery-item-visible');
                }, delay);
            }
        });
    }, observerOptions);
    
    // Add initial classes and observe gallery items
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        item.classList.add('gallery-item-animated');
        item.style.animationDelay = `${index * 0.1}s`;
        galleryObserver.observe(item);
    });
    
    // Enhanced filter animation
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Animated statistics counter
function initializeGalleryStats() {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    animateCounter(stat);
                });
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.gallery-stats-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (target > 1000) {
            element.textContent = (current / 1000).toFixed(1) + 'K';
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Advanced filtering with animations
function initializeAdvancedFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active filter
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Animate items out
            galleryItems.forEach((item, index) => {
                const category = item.getAttribute('data-category');
                const shouldShow = filter === 'all' || category === filter;
                
                if (shouldShow) {
                    setTimeout(() => {
                        item.style.display = 'block';
                        item.classList.remove('gallery-item-hidden');
                        item.classList.add('gallery-item-show');
                    }, index * 50);
                } else {
                    item.classList.add('gallery-item-hidden');
                    setTimeout(() => {
                        if (item.classList.contains('gallery-item-hidden')) {
                            item.style.display = 'none';
                        }
                    }, 300);
                }
            });
        });
    });
}

// Masonry layout effect
function initializeMasonry() {
    const grid = document.querySelector('.gallery-grid');
    if (!grid) return;
    
    function resizeAllGridItems() {
        const allItems = grid.querySelectorAll('.gallery-item');
        allItems.forEach(item => {
            resizeGridItem(item);
        });
    }
    
    function resizeGridItem(item) {
        const grid = document.querySelector('.gallery-grid');
        const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
        const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
        const rowSpan = Math.ceil((item.querySelector('.gallery-item').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
        item.style.gridRowEnd = 'span ' + rowSpan;
    }
    
    // Apply masonry on load and resize
    window.addEventListener('load', resizeAllGridItems);
    window.addEventListener('resize', resizeAllGridItems);
    
    // Apply masonry when images load
    const images = grid.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            resizeGridItem(img.closest('.gallery-item'));
        });
    });
}

// Enhanced hover effects
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '';
    });
});

// Smooth scrolling for gallery navigation
function smoothScrollToGallery() {
    const gallerySection = document.querySelector('.gallery-main');
    if (gallerySection) {
        gallerySection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Loading animation for images
document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
        this.closest('.gallery-item').classList.add('image-loaded');
    });
    
    // Fallback for cached images
    if (img.complete) {
        img.style.opacity = '1';
        img.closest('.gallery-item').classList.add('image-loaded');
    }
});

// Performance optimization for scroll events
let ticking = false;

function updateScrollEffects() {
    const scrollTop = window.pageYOffset;
    const hero = document.querySelector('.gallery-hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrollTop * 0.3}px)`;
    }
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
});