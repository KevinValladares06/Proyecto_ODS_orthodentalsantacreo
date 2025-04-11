document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.querySelector('.formulario-agendar');
  
    formulario.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nombre = document.getElementById('nombre');
      const correo = document.getElementById('correo');
      const telefono = document.getElementById('telefono');
      const fecha = document.getElementById('fecha');
      const hora = document.getElementById('hora');
      const servicio = document.getElementById('servicio');
      const mensaje = document.getElementById('mensaje');
  
      let valid = true;
  
      limpiarErrores();

      function setError(element, message) {
        const errorElemento = document.createElement('span');
        errorElemento.className = 'error-message';
        errorElemento.innerText = message;
        element.parentElement.appendChild(errorElemento);
        element.focus();
      }

      function limpiarErrores() {
        const errorMensajes = document.querySelectorAll('.error-message');
        errorMensajes.forEach(function(error) {
          error.remove();
        });
      }

      const nombreRegex = /^[a-zA-Z\s]+$/;
      if (!nombreRegex.test(nombre.value)) {
        setError(nombre, 'Por favor, ingrese un nombre válido');
      nombre.focus();
      valid = false;
      }
  
      const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!correoRegex.test(correo.value)) {
        setError(correo, 'Por favor, ingrese un correo electrónico válido.');
        correo.focus();
        valid = false;
      }
  
      const telefonoRegex = /^[0-9]+$/;
      if (!telefonoRegex.test(telefono.value)) {
        setError(telefono, 'Por favor, ingrese un número de teléfono válido');
        telefono.focus();
        valid = false;
      }
  
      const fechaActual = new Date();
      const fechaMaxima = new Date(fechaActual);
      fechaMaxima.setMonth(fechaMaxima.getMonth() + 1);
      
      const fechaSeleccionada = new Date(fecha.value);
      if (fechaSeleccionada < fechaActual || fechaSeleccionada > fechaMaxima) {
        setError(fecha, 'Por favor, seleccione una fecha dentro de los siguientes 30 días');
        fecha.focus();
        valid = false;
      }
  
      if (hora.value.trim() === '') {
        setError(hora, 'Por favor, seleccione una hora.');
        hora.focus();
        valid = false;
      }
  
      if (servicio.value.trim() === '') {
        setError(servicio, 'Por favor, seleccione un servicio.');
        servicio.focus();
        valid = false;
      }

      if (mensaje.value.trim() === '') {
        setError(mensaje, 'Por favor, ingrese un mensaje.');
        mensaje.focus();
        valid = false;
      }

      if (valid) {
        alert('Cita agendada con éxito');
        formulario.submit();
      }
    });
  });
  