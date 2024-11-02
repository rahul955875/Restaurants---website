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
  allowTouchMove: true,
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
let cartCountShow = document.querySelector(".cart-count");
let cartCount = Number(document.querySelector(".cart-count").textContent);
// console.log(++cartCount)
decrease.forEach((decBtn) => {
  decBtn.disabled = true;
});
increase.forEach((incBtn, index) => {
  incBtn.addEventListener("click", () => {
    let incQuan = Number(quantity[index].textContent);
    incQuan++;
    quantity[index].textContent = incQuan;
    cartCount++;
    cartCountShow.textContent = cartCount;
    decrease[index].disabled = false;
  });
});

decrease.forEach((decBtn, index) => {
  decBtn.addEventListener("click", () => {
    // console.log(quantity[index].textContent)
    let decQuan = Number(quantity[index].textContent);
    decQuan--;
    // decQuan < 0 ? quantity[index.textContent] = 0 : quantity[index].textContent = decQuan;

    decQuan <= 0
      ? ((quantity[index].textContent = 0), (decBtn.disabled = true))
      : ((quantity[index].textContent = decQuan), (decBtn.disabled = false));

    cartCount--;
    cartCountShow.textContent = cartCount
    
  });
});
// ================= feedback cards ==================

let swiper1 = new Swiper(".mySwiper1", {
  effect: "cards",
  grabCursor: true,
});


