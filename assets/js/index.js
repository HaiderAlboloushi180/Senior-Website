import { Home } from "./Home.js";
import { Contact } from "./Contact.js";
import { News } from "./News.js";
import { Tips } from "./Tips.js";
import { Event } from "./Event.js";
import { MainEvent } from "./MainEvent.js";

document.querySelector("#root").innerHTML = Home();

window.onhashchange = () => {
  if (window.location.hash === "#/") {
    document.querySelector("#root").innerHTML = Home();
  } else if (window.location.hash === "#/news") {
    document.querySelector("#root").innerHTML = News();
  } else if (window.location.hash === "#/events") {
    document.querySelector("#root").innerHTML = Event();
  } else if (window.location.hash === "#/tips") {
    document.querySelector("#root").innerHTML = Tips();
    // } else if (window.location.hash === "#/contact") {
    //   document.querySelector("#root").innerHTML = Contact();
  } else if (window.location.hash === "#/main-event") {
    document.querySelector("#root").innerHTML = MainEvent();
  } else if (window.location.hash === "#/sex") {
    document.querySelector("#root").innerHTML = "🤨🤨🤨";
  } else {
    document.querySelector("#root").innerHTML =
      "Dude go back to the homepage...";
  }
};

const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelector(".error");

function validateForm() {
  clearMessages();

  if (nameInput.value.length < 1) {
    errorNodes[0].innerText = "Name cannot be blank";
  }

  if (!emailIsValid(email.value)) {
    errorNodes[1].innerText = "Invalid email address";
  }

  if (message.value.length < 1) {
    errorNodes[2].innerText = "Message cannot be blank";
  }
}

function clearMessages() {
  for (let i = 0; i < errorNodes.length; i++) {
    errorNodes[i].innerText = "";
  }
}

function emailIsValid(email) {
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}
