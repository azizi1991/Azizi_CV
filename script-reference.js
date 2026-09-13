// Portfolio JavaScript - Interactive Features

// Global Variables
let currentLanguage = 'en'; // Default language is Persian
let currentFilter = 'all'; // Default project filter

// Project Data - All your projects with bilingual content
const projects = [
    {
        id: 1,
        title: {
            fa: 'QR Menu Manager',
            en: 'QR Menu Manager'
        },
        description: {
            fa: 'Restaurant menu management system with QR codes, online ordering and menu management capabilities',
            en: 'Restaurant menu management system with QR codes, online ordering and menu management capabilities'
        },
        mainImage: 'assets/projects/qr-menu.jpg',
        images: [
            'assets/projects/qr-menu.jpg',
            'assets/projects/qr-menu-2.jpg',
            'assets/projects/qr-menu-3.jpg',
        ],
        category: 'mvp',
        tags: ['MVP', 'QR Code','Laravel', 'Vue.js', 'MySQL'],
        demoLink: 'https://qrmenu.rashasoftware.ir/',
        githubLink: 'https://qrmenu.rashasoftware.ir/menu/',
        technologies: ['Laravel', 'Vue.js', 'MySQL']
    },
    {
        id: 2,
        title: {
            fa: 'AI Voice Translator',
            en: 'AI Voice Translator'
        },
        description: {
            fa: 'Smart voice translator with speech recognition and real-time translation to multiple languages',
            en: 'Smart voice translator with speech recognition and real-time translation to multiple languages'
        },
        mainImage: 'assets/projects/ai-voice.jpg',
        images: [
            'assets/projects/ai-voice.jpg',
        ],
        category: 'mvp',
        tags: ['AI', 'Voice', 'Translation' ,'Python', 'OpenAI', 'Speech Recognition'],
        demoLink: 'https://azizi1991.github.io/FA-EN/',
        technologies: ['Python', 'OpenAI', 'Speech Recognition']
    },
    {
        id: 3,
        title: {
            fa: 'Migrate AI Assistant',
            en: 'Migrate AI Assistant'
        },
        description: {
            fa: 'Smart assistant for data migration and transfer using artificial intelligence',
            en: 'Smart assistant for data migration and transfer using artificial intelligence'
        },
        mainImage: 'assets/projects/migrate-ai.jpg',
        images: [
            'assets/projects/migrate-ai.jpg',
            'assets/projects/migrate-ai-2.jpg',
            'assets/projects/migrate-ai-3.jpg'
        ],
        category: 'fullstack',
        tags: ['AI', 'Python','SQLite','FastAPI','ReportLab',  'Migration','Vue 3 + Vite', 'Data Transfer'],
        technologies: ['Python (3.8+)', 'FastAPI', 'SQLite/MySQL', 'ReportLab', 'Vue 3 + Vite']
    },
    {
        id: 4,
        title: {
            fa: 'MomTime',
            en: 'MomTime'
        },
        description: {
            fa: 'Time management app for mothers with scheduling and reminder capabilities',
            en: 'Time management app for mothers with scheduling and reminder capabilities'
        },
        mainImage: 'assets/projects/momtime.jpg',
        images: [
            'assets/projects/momtime.jpg',
            'assets/projects/momtime-3.jpg',
            'assets/projects/momtime-4.jpg',
            'assets/projects/momtime-5.jpg'

        ],
        category: 'mvp',
        tags: ['MVP','MySQL', 'Expo/React Native','TypeScript','Mobile App', 'Time Management'],
        demoLink: 'https://demo-momtime.example.com',
        githubLink: 'https://github.com/username/momtime',
        technologies: ['Expo/React Native', 'TypeScript', 'React Navigation', 'Async Storage', 'Node.js + Express', 'MySQL (Sequelize)']
    },
    {
        id: 5,
        title: {
            fa: 'Reserve Script',
            en: 'Reserve Script'
        },
        description: {
            fa: 'Online reservation script for hotels and accommodation centers',
            en: 'Online reservation script for hotels and accommodation centers'
        },
        mainImage: 'assets/projects/reserve-script.jpg',
        images: [
            'assets/projects/reserve-script.jpg',
            'assets/projects/reserve-script-2.jpg',
            'assets/projects/reserve-script-3.jpg'
        ],
        category: 'fullstack',
        tags: ['PHP', 'MySQL', 'JavaScript'],
        demoLink: 'https://reserve.rashasoftware.ir/',
        githubLink: 'https://github.com/username/reserve-script',
        technologies: ['PHP', 'MySQL', 'JavaScript']
    },
    {
        id: 6,
        title: {
            fa: 'STP Analytics Tool',
            en: 'STP Analytics Tool'
        },
        description: {
            fa: 'STP data analytics tool with interactive dashboard and advanced reporting',
            en: 'STP data analytics tool with interactive dashboard and advanced reporting'
        },
        mainImage: 'assets/projects/stp-analytics.jpg',
        images: [
            'assets/projects/stp-analytics.jpg',
        ],
        category: 'fullstack',
        tags: ['Laravel', 'Vue.js', 'Chart.js', 'Analytics', 'Dashboard'],
        demoLink: 'https://demo-stp-analytics.example.com',
        githubLink: 'https://github.com/username/stp-analytics',
        technologies: ['Laravel', 'Vue.js', 'Chart.js']
    },
    {
        id: 7,
        title: {
            fa: 'InjaUnja - Iranian Community Platform in Europe',
            en: 'InjaUnja - Iranian Community Platform in Europe'
        },
        description: {
            fa: 'Frontend technical development of a community platform for Iranians residing in Europe using Laravel, Vue.js, and MySQL to build a scalable, secure, and high-performance application. Optimizing user experience with focus on mobile-first design and accessibility.',
            en: 'Frontend technical development of a community platform for Iranians residing in Europe using Laravel, Vue.js, and MySQL to build a scalable, secure, and high-performance application. Optimizing user experience with focus on mobile-first design and accessibility.'
        },
        mainImage: 'assets/projects/injaunja.jpg',
        images: [
            'assets/projects/injaunja.jpg',
            'assets/projects/injaunja2.jpg',

        ],
        category: 'fullstack',
        tags: ['Laravel', 'Vue.js', 'MySQL', 'UX/UI Design', 'Figma', 'Mobile-First', 'Community Platform'],
        demoLink: 'https://demo-injaunja.example.com',
        githubLink: 'https://github.com/username/injaunja',
        technologies: ['Laravel', 'Vue.js', 'MySQL', 'Figma', 'UX/UI Design', 'Mobile Optimization']
    },
   
    {
        id: 9,
        title: {
            fa: 'School Management System - 40% Reduction in Administrative Work',
            en: 'School Management System - 40% Reduction in Administrative Work'
        },
        description: {
            fa: 'Design and development of a comprehensive school management system aimed at reducing administrative workload by 40%. Includes student, teacher, class, grade management and reporting. Optimization of administrative processes and increased educational system efficiency.',
            en: 'Design and development of a comprehensive school management system aimed at reducing administrative workload by 40%. Includes student, teacher, class, grade management and reporting. Optimization of administrative processes and increased educational system efficiency.'
        },
        mainImage: 'assets/projects/school-system.jpg',
        images: [
            'assets/projects/school-system.jpg',
        ],
        category: 'fullstack',
        tags: ['School Management', 'Administrative System', 'Database Design', 'Process Optimization', 'Educational Technology'],
        githubLink: 'https://github.com/username/school-management',
        technologies: ['Laravel', 'Vue.js', 'MySQL', 'Process Optimization', 'Educational Technology', 'Database Design']
    },
    {
        id: 10,
        title: {
            fa: 'Telegram Bots - Booking and Customer Support',
            en: 'Telegram Bots - Booking and Customer Support'
        },
        description: {
            fa: 'Development of Telegram bots for booking system and customer support. Includes automated booking bot, 24/7 support bot, and notification bot. Improving customer experience and reducing support team workload.',
            en: 'Development of Telegram bots for booking system and customer support. Includes automated booking bot, 24/7 support bot, and notification bot. Improving customer experience and reducing support team workload.'
        },
        mainImage: 'assets/projects/telegram-bots.jpg',
        images: [
            'assets/projects/telegram-bots.jpg',
        ],
        category: 'mvp',
        tags: ['Telegram Bot', 'Automation', 'Customer Support', 'Booking System', 'API Integration'],
        githubLink: 'https://github.com/username/telegram-bots',
        technologies: ['Python', 'Telegram Bot API', 'Automation', 'Customer Support', 'API Integration']
    }
];

