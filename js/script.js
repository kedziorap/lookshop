$(function(){
    $('#hamburger').click(function(){
        $('.nav__menu').slideToggle();
    });
    $('.nav__menu > .nav__item').click(function(){
        $(this).children('.nav__subcontainer').slideToggle();
    });

    $(window).resize(function(){
        if ($(window).width() > 992) $('.nav__menu').removeAttr('style');
    })
});