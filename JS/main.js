jQuery(document).ready(function () {
    
        "use strict"
        $('.home-area').ripples({
            dropRadius: 13,
            perturbance: 0.01,
  
        });

    
    var typed = new Typed('.text', {
            strings: ["Devloper" , "Programmer", "Designer"],
            typeSpeed: 0,
            backSpeed:60,
            loop:true,
            
        });
//    
    $(window).scroll(function(){
        
        var top = $(window).scrollTop();
        if(top>=60){
            $("nav").addClass('scroll'); 
            $("nav").hasClass('scroll'); 
        }        
        else                 
                $("nav").removeClass('scroll');
            });
    
   $('.work').magnificPopup({
          delegate: 'a', // child items selector, by clicking on it popup will open
          type: 'image',
         gallery: {
            enabled: true
    }
   });
  
        $("a.smooth-scroll").click(function(event){
           event.preventDefault();
            var section = $(this).attr("href");
            
            $('html, body').animate({
                scrollTop: $(section).offset().top - - 2
            }, 1250, "easeInOutExpo");
            
        });
        
    new WOW().init();
    
    
  
    
});