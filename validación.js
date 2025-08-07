document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const mensaje = document.getElementById('mensaje');

  if (email && password) {
    mensaje.textContent = 'Inicio de sesión exitoso. Bienvenido a ParqueoSeguro.';
    mensaje.style.color = 'lightgreen';
  } else {
    mensaje.textContent = 'Por favor completa todos los campos.';
    mensaje.style.color = 'red';
  }
});
