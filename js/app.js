$(document).ready(
  function(){

    $('.ryu').mouseenter(function(){
    console.log("in ,hide still, show ready");
    $('.ryu-still').hide();
    $('.ryu-ready').show();
    $('.ryu-cool').hide();


    }
   	)
.mouseleave(function(){
    console.log("out,hide ready, show still");
    $('.ryu-still').show();
    $('.ryu-ready').hide();
    $('.hadouken').hide();
        $('.ryu-cool').hide();
    }
   	)
.mousedown(function() {
    console.log('mousedown');
    // play hadouken sound
    playHadouken ();
    // show hadouken and animate it to the right of the screen
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show().animate(
      {'left':'1280px'},
      500,
      function(){
        console.log("callback");
        $(this).hide();
        $(this).css('left','520px');
      }
      )

    $('.hadouken').finish().show()
       .animate(
        {'left': '1020px'},
         500,
         function() {
         $(this).hide();
         $(this).css('left', '520px');
          }
         );
  })

  .mouseup(function() {
    console.log('mouseup');
    $('.ryu-ready').show();
    $('.ryu-throwing').hide();
    // ryu goes back to his ready position
  })
 

  function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
}   
);

$(document).keydown(function(e) {
    if(e.which == 88) {
        console.log('You pressed x');
         $('.ryu-still').hide();
    $('.ryu-ready').hide();
    $('.hadouken').hide();
     $('.hadouken').hide();
   $('.ryu-cool').show(  function(){console.log("out");});


    }
});


$(document).keyup(function(e) {
    if(e.which == 88) {
        console.log('You released x');
         $('.ryu-still').show();
    $('.ryu-ready').hide();
    $('.hadouken').hide();
     $('.hadouken').hide();
   $('.ryu-cool').hide();

    }
});
