import "./cardSlider.css";

export default function cardSlider() {
  let content = document.createElement("section");
  content.classList.add("sliderSection");
  content.innerHTML = `
        <button class='leftArrow'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
        </button>
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
        <button class='rightArrow'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </button>
  `;
  let leftArrow = content.querySelector('.leftArrow');
  leftArrow.addEventListener('click',() => {slideLeft()})
  function slideLeft() {
      alert('left')
  }
  let rightArrow = content.querySelector('.rightArrow');
  rightArrow.addEventListener('click',() => {slideLeft()})
  function slideLeft() {
      alert('right')
  }




  return content;
}

