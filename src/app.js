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
  const iconTop = document.getElementById('icon-top');
  const valorText = document.getElementById('valors');
  const iconEnd = document.getElementById('icon-end');

  iconTop.textContent = card.icon;
  valorText.textContent = card.valor;
  iconEnd.textContent = card.icon;
}
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button");
  button.addEventListener("click", CambiarTarjeta);
  CambiarTarjeta();

});


window.onload = () => {
  CambiarTarjeta();
  setInterval(CambiarTarjeta, 10000)
  
};