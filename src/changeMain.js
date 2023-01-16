import home from "./home";
import menu from "./menu";
import specials from "./specials";
import papaRewards from "./papaRewards";


export default function changeMain(mainContent) {
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
  }
  return content;
}
