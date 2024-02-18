// function paly(){
//     // hide the home screen
//     const homeScreen = document.getElementById('home');
//     homeScreen.classList.add('hidden');
//     // show the play ground 
//     const playGroundScreen = document.getElementById('play-ground');
//     playGroundScreen.classList.remove('hidden')
// }


function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    const haveToPressed = document.getElementById('random-letter').innerText.toLocaleLowerCase();
    if(playerPressed === 'Escape'){
        gameOver()
    }
    if(playerPressed === haveToPressed){
        const score = changePointById('score');
        const newScore = score + 1;
        setTextbyId('score', newScore)
        removeBgColorById(playerPressed)
        countinueGame()
    }
    else{
        const life = changePointById('life');
        const newLife = life - 1;
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
    hideElementById('home');
    hideElementById('final-score');
    showElementById('play-ground');
    setTextbyId('life', 5)
    setTextbyId('score', 0)
    countinueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    const lastScore = changePointById('score')
    setTextbyId('showing-final-score', lastScore);
    const alphabet = getElementTextById('random-letter');
    removeBgColorById(alphabet)
}
