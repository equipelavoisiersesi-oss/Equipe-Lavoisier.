// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', function() {
    // Aguardar carregamento dos ícones
    setTimeout(() => {
        initializeLucideIcons();
    }, 100);
    
    initializeParticles();
    initializeNavigation();
    initializeScrollAnimations();
    initializeTiltEffects();
    initializeProgressBars();
    initializeCharts();
    initializeForms();
    initializeFAQ();
    initializeScrollToTop();
    initializeIntersectionObserver();
    
    // Adicionar classe de carregamento completo
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
});

// ===== ICONES LUCIDE =====
function initializeLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// ===== PARTÍCULAS =====
function initializeParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: ["#7fb069", "#ffffff", "#4a7c59"]
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "top",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// ===== NAVEGAÇÃO =====
function initializeNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Scroll effect on navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(45, 80, 22, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Mobile menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Smooth scroll for navigation links
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
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offset = 80; // Altura da navegação
        const elementPosition = section.offsetTop;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        // Adicionar destaque temporário à seção
        section.classList.add('section-highlight');
        setTimeout(() => {
            section.classList.remove('section-highlight');
        }, 2000);
    }
}

// ===== ANIMAÇÕES DE SCROLL =====
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.sobre-card, .mvv-card, .planta-card, .ciencia-card, .sustentavel-card, .tutorial-card');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'all 0.6s ease';
        el.style.transitionDelay = `${index * 0.1}s`;
    });
}

function initializeIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.sobre-card, .mvv-card, .planta-card, .ciencia-card, .sustentavel-card, .tutorial-card').forEach(el => {
        observer.observe(el);
    });
}

// ===== EFEITOS 3D =====
function initializeTiltEffects() {
    const tiltElements = document.querySelectorAll('[data-tilt]');
    
    tiltElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = 'rotateX(5deg) rotateY(5deg) scale(1.05)';
        });
        
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });
}

// ===== BARRAS DE PROGRESSO =====
function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const progress = progressBar.getAttribute('data-progress');
                
                setTimeout(() => {
                    progressBar.style.width = progress + '%';
                }, 300);
            }
        });
    });
    
    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
}

// ===== GRÁFICOS =====
function initializeCharts() {
    const growthChart = document.getElementById('growthChart');
    
    if (growthChart) {
        const ctx = growthChart.getContext('2d');
        
        // Dados do gráfico
        const weeks = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6'];
        const alface = [2, 5, 8, 12, 18, 25];
        const tomate = [1, 3, 6, 10, 15, 20];
        const cenoura = [1, 2, 4, 7, 12, 18];
        
        drawChart(ctx, weeks, alface, tomate, cenoura);
    }
}

function drawChart(ctx, labels, data1, data2, data3) {
    const width = ctx.canvas.width;
    const height = ctx.canvas.height;
    const padding = 60;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;
    
    // Limpar canvas
    ctx.clearRect(0, 0, width, height);
    
    // Configurações
    const maxValue = Math.max(...data1, ...data2, ...data3);
    const barWidth = chartWidth / (labels.length * 4);
    
    // Desenhar eixos
    ctx.strokeStyle = '#6c757d';
    ctx.lineWidth = 2;
    
    // Eixo Y
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.stroke();
    
    // Eixo X
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();
    
    // Linhas de grade
    ctx.strokeStyle = '#f8f9fa';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight / 5) * i;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
        
        // Labels do eixo Y
        ctx.fillStyle = '#6c757d';
        ctx.font = '12px Inter';
        ctx.textAlign = 'right';
        const value = Math.round(maxValue * (1 - i / 5));
        ctx.fillText(value + ' cm', padding - 10, y + 4);
    }
    
    // Desenhar barras
    const colors = ['#7fb069', '#4a7c59', '#2d5016'];
    const datasets = [data1, data2, data3];
    
    labels.forEach((label, i) => {
        const x = padding + (chartWidth / labels.length) * i + barWidth;
        
        datasets.forEach((data, datasetIndex) => {
            const barHeight = (data[i] / maxValue) * chartHeight;
            const barX = x + datasetIndex * barWidth;
            const barY = height - padding - barHeight;
            
            // Barras com gradiente
            const gradient = ctx.createLinearGradient(barX, barY, barX, height - padding);
            gradient.addColorStop(0, colors[datasetIndex]);
            gradient.addColorStop(1, colors[datasetIndex] + '80');
            
            ctx.fillStyle = gradient;
            ctx.fillRect(barX, barY, barWidth * 0.8, barHeight);
            
            // Bordas das barras
            ctx.strokeStyle = colors[datasetIndex];
            ctx.lineWidth = 1;
            ctx.strokeRect(barX, barY, barWidth * 0.8, barHeight);
        });
        
        // Labels do eixo X
        ctx.fillStyle = '#6c757d';
        ctx.font = '12px Inter';
        ctx.textAlign = 'center';
        ctx.fillText(label, x + barWidth * 1.5, height - padding + 20);
    });
    
    // Legenda
    const legend = ['Alface', 'Tomate', 'Cenoura'];
    legend.forEach((item, i) => {
        const legendX = width - padding - 150;
        const legendY = padding + i * 25;
        
        ctx.fillStyle = colors[i];
        ctx.fillRect(legendX, legendY, 15, 15);
        
        ctx.fillStyle = '#6c757d';
        ctx.font = '14px Inter';
        ctx.textAlign = 'left';
        ctx.fillText(item, legendX + 20, legendY + 12);
    });
}

