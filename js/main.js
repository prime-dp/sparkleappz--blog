$(document).ready(function() {

    $('.first-slider').owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        navText : ["",""],
        dots: true,
        responsiveClass: true,
        center: true,
        responsive : {
            992 : {
                items: 5
            }
        }
    });

    $('#second-slider').owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        navText : ["",""],
        dots: true,
        responsiveClass: true,
        center: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        touchDrag: false,
        mouseDrag: false
    });

    $('.carousel').carousel({
        interval: 2500,
        pause: false
    });

    //анимация
    wow = new WOW(
        {
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            live:         true
        }
    );

    let owl = $('.owl-carousel');
    owl.owlCarousel();
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });

    wow.init();

    //валидация форм
    let pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i,
        mailInput = $('#input-email'),
        nameInput = $('#input-name'),
        skypeInput = $('#input-skype'),
        telInput = $('#phone'),
        textInput = $('#input-message');

    $('#contacts-form').submit(function(event){
        console.log(telInput.val().length);
        $('.form-control').removeClass('invalid-input');
        if(mailInput.val() === '' || skypeInput.val() === '' || nameInput.val() === '' || textInput.val() === '' || mailInput.val().search(pattern) !== 0){
            if(mailInput.val().search(pattern) === 0){
                //alert("алё");
                mailInput.removeClass('invalid-input');
            }else{
                //alert("не алё");
                mailInput.addClass('invalid-input');
            }
            if(nameInput.val() !== ''){
                $(nameInput).removeClass('invalid-input');
            }else {
                $(nameInput).addClass('invalid-input');
            }
            if(textInput.val() !== ''){
                $(textInput).removeClass('invalid-input');
            }else {
                $(textInput).addClass('invalid-input');
            }
            if(skypeInput.val() !== ''){
                $(skypeInput).removeClass('invalid-input');
            }else {
                $(skypeInput).addClass('invalid-input');
            }
            if(telInput.val() !== '' && telInput.val().length === 17){
                $(telInput).removeClass('invalid-input');
            }else {
                $(telInput).addClass('invalid-input');
            }
        }else{

        }
        event.preventDefault();
    });

    if ($(window).width() < 992) {

        //footer-links

        $('#important-list-title').click(function () {
            $('#important-list-links').toggleClass('show-list');
            $('#important-list-arrow').toggleClass('arrow-transform');
        });
        $('#useful-links-title').click(function () {
            $('#useful-links-list').toggleClass('show-list');
            $('#userful-list-arrow').toggleClass('arrow-transform');
        });
        $('#nav-icon3').click(function () {
            $(this).toggleClass('open');
            $('.top-nav-wrap').toggleClass('open-menu');
            $('body').toggleClass('overflow-hidden');
        });
        //ios menu scroll
        var FenixUI = {
            overlayModalIos : function($block) {
                var _overlay = document.getElementById($block);
                var _clientY = null; // remember Y position on touch start

                if(!_overlay) {
                    return '';
                }

                _overlay.addEventListener('touchstart', function(event) {
                    if(event.targetTouches.length === 1) {
                        // detect single touch
                        _clientY = event.targetTouches[0].clientY;
                    }
                }, false);

                _overlay.addEventListener('touchmove', function(event) {
                    if(event.targetTouches.length === 1) {
                        // detect single touch
                        disableRubberBand(event);
                    }
                }, false);

                function disableRubberBand(event) {
                    var clientY = event.targetTouches[0].clientY - _clientY;

                    if(_overlay.scrollTop === 0 && clientY > 0) {
                        // element is at the top of its scroll
                        event.preventDefault();
                    }

                    if(isOverlayTotallyScrolled() && clientY < 0) {
                        //element is at the top of its scroll
                        event.preventDefault();
                    }
                }

                function isOverlayTotallyScrolled() {
                    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
                    return _overlay.scrollHeight - _overlay.scrollTop <= _overlay.clientHeight;
                }
            }
        };

        FenixUI.overlayModalIos('mobile-menu');
    } else {
        //шапка
        $(window).scroll(function () {

            let wScroll = $(this).scrollTop();

            if (wScroll > 30) {
                $('.header-wrapper').addClass('header-active');
            } else {
                $('.header-wrapper').removeClass('header-active');
            }
        });
    }

    //scrollspy

    // function Scroll_block() {
    //     let scrolled = $(document).scrollTop(),
    //         windowHeight = $(window).height() / 2;  //высота окна
    //
    //     $("#top-menu a").each(function () {
    //         let hash = $(this).attr("href"),
    //             target = $(hash),
    //             mainContent = $("#main-content");
    //
    //         if (mainContent.offset().top < windowHeight + scrolled) {
    //             $("#link-start").addClass("show-link");
    //             $('#contacts-list').addClass('show-contacts');
    //         } else {
    //             $("#link-start").removeClass("show-link");
    //             $('#contacts-list').removeClass('show-contacts');
    //         }
    //
    //         if ($(window).width() > 991) {
    //             if (target.position().top - windowHeight <= scrolled && target.position().top + target.outerHeight() - windowHeight > scrolled) {
    //                 $("#top-menu li.active").parent().removeClass("active");
    //                 $(this).parent().addClass("active");
    //             } else {
    //                 $(this).parent().removeClass("active");
    //             }
    //         }
    //     });
    // }
    //
    // $(document).on("scroll", Scroll_block);
    //
    // $("a[href*=\\#]").click(function(e){
    //     e.preventDefault();
    //     $(document).off("scroll");
    //
    //     //Подсветка пунктов шапки в мобайле
    //     if ($(window).width() > 991) {
    //         $("#top-menu li.active").removeClass("active");
    //         $(this).parent().addClass("active");
    //     }
    //
    //     let hash = $(this).attr("href"),
    //         target = $(hash);
    //
    //     $("html, body").animate({
    //         scrollTop: target.offset().top
    //     }, 800, function(){
    //         window.location.hash = hash;
    //         $(document).on("scroll", Scroll_block);
    //     });
    // });

});
