const actionsContainer = document.createElement('div'),
movingObjectContainer = document.createElement('div');

const distance = 100;
const actions = [];

document.addEventListener('DOMContentLoaded', () => {
    const fragment = document.createDocumentFragment();
    movingObjectContainer.classList.add('moving-object-container');
    movingObjectContainer.innerText = 'Hello World!';
    actionsContainer.classList.add('actions-container');
    fragment.appendChild(actionsContainer);
    fragment.appendChild(movingObjectContainer);
    document.body.appendChild(fragment);
})

document.addEventListener('keydown', e => {
    const transform = handleKeyboard(e.key);
    if(transform) actions.push(transform);
})

function handleKeyboard(key) {
    const actionElement = document.createElement('div');
    actionElement.classList.add('action');
    actionElement.addEventListener('click', function(e) {
        actionsContainer.removeChild(this);
        const index = actions.findIndex(action => action.element === this);
        actions.splice(index, 1);
    })
    switch(key) {
        case 'c': 
            movingObjectContainer.style.backgroundColor = `rgb(${randomNumGenerator()}, ${randomNumGenerator()}, ${randomNumGenerator()})`;
            break;
        case 'ArrowUp': {
            return moveCommand(actionElement, 'up', 'top', -distance);
        }
        case 'ArrowRight': {
            return moveCommand(actionElement, 'right', 'left', distance);
        }
        case 'ArrowDown': {
            return moveCommand(actionElement, 'down', 'top', distance);
        }
        case 'ArrowLeft': {
            return moveCommand(actionElement, 'left', 'left', -distance);
        }
        case " ": {
            runActions();
        }
    }
    return null;
}

async function runActions() {
    while(actions.length) {
        await delay();
    }
}

function delay() {
    return new Promise(resolve => {
        return (function(time) {
            setTimeout(() => {
                actionsContainer.removeChild(actions[0].element);
                const action = actions.shift();
                action.move();
                if(!actions.length) movingObjectContainer.innerText = 'Hello World!';
                resolve();
            }, time);
        })(100);
    })
}

function randomNumGenerator() {
    return Math.floor(Math.random() * 256);
}

function moveCommand(element, direction, cssPosition, distance) {
    element.innerText = `+${direction}`;
    actionsContainer.appendChild(element);
    return {
        element,
        move() {
            const currentPosition = parseInt(getComputedStyle(movingObjectContainer)[cssPosition]);
            movingObjectContainer.style[cssPosition] = currentPosition + distance + 'px';
            movingObjectContainer.innerText = `Moving ${direction}`;
        }
    }
}