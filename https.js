const toggleButton = document.querySelector('#dark');
const toggleColor = document.querySelector('#color-button')
const toggleTextColor = document.querySelector('#text-color-button');
const pageBackGround = document.querySelector('body');
const pageHeader = document.querySelector('h1');
const cardText = document.querySelector('.card');
const pfp = document.querySelector('.pfp');
const speedUp = document.querySelector('#speed-up');
const speedDown = document.querySelector('#speed-down');

let primaryHex;
let secondaryHex;
let speed = 7;
const maxSpeed = .1;
const minSpeed = 10;

function generateHexColor () {
    primaryHex = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

toggleButton.addEventListener('click', async () => {
    if(toggleButton.style.color === 'white') {
        toggleButton.style.color = 'black';
        toggleButton.style.borderColor = 'black';
        pageBackGround.style.backgroundColor = 'white';
        pageHeader.style.color = 'black';
        cardText.style.color = 'black';
        toggleColor.style.color ='black';
        toggleColor.style.borderColor = 'black';
        toggleTextColor.style.color = 'black';
        toggleTextColor.style.borderColor = 'black';
        speedUp.style.color = 'black'
        speedUp.style.borderColor = 'black'
        speedDown.style.color = 'black'
        speedDown.style.borderColor = 'black'

    } else {
        toggleButton.style.color = 'white';
        toggleButton.style.borderColor = 'white';
        pageBackGround.style.backgroundColor = 'black';
        pageHeader.style.color = 'white';
        cardText.style.color = 'white';
        toggleColor.style.color ='white';
        toggleColor.style.borderColor = 'white';
        toggleTextColor.style.color = 'white';
        toggleTextColor.style.borderColor ='white';
        speedUp.style.color = 'white'
        speedUp.style.borderColor = 'white'
        speedDown.style.color = 'white'
        speedDown.style.borderColor = 'white'
    }
});

toggleTextColor.addEventListener('click', async () => {
    if(cardText.style.color === 'white') {
        toggleButton.style.color = 'black';
        toggleButton.style.borderColor = 'black';
        pageHeader.style.color = 'black';
        cardText.style.color = 'black';
        toggleColor.style.color ='black';
        toggleColor.style.borderColor = 'black';
        toggleTextColor.style.color = 'black';
        toggleTextColor.style.borderColor ='black';
        speedUp.style.color = 'black'
        speedUp.style.borderColor = 'black'
        speedDown.style.color = 'black'
        speedDown.style.borderColor = 'black'
    } else {
        toggleButton.style.color = 'white';
        toggleButton.style.borderColor = 'white';
        pageHeader.style.color = 'white';
        cardText.style.color = 'white';
        toggleColor.style.color ='white';
        toggleColor.style.borderColor = 'white';
        toggleTextColor.style.color = 'white';
        toggleTextColor.style.borderColor ='white';
        speedUp.style.color = 'white'
        speedUp.style.borderColor = 'white'
        speedDown.style.color = 'white'
        speedDown.style.borderColor = 'white'
    }    
});

speedUp.addEventListener('click', async () => {
    if(!speed <= maxSpeed) {
        pfp.style.animation = `rotation ${speed}s infinite linear`
        speed -= .5;
    }
})

speedDown.addEventListener('click', async () => {
    if(speed < minSpeed) {
        pfp.style.animation = `rotation ${speed}s infinite linear`
        speed += .5;
    }
        
})

toggleColor.addEventListener('click', async () => {
    generateHexColor();
    pageBackGround.style.backgroundColor = primaryHex;
});

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        generateHexColor();
        pageBackGround.style.backgroundColor = primaryHex;
    }
})