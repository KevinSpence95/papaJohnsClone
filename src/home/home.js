import "./home.css";
import hero from "./hero";
import cardSlider from "./cardSlider";
import exploreOurMenu from "./exploreOurMenu";

export default function home() {
  let content = document.createElement("div");
  content.classList.add("main__home");
  // let line1 = document.createElement('h2')
  // line1.textContent = 'Starting at $13'
  // content.appendChild(line1)
  content.appendChild(hero())
  content.appendChild(cardSlider())
  content.appendChild(exploreOurMenu())
  // content.textContent = "Home";

  return content;
}
