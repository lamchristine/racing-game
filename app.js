// define globals
console.log ("OK");

$(document).on('ready', function() {

  $(window).keyup (function (objEvent) {
    console.log ("Ok, we're listening for A");
    if (event.which === 65) {
      $('.redPlayer').animate ( { 'left' : '+=75'}, 'linear');
    }
  });


  $(window).keyup(function (objEvent) {
    console.log ("Ok, we're listening for L");
    if (event.which === 76) {
      $('.bluePlayer').animate ( { 'left' : '+=75'}, 'linear');
    }
  });

});
