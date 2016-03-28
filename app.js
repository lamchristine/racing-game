// define globals
console.log ("OK");

$(document).on('ready', function() {

  $('.red').on('click', function() {
    $(this).animate (
      { left: 20 },
      'slow');
  });

});

/*
})
  $('.red').click (function animateImage() {
    console.log("Called");
    $('.red').css({right:"10px"});
    $('.red').animate({right: '-5%'}, 400, 'swing', function(){animateImage();});
  });


});
*/
