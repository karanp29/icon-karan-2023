


function handleRegisterEvent() {
  const email = document.getElementById("email").value;
  const team_name = document.getElementById("team-name").value;
  const team_member_1 = document.getElementById("team-member-1").value;
  const team_member_2 = document.getElementById("team-member-2").value;
  const team_member_3 = document.getElementById("team-member-3").value;
  const team_member_4 = document.getElementById("team-member-4").value;

  const eventId = document.getElementById("event-info");
  var value = eventId.value;
  var text = eventId.options[eventId.selectedIndex].text;
  let validation = false;
  if (
    email != "" &&
    value != 0 &&
    team_name != "" &&
    team_member_1 != "" &&
    team_member_2 != ""
  ) {
    validation = true;
  }
  //   console.log(email, team_name , team_member_1 , value , text);
  if (validation) {
    let dataobj = JSON.stringify({
      usr_email: email,
      usr_team_name: team_name,
      usr_member_1: team_member_1,
      usr_member_2: team_member_2,
      usr_member_3: team_member_3,
      usr_member_4: team_member_4,
      usr_event_id: value,
      usr_event_name : text
    });
    let status = false;
    $.ajax({
      url: apiURL + registerEventUrl,
      type: "post",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      // CORS: true ,
      async: false,
      data: dataobj,
      success: function (data) {
        debugger;

        if (data.success == 1) {
            status = true;
            // alert("Registration Successful")
            // window.location = webURL;
        }
      },
      error: function (err, textStatus, errorThrown) {
        debugger;
        console.log(err);
      },
    });

    //success then >
    if(status){
      $.ajax({
        url: apiURL + sendMailURL,
        type: "post",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        // CORS: true ,
        async: false,
        data: dataobj,
        success: function (data) {
          // debugger;
  
          if (data.success == 1) {
              // alert("email sent")
               window.location = webURL;
          }
        },
        error: function (err, textStatus, errorThrown) {
          // debugger;
          console.log(err);
        },
      });
    }
  }


}


