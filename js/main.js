let cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
  ];

  let selectedCuenta = 0;

  function iniciarSesion() {
    let password = document.getElementById("password").value;

    if (password === "1234") {
      document.getElementById("acciones").style.display = "block";
    } else {
      alert("Contraseña incorrecta. Intenta nuevamente.");
      document.getElementById("password").value = "";
    }
  }

  function consultarSaldo() {
    let saldo = cuentas[selectedCuenta].saldo;
    alert("Saldo actual: $" + saldo);
  }

  function ingresarMonto() {
    let monto = prompt("Ingrese el monto a ingresar:");
    monto = parseFloat(monto);

    if (isNaN(monto) || monto <= 0) {
      alert("Monto inválido. Intenta nuevamente.");
      return;
    }

    let saldo = cuentas[selectedCuenta].saldo;
    let nuevoSaldo = saldo + monto;

    if (nuevoSaldo > 990) {
      alert("El saldo máximo permitido es $990. No puedes ingresar más dinero.");
      return;
    }

    cuentas[selectedCuenta].saldo = nuevoSaldo;
    alert("Monto ingresado: $" + monto + "\nNuevo saldo: $" + nuevoSaldo);
  }

  function retirarMonto() {
    let monto = prompt("Ingrese el monto a retirar:");
    monto = parseFloat(monto);

    if (isNaN(monto) || monto <= 0) {
      alert("Monto inválido. Intenta nuevamente.");
      return;
    }

    let saldo = cuentas[selectedCuenta].saldo;
    let nuevoSaldo = saldo - monto;

    if (nuevoSaldo < 10) {
      alert("El saldo mínimo permitido es $10. No puedes retirar más dinero.");
      return;
    }

    cuentas[selectedCuenta].saldo = nuevoSaldo;
    alert("Monto retirado: $" + monto + "\nNuevo saldo: $" + nuevoSaldo);
  }

  document.getElementById("cuentas").addEventListener("change", function() {
    selectedCuenta = parseInt(this.value);
  });