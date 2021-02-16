const button = document.getElementById('btn');
const output = document.querySelector('.output');

const date = new Date();
let currentTime = date.getHours();

let message = "";

button.addEventListener('click', () => {
    let timeOfDay = '';
    if(currentTime > 6 && currentTime < 12) {
        timeOfDay = "morning"
    } else if(currentTime >= 12 && currentTime < 18) {
        timeOfDay = "afternoon"
    } else if(currentTime >= 18 && currentTime < 21) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }
    message = "It's " + timeOfDay;
    output.classList.add(timeOfDay);
    output.innerText = message;
})