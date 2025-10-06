// Mostrar/ocultar campo de descripción de animales según la respuesta
document.querySelectorAll('input[name="otros-animales"]').forEach(radio => {
    radio.addEventListener('change', function() {
        const animalesDetalle = document.getElementById('animales-detalle');
        if (this.value === 'si') {
            animalesDetalle.style.display = 'block';
        } else {
            animalesDetalle.style.display = 'none';
        }
    });
});

// Manejar el envío del formulario
document.getElementById('adopcionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu solicitud de adopción! Nos pondremos en contacto contigo pronto.');
    // En una implementación real, aquí enviarías los datos a un servidor
    this.reset();
});