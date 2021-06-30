$(function(){
  $(window).scroll(function(){
    var winTop = $(window).scrollTop();
    if(winTop >= 70){
      $(".navbar").addClass("sticky-header");
    }else{
      $(".navbar").removeClass("sticky-header");
    }
  });
});

new WOW().init();

$('#testimonials').owlCarousel({
      loop:true,
      margin:0,
      nav:true,
      dots:false,
      autoplay:true,
      autoplayTimeout:6000,
      smartSpeed :500,
      //autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          768:{
              items:1
          },
          1000:{
              items:4
          }
      }

});



$( ".owl-prev").html('<i class="fas fa-long-arrow-alt-left"></i>');
 $( ".owl-next").html('<i class="fas fa-long-arrow-alt-right"></i>');



$('#owl-one').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:8000,
      smartSpeed :1500,
      //autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:4
          }
      }
});

$('#owl-two').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:8000,
      smartSpeed :1500,
      //autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:4
          }
      }
});

 $(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});


$(document).ready(function(){
$(".order-btn").click(function(){
$(".order-subnavigation").toggle();
});
}); 

$(document).ready(function(){
$(".order-btn1").click(function(){
$(".order-subnavigation1").toggle();
});
}); 

$(document).ready(function(){
$(".order-btn2").click(function(){
$(".order-subnavigation2").toggle();
});
}); 