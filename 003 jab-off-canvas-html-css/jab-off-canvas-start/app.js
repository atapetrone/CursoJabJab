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
cruz();
});


//console.log(elementosHamburguesa);


 
function cruz(){
  for(let guion of elementosHamburguesa){
     guion.classList.toggle("change");
  };
};



