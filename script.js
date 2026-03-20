// Global Variables
let currentSection = 'home';
let isAnimating = false;
let particles = [];
let mouseX = 0;
let mouseY = 0;

// DOM Elements
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
const loadingScreen = document.getElementById('loading-screen');
const particlesContainer = document.getElementById('particles');
const cursorTrail = document.querySelector('.cursor-trail');

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeWebsite();
});

// Main initializer
function initializeWebsite() {
    setupLoadingScreen();
    setupNavigation();
    setupParticles();
    setupTypingEffect();
    setupScrollEffects();
    setupThemeToggle();
    setupFormHandling();
    setupCursorTrail();
    setupAnimations();
    setupMobileMenu();
    setupProjectFilters();
    setupCertificationFilters();
    setupSkillBars();
    setupStatsCounter();
    setupIntersectionObserver();
}

// Loading Screen
function setupLoadingScreen() {
    const progressBar = document.querySelector('.progress-bar-loading');

    // If loading screen elements are missing, fail open
    if (!loadingScreen || !progressBar) {
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
        startHomeAnimations();
        return;
    }

    let progress = 0;
    const loadingInterval = setInterval(() => {
        progress += Math.random() * 10;
        progressBar.style.width = Math.min(progress, 100) + '%';

        if (progress >= 100) {
            clearInterval(loadingInterval);
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    startHomeAnimations();
                }, 500);
            }, 500);
        }
    }, 100);
}

// Navigation Setup
function setupNavigation() {
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPage = link.getAttribute('data-page');
            navigateToSection(targetPage);
        });
    });

    // Button navigation (e.g., hero buttons)
    document.querySelectorAll('[data-page]').forEach(btn => {
        if (!btn.classList.contains('nav-link')) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetPage = btn.getAttribute('data-page');
                navigateToSection(targetPage);
            });
        }
    });
}

// Section navigation handler
function navigateToSection(sectionId) {
    if (isAnimating || !sectionId) return;
    const targetSection = document.getElementById(sectionId);
    if (!targetSection) return;

    isAnimating = true;

    // Update visible section
    sections.forEach(section => {
        section.classList.remove('active');
    });
    targetSection.classList.add('active');

    // Update active nav link
    navLinks.forEach(link => {
        const page = link.getAttribute('data-page');
        if (page === sectionId) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Trigger section-specific animations
    triggerSectionAnimations(sectionId);

    setTimeout(() => {
        isAnimating = false;
    }, 600);
}

// Simple particles setup (no-op placeholder)
function setupParticles() {
    // Particle background effect disabled in this version.
}

// Typing Effect
function setupTypingEffect() {
    const typingText = document.getElementById('typing-text');
    const texts = [
        'Full Stack Developer',
        'AI/ML Engineer',
        'Cloud Engineer',
        'Cyber Security Analyst'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentText.length) {
            setTimeout(() => isDeleting = true, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }
        
        const speed = isDeleting ? 50 : 100;
        setTimeout(typeEffect, speed);
    }
    
    typeEffect();
}

// Cursor Trail
function setupCursorTrail() {
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursorTrail.style.left = mouseX + 'px';
        cursorTrail.style.top = mouseY + 'px';
    });
}

