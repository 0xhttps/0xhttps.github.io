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

function invertHex (hex, bw) { 
    if (hex.indexOf('#') === 0) {
        hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }
    var r = parseInt(hex.slice(0, 2), 16),
        g = parseInt(hex.slice(2, 4), 16),
        b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
        // https://stackoverflow.com/a/3943023/112731
        return (r * 0.299 + g * 0.587 + b * 0.114) > 186
            ? '#000000'
            : '#FFFFFF';
    }
    // invert color components
    r = (255 - r).toString(16);
    g = (255 - g).toString(16);
    b = (255 - b).toString(16);
    // pad each with zeros and return
    secondaryHex = "#" + padZero(r) + padZero(g) + padZero(b);
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

