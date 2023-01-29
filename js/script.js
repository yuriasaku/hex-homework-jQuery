//go top
$(document).ready(function(){
 $('.goTop a').click(function(e){
    e.preventDefault();
    $('html').animate({scrollTop:0},300);

 });
});

//navBar dropdown
$(document).ready(function(){
$('.menu li').mouseenter(function(){
    $(this).find('.dropDown').addClass('open');
});

$('.menu ul').mouseleave(function() {
    $(this).removeClass('open')
});

});



//swiper 套件
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//lightBox 套件

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    })




