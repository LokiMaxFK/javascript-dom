const template = document.querySelector("template").content;
const notificacion = template.cloneNode(true);
notificacion.firstElementChild.textContent = "Notificación Agregada.";

document.body.append();