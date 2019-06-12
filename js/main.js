
//porfolio filter
$(document).ready(function(){

    $(".filter_btn").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter_btn").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});


//autoplay testimonial
jQuery(document).ready(function($) {

	var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:6,
            nav:true,
            loop:false
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

//navbar
$(document).ready(function() {

    var toggleAffix = function(affixElement, scrollElement, wrapper) {
    
      var height = affixElement.outerHeight(),
          top = wrapper.offset().top;
      
      if (scrollElement.scrollTop() > top){
          wrapper.height(height);
          affixElement.addClass("affix");
      }
      else {
          affixElement.removeClass("affix");
          wrapper.height('auto');
      }
        
    };
    
  
    $('[data-toggle="affix"]').each(function() {
      var ele = $(this),
          wrapper = $('<div></div>');
      
      ele.before(wrapper);
      $(window).on('scroll resize', function() {
          toggleAffix(ele, $(this), wrapper);
      });
      
      // init
      toggleAffix(ele, $(window), wrapper);
    });
    
  });

  $(document).ready(function() {
	// get current URL path and assign 'active' class
	var pathname = window.location.pathname;
	$('.navbar-nav > li > a[href="'+pathname+'"]').parent().addClass('active');
})


$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox({alwaysShowClose: true});
});

// On / Off function
var video = document.getElementById("myVideo");
var slider = doc.getElementById("mySlider");
function onOff(){
    if(video.paused){
        video.play()
    }
    else{
        video.pause();
    }
}

// 
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#goToTop').fadeIn();
    } else {
        $('#goToTop').fadeOut();
    }
});
$(document).ready(function() {
    $("#goToTop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});