// DOM Elements
const languageSwitch = document.querySelector('.language-switch');
const langText = document.querySelector('.lang-text');
const htmlElement = document.documentElement;
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectsGrid = document.getElementById('projects-grid');
const contactForm = document.getElementById('contact-form');

// Initialize the portfolio
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio initializing...');
    console.log('Projects data:', projects);
    console.log('Projects grid element:', projectsGrid);
    
    // Log all project categories for debugging
    const categories = [...new Set(projects.map(project => project.category))];
    console.log('Available project categories:', categories);
    
    initializePortfolio();
    setupEventListeners();
    loadProjects();
    setupScrollAnimations();
});

// Initialize Portfolio
function initializePortfolio() {
    // Set initial language
    setLanguage(currentLanguage);
    
    // Set active navigation based on current section
    updateActiveNavigation();
    
    // Load projects with current filter
    filterProjects(currentFilter);
}

// Setup Event Listeners
function setupEventListeners() {
    // Language switch
    if (languageSwitch) {
        languageSwitch.addEventListener('click', toggleLanguage);
    }
    
    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Project filters
    filterBtns.forEach(btn => {
        btn.addEventListener('click', handleFilterClick);
    });
    
    // Contact form
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
    
    // Smooth scrolling for anchor links
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
    
    // Scroll event for navigation highlighting
    window.addEventListener('scroll', updateActiveNavigation);
}

