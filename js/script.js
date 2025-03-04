// Загрузка общих элементов
document.addEventListener('DOMContentLoaded', function() {
    // Загрузка шапки и подвала
    fetch('includes/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            initMobileMenu();
        });

    fetch('includes/footer.html')
        .then(response => response.text())
        .then(data => document.getElementById('footer').innerHTML = data);

    // Инициализация мобильного меню
    function initMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
// Обработка формы
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    
    // Здесь можно добавить отправку на сервер
    console.log('Форма отправлена:', data);
    alert('Ваше сообщение успешно отправлено!');
    this.reset();
});

// Инициализация Font Awesome для иконок
document.addEventListener('DOMContentLoaded', function() {
    const faScript = document.createElement('script');
    faScript.src = 'https://kit.fontawesome.com/ваш-код.js';
    faScript.crossOrigin = 'anonymous';
    document.head.appendChild(faScript);
});
// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer для анимаций
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card, .contact-form').forEach(el => observer.observe(el));

    // Параллакс эффект для героя
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelector('.hero::before').style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Активное состояние меню
    const currentPath = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});
// Обновить в script.js
// Добавить инициализацию иконок
document.addEventListener('DOMContentLoaded', () => {
    // Добавить Font Awesome
    const faScript = document.createElement('script');
    faScript.src = 'https://kit.fontawesome.com/ваш-код.js';
    document.head.appendChild(faScript);
    
    // Остальной код...
});

// Обновленный script.js
document.addEventListener('DOMContentLoaded', () => {
    // Инициализация анимаций при скролле
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-fade-in, .animate-slide-up, .animate-slide-left, .animate-slide-right').forEach(el => {
        el.style.opacity = "0";
        observer.observe(el);
    });

    // Параллакс эффект для героя
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        document.querySelector('.hero-overlay').style.transform = `translateY(${scrolled * 0.4}px)`;
    });

    // Hover эффект для .highlight
    const highlight = document.querySelector('.highlight');
    if (highlight) {
        highlight.addEventListener('mouseover', () => {
            highlight.style.transform = "scale(1.05)";
        });
        highlight.addEventListener('mouseout', () => {
            highlight.style.transform = "scale(1)";
        });
    }
});