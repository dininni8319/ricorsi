//Get the modal element
let modal = document.getElementById('simpleModal');
//get the button
let modalBtn = document.getElementById('modalBtn');

//Close btn
let closeBtn = document.getElementById('closeBtn');

modalBtn?.addEventListener('click', openModal);
closeBtn?.addEventListener('click', closeModal);

//add an event listener to the window, listen for an outside click
window?.addEventListener('click', outSideClick);

//Function to open a model
function openModal(params) {
    modal.style.display = 'block';
}

function closeModal(params) {
    modal.style.display = 'none';
}

function outSideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}
