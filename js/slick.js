
$('.slider').slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    centerMode: true,
    arrows: false,
   asNavFor: ".slider-big"
});


$('.slider-big').slick({
    adaptiveHeight: true,
    slidesToShow: 1,
    centerMode: false,
    fade: true,
    asNavFor: ".slider"
   
});

