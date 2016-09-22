$(function() {
// $(document).ready(function() {
// var incb = $(".inc");
//     var decb = $(".dec");
   $(".orderow").append('<div class="inc button">+</div><div class="dec button">-</div>');
$(".button").on("click", function() {
    
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    
	//var cvalue = Number( $(".cvalue").val() );
    if ($button.text() == "+") {
  	  var newVal = parseFloat(oldValue) + 1;
     // Update();
    
  	} else {
	   // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
        //Update();
	    } else {
        newVal = 0;
         
      }
	  }
     if(oldValue  % 2 === 0 && oldValue  !== 0) {
        $(".guess").addClass(".make-italic")
      } else {
        $(".guess").removeClass(".make-italic");
      }
 
    //$button.parent().find("input").val(newVal);
    
    if(newVal > 8) {
        $(".guess").addClass("invalid"); 
      } else {
        $(".guess").removeClass("invalid");
      }
    var sevenfind = parseFloat(newVal).toString();
    var find = sevenfind.search("7"); 
    console.log(sevenfind);
    if (!(find === -1)) {
         $(".guess").addClass("green"); 
      } else {
        $(".guess").removeClass("green");
      }

    $("#reset").click(function(){
      document.getElementById('check1').value = 0;
      document.getElementById('check2').value = 0;
      document.getElementById('check3').value = 0;
    // });
  });
    $button.parent().find("input").val(newVal);
  // incb.click(function(){
  //   getValue();
  //   Update();});
  // decb.click(function(){
  //   getValue();
  //   Update();});
 });
// function getValue(){
// if ($button.text() == "+") {
//       var newVal = parseFloat(oldValue) + 1;
//     } else {
//      // Don't allow decrementing below zero
//       if (oldValue > 0) {
//         var newVal = parseFloat(oldValue) - 1;
//       } else {
//         newVal = 0;
//       }
//     }
//   }
// function Update() {

//       // Generates a random background color for the number box
//       if(oldValue  % 2 === 0 && oldValue  !== 0) {
//         $(".guess").addClass("make-italic")
//       } else {
//         $(".guess").removeClass("make-italic");
//       }
 
//     //$button.parent().find("input").val(newVal);
//     if(oldValue > 8) {
//         $(".guess").addClass("invalid"); 
//       } else {
//         numberLocation.removeClass("invalid");
//       }
//  	  if((number + "").indexOf("7") !== -1) {
//          $(".guess").addClass("green"); 
//       } else {
//         numberLocation.removeClass("green");
//       }

//     $("#reset").click(function(){
//     	document.getElementById('check1').value = 0;
//       document.getElementById('check2').value = 0;
//       document.getElementById('check3').value = 0;
//     // });
//   }
// }

});


// Two classes each, one generic "button" class which will be 90% of the styling and the class we'll use to bind the click event. The other unique class to adjust the background position and utilize the sprite

// $(document).ready(function() {
//   var tryBox = $("#try-count");
//   var resultMessage = $(".result");
// 	$("form div").append('<div class="inc button">+</div><div class="dec button">-</div>');
//   resultMessage.hide();