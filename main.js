const contactMeForm = document.getElementById('contactMeForm');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const messageInput = document.getElementById('messageInput');

contactMeForm.addEventListener('submit', handleSubmit);

function handleSubmit() {
    alert('Mensagem enviada!');

    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
}
