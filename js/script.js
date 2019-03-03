
$(function(){
    var runingBrands = false;
    if ($(window).width() > 768)  initBrands();
    $('#hamburger').click(function(){
        $('.nav__menu').slideToggle();
    });
    $('.nav__menu > .nav__item').click(function(){
        if ($(window).width() <=992) $(this).children('.nav__subcontainer').slideToggle();
    });

    $(window).resize(function(){
        if ($(window).width() > 992) $('.nav__menu').removeAttr('style');
        if ($(window).width() > 992) $('.nav__subcontainer').removeAttr('style');
        if ($(window).width() > 768 && !runingBrands) initBrands();
        if ($(window).width() <= 768 && runingBrands) unslickBrands();
    });
    //slick
    var sliderBig = $('.slider__list');
    var slickConfigure = {
        arrow: false,
        nextArrow: $('#next-slider'),
        prevArrow: $('#prev-slider'),
        dots: true,
        appendDots: $('.slider__pagination'),
        dotsClass: 'slider__dots',
        autoplay: true,
        autoplaySpeed: 5000
    };
    sliderBig.slick(slickConfigure);

    sliderBig.on('afterChange', function() {
        $('.slider__progress').stop();
        resetProgressBar();
        animateProgressBar();
    });
    sliderBig.on('mouseover', function(){
        $('.slider__progress').stop();
        resetProgressBar();
    });
    sliderBig.on('mouseout', function(event){
        animateProgressBar();
    });
    function animateProgressBar() {
        $('.slider__progress').animate({width: 100+'%'}, 5000, 'linear', resetProgressBar);
    }
    function resetProgressBar() {
        $('.slider__progress').css('width', '0px');
    }
    animateProgressBar();
    //hotspot
    var arrowsSet = $('.hotspot__arrows');
    var areas = $('.hotspot__area');
    var mySlicks = [
        {
            anchor: $('#hot-slider .hotspot__list'),
            arrows: $('#hot-arrows'),
            arrowNext: $('#hot-next'),
            arrowPrev: $('#hot-prev'),
            init: false
        },
        {
            anchor: $('#designer-slider .hotspot__list'),
            arrows: $('#designer-arrows'),
            arrowNext: $('#designer-next'),
            arrowPrev: $('#designer-prev'),
            init: false
        },
        {
            anchor: $('#featured-slider .hotspot__list'),
            arrows: $('#featured-arrows'),
            arrowNext: $('#featured-next'),
            arrowPrev: $('#featured-prev'),
            init: false
        },
        {
            anchor: $('#latest-slider .hotspot__list'),
            arrows: $('#latest-arrows'),
            arrowNext: $('#latest-next'),
            arrowPrev: $('#latest-prev'),
            init: false
        }
    ];
    var titles = $('.hotspot__title');
    titles.click(function(){
        var elemIndex = $(this).index();
        titles.each(function(){
            $(this).removeClass('hotspot__title--active');
        });
        $(this).addClass('hotspot__title--active');
        areas.each(function(){
            if(!$(this).hasClass('hide')) $(this).addClass('hide');
        });
        mySlicks.forEach(function(el){
            if (el.init) {
                el.init = false;
                el.anchor.slick('unslick');
            }
        });
        arrowsSet.each(function(){
            if (!$(this).hasClass('hotspot__arrows--hide')) $(this).addClass('hotspot__arrows--hide');
        });
        arrowsSet.eq(elemIndex).removeClass('hotspot__arrows--hide');
        areas.eq(elemIndex).removeClass('hide');
        if (!mySlicks[elemIndex].init) initSlick(mySlicks[elemIndex]);

    });
    function initSlick(ob) {
        ob.anchor.slick({
        slidesToShow: 4,
        nextArrow: ob.arrowNext,
        prevArrow: ob.arrowPrev,
        centerMode: true,
        responsive: [
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                centerMode: false,
              }
            },
            {
              breakpoint: 786,
              settings: {
                slidesToShow: 2,
                centerMode: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                centerMode: false,
              }
            }
          ]
        });
        ob.init = true;
    }
    initSlick(mySlicks[0]);

    //pseudoloader
    $('.loader__btn').click(function(){
        $('.sales .mobile-hide').css('display', 'block');
        $('.sales .tablet-hide').css('display', 'block');
        $(this).css('display', 'none');
    });

    //brands
    function initBrands() {
        $('.brands__slider').slick({
            arrows: false,
            slidesToShow: 7,
            autoplay: true,
            autoplaySpeed: 1500,
            responsive: [
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 6
                  }
                }
            ]
        });
        runingBrands = true;
    }
    function unslickBrands() {
        $('.brands__slider').slick('unslick');
        runingBrands = false;
    }
});