// Global Variables
let currentSection = 'home';
let isAnimating = false;
let particles = [];
let mouseX = 0;
let mouseY = 0;

// Project Details Data
const projectDetails = {
    resumescanner: {
        title: 'ResumeScanner',
        image: 'Projects/FullStack/ResumeScanner/ResumeScanner.png',
        description: 'ResumeScanner is an end-to-end, AI-powered resume analysis platform that evaluates PDF resumes against modern Applicant Tracking Systems (ATS) and specific job descriptions. It computes a detailed ATS score with breakdowns across skills, experience, projects, and keyword density, then performs role-based keyword matching to highlight gaps and missing terminology. Using the OpenAI GPT-4o API, it generates targeted bullet-point improvements, offers full resume rewrites aligned to a given JD, and calculates job-match alignment as a percentage with clear, actionable recommendations. Users receive a downloadable report and improved resume, while a persistent scan history enables tracking of profile iterations and progress over time.',
        features: [
            'PDF resume parsing and analysis against ATS systems',
            'Detailed scoring with skill, experience, and keyword density breakdowns',
            'Role-based keyword matching and gap analysis',
            'GPT-4o powered bullet-point and resume rewrites',
            'Job match alignment calculations with percentages',
            'Downloadable analysis reports and improved resume',
            'Persistent scan history for tracking improvements over time'
        ],
        tech: ['React', 'Node.js', 'Express.js', 'TypeScript', 'REST APIs', 'OpenAI API', 'Prompt Engineering', 'PDF Parsing', 'Multer', 'Tailwind CSS', 'Framer Motion', 'ATS Optimization', 'Keyword Matching Algorithms', 'Full-Stack Development', 'Vercel', 'Render'],
        architecture: 'Built with React (Vite, TypeScript, Tailwind, Framer Motion) on the frontend and Node.js/Express backend leveraging Multer and pdf-parse for file ingestion. Secured with CORS and Helmet, instrumented with Morgan for request logging. Deployed as a production-ready stack across Vercel (frontend) and Render (backend) for scalability and reliability.',
        demoLink: 'https://www.loom.com/share/cfdde73136f54494a8dc6efc97af6518',
        githubLink: 'https://github.com/ayush-java/ai-resume-scanner'
    },
    tarkai: {
        title: 'TarkAI - Hackathon Winning Project',
        image: 'TarkAI.jpeg',
        description: 'TarkAI is an AI-powered document intelligence platform that helps students, analysts, and investors quickly understand complex company reports and annual filings. It ingests large PDF documents and automatically extracts high-value sections such as risk factors, financial statements, and business overviews, reorganizing them into a navigable, structured view. TarkAI applies NLP and LLM-based summarization to convert dense financial and technical language into concise, human-readable explanations, significantly reducing the time required for due diligence and research. Won 2nd place at HackAI (LTI Mindtree–sponsored hackathon), resulting in a follow-up interview opportunity.',
        features: [
            'Large PDF document ingestion and processing',
            'Automatic extraction of high-value sections (risk factors, financials, business overviews)',
            'Structured navigation for complex financial documents',
            'NLP and LLM-based text summarization',
            'Conversion of dense financial language to human-readable explanations',
            'Intuitive Streamlit interface for document uploads',
            'Sectioned insights and targeted summaries',
            'Fast due diligence and research capabilities'
        ],
        tech: ['Python', 'Streamlit', 'AI/ML', 'PDF Processing', 'Natural Language Processing', 'OpenAI API', 'Prompt Engineering', 'Text Summarization', 'Data Extraction', 'User Interface Design', 'AI-Powered Analytics', 'Document Parsing', 'Team Collaboration'],
        architecture: 'Built as a standalone Python application using Streamlit for the UI layer, with advanced PDF processing libraries for document handling. Integrates with OpenAI API for intelligent summarization and LLM-based text analysis. Designed for rapid iteration and easy deployment.',
        demoLink: 'https://www.youtube.com/watch?v=ULDonbj5Z2w',
        githubLink: 'https://github.com/ayush-java/TarkAI-2025'
    },
    novasoc: {
        title: 'NovaSOC',
        image: 'Projects/Cyber/NovaSOC/SecurityProject1.png',
        description: 'NovaSOC is an enterprise-style SOC + SIEM + SOAR threat detection platform that simulates real-world cyber operations and automated response workflows. The system ingests live telemetry, classifies attack activity, and surfaces actionable security intelligence through a production-style Streamlit dashboard with interactive analytics, incident monitoring, severity trends, and a global threat map. It includes automated response capabilities such as malicious IP blocking and incident logging, while mapping detections to MITRE ATT&CK tactics for threat intelligence visibility. Built as a full cybersecurity pipeline spanning detection engineering, SIEM-style analytics, and SOAR automation, with cloud-ready deployment for real-time monitoring and demonstration.',
        features: [
            'Real-world cyber operations simulation',
            'Live telemetry ingestion and attack classification',
            'Production-style Streamlit analytics dashboard',
            'Interactive visualizations with incident monitoring',
            'Automated incident response workflows',
            'Malicious IP blocking and incident logging',
            'MITRE ATT&CK threat intelligence mapping',
            'Global threat map visualization',
            'Severity trends and analytics'
        ],
        tech: ['Cybersecurity', 'SOC', 'SIEM', 'SOAR', 'Python', 'Streamlit', 'Plotly', 'PostgreSQL', 'ELK Stack', 'MITRE ATT&CK', 'Threat Detection', 'Incident Response', 'AWS EC2', 'Docker', 'Render'],
        architecture: 'Deployed on AWS EC2 with containerized Python backend running on Streamlit. PostgreSQL for incident data storage, integrated with ELK Stack for log analysis. Docker for consistent deployment across environments. Real-time monitoring and automated response capabilities built into the SOAR layer.',
        liveLink: 'http://23.20.45.8:8501',
        demoLink: 'https://www.loom.com/share/8ba09c1b44544312844e2c3a4c1f96b5',
        githubLink: 'https://github.com/ayush-java/soc-siem-threat-detection.git'
    },
    sentinelzero: {
        title: 'SentinelZero',
        image: 'Projects/Cyber/SentinelZero/SentinelZero.png',
        description: 'SentinelZero is a full-stack cloud security platform designed to simulate modern enterprise security operations and secure application deployment workflows. The platform combines cybersecurity monitoring, authentication security, threat visibility, and cloud infrastructure management into a production-style environment deployed on AWS. Built with a React frontend and Flask backend, SentinelZero demonstrates secure web application architecture, cloud deployment, user authentication, security monitoring, and operational security best practices. The platform incorporates secure login workflows, CAPTCHA-based bot protection, role-based access concepts, cloud-hosted infrastructure, and real-world deployment using Nginx, Gunicorn, and AWS EC2.',
        features: [
            'Full-stack cloud security architecture',
            'Enterprise security operations simulation',
            'Secure authentication and login workflows',
            'CAPTCHA-based bot protection',
            'Role-based access control (RBAC) implementation',
            'Real-time security monitoring dashboards',
            'Cloud infrastructure management on AWS',
            'Production-ready deployment with Nginx and Gunicorn',
            'Operational security best practices implementation'
        ],
        tech: ['Cybersecurity', 'Cloud Security', 'Application Security', 'DevSecOps', 'AWS EC2', 'React', 'Flask', 'Python', 'Nginx', 'Gunicorn', 'Cloudflare', 'Authentication', 'reCAPTCHA', 'Linux', 'Full Stack Development', 'Security Engineering'],
        architecture: 'React frontend deployed on AWS with Flask backend for API layer. Secured with Cloudflare CDN and reCAPTCHA for bot protection. Nginx and Gunicorn handle reverse proxy and WSGI application serving. Running on AWS EC2 instances with automated security monitoring and operational security pipelines.',
        liveLink: 'https://sentinelzero.org/',
        demoLink: 'https://drive.google.com/file/d/1Aj9uH7YNeO7xPedi3bCC1cajCEQVPjVy/view',
        githubLink: 'https://github.com/ayush-java/sentinelzero-security-platform'
    },
    secureshieldai: {
        title: 'SecureShield AI',
        image: 'Projects/Cyber/SecureShieldAI/SecureShieldAI.png',
        description: 'SecureShield AI is an AI-powered application security and SOC monitoring platform that detects, analyzes, and responds to common cyber attacks in real time. The platform combines attack simulation, detection engineering, threat monitoring, incident management, and AI-assisted security analysis into a unified dashboard. SecureShield AI identifies threats such as SQL Injection, Cross-Site Scripting (XSS), brute-force authentication attacks, suspicious login activity, and malicious user behavior while generating actionable security alerts and incident records. Built using React and Flask, the project demonstrates practical skills in application security, SOC operations, threat detection, secure coding, incident response, and AI-assisted cybersecurity automation.',
        features: [
            'Real-time attack detection and analysis',
            'SQL Injection detection and prevention',
            'XSS (Cross-Site Scripting) detection',
            'Brute-force authentication attack detection',
            'Suspicious login activity monitoring',
            'Malicious user behavior identification',
            'Actionable security alerts generation',
            'Incident record management',
            'AI-powered cybersecurity assistant for alert explanation',
            'Attack technique and remediation guidance'
        ],
        tech: ['Cybersecurity', 'Application Security', 'SOC', 'Threat Detection', 'Incident Response', 'AI Security', 'Detection Engineering', 'SQL Injection Detection', 'XSS Detection', 'Brute Force Detection', 'React', 'Flask', 'Python', 'Security Analytics', 'Security Monitoring', 'SIEM Concepts', 'OWASP', 'Artificial Intelligence', 'Dashboard Development'],
        architecture: 'React-based frontend with Flask backend for real-time threat detection. Integration with AI/ML models for attack pattern recognition. Python-based detection engines for OWASP attack types. Dashboard aggregates security alerts with machine learning-assisted incident correlation and response suggestions.',
        demoLink: 'https://drive.google.com/file/d/1dd36FDTcOz0Mx4J0RoM4l4h0s47P7h9u/view',
        githubLink: 'https://github.com/ayush-java/SecureShieldAI'
    }
};


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
    setupProjectModal();
    setupResumeFilters();
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

