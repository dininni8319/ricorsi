const nominativo = document.querySelector('.nominativo');
const input = document.querySelectorAll('.input');
const form = document.querySelector('.form');
const errorElement = document.getElementById('errorElement');

form?.addEventListener('submit', (e) => {
    input.forEach(el => {
        let messages = [];
    
        if (el.value  === '' || el.value == null) {
            messages.push('Devi aggiungere il nominativo');
        } 
    
        if (messages.length > 0) {
            e.preventDefault();
            errorElement.style.color = 'red';
            errorElement.innerText = messages.join(',');
        }
    })
    
})