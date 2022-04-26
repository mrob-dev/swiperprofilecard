const SwiperProfileCard = new Swiper('.swiperprofilecard', {
    direction: 'horizontal',
      slidesPerView: 1,
    pagination: { 
      el: '.swiper-pagination', 
      clickable: true, 
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    loop: 'infinite',
    speed: 2000,
  });