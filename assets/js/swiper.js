let reviewsSwiper = null;
let scrolling = true;
let lastMode = null;

function initReviewsSwiper() {
  const isDesktop = window.innerWidth >= 992;
  const mode = isDesktop ? "desktop" : "mobile";

  if (reviewsSwiper && lastMode === mode) return;

  if (reviewsSwiper) {
    reviewsSwiper.destroy(true, true);
    reviewsSwiper = null;
  }

  lastMode = mode;

  reviewsSwiper = new Swiper(".l-reviews-swiper", {
    direction: isDesktop ? "vertical" : "horizontal",
    slidesPerView: isDesktop ? 3 : 1,
    spaceBetween: 10,
    freeMode: {
      enabled: isDesktop,
      momentum: false,
    },
     pagination: {
    el: ".reviews-pagination",
    clickable: true,
  },
    loop: true,
    allowTouchMove: !isDesktop,

    breakpoints: {
      320: { slidesPerView: 1 },
      576: { slidesPerView: 1.4 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 2.7 },
    },
  });

  if (isDesktop) startInfiniteScroll();
}

function startInfiniteScroll() {
  function animate() {
    if (!scrolling) return requestAnimationFrame(animate);

    const speed = 0.35; 

    reviewsSwiper.translate -= speed;

    const maxTranslate = reviewsSwiper.wrapperEl.scrollHeight / 2;

    if (Math.abs(reviewsSwiper.translate) >= maxTranslate) {
      reviewsSwiper.translate = 0;
    }

    reviewsSwiper.wrapperEl.style.transform =
      `translate3d(0, ${reviewsSwiper.translate}px, 0)`;

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

  const wrapper = document.querySelector(".l-reviews-swiper");

  wrapper.addEventListener("mouseenter", () => {
    scrolling = false;
  });

  wrapper.addEventListener("mouseleave", () => {
    scrolling = true;
  });
}

window.addEventListener("load", initReviewsSwiper);

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(initReviewsSwiper, 200);
});






const swiperProcess = new Swiper(".r-advantages-swiper ", {
  spaceBetween: 10,
  slidesPerView: 3,
  pagination: {
    el: ".r-advantages-pagination",
    clickable: true,
  },
  breakpoints: {
      300: {
      slidesPerView: 1,
    },
     540: {
      slidesPerView: 1.5,
    },
    640: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 2.5,
    },

    1100: {
      slidesPerView: 3,
    },
  },
});



const howWorkSwiper = new Swiper(".how-work-swiper", {
  spaceBetween: 10,
  slidesPerView:3,
  pagination: {
    el: ".work-swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    320: { slidesPerView: 1 },
    490: { slidesPerView: 1 },
    530: { slidesPerView: 1 },
    620: { slidesPerView: 1.5 , },
    810: { slidesPerView: 2 },
    992: { slidesPerView: 2.5 },
    1263: { slidesPerView: 2.6 },
    1300: { slidesPerView: 3 },
  },
});
