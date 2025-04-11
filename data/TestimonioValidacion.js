document.getElementById('ratingForm').addEventListener('submit', function(event) {
    var opinion = document.getElementById('opinion').value.trim();
    var errorElement = document.getElementById('error');
    
    if (opinion === '' || opinion.length > 100) {
        errorElement.textContent = 'Por favor, ingrese una opinión no vacía y que tenga un máximo de 100 caracteres.';
        event.preventDefault();
    } else {
        errorElement.textContent = '';
    }
});

document.querySelector('.btn.cancel').addEventListener('click', function() {
    document.getElementById('opinion').value = '';
    document.getElementById('error').textContent = '';
});