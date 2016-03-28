// define globals
console.log ("OK");

$(document).on('ready', function() {

  $(window).keyup (function () {
    if (event.which === 65) {
      console.log ("Ok, we're listening for A");

      //To determine how far red needs to go
      var redTrackWidth = ( $('#redTrack').width() );
      console.log ("Red track width is: " + redTrackWidth);

      //To determine red position's value
      var redPlayerMargin = ( $('.redPlayer').css('left'));
      console.log ("Red is currently at: " + redPlayerMargin);

      $('.redPlayer').animate ( { 'left' : '+=75'}, 'linear');

    }
  });


  $(window).keyup(function () {
    if (event.which === 76) {
      console.log ("Ok, we're listening for L");
      var blueTrackWidth = ( $('#blueTrack').width() ); //How far blue needs to go
      console.log ("Blue track width: " + blueTrackWidth);
      $('.bluePlayer').animate ( { 'left' : '+=75'}, 'linear');
    }
  });

});
