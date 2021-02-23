const actionsContainer = document.createElement('div'),
movingObjectContainer = document.createElement('div');

let actions = [];
const position = {
    top: 0,
    left: 0
}

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
    if(transform) {
        actions.push(transform);
        arrangeActions();
    }
})

function handleKeyboard(key) {
    const actionElement = document.createElement('div');
    actionElement.classList.add('action');
    actionElement.addEventListener('click', function(e) {
        actionsContainer.removeChild(this);
        const leftSide = actions.slice(0, +this.dataset.id);
        const rightSide = actions.slice(+this.dataset.id+1);
        actions = [...leftSide, ...rightSide];
        arrangeActions();
    })
    switch(key) {
        case 'c': 
            movingObjectContainer.style.backgroundColor = `rgb(${randomNumGenerator()}, ${randomNumGenerator()}, ${randomNumGenerator()})`
            break;
        case 'ArrowUp': {
            return transformObject(actionElement, 'up', 'top', -100);
        }
        case 'ArrowRight': {
            return transformObject(actionElement, 'right', 'left', 100);
        }
        case 'ArrowDown': {
            return transformObject(actionElement, 'down', 'top', 100);
        }
        case 'ArrowLeft': {
            return transformObject(actionElement, 'left', 'left', -100);
        }
        case " ": {
            // runActions(0);
            let time = 100;
            actions.forEach((action,index) => {
                setTimeout(() => {
                    actionsContainer.removeChild(action.element);
                    action.move();
                    actions.shift();
                    console.log(index)
                }, time*index)
            })
        }
    }
    return null;
}

function randomNumGenerator() {
    return Math.floor(Math.random() * 256);
}

function arrangeActions() {
    [...actionsContainer.children].forEach((action,index) => {
        action.setAttribute('data-id', index)
    });
}

function transformObject(element, direction, objectPosition, distance) {
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