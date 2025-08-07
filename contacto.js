const form = document.getElementById('form-contacto');
const mensaje = document.getElementById('mensajeExito');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  mensaje.style.display = 'block';
  form.reset();
});
