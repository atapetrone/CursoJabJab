//Count Vowels
//Version1:
/* 
function countV(palabraInput) {
  let palabraArray = palabraInput.split("");
  let contador = 0;
  let vocales = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < palabraArray.length; i++) {
    let letraAnalizada = palabraArray[i];
    for (var ii = 0; ii < vocales.length; ii++) {
      if (letraAnalizada === vocales[ii]) {
        contador++;
      };
    };
  };
  console.log(contador);
};
countV("Vete a la verga");
 */

//Version 2 :
/* 
function countVowels2(cadena2) {
  //let palabrejas2 = cadena2;
  let contador2 = 0;
  let vocales2 = "aeiouAEIOU";
  let size2 = cadena2.length;
  //console.log(size2);
  for (i = 0; i < size2; i++) {
    let letraAnalizada2 =cadena2[i]; // SE USO LO SIGUIENTE: let letraAnalizada2 =cadena2.charAt(i);  TAMBIEN SE PUEDE USAR let letraAnalizada2 =cadena2[i];
    //console.log (letraAnalizada2);
    if(vocales2.includes(letraAnalizada2)){
      contador2++;
    };
    };
    return contador2;
  };

let resultado2 = countVowels2("Como que Zombies Amigo???");
console.log(resultado2);
 */

//Versión 3 :
//for let of
function escribeFrase() {
  let frase3 = prompt("Escribe una frase para contar el nuemro de vocales que contiene");


  let vocales3 = "aeiouAEIOU";
  let contador3 = 0;
  for (let elem of frase3) {
    if (vocales3.includes(elem)) {
      contador3++;
    };
  };

  //console.log(`La palabra "${frase3}" contiene el siguiente número de vocales: ${contador3}`);
  alert(`La palabra "${frase3}" contiene el siguiente número de vocales: ${contador3}`);
};




//console.log(countV3('hola amigones aaa') );


//EJERCICIOS DIVERSOS CON METODOS Y PROPIEDADES

//1.- DESPLEGAR EL DIA DE LA SEMANA Y LA HORA CON MINUTOS Y SEGUNDOS :

/* 

function diaHora(){
  
  let fecha = new Date();
  //console.log(fecha);
  let diaSemana = fecha.getDay();
  //console.log(diaSemana);
  let horaActual = fecha.getHours();
  //console.log(horaActual);
  let minutoActual = fecha.getMinutes();
  //console.log (minutoActual);
  let segundoActual = fecha.getSeconds();
  //console.log (segundoActual);

  let ampm ="AM";
  if (horaActual>=12){
ampm = 'PM'
  };

  let diaSemanaEscrito;
switch(diaSemana){
case 1 : diaSemanaEscrito ="lunes"
break;
case 2 : diaSemanaEscrito ="martes"
break;
case 3 : diaSemanaEscrito ="miercoles"
break;
case 4 : diaSemanaEscrito ="jueves"
break;
case 5 : diaSemanaEscrito ="viernes"
break;
case 6 : diaSemanaEscrito ="sabado"
break;
case 7 : diaSemanaEscrito ="domingo"
break;
};

  console.log(`El día de hoy es ${diaSemanaEscrito} `);
  if (horaActual ==0){
    horaActual=12;
  }else if (horaActual>12){
horaActual=horaActual-12;
  };
  console.log (`y son las ${horaActual} ${ampm} con ${minutoActual} minutos y ${segundoActual} segundos`)
}

diaHora();

 */

//Otra versión del ejercicio anterior utilizando un array en lugar de switch :


function diaHora2() {

  let fecha2 = new Date();
  //console.log(fecha);
  let diaSemana2 = fecha2.getDay();
  //console.log(diaSemana);
  let horaActual2 = fecha2.getHours();
  //console.log(horaActual);
  let minutoActual2 = fecha2.getMinutes();
  //console.log (minutoActual);
  let segundoActual2 = fecha2.getSeconds();
  //console.log (segundoActual);

  let ampm2 = "AM";
  if (horaActual2 >= 12) {
    ampm2 = 'PM'
  };

  let diaSemArray = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];

  //console.log(`El día de hoy es ${diaSemArray[diaSemana2]} `);
  if (horaActual2 == 0) {
    horaActual2 = 12;
  } else if (horaActual2 > 12) {
    horaActual2 = horaActual2 - 12;
  };
  //console.log(`El día de hoy es ${diaSemArray[diaSemana2]} y son las ${horaActual2} ${ampm2} con ${minutoActual2} minutos y ${segundoActual2} segundos`)
  alert(`El día de hoy es ${diaSemArray[diaSemana2]} y son las ${horaActual2} ${ampm2} con ${minutoActual2} minutos y ${segundoActual2} segundos`)
}

//diaHora2();



//IMPRIMIR LA VENTANA ACTUAL:

function imprimiendo() {
  window.print();
}

// LLEVAR LA FECHA DE HOY A DIFERENTES FORMATOS

function fechando(){

var today = new Date(); //ESTO TE DA LA FECHA DE HOY Y LA ASIGNA A UNA VARIABLE
console.log(today);
var dd = today.getDate(); //SE APLICA A LA VARIABLE EL METODO getDate() para obtener el numero de dia
console.log(dd);
var mm = today.getMonth();
//console.log(mm); // COMO PUEDES OBSERVAR NO TE DA EL NUMERO DE MES EXACTO YA QUE ENERO LO CONTABILIZA COMO EL MES 0
var mm = today.getMonth() + 1; //POR LO TANTO TENEMOS QUE AGREGAR UN UNO A LA CUENTA
console.log(mm);
var yyyy = today.getFullYear();
console.log(yyyy);

if (dd < 10) { //ACA LE AGREGAMOS UN 0 EN CASO DE SOLO SER UN DIGITO PARA MANTENER UN FORMATO SIMILAR
  dd = '0' + dd;
}

if (mm < 10) { //ACA LE AGREGAMOS UN 0 EN CASO DE SOLO SER UN DIGITO PARA MANTENER UN FORMATO SIMILAR
  mm = '0' + mm;
}

// AHORA HACEMOS EL DESPLEGADO MEDIANTE EL SIGNO + DE CONCATENACIÓN
let today1, today2, today3, today4;
today1 = mm + '-' + dd + '-' + yyyy;
console.log(today1);
today2 = mm + '/' + dd + '/' + yyyy;
console.log(today2);
today3 = dd + '-' + mm + '-' + yyyy;
console.log(today3);
today4 = dd + '/' + mm + '/' + yyyy;
console.log(today4);
alert(` ${today1} \n ${today2} \n ${today3} \n ${today4} `)
};

// Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are x, y and z

function calculaArea(){
  let baseTri= prompt("Escribe la base de tu triángulo (Número Entero o Flotante)");
  let alturaTri= prompt("Escribe la altura de tu triángulo (Número Entero o Flotante)");
  //console.log(`${baseTri} ${alturaTri}`);
  let resultado = (baseTri * alturaTri)/2;
  alert(`El área de tu triangulo es ${resultado}`)

};


//Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front










