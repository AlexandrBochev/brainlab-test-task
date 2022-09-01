const industriesActive = document.querySelector('.industries_link');

const blockActive1 = document.querySelector('.block_active1');

industriesActive.addEventListener('click', () => {
  blockActive1.style.visibility = 'visible';
  blockActive1.style.opacity = '1';
});