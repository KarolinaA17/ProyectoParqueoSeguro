
// LOGIN

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const mensaje = document.getElementById('mensaje');

  if (!email || !password) {
    mensaje.textContent = 'Ambos campos son requeridos.';
    mensaje.style.color = 'orange';
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|co|edu)$/;
  if (!emailRegex.test(email)) {
    mensaje.textContent = 'Correo electrónico inválido.';
    mensaje.style.color = 'orange';
    return;
  }

  mensaje.textContent = 'Inicio de sesión exitoso. Redirigiendo...';
  mensaje.style.color = 'lightgreen';
  setTimeout(() => {
    window.location.href = "../sections/bienvenida.html";
  }, 1500);
});

// MOSTRAR FORMULARIO DE REGISTRO

document.getElementById('mostrarRegistro').addEventListener('click', function() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registroForm').style.display = 'flex';
});

// REGISTRO

document.getElementById('registroForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correoRegistro').value.trim();
  const clave = document.getElementById('clave').value.trim();
  const mensajeRegistro = document.getElementById('mensajeRegistro');

  if (!nombre || !correo || !clave) {
    mensajeRegistro.textContent = 'Todos los campos son requeridos.';
    mensajeRegistro.style.color = 'orange';
    return;
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|co|edu)$/;
  if (!emailRegex.test(correo)) {
    mensajeRegistro.textContent = 'Correo electrónico inválido.';
    mensajeRegistro.style.color = 'orange';
    return;
  }

  mensajeRegistro.textContent = 'Registro exitoso. Redirigiendo...';
  mensajeRegistro.style.color = 'lightgreen';
  setTimeout(() => {
    window.location.href = "../sections/bienvenida.html";
  }, 1500);
});

// FORMULARIO DE CONTACTO

const contactoForm = document.getElementById('contact-form');
const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

if (contactoForm) {
  contactoForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !mensaje) {
      mensajeConfirmacion.textContent = "Por favor completa todos los campos.";
      mensajeConfirmacion.style.color = "orange";
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|co|edu)$/;
    if (!emailRegex.test(email)) {
      mensajeConfirmacion.textContent = "Correo electrónico inválido.";
      mensajeConfirmacion.style.color = "orange";
      return;
    }

    mensajeConfirmacion.textContent = "Mensaje enviado con éxito.";
    mensajeConfirmacion.style.color = "lightgreen";
    contactoForm.reset();
  });
}
