let swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

let swiperH = new Swiper('.swiper-h', {
  spaceBetween: 50,
  pagination: {
    el: '.pgH',
    clickable: true,
  },
});
let swiperV1 = new Swiper('.v1', {
  direction: 'vertical',
  spaceBetween: 50,
  navigation: {
    nextEl: '.next1',
    prevEl: '.prev1',
  },
});

let swiperV2 = new Swiper('.v2', {
  direction: 'vertical',
  spaceBetween: 50,
  navigation: {
    nextEl: '.next2',
    prevEl: '.prev2',
  },
});

const $FAQcon = document.querySelector('.language');
const $list = $FAQcon.querySelectorAll('.language>.sub');

$FAQcon.addEventListener('click', (e) => {
  const q = e.target.closest('.language>.sub');
  if (!q) return;

  $list.forEach((item) => {
    if (item != q) {
      item.classList.remove('on');
    }
  });
  q.classList.toggle('on');
});
