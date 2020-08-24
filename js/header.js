$(document).ready(function() {
    // header

    $('.cart').click(function() {
        $('.side_cart').toggleClass('cart_off');
    });

    $('#cart_close').click(function() {
        $('.side_cart').addClass('cart_off');
    });
    // ---------------------------
    // 漢堡

    $(function() {
        // 漢堡

        // hamburger icon 的切換
        $("button.hamburger").on("click", function() {
            $(this).toggleClass("is-active");
        });

        $("button.hamburger").on("click", function() {
            $('body').toggleClass("scroll_disable");
        });

    });


    // ----------------
    $(function() {

        // 點擊按鈕，選單縮放
        $("button.btn_switch").on("click", function() {
            $(".header_nav").slideToggle();
        });

    });

});


// cart

// window.addEventListener('load', function() {
//     let car_btn = document.getElementsByClassName('add_cart_btn');

//     for (i = 0; i < cart_btn.length; i++){
//         car_btn[i].addEventListener('click', function (e) {
//             course_name = e.target.parentNode.parentNode.parentNode.childNodes[]

//         });
//     };
// });