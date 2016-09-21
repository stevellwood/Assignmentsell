// function setHeader() {
//   $("h1").text("Something else");
// }
// $(document).ready(setHeader);

var triesLeft = 6;
// Random number between 1 and 100
var answer = Math.floor(Math.random() * 100) + 1;

console.log("answer is", answer);

$(document).ready(function() {
  var tryBox = $("#try-count");
  var resultMessage = $(".result");

  resultMessage.hide();

  // console.log("a");
  $("#record-guess").click(function() {
    console.log("Clicked button");

    var guess = Number( $("#guess").val() );

    // Validate guess
    if (isNaN(guess)) {
      $("#guess").addClass("invalid"); 
      // adds css class
    } else {
      // Record and display guess remove invalid in case it was set before due to NAN
      $("#guess").removeClass("invalid");

      // Update tries
      triesLeft--;
      //try box is actually a tag defined as id=trycount
      tryBox.text("Tries left: " + triesLeft);

      // Check result
      var result;
      if (guess > answer) {
        result = "High";
      } else if (guess < answer){
        result = "Low";
      } else {
        result = "Correct";
        resultMessage.text("You win!").show();
      }

      // Test for losing
      if (triesLeft === 0 && guess !== answer) {
        resultMessage.
          text("You lose. Answer is " + answer + ".").
          show();
//disable the submit button
        $("#record-guess").attr("disabled", "disabled");
      }

      // Add result row do this on bottom because guess value changes according to cir and we want it loccal to the append fx
      var newRow = $("<tr><td>" + guess + "</td></tr>");
      var newCell = $("<td>" + result + "</td>");
      newRow.append( newCell ); //this gets called at every submit so adds a new line
    }

    $("table").prepend( newRow );//notice that if it doesn't begin with . or # it refers to html tag
  });

  tryBox.text("Tries left: " + triesLeft);
});