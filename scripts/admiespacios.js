document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("espaciosContainer");

  renderEspacios();

  function renderEspacios() {
    container.innerHTML = "";
    const espacios = JSON.parse(localStorage.getItem("espacios")) || [];

    espacios.forEach(e => {
      const card = document.createElement("div");
      card.classList.add("espacio-card");

      if (e.disponible) {
        card.classList.add("disponible");
        card.innerHTML = `
          <h3>✅ Disponible</h3>
          <p>Espacio ${e.id}</p>
        `;
      } else {
        card.classList.add("ocupado");
        card.innerHTML = `
          <h3>🚗 Ocupado</h3>
          <p><strong>Por:</strong> ${e.vehiculo.propietario}</p>
        `;
      }

      // Botón para liberar espacio si está ocupado
      if (!e.disponible) {
        const liberarBtn = document.createElement("button");
        liberarBtn.textContent = "Liberar";
        liberarBtn.classList.add("toggle-btn");
        liberarBtn.addEventListener("click", () => {
          e.disponible = true;
          e.vehiculo = null;
          localStorage.setItem("espacios", JSON.stringify(espacios));
          renderEspacios();
        });
        card.appendChild(liberarBtn);
      }

      container.appendChild(card);
    });
  }
});
