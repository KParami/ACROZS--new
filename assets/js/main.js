
$(document).scroll(function() {

  $.fn.moveIt = function(){
    var $window = $(window);
    var instances = [];
    
    $(this).each(function(){
      instances.push(new moveItItem($(this)));
    });
    
    window.onscroll = function(){
      var scrollTop = $window.scrollTop();
      instances.forEach(function(inst){
        inst.update(scrollTop);
      });
    }
  }
  
  var moveItItem = function(el){
    this.el = $(el);
    this.speed = parseInt(this.el.attr('data-scroll-speed'));
  };
  
  moveItItem.prototype.update = function(scrollTop){
    var pos = scrollTop / this.speed ;
    this.el.css('transform', 'translateY(' + -pos + 'px)');
  };
  
  $(function(){
    $('[data-scroll-speed]').moveIt();
  });
});

$(function() {

  const inViewport = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("ani-title", entry.isIntersecting);
    });
  };

  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {}; 

  const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
  ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
  });

});


$(function() {

class CountUp {
  constructor(triggerEl, counterEl) {
  const counter = document.querySelector(counterEl)
  const trigger = document.querySelector(triggerEl)
  let num = 0

  const countUp = () => {
    if (num <= counter.dataset.stop)
      ++num
      counter.textContent = num
  }
  
  const observer = new IntersectionObserver((el) => {
    if (el[0].isIntersecting) {
      const interval = setInterval(() => {
        (num < counter.dataset.stop) ? countUp() : clearInterval(interval)
      }, counter.dataset.speed)
    }
  }, { threshold: [0] })

  observer.observe(trigger)
  }
}

new CountUp('#counter-wrap-1', '#counter-1');
new CountUp('#counter-wrap-2', '#counter-2');
new CountUp('#counter-wrap-3', '#counter-3');
new CountUp('#counter-wrap-4', '#counter-4');

});

$(function() {

$('.work-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots:false,
  loop:false,
  autoplay: false,
  slideTransition: 'linear',
  autoplayTimeout: 4000,
  autoplaySpeed: 10000,

  stagePadding: 50,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      768:{
          items:3
      },
      992:{
          items:4
      },
      1360:{
          items:5
      }
  }
});

});

$(document).ready(function(){

  $(".filter-button").click(function(){

    if ($(".filter-button").removeClass("active")) {
      $(this).removeClass("active");
      }
      $(this).addClass("active");

      var value = $(this).attr('data-filter');
      
      if(value == "all")
      {
          $('.filter').show('1000');
      }
      else
      {
          $(".filter").not('.'+value).hide('3000');
          $('.filter').filter('.'+value).show('3000');
          
      }
  });
  


});


$(function() {
$('.review-carousel').owlCarousel({
  loop: false,
  margin: 10,
  nav: true,
  items: 1,
  dots:false,
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i>"
  ],
  autoplay: false,
  autoplayHoverPause: true,

 
});
});


$(function() {

$('.partner-carousel').owlCarousel({
  loop:true,
  margin:0,
  nav:false,
  dots:false,
  autoplay: true,
  slideTransition: 'linear',
  autoplayTimeout: 4000,
  autoplaySpeed: 10000,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
});

});