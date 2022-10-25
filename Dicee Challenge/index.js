var resultado = document.querySelector("h1");

var number1 = Math.floor(Math.random() * 6) + 1;
var number2 = Math.floor(Math.random() * 6) + 1;

if (number1 > number2) {
    resultado.innerHTML = "<i>Player 1 Wins</i>";
} else if (number1 < number2) {
    resultado.innerHTML = "<i>Player 2 Wins</i>";
} else {
    resultado.innerHTML = "<i>Drawn!</i>"
}

switch (number1) {
    case 1: document.querySelector(".img1").setAttribute('src', './images/dice1.png');
        break;
    case 2: document.querySelector(".img1").setAttribute('src', './images/dice2.png');
        break;
    case 3: document.querySelector(".img1").setAttribute('src', './images/dice3.png');
        break;
    case 4: document.querySelector(".img1").setAttribute('src', './images/dice4.png');
        break;
    case 5: document.querySelector(".img1").setAttribute('src', './images/dice5.png');
        break;
    case 6: document.querySelector(".img1").setAttribute('src', './images/dice6.png');
        break;
}

switch (number2) {
    case 1: document.querySelector(".img2").setAttribute('src', './images/dice1.png');
        break;
    case 2: document.querySelector(".img2").setAttribute('src', './images/dice2.png');
        break;
    case 3: document.querySelector(".img2").setAttribute('src', './images/dice3.png');
        break;
    case 4: document.querySelector(".img2").setAttribute('src', './images/dice4.png');
        break;
    case 5: document.querySelector(".img2").setAttribute('src', './images/dice5.png');
        break;
    case 6: document.querySelector(".img2").setAttribute('src', './images/dice6.png');
        break
}
