// function paly(){
//     // hide the home screen
//     const homeScreen = document.getElementById('home');
//     homeScreen.classList.add('hidden');
//     // show the play ground 
//     const playGroundScreen = document.getElementById('play-ground');
//     playGroundScreen.classList.remove('hidden')
// }

const audio = new Audio()
let isGamePlayOn = false
const artBoard = document.getElementById('art-board')

function handleKeyboardKeyUpEvent(event){
    if(isGamePlayOn == false) return;
    const playerPressed = event.key;
    const haveToPressed = document.getElementById('random-letter').innerText.toLocaleLowerCase();
    if(playerPressed === 'Escape'){
        gameOver()
    }
    // chackig if the player pressed wright or wrong
    if(playerPressed === haveToPressed){
        audio.src = "../Audio/success.mp3";
        audio.play();

        const score = changePointById('score');
        const newScore = score + 1;
        setTextbyId('score', newScore)
        removeBgColorById(playerPressed)
        countinueGame()
    }
    else{
        audio.src = "../Audio/wrong.mp3";
        audio.play();
        const life = changePointById('life');
        const newLife = life - 1;
        const newLifePercentage = (newLife / 5) * 100;
        artBoard.style.background = `linear-gradient(#ffffffb3 ${newLifePercentage}% , red)`
        setTextbyId('life', newLife)
        if(newLife === 0){
            gameOver()
        }
    }
    
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function countinueGame(){
    const alphabate = getRandomAlphabet()
    const change = document.getElementById('random-letter');
    change.innerText = alphabate;
    setBgColorById(alphabate)
} 

function play(){
    isGamePlayOn = true
    hideElementById('home');
    hideElementById('final-score');
    showElementById('play-ground');
    setTextbyId('life', 5)
    setTextbyId('score', 0)
    countinueGame();
}

function gameOver(){
    isGamePlayOn = false
    hideElementById('play-ground');
    showElementById('final-score');
    const lastScore = changePointById('score')
    setTextbyId('showing-final-score', lastScore);
    const alphabet = getElementTextById('random-letter');
    removeBgColorById(alphabet)
    artBoard.style.background = `linear-gradient(#ffffffb3 100% , red)`
}
