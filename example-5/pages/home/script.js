"use strict"


document.getElementById("logo").addEventListener('click', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = '../home/index.html';
    }, 300);
})
document.getElementById("home").addEventListener('click', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = '../home/index.html';
    }, 300);
})
document.getElementById("domains").addEventListener('click', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = '../domains/index.html';
    }, 300);
})
document.getElementById("hosting").addEventListener('click', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = '../hosting/index.html';
    }, 300);
})
document.getElementById("vsp").addEventListener('click', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = '../vsp/index.html';
    }, 300);
})
document.getElementById("servers").addEventListener('click', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = '../servers/index.html';
    }, 300);
})
document.getElementById("ssl").addEventListener('click', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = '../ssl/index.html';
    }, 300);
})
document.getElementById("information").addEventListener('click', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        window.location.href = '../information/index.html';
    }, 300);
})


// SLIDER
class SimpleSlider {
  constructor() {
    this.slides = document.querySelectorAll('.slide');
    this.dots = document.querySelectorAll('.dot');
    this.currentSlide = 0;
    this.init();
  }

  init() {
    document.querySelector('.prev-btn').addEventListener('click', () => {
      this.prevSlide();
    });

    document.querySelector('.next-btn').addEventListener('click', () => {
      this.nextSlide();
    });

    this.dots.forEach(dot => {
      dot.addEventListener('click', () => {
        this.goToSlide(parseInt(dot.getAttribute('data-slide')));
      });
    });

    // Автопрокрутка (опционально)
    this.startAutoPlay();
  }

  showSlide(index) {
    this.slides.forEach(slide => slide.classList.remove('active'));
    this.dots.forEach(dot => dot.classList.remove('active'));
    
    this.slides[index].classList.add('active');
    this.dots[index].classList.add('active');
    this.currentSlide = index;
  }

  nextSlide() {
    let nextIndex = (this.currentSlide + 1) % this.slides.length;
    this.showSlide(nextIndex);
  }

  prevSlide() {
    let prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.showSlide(prevIndex);
  }

  goToSlide(index) {
    this.showSlide(index);
  }

  startAutoPlay() {
    setInterval(() => {
      this.nextSlide();
    }, 10000); // Меняет каждые 5 секунд
  }
}

// Запуск слайдера
document.addEventListener('DOMContentLoaded', function() {
  new SimpleSlider();
});