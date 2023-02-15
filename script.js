//snooth scroll
import LocomotiveScroll from "locomotive-scroll";

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
  multiplier: 1, // Effect Multiplier , try 1
  reloadOnContextChange: true,
  touchMultiplier: 4, // try 3
  smoothMobile: 1,
  smartphone: {
    smooth: !0,
    multiplier: 3,
    breakpoint: 767,
  },
  tablet: {
    smooth: !1,
    multiplier: 3,
    breakpoint: 1024,
  },
});

// open close modal
const video = document.querySelector(".video-wrap");
const closeBtn = document.querySelector(".close-btn");
const openBtn = document.querySelectorAll(".play-btn");

openBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    video.classList.add("show");
  });
});

closeBtn.addEventListener("click", () => {
  video.classList.remove("show");
  stopVideo();
});

// stop video function
const iframe = document.querySelector("iframe");
function stopVideo() {
  iframe.src = iframe.src;
}

// fix the locomotive's render bug issue
imagesLoaded(
  document.querySelector(".wrapper"),
  { background: true },
  function () {
    scroll.update();
  }
);


//Loader
const loader = document.getElementById('loader');
loader.style.display = 'block';
window.onload = () => {
  loader.style.display = 'none';
};
