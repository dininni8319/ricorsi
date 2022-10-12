//This works, based on presence of a string it adds or removes the span
function createErrorElement(text) {
    let childClass = document.getElementById('child-class');
    let span = document.createElement('span');

    childClass.appendChild(span);

    let exists = childClass.contains(span);

    if (text) {
        span.innerHTML = `${text}`;
        span.style.color = 'red';
    } else if (exists) {
        childClass.removeChild(span);
    }
}

/* let len = nome.addEventListener('keypress', () => nome.value.length
); */
let nome = document.querySelector('#name');
/* listen the changes */

nome?.addEventListener('input', function (evt) {
    checkLength(nome.value.length);
});

function checkLength(val) {
    if (val <= 0) {
        createErrorElement('campo obligatorio');
    } else {
        createErrorElement();
    }
}

/* document.addEventListener('DOMContentLoaded', checkLength)  */
