const industriesActive1 = document.querySelector('.industries_link1');
const industriesActive2 = document.querySelector('.industries_link2');

const blockActive1 = document.querySelector('.block_active1');
const blockActive2 = document.querySelector('.block_active2');

industriesActive1.addEventListener('click', () => {
  blockActive1.style.opacity = '1';
  blockActive2.style.opacity = '0';
});

industriesActive2.addEventListener('click', () => {
  blockActive1.style.opacity = '0';
  blockActive2.style.opacity = '1';
});