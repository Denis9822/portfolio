$(".wrapp1_head_menu").click(function(){   
  $(this).next(".wrapp1_head_menu2").toggle();
});

$(window).scroll(function(){
  var sticky = $('.wrapp1_head'),
      scroll = $(window).scrollTop();

      var block = $('.wrapp1_block_block');
      var block1 = $('.wrapp_name1');
      var block2 = $('.wrapp_name2');

       var block3 = $('.wrapp2_bord');

       var block4 = $('.wrapp4');


  if (scroll >= $(window).height()) sticky.addClass('sticky');
  else sticky.removeClass('sticky');

    if (scroll >= $(window).height()+$(window).height()/30) 
    	{

    		block.addClass('animated zoomIn'); 
    		block1.addClass('animated rollIn');
    		$( "li" ).eq( 1 ).addClass("ulli");
    		 $( "li" ).eq( 2 ).removeClass( "ulli" ); 
		}

    if (scroll >= $(window).height()+$(window).height()+$(window).height()/5) 
    	{

    		block2.addClass('anim2');
    		$( "li" ).eq( 1 ).removeClass( "ulli" ); 
			$( "li" ).eq( 2 ).addClass( "ulli" );
			$( "li" ).eq( 3 ).removeClass( "ulli" ); 

    	}


    if (scroll >= $(window).height()+$(window).height()+$(window).height()/8)
    {

    	 block3.addClass('anim1'); 

    }

    if (scroll >= $(window).height()+$(window).height()+$(window).height()+$(window).height()/10)
    {

    	     $( "li" ).eq( 2 ).removeClass( "ulli" ); 
			$( "li" ).eq( 3 ).addClass( "ulli" );
			 $( "li" ).eq( 4 ).removeClass( "ulli" ); 
    }

    if (scroll >= $(window).height()+$(window).height()+$(window).height()+$(window).height()+$(window).height()) 
    	{

    		block4.addClass('anim3'); 

    		$( "li" ).eq( 3 ).removeClass( "ulli" ); 
			$( "li" ).eq( 4 ).addClass( "ulli" );

    	}
 
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 50) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}