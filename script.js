const nameField = document.getElementById('name');
const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
    if (nameField.value.length < 3) {
        alert('O nome deve ter pelo menos 3 caracteres.');
        event.preventDefault(); 
    }
});

const emailField = document.getElementById('email');

form.addEventListener('submit', function(event) {
    const emailDomain = '@exemplo.com';
    if (!emailField.value.endsWith(emailDomain)) {
        alert('O e-mail deve pertencer ao domínio ' + emailDomain);
        event.preventDefault(); 
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Cadastro realizado com sucesso!');
    form.reset();
});

let isFormSubmitted = false;

window.addEventListener('beforeunload', function(event) {
    if (!isFormSubmitted) {
        event.preventDefault();
        event.returnValue = '';
    }
});

form.addEventListener('submit', function() {
    isFormSubmitted = true;
});
