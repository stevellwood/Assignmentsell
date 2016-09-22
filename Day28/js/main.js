$(function() {
// $(document).ready(function() {

   $(".orderow").append('<div class="inc button">+</div><div class="dec button">-</div>');
$(".button").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
	var cvalue = Number( $(".cvalue").val() );
    if ($button.text() == "+") {
  	  var newVal = parseFloat(oldValue) + 1;
  	} else {
	   // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
	    } else {
        newVal = 0;
      }
	  }

    $button.parent().find("input").val(newVal);
 	if (oldValue === 8) {
      $("#guess").addClass("invalid"); 
      // adds css class
    } else {
      // Record and display guess remove invalid in case it was set before due to NAN
      $("#guess").removeClass("invalid");
     }

    $("#reset").click(function(){
    	document.getElementById('check1').value = 0;
    });
  });

});


// Two classes each, one generic "button" class which will be 90% of the styling and the class we'll use to bind the click event. The other unique class to adjust the background position and utilize the sprite

// $(document).ready(function() {
//   var tryBox = $("#try-count");
//   var resultMessage = $(".result");
// 	$("form div").append('<div class="inc button">+</div><div class="dec button">-</div>');
//   resultMessage.hide();