// Language Management
function toggleLanguage() {
    currentLanguage = currentLanguage === 'fa' ? 'en' : 'fa';
    setLanguage(currentLanguage);
}

function setLanguage(lang) {
    currentLanguage = lang;
    
    // Update HTML direction
    htmlElement.setAttribute('dir', lang === 'fa' ? 'rtl' : 'ltr');
    htmlElement.setAttribute('lang', lang === 'fa' ? 'fa' : 'en');
    
    // Update language switch button
    if (langText) {
        langText.textContent = lang === 'fa' ? 'EN' : 'FA';
    }
    
    // Update all translatable elements
    updateAllTexts();
    
    // Reload projects with new language
    loadProjects();
    
    // Store language preference
    localStorage.setItem('portfolio-language', lang);
}

function updateAllTexts() {
    // Update all elements with data-fa and data-en attributes
    const translatableElements = document.querySelectorAll('[data-fa][data-en]');
    
    translatableElements.forEach(element => {
        const faText = element.getAttribute('data-fa');
        const enText = element.getAttribute('data-en');
        
        if (currentLanguage === 'fa') {
            element.textContent = faText;
        } else {
            element.textContent = enText;
        }
    });
}

// Mobile Menu Management
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
}

function handleNavigation(e) {
    // Remove active class from all nav links
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Add active class to clicked link
    e.target.classList.add('active');
    
    // Close mobile menu if open
    if (navMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
}

// Navigation Active State Management
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Project Management
function loadProjects() {
    console.log('Loading projects...');
    console.log('Current filter:', currentFilter);
    console.log('Projects grid element:', projectsGrid);
    
    if (!projectsGrid) {
        console.error('Projects grid element not found!');
        return;
    }
    
    projectsGrid.innerHTML = '';
    
    const filteredProjects = filterProjects(currentFilter);
    console.log('Filtered projects:', filteredProjects);
    console.log('Number of projects to display:', filteredProjects.length);
    
    filteredProjects.forEach((project, index) => {
        console.log(`Creating project ${index + 1}:`, project.title);
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
    
    console.log('Projects loaded successfully');
}

function filterProjects(filter) {
    currentFilter = filter;
    
    if (filter === 'all') {
        return projects;
    }
    
    const filteredProjects = projects.filter(project => project.category === filter);
    console.log(`Filtering for category "${filter}":`, filteredProjects);
    return filteredProjects;
}

function handleFilterClick(e) {
    const filter = e.target.getAttribute('data-filter');
    console.log('Filter clicked:', filter);
    
    // Update active filter button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Filter and reload projects
    currentFilter = filter;
    loadProjects();
}

function createProjectCard(project) {
    console.log('Creating project card for:', project.title);
    
    const card = document.createElement('div');
    card.className = 'project-card fade-in';
    
    const title = currentLanguage === 'fa' ? project.title.fa : project.title.en;
    const description = currentLanguage === 'fa' ? project.description.fa : project.description.en;
    
    // Create gallery HTML
    const galleryHTML = createProjectGallery(project);
    
    card.innerHTML = `
        <div class="project-gallery">
            ${galleryHTML}
        </div>
        <div class="project-content">
            <h3 class="project-title">${title}</h3>
            <p class="project-description">${description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.demoLink}" class="project-link demo" target="_blank">
                    ${currentLanguage === 'fa' ? 'View Demo' : 'View Demo'}
                </a>
                ${project.githubLink ? `
                    <a href="${project.githubLink}" class="project-link github" target="_blank">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    // Add gallery functionality
    setupProjectGallery(card, project);
    
    return card;
}

// Create project gallery HTML
function createProjectGallery(project) {
    if (!project.images || project.images.length === 0) {
        return `<img src="${project.mainImage || 'assets/projects/placeholder.jpg'}" alt="Project Image" class="project-image" onerror="this.src='assets/projects/placeholder.jpg'">`;
    }
    
    const mainImage = project.images[0];
    const thumbnails = project.images.slice(1, 4); // Show max 3 thumbnails
    
    let galleryHTML = `
        <div class="project-main-image">
            <img src="${mainImage}" alt="Project Main Image" class="project-image" onerror="this.src='assets/projects/placeholder.jpg'">
        </div>
    `;
    
    if (thumbnails.length > 0) {
        galleryHTML += `
            <div class="project-thumbnails">
                ${thumbnails.map((img, index) => `
                    <img src="${img}" alt="Project Screenshot ${index + 2}" class="project-thumbnail" onerror="this.src='assets/projects/placeholder.jpg'">
                `).join('')}
            </div>
        `;
    }
    
    return galleryHTML;
}

// Setup project gallery functionality
function setupProjectGallery(card, project) {
    if (!project.images || project.images.length <= 1) return;
    
    const mainImage = card.querySelector('.project-main-image img');
    const thumbnails = card.querySelectorAll('.project-thumbnail');
    
    // Add click event to thumbnails to change main image
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            // Update main image
            mainImage.src = thumbnail.src;
            mainImage.alt = thumbnail.alt;
            
            // Add active class to clicked thumbnail
            thumbnails.forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        });
    });
    
    // Add hover effect to show image count
    const gallery = card.querySelector('.project-gallery');
    if (gallery) {
        gallery.addEventListener('mouseenter', () => {
            if (project.images.length > 1) {
                showImageCounter(gallery, project.images.length);
            }
        });
        
        gallery.addEventListener('mouseleave', () => {
            hideImageCounter(gallery);
        });
    }
}

