// Загружаем header на страницу
async function loadHeader() {
    try {
        // Для главной страницы
        let headerPath = "components/header.html";

        // Для остальных
        if (window.location.pathname.includes("/pages/")) {
            headerPath = "../../components/header.html";
        }

        const response = await fetch(headerPath);
        const headerHTML = await response.text();
        document.getElementById("header-container").innerHTML = headerHTML;

        // Инициализация
        initBackToPortfolio();
        initNavigation();
    } catch (error) {
        console.log("Header not load!");
    }
}

// Вернуться к портфолио
function initBackToPortfolio() {
    const BackToPortfolio = document.getElementById("portfolioLink");
    if (BackToPortfolio) {
        BackToPortfolio.addEventListener('click', () => {
            window.location.href = '../../../index.html';
        });
    }
}

// Навигая
function initNavigation() {
    const logo = document.getElementById('logo');
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = '../home/index.html';
        })
    }
    const home = document.getElementById('home');
    if (home) {
        home.addEventListener('click', () => {
            window.location.href = '../home/index.html';
        })
    }
    const domains = document.getElementById('domains');
    if (domains) {
        domains.addEventListener('click', () => {
            window.location.href = '../domains/index.html';
        })
    }
}

// Запускаем при загрузке страницы
document.addEventListener("DOMContentLoaded", loadHeader);