// Theme Toggle
function setupThemeToggle() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Mobile Menu
function setupMobileMenu() {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Project Filters
function setupProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectsCloudSubfilter = document.getElementById('projectsCloudSubfilter');
    const projectsSubfilterBtns = document.querySelectorAll('.projects-subfilter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show/hide cloud subfilter
            if (filter === 'cloud') {
                projectsCloudSubfilter.style.display = 'flex';
                
                // Reset subfilter to AWS by default
                projectsSubfilterBtns.forEach(b => b.classList.remove('active'));
                projectsSubfilterBtns[0].classList.add('active'); // Activate AWS button
                
                // Show only AWS projects by default
                projectCards.forEach(card => {
                    if (card.getAttribute('data-category') === 'cloud') {
                        const provider = card.getAttribute('data-cloud-provider');
                        if (provider === 'aws') {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'scale(1)';
                            }, 100);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'scale(0.8)';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            } else {
                projectsCloudSubfilter.style.display = 'none';
                // Reset subfilter buttons
                projectsSubfilterBtns.forEach(b => b.classList.remove('active'));
                projectsSubfilterBtns[0].classList.add('active'); // Keep AWS as default for next time
                
                // Regular filtering for non-cloud categories
                projectCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            }
        });
    });
    
    // Projects cloud subfilter functionality
    projectsSubfilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const subfilter = btn.getAttribute('data-subfilter');
            
            projectsSubfilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter cloud projects by provider
            projectCards.forEach(card => {
                if (card.getAttribute('data-category') === 'cloud') {
                    const provider = card.getAttribute('data-cloud-provider');
                    if (provider === subfilter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
}

// Certification Filters
function setupCertificationFilters() {
    const filterBtns = document.querySelectorAll('.cert-filter-btn');
    const certCards = document.querySelectorAll('.certification-card');
    const cloudSubfilter = document.getElementById('cloudSubfilter');
    const subfilterBtns = document.querySelectorAll('.cert-subfilter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show/hide cloud subfilter
            if (filter === 'cloud') {
                cloudSubfilter.style.display = 'flex';
                
                // Reset subfilter to AWS by default
                subfilterBtns.forEach(b => b.classList.remove('active'));
                subfilterBtns[0].classList.add('active'); // Activate AWS button
                
                // Show only AWS certifications by default
                certCards.forEach(card => {
                    if (card.getAttribute('data-category') === 'cloud') {
                        const provider = card.getAttribute('data-cloud-provider');
                        if (provider === 'aws') {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'scale(1)';
                            }, 100);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'scale(0.8)';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            } else {
                cloudSubfilter.style.display = 'none';
                // Reset subfilter buttons
                subfilterBtns.forEach(b => b.classList.remove('active'));
                subfilterBtns[0].classList.add('active'); // Keep AWS as default for next time
                
                // Regular filtering for non-cloud categories
                certCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                });
            }
        });
    });
    
    // Cloud subfilter functionality
    subfilterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const subfilter = btn.getAttribute('data-subfilter');
            
            subfilterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter cloud certifications by provider
            certCards.forEach(card => {
                if (card.getAttribute('data-category') === 'cloud') {
                    const provider = card.getAttribute('data-cloud-provider');
                    if (provider === subfilter) {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'scale(1)';
                        }, 100);
                    } else {
                        card.style.opacity = '0';
                        card.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            card.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });
    
    // Setup certificate image modal functionality
    setupCertificateModal();
}

// Certificate Modal for Expanded View
function setupCertificateModal() {
    // Create modal element if it doesn't exist
    let modal = document.getElementById('cert-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'cert-modal';
        modal.className = 'cert-modal';
        modal.innerHTML = `
            <span class="cert-modal-close">&times;</span>
            <img class="cert-modal-content" id="cert-modal-img" alt="Certificate">
        `;
        document.body.appendChild(modal);
    }
    
    const modalImg = document.getElementById('cert-modal-img');
    const closeBtn = modal.querySelector('.cert-modal-close');
    
    // Add click handlers to all certificate images (including minimal style and badge images)
    document.querySelectorAll('.cert-image, .cert-minimal-image, .cert-badge-image').forEach(img => {
        img.addEventListener('click', function() {
            modal.classList.add('active');
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });
    
    // Close modal when clicking the X button
    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.style.overflow = ''; // Restore scrolling
        }
    });
}

// Skill Progress Bars
function setupSkillBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.progress-bar');
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 500);
                });
            }
        });
    });
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// Stats Counter
function setupStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
            }
        });
    });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = Math.floor(current);
        
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        }
    }, 16);
}

