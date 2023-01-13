
// Menu btn DropDown
$('#menu_btn').click(function (e) {
    e.preventDefault();
    $('.navbar').toggleClass('dropdown');
});
// shopping cart DropDown
$('#shopping_card').click(function (e) { 
    e.preventDefault();
    $('.cart').toggleClass('show');
});

// slick slider
$('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1300,
    dots: true,
    arrows: false,
    focusOnSelect: true
});

// counterup js
$('.counters').counterUp({
    delay: 10,
    time: 1000
});

// Aos js
AOS.init();

// wow js
new WOW().init();

