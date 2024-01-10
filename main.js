// scroll fade up
AOS.init();

// len-btn popup
var clickCount = 0;
$('.len-btn-box').click(function(){
  if(clickCount%2 == 0){
    $(this).find('.len-popup-box').addClass('active');
  }
  else{
    $(this).find('.len-popup-box').removeClass('active');
  }
  clickCount = clickCount + 1;
});

// menu-2
$('.top-menu-box').mouseover(function(){        
  $(this).find('.menu-2-section').stop().slideDown(300);  
});

$('.top-menu-box').mouseout(function(){
  $(this).find('.menu-2-section').stop().slideUp(300);
});

