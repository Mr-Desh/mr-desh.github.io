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
    } catch (error) {
        console.log("Header not load!");
    }
}

function initBackToPortfolio() {
    const BackToPortfolio = document.getElementById("portfolioLink");
    if (BackToPortfolio) {
        BackToPortfolio.addEventListener('click', () => {
            window.location.href = '../../../index.html';
        });
    }
}

// Запускаем при загрузке страницы
document.addEventListener("DOMContentLoaded", loadHeader);
