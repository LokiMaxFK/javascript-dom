const contenedor = document.querySelector('.contenedor');

function handlerSection(e){
    if(e.target.matches('.button-color')){
        const getColor = e.target.getAttribute('data-color');

        e.currentTarget.style.backgroundColor = getColor;
    }
}

contenedor.addEventListener('click', handlerSection, {once:true});