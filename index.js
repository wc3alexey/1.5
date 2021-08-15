let main = document.querySelector(".main");
let button = document.querySelector('.container__button-show-more');
button.addEventListener('click', function () {
    main.classList.toggle("main-show-more_active");
    button.classList.toggle("container__button-show-more_active");
    if (button.classList.contains("container__button-show-more_active")) {
        button.textContent = "Скрыть"
    } else button.textContent = "Показать все"
});

let slider = document.querySelector(".swiper-container")
let swiper;
function mobileSlider() {
    if (window.innerWidth <= 767 && slider.dataset.mobile == "false") {
        swiper = new Swiper(slider, {
            direction: 'horizontal',
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 16,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });

        slider.dataset.mobile = "true";
    }

    if (window.innerWidth > 767) {
        slider.dataset.mobile = "false";

        if (slider.classList.contains("swiper-container-initialized")) {
            swiper.destroy();
        }

    }
}

mobileSlider();

window.addEventListener('resize', () => {
    mobileSlider();
});
