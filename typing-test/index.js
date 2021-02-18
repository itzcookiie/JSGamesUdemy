const startBtn = document.getElementById('startBtn');
const doneBtn = document.getElementById('doneBtn');
const output = document.getElementById('output');
const textarea = document.querySelector('textarea');

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry";

let startTime;

startBtn.addEventListener('click', e => {
    output.innerText = text;
    e.target.classList.add('hide');
    doneBtn.classList.remove('hide'); 
    startTime = performance.now();
})

doneBtn.addEventListener('click', e => {
    const finishedTime = performance.now();
    const timeDiff = (finishedTime - startTime) / 1000;
    const typedText = textarea.value;
    const numOfWordsTyped = typedText.length;
    const wordsPerMinute = (numOfWordsTyped * 60) / timeDiff 
    const numOfWords = text.split(' ').length;
    const numOfCorrectTypedWords = text
    .split(' ')
    .filter(word => typedText.split('').some(typedWord => typedWord === word))
    .length;
    output.innerHTML = 
    `
        <p>You typed at ${wordsPerMinute} words per minute</p>
        <p>${numOfCorrectTypedWords} correct out of ${numOfWords} words</p>
    `
    e.target.classList.add('hide');
    startBtn.classList.remove('hide');
})