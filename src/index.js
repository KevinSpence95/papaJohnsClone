import './style.css'
import changeMain from './changeMain';

// import Mountains from "./Mountains.jpg";

function papaJohns() {

  return changeMain("home")

 
}

const main = document.querySelector('.mainContent')

main.appendChild(papaJohns());
