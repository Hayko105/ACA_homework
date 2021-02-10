'use strict';

const slider = document.querySelector('.slider');
const btnPrev = document.querySelector('.btn_prev');
const btnNext = document.querySelector('.btn_next');
const btnPLay = document.querySelector('.btn_play');
const sliderItem = document.querySelectorAll('.slider__item');
const sliderItemArr = [...sliderItem];
const sliderSpeed = 4000;

// Slider prev function
function slidePrev() {
    let showItem = document.querySelector('.show');
    
    if(showItem.classList.contains('show')) {  
        if(showItem.previousElementSibling != null){
            showItem.previousElementSibling.classList.add('show')
            showItem.classList.remove('show');
        } else {
            showItem.classList.remove('show');
            sliderItem[sliderItemArr.length-1].classList.add('show')
        }
    } else {
        showItem.nextElementSibling.classList.add('show');
    }
}

// Slider next function
function slideNext() {
    let showItem = document.querySelector('.show');
    
    if(showItem.classList.contains('show')) {  
        if(showItem.nextElementSibling != null){
            showItem.nextElementSibling.classList.add('show')
            showItem.classList.remove('show');
        } else {
            showItem.classList.remove('show');
            sliderItem[0].classList.add('show')
        }
    } else {
        showItem.nextElementSibling.classList.add('show');
    }
}


//Slider playing function
let slidePlay = 0;

function slidePlaing() {     
    if(btnPLay.classList.contains('plaing')) {
        btnPLay.textContent = 'Play';
        btnPLay.classList.remove('plaing');
        clearInterval(slidePlay);
        return;
    }else {
        btnPLay.textContent = 'Pause';
        btnPLay.classList.add('plaing');        
    
        slidePlay = setInterval(()=>{
            let showItem = document.querySelector('.show');

            if(showItem.classList.contains('show')) {  
                if(showItem.nextElementSibling != null){
                    showItem.nextElementSibling.classList.add('show')
                    showItem.classList.remove('show');
                } else {
                    showItem.classList.remove('show');
                    sliderItem[0].classList.add('show')
                }
            } else {
                showItem.nextElementSibling.classList.add('show');
            }
        }, sliderSpeed);
    }    
}

// Slider previous scrolling
btnPrev.addEventListener('click', slidePrev);

// Slider next scrolling
btnNext.addEventListener('click', slideNext);

// Slider play/stop
btnPLay.addEventListener('click', slidePlaing);