// Show image counter overlay
function showImageCounter(gallery, totalImages) {
    let counter = gallery.querySelector('.image-counter');
    if (!counter) {
        counter = document.createElement('div');
        counter.className = 'image-counter';
        counter.innerHTML = `
            <i class="fas fa-images"></i>
            <span>${totalImages} تصویر</span>
        `;
        gallery.appendChild(counter);
    }
    counter.style.opacity = '1';
}

// Hide image counter overlay
function hideImageCounter(gallery) {
    const counter = gallery.querySelector('.image-counter');
    if (counter) {
        counter.style.opacity = '0';
    }
}

// Contact Form Handling
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Basic validation
    if (!name || !email || !message) {
        showNotification(
            currentLanguage === 'fa' ? 'Please fill in all fields' : 'Please fill in all fields',
            'error'
        );
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification(
            currentLanguage === 'fa' ? 'Invalid email address' : 'Invalid email address',
            'error'
        );
        return;
    }
    
    // Show loading notification
    showNotification(
        currentLanguage === 'fa' ? 'Sending message...' : 'Sending message...',
        'info'
    );
    
    // Send email using EmailJS
    sendEmail(name, email, message);
}

// Email sending function using EmailJS
function sendEmail(name, email, message) {
    // Initialize EmailJS (you need to add EmailJS script to your HTML)
    if (typeof emailjs !== 'undefined') {
        emailjs.init("a0jTcKnkplvtwbqz7"); // Replace with your EmailJS user ID
        
        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            to_name: "Zahra Azizi"
        };

        emailjs.send('service_76oykuo', 'template_1t60frn', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                showNotification(
                    currentLanguage === 'fa' ? 'Your message has been sent successfully' : 'Your message has been sent successfully',
                    'success'
                );
                // Reset form
                document.getElementById('contact-form').reset();
            }, function(error) {
                console.log('FAILED...', error);
                showNotification(
                    currentLanguage === 'fa' ? 'Error sending message. Please try again' : 'Error sending message. Please try again.',
                    'error'
                );
            });
    } else {
        // Fallback: Open email client with pre-filled data
        const subject = encodeURIComponent('New Message from Portfolio | New Message from Portfolio');
        const body = encodeURIComponent(`نام: ${name}\nایمیل: ${email}\nپیام:\n${message}`);
        const mailtoLink = `mailto:azizizahra6870@gmail.com?subject=${subject}&body=${body}`;
        
        window.open(mailtoLink);
        
        showNotification(
            currentLanguage === 'fa' ? 'Your email client opened. Please send the message' : 'Your email client opened. Please send the message.',
            'success'
        );
        
        // Reset form
        document.getElementById('contact-form').reset();
    }
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.backgroundColor = '#10b981';
            break;
        case 'error':
            notification.style.backgroundColor = '#ef4444';
            break;
        case 'warning':
            notification.style.backgroundColor = '#f59e0b';
            break;
        default:
            notification.style.backgroundColor = '#3b82f6';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle scroll events
