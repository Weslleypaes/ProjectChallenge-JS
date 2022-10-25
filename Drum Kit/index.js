var i = 0;
var drumClass = document.querySelectorAll('.drum');

while (i < drumClass.length) {
    drumClass[i].addEventListener('click', function () {
        var buttonClicked = this.innerHTML;
        makeSound(buttonClicked);
        buttonAnimate(buttonClicked);
    })
    i = i + 1;
}

//Detectando teclas

document.addEventListener('keydown', function (event){
    console.log(event.key)
    var keyPress = event.key;
    makeSound(keyPress);
    buttonAnimate(keyPress);
})

function makeSound (key){
    switch (key) {
        case 'w': var soundW = new Audio('./sounds/tom-1.mp3')
            soundW.play();
            break;

        case 'a': var soundA = new Audio('./sounds/tom-2.mp3')
            soundA.play();
            break;

        case 's': var soundS = new Audio('./sounds/tom-3.mp3');
            soundS.play();
            break;

        case 'd': var soundD = new Audio('./sounds/tom-4.mp3');
            soundD.play();
            break;

        case 'j': var soundJ = new Audio('./sounds/snare.mp3');
            soundJ.play();
            break;

        case 'k': var soundK = new Audio('./sounds/kick-bass.mp3');
            soundK.play();
            break;

        case 'l': var soundL = new Audio('./sounds/crash.mp3');
            soundL.play();
            break;

        default: console.log('tecla inválida ---', key)
        break;
    }
}

function buttonAnimate(currentKey){
  var activeButton =  document.querySelector("."+currentKey);
  activeButton.classList.add('pressed');
  setTimeout(function () { activeButton.classList.remove('pressed'); }, 100);
}
