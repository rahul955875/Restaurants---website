// Gsap
function homePage() {
  let t1 = gsap.timeline();
  t1.from("nav .logo", {
    opacity: 0,
    y: -100,
    duration: 1,
  });
  t1.from(".nav-item , .nav-item-1", {
    opacity: 0,
    y: -100,
    duration: 1,
    stagger: 0.2,
  });
  t1.from(".fork-icon", {
    x: -800,
    scale: 3,
    duration: 2,
  });
}
homePage();

function aboutPage() {
  gsap.from(".right-content h3,.right-content h2 ,.right-content p", {
    opacity: 0,
    y: 100,
    x: 100,
    duration: 1,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".right-content h2",
      scroller: "body",
      start: "top 70%",
    },
  });

  gsap.to(".left-img", {
    rotate: 60,
    // duration:2,
    // yoyo:true,
    scrollTrigger: {
      trigger: ".left-img",
      scroller: "body",
      start: "top 70%",
      scrub: true,
    },
  });
}
aboutPage();
function menuPage() {
  gsap.from(".Menu .animate-slide", {
    opacity: 0,
    y: 100,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".Menu .swiper",
      scroller: "body",
      start: "top 40%",
      once:true,
    },
  });
}
menuPage();

function tablePage(){
  gsap.from(".table-head", {
    opacity: 0,
    y:100,
    color:"red",
    duration:1,
    stagger:0.5,
    scrollTrigger: {
      trigger: ".table-head",
      scroller: "body",
      start: "top 40%",
    },
  });
  
  gsap.from(".booking-form .row input, .sub-btn",{
    opacity:0,
    y:200,
    duration:1,
    stagger:0.2,
    scrollTrigger:{
      trigger:".table-head",
      scroller: "body",
      start: "top 40%",
    }
  })
  gsap.from(".e-h2 .e-letters",{
    opacity:0,
    y:200,
    duration:0.5,
    stagger:0.15,
    scrollTrigger:{
      trigger:".e-h2 .e-letters",
      scroller:"body",
      start:"top 50%",
    }
  })
    
}
tablePage()

function footerPage(){
  gsap.from(".testimonials-flex",{
    opacity:0,
    y:200,
    duration:1.5,
    scrollTrigger:{
      trigger:".testimonials-flex",
      scroller:"body",
      start:"top 70%",
    }
  })
  
  gsap.from(".footer",{
    opacity:0,
    y:-100,
    duration:1,
    scrollTrigger:{
      trigger:".footer",
      scroller:"body",
      start:"top 30%",
    }
  })
 gsap.from(".footer-nav a, .f-left a, .f-right a",{
  opacity:0,
  y:50,
  duration:1,
  delay:1,
  stagger:0.1,
  scrollTrigger:{
    trigger:".footer",
    scroller:"body",
    start:"top 50%",
    // markers:true,
  }
 })
 
}
footerPage()

/* tooltip of login */
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
// hover effect ================================
function hoverEff() {
  let navItems = document.querySelectorAll(".nav-item");
  let forkImg = document.querySelector(".fork-icon img");
  navItems.forEach((e, index) => {
    console.log(index);
    e.addEventListener("mouseenter", () => {
      const translateValue = index > 0 ? 210 * index + "%" : "50%";
      forkImg.style.setProperty("--set", translateValue);
      forkImg.style.transform = "translate(var(--set),50%) rotate(225deg)";
    });
    e.addEventListener("mouseleave", () => {
      forkImg.style.transform = "translate(50%,50%) rotate(45deg)";
    });
  });
}
hoverEff();
// ================ slider part ==================
function sliderRound() {
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
      // console.log(content);
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
  setTimeout(() => {
    const autoSlider = setInterval(nextSlide, 3000);
  }, 4500);
}
sliderRound();
// ======== swiper js for menu =======================
const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 4,
  allowTouchMove: false,
  /* freeMode: {
    enabled: true,
    sticky: true,
  }, */
  // autoplay: {
  //   delay: 4000,
  //   disableOnInteraction: true,
  // },
  autoplay: false,
  speed: 600,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ======== swiper play on click ==============
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
// ================= counter cart add =============
function counterCount() {
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
      cartCountShow.textContent = cartCount;
    });
  });
}
counterCount();
// ================= feedback cards ==================

let swiper1 = new Swiper(".mySwiper1", {
  effect: "cards",
  grabCursor: true,
  speed: 500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
