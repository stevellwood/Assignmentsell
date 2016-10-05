
		// $(document).ready(function() {

		// 	$.ajax({
  //       		url: "http://localhost:8080/students"
  //   		}).then(function(data) {
  //   			console.log(data);
  //   		});
$(document).ready(function() {
	//var studentsarr =  new Array();
	// var data=
 //   {
 //                    "token": slacktoken,
 //                    // "channel": channel,
 //                    // "text": msg,
 //                    //"username": "stevellwood"
 //                };
    console.log("getting ready");
    
        $.ajax({url: "http://localhost:8080/studentlist"}).then(function(result) {
            console.log("ajax function");
            //console.log(result);
            build_table(result);
            $(".del_student").click(function() {
                var id = $(this).val();
                
                $.ajax(
                  {url: "http://localhost:8080/delete_student/" + id}
                ).then(function() {
                  $.ajax({
                    url: "http://localhost:8080/studentlist"
                  }).then(function(result) {
                    build_table(result);
                  })
                });
            })
        });
      })
      

    function build_table(result) {
          var student_list = $("#student_list");
          student_list.empty();
              
          for(var i = 0; i < result.length; i++) {
            console.log(result[i]["id"]);
            var student_row = $("<div class=\"row\">");
            student_row.append($("<div class=\"col-sm-2\">&nbsp;</div>"));    
            student_row.append($("<div class=\"col-sm-1\">" + result[i]["id"] + "</div>"));
            student_row.append($("<div class=\"col-sm-1\">" + result[i]["first_name"] + "</div>"));
            student_row.append($("<div class=\"col-sm-1\">" + result[i]["last_name"] + "</div>"));
            student_row.append($("<div class=\"col-sm-1\">" + result[i]["sat"] + "</div>"));
            student_row.append($("<div class=\"col-sm-1\">" + result[i]["gpa"] + "</div>"));
            student_row.append($("<div class=\"col-sm-1\"><button class=\"glyphicon glyphicon-remove del_student\" value=\"" + result[i]["id"] +  "\"></button></div>"));
            //student_row.append($("<div class=\"col-sm-1\"><a id=\"up_student\" href=\"student_details?id=" + result[idx]["id"] + "&edit=true\"><span class=\"glyphicon glyphicon-edit\"</span></a></div>"))
            student_row.append($("</div>"));
            
            student_list.append(student_row); 
          }
        }
        
             // for (var i=0; i < result.length; i++) {
             //   var fullname = result[i].firstName+" " +result[i].lastName;
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
//   var row = $("<tr><td>"+ fullname+"</td><td>" +result[i].sat+"</td><td>" +result[i].gpa+"</td><td> Pencil </td><td> Delete </td>");
//                 $("#tablerows").append(row);                                                                                                                            
      
//                 console.log(result[i].first_name+ "added"); 
//         };

// 		}) 
// });