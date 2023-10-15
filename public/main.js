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

/************************/

// Company button'ı ve açılır menüyü seçin
/*const companyButton = document.getElementById('menu-full');*/  /** Zaten bu özellik flowbit ile tanımlı aşağıda sadece menunun ilk başta kapalı gelse yeter */
const companyDropdown = document.getElementById('menu-full-dropdown');

// Başlangıçta açılır menünün gizlenmesi için CSS sınıfını ekleyin
companyDropdown.classList.add('hidden');

// Company button'a tıklandığında açılır menüyü açın veya kapatın
companyButton.addEventListener('click', () => {
  if (companyDropdown.classList.contains('hidden')) {
    companyDropdown.classList.remove('hidden');
  } else {
    companyDropdown.classList.add('hidden');
  }
});



