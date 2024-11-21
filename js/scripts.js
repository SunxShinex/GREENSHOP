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




  var menuToggle = document.querySelector('[data-js="menu-toggle"]');

  menuToggle.addEventListener('click', function () {
      document.body.classList.toggle('panel-open');
      menuToggle.classList.toggle('open');
  });
  
  var closePanel = document.querySelector('[data-js="hidden-panel-close"]');
  
  closePanel.addEventListener('click', function () {
      document.body.classList.remove('panel-open');
      menuToggle.classList.remove('open');
  });