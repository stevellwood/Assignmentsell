
		// $(document).ready(function() {

		// 	$.ajax({
  //       		url: "http://localhost:8080/students"
  //   		}).then(function(data) {
  //   			console.log(data);
  //   		});
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
               var fullname = result[i].firstName+" " +result[i].lastName;
               //studentsarr[i] = result[i];
                //var name = result.channels[i].name; note that wwe use firstName because she renamed it using hibernate in Student
                //var ppencil = "class="btn btn-info btn-lg glyphicon glyphicon-pencil"></a>";
      //    <p>Pencil icon on a styled link button: <a href="#" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-pencil"></span> Pencil
      //   </a>
      // </p>
               // var pencil = "<a href="#" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-pencil"></span> Edit</a>"
               // var row = $("<tr><td>"+ result[i].firstName+"</td><td>" +result[i].lastName+"</td><td class="btn btn-info btn-lg">"+"<span class="glyphicon glyphicon-pencil"></span>"+"</td><td>Delete</td></tr>");
  //<a href="'detail.html?id=" + result[i].id+ '">"+fullname+"</a>"

  // var row = $("<tr><td>"+ fullname+ "</td><td>"+result[i].sat+"</td><td>" +result[i].gpa+"</td><td class="btn btn-info btn-lg">Pencil</td><td>Delete</td></tr>");
  //              console.log(row);
  //var row = $("<tr><td>"+ fullname+"</td><td>" +result[i].sat+"</td><td>" +result[i].gpa+"</td></td><a href="/StudentList.html" class="btn btn-info btn-lg"><span class="glyphicon glyphicon-pencil"></span> Pencil </a>");
 // var row = $("<tr><td>"+ fullname+"</td><td>" +result[i].sat+"</td><td>" +result[i].gpa+"</td><td class="btn btn-info btn-lg"> Pencil </td>");
  var row = $("<tr><td>"+ fullname+"</td><td>" +result[i].sat+"</td><td>" +result[i].gpa+"</td><td> Pencil </td><td> Delete </td>");
                $("#tablerows").append(row);                                                                                                                            
      
                console.log(result[i].first_name+ "added"); 
        };

		}) 
});