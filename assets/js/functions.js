
var bannerNo = 1,
    bannerTotal = 3;

var automaticSlider  = setInterval(function(){autoSlide()}, 8000);
    //initilize the functions
$(document).ready(function(){
      movieSlider();
      left_rightControlSlider();

});



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


  //clears a timer set with the setInterval() method.
  clearInterval(automaticSlider);

  });
}

function left_rightControlSlider(){
  $('.left-control-prev, .right-control-next').click(function(){

      var $this            = $(this),
          curActiveMovie  = $('.header-wrapper').find('.active-slide'),
          position         = $('.header-wrapper').children().index(curActiveMovie),
          movieNum        = $('.banner-belt').length;


      if($this.hasClass('right-control-next'))
      {

          if(position < (movieNum - 1))
          {
            $('.active-slide').removeClass('active-slide').next().addClass('active-slide');
          }
          else{
            $('.banner-belt').removeClass('active-slide').first().addClass('active-slide');
            $('.circle-control').removeClass('active-slide').first().addClass('active-slide');

          }


      }
      //left-control-prev function
      else{


        if(position == 0){
          $('.banner-blet').removeClass('active-slide').last().addClass('active-slide');
          $('.circle-control').removeClass('active-slide').last().addClass('active-slide');
          position = 3;
        }
        else{
          $('.active-slide').removeClass('active-slide').prev().addClass('active-slide');
        }

      }

      //clears a timer set with the setInterval() method.
      clearInterval(automaticSlider);

});

}

function autoSlide(){


  bannerNo = bannerNo + 1;

  if(bannerNo > 0 && bannerNo <=3){
    //default function
    $('.active-slide').removeClass('active-slide').next().addClass('active-slide');

  }
  else if(bannerNo > bannerTotal){
    $('.banner-belt').removeClass('active-slide').first().addClass('active-slide');
    $('.circle-control').removeClass('active-slide').first().addClass('active-slide');
    bannerNo = 1;

  }


}
