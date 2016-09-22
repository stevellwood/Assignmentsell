var token = "xoxp-63743851541-64142139958-82864436258-1f2525161f02c569b6abe02d92874728";

// }
// https://slack.com/api/chat.postMessage
$(document).ready(function() {
$("#posting").submit(function(e) {
	var msg = $("#message").val();
	var channel = "slackbots";
	var data=
   {
                    "token": token,
                    "channel": channel,
                    "text": msg,
                    //"username": "stevellwood"
                };
    console.log("pressed line 16");
    e.preventDefault();
        $.ajax("https://slack.com/api/chat.postMessage", {
	        data:   data,
	        username: "stevenllwood", //if you omit this it will fail
	        method: "POST"
        }).then(function(result) {
            console.log("ajax function")
            console.log(result);
        }).fail(function(e) {
        	console.log("err", e)
        });
        console.log("done");
        
    });
});
	//$(#post)
	// })
// {
//     "ok": true,
//     "channel": "C2EQLTT7A",
//     "ts": "1474568738.000092",
//     "message": {
//         "text": "test",
//         "username": "stevellwood",
//         "type": "message",
//         "subtype": "bot_message",
//         "ts": "1474568738.000092"
//     }
// }
// {
//     "ok": true,
//     "channel": "C2EQLTT7A",
//     "ts": "1474566981.000048",
//     "message": {
//         "text": "test",
//         "username": "steve",
//         "type": "message",
//         "subtype": "bot_message",
//         "ts": "1474566981.000048"
//     }
//}

