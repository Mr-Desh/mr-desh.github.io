// Загружаем footer на страницу
async function loadFooter() {
    try {
        let footerPath = "../../components/footer.html";
        const response = await fetch(footerPath);
        const footerHTML = await response.text();
        document.getElementById("footer-container").innerHTML = footerHTML;
    } catch (error) {
        console.log("Footer not load!");
    }
}

// Запускаем при загрузке страницы
document.addEventListener("DOMContentLoaded", loadFooter);