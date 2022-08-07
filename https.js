const toggleButton = document.querySelector('#dark');
const pageBackGround = document.querySelector('body');
const pageHeader = document.querySelector('h1');
const cardText = document.querySelector('.card');
const foot = document.querySelector('.foot');

toggleButton.addEventListener('click', async () => {
    if(toggleButton.style.color === 'white') {
        toggleButton.style.color = 'black';
        toggleButton.style.borderColor = 'black';
        pageBackGround.style.backgroundColor = 'white';
        pageHeader.style.color = 'black';
        cardText.style.color = 'black';
        foot.style.color = 'black';


    } else {
        toggleButton.style.color = 'white';
        toggleButton.style.borderColor = 'white';
        pageBackGround.style.backgroundColor = 'black';
        pageHeader.style.color = 'white';
        cardText.style.color = 'white';
        foot.style.color = 'white';
    }
})

