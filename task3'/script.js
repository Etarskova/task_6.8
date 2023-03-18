const trLightGreen = document.querySelector('#trafficLightGreen');
const trLightYellow = document.querySelector('#trafficLightYellow');
const trLightRed = document.querySelector('#trafficLightRed');

trLightGreen.addEventListener('click', makeGreen);
trLightYellow.addEventListener('click', makeYellow);
trLightRed.addEventListener('click', makeRed);

function makeGreen() {
trLightGreen.style.background=('green');
trLightYellow.style.background=('black');
trLightRed.style.background=('black');
trLightGreen.addEventListener('click', makeYellow);
trLightYellow.addEventListener('click', makeYellow);
trLightRed.addEventListener('click', makeYellow);
trLightGreen.removeEventListener('click', makeGreen);
trLightYellow.removeEventListener('click', makeGreen);
trLightRed.removeEventListener('click', makeGreen);
};


function makeYellow() {
    trLightGreen.style.background=('black');
    trLightYellow.style.background=('yellow');
    trLightRed.style.background=('black');
    trLightGreen.addEventListener('click', makeRed);
    trLightYellow.addEventListener('click', makeRed);
    trLightRed.addEventListener('click', makeRed);
    trLightGreen.removeEventListener('click', makeYellow);
    trLightYellow.removeEventListener('click', makeYellow);
    trLightRed.removeEventListener('click', makeYellow);
};


function makeRed() {
    trLightGreen.style.background=('black');
    trLightYellow.style.background=('black');
    trLightRed.style.background=('red');
    trLightGreen.addEventListener('click', makeGreen);
    trLightYellow.addEventListener('click', makeGreen);
    trLightRed.addEventListener('click', makeGreen);
    trLightGreen.removeEventListener('click', makeRed);
    trLightYellow.removeEventListener('click', makeRed);
    trLightRed.removeEventListener('click', makeRed);
};