const button = document.getElementById('tip-btn');
const tipMessage = document.querySelector('.tip-message');
const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const tipAmount = document.querySelector('input');
    tipMessage.innerText = `You should tip $${(+tipAmount.value * 0.15).toFixed(2)} on $${+tipAmount.value}`
})