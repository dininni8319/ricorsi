const elInputDate = document.getElementById('inputEndDate');
const elInputReminder = document.getElementById('selectReminder');

elInputDate?.addEventListener('click', (e) => {
    if (e.target.value) {
        elInputReminder.style.display = 'none';
    } else {
        elInputReminder.style.display = 'block';
    }
});

elInputReminder?.addEventListener('click', (e) => {
    if (e.target.value) {
        elInputDate.style.display = 'none';
    } else {
        elInputDate.style.display = 'block';
    }
});
