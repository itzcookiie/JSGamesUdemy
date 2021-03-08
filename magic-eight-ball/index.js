const input = document.getElementById('input');
const responseSection = document.getElementById('response');
const button = document.querySelector('button');

const responses = ['Highly Likely', 'Unlikely', 'Probably', 'Good chance', 'Bad chance'];

button.addEventListener('click', () => {
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    responseSection.innerText = input.value + ' ' + randomResponse;
    input.value = '';
})