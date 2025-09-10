"use strict"

let up = document.getElementById('up')

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 250) {
        up.style.display = "block";
        up.style.behavior = "smooth";
        
    } else {
        up.style.display = "none";
        up.style.behavior = "smooth";
    }
});

up.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Загрузка модальных окон
async function loadModals() {
    const modalsConfig = [
        { modalId: 'modal1', path: 'components/modals/modal__irinaLaim.html', openBtnId: 'IrinaLaim', closeBtnId: 'close__modal1' },
        { modalId: 'modal2', path: 'components/modals/modal__marinaOrlova.html', openBtnId: 'MarinaOrlova', closeBtnId: 'close__modal2' },
        { modalId: 'modal3', path: 'components/modals/modal__maksimPetrov.html', openBtnId: 'MaksimPetrov', closeBtnId: 'close__modal3' },
        { modalId: 'modal4', path: 'components/modals/modal__kostantinNazarov.html', openBtnId: 'KonstantinNazarov', closeBtnId: 'close__modal4' },
        { modalId: 'modal5', path: 'components/modals/modal__lisaVesennyaya.html', openBtnId: 'LisaVesennyaya', closeBtnId: 'close__modal5' }
    ];
    
    try {
        const overlay = document.getElementById("overlay");
        
        // Параллельная загрузка всех модальных окон
        const promises = modalsConfig.map(async (config) => {
            const response = await fetch(config.path);
            const html = await response.text();
            return { ...config, html };
        });
        
        const loadedModals = await Promise.all(promises);
        
        // Обработка загруженных модальных окон
        loadedModals.forEach(({ modalId, html, openBtnId, closeBtnId }) => {
            const modal = document.getElementById(modalId);
            modal.innerHTML = html;
            
            document.getElementById(openBtnId).addEventListener("click", () => {
                modal.style.display = "block";
                overlay.classList.add("show");
            });
            
            document.getElementById(closeBtnId).addEventListener("click", () => {
                modal.style.display = "none";
                overlay.classList.remove("show");
            });
        });

        document.getElementById("education").addEventListener("click", () => {
            document.getElementById("education").style.color = "#D52027";
            document.getElementById("working").style.color = "black";
            document.getElementById("awards").style.color = "black";
            document.getElementById("education-style").style.display = "block";
            document.getElementById("working-style").style.display = "none";
            document.getElementById("awards-style").style.display = "none";
        })
        document.getElementById("working").addEventListener("click", () => {
            document.getElementById("education").style.color = "black";
            document.getElementById("working").style.color = "#D52027";
            document.getElementById("awards").style.color = "black";
            document.getElementById("education-style").style.display = "none";
            document.getElementById("working-style").style.display = "block";
            document.getElementsByClassName("awards-style").style.display = "none";
        })
        document.getElementById("awards").addEventListener("click", () => {
            document.getElementById("education").style.color = "black";
            document.getElementById("working").style.color = "black";
            document.getElementById("awards").style.color = "#D52027";
            document.getElementById("education-style").style.display = "none";
            document.getElementById("working-style").style.display = "none";
            document.getElementById("awards-style").style.display = "block";
        })
    } catch (error) {
        console.log("Modal not load!");
    }
}

// Запускаем при загрузке страницы
document.addEventListener("DOMContentLoaded", loadModals);