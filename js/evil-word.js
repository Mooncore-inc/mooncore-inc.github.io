const words = ['evil', 'inc'];
let currentIndex = 0;
const wordElement = document.querySelector('.changing-word');

function changeWord() {
    wordElement.classList.add('fade-out');

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        wordElement.textContent = words[currentIndex];
        wordElement.classList.remove('fade-out');
        wordElement.classList.add('fade-in');
    }, 500);

    setTimeout(() => {
        wordElement.classList.remove('fade-in');
    }, 1000);
    }

setInterval(changeWord, 3500);
