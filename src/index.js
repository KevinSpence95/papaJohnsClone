import "./sassyStyle.scss";
// import './style.css'
import Mountains from "./Mountains.jpg";

import _ from "lodash";
import myName from "./myname";
import printMe from "./print";

function nonReactComponent() {
  const element = document.createElement("div");

  element.innerHTML = _.join([`${myName("Kevinnn")}`, "this is webpack!"], " ");

  element.classList.add("hello");

  const childPic = new Image();
  childPic.src = Mountains;
  element.appendChild(childPic);

  const childH1 = document.createElement("h1");
  childH1.textContent = "Where is the font?";
  element.appendChild(childH1);

  printMe();

  return element;
}

document.body.appendChild(nonReactComponent());
