//---Menu

const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.body;

if (burger && menu) {
   burger.addEventListener('click', () => {
      burger.classList.toggle('_active');
      menu.classList.toggle('_active');
      body.classList.toggle('_lock');
   })
}



//---Swiper

// const popularSlider = new Swiper('.tours-slider', {
//    spaceBetween: 30,
//    slidesPerView: 1,
//    navigation: {
//      nextEl: '.tours-slider-next',
//      prevEl: '.tours-slider-prev',
//    },
//    breakpoints: {
// 		992: {
// 			slidesPerView: 3,
// 		},
// 		660: {
// 			slidesPerView: 2,
// 		}
// 	}
//  });




const toursSlider = new Swiper('.tour-slide', {
   spaceBetween: 30,
   slidesPerView: 1,
   navigation: {
     nextEl: '.tours-slider-next',
     prevEl: '.tours-slider-prev',
   },
   breakpoints: {
		992: {
			slidesPerView: 3,
		},
		660: {
			slidesPerView: 2,
		}
	}
 });









