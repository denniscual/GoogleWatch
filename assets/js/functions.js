//DECLARTION OF THE VARIABLES
//
var myTimer = setInterval(function(){
    autoSlide();
  }, 8000);
//initilize the functions
$(document).ready(function(){

      movieSlider();
      left_rightControlSlider();
      smoothScroll(1000);
      changingColorNav();
      toggleMenu();


});

function changingColorNav(){
  $(window).scroll(function() { // check if scroll event happened
    if ($(document).scrollTop() > 745) { // check if user scrolled more than 745 from top of the browser window
      $("#head").addClass("change-nav");
    } else {
      $("#head").removeClass("change-nav") // if not
    }
  });

}

//movie SLIDER
function movieSlider(){
  $('.banner-belt').first().addClass('active-slide'); //default
  $('.circle-control').first().addClass('active-slide');


  //if we clicked to each logo.
  $('.circle-control').click(function (){
  var  $this     = $(this), //get the class name for this div that we clicked.
       $siblings = $(this).parent().children(), // get all the siblings(included div on the group)
       position  = $siblings.index($this); //will get the index or the position of the div element on the group.


  //
  $('.banner-belt').removeClass('active-slide') //remove the actvie-slide named on the first slide-unit
                  .eq(position) // we take the element on the set(.slide-unit) based on its position.
                  .addClass('active-slide'); // after getting the element, add a class named active-slide.

  $siblings.removeClass('active-slide'); //remove the class named on the slide-logo div.
  $this.addClass('active-slide'); //we will add class named active-slide on the div that we are clicking.

  });
}

function left_rightControlSlider(){

  $('.banner-belt').first().addClass('active-slide'); //default
  $('.circle-control').first().addClass('active-slide');


  $('.left-control-prev, .right-control-next').click(function(){

      var $this            = $(this),
          curActiveMovie  = $('.header-wrapper').find('.active-slide'),
          position         = $('.header-wrapper').children().index(curActiveMovie),
          movieNum        = $('.banner-belt').length;


      if($this.hasClass('right-control-next'))
      {

          if(position < movieNum)
          {
            $('.active-slide').removeClass('active-slide').next().addClass('active-slide');
          }
          else{
            $('.banner-belt').removeClass('active-slide').first().addClass('active-slide');
            $('.circle-control').removeClass('active-slide').first().addClass('active-slide');
            position = 0;
          }

          console.log(position);



      }
      //left-control-prev function
      else{

        if((position-1) == 0)
        {
          $('.banner-belt').removeClass('active-slide').last().addClass('active-slide');
          $('.circle-control').removeClass('active-slide').last().addClass('active-slide');
        }


        else{
          $('.active-slide').removeClass('active-slide').prev().addClass('active-slide');
        }



      }


});

}

function autoSlide(){
  var $this            = $(this),
      curActiveMovie  = $('.header-wrapper').find('.active-slide'),
      position         = $('.header-wrapper').children().index(curActiveMovie),
      movieNum        = $('.banner-belt').length;



  if(position < movieNum){
    //default function
    $('.active-slide').removeClass('active-slide').next().addClass('active-slide');

  }
  else{
    $('.banner-belt').removeClass('active-slide').first().addClass('active-slide');
    $('.circle-control').removeClass('active-slide').first().addClass('active-slide');
    position = 0;

  }

  console.log(position);

}



//smoothScroll function is applied from the document ready function
function smoothScroll (duration)
{
	$('a[href^="#"').on('click', function(event)
	{

		var target = $( $(this).attr('href') );

		if( target.length )
		{
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
				/* stuff to do after animation is complete */
			},duration);
		}

	});
}


//slideIn and slideOout menu
function toggleMenu(){
  $(".menu").click(function(event){
    event.preventDefault();//prevent the default callback function of an anchor tag.
    $("#navMenu").toggleClass("active");
  });
}
