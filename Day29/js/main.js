var token = "xoxp-63743851541-64142139958-82864436258-1f2525161f02c569b6abe02d92874728";

$(document).ready(function(){
  $.ajax("https://slack.com/api/chat.postMessage/repos", {
    data: {
      sort: "updated",
      direction: "desc"
    }
  }).then(function(result) {
    console.log("response is done");
    // console.log("the data was", result);
    // console.log(result[0].name);

    for (var i=0; i < result.length; i++) {
      // name is result[i].name
      var item = $("<li>" + result[i].name + "</li>");

      var btn = $("<button>Save</button>");
      btn.data("name", result[i].name);

      item.append( btn );

      $("#repos").append( item );
    }

    $("button").click(function() {
      var text = $("#desc").val();
      var repo = $(this).data("name");

      console.log("updating", repo, text);
      setRepoDescription(text, repo);
    })
  })

  console.log("Here");
});

function setRepoDescription(newDesc, repoName) {
  var url = "https://slack.com/api/chat.postMessage/" + repoName;
  url += "?access_token=" + token;

  var requestData = {
    name: repoName,
    description: newDesc
  }

  $.ajax(url, {
    data: JSON.stringify(requestData),
    method: "PATCH"
  })
}







//
