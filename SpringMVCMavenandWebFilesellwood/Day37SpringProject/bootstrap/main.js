$(document).ready(function() {
	var studentsarr =  new Array();
	// var data=
 //   {
 //                    "token": slacktoken,
 //                    // "channel": channel,
 //                    // "text": msg,
 //                    //"username": "stevellwood"
 //                };
    console.log("pressed line 16");
    
        $.ajax({url: "http://localhost:8080/student"}).then(function(result) {
            console.log("ajax function")
            console.log(result);
             for (var i=0; i < result.length; i++) {
               //studentsarr[i] = result[i];
                //var name = result.channels[i].name; note that wwe use firstName because she renamed it using hibernate in Student
                var row = $("<tr><td>"+ result[i].firstName+"</td><td>" +result[i].lastName+"</td><td>" +result[i].sat+"</td><td>" +result[i].gpa+"</td></tr>");
               console.log(row);
                $("#tablerows").append(row);   
                console.log(result[i].first_name+ "added"); 
        };

		}) 
});