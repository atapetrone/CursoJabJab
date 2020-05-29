let bodyElem= document.querySelector("body");
console.log(bodyElem);
let divElem= document.querySelector("div");
console.log(divElem);
let h1Elem= document.querySelector("h1");
console.log(h1Elem);
let aElem= document.querySelectorAll("a");
console.log(aElem.length);
let pElem = document.querySelector("p"); //Estas agarrando solo el primero
console.log(pElem);
let secElem = document.querySelector("section");
console.log(secElem);
let butElem = document.querySelector("button");
console.log(butElem);
let footElem = document.querySelector("footer");

let ulElem = document.querySelector("ul");
let marcaButElem= document.querySelector("#IDmarcaBut");



bodyElem.style.backgroundColor = "#fffbf0";
bodyElem.style.margin = "0";
bodyElem.style.padding = "0";
bodyElem.style.fontFamily = '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif';
/* 
body {
  background-color: #f0f0f2;
  margin: 0;
  padding: 0;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
*/

divElem.style.width = "600px"
divElem.style.margin = "5em auto"
divElem.style.padding = "2em"
divElem.style.backgroundColor = "#fdfdff"
divElem.style.borderRadius = "0.5em"
divElem.style.boxShadow = "2px 3px 7px 2px rgba(0,0,0,0.02)"
/* 
div {
  width: 600px;
  margin: 5em auto;
  padding: 2em;
  background-color: #fdfdff;
  border-radius: 0.5em;
  box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
}
*/

h1Elem.style.textAlign ="center";
/* 
h1 {
  text-align: center;
}
*/


for(let i=0; i<aElem.length; i++){
console.log(aElem[i]);

aElem[i].style.color = "#38488f";
aElem[i].style.textDecoration="none";

};



secElem.style.width = "800px"
secElem.style.margin = "5em auto"
secElem.style.padding = "2em"
secElem.style.borderRadius = "0.5em"
secElem.style.boxShadow = "2px 3px 7px 2px rgba(0,0,0,0.08)"

/*  ESTO SE COMENTA PARA VER UN EJEMPLO DE COMO INYECTAR CSS
pElem.style.color = "gray";
pElem.style.fontSize ="21px";
pElem.style.maxWidth = "800px";
pElem.style.textAlign ="center";
*/
//PARA EL EJMPLO VAMOS A style.css Y CREAMOS LOS MISMOS ELEMENTOS DE ESTILO. Y AHORA ASIGNAMOS CON classList.add "un mensaje"
pElem.classList.add("un-mensaje");

//TAMBIEN PODEMOS ELIMINAR LA CLASE:
//pElem.classList.remove("un-mensaje"); 

// Aquí otro ejemplo de remove:
secElem.classList.remove("remover")
// puedes checar la consola para verificar que ya no existe a pesar de que esta clase se dio de alta directamente en el html

//TOGGLE
//.toggle sirve para hacer un switch de encendido apagado de una clase... si no esta lo crea, si esta lo elimina
//Antes vamos a centrar el boton que se encuentra dentro de la seccion "footer"
footElem.classList.add("centro");
//EJEMPLO DE .toggle:
butElem.onclick= function(){ //Para este ejemplo estamos inyectando onclick al boton y asignando una funcion
secElem.classList.toggle ("on");
};


//ATTRIBUTE
// A continuación se explica como acceder a los atributos de los elementos
console.log(marcaButElem);
let attMarcaBut =marcaButElem.getAttribute("onclick");
console.log(attMarcaBut);
let idMarcaBut =marcaButElem.getAttribute("id");
console.log(idMarcaBut);
//AHORA VAMOS A CAMBIAR EL ID ANTES CONSULTADO Y TAMBIEN agregaremos un CLASS
marcaButElem.setAttribute("id", "IDlogoBut1 IDlogoBut2 IDlogoBut3");
marcaButElem.setAttribute("class", "marcaClass");
idMarcaBut =marcaButElem.getAttribute("id");
let classMarcaBut =marcaButElem.getAttribute("class");
console.log(idMarcaBut);
console.log(classMarcaBut);
// Ahora cambiaremos la clase que acabamos de crear a algo diferente
marcaButElem.setAttribute("class", "marcaClass8888888"); //AQUI CARGAS EL CAMBIO
classMarcaBut =marcaButElem.getAttribute("class"); //YA LO ASIGNASTE PERO AQUI HAY QUE ACTUALIZAR A LA VARIABLE PARA PODER DESPUES DESPLEGARLO CON UN CONSOLE.LOG
console.log(classMarcaBut);


//POR ULTIMO APRENDEREMOS A BORRAR UN ATTRIBUTE
// COMO EJEMPLO BORRAREMOS EL ATTRIBUTE ONCLICK
/* 
marcaButElem.removeAttribute("onclick");   //   Esta es la manera de borrar el attribute "onclick"
marcaButElem.removeAttribute("id");         // Esta seria la manera de borrar el attribute "id"
marcaButElem.removeAttribute("class");         // Esta seria la manera de borrar el attribute "id"
marcaButElem.innerText = "Hola Mundo"; //Este no borra, solo se me antojo cambiar el texto
 */