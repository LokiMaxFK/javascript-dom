const contenedor = document.querySelector('.contenedor');
const button = document.querySelector('#btn');

function handleEvent(){
    console.log(`Has dado click en este NODO: ${this.tagName}`);
}

button.addEventListener('click', handleEvent);
contenedor.addEventListener('click', handleEvent);
document.body.addEventListener('click', handleEvent);

/* 

    Respuesta al dar click al botón:
        Has dado click en este elemento: BUTTON
        Has dado click en este elemento: SECTION
        Has dado click en este elemento: BODY
*/