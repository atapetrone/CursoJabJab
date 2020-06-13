//TRABAJANDO CON PARENTS CHILDS Y SIBLINGS

let ulEle = document.querySelector(".todo");
//let liEle = document.querySelectorAll(".todo__item");
let liEles = document.getElementsByClassName("todo__item");

console.log("------------INICIAN EJEMPLOS PARENT--------------");
console.log(ulEle.parentNode); //Esto nos desplegará el body

console.log(ulEle.parentNode.parentNode); //Esto nos debe mostrar el HTML

console.log(liEles[0].parentNode); // Este nos debe mostrar el ul (obviamente podemos poner [cualquier indice valido])
console.log("------------HASTA AQUI PARENTS--------------");


console.log("------------INICIAN EJEMPLOS CHILDREN--------------");
console.log(ulEle.childNodes); //ChildNodes te da todo los hijos debajo de ul (son 7 nodos en este ejemplo porque te incluye TODO LO QUE HAY COMO HIJO incluyendo los espacios de tabulacion, por lo tanto se recomienda usar mejor children)
console.log(ulEle.children); //En este caso solo nos da los 3 elementos HTML correspondientes que se encuentran debajo del ul.


console.log("------------CHILDREN SELECTIVO--------------")

console.log(ulEle.children[1]);



console.log("------------FIN CHILDREN SELECTIVO  /  INICIO FIRSTELEMENTCHILD Y LASTELEMENTCHILD--------------")


console.log(ulEle.firstElementChild); //IMPORTANTE:  Si usuaras firstChild  en lugar de firstElementChild obtendrías por resultado el primer nodo, lo cual seria una cadena de texto por el espacio tabulado antes de llegar al primer li.  En cambio firsElementChild si te despliega el primer elemento html
console.log(ulEle.lastElementChild); //Otro ejemplo pero con LAST
console.log("------------HASTA AQUI CHILDREN--------------");


console.log("------------INICIAN EJEMPLOS SIBLING--------------");
//SIBLING METHODS

//FOR NODES: (ESTOS CASI NO LOS USAREMOS)
//previousSibling  (ESTOS CASI NO LOS USAREMOS)
//nextSibling  (ESTOS CASI NO LOS USAREMOS)

//PARA ELEMENT NODES:
//previousElementSibling
//nextElementSibling

console.log(liEles[0].nextElementSibling);
console.log(ulEle.firstElementChild.nextElementSibling.nextElementSibling); //Otro ejemplo

console.log(liEles[1].nextElementSibling.previousElementSibling.previousElementSibling); //Otro ejemplo
console.log(liEles[0].nextElementSibling.nextElementSibling); //Otro ejemplo con previous

console.log("------------HASTA AQUI SIBLINGS--------------");
console.log("------------INICIAN EJEMPLOS EVENTOS--------------");


let botonEvento = document.querySelector(".eventoButtClass");
console.log(botonEvento);

let inputEvento = document.querySelector(".eventoInputClass");
console.log(inputEvento);


//  ASI SE INYECTA EL EVENTO CLICK EN EL BOTON
function thing() {
  console.log("Aparece esto ahora llamando a una funcion cuando oprimes el botón")
};
botonEvento.addEventListener('click', thing);



//  ASI SE INYECTA EL EVENTO CLICK EN EL INPUT
function thing2() {
  console.log("Aparece esto ahora llamando a una funcion cuando METES UN DATO EN INPUT")
};
inputEvento.addEventListener('input', thing2);

/* 
  //BORRAR UN EVENTO (lo vamos a comentar para que funcione el anterior evento suscrito a input)

  inputEvento.removeEventListener ("input",thing2)
 */