// Form Handling
function setupFormHandling() {
    const form = document.getElementById('contact-form');
    const inputs = form.querySelectorAll('input, textarea');
    
    // Floating labels
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (!input.value) {
                input.parentElement.classList.remove('focused');
            }
        });
        
        // Check if already has value
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
    
    // Form submission
    form.addEventListener('submit', () => {
        const submitBtn = form.querySelector('.form-submit');

        submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        // Let Formspree handle submission
    });
}

    // Form submission
    // Form submission
    form.addEventListener('submit', () => {
        const submitBtn = form.querySelector('.form-submit');

        submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        // Let Formspree handle submission
    });
        
        
        
        // Simulate form submission
        
    


// Scroll Effects
function setupScrollEffects() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            navigateToSection('about');
        });
    }
}

// Animations
function setupAnimations() {
    // Floating elements animation
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.5}s`;
    });
    
    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) rotateX(5deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) rotateX(0)';
        });
    });
    
    // Social links hover effect
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.2) rotate(360deg)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Section-specific animations
function triggerSectionAnimations(sectionName) {
    switch (sectionName) {
        case 'home':
            startHomeAnimations();
            break;
        case 'about':
            startAboutAnimations();
            break;
        case 'certifications':
            startCertificationsAnimations();
            break;
        case 'projects':
            startProjectsAnimations();
            break;
        case 'skills':
            startSkillsAnimations();
            break;
        case 'experience':
            startExperienceAnimations();
            break;
        case 'resume':
            startResumeAnimations();
            break;
        case 'contact':
            startContactAnimations();
            break;
    }
}

function startHomeAnimations() {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroVisual = document.querySelector('.hero-visual');
    
    // Reset animations
    [heroTitle, heroSubtitle, heroDescription, heroButtons, heroVisual].forEach(el => {
        if (el) {
            el.style.transform = 'translateY(50px)';
            el.style.opacity = '0';
        }
    });
    
    // Animate elements
    setTimeout(() => {
        if (heroTitle) {
            heroTitle.style.transform = 'translateY(0)';
            heroTitle.style.opacity = '1';
        }
    }, 100);
    
    setTimeout(() => {
        if (heroSubtitle) {
            heroSubtitle.style.transform = 'translateY(0)';
            heroSubtitle.style.opacity = '1';
        }
    }, 300);
    
    setTimeout(() => {
        if (heroDescription) {
            heroDescription.style.transform = 'translateY(0)';
            heroDescription.style.opacity = '1';
        }
    }, 500);
    
    setTimeout(() => {
        if (heroButtons) {
            heroButtons.style.transform = 'translateY(0)';
            heroButtons.style.opacity = '1';
        }
    }, 700);
    
    setTimeout(() => {
        if (heroVisual) {
            heroVisual.style.transform = 'translateY(0)';
            heroVisual.style.opacity = '1';
        }
    }, 900);
}

function startAboutAnimations() {
    const aboutCards = document.querySelectorAll('.about-card, .code-preview');
    aboutCards.forEach((card, index) => {
        card.style.transform = 'translateY(50px)';
        card.style.opacity = '0';
        
        setTimeout(() => {
            card.style.transform = 'translateY(0)';
            card.style.opacity = '1';
        }, index * 200 + 100);
    });
}

function startCertificationsAnimations() {
    const certCards = document.querySelectorAll('.certification-card');
    certCards.forEach((card, index) => {
        card.style.transform = 'translateY(50px) scale(0.9)';
        card.style.opacity = '0';
        
        setTimeout(() => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.opacity = '1';
        }, index * 150 + 100);
    });
}

function startProjectsAnimations() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.transform = 'translateY(50px) scale(0.9)';
        card.style.opacity = '0';
        
        setTimeout(() => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.opacity = '1';
        }, index * 150 + 100);
    });
}

function startSkillsAnimations() {
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
        category.style.transform = 'translateX(-50px)';
        category.style.opacity = '0';
        
        setTimeout(() => {
            category.style.transform = 'translateX(0)';
            category.style.opacity = '1';
        }, index * 200 + 100);
    });
}

function startExperienceAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.transform = 'translateX(-50px)';
        item.style.opacity = '0';
        
        setTimeout(() => {
            item.style.transform = 'translateX(0)';
            item.style.opacity = '1';
        }, index * 300 + 100);
    });
}

// AI Chat Functionality - Using RAG Backend
const API_BASE_URL = 'http://localhost:5001/api';

function initializeAIChat() {
    const chatMessages = document.getElementById('chatMessages');
    const chatInput = document.getElementById('chatInput');
    const askButton = document.getElementById('askButton');
    
    if (!chatMessages || !chatInput || !askButton) return;
    
    // Add initial greeting
    addMessage("Hi! I'm Ayush's AI assistant. I'm powered by advanced RAG technology to provide you with accurate, respectful information about Ayush's education, research, projects, skills, and achievements. What would you like to know?", 'assistant');
    
    // Event listeners
    askButton.addEventListener('click', handleUserMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleUserMessage();
        }
    });
}

async function handleUserMessage() {
    const chatInput = document.getElementById('chatInput');
    const askButton = document.getElementById('askButton');
    const message = chatInput.value.trim();
    
    if (!message) return;
    
    // Disable input and button
    chatInput.disabled = true;
    askButton.disabled = true;
    askButton.innerHTML = '<span>Thinking...</span><i class="fas fa-spinner fa-spin"></i>';
    
    // Add user message
    addMessage(message, 'user');
    
    // Clear input
    chatInput.value = '';
    
    try {
        // Call RAG backend
        const response = await fetch(`${API_BASE_URL}/chat`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message })
        });
        
        if (!response.ok) {
            throw new Error('Failed to get response from AI');
        }
        
        const data = await response.json();
        addMessage(data.response, 'assistant');
        
    } catch (error) {
        console.error('Error calling AI backend:', error);
        addMessage("I apologize, but I'm having trouble connecting to my knowledge base. Please make sure the backend server is running (see backend/README.md for setup instructions). In the meantime, you can contact Ayush directly at ayush.velhal@gmail.com or view his resume in the Resume section.", 'assistant');
    } finally {
        // Re-enable input and button
        chatInput.disabled = false;
        askButton.disabled = false;
        askButton.innerHTML = '<span>Ask</span><i class="fas fa-paper-plane"></i>';
        chatInput.focus();
    }
}

function addMessage(content, type) {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${type}`;
    
    const avatar = document.createElement('div');
    avatar.className = `message-avatar ${type}`;
    avatar.textContent = type === 'user' ? 'You' : 'AI';
    
    const bubble = document.createElement('div');
    bubble.className = `message-bubble ${type}`;
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    
    // Format the AI response with proper line breaks and structure
    if (type === 'assistant') {
        messageContent.innerHTML = formatAIResponse(content);
    } else {
        messageContent.textContent = content;
    }
    
    bubble.appendChild(messageContent);
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(bubble);
    
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom smoothly
    chatMessages.scrollTo({
        top: chatMessages.scrollHeight,
        behavior: 'smooth'
    });
}

