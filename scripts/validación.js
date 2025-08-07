// LOGIN
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const mensaje = document.getElementById('mensaje');

  if (email && password) {
    mensaje.textContent = 'Inicio de sesión exitoso. Redirigiendo...';
    mensaje.style.color = 'lightgreen';
    setTimeout(() => {
      window.location.href = "bienvenida.html";
    }, 1500);
  } else {
    mensaje.textContent = 'Por favor completa todos los campos.';
    mensaje.style.color = 'red';
  }
});

// MOSTRAR REGISTRO
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

  if (nombre && correo && clave && telefono) {
    mensajeRegistro.textContent = 'Registro exitoso. Redirigiendo...';
    mensajeRegistro.style.color = 'lightgreen';
    setTimeout(() => {
      window.location.href = "bienvenida.html";
    }, 1500);
  } else {
    mensajeRegistro.textContent = 'Completa todos los campos para registrarte.';
    mensajeRegistro.style.color = 'red';
  }
});

// FORMULARIO DE CONTACTO - Validación
const contactoForm = document.getElementById('contact-form');
const mensajeConfirmacion = document.getElementById('mensaje-confirmacion');

if (contactoForm) {
  contactoForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !email || !telefono || !mensaje) {
      mensajeConfirmacion.textContent = "Por favor completa todos los campos.";
      mensajeConfirmacion.style.color = "orange";
      return;
    }

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailRegex.test(email)) {
      mensajeConfirmacion.textContent = "Correo electrónico inválido.";
      mensajeConfirmacion.style.color = "orange";
      return;
    }

    if (isNaN(telefono)) {
      mensajeConfirmacion.textContent = "El teléfono debe ser numérico.";
      mensajeConfirmacion.style.color = "orange";
      return;
    }

    mensajeConfirmacion.textContent = "Mensaje enviado con éxito.";
    mensajeConfirmacion.style.color = "lightgreen";
    contactoForm.reset();
  });
}