// ===== FORMULÁRIOS =====
function initializeForms() {
    // Formulário de sugestões
    const sugestaoForm = document.getElementById('sugestaoForm');
    if (sugestaoForm) {
        sugestaoForm.addEventListener('submit', handleSugestaoSubmit);
    }
    
    // Formulário de voluntariado
    const voluntariadoForm = document.getElementById('voluntariadoForm');
    if (voluntariadoForm) {
        voluntariadoForm.addEventListener('submit', handleVoluntariadoSubmit);
    }
}

function handleSugestaoSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Salvar sugestão no localStorage
    const suggestions = JSON.parse(localStorage.getItem('gardenSuggestions') || '[]');
    const suggestion = {
        id: Date.now(),
        nome: data.nome || 'Anônimo',
        email: data.email || '',
        turma: data.turma || '',
        planta: data.planta-sugestao || '',
        sugestao: data.sugestao || '',
        data: new Date().toLocaleString('pt-BR'),
        status: 'pendente'
    };
    
    suggestions.push(suggestion);
    localStorage.setItem('gardenSuggestions', JSON.stringify(suggestions));
    
    // Mostrar no painel admin se estiver logado
    if (isLoggedIn) {
        loadSuggestionsToAdmin();
        showNotification('Nova sugestão salva no sistema!', 'success');
    } else {
        showMessage('Sugestão enviada com sucesso! Obrigado pela sua contribuição.', 'success');
    }
    
    e.target.reset();
}

function handleVoluntariadoSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simular envio
    showMessage('Inscrição realizada com sucesso! Em breve entraremos em contato.', 'success');
    e.target.reset();
}

