$(function(){
    $('#hamburger').click(function(){
        $('.nav__menu').slideToggle();
    });
    $('.nav__menu > .nav__item').click(function(){
        if ($(window).width() <=992) $(this).children('.nav__subcontainer').slideToggle();
    });

    $(window).resize(function(){
        if ($(window).width() > 992) $('.nav__menu').removeAttr('style');
        if ($(window).width() > 992) $('.nav__subcontainer').removeAttr('style');
    });
    //slick
    var sliderBig = $('.slider__list');
    sliderBig.slick({
        arrow: false,
        nextArrow: $('#next-slider'),
        prevArrow: $('#prev-slider'),
        dots: true,
        appendDots: $('.slider__pagination'),
        dotsClass: 'slider__dots',
        autoplay: true,
        autoplaySpeed: 5000
    });
    sliderBig.on('reinit', function(event, slick, direction){
        console.log('init');
    })
    sliderBig.on('afterChange', function(event, slick, direction) {
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
});