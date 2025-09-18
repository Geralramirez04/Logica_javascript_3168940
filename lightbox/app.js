const flotante = document.querySelector("#flotante")
const cuadro = document.querySelector("#cuadro")
const equis = document.querySelector("#equis")
const sig = document.querySelector("#sig")
const ant = document.querySelector("#ant")
const imgprincipal = document.querySelector("#imgprincipal")
const fath = document.querySelector("#fath")
const miniaturas = document.querySelectorAll(".miniatura") // Asegúrate que tus miniaturas tengan esta clase

let indiceActual = 0;
const imagenes = [
  "image/img1.jpg",
  "image/img2.jpg",
  // Agrega más rutas si tienes más imágenes
];

function mostrarLightbox () {
  flotante.style.top = "0px";  
}

function ocultarLightbox () {
  flotante.style.top = "-100vh";  
}

function siguiente (){
  indiceActual = (indiceActual + 1) % imagenes.length;
  imgprincipal.src = imagenes[indiceActual];
}

function anterior (){
  indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
  imgprincipal.src = imagenes[indiceActual];
}

miniaturas.forEach((miniatura, index) =>{
  miniatura.addEventListener("click", () =>{
    imgprincipal.src = imagenes[index];
    indiceActual = index;
    mostrarLightbox();
  });
});

equis.addEventListener("click", ocultarLightbox);
cuadro.addEventListener("click", mostrarLightbox);
sig.addEventListener("click", siguiente);
ant.addEventListener("click", anterior);