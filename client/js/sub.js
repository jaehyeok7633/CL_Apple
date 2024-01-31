var thirdSwiper = new Swiper('.third-section-swiper', {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 20,
  autoHeight: true,
  autoWidth: true,

  navigation: {
    prevEl: '.third-section-swiper .swiper-button-prev',
    nextEl: '.third-section-swiper .swiper-button-next'
  },

  on: {
    init: function () {
    
      var currentSlide = this.realIndex + 1;

      // 초기화 시 버튼 상태 설정
      if (currentSlide === 1) {
        document.querySelector('.third-section-swiper .swiper-button-prev').style.visibility = 'hidden';
        document.querySelector('.third-section-swiper .swiper-button-next').style.visibility = 'visible';
      } else if (this.isEnd) {
        document.querySelector('.third-section-swiper .swiper-button-next').style.visibility = 'hidden';
        document.querySelector('.third-section-swiper .swiper-button-prev').style.visibility = 'visible';
      } else {
        document.querySelector('.third-section-swiper .swiper-button-prev').style.visibility = 'visible';
        document.querySelector('.third-section-swiper .swiper-button-next').style.visibility = 'visible';
      }
    },
    slideChange: function () {
  
      var currentSlide = this.realIndex + 1;

      // 슬라이드 변경 시 버튼 상태 설정
      if (currentSlide === 1) {
        document.querySelector('.third-section-swiper .swiper-button-prev').style.visibility = 'hidden';
        document.querySelector('.third-section-swiper .swiper-button-next').style.visibility = 'visible';
      } else if (this.isEnd) {
        document.querySelector('.third-section-swiper .swiper-button-next').style.visibility = 'hidden';
        document.querySelector('.third-section-swiper .swiper-button-prev').style.visibility = 'visible';
      } else {
        document.querySelector('.third-section-swiper .swiper-button-prev').style.visibility = 'visible';
        document.querySelector('.third-section-swiper .swiper-button-next').style.visibility = 'visible';
      }
    },
  },
});

// 마우스 이벤트 처리
document.querySelector('.third-section-swiper').addEventListener('mouseenter', function () {
  
  var currentSlide = thirdSwiper.realIndex + 1;

      // 슬라이드 변경 시 버튼 상태 설정
      if (currentSlide === 1) {
        document.querySelector('.third-section-swiper .swiper-button-prev').style.visibility = 'hidden';
        document.querySelector('.third-section-swiper .swiper-button-next').style.visibility = 'visible';
      } else if (thirdSwiper.isEnd) {
        document.querySelector('.third-section-swiper .swiper-button-next').style.visibility = 'hidden';
        document.querySelector('.third-section-swiper .swiper-button-prev').style.visibility = 'visible';
      } else {
        document.querySelector('.third-section-swiper .swiper-button-prev').style.visibility = 'visible';
        document.querySelector('.third-section-swiper .swiper-button-next').style.visibility = 'visible';
      }
});

document.querySelector('.third-section-swiper').addEventListener('mouseleave', function () {
    document.querySelector('.third-section-swiper .swiper-button-prev').style.visibility = 'hidden';
    document.querySelector('.third-section-swiper .swiper-button-next').style.visibility = 'hidden';
  
});

var fourthSwiper = new Swiper('.fourth-section-swiper', {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 20,
  autoHeight: true,
  autoWidth: true,

  navigation: {
    prevEl: '.fourth-section-swiper .swiper-button-prev',
    nextEl: '.fourth-section-swiper .swiper-button-next'
  },

  on: {
    init: function () {

      var currentSlide = this.realIndex + 1;

      // 초기화 시 버튼 상태 설정
      if (currentSlide === 1) {
        document.querySelector('.fourth-section-swiper .swiper-button-prev').style.visibility = 'hidden';
        document.querySelector('.fourth-section-swiper .swiper-button-next').style.visibility = 'visible';
      } else if (this.isEnd) {
        document.querySelector('.fourth-section-swiper .swiper-button-next').style.visibility = 'hidden';
        document.querySelector('.fourth-section-swiper .swiper-button-prev').style.visibility = 'visible';
      } else {
        document.querySelector('.fourth-section-swiper .swiper-button-prev').style.visibility = 'visible';
        document.querySelector('.fourth-section-swiper .swiper-button-next').style.visibility = 'visible';
      }
    },
    slideChange: function () {
    
      var currentSlide = this.realIndex + 1;

      // 슬라이드 변경 시 버튼 상태 설정
      if (currentSlide === 1) {
        document.querySelector('.fourth-section-swiper .swiper-button-prev').style.visibility = 'hidden';
        document.querySelector('.fourth-section-swiper .swiper-button-next').style.visibility = 'visible';
      } else if (this.isEnd) {
        document.querySelector('.fourth-section-swiper .swiper-button-next').style.visibility = 'hidden';
        document.querySelector('.fourth-section-swiper .swiper-button-prev').style.visibility = 'visible';
      } else {
        document.querySelector('.fourth-section-swiper .swiper-button-prev').style.visibility = 'visible';
        document.querySelector('.fourth-section-swiper .swiper-button-next').style.visibility = 'visible';
      }
    },
  },
});

