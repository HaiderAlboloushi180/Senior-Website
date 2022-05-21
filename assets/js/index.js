import { Home } from "./Home.js";

document.querySelector("#root").innerHTML = Home();

window.onhashchange = () => {
  if (window.location.hash === "#/") {
    document.querySelector("#root").innerHTML = Home();
  } else if (window.location.hash === "#/news") {
    document.querySelector("#root").innerHTML = "News";
  } else if (window.location.hash === "#/events") {
    document.querySelector("#root").innerHTML = "Events";
  } else if (window.location.hash === "#/tips") {
    document.querySelector("#root").innerHTML = "Tips";
  } else if (window.location.hash === "#/contact") {
    document.querySelector("#root").innerHTML = "Contact";
  } else {
    document.querySelector("#root").innerHTML =
      "Dude go back to the homepage...";
  }
};
