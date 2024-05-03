$(document).ready (function(){ 
    $('.menu-hamburguer').click (function (){
        $('nav').slideToggle ();
    })

    

function toggleSlick() {
    if ($(window).width() < 1023) { 
        $('.slider').slick('unslick'); 
    } else {
        $('.slider').slick({ 
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }
}


$(document).ready(function() {
    toggleSlick(); 
    $(window).resize(function() { 
        toggleSlick();
    });
});

});

