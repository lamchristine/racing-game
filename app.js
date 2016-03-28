// define globals
console.log ("OK");

$(document).on('ready', function() {

  $(document).keyup(function(objEvent) {
    if (event.which === 65) {
      console.log ("Ok, we're listening for A");
    }
  });

  $(document).keyup(function (objEvent) {
    if (event.which === 76) {
    console.log ("Ok, we're listening for L");
    }
  });


});


//////////////////////////////////
/*

THIS FUNCTION WILL EVENTUALLY ANIMATE
THE AVATARS

$('.red').on('click', function() {
  $(this).animate (
    { left: 20 },
    'slow');
});

*/
//////////////////////////////////
