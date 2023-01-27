import "./cardSlider.css";

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
                <div class='card'></div>
                <div class='card'></div>
                <div class='card'></div>
                <div class='card'></div>
                <div class='card'></div>
                <div class='card'></div>
            </div>
        </div>
        <div class='trimWindow'></div>
        <button class='rightArrow'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
  `;
  let leftArrow = content.querySelector(".leftArrow");
  leftArrow.addEventListener("click", () => {
    slideLeft();
  });
  function slideLeft() {
    let { positionRanges, scrollPosition } = getSliderData();
    if (scrollPosition % positionRanges[0] === 0) {
      let left =
        (Math.floor(scrollPosition / positionRanges[0]) - 1) *
        positionRanges[0];
      cardWindow.scroll({
        left: left,
        behavior: "smooth",
      });
    } else {
      cardWindow.scroll({
        left:
          (Math.floor(scrollPosition / positionRanges[0]) * positionRanges[0])-1,
        behavior: "smooth",
      });
    }
  }

  function getSliderData() {
    let cardWidth = getCardWidth();
    let scrollPosition = cardWindow.scrollLeft;
    let cardSliderWidth = getCardSliderWidth();
    let numCards = getNumCards();
    let gapWidth = (cardSliderWidth - cardWidth * numCards) / (numCards + 1);
    let positionRanges = [];
    for (let i = 1; i <= numCards; i++) {
      let upperBound = i * cardWidth + i * gapWidth;
      positionRanges.push(upperBound);
    }
    return {
      positionRanges,
      scrollPosition,
    };
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

  let rightArrow = content.querySelector(".rightArrow");
  rightArrow.addEventListener("click", () => {
    slideRight();
  });

  function slideRight() {
    let { positionRanges, scrollPosition } = getSliderData();
    cardWindow.scroll({
      left:
        (Math.floor(scrollPosition / positionRanges[0]) + 1) *
        positionRanges[0],
      behavior: "smooth",
    });
  }

  let cardWindow = content.querySelector(".cardWindow");
  return content;
}
