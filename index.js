"use strict";

// MENU OPTION MOUSE EVENTS

// h1 elements
const academics = document.getElementById("Academics");
const degreeAdvice = document.getElementById("DegreeAdvice");
const moneyMatters = document.getElementById("MoneyMatters");
const foodShelter = document.getElementById("FoodShelter");
const work = document.getElementById("Work");
const personal = document.getElementById("Personal");
const basics = document.getElementById("Basics");
const index = document.getElementById("Index");

// Mobile Express Link
const expButton = document.getElementById("expressButton");
const expLink = document.querySelector(".express-link");

expButton.addEventListener("click", function () {
  if (expLink.style.display === "none" || expLink.style.display === "") {
    expLink.style.display = "initial";
    expButton.innerHTML = "▲";
  } else {
    expLink.style.display = "none";
    expButton.innerHTML = "▼";
  }
});

// dynamic menu text changes
const changeTextMouseOn = function (option) {
  switch (option) {
    case "academics":
      academics.innerHTML = "University Class Schedule, <br> Classes...";
      academics.style.fontSize = "1.35vw";
      academics.style.transform = "translateY(200%)";
      academics.style.transitionDuration = "0.2s";
      break;
    case "degreeAdvice":
      degreeAdvice.innerHTML = "Degree Advice Report, <br> Advisors...";
      degreeAdvice.style.fontSize = "1.35vw";
      degreeAdvice.style.transform = "translateY(200%)";
      degreeAdvice.style.transitionDuration = "0.2s";
      break;
    case "moneyMatters":
      moneyMatters.innerHTML = "Account Inquiry, <br> Financial Aid...";
      moneyMatters.style.fontSize = "1.35vw";
      moneyMatters.style.transform = "translateY(180%)";
      moneyMatters.style.transitionDuration = "0.2s";
      break;
    case "foodShelter":
      foodShelter.innerHTML = "My Housing, <br> Convenience Points...";
      foodShelter.style.fontSize = "1.35vw";
      foodShelter.style.transform = "translateY(180%)";
      foodShelter.style.transitionDuration = "0.2s";
      break;
    case "work":
      work.innerHTML = "Student Employment Office, <br> Quickie Jobs...";
      work.style.fontSize = "1.35vw";
      work.style.transform = "translateY(110%)";
      work.style.transitionDuration = "0.2s";
      break;
    case "personal":
      personal.innerHTML = "Address, <br> Personal Profile...";
      personal.style.fontSize = "1.35vw";
      personal.style.transform = "translateY(180%)";
      personal.style.transitionDuration = "0.2s";
      break;
    case "basics":
      basics.innerHTML = "Getting Started, <br> What's on Student Link...";
      basics.style.fontSize = "1.35vw";
      basics.style.transform = "translateY(180%)";
      basics.style.transitionDuration = "0.2s";
      break;
    case "index":
      index.innerHTML = "List of Functions, <br> Student Link Directory...";
      index.style.fontSize = "1.35vw";
      index.style.transform = "translateY(180%)";
      index.style.transitionDuration = "0.2s";
      break;
    default:
  }
};

const restoreTextMouseOff = function (option) {
  switch (option) {
    case "academics":
      academics.innerHTML = "Academics";
      academics.style.fontSize = "1.8vw";
      academics.style.transform = "translateY(275%)";
      academics.style.transitionDuration = "0.2s";
      break;
    case "degreeAdvice":
      degreeAdvice.innerHTML = "Degree Advice";
      degreeAdvice.style.fontSize = "1.8vw";
      degreeAdvice.style.transform = "translateY(275%)";
      degreeAdvice.style.transitionDuration = "0.2s";
      break;
    case "moneyMatters":
      moneyMatters.innerHTML = "Money Matters";
      moneyMatters.style.fontSize = "1.8vw";
      moneyMatters.style.transform = "translateY(275%)";
      moneyMatters.style.transitionDuration = "0.2s";
      break;
    case "foodShelter":
      foodShelter.innerHTML = "Food & Shelter";
      foodShelter.style.fontSize = "1.8vw";
      foodShelter.style.transform = "translateY(275%)";
      foodShelter.style.transitionDuration = "0.2s";
      break;
    case "work":
      work.innerHTML = "Work";
      work.style.fontSize = "1.8vw";
      work.style.transform = "translateY(275%)";
      work.style.transitionDuration = "0.2s";
      break;
    case "personal":
      personal.innerHTML = "Personal";
      personal.style.fontSize = "1.8vw";
      personal.style.transform = "translateY(275%)";
      personal.style.transitionDuration = "0.2s";
      break;
    case "basics":
      basics.innerHTML = "Basics";
      basics.style.fontSize = "1.8vw";
      basics.style.transform = "translateY(275%)";
      basics.style.transitionDuration = "0.2s";
      break;
    case "index":
      index.innerHTML = "Index";
      index.style.fontSize = "1.8vw";
      index.style.transform = "translateY(275%)";
      index.style.transitionDuration = "0.2s";
      break;
    default:
  }
};

// Degree Advice Alert
function degAdvAlert() {
  alert("Student Login Required.");
}

// CLOCK
let tmonth = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function GetClock() {
  let d = new Date();
  let nmonth = d.getMonth(),
    ndate = d.getDate(),
    nyear = d.getFullYear();

  let nhour = d.getHours(),
    nmin = d.getMinutes(),
    nsec = d.getSeconds();
  if (nmin <= 9) nmin = "0" + nmin;
  if (nsec <= 9) nsec = "0" + nsec;

  let clocktext =
    "" + tmonth[nmonth] + " " + ndate + ", " + nyear + " " + nhour + ":" + nmin;
  // +
  // ":";
  //  +
  // nsec +
  // "";
  document.getElementById("clockbox").innerHTML = clocktext;
}

GetClock();
setInterval(GetClock, 1000);
