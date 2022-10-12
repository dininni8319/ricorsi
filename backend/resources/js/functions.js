let nome = document.getElementById('name');

nome?.addEventListener('keypress', checker);

function checker() {
    if (nome.value.length < 4) {
        nome.style.border = 'none';
        nome.removeAttribute('placeholder', 'il nome è corto');
    } else {
        nome.setAttribute('placeholder', 'il nome è corto');
        nome.style.border = '1px solid red';
    }
}
