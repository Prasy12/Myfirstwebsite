function slideSlider(){
    $("#slider-scroller").css({"left":"0%","transition":"all 0s linear"});
    $("#slider-scroller").css({"left": String(parseInt($("#slider-scroller").css("left")) - 500) + "px","transition":"all 5s linear"});
    setTimeout(function(){moveSliderItem()}, 2035);
  }
  
  function moveSliderItem(){
    $("#slider-scroller div").first().detach().appendTo($("#slider-scroller"));
    slideSlider();
  }
  
  slideSlider();