// Header
(function() {
  // Header
  const header = document.querySelector('.header');
  const headerLogo = document.querySelector('.header_logo_img');
  
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add('header_active');
      headerLogo.classList.add('header_logo_img_active');
    } else {
      header.classList.remove('header_active');
      headerLogo.classList.remove('header_logo_img_active');
    }
  };

  // burger
  const burgerOpen = document.querySelector('.burger_open');
  const burgerclose = document.querySelector('.burger_close');
  const menu = document.querySelector('.header_menu');

  burgerOpen.addEventListener('click', () => {
    menu.classList.add('header_menu_acive');
  });

  burgerclose.addEventListener('click', () => {
    menu.classList.remove('header_menu_acive');
  });

}());

// Sliders
$(document).ready(function(){

  if (window.innerWidth > 767) {
    $('.industries_blocks').slick({
      arrows: false,
      fade: true,
    });
  };

  $('.industries_list .industries_item').click(function() {
    var $this = $(this);
    $('.industries_blocks').slick('slickGoTo', $this.data('index'))
  });

  $('.slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    touchThreshold: 20,
    asNavFor: '.slider-nav',
  });

  $('.slider-nav').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    variableWidth: true,
    touchThreshold: 20,
    asNavFor: '.slider',
  });

});

// Popup
const openPopUp = document.querySelector('.open_popup');
const closePopUp = document.querySelector('.popup_close'); 
const popUp = document.querySelector('.popup'); 
const bgClosePopUp = document.querySelector('.popup_bg '); 
const sendClose = document.querySelector('.popup_send '); 

openPopUp.addEventListener('click', (e) => {
  e.preventDefault()
  popUp.style.opacity = '1';
  popUp.style.visibility = 'visible';
});
closePopUp.addEventListener('click', (e) => {
  e.preventDefault()
  popUp.style.opacity = '0';
  popUp.style.visibility = 'hidden';
});
bgClosePopUp.addEventListener('click', (e) => {
  e.preventDefault()
  popUp.style.opacity = '0';
  popUp.style.visibility = 'hidden';
});
sendClose.addEventListener('click', (e) => {
  e.preventDefault()
  popUp.style.opacity = '0';
  popUp.style.visibility = 'hidden';
});



