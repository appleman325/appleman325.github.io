//navbar
(function($) {
    $(function() {
        $('#nav-toggle').on('click', function() {
            this.classList.toggle('active');
        });
      $('#nav-toggle').click(function(){
         $('nav ul').toggle();
      });

//skill-bar
        var $skillSection = $('.skill-wrapper');
        var skillIsVisible = false;
        $(window).scroll(function(){
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            var middle_of_skillSection = $skillSection.offset().top + $skillSection.outerHeight()/2;

            if((bottom_of_window > middle_of_skillSection)&& (skillIsVisible == false)){

              $('.skills-bar-container li').each( function(){

                var $barContainer = $(this).find('.bar-container');
                var dataPercent = parseInt($barContainer.data('percent'));
                var elem = $(this).find('.progressbar');
                var percent = $(this).find('.percent');
                var width = 0;

                var id = setInterval(frame, 15);

                function frame() {
                  if (width >= dataPercent) {
                      clearInterval(id);
                  } else {
                    width++;
                    elem.css("width", width+"%");
                    percent.html(width+" %");
                  }
                }
              });
              skillIsVisible = true;
            }
        });
        
        //More about me button
        $('#about-button').on('click', function(e){
           e.preventDefault();
            var $this = $(this);
            var $collapse = $this.closest('#about-section').find('.collapse');
            $collapse.collapse('toggle');
        });
        
        $('#contact-button').on('click', function(e){
           e.preventDefault();
            var $this = $(this);
            var $collapse = $this.closest('#contact-section').find('.collapse');
            $collapse.collapse('toggle');
        });
        
        //smooth scrolling on the page
        $("nav ul li a[href^='#']").on('click', function(e){
           e.preventDefault();
            
            $('html, body').animate({
               scrollTop: $(this.hash).offset().top 
            }, 500, function() {
                window.location.hash = this.hash;
            });
        });
        
        $("#intro-section .intro-box .social a[href^='#']").on('click', function(e){
           e.preventDefault();
            
            $('html, body').animate({
               scrollTop: $(this.hash).offset().top 
            }, 500, function() {
                window.location.hash = this.hash;
            });
        });
        
        if(navigator.userAgent.match(/Trident\/7\./)) { // if IE
            $('body').on("mousewheel", function (event) {
                // remove default behavior
                event.preventDefault(); 

                //scroll without smoothing
                var wheelDelta = event.wheelDelta;
                var currentScrollPosition = window.pageYOffset;
                window.scrollTo(0, currentScrollPosition - wheelDelta);
            });
        }    
        
    });
    
})(jQuery);


