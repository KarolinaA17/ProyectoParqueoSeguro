if (!localStorage.getItem("espacios")) {
  const espaciosIniciales = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    disponible: true,
    vehiculo: null
  }));
  localStorage.setItem("espacios", JSON.stringify(espaciosIniciales));
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("espaciosContainer");

  function renderEspacios() {
    const espacios = JSON.parse(localStorage.getItem("espacios")) || [];
    container.innerHTML = ""; // Limpiar antes de renderizar

    espacios.forEach(e => {
      const card = document.createElement("div");
      card.classList.add("espacio-card");

      if (e.disponible) {
        card.classList.add("disponible");
        card.innerHTML = `
          <h3>✅ Disponible</h3>
          <p><strong>Espacio:</strong> #${e.id}</p>
        `;
      } else {
        card.classList.add("ocupado");
        card.innerHTML = `
          <h3>🚗 Ocupado</h3>
          <p><strong>Espacio:</strong> #${e.id}</p>
          <p><strong>Ocupado por:</strong> ${e.vehiculo.propietario}</p>
        `;
      }

      container.appendChild(card);
    });
  }

  renderEspacios();
});

