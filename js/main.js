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

// Industrie Block
const firstSlide = document.getElementById('first_slide');
const industriesActive1 = document.getElementById('industries_item1');
const industriesActive2 = document.getElementById('industries_item2');
const industriesActive3 = document.getElementById('industries_item3');
const industriesActive4 = document.getElementById('industries_item4');
const industriesActive5 = document.getElementById('industries_item5');
const industriesActive6 = document.getElementById('industries_item6');
const industriesActive7 = document.getElementById('industries_item7');
const industriesActive8 = document.getElementById('industries_item8');
const industriesActive9 = document.getElementById('industries_item9');

const article1 = document.getElementById('article1');
const article2 = document.getElementById('article2');
const article3 = document.getElementById('article3');
const article4 = document.getElementById('article4');
const article5 = document.getElementById('article5');
const article6 = document.getElementById('article6');
const article7 = document.getElementById('article7');
const article8 = document.getElementById('article8');
const article9 = document.getElementById('article9');

$(document).ready(function(){
  article6.classList.add('active');
  firstSlide.style.background = '#fff';
});

industriesActive1.addEventListener('click', () => {
  article1.classList.add('active')
  article2.classList.remove('active')
  article3.classList.remove('active')
  article4.classList.remove('active')
  article5.classList.remove('active')
  article6.classList.remove('active')
  article7.classList.remove('active')
  article8.classList.remove('active')
  article9.classList.remove('active')
  firstSlide.style.background = 'linear-gradient(90.06deg, #FFFFFF 70.83%, rgba(255, 255, 255, 0.25) 99.97%)';
});

industriesActive2.addEventListener('click', () => {
  article1.classList.remove('active')
  article2.classList.add('active')
  article3.classList.remove('active')
  article4.classList.remove('active')
  article5.classList.remove('active')
  article6.classList.remove('active')
  article7.classList.remove('active')
  article8.classList.remove('active')
  article9.classList.remove('active')
  firstSlide.style.background = 'linear-gradient(90.06deg, #FFFFFF 70.83%, rgba(255, 255, 255, 0.25) 99.97%)';
});

industriesActive3.addEventListener('click', () => {
  article1.classList.remove('active')
  article2.classList.remove('active')
  article3.classList.add('active')
  article4.classList.remove('active')
  article5.classList.remove('active')
  article6.classList.remove('active')
  article7.classList.remove('active')
  article8.classList.remove('active')
  article9.classList.remove('active')
  firstSlide.style.background = 'linear-gradient(90.06deg, #FFFFFF 70.83%, rgba(255, 255, 255, 0.25) 99.97%)';
});

industriesActive4.addEventListener('click', () => {
  article1.classList.remove('active')
  article2.classList.remove('active')
  article3.classList.remove('active')
  article4.classList.add('active')
  article5.classList.remove('active')
  article6.classList.remove('active')
  article7.classList.remove('active')
  article8.classList.remove('active')
  article9.classList.remove('active')
  firstSlide.style.background = 'linear-gradient(90.06deg, #FFFFFF 70.83%, rgba(255, 255, 255, 0.25) 99.97%)';
});

industriesActive5.addEventListener('click', () => {
  article1.classList.remove('active')
  article2.classList.remove('active')
  article3.classList.remove('active')
  article4.classList.remove('active')
  article5.classList.add('active')
  article6.classList.remove('active')
  article7.classList.remove('active')
  article8.classList.remove('active')
  article9.classList.remove('active')
  firstSlide.style.background = 'linear-gradient(90.06deg, #FFFFFF 70.83%, rgba(255, 255, 255, 0.25) 99.97%)';
});

industriesActive6.addEventListener('click', () => {
  article1.classList.remove('active')
  article2.classList.remove('active')
  article3.classList.remove('active')
  article4.classList.remove('active')
  article5.classList.remove('active')
  article6.classList.add('active')
  article7.classList.remove('active')
  article8.classList.remove('active')
  article9.classList.remove('active')
  firstSlide.style.background = '#fff';
});

industriesActive7.addEventListener('click', () => {
  article1.classList.remove('active')
  article2.classList.remove('active')
  article3.classList.remove('active')
  article4.classList.remove('active')
  article5.classList.remove('active')
  article6.classList.remove('active')
  article7.classList.add('active')
  article8.classList.remove('active')
  article9.classList.remove('active')
  firstSlide.style.background = 'linear-gradient(90.06deg, #FFFFFF 70.83%, rgba(255, 255, 255, 0.25) 99.97%)';
});

industriesActive8.addEventListener('click', () => {
  article1.classList.remove('active')
  article2.classList.remove('active')
  article3.classList.remove('active')
  article4.classList.remove('active')
  article5.classList.remove('active')
  article6.classList.remove('active')
  article7.classList.remove('active')
  article8.classList.add('active')
  article9.classList.remove('active')
  firstSlide.style.background = 'linear-gradient(90.06deg, #FFFFFF 70.83%, rgba(255, 255, 255, 0.25) 99.97%)';
});

industriesActive9.addEventListener('click', () => {
  article1.classList.remove('active')
  article2.classList.remove('active')
  article3.classList.remove('active')
  article4.classList.remove('active')
  article5.classList.remove('active')
  article6.classList.remove('active')
  article7.classList.remove('active')
  article8.classList.remove('active')
  article9.classList.add('active')
  firstSlide.style.background = 'linear-gradient(90.06deg, #FFFFFF 70.83%, rgba(255, 255, 255, 0.25) 99.97%)';
});