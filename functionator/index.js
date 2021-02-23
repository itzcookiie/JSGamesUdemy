const actionsContainer = document.createElement('div'),
movingObjectContainer = document.createElement('div');

const actions = [];
const position = {
    top: 0,
    left: 0
};

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
            return moveCommand(actionElement, 'up', 'top', -100);
        }
        case 'ArrowRight': {
            return moveCommand(actionElement, 'right', 'left', 100);
        }
        case 'ArrowDown': {
            return moveCommand(actionElement, 'down', 'top', 100);
        }
        case 'ArrowLeft': {
            return moveCommand(actionElement, 'left', 'left', -100);
        }
        case " ": {
            actions.forEach((action,index) => {
                (function(time) {
                    setTimeout(() => {
                        actionsContainer.removeChild(action.element);
                        action.move();
                        actions.shift();
                        if(!actions.length) movingObjectContainer.innerText = 'Hello World!';
                    }, time*index);
                })(100);
            })
        }
    }
    return null;
}

function randomNumGenerator() {
    return Math.floor(Math.random() * 256);
}

function moveCommand(element, direction, objectPosition, distance) {
    element.innerText = `+${direction}`;
    actionsContainer.appendChild(element);
    return {
        direction,
        element,
        move() {
            position[objectPosition] += distance;
            movingObjectContainer.style[objectPosition] = position[objectPosition] + 'px';
            movingObjectContainer.innerText = `Moving ${this.direction}`;
        }
    }
}