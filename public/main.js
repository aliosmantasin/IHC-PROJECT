
var swiper = new Swiper(".mySeceondSwiper", {
  slidesPerView: 1, // Mobilde 1 slide göster
  spaceBetween: 30,
  autoplay: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // Büyük ekranlarda 4 slide göster
    768: {
      slidesPerView: 4,
    },
  },
});






/**  Initialize Swiper **/
const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      on: {
        autoplayTimeLeft(s, time, progress) {
          progressCircle.style.setProperty("--progress", 1 - progress);
          progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
      }
    });

    swiper.el.addEventListener("mouseenter", () => {
      swiper.autoplay.stop();
    });
    
    swiper.el.addEventListener("mouseleave", () => {
      swiper.autoplay.start();
    });

/**  Initialize Swiper **/




var swiper = new Swiper(".myOrtaklarSwiper", {
  slidesPerView: 1, // Mobilde 1 slide göster
  spaceBetween: 30,
  autoplay: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // Ekran 
    
    425: {
      slidesPerView: 1,
    },
  },
});