function formatAIResponse(content) {
    // Convert line breaks to <br> and preserve formatting
    let formatted = content
        .replace(/\n\n/g, '<br><br>')
        .replace(/\n/g, '<br>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Make links clickable
    formatted = formatted.replace(
        /(https?:\/\/[^\s<]+)/g, 
        '<a href="$1" target="_blank" rel="noopener noreferrer" style="color: var(--primary-color); text-decoration: underline;">$1</a>'
    );
    
    // Make email addresses clickable
    formatted = formatted.replace(
        /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
        '<a href="mailto:$1" style="color: var(--primary-color); text-decoration: underline;">$1</a>'
    );
    
    return formatted;
}

function startAIChatAnimations() {
    const aiChatContainer = document.querySelector('.ai-chat-container');
    
    if (aiChatContainer) {
        aiChatContainer.style.transform = 'translateY(30px)';
        aiChatContainer.style.opacity = '0';
        
        setTimeout(() => {
            aiChatContainer.style.transform = 'translateY(0)';
            aiChatContainer.style.opacity = '1';
            aiChatContainer.style.transition = 'all 0.6s ease';
        }, 100);
    }
    
    // Initialize chat if not already done
    if (!document.getElementById('chatMessages').hasChildNodes()) {
        initializeAIChat();
    }
}

function startResumeAnimations() {
    const resumeViewer = document.querySelector('.resume-viewer');
    const resumeSidebar = document.querySelector('.resume-sidebar');
    const highlightItems = document.querySelectorAll('.highlight-item');
    
    // Animate resume viewer
    if (resumeViewer) {
        resumeViewer.style.transform = 'translateY(30px)';
        resumeViewer.style.opacity = '0';
        
        setTimeout(() => {
            resumeViewer.style.transform = 'translateY(0)';
            resumeViewer.style.opacity = '1';
            resumeViewer.style.transition = 'all 0.6s ease';
        }, 100);
    }
    
    // Animate sidebar
    if (resumeSidebar) {
        resumeSidebar.style.transform = 'translateX(30px)';
        resumeSidebar.style.opacity = '0';
        
        setTimeout(() => {
            resumeSidebar.style.transform = 'translateX(0)';
            resumeSidebar.style.opacity = '1';
            resumeSidebar.style.transition = 'all 0.6s ease';
        }, 300);
    }
    
    // Animate highlight items
    highlightItems.forEach((item, index) => {
        item.style.transform = 'translateY(20px)';
        item.style.opacity = '0';
        
        setTimeout(() => {
            item.style.transform = 'translateY(0)';
            item.style.opacity = '1';
            item.style.transition = 'all 0.4s ease';
        }, (index + 1) * 100 + 500);
    });
}

function startContactAnimations() {
    const contactCards = document.querySelectorAll('.contact-card');
    const contactForm = document.querySelector('.contact-form');
    
    contactCards.forEach((card, index) => {
        card.style.transform = 'translateY(30px)';
        card.style.opacity = '0';
        
        setTimeout(() => {
            card.style.transform = 'translateY(0)';
            card.style.opacity = '1';
        }, index * 100 + 100);
    });
    
    if (contactForm) {
        contactForm.style.transform = 'translateX(50px)';
        contactForm.style.opacity = '0';
        
        setTimeout(() => {
            contactForm.style.transform = 'translateX(0)';
            contactForm.style.opacity = '1';
        }, 400);
    }
}

// Intersection Observer for scroll animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections and animation elements
    document.querySelectorAll('.section, .project-card, .skill-item, .timeline-item').forEach(el => {
        observer.observe(el);
    });
}

// Utility Functions
function lerp(start, end, factor) {
    return start + (end - start) * factor;
}

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

// Easter Eggs
document.addEventListener('keydown', (e) => {
    // Konami Code: ↑↑↓↓←→←→BA
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    
    if (!window.konamiSequence) window.konamiSequence = [];
    
    window.konamiSequence.push(e.code);
    
    if (window.konamiSequence.length > konamiCode.length) {
        window.konamiSequence.shift();
    }
    
    if (window.konamiSequence.join(',') === konamiCode.join(',')) {
        // Easter egg activation
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = '';
        }, 3000);
        
        window.konamiSequence = [];
        console.log('🎉 Easter egg activated!');
    }
});

// Performance optimization
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

// Optimized scroll and resize handlers
window.addEventListener('scroll', debounce(() => {
    // Handle scroll events
}, 10));

window.addEventListener('resize', debounce(() => {
    // Handle resize events
}, 100));

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        navigateToSection,
        setupParticles,
        setupTypingEffect
    };
}