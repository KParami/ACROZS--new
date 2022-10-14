
// $(function() {
//     $('.owl-carousel').owlCarousel({
//       loop:true,
//       margin:15,
//       nav:true,
//       responsive:{
//           0:{
//               items:1
//           },
//           600:{
//               items:2
//           },
//           1000:{
//               items:3
//           }
//       }
      
//   })
//   });





$(function() {
  $('.service-carousel').owlCarousel({
    stagePadding: 10,
    loop:true,
    margin:20,
    nav:true,
    responsive:{ 
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
    
})
});

// $('.service-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//             nav:true
//         },
//         600:{
//             items:3,
//             nav:false
//         },
//         1000:{
//             items:5,
//             nav:true,
//             loop:false
//         }
//     }
// })


$(function(){
  $('.consultants-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  })
});


// var Lowl=$("#owl-nav");
//  Lowl.owlCarousel({
//      items: 4, //10 items above 1000px browser width
//      itemsDesktop: [1000, 2], //5 items between 1000px and 901px
//      itemsDesktopSmall: [991, 2], // 3 items betweem 900px and 601px
//      itemsTablet: [600, 2], //2 items between 600 and 0;
//      //  itemsMobile : false , // itemsMobile disabled - inherit from itemsTablet option
//      dots: false, stagePadding: Number, //stagePadding: 50,
//      loop: false, margin: 30, rtl: true, pagination: false,
//  })

//  $(".next").click(function () {
//      Lowl.trigger('owl.next');
//  });

//  $(".prev").click(function () {
//      Lowl.trigger('owl.prev');
//  });
 
//  Lowl.trigger('owl.play', false);

   
$(function() {
    $('.popular-course').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
      
  })
  });