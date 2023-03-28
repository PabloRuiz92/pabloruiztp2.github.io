var clickMenuAbrir=document.getElementById("contraido");
var clickMenuCerrar=document.getElementById("desplegado");

clickMenuAbrir.addEventListener("click",()=>{
    document.getElementById("desplegable").style.top="-50px";
    document.getElementById("desplegable").style.opacity="1";
    document.getElementById("desplegable").style.visibility="visible";
    document.getElementById("contraido").style.visibility="hidden";
    document.getElementById("desplegado").style.visibility="visible";
});

clickMenuCerrar.addEventListener("click", ()=>{
    document.getElementById("desplegable").style.top="-60px";
    document.getElementById("desplegable").style.opacity="0";
    document.getElementById("desplegable").style.visibility="hidden";
    document.getElementById("contraido").style.visibility="visible";
    document.getElementById("desplegado").style.visibility="hidden";
});

var images = [], x = 0;
images[0] = "IMG/imagen1.jpg";
images[1] = "IMG/imagen2.jpg";
images[2] = "IMG/imagen3.jpg";
images[3] = "IMG/imagenInicial.jpg";
setTimeout("cambioImagen()", 5000);

function cambioImagen() {
    var img = document.getElementById("imagen");
    img.src = images[x];
    x++;        
    if(x >= images.length) {
        x = 0;
    } 
    // fadeo(img, 100, true);
    setTimeout("cambioImagen()", 5000);
}

//No logre que el fadeo se vea bien, lo voy a dejar comentado

// function fadeo(el, val, fade) {
//     if(fade === true) {
//         val--;
//     } else {
//         val ++;
//     }       
//     if(val > 0 && val < 100) {
//         el.style.opacity = val / 100;
//         setTimeout(function(){ fadeo(el, val, fade); }, 10);
//     }
// }

//profe esto no anda, despues podria decirme que es lo que esta mal?
//los valores son placeholder

// var mouseSobreImagen=document.getElementById("imagenVinculoHombre");

// mouseSobreImagen.addEventListener("mouseover", ()=>{
//     document.getElementById("imagenVinculoHombre").style.left="500";
//     document.getElementById("imagenVinculoHombre").style.width="600";
// });

// mouseSobreImagen.addEventListener("mouseout", ()=>{
//     document.getElementById("imagenVinculoHombre").style.height="100";
//     document.getElementById("imagenVinculoHombre").style.width="1212";
// });