function showMessage(message, type = 'info') {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.innerHTML = `
        <div class="message-content">
            <i data-lucide="${type === 'success' ? 'check-circle' : 'info'}"></i>
            <span>${message}</span>
            <button class="message-close" onclick="this.parentElement.parentElement.remove()">
                <i data-lucide="x"></i>
            </button>
        </div>
    `;
    
    // Adicionar estilos da mensagem
    messageDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#17a2b8'};
        color: white;
        padding: 16px;
        border-radius: 12px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
        max-width: 400px;
    `;
    
    document.body.appendChild(messageDiv);
    initializeLucideIcons();
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentElement) {
            messageDiv.remove();
        }
    }, 5000);
}

// ===== FAQ =====
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Fechar todos os outros
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle atual
                if (isActive) {
                    item.classList.remove('active');
                } else {
                    item.classList.add('active');
                }
            });
        }
    });
}

function toggleFAQ(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}

// ===== LIGHTBOX =====
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    if (lightbox && lightboxImage && lightboxCaption) {
        const img = element.querySelector('img');
        const caption = element.querySelector('.gallery-overlay span');
        
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightboxCaption.textContent = caption ? caption.textContent : img.alt;
        
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// ===== SCROLL TO TOP =====
function initializeScrollToTop() {
    // Criar botão
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i data-lucide="arrow-up"></i>';
    scrollBtn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    document.body.appendChild(scrollBtn);
    initializeLucideIcons();
    
    // Mostrar/esconder baseado no scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
}

// ===== ANIMAÇÕES UTILITÁRIAS =====
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// ===== PERFORMANCE E OTIMIZAÇÃO =====
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

// ===== EVENT LISTENERS GLOBAIS =====
window.addEventListener('resize', debounce(() => {
    // Reinitializar gráficos se necessário
    const growthChart = document.getElementById('growthChart');
    if (growthChart && growthChart.getContext) {
        initializeCharts();
    }
}, 250));

// ===== ACESSIBILIDADE =====
document.addEventListener('keydown', (e) => {
    // ESC para fechar lightbox
    if (e.key === 'Escape') {
        closeLightbox();
    }
    
    // Navegação por teclado nos elementos interativos
    if (e.key === 'Enter' || e.key === ' ') {
        const activeElement = document.activeElement;
        if (activeElement.classList.contains('faq-question')) {
            e.preventDefault();
            toggleFAQ(activeElement);
        }
    }
});

// ===== LAZY LOADING PARA IMAGENS =====
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
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

// ===== ANALYTICS E TRACKING =====
function trackEvent(action, category, label) {
    // Placeholder para Google Analytics ou outro sistema
    console.log('Event tracked:', { action, category, label });
}

// ===== COMPATIBILIDADE =====
function checkBrowserSupport() {
    const features = {
        intersectionObserver: 'IntersectionObserver' in window,
        customProperties: CSS.supports('--fake-var', '0'),
        grid: CSS.supports('display', 'grid'),
        flexbox: CSS.supports('display', 'flex')
    };
    
    if (!features.intersectionObserver) {
        // Fallback para navegadores antigos
        console.warn('IntersectionObserver not supported, using fallback');
        // Implementar fallback se necessário
    }
    
    return features;
}

// ===== INICIALIZAÇÃO FINAL =====
checkBrowserSupport();
initializeLazyLoading();

// ===== SISTEMA DE LOGIN E ÁREA ADMINISTRATIVA =====

// Variáveis globais para controle de login
let isLoggedIn = false;

// Função para mostrar/esconder menu administrativo
function toggleAdminMenu() {
    const dropdown = document.getElementById('adminDropdown');
    dropdown.classList.toggle('show');
}

// Função para abrir modal de login
function openLogin() {
    closeAdminMenu();
    const modal = document.getElementById('loginModal');
    modal.classList.add('show');
    
    // Limpar campos
    document.getElementById('adminUser').value = '';
    document.getElementById('adminPassword').value = '';
}

// Função para fechar modal de login
function closeLogin() {
    const modal = document.getElementById('loginModal');
    modal.classList.remove('show');
}

// Função para fechar menu administrativo
function closeAdminMenu() {
    const dropdown = document.getElementById('adminDropdown');
    dropdown.classList.remove('show');
}

// Função para realizar login
function performLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('adminUser').value.trim();
    const password = document.getElementById('adminPassword').value;
    
    // Credenciais corretas
    if (username === 'lavoisier' && password === 'lavoisier123456') {
        isLoggedIn = true;
        closeLogin();
        showAdminArea();
        loadSuggestionsToAdmin(); // Carregar sugestões
        updateSuggestionsCount(); // Atualizar contadores
        showNotification('Login realizado com sucesso!', 'success');
    } else {
        showNotification('Usuário ou senha incorretos!', 'error');
    }
}

// Função para mostrar área administrativa
function showAdminArea() {
    const adminArea = document.getElementById('adminArea');
    adminArea.classList.add('show');
    
    // Esconder todas as outras seções
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id !== 'inicio') {
            section.style.display = 'none';
        }
    });
    
    // Esconder navegação e footer
    const nav = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');
    if (nav) nav.style.display = 'none';
    if (footer) footer.style.display = 'none';
    
    // Ocultar partículas
    const particles = document.getElementById('particles-js');
    if (particles) particles.style.display = 'none';
}

// Função para logout
function logout() {
    isLoggedIn = false;
    const adminArea = document.getElementById('adminArea');
    adminArea.classList.remove('show');
    
    // Mostrar todas as seções novamente
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = '';
    });
    
    // Mostrar navegação e footer
    const nav = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');
    if (nav) nav.style.display = '';
    if (footer) footer.style.display = '';
    
    // Mostrar partículas
    const particles = document.getElementById('particles-js');
    if (particles) particles.style.display = '';
    
    showNotification('Logout realizado com sucesso!', 'success');
}

// Função para mostrar abas administrativas
function showAdminTab(tabName) {
    // Esconder todas as abas
    const tabs = document.querySelectorAll('.admin-tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Remover classe active dos botões
    const buttons = document.querySelectorAll('.admin-nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Mostrar aba selecionada
    const activeTab = document.getElementById(`admin-${tabName}`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
    
    // Ativar botão selecionado
    const activeButton = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Função para carregar sugestões no admin
function loadSuggestionsToAdmin() {
    const adminSuggestionsContainer = document.querySelector('.suggestions-admin-list');
    if (!adminSuggestionsContainer) return;
    
    const suggestions = JSON.parse(localStorage.getItem('gardenSuggestions') || '[]');
    
    // Limpar container
    adminSuggestionsContainer.innerHTML = '';
    
    if (suggestions.length === 0) {
        adminSuggestionsContainer.innerHTML = '<p class="no-suggestions">Nenhuma sugestão encontrada.</p>';
        return;
    }
    
    // Gerar HTML das sugestões
    suggestions.reverse().forEach((suggestion, index) => {
        const card = document.createElement('div');
        card.className = 'admin-suggestion-card';
        card.innerHTML = `
            <div class="suggestion-header">
                <h4>${suggestion.nome}</h4>
                <span class="suggestion-date">${suggestion.data}</span>
            </div>
            <div class="suggestion-info">
                <p><strong>Email:</strong> ${suggestion.email || 'Não informado'}</p>
                <p><strong>Turma:</strong> ${suggestion.turma || 'Não informada'}</p>
                <p><strong>Planta sugerida:</strong> ${suggestion.planta || 'Não especificada'}</p>
            </div>
            <div class="suggestion-content">
                <p>${suggestion.sugestao}</p>
            </div>
            <div class="suggestion-actions">
                <button class="btn-approve" onclick="approveSuggestion(${suggestion.id})">Aprovar</button>
                <button class="btn-reject" onclick="rejectSuggestion(${suggestion.id})">Rejeitar</button>
                <button class="btn-delete" onclick="deleteSuggestion(${suggestion.id})">Excluir</button>
            </div>
        `;
        adminSuggestionsContainer.appendChild(card);
    });
    
    // Atualizar contador
    updateSuggestionsCount();
}

// Função para aprovar sugestão
function approveSuggestion(id) {
    const suggestions = JSON.parse(localStorage.getItem('gardenSuggestions') || '[]');
    const suggestion = suggestions.find(s => s.id == id);
    if (suggestion) {
        suggestion.status = 'aprovada';
        localStorage.setItem('gardenSuggestions', JSON.stringify(suggestions));
        loadSuggestionsToAdmin();
        showNotification('Sugestão aprovada!', 'success');
    }
}

// Função para rejeitar sugestão
function rejectSuggestion(id) {
    const suggestions = JSON.parse(localStorage.getItem('gardenSuggestions') || '[]');
    const suggestion = suggestions.find(s => s.id == id);
    if (suggestion) {
        suggestion.status = 'rejeitada';
        localStorage.setItem('gardenSuggestions', JSON.stringify(suggestions));
        loadSuggestionsToAdmin();
        showNotification('Sugestão rejeitada!', 'info');
    }
}

// Função para deletar sugestão
function deleteSuggestion(id) {
    if (confirm('Tem certeza que deseja excluir esta sugestão?')) {
        let suggestions = JSON.parse(localStorage.getItem('gardenSuggestions') || '[]');
        suggestions = suggestions.filter(s => s.id != id);
        localStorage.setItem('gardenSuggestions', JSON.stringify(suggestions));
        loadSuggestionsToAdmin();
        showNotification('Sugestão excluída!', 'success');
    }
}

// Função para atualizar contador de sugestões
function updateSuggestionsCount() {
    const suggestions = JSON.parse(localStorage.getItem('gardenSuggestions') || '[]');
    const total = suggestions.length;
    const pendentes = suggestions.filter(s => s.status === 'pendente').length;
    const aprovadas = suggestions.filter(s => s.status === 'aprovada').length;
    const rejeitadas = suggestions.filter(s => s.status === 'rejeitada').length;
    
    // Atualizar elementos no painel admin se existirem
    const totalElement = document.querySelector('.stats-total');
    const pendentesElement = document.querySelector('.stats-pendentes');
    const aprovadasElement = document.querySelector('.stats-aprovadas');
    const rejeitadasElement = document.querySelector('.stats-rejeitadas');
    
    if (totalElement) totalElement.textContent = total;
    if (pendentesElement) pendentesElement.textContent = pendentes;
    if (aprovadasElement) aprovadasElement.textContent = aprovadas;
    if (rejeitadasElement) rejeitadasElement.textContent = rejeitadas;
}

// Função para mostrar notificações
function showNotification(message, type = 'info') {
    // Remover notificação existente
    const existingNotification = document.querySelector('.admin-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Criar nova notificação
    const notification = document.createElement('div');
    notification.className = `admin-notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()">&times;</button>
        </div>
    `;
    
    // Estilos da notificação
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8',
        color: 'white',
        padding: '12px 20px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        zIndex: '9999',
        animation: 'slideInNotification 0.3s ease'
    });
    
    // Adicionar ao documento
    document.body.appendChild(notification);
    
    // Remover automaticamente após 4 segundos
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutNotification 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 4000);
}

// Adicionar estilos das notificações
const notificationStyles = `
    @keyframes slideInNotification {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutNotification {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .admin-notification .notification-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
    }
    
    .admin-notification button {
        background: none;
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer;
        padding: 0;
        margin-left: 10px;
    }
`;

// Adicionar estilos ao head
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Fechar menu ao clicar fora
document.addEventListener('click', function(event) {
    const adminMenu = document.getElementById('adminMenu');
    const dropdown = document.getElementById('adminDropdown');
    
    if (adminMenu && !adminMenu.contains(event.target)) {
        dropdown.classList.remove('show');
    }
    
    // Fechar modal ao clicar fora
    const modal = document.getElementById('loginModal');
    if (modal && event.target === modal) {
        closeLogin();
    }
});

// Fechar modal com Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('loginModal');
        if (modal && modal.classList.contains('show')) {
            closeLogin();
        }
        
        const dropdown = document.getElementById('adminDropdown');
        if (dropdown && dropdown.classList.contains('show')) {
            closeAdminMenu();
        }
    }
});

// ===== EXPORTAÇÃO PARA USO GLOBAL =====
window.LavoisierSite = {
    scrollToSection,
    openLightbox,
    closeLightbox,
    toggleFAQ,
    trackEvent,
    toggleAdminMenu,
    openLogin,
    closeLogin,
    performLogin,
    showAdminTab,
    logout,
    loadSuggestionsToAdmin,
    approveSuggestion,
    rejectSuggestion,
    deleteSuggestion
};

// ===== FUNÇÕES DO SISTEMA DE SUGESTÕES =====

// Função para carregar sugestões no admin
function loadSuggestionsToAdmin() {
    const adminSuggestionsContainer = document.querySelector('.suggestions-admin-list');
    if (!adminSuggestionsContainer) return;
    
    const suggestions = JSON.parse(localStorage.getItem('gardenSuggestions') || '[]');
    
    // Limpar container
    adminSuggestionsContainer.innerHTML = '';
    
    if (suggestions.length === 0) {
        adminSuggestionsContainer.innerHTML = '<p class="no-suggestions">Nenhuma sugestão encontrada.</p>';
        return;
    }
    
    // Gerar HTML das sugestões
    suggestions.reverse().forEach((suggestion, index) => {
        const card = document.createElement('div');
        card.className = 'admin-suggestion-card';
        card.innerHTML = `
            <div class="suggestion-header">
                <h4>${suggestion.nome}</h4>
                <span class="suggestion-date">${suggestion.data}</span>
            </div>
            <div class="suggestion-info">
                <p><strong>Email:</strong> ${suggestion.email || 'Não informado'}</p>
                <p><strong>Turma:</strong> ${suggestion.turma || 'Não informada'}</p>
                <p><strong>Planta sugerida:</strong> ${suggestion.planta || 'Não especificada'}</p>
            </div>
            <div class="suggestion-content">
                <p>${suggestion.sugestao}</p>
            </div>
            <div class="suggestion-actions">
                ${suggestion.status === 'pendente' ? `
                    <button class="btn-approve" onclick="approveSuggestion(${suggestion.id})">Aprovar</button>
                    <button class="btn-reject" onclick="rejectSuggestion(${suggestion.id})">Rejeitar</button>
                ` : `
                    <span class="suggestion-status ${suggestion.status === 'aprovada' ? 'Aprovada' : 'Rejeitada'}">
                        Status: ${suggestion.status}
                    </span>
                `}
                <button class="btn-delete" onclick="deleteSuggestion(${suggestion.id})">Excluir</button>
            </div>
        `;
        adminSuggestionsContainer.appendChild(card);
    });
    
    // Atualizar contador
    updateSuggestionsCount();
}

// Função para aprovar sugestão
function approveSuggestion(id) {
    const suggestions = JSON.parse(localStorage.getItem('gardenSuggestions') || '[]');
    const suggestion = suggestions.find(s => s.id == id);
    if (suggestion) {
        suggestion.status = 'aprovada';
        localStorage.setItem('gardenSuggestions', JSON.stringify(suggestions));
        loadSuggestionsToAdmin();
        showNotification('Sugestão aprovada!', 'success');
    }
}

// Função para rejeitar sugestão
function rejectSuggestion(id) {
    const suggestions = JSON.parse(localStorage.getItem('gardenSuggestions') || '[]');
    const suggestion = suggestions.find(s => s.id == id);
    if (suggestion) {
        suggestion.status = 'rejeitada';
        localStorage.setItem('gardenSuggestions', JSON.stringify(suggestions));
        loadSuggestionsToAdmin();
        showNotification('Sugestão rejeitada!', 'info');
    }
}

// Função para deletar sugestão
function deleteSuggestion(id) {
    if (confirm('Tem certeza que deseja excluir esta sugestão?')) {
        let suggestions = JSON.parse(localStorage.getItem('gardenSuggestions') || '[]');
        suggestions = suggestions.filter(s => s.id != id);
        localStorage.setItem('gardenSuggestions', JSON.stringify(suggestions));
        loadSuggestionsToAdmin();
        showNotification('Sugestão excluída!', 'success');
    }
}

// Função para atualizar contador de sugestões
function updateSuggestionsCount() {
    const suggestions = JSON.parse(localStorage.getItem('gardenSuggestions') || '[]');
    const total = suggestions.length;
    const pendentes = suggestions.filter(s => s.status === 'pendente').length;
    const aprovadas = suggestions.filter(s => s.status === 'aprovada').length;
    const rejeitadas = suggestions.filter(s => s.status === 'rejeitada').length;
    
    // Atualizar elementos no painel admin se existirem
    const totalElement = document.querySelector('.stats-total');
    const pendentesElement = document.querySelector('.stats-pendentes');
    const aprovadasElement = document.querySelector('.stats-aprovadas');
    const rejeitadasElement = document.querySelector('.stats-rejeitadas');
    
    if (totalElement) totalElement.textContent = total;
    if (pendentesElement) pendentesElement.textContent = pendentes;
    if (aprovadasElement) aprovadasElement.textContent = aprovadas;
    if (rejeitadasElement) rejeitadasElement.textContent = rejeitadas;
}