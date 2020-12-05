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

// Mobile Menu
const menuButton = document.getElementById("mobile-menu");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", function () {
  if (nav.style.display === "none" || nav.style.display === "") {
    nav.style.display = "initial";
    menuButton.innerHTML = "▲";
    nav.style.transitionDuration = "0.5s";
  } else {
    nav.style.display = "none";
    menuButton.innerHTML = "▼";
    nav.style.transitionDuration = "0.5s";
  }
});

// Degree Advice Alert
function degAdvAlert() {
  alert("Student Login Required.");
}

// Index Directory Revealer
const divAC = document.getElementById("divAC");
const divDG = document.getElementById("divDG");
const divHQ = document.getElementById("divHQ");
const divRS = document.getElementById("divRS");
const divTZ = document.getElementById("divTZ");
const listAC = document.getElementById("AC");
const listDG = document.getElementById("DG");
const listHQ = document.getElementById("HQ");
const listRS = document.getElementById("RS");
const listTZ = document.getElementById("TZ");

const revealIndex = function (option) {
  switch (option) {
    case "AC":
      if (listAC.style.display === "none" || listAC.style.display === "") {
        listAC.style.display = "initial";
        listAC.style.transitionDuration = "2s";
        divAC.style.backgroundColor = "rgb(60, 62, 66)";
        divAC.style.color = "rgb(252, 215, 66)";
        divAC.style.boxShadow = "1px 1px 15px rgb(0, 0, 0);";
      } else {
        listAC.style.display = "none";
        divAC.style.backgroundColor = "rgb(209, 32, 62)";
        divAC.style.color = "rgb(255, 255, 255)";
        divAC.style.boxShadow = "0px 0px 8px rgb(209, 32, 62)";
      }
      break;
    case "DG":
      if (listDG.style.display === "none" || listDG.style.display === "") {
        listDG.style.display = "initial";
        divDG.style.backgroundColor = "rgb(60, 62, 66)";
        divDG.style.color = "rgb(252, 215, 66)";
        divDG.style.boxShadow = "1px 1px 15px rgb(0, 0, 0);";
      } else {
        listDG.style.display = "none";
        divDG.style.backgroundColor = "rgb(209, 32, 62)";
        divDG.style.color = "rgb(255, 255, 255)";
        divDG.style.boxShadow = "0px 0px 8px rgb(209, 32, 62)";
      }
      break;
    case "HQ":
      if (listHQ.style.display === "none" || listHQ.style.display === "") {
        listHQ.style.display = "initial";
        divHQ.style.backgroundColor = "rgb(60, 62, 66)";
        divHQ.style.color = "rgb(252, 215, 66)";
        divHQ.style.boxShadow = "1px 1px 15px rgb(0, 0, 0);";
      } else {
        listHQ.style.display = "none";
        divHQ.style.backgroundColor = "rgb(209, 32, 62)";
        divHQ.style.color = "rgb(255, 255, 255)";
        divHQ.style.boxShadow = "0px 0px 8px rgb(209, 32, 62)";
      }
      break;
    case "RS":
      if (listRS.style.display === "none" || listRS.style.display === "") {
        listRS.style.display = "initial";
        divRS.style.backgroundColor = "rgb(60, 62, 66)";
        divRS.style.color = "rgb(252, 215, 66)";
        divRS.style.boxShadow = "1px 1px 15px rgb(0, 0, 0);";
      } else {
        listRS.style.display = "none";
        divRS.style.backgroundColor = "rgb(209, 32, 62)";
        divRS.style.color = "rgb(255, 255, 255)";
        divRS.style.boxShadow = "0px 0px 8px rgb(209, 32, 62)";
      }
      break;
    case "TZ":
      if (listTZ.style.display === "none" || listTZ.style.display === "") {
        listTZ.style.display = "initial";
        divTZ.style.backgroundColor = "rgb(60, 62, 66)";
        divTZ.style.color = "rgb(252, 215, 66)";
        divTZ.style.boxShadow = "1px 1px 15px rgb(0, 0, 0);";
      } else {
        listTZ.style.display = "none";
        divTZ.style.backgroundColor = "rgb(209, 32, 62)";
        divTZ.style.color = "rgb(255, 255, 255)";
        divTZ.style.boxShadow = "0px 0px 8px rgb(209, 32, 62)";
      }
      break;
  }
};

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
