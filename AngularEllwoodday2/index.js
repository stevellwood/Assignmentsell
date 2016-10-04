angular.module("AppMod", [])
	.controller("AppCtrl", [function() {
		var self = this;
		self.about = "AppMod";

		self.submit = function() {
			console.log("User clicked submit with user " + self.user);
		};


	}]); // end controller

//  $(document).ready(function(){
//     $("type").focus(function(){
//         $(this).css("background-color", "#cccccc");
//     });
//     $("type").blur(function(){
//         $(this).css("background-color", "#ffffff");
//     });
// });