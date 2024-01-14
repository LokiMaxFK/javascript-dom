const section3 = document.querySelector('[data-id="section3"]');
const btn = document.querySelector('.btn');

btn.textContent = "Ir a sección 3";


window.addEventListener('scroll', ()=>{
    
    console.log( btn.getBoundingClientRect() );

    /*

    {
        "x": 80,
        "y": -1379,
        "width": 166.9375,
        "height": 63,
        "top": -1379,
        "right": 246.9375,
        "bottom": -1316,
        "left": 80
    }

    */

})