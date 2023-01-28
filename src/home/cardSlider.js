import "./cardSlider.css";
// import card1 from './images/card1.webp'

export default function cardSlider() {
  let content = document.createElement("section");
  content.classList.add("sliderSection");
  content.innerHTML = `
        <button class='leftArrow'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
        <div class='trimWindow'></div>
        <div class='cardWindow'>
            <div class='cardSlider'>
                <div class='card'>
                    <div class='cardGradient'></div>
                    <div class='smallBanner'><h5>New</h5></div>
                    <div class='midBanner'><h3>Starting at $4.99</h3></div>
                    <h4>Papa Bites: Savory. Spicy. Sweet.</h4>
                    <button type='button'>Order Now</button>
                </div>
                <div class='card'>
                    <div class='cardGradient'></div>
                    <div class='smallBanner'><h5>Limited Time</h5></div>
                    <div class='midBanner'><h3>Starting at $6.99</h3></div>
                    <h4>Papa Pairings</h4>
                    <button type='button'>Order Now</button>
                </div>
                <div class='card'>
                    <div class='cardGradient'></div>
                    <h4>Explore Our Full Menu</h4>
                    <button type='button'>Order Now</button>
                </div>
                <div class='card'>
                    <div class='cardGradient'></div>
                    <h4>Now More Rewarding</h4>
                    <button type='button'>Order Now</button>
                </div>
                <div class='card'>
                    <div class='cardGradient'></div>
                    <h4>Create Your Own</h4>
                    <button type='button'>Order Now</button>
                </div>
                <div class='card'>
                    <div class='cardGradient'></div>
                    <h4>Invite us to your next party</h4>
                    <button type='button'>Order Now</button></div>
                </div>
            </div>
        </div>
        <div class='trimWindow'></div>
        <button class='rightArrow'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
  `;

  const leftArrow = content.querySelector(".leftArrow");
  leftArrow.addEventListener("click", () => {
    slideLeft();
  });

  const cardWindow = content.querySelector(".cardWindow");

  let rightArrow = content.querySelector(".rightArrow");
  rightArrow.addEventListener("click", () => {
    slideRight();
  });

  function slideLeft() {
    let { regionWidth, scrollPosition } = getSliderData();

    if (Math.floor(scrollPosition) % regionWidth !== 0) {
      cardWindow.scroll({
        left: Math.floor(scrollPosition / regionWidth) * regionWidth,
        behavior: "smooth",
      });
    } else {
      cardWindow.scroll({
        left: scrollPosition - regionWidth,
        behavior: "smooth",
      });
    }
  }

  function slideRight() {
    let { regionWidth, scrollPosition } = getSliderData();

    if (Math.floor(scrollPosition) % regionWidth !== 0) {
      cardWindow.scroll({
        left: (Math.floor(scrollPosition / regionWidth) + 1) * regionWidth,
        behavior: "smooth",
      });
    } else {
      cardWindow.scroll({
        left: scrollPosition + regionWidth,
        behavior: "smooth",
      });
    }
  }

  function getSliderData() {
    let cardWidth = getCardWidth();
    let scrollPosition = cardWindow.scrollLeft;
    let cardSliderWidth = getCardSliderWidth();
    let maxScrollLeft = getMaxScrollLeft();
    let leftToScroll = maxScrollLeft - scrollPosition;
    let numCards = getNumCards();
    let gapWidth = (cardSliderWidth - cardWidth * numCards) / (numCards + 1);
    let positionRanges = [];
    for (let i = 1; i <= numCards; i++) {
      let upperBound = i * cardWidth + i * gapWidth;
      positionRanges.push(upperBound);
    }
    let regionWidth = positionRanges[0];
    return {
      scrollPosition,
      leftToScroll,
      maxScrollLeft,
      positionRanges,
      regionWidth,
      numCards,
      cardWidth,
      gapWidth,
      cardSliderWidth,
    };
  }
  function getMaxScrollLeft() {
    return cardWindow.scrollWidth - cardWindow.clientWidth;
  }
  function getCardWidth() {
    let card = document.querySelector(".card");
    let width = card.offsetWidth;
    return width;
  }
  function getCardSliderWidth() {
    let cardSlider = document.querySelector(".cardSlider");
    let width = cardSlider.offsetWidth;
    return width;
  }
  function getNumCards() {
    let cards = document.querySelectorAll(".card");
    let numCards = [...cards].length;
    return numCards;
  }

  return content;
}
