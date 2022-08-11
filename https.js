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
let speed = 6.0;
let maxSpeed = 0.3;
let minSpeed = 8.0;

function generateHexColor () {
    primaryHex = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

toggleButton.addEventListener('click', async () => {
    if(pageHeader.style.color === 'white') {
        pageBackGround.style.backgroundColor = 'white';
        pageHeader.style.color = 'black';
        cardText.style.color = 'black';
        speedUp.style.color = 'black'
        speedUp.style.borderColor = 'black'
        speedDown.style.color = 'black'
        speedDown.style.borderColor = 'black'
    } else {
        pageBackGround.style.backgroundColor = 'black';
        pageHeader.style.color = 'white';
        cardText.style.color = 'white';;
        speedUp.style.color = 'white'
        speedUp.style.borderColor = 'white'
        speedDown.style.color = 'white'
        speedDown.style.borderColor = 'white'
    }
});

toggleTextColor.addEventListener('click', async () => {
    if(cardText.style.color === 'white') {
        pageHeader.style.color = 'black';
        cardText.style.color = 'black';
        speedUp.style.color = 'black'
        speedUp.style.borderColor = 'black'
        speedDown.style.color = 'black'
        speedDown.style.borderColor = 'black'
    } else {
        pageHeader.style.color = 'white';
        cardText.style.color = 'white';
        speedUp.style.color = 'white'
        speedUp.style.borderColor = 'white'
        speedDown.style.color = 'white'
        speedDown.style.borderColor = 'white'
    }    
});

speedUp.addEventListener('click', async () => {
    if(speed > maxSpeed) {
        speed = maxSpeed;
        pfp.style.animation = `rotation ${speed}s infinite linear`
    }
});

speedDown.addEventListener('click', async () => {
    if(speed < minSpeed) {
        speed = minSpeed;
        pfp.style.animation = `rotation ${speed}s infinite linear`
    }    
});

toggleColor.addEventListener('click', async () => {
    generateHexColor();
    pageBackGround.style.backgroundColor = primaryHex;
});

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        generateHexColor();
        pageBackGround.style.backgroundColor = primaryHex;
    }
});

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}