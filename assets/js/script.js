"use strict";

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) {
  navElemArr.push(navbarLinks[i]);
}

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}

/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400
    ? header.classList.add("active")
    : header.classList.remove("active");
});

//event data

//later use for sorting
// eventType > 1 Technical
// 2 Non Technical
// 3 Gaming

const eventData = [
  {
    eventId: 1,
    eventType: 2,
    eventName: "Valorant",
    eventDesc: "Valorant 5v5 gaming",
    teamSize: "5",
    datetime: new Date(),
    eventMode: "online",
    venue: "101, Management Building",
    poc1: "Karan P",
    poc1: "K panchal",
    registrationFee: 400,
    eventTopic: "Digital Fusion",
    imgPath: "./assets/images/valorant.png",
  },

  {
    eventId: 1,
    eventType: 1,
    eventName: "coding decoding",
    eventDesc: "Break the Query",
    teamSize: "2-4",
    datetime: new Date(),
    eventMode: "online",
    venue: "101, Management Building",
    poc1: "Karan P",
    poc1: "K panchal",
    registrationFee: 400,
    eventTopic: "Digital Fusion",
    imgPath: "./assets/images/tech.png",
  },
  {
    eventId: 1,
    eventType: 5,
    eventName: "Cricket",
    eventDesc: "play cricket",
    teamSize: "5-6 ",
    datetime: new Date(),
    eventMode: "online",
    venue: "101, Management Building",
    poc1: "Karan P",
    poc1: "K panchal",
    registrationFee: 400,
    eventTopic: "Digital Fusion",
    imgPath: "./assets/images/cricket.png",
  },
  {
    eventId: 1,
    eventType: 5,
    eventName: "Cricket",
    eventDesc: "play cricket",
    teamSize: "5-6 ",
    datetime: new Date(),
    eventMode: "online",
    venue: "101, Management Building",
    poc1: "Karan P",
    poc1: "K panchal",
    registrationFee: 400,
    eventTopic: "Digital Fusion",
    imgPath: "./assets/images/cricket.png",
  },
];

const parseJwt = (token) => {
  const decode = JSON.parse(atob(token.split(".")[1]));
  console.log(decode);
  if (decode.exp * 1000 < new Date().getTime()) {
    logoutAction();
    console.log("Time Expired");
    return true;
  } else {
    console.log("token is valid");
    return false;
  }
};

window.addEventListener("load", (event) => {
  debugger
  if (localStorage.getItem("userData")) {
    const token = JSON.parse(localStorage.getItem("userData")); 
    const status = parseJwt(token.userToken);
    if (status) {
      //session expired
      const btn = document.querySelectorAll(".header-top-btn");
      for(let i = 0 ; i < btn.length ; i++){
        btn[i].style.display = "";
      }
      const user = document.getElementById("header-top-user");
      user.style.display = "none";
    } else {
      //active
      const btn = document.querySelectorAll(".header-top-btn");
      for(let i = 0 ; i < btn.length ; i++){
        btn[i].style.display = "none";
      }
      const user = document.getElementById("header-top-user");
      user.style.display = "";
    }
  }
  else{ // session does not exisst
          //session expired
          const btn = document.querySelectorAll(".header-top-btn");
          for(let i = 0 ; i < btn.length ; i++){
            btn[i].style.display = "";
          }
          const user = document.getElementById("header-top-user");
          user.style.display = "none";

  }
  // console.log(eventList)
  bindEventData(eventData);
});

function bindEventData(eventData) {
  const eventList = document.querySelector(".event-list");
  for (let i = 0; i < eventData.length; i++) {
    const html = `
          <li>
      <div class="property-card">

      <figure class="card-banner">

        <a href="#">
          <img src="${eventData[i].imgPath}" alt="${eventData[i].eventDesc}" class="w-100">
        </a>



      </figure>

      <div class="card-content">

        <h3 class="h3 card-title">
          <a href="#">${eventData[i].eventName}</a>
        </h3>

        <p class="card-text">
        ${eventData[i].eventDesc}
        </p>

        <ul class="card-list">

          <li class="card-item">
            <strong>${eventData[i].teamSize}</strong>

            <ion-icon name="people-outline"></ion-icon>

            <span> Members</span>
          </li>

          <li class="card-item">
            <strong>Rs.${eventData[i].registrationFee}</strong>

            <ion-icon name="square-outline"></ion-icon>

            <span>Registraion Fees</span>
          </li>

        </ul>

      </div>

      <div class="card-footer">

        <div class="card-author">

        

          <div>
            <p class="author-name">
              <a href="#">${eventData[i].poc1}</a>
            </p>

            <p class="author-title">POC</p>
          </div>

        </div>

        <div class="card-footer-actions">

          <button class="card-footer-actions-btn" onclick="redirectToEventForm()">
          Register
          </button>

        </div>

      </div>

      </div>
      </li>`;

    eventList.innerHTML += html;
  }
}

function handleUserLogin(type) {
  if (type == "login") {
    localStorage.setItem("loginType", "login");
  } else {
    localStorage.setItem("loginType", "register");
  }
  window.location.href = webURL + "login.html";
}


const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
function openPopup(){
  // alert('open form')
   popup.style.display = '';
}
closeBtn.addEventListener('click', ()=>{
  popup.style.display = 'none';
});
popup.addEventListener('click', ()=>{
  popup.style.display = 'none';
});

function redirectToEventForm(){
  // alert('click')
  window.location = eventRegisterUrl;
}
