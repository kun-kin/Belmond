$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }


    // if ($(this).scrollTop() >= $('.navigator').offset().top) {
    //     $('.navigator-container').addClass('fixed');
    //     $('.navigator-logo').show();
    // } else {
    //     $('.navigator-container').removeClass('fixed');
    //     $('.navigator-logo').hide();
    // }
});


/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});


// function animated() {
//     var wow = new WOW({
//         boxClass: 'hex1',
//         animateClass: 'animated',
//         offset: 100,
//         mobile: !0,
//         live: !0,
//     });
//     wow.init()
// }


$(document).ready(function() {




    $('.play-video__button').click(function() {
        var mediaVideo = $("#video").get(0);
        if (mediaVideo.paused) {
            mediaVideo.play();
            $(this).children('.play-btn').hide();
            $(this).children('.pause-btn').show();
        } else {
            mediaVideo.pause();
            $(this).children('.play-btn').show();
            $(this).children('.pause-btn').hide();
        }
    });

    $('.villa-button-play').click(function() {
        var mediaVideo = $("#villa-video").get(0);
        if (mediaVideo.paused) {
            mediaVideo.play();
            $(this).children('.play-btn').hide();
            $(this).children('.pause-btn').show();
        } else {
            mediaVideo.pause();
            $(this).children('.play-btn').show();
            $(this).children('.pause-btn').hide();
        }
    });

    $(".menu-open").click(function() {
        $('.pull-nav').addClass('open-pull-nav');
        $('.pull-nav-bg').addClass('open-pull-nav-bg');
        $('body').addClass('ov-hidden');
    });
    $(".link--close-nav").click(function() {
        $('.pull-nav').removeClass('open-pull-nav');
        $('.pull-nav-bg').removeClass('open-pull-nav-bg');
        $('body').removeClass('ov-hidden');
    });

    // animated();
    // animated1();
    // animated2();

    // var check_in = flatpickr(".in-date", { dateFormat: "d/m/Y", });
    // var check_out = flatpickr(".out-date", { dateFormat: "d/m/Y", });
    // check_in.element.addEventListener("change", function() {
    //     check_out.set("minDate", check_in.element.value);

    // });
    // check_out.element.addEventListener("change", function() {
    //     check_in.set("maxDate", check_out.element.value);
    // });

    // $('.count').counterUp({
    //     delay: 10,
    //     time: 2000
    // });

    // $(function() {
    //     // $("#date").datepicker();
    //     // $(".datepicker").datepicker();
    //     $(".hasDatepicker").flatpickr({
    //         dateFormat: "d/m/Y"
    //     });
    //     $("#chkin-date").flatpickr({
    //         dateFormat: "d/m/Y"
    //     });
    //     $("#chkout-date").flatpickr({
    //         dateFormat: "d/m/Y"
    //     });
    // });




    $(".footer-accordion .title").click(function() {
        if ($(window).width() < 576) {
            $(this).toggleClass('active');
            $(this).parents('.footer-accordion').children('.footer-accordion-content').slideToggle();
        }
    });

    // $(".navbar__bar").click(function() {
    //     $('.header-navbar').addClass('navbar--open');
    // });
    // $(".navbar__content-close-inner").click(function() {
    //     $('.header-navbar').removeClass('navbar--open');
    // });


    // $(".has-dropdown").mouseover(function() {
    //     $(this).children('.dropdown-menu').show();
    // });
    // $(".has-dropdown").mouseout(function() {
    //     $(this).children('.dropdown-menu').hide();
    // });

    $(document).mouseup(function(e) {
        if ($(e.target).closest(".mobile-nav").length ===
            0) {
            $('.pull-nav').removeClass('open-pull-nav');
            $('.pull-nav-bg').removeClass('open-pull-nav-bg');
            $('body').removeClass('ov-hidden');
        }
    });

});