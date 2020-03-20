// $(document).ready(function(){ 
//         var x = document.getElementById("myLinks");
//         if (x.style.display === "block") {
//           x.style.display = "none";
//         } else {
//           x.style.display = "block";
//       }
//   });
$(document).ready(function() {
 
  $(".owl-example").owlCarousel();
 
  var owl = $('.owl-carousel');
  owl.owlCarousel({
      autoplay:false,
      autoplayTimeout:5000,
      autoplayHoverPause:false,
      items:2,
      loop:true,
      margin:20,
      autoplay:true,
      autoplayTimeout:2000,
      stagePadding:250,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          300:{
              items:1
          },
          700:{
              items:1
          },
          1600:{
              items:1
          }
      }
  });
  $('.play').on('click',function(){
      owl.trigger('play.owl.autoplay',[1000])
  })
  $('.stop').on('click',function(){
      owl.trigger('stop.owl.autoplay')
  }) 

 
});

