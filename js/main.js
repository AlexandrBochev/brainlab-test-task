// Slider
$(document).ready(function(){

  $('.industries_blocks').slick({
    arrows: false,
    fade: true,
  });

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



