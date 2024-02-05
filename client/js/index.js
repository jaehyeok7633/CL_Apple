const homeswiper = new Swiper('.homeswiper', {
    // Optional parameters
    loop: false,
    slidesPerView: 1,
    autoHeight: true,
    autoWidth: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.homeswiper .swiper-button-next',
      prevEl: '.homeswiper .swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  
  document.addEventListener("DOMContentLoaded", function(){
    /////// Prevent closing from click inside dropdown
    document.querySelectorAll('.dropdown-menu').forEach(function(element){
      element.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    })
}); 