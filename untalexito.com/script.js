let navbar = document.querySelector('.header .navbar')
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
    console.log("hola")
}


document.querySelector('#close-navbar').onclick = () =>{
    navbar.classList.remove('active');
}





var swiper = new Swiper(".home-slider", {
    pagination: {
        el: ".swiper-pagination",
        clickable:true
    },
    loop:true,
    grabCursor:true,
});

var swiper = new Swiper(".home-courses-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        991:{
            slidesPerView:3,
        },
    },
});

document.querySelector('.load-more .btn').onclick = () => {
    document.querySelectorAll('.courses .box-container .hide').forEach( show => {
        show.style.display = 'block';
    });
    document.querySelector('.load-more .btn').style.display = 'none';
}