// Project Modal Setup
function setupProjectModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = document.querySelector('.project-modal-close');
    const detailsBtns = document.querySelectorAll('.view-details-btn');
    
    if (!modal || !closeBtn) return;

    // Open modal on "Details" button click
    detailsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectId = btn.getAttribute('data-project');
            openProjectModal(projectId);
        });
    });

    // Close modal on X button click
    closeBtn.addEventListener('click', () => {
        closeProjectModal();
    });

    // Close modal when clicking outside content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeProjectModal();
        }
    });
}

function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const project = projectDetails[projectId];

    if (!project || !modal) return;

    // Populate modal content
    document.getElementById('modalProjectTitle').textContent = project.title;
    document.getElementById('modalProjectImage').src = project.image;
    document.getElementById('modalProjectDescription').textContent = project.description;

    // Populate technologies
    const techContainer = document.getElementById('modalAllTech');
    techContainer.innerHTML = '';
    project.tech.forEach(tech => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = tech;
        techContainer.appendChild(tag);
    });

    // Populate features (if available)
    const featuresSection = document.getElementById('keyFeaturesSection');
    if (project.features && project.features.length > 0) {
        const featuresList = document.getElementById('modalKeyFeatures');
        featuresList.innerHTML = '';
        project.features.forEach(feature => {
            const li = document.createElement('li');
            li.textContent = feature;
            featuresList.appendChild(li);
        });
        featuresSection.style.display = 'block';
    } else {
        featuresSection.style.display = 'none';
    }

    // Populate architecture (if available)
    const archSection = document.getElementById('architectureSection');
    if (project.architecture) {
        document.getElementById('modalArchitecture').textContent = project.architecture;
        archSection.style.display = 'block';
    } else {
        archSection.style.display = 'none';
    }

    // Set up action buttons
    const liveLink = document.getElementById('modalLiveLink');
    const demoLink = document.getElementById('modalDemoLink');
    const githubLink = document.getElementById('modalGithubLink');

    liveLink.style.display = project.liveLink ? 'flex' : 'none';
    liveLink.href = project.liveLink || '#';

    demoLink.style.display = project.demoLink ? 'flex' : 'none';
    demoLink.href = project.demoLink || '#';

    githubLink.href = project.githubLink || '#';

    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Smooth scroll to top of modal
    setTimeout(() => {
        modal.scrollTop = 0;
    }, 100);
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
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
    if (!form) return;

    const inputs = form.querySelectorAll('input, textarea');
    const submitBtn = form.querySelector('.form-submit');
    const formStatus = document.getElementById('form-status');
    const honeypot = form.querySelector('input[name="bot-field"]');

    const allowedDomains = [
        'gmail.com',
        'outlook.com',
        'hotmail.com',
        'live.com',
        'msn.com',
        'yahoo.com',
        'yahoo.co.in',
        'icloud.com',
        'me.com',
        'aol.com',
        'proton.me',
        'protonmail.com',
        'gmx.com',
        'zoho.com'
    ];

    const spamKeywords = [
        'viagra',
        'casino',
        'porn',
        'sex',
        'xxx',
        'loan',
        'crypto',
        'btc',
        'bitcoin',
        'free money',
        'buy now',
        'click here',
        'http://',
        'https://'
    ];

    // Offensive language roots and patterns (edit and expand as needed)
    // Put short "root" fragments here; detection is substring-based on normalized text.
    const offensiveRoots = [
        'idiot',
        'stupid',
        'dumb',
        'moron',
        'loser',
        'trash'
        // Add more blocked roots here (e.g., abusive terms you want to forbid)
    ];

    // Optional: custom regex patterns for additional detection on the raw message text.
    // Example usage (fill in your own patterns):
    // const offensiveRegexes = [new RegExp('your-pattern-here', 'i')];
    const offensiveRegexes = [];

    function showFieldError(input, message) {
        if (!input) return;
        const group = input.parentElement;
        if (!group) return;
        let errorEl = group.querySelector('.form-error-message');
        if (!errorEl) {
            errorEl = document.createElement('p');
            errorEl.className = 'form-error-message';
            group.appendChild(errorEl);
        }
        errorEl.textContent = message;
        input.classList.add('input-error');
    }

    function clearFieldError(input) {
        if (!input) return;
        const group = input.parentElement;
        if (!group) return;
        const errorEl = group.querySelector('.form-error-message');
        if (errorEl) {
            errorEl.textContent = '';
        }
        input.classList.remove('input-error');
    }

    function setFormStatus(message, type) {
        if (!formStatus) return;
        formStatus.textContent = message;
        formStatus.style.display = message ? 'block' : 'none';
        formStatus.classList.remove('success', 'error');
        if (type) {
            formStatus.classList.add(type);
        }
    }

    function validateEmailFormat(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function isAllowedEmailDomain(email) {
        const atIndex = email.lastIndexOf('@');
        if (atIndex === -1) return false;
        const domain = email.slice(atIndex + 1).toLowerCase();
        if (!domain) return false;
        if (allowedDomains.includes(domain)) return true;
        if (domain.endsWith('.edu')) return true;
        return false;
    }

    function containsSpam(text) {
        const lower = text.toLowerCase();
        return spamKeywords.some(keyword => lower.includes(keyword));
    }

    // Normalize text for offensive language detection
    // - lowercase
    // - replace common substitutions (@,$,1,3,0)
    // - remove spaces, dots, and all non-letter characters
    function normalizeText(text) {
        if (!text) return '';
        let normalized = text.toLowerCase();

        const substitutions = {
            '1': 'i',
            '3': 'e',
            '@': 'a',
            '$': 's',
            '0': 'o'
        };

        // First replace known leet-style substitutions
        normalized = normalized.replace(/[@$130]/g, (ch) => substitutions[ch] || '');
        // Then strip everything except a–z (removes spaces, dots, symbols, remaining digits)
        normalized = normalized.replace(/[^a-z]/g, '');
        return normalized;
    }

    // Main offensive language detector
    function containsOffensiveContent(text) {
        const raw = text || '';
        const normalized = normalizeText(raw);
        if (!normalized) return false;

        // Root-based substring detection on normalized text
        if (offensiveRoots.some(root => normalized.includes(root))) {
            return true;
        }

        // Optional regex-based detection on raw text (patterns go into offensiveRegexes)
        if (offensiveRegexes.length > 0) {
            return offensiveRegexes.some((regex) => regex.test(raw));
        }

        return false;
    }

    function enforceProfanityRulesOnMessage(messageInputEl) {
        if (!messageInputEl) return;

        const value = messageInputEl.value || '';
        if (containsOffensiveContent(value)) {
            showFieldError(messageInputEl, 'Inappropriate language is not allowed.');
            if (submitBtn) {
                submitBtn.disabled = true;
            }
        } else {
            // Only re-enable if there is no other error text on the field
            const group = messageInputEl.parentElement;
            const errorEl = group ? group.querySelector('.form-error-message') : null;
            const hasErrorText = errorEl && errorEl.textContent && errorEl.textContent.trim().length > 0;
            if (submitBtn && !hasErrorText) {
                submitBtn.disabled = false;
            }
        }
    }

    function checkAndUpdateRateLimit() {
        if (typeof window === 'undefined') return true;
        const key = 'contactFormSubmissions';
        const now = Date.now();
        let timestamps = [];

        try {
            const stored = window.localStorage.getItem(key);
            if (stored) {
                timestamps = JSON.parse(stored);
            }
        } catch (e) {
            // ignore parse errors
        }

        // keep only last 60 seconds
        timestamps = timestamps.filter(t => now - t < 60000);

        if (timestamps.length >= 3) {
            window.localStorage.setItem(key, JSON.stringify(timestamps));
            return false;
        }

        timestamps.push(now);
        window.localStorage.setItem(key, JSON.stringify(timestamps));
        return true;
    }

    // Floating labels
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            if (input.parentElement) {
                input.parentElement.classList.add('focused');
            }
        });
        
        input.addEventListener('blur', () => {
            if (!input.value && input.parentElement) {
                input.parentElement.classList.remove('focused');
            }
        });
        
        // Check if already has value
        if (input.value && input.parentElement) {
            input.parentElement.classList.add('focused');
        }

        // Clear error on input
        input.addEventListener('input', () => {
            clearFieldError(input);
            setFormStatus('', '');

            if (input.id === 'message') {
                enforceProfanityRulesOnMessage(input);
            }
        });
    });

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        if (!submitBtn) return;

        // Honeypot: if filled, silently block
        if (honeypot && honeypot.value.trim() !== '') {
            return;
        }

        setFormStatus('', '');

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        // Clear previous errors
        [nameInput, emailInput, messageInput].forEach(inp => clearFieldError(inp));

        let hasError = false;

        // Name validation
        if (!nameInput || !nameInput.value.trim()) {
            showFieldError(nameInput, 'Name is required.');
            hasError = true;
        } else if (nameInput.value.trim().length < 2) {
            showFieldError(nameInput, 'Name must be at least 2 characters.');
            hasError = true;
        }

        // Email validation
        if (!emailInput || !emailInput.value.trim()) {
            showFieldError(emailInput, 'Email is required.');
            hasError = true;
        } else {
            const email = emailInput.value.trim();
            if (!validateEmailFormat(email)) {
                showFieldError(emailInput, 'Please enter a valid email address.');
                hasError = true;
            } else if (!isAllowedEmailDomain(email)) {
                showFieldError(emailInput, 'Please use a valid email provider (Gmail, Outlook, Yahoo, .edu, etc.).');
                hasError = true;
            }
        }

        // Message validation
        if (!messageInput || !messageInput.value.trim()) {
            showFieldError(messageInput, 'Message is required.');
            hasError = true;
        } else {
            const msg = messageInput.value.trim();
            if (containsOffensiveContent(msg)) {
                showFieldError(messageInput, 'Inappropriate language is not allowed.');
                hasError = true;
                if (submitBtn) {
                    submitBtn.disabled = true;
                }
            } else if (msg.length < 10) {
                showFieldError(messageInput, 'Message must be at least 10 characters.');
                hasError = true;
            } else if (containsSpam(msg)) {
                showFieldError(messageInput, 'Your message looks like spam. Please revise and try again.');
                hasError = true;
            }
        }

        if (hasError) {
            return;
        }

        // Rate limiting
        if (!checkAndUpdateRateLimit()) {
            setFormStatus('You have reached the submission limit. Please wait a minute and try again.', 'error');
            return;
        }

        // Prepare to submit
        const originalBtnHtml = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: formData
            });

            if (response.ok) {
                setFormStatus('Thank you! Your message has been sent.', 'success');
                form.reset();
                inputs.forEach(input => {
                    if (input.parentElement) {
                        input.parentElement.classList.remove('focused');
                    }
                    clearFieldError(input);
                });

            } else {
                setFormStatus('Something went wrong while sending your message. Please try again later.', 'error');
            }
        } catch (error) {
            setFormStatus('Network error while sending your message. Please try again later.', 'error');
        } finally {
            submitBtn.innerHTML = originalBtnHtml;
            submitBtn.disabled = false;
        }
    });
}


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

