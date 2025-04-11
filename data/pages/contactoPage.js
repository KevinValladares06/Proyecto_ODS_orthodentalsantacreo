export const contactoPage = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const form = document.getElementById('form');
        const nombre = document.getElementById('nombre');
        const apellido = document.getElementById('apellido');
        const email = document.getElementById('email');
        const phone = document.getElementById('phone');
        const mensaje = document.getElementById('mensaje');

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                checkInputs();
            });
        }

        function checkInputs() {
            const nombreValue = nombre.value.trim();
            const apellidoValue = apellido.value.trim();
            const emailValue = email.value.trim();
            const phoneValue = phone.value.trim();
            const mensajeValue = mensaje.value.trim();

            nombreValue === ''
                ? setErrorFor(nombre, 'El nombre no puede estar vacío')
                : setSuccessFor(nombre);

            apellidoValue === ''
                ? setErrorFor(apellido, 'El apellido no puede estar vacío')
                : setSuccessFor(apellido);

            if (emailValue === '') {
                setErrorFor(email, 'El email no puede estar vacío');
            } else if (!isEmail(emailValue)) {
                setErrorFor(email, 'No es un email válido');
            } else {
                setSuccessFor(email);
            }

            if (phoneValue === '') {
                setErrorFor(phone, 'El teléfono no puede estar vacío');
            } else if (!/^\d+$/.test(phoneValue)) {
                setErrorFor(phone, 'El teléfono debe contener solo números');
            } else {
                setSuccessFor(phone);
            }

            mensajeValue === ''
                ? setErrorFor(mensaje, 'El mensaje no puede estar vacío')
                : setSuccessFor(mensaje);
        }

        function setErrorFor(input, message) {
            const formControl = input.parentElement;
            const small = formControl.querySelector('small');
            if (small) small.innerText = message;
            formControl.className = 'inputBox error';
        }

        function setSuccessFor(input) {
            const formControl = input.parentElement;
            formControl.className = 'inputBox success';
        }

        function isEmail(email) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i.test(email);
        }
    });
};
