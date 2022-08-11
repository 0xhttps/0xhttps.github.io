const toggleButton = document.querySelector('#dark');
const toggleColor = document.querySelector('#color-button')
const toggleTextColor = document.querySelector('#text-color-button');
const pageBackGround = document.querySelector('body');
const pageHeader = document.querySelector('h1');
const cardText = document.querySelector('.card');
const pfp = document.querySelector('.pfp');

let primaryHex;
let secondaryHex;
let speed = 8.0;
let maxSpeed = 0.3;
let minSpeed = 8.0;
let r,g,b;

function generateHexColor () {
    primaryHex = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

function hexToRgb() {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(primaryHex);
    r = parseInt(result[1], 16);
    g = parseInt(result[2], 16);
    b = parseInt(result[3], 16);

    if((r * 0.299 + g * 0.587 + b * 0.114) > 150 || (r + g + b) > 450) {
        secondaryHex = 'black';
    } else {
        secondaryHex = 'white';
    }
}

toggleButton.addEventListener('click', async () => {
    if(pageHeader.style.color === 'white') {
        pageBackGround.style.backgroundColor = 'white';
        pageHeader.style.color = 'black';
        cardText.style.color = 'black';
    } else {
        pageBackGround.style.backgroundColor = 'black';
        pageHeader.style.color = 'white';
        cardText.style.color = 'white';;
    }
});

function toggleSpinSpeed() {
    if(speed === maxSpeed) {
        speed = minSpeed;
        pfp.style.animation = `rotation ${speed}s infinite linear`
    } else {
        speed = maxSpeed;
        pfp.style.animation = `rotation ${speed}s infinite linear`
    }
}


function togglePageColor() {
    generateHexColor();
    hexToRgb();
    pageBackGround.style.backgroundColor = primaryHex;
    pageHeader.style.color = secondaryHex;
    cardText.style.color = secondaryHex;
} 

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}