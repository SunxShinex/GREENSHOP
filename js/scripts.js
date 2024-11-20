$('.owl-carousel').owlCarousel({
    autoplay:false,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        1100:{
            items:1
        }
    }
})
$( function() {
    $( "#accordion" ).accordion();
  } );