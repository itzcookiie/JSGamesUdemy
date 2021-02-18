const container = document.querySelector('.container');

const audioObj = new Audio();

[...container.children].forEach(animal => animal.addEventListener('click', e => {
    const animalSound = e.target.id;
    audioObj.src = `./sound/${animalSound}.mp3`;
    audioObj.play();
}))
