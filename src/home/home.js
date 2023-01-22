import "./home.css";
export default function home() {
  let content = document.createElement("div");
  content.classList.add("main__home");
  content.textContent = "Home";
  return content;
}
