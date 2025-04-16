// Función para validar el formulario de contacto
function validateForm() {
    const form = document.getElementById('contactForm');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');
    let isValid = true;

    // Validar nombre
    if (nombre.value.trim() === '') {
        nombre.classList.add('is-invalid');
        isValid = false;
    } else {
        nombre.classList.remove('is-invalid');
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    // Validar mensaje
    if (mensaje.value.trim() === '') {
        mensaje.classList.add('is-invalid');
        isValid = false;
    } else {
        mensaje.classList.remove('is-invalid');
    }

    if (isValid) {
        // Aquí podrías agregar el código para enviar el formulario
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        form.reset();
    }

    return false; // Prevenir el envío del formulario para este ejemplo
}

// Inicializar tooltips de Bootstrap
document.addEventListener('DOMContentLoaded', function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}); 