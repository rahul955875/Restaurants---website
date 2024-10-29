const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// ================slider part==================
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let image = document.querySelector(".images");
let items = document.querySelectorAll(".images .item");
let contents = document.querySelectorAll(".content .item");

let rotate = 0;
let active = 0;
let countItem = items.length;
let rotateAdd = 360/countItem;

function show(){
    image.style.setProperty('--rotate', rotate + 'deg');
    contents.forEach((content, key)=>{
        // console.log(content)
        if(key==active){
            content.classList.add("active")
        }
        else{
            content.classList.remove("active")
        }
    })
}
function nextSlide(){
    active = active + 1 > countItem -1 ? 0 : active + 1;
    rotate = rotate + rotateAdd; 
    show()
}
next.addEventListener("click", nextSlide);

function prevSlide(){
    active = active -1 < 0 ? countItem -1 : active -1;
    rotate = rotate - rotateAdd;
    show()
}
prev.addEventListener("click",prevSlide);

const autoSlider = setInterval(nextSlide , 3000);


// ========swiper js=======================
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    
  });