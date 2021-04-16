'use strict';

const dino   = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');

const jump = () => {
    if (dino.classList != 'jump') {

        dino.classList.add('jump');

        setTimeout(function() {
            dino.classList.remove('jump');
        }, 300);
    };
};

let isAlive = setInterval(function() {

    let dinoTopPosition = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));

    let cactusLeftPosition = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    
    if (cactusLeftPosition < 50 && cactusLeftPosition > 0 && dinoTopPosition >= 140 ) {
        alert('MAÑANA SEGUIMOS!')
    }
   
}, 10);

document.addEventListener('keydown', e => {
    jump();
});