const throttledScrollHandler = debounce(updateActiveNavigation, 100);
window.addEventListener('scroll', throttledScrollHandler);

// Load saved language preference
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('portfolio-language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
        setLanguage(currentLanguage);
    }
});

// Add loading animation for images
function preloadImages() {
    const imageUrls = [
        'assets/profile.jpg',
        'assets/about.jpg'
    ];
    
    // Add all project images
    projects.forEach(project => {
        if (project.images && project.images.length > 0) {
            imageUrls.push(...project.images);
        } else if (project.mainImage) {
            imageUrls.push(project.mainImage);
        }
    });
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize image preloading
preloadImages();

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Escape key to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleMobileMenu();
    }
    
    // Language switch with Ctrl+L
    if (e.ctrlKey && e.key === 'l') {
        e.preventDefault();
        toggleLanguage();
    }
});

// Add touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - could be used for next project
            console.log('Swipe left detected');
        } else {
            // Swipe right - could be used for previous project
            console.log('Swipe right detected');
        }
    }
}

// Performance optimization: Lazy load images
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', setupLazyLoading);

// Force reload projects after a short delay to ensure DOM is ready
setTimeout(() => {
    console.log('Force reloading projects...');
    loadProjects();
}, 1000);

// Certificate Modal Functionality
function setupCertificateModal() {
    const modal = document.getElementById('certModal');
    const modalImg = document.getElementById('modalCertImg');
    const closeBtn = document.querySelector('.cert-modal-close');
    const certificateImages = document.querySelectorAll('.cert-img');

    // Open modal when certificate image is clicked
    certificateImages.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close modal when close button is clicked
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
}

// Initialize certificate modal when DOM is loaded
document.addEventListener('DOMContentLoaded', setupCertificateModal);

// Force certificate image sizing with JavaScript
function forceCertificateImageSizing() {
    const certificateImages = document.querySelectorAll('.cert-img');
    
    certificateImages.forEach(img => {
        // Force specific dimensions
        img.style.maxWidth = '250px';
        img.style.maxHeight = '150px';
        img.style.width = '250px';
        img.style.height = '150px';
        img.style.objectFit = 'contain';
        img.style.background = 'rgba(255, 255, 255, 0.1)';
        img.style.borderRadius = '8px';
        
        // Add responsive sizing
        if (window.innerWidth <= 768) {
            img.style.maxWidth = '200px';
            img.style.maxHeight = '120px';
            img.style.width = '200px';
            img.style.height = '120px';
            img.style.objectFit = 'contain';
        }
        
        if (window.innerWidth <= 480) {
            img.style.maxWidth = '150px';
            img.style.maxHeight = '100px';
            img.style.width = '150px';
            img.style.height = '100px';
            img.style.objectFit = 'contain';
        }
    });
}

// Apply sizing on load and resize
document.addEventListener('DOMContentLoaded', forceCertificateImageSizing);
window.addEventListener('resize', forceCertificateImageSizing);

// Apply sizing after a delay to ensure all images are loaded
setTimeout(forceCertificateImageSizing, 2000); 