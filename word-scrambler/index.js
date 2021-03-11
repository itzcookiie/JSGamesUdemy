const words = ['games', 'html', 'css', 'javascript', 'react'];

document.addEventListener('DOMContentLoaded', () => {
    const output = document.querySelector('.output'),
    input = document.querySelector('input'),
    button = document.querySelector('button');
    let gameStart = false;

    button.addEventListener('click', () => {
        if(!gameStart) {
            button.innerText = 'Guess';
            input.classList.remove('hide');
            output.innerText = '';
            const word = selectRandomWord();
            const scrambledWord = scrambleWord(word);
            input.word = word;
            input.scrambledWord = scrambleWord(word);
            output.innerText = scrambledWord;
            gameStart = true;
        } else {
            const guessedWord = input.value;
            if(input.word === guessedWord) {
                output.innerText = `Correct it was ${input.word}`;
                button.innerText = 'Start';
                input.classList.add('hide');
                gameStart = false;
            } else {
                output.innerText = `Wrong ${input.scrambledWord}`
            }
        }
    })
})

function selectRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function scrambleWord(word) {
    const positions = word.split('').map((letter, index) => index);
    return word.split('').map(letter => {
        const randomNumber = Math.floor(Math.random() * positions.length);
        const randomPosition = positions.splice(randomNumber, 1);
        return word[randomPosition];
    })
    .join('');
}