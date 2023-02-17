import "./hero.css";

export default function hero() {
  let content = document.createElement("div");
  content.classList.add("hero");
  content.innerHTML = `
            <div>
                <h1 class='titleText'>Starting at $13</h1>
            </div>
            <div>
                <h3>Limited time offer</h3>
            </div>
            <div>
                <h1>Epic stuffed crust pizza</h1>
                <h3>1-topping special</h3>
                <h4>Choose your topping. Cheese your crust.</h4>
            </div>
            <div>
                <a href="#" class='blackBtn'>Order Delivery</a>
                <a href="#" class='whiteBtn'>Order Carryout</a>
            </div>
            <div class = 'heroGradient'></div>
  `;
  return content;
}
