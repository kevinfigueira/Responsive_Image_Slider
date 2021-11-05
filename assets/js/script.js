//Select DOM
const sliders = document.querySelectorAll('.slide_image');
const btns = document.querySelectorAll('.nav_btn');

let currentSlide = 1;


//Functions

 //For image slider manual navigation
let manualNav = function(manual){

    sliders.forEach((slide) => {
        slide.classList.remove('active');
    })

    btns.forEach((btn) => {
        btn.classList.remove('active');
    })

    sliders[manual].classList.add('active');
    btns[manual].classList.add('active');

}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manualNav(i);
        currentSlide = i;
    })
})

 //For image slider autoplay navigation
 let repeat = function(activeClass){

     let active = document.getElementsByClassName('active');
     let i = 1;

     let repeater = () => {
        setTimeout( () => {

            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active')
            })


            sliders[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(sliders.length == i){
                i = 0;

            }
            if(i >= sliders.length){
                return;
            }
            repeater();
            
        }, 3000);
     }

     repeater();
 }

 repeat();