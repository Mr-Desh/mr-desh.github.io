"use strict";

// Загружаем "BackToPortfolio" на страницу
async function loadBackToPortfolio() {
    try {
        let backToPortfolioPath = "../../../../../nikiforov.h1n.ru/components/return-to-portfolio.html";
        const response = await fetch(backToPortfolioPath);
        const headerHTML = await response.text();
        document.getElementById("header-portfolio").innerHTML = headerHTML;

        const BackToPortfolio = document.getElementById("portfolioLink");
        if (BackToPortfolio) {
            BackToPortfolio.addEventListener("click", () => {
                window.location.href = "../../index.html";
            });
        }
    } catch (error) {
        console.log("BackToPortfolio not load!");
    }
}

// Запускаем при загрузке страницы
document.addEventListener("DOMContentLoaded", loadBackToPortfolio);
