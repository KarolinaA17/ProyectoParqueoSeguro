// ===== Inicializar espacios si no existen =====
if (!localStorage.getItem("espacios")) {
  const espaciosIniciales = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    disponible: true,
    vehiculo: null
  }));
  localStorage.setItem("espacios", JSON.stringify(espaciosIniciales));
}

document.addEventListener("DOMContentLoaded", () => {
  const vehiculoForm = document.getElementById("vehiculoForm");
  const listaVehiculos = document.getElementById("listaVehiculos");
  const espacioSelect = document.getElementById("espacio");

  cargarEspaciosDisponibles();
  renderVehiculos();

  vehiculoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const placa = document.getElementById("placa").value.trim().toUpperCase();
    const tipo = document.getElementById("Tipo").value;
    const marca = document.getElementById("marca").value;
    const color = document.getElementById("color").value.trim();
    const propietario = document.getElementById("propietario").value.trim();
    const espacioId = parseInt(espacioSelect.value);

    // 🔹 Validaciones
    if (!espacioId) {
      alert("Por favor selecciona un espacio.");
      return;
    }

    const placaRegex = /^[A-Z]{3}[0-9]{3}$|^[A-Z]{3}[0-9]{2}[A-Z]{1}$/;
    if (!placaRegex.test(placa)) {
      alert("Formato de placa inválido. Ejemplo: ABC123 o ABC12D");
      return;
    }

    if (placa.length !== 6) {
      alert("La placa debe tener exactamente 6 caracteres.");
      return;
    }

    if (propietario.length < 3 || propietario.length > 30) {
      alert("El nombre del propietario debe tener entre 3 y 30 caracteres.");
      return;
    }

    let espacios = JSON.parse(localStorage.getItem("espacios"));
    if (espacios.some(e => e.vehiculo && e.vehiculo.placa === placa)) {
      alert("Ya existe un vehículo con esa placa.");
      return;
    }

    let espacioSeleccionado = espacios.find(e => e.id === espacioId);
    if (!espacioSeleccionado || !espacioSeleccionado.disponible) {
      alert("Ese espacio ya está ocupado.");
      return;
    }

    // Asignar vehículo al espacio
    espacioSeleccionado.disponible = false;
    espacioSeleccionado.vehiculo = { placa, tipo, marca, color, propietario };

    localStorage.setItem("espacios", JSON.stringify(espacios));

    cargarEspaciosDisponibles();
    renderVehiculos();
    vehiculoForm.reset();
  });

  // ------- Lógica para cargar marcas según tipo -------
  const tipoVehiculo = document.getElementById("Tipo");
  const marcaSelect = document.getElementById("marca");

  const marcas = {
    Carro: ["Chevrolet", "Renault", "Toyota", "Mazda", "Ford", "Nissan", "Hyundai", "Kia", "Volkswagen", "BMW", "Mercedes-Benz", "Audi", "Peugeot", "Citroën", "Fiat", "Jeep", "Mitsubishi", "Subaru"],
    Moto: ["Yamaha", "Honda", "Suzuki", "Kawasaki", "Bajaj", "TVS", "KTM", "Ducati", "Harley-Davidson", "Triumph", "Royal Enfield"]
  };

  tipoVehiculo.addEventListener("change", () => {
    const tipoSeleccionado = tipoVehiculo.value;
    marcaSelect.innerHTML = '<option value="">Seleccione una marca</option>';

    if (tipoSeleccionado && marcas[tipoSeleccionado]) {
      marcas[tipoSeleccionado].forEach(marca => {
        const option = document.createElement("option");
        option.value = marca;
        option.textContent = marca;
        marcaSelect.appendChild(option);
      });
    }
  });

  // ===== Función para cargar espacios disponibles =====
  function cargarEspaciosDisponibles() {
    espacioSelect.innerHTML = '<option value="">Seleccione un espacio</option>';
    const espacios = JSON.parse(localStorage.getItem("espacios"));
    espacios
      .filter(e => e.disponible)
      .forEach(e => {
        const option = document.createElement("option");
        option.value = e.id;
        option.textContent = `Espacio ${e.id}`;
        espacioSelect.appendChild(option);
      });
  }

  // ===== Renderizar lista de vehículos =====
  function renderVehiculos() {
    listaVehiculos.innerHTML = "";
    const espacios = JSON.parse(localStorage.getItem("espacios"));

    espacios
      .filter(e => !e.disponible)
      .forEach(e => {
        const card = document.createElement("div");
        card.classList.add("vehiculo-card");

        card.innerHTML = `
          <h3>${e.vehiculo.tipo === "Carro" ? "🚗" : "🏍️"} ${e.vehiculo.tipo}</h3>
          <p><strong>Espacio:</strong> ${e.id}</p>
          <p><strong>📋 Placa:</strong> ${e.vehiculo.placa}</p>
          <p><strong>🏷 Marca:</strong> ${e.vehiculo.marca}</p>
          <p><strong>🎨 Color:</strong> ${e.vehiculo.color}</p>
          <p><strong>👤 Propietario:</strong> ${e.vehiculo.propietario}</p>
          <button class="delete-btn">❌ Eliminar</button>
        `;

        card.querySelector(".delete-btn").addEventListener("click", () => {
          e.disponible = true;
          e.vehiculo = null;
          localStorage.setItem("espacios", JSON.stringify(espacios));
          cargarEspaciosDisponibles();
          renderVehiculos();
        });

        listaVehiculos.appendChild(card);
      });
  }
});
