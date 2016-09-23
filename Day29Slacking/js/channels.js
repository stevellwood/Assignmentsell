
  var channelID =  new Array();
   var groupID =  new Array();
  var channel;
  var slacktoken = getSlackToken();
  var showGroups = false;
// }
// https://slack.com/api/chat.postMessage
$(document).ready(function() {
	var data=
   {
                    "token": slacktoken,
                    // "channel": channel,
                    // "text": msg,
                    //"username": "stevellwood"
                };
    console.log("pressed line 16");
    
        $.ajax("https://slack.com/api/channels.list", {
	        data:   data,
	        //username: "stevellwood", //if you omit this it will fail
	        method: "GET"
        }).then(function(result) {
            console.log("ajax function")
            console.log(result);
             for (var i=0; i < result.channels.length; i++) {
                channelID[i] = result.channels[i].id;
                var name = result.channels[i].name;
                var row = $('<input type="radio" id="'+i+'button" class="radiorow">' + name + '<br>');
               console.log(row);
                $("#channelrows").append(row);   
                console.log(result.channels[i].name); 
        };
        
   
}); 
// function showPrivateChans(){
    //if(showGroups===true){
        $.ajax("https://slack.com/api/groups.list", {
            data:   data,
            //username: "stevellwood", //if you omit this it will fail
            method: "GET"
        }).then(function(result) {
            console.log("ajax function")
            console.log(result);
            var header = $('<p>My Private Channels</p>')
            $("#groupchannels").append(header); 
             for (var i=0; i < result.groups.length; i++) {
                groupID[i] = result.groups[i].id;
                var name = result.groups[i].name;
                var row = $('<input type="radio" id="'+i+'groupbutton" class="radiorow">' + name + '<br>');
               console.log(row);
                $("#groupchannels").append(row);   
                console.log(result.groups[i].name); 
        };
        
   
});
//} 
function getChannel(){
    for(i=0;i<channelID.length;i++){
        var buttonName = i +"button";
        if(document.getElementById(buttonName).checked == true)
            channel= channelID[i];}
    for(i=0;i<groupID.length;i++){
        var buttonName = i +"groupbutton";
        if(document.getElementById(buttonName).checked == true)
            channel= groupID[i];
}}
// function getprivateChannel(){
//     for(i=0;i<groupID.length;i++){
//         var buttonName = i +"button";
//         if(document.getElementById(buttonName).checked == true)
//             channel= groupID[i];
// }}


$("#posting").click(function(){
    getChannel(); //sets channel for the current radio button
    var text = $("#message").val();
    postMessage(text);
});
$("#togglechannel").click(function(){
    //showGroups = true;
 //   showPrivateChans();
    $("#groupchannels").toggle();//document.elementID.innerText = value
    console.log("Button "+document.getElementById("togglechannel").value);
    if(document.getElementById("togglechannel").innerText == "Show Private Channels"){
        document.getElementById("togglechannel").innerText = "Hide Private Channels";
    }
    else{document.getElementById("togglechannel").innerText = "Show Private Channels";
      }
   // getChannel(); //sets channel for the current radio button
   //  var text = $("#message").val();
   //  postMessage(text);
});

function postMessage(MessageIn){
    //var msg = $("#message").val();
   var username = "stevellwood";
   // {
   //                  "token": token,
   //                  "channel": channel,
   //                  "text": MessageIn
   //              };
                console.log("read in data");
     $.ajax("https://slack.com/api/chat.postMessage", {
           data: {
                    "token": slacktoken,
                    "channel": channel,
                    "text": MessageIn,
                    "username": username
                },
             //if you omit this it will fail
            "method": "POST"
        })
 }
});

// do api url
// get result
// create new values for the div with id blank.
// for loop to get id's of channels.
//     insert each id into the id of the html
// $("#radios").append('<div class="inc button">+</div><div class="dec button">-</div>');



// https://slack.com/api/METHOD.