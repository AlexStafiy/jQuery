$(document).ready(function(){
    $('.main_btn').on('click', function(){
        $('.overlay').fadeIn('slow'),
        $('.modal').slideDown();
    });
    $('.main_btna').on('click', function(){
        $('.overlay').fadeIn('slow'),
        $('.modal').slideDown();
    });
    $('a[href="#sheldure"]').on('click', function(){
        $('.overlay').fadeIn('slow'),
        $('.modal').slideDown();
    });
    $('.close').on('click', function(){
        $('.overlay').fadeOut('slow'),
        $('.modal').slideUp();
    });
});