// 마우스 이벤트 처리
document.querySelector('.fourth-section-swiper').addEventListener('mouseenter', function () {

  var currentSlide = fourthSwiper.realIndex + 1;

      // 슬라이드 변경 시 버튼 상태 설정
      if (currentSlide === 1) {
        document.querySelector('.fourth-section-swiper .swiper-button-prev').style.visibility = 'hidden';
        document.querySelector('.fourth-section-swiper .swiper-button-next').style.visibility = 'visible';
      } else if (fourthSwiper.isEnd) {
        document.querySelector('.fourth-section-swiper .swiper-button-next').style.visibility = 'hidden';
        document.querySelector('.fourth-section-swiper .swiper-button-prev').style.visibility = 'visible';
      } else {
        document.querySelector('.fourth-section-swiper .swiper-button-prev').style.visibility = 'visible';
        document.querySelector('.fourth-section-swiper .swiper-button-next').style.visibility = 'visible';
      }
});

document.querySelector('.fourth-section-swiper').addEventListener('mouseleave', function () {

    document.querySelector('.fourth-section-swiper .swiper-button-prev').style.visibility = 'hidden';
    document.querySelector('.fourth-section-swiper .swiper-button-next').style.visibility = 'hidden';
  
});

var fifthSwiper = new Swiper('.fifth-section-swiper', {
  loop: false,
  slidesPerView: 4,
  spaceBetween: 20,
  autoHeight: true,
  autoWidth: true,

  navigation: {
    prevEl: '.fifth-section-swiper .swiper-button-prev',
    nextEl: '.fifth-section-swiper .swiper-button-next'
  },

  on: {
    init: function () {

      var currentSlide = this.realIndex + 1;

      // 초기화 시 버튼 상태 설정
      if (currentSlide === 1) {
        document.querySelector('.fifth-section-swiper .swiper-button-prev').style.visibility = 'hidden';
        document.querySelector('.fifth-section-swiper .swiper-button-next').style.visibility = 'visible';
      } else if (this.isEnd) {
        document.querySelector('.fifth-section-swiper .swiper-button-next').style.visibility = 'hidden';
        document.querySelector('.fifth-section-swiper .swiper-button-prev').style.visibility = 'visible';
      } else {
        document.querySelector('.fifth-section-swiper .swiper-button-prev').style.visibility = 'visible';
        document.querySelector('.fifth-section-swiper .swiper-button-next').style.visibility = 'visible';
      }
    },
    slideChange: function () {
    
      var currentSlide = this.realIndex + 1;

      // 슬라이드 변경 시 버튼 상태 설정
      if (currentSlide === 1) {
        document.querySelector('.fifth-section-swiper .swiper-button-prev').style.visibility = 'hidden';
        document.querySelector('.fifth-section-swiper .swiper-button-next').style.visibility = 'visible';
      } else if (this.isEnd) {
        document.querySelector('.fifth-section-swiper .swiper-button-next').style.visibility = 'hidden';
        document.querySelector('.fifth-section-swiper .swiper-button-prev').style.visibility = 'visible';
      } else {
        document.querySelector('.fifth-section-swiper .swiper-button-prev').style.visibility = 'visible';
        document.querySelector('.fifth-section-swiper .swiper-button-next').style.visibility = 'visible';
      }
    },
  },
});

// 마우스 이벤트 처리
document.querySelector('.fifth-section-swiper').addEventListener('mouseenter', function () {

  var currentSlide = fifthSwiper.realIndex + 1;

      // 슬라이드 변경 시 버튼 상태 설정
      if (currentSlide === 1) {
        document.querySelector('.fifth-section-swiper .swiper-button-prev').style.visibility = 'hidden';
        document.querySelector('.fifth-section-swiper .swiper-button-next').style.visibility = 'visible';
      } else if (fifthSwiper.isEnd) {
        document.querySelector('.fifth-section-swiper .swiper-button-next').style.visibility = 'hidden';
        document.querySelector('.fifth-section-swiper .swiper-button-prev').style.visibility = 'visible';
      } else {
        document.querySelector('.fifth-section-swiper .swiper-button-prev').style.visibility = 'visible';
        document.querySelector('.fifth-section-swiper .swiper-button-next').style.visibility = 'visible';
      }
});

document.querySelector('.fifth-section-swiper').addEventListener('mouseleave', function () {

    document.querySelector('.fifth-section-swiper .swiper-button-prev').style.visibility = 'hidden';
    document.querySelector('.fifth-section-swiper .swiper-button-next').style.visibility = 'hidden';
  
});

// 페이지 로드 시 초기 버튼 상태 설정
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.third-section-swiper .swiper-button-prev').style.visibility = 'hidden';
    document.querySelector('.third-section-swiper .swiper-button-next').style.visibility = 'hidden';
    document.querySelector('.fourth-section-swiper .swiper-button-prev').style.visibility = 'hidden';
    document.querySelector('.fourth-section-swiper .swiper-button-next').style.visibility = 'hidden';
    document.querySelector('.fifth-section-swiper .swiper-button-prev').style.visibility = 'hidden';
    document.querySelector('.fifth-section-swiper .swiper-button-next').style.visibility = 'hidden';
  
});

