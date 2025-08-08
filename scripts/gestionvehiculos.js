const vehiculoForm = document.getElementById("vehiculoForm");
const listaVehiculos = document.getElementById("listaVehiculos");

vehiculoForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const placa = document.getElementById("placa").value;
  const tipo = document.getElementById("tipo").value;
  const marca = document.getElementById("marca").value;
  const color = document.getElementById("color").value;
  const propietario = document.getElementById("propietario").value;

  const li = document.createElement("li");
  li.innerHTML = `
    ${placa} - ${tipo} - ${marca} - ${color} - ${propietario}
    <button class="delete-btn">X</button>
  `;

  li.querySelector(".delete-btn").addEventListener("click", () => {
    li.remove();
  });

  listaVehiculos.appendChild(li);
  vehiculoForm.reset();
});

document.addEventListener("DOMContentLoaded", () => {
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
