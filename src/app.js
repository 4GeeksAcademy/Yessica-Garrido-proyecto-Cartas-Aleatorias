import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const icon = ['♥', '♠', '♣', '♦'];
const valors = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];



function getRandomCard() {
  const randomIcon = icon[Math.floor(Math.random() * icon.length)];
  const randomValor = valors[Math.floor(Math.random() * valors.length)];
  return { icon: randomIcon, valor: randomValor };
}

function CambiarTarjeta() {
  const card = getRandomCard();
  const icontop = document.getElementById('icon-top');
  const valorText = document.getElementById('valor');
  const iconend = document.getElementById('icon-end');

  icontop.textContent = card.icon;
  valorText.textContent = card.valor;
  iconend.textContent = card.icon;

  if (card.icon === '♥' || card.icon === '♦') {
    icontop.style.color = 'red';
    iconend.style.color = 'red';
    valorText.style.color = 'red';
  } else {
    icontop.style.color = 'black';
    iconend.style.color = 'black';
    valorText.style.color = 'black';
  }
}
 

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  const timeDisplay = document.getElementById("time");


  button.addEventListener("click", CambiarTarjeta);


  CambiarTarjeta();
  
  let i = 10;

  setInterval(() => {
    i--;
    timeDisplay.innerHTML = `Next Card ${i}`
    if (i === 0) {
      CambiarTarjeta();
      i = 10;
    }
  }, 1000);
});

