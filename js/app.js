alert("Disculpe profe estuve de parciales y esto es lo que pude hacer :(")
function guardarDatos() {
    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;

    // Validar que los campos no estén vacíos
    if (nombre === '' || email === '') {
        alert('Por favor, complete todos los campos');
        return;
    }
    var datos = {
        nombre: nombre,
        email: email
    };