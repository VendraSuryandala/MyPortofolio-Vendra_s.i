// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');        
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');        
    }
};

// hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

//klik diluar hamburger
window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

//dark mode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

//pindahkan posisi toggle
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }

//image slider
currentSlideID= 1;

sliderElement = document.getElementById('slider');
totalSlides = sliderElement.childElementCount;

function next(){
    if (currentSlideID < totalSlides) {
        currentSlideID++;
        showSlide();
    }
}

function prev(){
    if (currentSlideID > 1) {
        currentSlideID--;
        showSlide();
    }
}

function showSlide() {
    slides = document.getElementById('slider').getElementsByTagName('li')
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index];
        if(currentSlideID===index+1){
            element.classList.remove('hidden')
        }else{
            element.classList.add('hidden')
        }
    }
}