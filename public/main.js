/************************/
var swiper = new Swiper(".mySwiper", {
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

/*************************/


