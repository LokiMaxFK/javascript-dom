const elementos = document.querySelectorAll("p:not(.small), label");

console.log(elementos);

// Retorno: NodeList(2) [p.parrafo, p.parrafo]

const parrafo = document.querySelectorAll(".parrafo");
console.log(parrafo);