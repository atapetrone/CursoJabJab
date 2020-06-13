const hamburguesa = document.querySelector(".hamburger");
const columna = document.querySelector(".nav");
const elementosHamburguesa = document.querySelectorAll("span") ;
const contenido = document.querySelector(".content");

/* console.log(hamburguesa);
console.log(columna);
console.log(elementosHamburguesa);
console.log(contenido); */


hamburguesa.addEventListener("click", function () {
columna.classList.toggle("open");
contenido.classList.toggle("shift");
cruz(); //aqui llamo a la función que cambia el css de las 3 lineas de la hamburguesa (ver abajo)
});

//console.log(elementosHamburguesa);
 
function cruz(){
  for(let guion of elementosHamburguesa){
     guion.classList.toggle("change"); //Checate que forma tan elegante de manejar un CSS
  };
};



