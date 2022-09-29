/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const palo = ["♦", "♥", "♠", "♣"];
  const number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let randomPalo = Math.floor(Math.random() * palo.length);
  console.log(randomPalo);
  let randomNumero = Math.floor(Math.random() * number.length);
  console.log(randomNumero);

  let returnPaloTop = (document.getElementById("paloTop").innerHTML =
    palo[randomPalo]);
  let returnNumber = (document.getElementById("number").innerHTML =
    number[randomNumero]);
  let returnPaloBot = (document.getElementById("paloBot").innerHTML =
    palo[randomPalo]);

  return {
    returnPaloTop,
    returnNumber,
    returnPaloBot
  };
};
