import "./menu.css";

export default function menu() {
  let content = document.createElement("div");
  content.classList.add("main__menu");
  content.textContent = "MENU";
  return content;
}
