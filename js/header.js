$(document).ready(function () {
    // header

    $('.cart').click(function () {
        $('.side_cart').toggleClass('cart_off');
    });

    $('#cart_close').click(function () {
        $('.side_cart').addClass('cart_off');
    });
    // ---------------------------
    // 漢堡

    $(function () {
        // 漢堡

        // hamburger icon 的切換
        $("button.hamburger").on("click", function () {
            $(this).toggleClass("is-active");
        });

        $("button.hamburger").on("click", function () {
            $('body').toggleClass("scroll_disable");
        });

    });


    // ----------------
    $(function () {

        // 點擊按鈕，選單縮放
        $("button.btn_switch").on("click", function () {
            $(".header_nav").slideToggle();
        });

    });

    // ------------
    $(function () {

        $('ul.header_nav_list > li:first-child').click(function () {
            $('div.style_package').slideToggle();
            $('ul.header_nav_list>li:first-child>a>.fas').toggleClass('rotate');
        });

        $('ul.header_nav_list > li:nth-child(2)').click(function () {
            $('div.product_package').slideToggle();
            $('ul.header_nav_list>li:nth-child(2)>a>.fas').toggleClass('rotate');
        });

    });




});