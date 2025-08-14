$(document).ready(function () {
    $('.language__link').click(function (e) {
        e.preventDefault();
        $(this).next('ul').toggleClass('active');
    })

    // partners slider
    var swiper = new Swiper(".partners__swiper", {
        slidesPerView: 3,
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
        breakpoints: {
            576: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 6,
            },
        },
    });

    // aid slider
    var swiper = new Swiper(".aidright", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
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
        breakpoints: {
            575: {
                slidesPerView: 1,
            },

            820: {
                slidesPerView: 1.2,
            },

            991: {
                slidesPerView: 1.5,
            },
            1200: {
                slidesPerView: 2,
            },
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

    if ($('.burger2').length) {
        (function () {
            var burger2;
            burger2 = document.querySelector(".burger2");
            burger2.addEventListener("click", function () {
                return burger2.classList.toggle("on");
            });

        }).call(this);
    }

    $('.burger2').click(function () {
        $('.navcol').toggleClass('open');
    })

    const menuBtn = document.querySelector('.burger2');
    const menu = document.querySelector('.navcol');
    const overlay = document.querySelector('.menu-overlay');

    menuBtn.addEventListener('click', () => {
        // menu.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        menu.classList.remove('open');
        overlay.classList.remove('active');
        menuBtn.classList.remove('on');
    });

    $('.paysort button').click(function () {
        $('.paysort button').removeClass('active');
        $(this).addClass('active');
    });

    // реквізити

    document.addEventListener("click", function (e) {
        if (e.target.closest(".copy")) {
            const btn = e.target.closest(".copy");

            document.querySelectorAll(".copy").forEach(b => {
                b.classList.remove("active");
                b.querySelector("span").textContent = "Скопіювати";
            });

            const accountNum = btn.closest(".bankaccount").querySelector(".bankaccount__num").textContent.trim();
            navigator.clipboard.writeText(accountNum).then(() => {
                btn.classList.add("active");
                btn.querySelector("span").textContent = "Скопійовано";
            });
        }
    });







})




















