import "./exploreOurMenu.css";

export default function exploreOurMenu() {
  let content = document.createElement("div");
  content.classList.add("exploreOurMenu");
  content.innerHTML = `
    <h3>Explore Our Menu</h3>
    <div class='container'>
        <a href="#">
            <div>
                <div class='thumb1'></div>
            </div>
            <p>Specials<span></span></p>
        </a>
        <a href="#">
            <div>
                <div class='thumb2'></div>
            </div>
            <p>Pizza</p>
        </a>
        <a href="#">
            <div>
                <div class='thumb3'></div>
            </div>
            <p>Papa Bowls</p>
        </a>
        <a href="#">
            <div>
                <div class='thumb4'></div>
            </div>
            <p>Papa Bites</p>
        </a>
        <a href="#">
            <div>
                <div class='thumb5'></div>
            </div>
            <p>Papadias</p>
        </a>
        <a href="#">
            <div>
                <div class='thumb6'></div>
            </div>
            <p>Wings</p>
        </a>
        <a href="#">
            <div>
                <div class='thumb7'></div>
            </div>
            <p>Sides</p>
        </a>
        <a href="#">
            <div>
                <div class='thumb8'></div>
            </div>
            <p>Desserts</p>
        </a>
        <a href="#">
            <div> 
                <div class='thumb9'></div>
            </div>
            <p>Drinks</p>
        </a>
        <a href="#">
            <div>
                <div class='thumb10'></div>
            </div>
            <p>Extras</p>
        </a>
    </div>
  `;
  return content;
}