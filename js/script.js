// $(document).ready(function(){
//   $('.carousel__inner').slick({
//     speed: 1200,
//     prevArrow: '<button type="button" class="slick-prev"><img src="icons/03courusel/left.png"/></button>',
//     nextArrow: '<button type="button" class="slick-next"><img src="icons/03courusel/right.png"/></button>',
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 arrows: false,
//                 dots: true
//             }
//         }
//     ]
//   });
// });


var slider = tns({
    container: '.carousel__inner',
    items: 1,
    speed: 1200,
    slideBy: 'page',
    controls: false,
    responsive: {
      320: {
        nav: true
      },
      1120: {
        nav: false
      }
    }
  });

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});

(function($) {
$(function() {
  
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('.catalog').find('.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
  function toggleSlide(item){
      $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list-wrapper').eq(i).toggleClass('catalog-item__list-wrapper_active');
      });
    });
  };
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
  
  //modal

  $('[data-modal=consultation]').on('click', function(){
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function(){
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });
  $('.button_catalog').each(function(i){
    $(this).on('click', function(){
      $('#order .modal__subtitle').text($('.catalog-item__title').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    });
  })

  function validateForm(form){
    $(form).validate({
      rules: {
        name: 'required',
        phone: 'required',
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: 'Пожалуйста, введите свое имя',
        phone: 'Пожалуйста, введите свой номер телефона',
        email: {
          required: 'Пожалуйста, введите свою почту',
          email: 'Неправильно введена почта'
        }
      }
    });
  }
  validateForm('#consultation form');
  validateForm('#consultation-form');
  validateForm('#order form');

  $('[name = phone]').mask("+375(99) 999-99-99");
});
})(jQuery);