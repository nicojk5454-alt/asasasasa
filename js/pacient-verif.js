const contrapacient = document.getElementById("campo-inputp");
const formulario = document.getElementById("codepacient");
const fechaing = document.getElementById("campo-fech");
const mensajeError = document.getElementById("mensajeError");

const contrasena = "17181923";
const fecha = "2013-09-04";
const paginadmdocs = "pacientencuest.html";

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const palabraIngresada = contrapacient.value.trim().toLowerCase();
  const fechaIngresada = fechaing.value;

  if (palabraIngresada === contrasena && fechaIngresada === fecha) {
    window.location.href = paginadmdocs;
  } else {
    mensajeError.style.display = "block";

    // Limpiar los campos
    contrapacient.value = "";
    fechaing.value = "";
  }
});
