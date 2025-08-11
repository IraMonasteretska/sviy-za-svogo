$(document).ready(function () {
    $('.language__link').click(function () {
        $(this).next('ul').toggleClass('active');
    })

    var swiper = new Swiper(".partners__swiper", {
        slidesPerView: 6,
        spaceBetween: 4,
        loop: true,
        speed: 700,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // aid slider
    var swiper = new Swiper(".aidright", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 2,
        // allowTouchMove: false,
        speed: 500,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination.aidpag",
            type: "fraction",
        },
    });
    var swiper2 = new Swiper(".aidleft", {
        loop: true,
        spaceBetween: 0,
        speed: 500,
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
        // pagination: {
        //     el: ".swiper-pagination",
        //     type: "fraction",
        // },
        // thumbs: {
        //     swiper: swiper,
        // },
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
    });

    // Синхронізація
    swiper2.controller.control = swiper;
    swiper.controller.control = swiper2;


    // header
    function checkHeaderScrolled() {
        if ($(window).scrollTop() > 0) {
            $('.header').addClass('scrolled');
        } else {
            $('.header').removeClass('scrolled');
        }
    }

    $(window).on('scroll', checkHeaderScrolled);
    checkHeaderScrolled();

})




















