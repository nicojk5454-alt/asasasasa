const contraadmind = document.getElementById("campo-input");
const formulario = document.getElementById("codadmind");
const mensajeErro = document.getElementById("mensajeError");
const cotraseña = "contradeveloper";
const paginadmdocs = "adminCreate.html";
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const palabraIngresada = contraadmind.value.trim().toLowerCase();
  if (palabraIngresada === cotraseña) {
    window.location.href = paginadmdocs;
  } else {
    mensajeError.style.display = "block";
    // Limpiamos el campo de texto
    contraadmind.value = "";
  }
});
