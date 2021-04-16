'use strict';

const dino = document.querySelector('#dino');

const jump = () => {
    if (dino.classList != 'jump') {
        
        dino.classList.add('jump');

        setTimeout(function () {
            dino.classList.remove('jump');
        }, 300);
    };
};

document.addEventListener('keydown', e => {
    jump();
});