function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}
function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function setBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400')
}

function removeBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400')
}

function getRandomAlphabet(){
    const alphabateString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabats = alphabateString.split('');
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabats[index];
    // console.log(index, alphabet)
    return alphabet
}

function setTextbyId(elementId, value){
    const changeInner = document.getElementById(elementId);
    changeInner.innerText = value
}

function changePointById(elementId){
    const element = document.getElementById(elementId);
    const elementInnetText = element.innerText;
    const point = parseInt(elementInnetText);
    return point;
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text

}