const toggleButton = document.querySelector('#dark');
const toggleColor = document.querySelector('#color-button')
const toggleTextColor = document.querySelector('#text-color-button');
const pageBackGround = document.querySelector('body');
const pageHeader = document.querySelector('h1');
const cardText = document.querySelector('.card');
const pfp = document.querySelector('.pfp');
const pfp2 = document.querySelector('.pfp2'); //might use later
const pfpFooter = document.querySelector('.pfp-footer');    
const emailForm = document.querySelector('.form-container');
const button = document.querySelector('.btn');

let primaryHex;
let secondaryHex;
let speed = 8.0;
let maxSpeed = 0.5;
let minSpeed = 8.0;
let r,g,b;

function getWallet() {
    const accounts = window.ethereum.request({ method: "eth_requestAccounts" });
    const currentAccount = accounts[0];
    console.log("Connected to account: " + currentAccount);
    return currentAccount;
}

//generates random hex for background
function generateHexColor () {
    primaryHex = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
}

//gets black or white depending on hex generated.
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

//toggle dark / light mode
toggleButton.addEventListener('click', async () => {
    if(pageHeader.style.color === 'white') {
        pageBackGround.style.backgroundColor = 'white';
        pageHeader.style.color = 'black';
        cardText.style.color = 'black';
        button.style.color = 'black';
        button.style.borderColor = 'black';
    } else {
        pageBackGround.style.backgroundColor = 'black';
        pageHeader.style.color = 'white';
        cardText.style.color = 'white';
        button.style.color = 'white';
        button.style.borderColor = 'white';
    }
});

//toggle pfp spin speed
function toggleSpinSpeed() {
    if(speed === maxSpeed) {
        speed = minSpeed;
        pfp.style.animation = `rotation ${speed}s infinite linear`
        pfpFooter.style.animation = `rotation ${speed}s infinite linear`

    } else {
        speed = maxSpeed;
        pfp.style.animation = `rotation ${speed}s infinite linear`
        pfpFooter.style.animation = `rotation ${speed}s infinite linear`
    }
}

//add later. need to make give other img its own class and idek lol
function changeHeaderImg() {

}

//generate random hex and set new background. calls generateHexColor() and then hexToRgb()
function togglePageColor() {
    generateHexColor();
    hexToRgb();
    pageBackGround.style.backgroundColor = primaryHex;
    pageHeader.style.color = secondaryHex;
    cardText.style.color = secondaryHex;
    button.style.color = secondaryHex;
    button.style.borderColor = secondaryHex;
} 

function copyColor() {
    var colorToCopy = primaryHex;

}

//opens email form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

//closes email form
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}