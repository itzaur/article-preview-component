const share = document.querySelector('.share');
const social = document.querySelector('.info__contact-social');
const info = document.querySelector('.info');

share.addEventListener('click', function () {
  social.classList.toggle('active');

  if (social.classList.contains('active')) {
    share.style.background = `var(--clr-dark)`;
    document.querySelector('.share img').style.filter = 'brightness(3)';
  } else {
    share.style.background = `var(--clr-light)`;
    document.querySelector('.share img').style.filter = 'brightness(1)';
  }

  // if (
  //   social.classList.contains('active') &&
  //   window.matchMedia('(max-width: 600px)').matches
  // ) {
  //   info.style.paddingBottom = 0;
  // } else {
  //   info.style.paddingBottom = `var(--fluid-3)`;
  // }
});

// window.addEventListener('resize', function () {
//   if (
//     social.classList.contains('active') &&
//     window.matchMedia('(max-width: 600px)').matches
//   ) {
//     info.style.paddingBottom = 0;
//   } else {
//     info.style.paddingBottom = `var(--fluid-3)`;
//   }
// });

// window.addEventListener('resize', function () {
//   if (
//     social.classList.contains('active') &&
//     window.matchMedia('(max-width: 1440px)').matches
//   ) {
//     document.querySelector('.info__contact-social').style.right = '-7%';
//   } else {
//     document.querySelector('.info__contact-social').style.right = '-8.5%';
//   }

// });
