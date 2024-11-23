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

  const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
  let priceGap = 1000;
  
  priceInput.forEach(input =>{
      input.addEventListener("input", e =>{
          let minPrice = parseInt(priceInput[0].value),
          maxPrice = parseInt(priceInput[1].value);
          
          if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
              if(e.target.className === "input-min"){
                  rangeInput[0].value = minPrice;
                  range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
              }else{
                  rangeInput[1].value = maxPrice;
                  range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
              }
          }
      });
  });
  
  rangeInput.forEach(input =>{
      input.addEventListener("input", e =>{
          let minVal = parseInt(rangeInput[0].value),
          maxVal = parseInt(rangeInput[1].value);
  
          if((maxVal - minVal) < priceGap){
              if(e.target.className === "range-min"){
                  rangeInput[0].value = maxVal - priceGap
              }else{
                  rangeInput[1].value = minVal + priceGap;
              }
          }else{
              priceInput[0].value = minVal;
              priceInput[1].value = maxVal;
              range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
              range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
          }
      });
  });

  document.querySelectorAll('.input-min, .input-max').forEach(input => {
    input.style.width = input.value.length + 1 + "ch";
  
    input.addEventListener('input', function () {
      this.style.width = this.value.length + 1 + "ch";
    });
  });