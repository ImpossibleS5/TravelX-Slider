import Swiper from "swiper/bundle";
import "swiper/css/bundle";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  parallax: true,
  speed: 1500,

  keyboard: {
    enabled: true,
  },

  pagination: {
    el: ".slider-controls__count",
    type: "fraction",
  },

  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

export default swiper;
