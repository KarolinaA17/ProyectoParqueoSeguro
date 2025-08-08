document.addEventListener("DOMContentLoaded", () => {
  const vehiculoForm = document.getElementById("vehiculoForm");
  const listaVehiculos = document.getElementById("listaVehiculos");

  vehiculoForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const placa = document.getElementById("placa").value;
    const tipo = document.getElementById("Tipo").value;
    const marca = document.getElementById("marca").value;
    const color = document.getElementById("color").value;
    const propietario = document.getElementById("propietario").value;

    // Crear tarjeta de vehículo
    const card = document.createElement("div");
    card.classList.add("vehiculo-card");

    card.innerHTML = `
      <h3>${tipo === "Carro" ? "🚗" : "🏍️"} ${tipo}</h3>
      <p><strong>Placa:</strong> ${placa}</p>
      <p><strong>Marca:</strong> ${marca}</p>
      <p><strong>Color:</strong> ${color}</p>
      <p><strong> Propietario:</strong> ${propietario}</p>
      <button class="delete-btn">❌ Eliminar</button>
    `;

    // Botón eliminar
    card.querySelector(".delete-btn").addEventListener("click", () => {
      card.remove();
    });

    listaVehiculos.appendChild(card);
    vehiculoForm.reset();
  });

  // ------- Lógica para cargar marcas según tipo -------
  const tipoVehiculo = document.getElementById("Tipo");
  const marcaSelect = document.getElementById("marca");

  const marcas = {
    Carro: [
      "Chevrolet", "Renault", "Toyota", "Mazda", "Ford", "Nissan", "Hyundai",
      "Kia", "Volkswagen", "BMW", "Mercedes-Benz", "Audi", "Peugeot",
      "Citroën", "Fiat", "Jeep", "Mitsubishi", "Subaru"
    ],
    Moto: [
      "Yamaha", "Honda", "Suzuki", "Kawasaki", "Bajaj", "TVS", "KTM", "Ducati",
      "Harley-Davidson", "Triumph", "Royal Enfield"
    ]
  };

  tipoVehiculo.addEventListener("change", () => {
    const tipoSeleccionado = tipoVehiculo.value;
    marcaSelect.innerHTML = '<option value="">Seleccione una marca</option>'; // limpia

    if (tipoSeleccionado && marcas[tipoSeleccionado]) {
      marcas[tipoSeleccionado].forEach(marca => {
        const option = document.createElement("option");
        option.value = marca;
        option.textContent = marca;
        marcaSelect.appendChild(option);
      });
    }
  });
});
