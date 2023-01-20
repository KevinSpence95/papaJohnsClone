import "./style.css";
import home from "./home/home";
import menu from "./menu/menu";
import specials from "./specials/specials";
import papaRewards from "./papaRewards/papaRewards";

// import Mountains from "./Mountains.jpg";

const main = document.body.querySelector(".mainContent");

function changeMain(page) {
  main.innerHTML = "";
  let contentElement;
  if (page == "home") {
    contentElement = home();
  } else if (page == "menu") {
    contentElement = menu();
    menuTarget.classList.add("active");
    specialsTarget.classList.remove("active");
    papaRewardsTarget.classList.remove("active");
  } else if (page == "specials") {
    contentElement = specials();
    specialsTarget.classList.add("active");
    menuTarget.classList.remove("active");
    papaRewardsTarget.classList.remove("active");
  } else if (page == "papa rewards") {
    contentElement = papaRewards();
    papaRewardsTarget.classList.add("active");
    specialsTarget.classList.remove("active");
    menuTarget.classList.remove("active");
  }
  main.appendChild(contentElement);
}

const logoTarget = document.querySelector(".logo img");
logoTarget.addEventListener("click", () => {
  changeMain("home");
});

const syoTarget = document.querySelector(".startYourOrder a");
syoTarget.addEventListener("click", () => {
  changeMain("specials");
});

const languageTarget = document.querySelector(".language a");
const languagePopup = document.querySelector(".language-popup");
languageTarget.addEventListener("click", () => {
  //if the login popup is still open, close the login popup and then open the language popup
  if (!loginPopup.classList.contains("hide-popup")) {
    loginPopup.classList.toggle("hide-popup");
    document.activeElement.blur();
  }
  languagePopup.classList.toggle("hide-popup");
  languageTarget.focus();
});

const loginTarget = document.querySelector(".login a");
const loginPopup = document.querySelector(".login-popup");
loginTarget.addEventListener("click", () => {
  //if the language popup is still open, close the language popup and then open the login popup
  if (!languagePopup.classList.contains("hide-popup")) {
    languagePopup.classList.toggle("hide-popup");
    document.activeElement.blur();
  }
  loginPopup.classList.toggle("hide-popup");
  loginTarget.focus();
});

//process closing the popups when the user clicks elsewhere besides the popups
document.addEventListener("click", (e) => {
  console.log(e.target.closest("a"));
  //if both popups are hidden
  if (
    languagePopup.classList.contains("hide-popup") &&
    loginPopup.classList.contains("hide-popup")
  ) {
    return; //do nothing
  } else {
    //if it's the language popup that open,
    if (loginPopup.classList.contains("hide-popup")) {
      //and the click isnt on the language popup, its children or its target
      if (
        e.target !== languagePopup &&
        e.target.closest(".language-popup") !== languagePopup &&
        e.target.closest("a") !== languageTarget
      ) {
        //close the language popup and unfocus the trigger
        languagePopup.classList.toggle("hide-popup");
        document.activeElement.blur();
      }
      //if it's the login popup that open,
    } else if (languagePopup.classList.contains("hide-popup")) {
      //and the click isnt on the login popup, its children or its target
      if (
        e.target !== loginPopup &&
        e.target.closest(".login-popup") !== loginPopup &&
        e.target.closest("a") !== loginTarget
      ) {
        //close the login popup and unfocus the trigger
        loginPopup.classList.toggle("hide-popup");
        document.activeElement.blur();
      }
    }
  }
});

const signUpTarget = document.querySelector(".signUp a");
signUpTarget.addEventListener("click", () => {
  changeMain("home");
});

const menuTarget = document.querySelector(".menu a");
menuTarget.addEventListener("click", () => {
  changeMain("menu");
  menuTarget.classList.toggle(".active");
});

const specialsTarget = document.querySelector(".specials a");
specialsTarget.addEventListener("click", () => {
  changeMain("specials");
});

const papaRewardsTarget = document.querySelector(".papaRewards a");
papaRewardsTarget.addEventListener("click", () => {
  changeMain("papa rewards");
});

const shoppingCartTarget = document.querySelector(".cart");
shoppingCartTarget.addEventListener("click", () => {
  changeMain("specials");
});

const footerLinks = document.querySelectorAll(".footerLinks > div");

// footerLinks.forEach((link) => {
//   let hiddenLinks = link.querySelector("ul");
//   link.querySelector("h4").addEventListener("click", () => {
//     hiddenLinks.classList.toggle("hiddenOnSmallScreens");
//   });
// });

let ourCompany = document.querySelector(".ourCompany");
ourCompany.querySelector("h4").addEventListener("click", () => {
  ourCompany.querySelector("ul").classList.toggle("hiddenOnSmallScreens");
  ourPizza.querySelector("ul").classList.add("hiddenOnSmallScreens");
  help.querySelector("ul").classList.add("hiddenOnSmallScreens");
});
let ourPizza = document.querySelector(".ourPizza");
ourPizza.querySelector("h4").addEventListener("click", () => {
  ourPizza.querySelector("ul").classList.toggle("hiddenOnSmallScreens");
  ourCompany.querySelector("ul").classList.add("hiddenOnSmallScreens");
  help.querySelector("ul").classList.add("hiddenOnSmallScreens");
});
let help = document.querySelector(".help");
help.querySelector("h4").addEventListener("click", () => {
  help.querySelector("ul").classList.toggle("hiddenOnSmallScreens");
  ourPizza.querySelector("ul").classList.add("hiddenOnSmallScreens");
  ourCompany.querySelector("ul").classList.add("hiddenOnSmallScreens");
});

//initial state
changeMain("home");
