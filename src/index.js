import "./style.css";
import home from "./home";
import menu from "./menu";
import specials from "./specials";
import papaRewards from "./papaRewards";

// import Mountains from "./Mountains.jpg";

let main = document.body.querySelector(".mainContent");

function changeMain(page) {
  main.removeChild(main.firstChild);
  let contentElement;
  if (page == "home") {
    contentElement = home();
  } else if (page == "menu") {
    contentElement = menu();
  } else if (page == "specials") {
    contentElement = specials();
  } else if (page == "papa rewards") {
    contentElement = papaRewards();
  }
  main.appendChild(contentElement);
}

changeMain("home");

let logoTarget = document.querySelector(".logo img");
logoTarget.addEventListener("click", () => {
  changeMain("home");
});

let syoTarget = document.querySelector(".startYourOrder a");
syoTarget.addEventListener("click", () => {
  changeMain("specials");
});

let signUpTarget = document.querySelector(".signUp a");
signUpTarget.addEventListener("click", () => {
  changeMain("home");
});

let menuTarget = document.querySelector(".menu a");
menuTarget.addEventListener("click", () => {
  changeMain("menu");
});

let specialsTarget = document.querySelector(".specials a");
specialsTarget.addEventListener("click", () => {
  changeMain("specials");
});

let papaRewardsTarget = document.querySelector(".papaRewards a");
papaRewardsTarget.addEventListener("click", () => {
  changeMain("papa rewards");
});

let shoppingCartTarget = document.querySelector(".cart");
shoppingCartTarget.addEventListener("click", () => {
  changeMain("specials");
});



// const logoTarget = document.querySelector(".logo img");
// logoTarget.onClick = () => {changeMain('specials')}
// logoTarget.addEventListener("click", changeMain("specials"));
