const toggleButton = document.querySelector('#dark');
const toggleColor = document.querySelector('#color-button')
const pageBackGround = document.querySelector('body');
const pageHeader = document.querySelector('h1');
const cardText = document.querySelector('.card');

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
        toggleColor.style.borderColor = 'black'
    } else {
        toggleButton.style.color = 'white';
        toggleButton.style.borderColor = 'white';
        pageBackGround.style.backgroundColor = 'black';
        pageHeader.style.color = 'white';
        cardText.style.color = 'white';
        toggleColor.style.color ='white';
        toggleColor.style.borderColor = 'white'
    }
})

toggleColor.addEventListener('click', async () => {
    generateHexColor();
    toggleButton.style.color = secondaryHex;
    toggleButton.style.borderColor = secondaryHex;
    pageBackGround.style.backgroundColor = primaryHex;
    pageHeader.style.color = secondaryHex;
    cardText.style.color = secondaryHex;
    toggleColor.style.color =secondaryHex;
    toggleColor.style.borderColor = secondaryHex;
})

