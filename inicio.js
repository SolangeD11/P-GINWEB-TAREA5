const correo = document.getElementById("email");
const Contraseña = document.getElementById("password");
const form = document.getElementById("form");
const listInputs = document.querySelectorAll(".form-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }

function validacionForm() {
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (correo.value.length < 1 || correo.value.trim() == "") {
    mostrarMensajeError("email", "Correo no válido*");
    condicion = false;
  }
  if(Contraseña.value.length <1 || Contraseña.value.trim() == ""){
    mostrarMensajeError("password", "Contrase&ntilde;a no válida");
    condicion = false;
}
    return condicion;
}
})
function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
  form.reset();
  alert("Iniciando...");
}