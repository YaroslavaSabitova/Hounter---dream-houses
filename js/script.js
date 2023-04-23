// section features

const swiper1 = new Swiper(".mySwiper1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: "auto",
  spaceBetween: 40,
  centeredSlides: true,
  initialSlide: 1,
});



// section review

const swiper = new Swiper(".mySwiper", {
  pagination: {
      clickable: true,    
      el: ".swiper-pagination",
  },
  slidesPerView: "auto",
  spaceBetween: 56,
  centeredSlides: true,
  initialSlide: 1,
});


