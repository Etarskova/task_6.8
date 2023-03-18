const trLight = document.querySelector('#trafficLight');

function makeGreen() {
    trLight.style.background = ('green');
    trLight.removeEventListener('click', makeGreen);
    trLight.addEventListener('click', makeYellow);
}

function makeYellow() {
    trLight.style.background = ('yellow');
    trLight.removeEventListener('click', makeYellow)
    trLight.addEventListener('click', makeRed);
}

function makeRed() {
    trLight.style.background = ('red');
    trLight.removeEventListener('click', makeRed);
    trLight.addEventListener('click', makeGreen);
}

trLight.addEventListener('click', makeGreen);