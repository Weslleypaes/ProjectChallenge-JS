var buttonColours = ['red', 'blue', 'green', 'yellow'];

var gamePattern = [];

var userClickedPattern = [];

var start = false;

var level = 0;

//Detecta qualquer tecla que é clicada
$(document).on('keydown', function (){
    if(!start){
        level = 0;
        $('#level-title').text('Level '+level)
        nextSequence()
        start = true;
    }
})

//Detecta qual botão foi clicado
$('.btn').click(function () {
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

    checkAnswer(userClickedPattern.length - 1);

    playSond(userChosenColour);
    animatePress($(this));
})

function checkAnswer(currentLevel){
    //checa o valor do array userClickedPattern/gamePattern, no índice currentLevel
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){

        //checa o tamanho do array userClickedPattern/gamePattern
        if(userClickedPattern.length === gamePattern.length){
            console.log('success')

            setTimeout(function(){
                nextSequence();
            }, 1000)

        }
    }else{
        console.log('wrong');

        var audioWrong = new Audio('./sounds/wrong.mp3');
        audioWrong.play();

        $('body').addClass('game-over');
        setTimeout(function(){
            $('body').removeClass('game-over')
        }, 200);

        $('h1').text('Game over, Press any Key to Restart');
        
        startOver();
    }
}
//Reset
function startOver(){
    level = 0;
    gamePattern = [];
    start = false;
}


function nextSequence() {
    //zerando o array de cores clicadas toda vez que nextSequence é chamado
    userClickedPattern = [];

     level++;

     $('#level-title').text('Level '+level)
    
    var randomNumber = Math.floor(Math.random() * 4)

    //Captura e armazena uma das cores que esta dentro do array buttonColours
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    //console.log(gamePattern);

    $('#' + randomChosenColour).fadeOut(100).fadeIn(100);

    playSond(randomChosenColour);
    animatePress(randomChosenColour);
}

function playSond(nameColour) {
    var audio = new Audio('./sounds/' + nameColour + '.mp3');
    audio.play();
}

function animatePress(currentColour) {
    $(currentColour).addClass('pressed');
    setTimeout(function () {
        $(currentColour).removeClass('pressed');
    }, 100);
}



