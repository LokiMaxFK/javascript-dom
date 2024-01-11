const box = document.querySelector('.box');

box.querySelector("h2").style.width = "700px";

console.log(box.scrollWidth);
// Retorno: 540 <- Ancho total del elemento 


console.log(box.clientWidth);
// Retorno: 385 <- Ancho visible sin contar la barra