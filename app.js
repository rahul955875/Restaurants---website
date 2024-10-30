const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// ================slider part==================
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let image = document.querySelector(".images");
let items = document.querySelectorAll(".images .item");
let contents = document.querySelectorAll(".content .item");

let rotate = 0;
let active = 0;
let countItem = items.length;
let rotateAdd = 360 / countItem;

function show() {
  image.style.setProperty("--rotate", rotate + "deg");
  contents.forEach((content, key) => {
    // console.log(content)
    if (key == active) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });
}
function nextSlide() {
  active = active + 1 > countItem - 1 ? 0 : active + 1;
  rotate = rotate + rotateAdd;
  show();
}
next.addEventListener("click", nextSlide);

function prevSlide() {
  active = active - 1 < 0 ? countItem - 1 : active - 1;
  rotate = rotate - rotateAdd;
  show();
}
prev.addEventListener("click", prevSlide);

const autoSlider = setInterval(nextSlide, 3000);

// ========swiper js=======================
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  allowTouchMove : true,
  freeMode: {
    enabled: true,
    sticky: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ========swiper play on click==============
const cards = document.querySelectorAll(".swiper-slide");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    // console.log("is stop");
    swiper.autoplay.stop();
  });
  card.addEventListener("mouseleave", () => {
    swiper.autoplay.start();
  });
});
// =================counter cart add =============
  const quantity = document.querySelectorAll(".quantity");
  const decrease = document.querySelectorAll(".decrease");
  const increase = document.querySelectorAll(".increase");
  let count = 1;
  increase.forEach((incBtn , index )=>{
    incBtn.addEventListener("click", ()=>{
      count++;
      quantity[index].textContent = count;
    })
  })