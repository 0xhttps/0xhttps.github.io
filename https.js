const toggleButton = document.querySelector('#dark');
const toggleColor = document.querySelector('#color-button')
const toggleTextColor = document.querySelector('#text-color-button');
const pageBackGround = document.querySelector('body');
const pageHeader = document.querySelector('h1');
const cardText = document.querySelector('.card');
const pfp = document.querySelector('.pfp');

let primaryHex;
let secondaryHex;

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
    } else {
        toggleButton.style.color = 'white';
        toggleButton.style.borderColor = 'white';
        pageHeader.style.color = 'white';
        cardText.style.color = 'white';
        toggleColor.style.color ='white';
        toggleColor.style.borderColor = 'white';
        toggleTextColor.style.color = 'white';
        toggleTextColor.style.borderColor ='white';
    }    
});

pfp.addEventListener('click', async () => {
    if(pfp.style.content === url("chainRunner.png")) {
        pfp.style.content = url("httpsPixel.png");
    } else {
        pfp.style.content = url("chainRunner.png");
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






