const nav = document.querySelector('.nav-links');
const btn = document.querySelector('.toggle');

btn.addEventListener('click', function(){
    nav.classList.toggle('active');
    btn.classList.toggle('clicked');
});

// Carousel
// Carousel