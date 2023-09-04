const toggleForm = () => {
  const container = document.querySelector(".container");
  container.classList.toggle("active");
};

const userObj = {
  userEmail: "",
  userToken: "",
};
document.addEventListener("DOMContentLoaded", (event) => {
  if (localStorage.getItem("loginType") == "register") {
    document.getElementById("register-btn").click();
  }
  localStorage.removeItem("loginType");
});

function handleUserRegister(e) {
  let redirectionStatus  = false;
  debugger;
  let email = document.querySelector("#register-email").value;
  let pwd = document.querySelector("#register-pwd").value;
  let cpwd = document.querySelector("#register-cpwd").value;
  let validation = true;
  if (email == "" || pwd == "" || cpwd == "") {
    alert("fill details");
    validation = false;
  }
  if (pwd != cpwd) {
    alert(" password not match");
    validation = false;
  }
  //call api - register user
  if (validation) {
    let dataobj = JSON.stringify({
      usr_name: null,
      usr_email: email,
      usr_pwd: pwd,
      usr_mobile: null,
    });
    let status = false;
    $.ajax({
      url: apiURL + createUserURL,
      type: "post",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      // CORS: true ,
      async: false,
      data: dataobj,
      success: function (data) {
        // debugger;
        console.log(data);
        //save user data in local storage

        if (data.success == 1) {
          userObj.userEmail = email;
          userObj.userToken = data.token;

          localStorage.setItem("userData", JSON.stringify(userObj));
          //redirect to home page
          redirectionStatus  = true;
         // window.location = webURL;
        }
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        // debugger;
        console.log();
      },
    });
  }

  if(redirectionStatus){
    redirectToHome();
  }
}

function handleUserLogin(e) {
  let redirectionStatus = false;
  let email = document.querySelector("#login-email").value;
  let pwd = document.querySelector("#login-pwd").value;
  // alert("login success");
  let validation = false;
  if (email != "" && pwd != "") {
    validation = true;
  }
  if (validation) {
    let dataobj = JSON.stringify({
      usr_email: email,
      usr_pwd: pwd,
    });
    //call api - login user
    $.ajax({
      url: apiURL + loginUserURL,
      type: "post",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      // CORS: true ,
      async: false,
      data: dataobj,
      success: function (data) {
        // debugger;
        console.log(data);
        //save user data in local storage

        if (data.success == 1) {
          userObj.userEmail = email;
          userObj.userToken = data.token;

          localStorage.setItem("userData", JSON.stringify(userObj));
          //redirect to home page
          redirectionStatus = true;
          //window.location = webURL;
        }
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        debugger;
        console.log();
      },
    });
  }

  if(redirectionStatus){
    redirectToHome();
  }
}


function redirectToHome(){

    setTimeout(() => {
      window.location = webURL;
    },5000)

}