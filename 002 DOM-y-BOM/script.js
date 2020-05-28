
//document.getElementById SIRVE PARA AGARRAR POR ID UN ELEMENTO DEL DOM
let logosEle=document.getElementById("logo1");
console.log(logosEle);


//document.querySelector SIRVE PARA AGARRAR POR LO QUE TU LE PASES (va a seleccionar el primero que encuentra)
let logosEle2 = document.querySelector(".subDomClass");
console.log(logosEle2);

//Accede a multiples elementos del dom
let logosEle3 = document.getElementsByClassName("subDomClass");
console.log(logosEle3);
console.log(logosEle3[3]);

// SELECCIONAR POR TAG NAME
let logosEle4 = document.getElementsByTagName("h2");
//console.log(logosEle4);
console.log(logosEle4[0]);
console.log(logosEle4[1]);

//SELECCIONAR CON QUERYSELECTORALL 
let logosEle5 = document.querySelectorAll('p');
console.log(logosEle5);
console.log(logosEle5[4]);