// Resume data
const resumes = [
    {
        id: 'cybersecurity',
        title: 'Cybersecurity Resume',
        icon: 'fas fa-shield-alt',
        pdf: 'Resumes/SecurityResume_AyushVelhal.pdf',
        track: 'Cybersecurity Resume',
        updated: 'Updated June 2026'
    },
    {
        id: 'software',
        title: 'Software Engineer Resume',
        icon: 'fas fa-code',
        pdf: 'Resumes/SWE Resume - Ayush Velhal.pdf',
        track: 'Software Engineer Resume',
        updated: 'Updated June 2026'
    }
];

function getResumeViewerSrc(pdfPath) {
    return `${pdfPath}#toolbar=1&navpanes=0&zoom=page-width`;
}

function setResumeFallbackState(show) {
    const embed = document.getElementById('resumeEmbed');
    const fallback = document.getElementById('resumePreviewFallback');
    if (!embed || !fallback) return;

    if (show) {
        embed.style.display = 'none';
        fallback.style.display = 'block';
    } else {
        fallback.style.display = 'none';
        embed.style.display = 'block';
    }
}

function loadResumeWithFallback(resume) {
    const embed = document.getElementById('resumeEmbed');
    const fallbackBtn = document.getElementById('resumeFallbackDownloadBtn');
    if (!embed) return;

    console.log('[Resume Viewer] Loading resume:', {
        selectedResume: resume.id,
        pdfPath: resume.pdf
    });

    if (fallbackBtn) {
        fallbackBtn.href = resume.pdf;
        fallbackBtn.setAttribute('download', '');
    }

    setResumeFallbackState(false);

    embed.onload = () => {
        console.log('[Resume Viewer] PDF loaded successfully:', resume.pdf);
        setResumeFallbackState(false);
    };

    embed.onerror = () => {
        console.log('[Resume Viewer] PDF failed to load:', resume.pdf);
        setResumeFallbackState(true);
    };

    embed.src = getResumeViewerSrc(resume.pdf);
}

function setupResumeFilters() {
    const filterBtns = document.querySelectorAll('.resume-filter-btn');
    if (!filterBtns.length) return;

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const id = btn.getAttribute('data-resume');
            switchResume(id);
        });
    });

    switchResume('cybersecurity');
}

function switchResume(id) {
    const resume = resumes.find(r => r.id === id);
    if (!resume) return;

    console.log('[Resume Viewer] Selected resume:', resume.id);

    const dlBtn = document.getElementById('resumeDownloadBtn');
    const titleEl = document.getElementById('resumeViewerTitle');
    const trackEl = document.getElementById('quickInfoTrack');
    const dateEl = document.getElementById('quickInfoDate');

    if (dlBtn) {
        dlBtn.href = resume.pdf;
        dlBtn.setAttribute('download', '');
    }
    if (titleEl) titleEl.innerHTML = `<i class="${resume.icon}"></i> ${resume.title}`;
    if (trackEl) trackEl.textContent = resume.track;
    if (dateEl) dateEl.textContent = resume.updated;

    loadResumeWithFallback(resume);
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