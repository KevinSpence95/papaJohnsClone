import './style.css'

// import Mountains from "./Mountains.jpg";

function changePapaJohnsMainContent() {
//clear mainContent section
document.querySelector(".mainContent").innerHTML = "";

//return appropriate
let content;

switch (mainContent) {
  case mainContent === "home":
    content = home();
    break;
  case mainContent === "menu":
    content = menu();
    break;
  case mainContent === "specials":
    content = specials();
    break;
  case mainContent === "papaRewards":
    content = papaRewards();
    break;
  default:
    content = home();
}
return content;
}

const main = document.querySelector('.mainContent')

main.appendChild(papaJohns());
