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

function fechando() {

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

function calculaArea() {
  let baseTri = prompt("Escribe la base de tu triángulo (Número Entero o Flotante)");
  let lado1Tri = prompt("Escribe la magnitud del primer lado de tu triángulo (Número Entero o Flotante)");
  let lado2Tri = prompt("Escribe la magnitud del segundo lado de tu triángulo (Número Entero o Flotante)");

  console.log(`${typeof baseTri} , ${typeof lado1Tri} , ${typeof lado2Tri}`);

  baseTri = parseInt(baseTri);
  lado1Tri = parseInt(lado1Tri);
  lado2Tri = parseInt(lado2Tri);

  console.log(`${typeof baseTri} , ${typeof lado1Tri} , ${typeof lado2Tri}`);

  let ese = (baseTri + lado1Tri + lado2Tri) / 2;
  //console.log(ese);
  let tripas = ese * ((ese - baseTri) * (ese - lado1Tri) * (ese - lado2Tri));
  let sqrtTri = Math.sqrt(tripas);

  let resultado = sqrtTri;
  alert(`El área de tu triangulo es ${resultado}`)

};


//Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front

function rotaCadena() {
  let stringRotar = prompt("Escribe algo que quieras rotar");
  console.log(stringRotar);
  let cadenaRotarArray = stringRotar.split("");
  let cadenaAlternaArray = stringRotar.split("");

  let countRotar = cadenaRotarArray.length;
  //let i = 0;

  let seleccionHtml2 = document.querySelector(".rotando");
  //console.log(seleccionHtml);
  seleccionHtml2.innerText = stringRotar;

  setTimeout(function () {

    for (let i = 0; i < countRotar; i++) {
      setTimeout(function timer() {

        let chispaLetra = cadenaAlternaArray[i];
        cadenaRotarArray.push(chispaLetra);
        cadenaRotarArray.shift()

        let palabraCongelada = cadenaRotarArray.join("");
        //console.log(palabraCongelada);

        let seleccionHtml = document.querySelector(".rotando");
        //console.log(seleccionHtml);
        seleccionHtml.innerText = palabraCongelada;

      }, i * 300);
    };

  }, 300);
  /* 
    while (i < countRotar) {
      let chispaLetra = cadenaAlternaArray[i];
      cadenaRotarArray.push(chispaLetra);
      cadenaRotarArray.shift()

      let palabraCongelada = cadenaRotarArray.join("");
      console.log(palabraCongelada);

      let seleccionHtml = document.querySelector(".rotando");
      //console.log(seleccionHtml);
      seleccionHtml.innerText = palabraCongelada;

      i++;
    };
   */

};




//  Rotar un mensaje , ejercicio alterno
function animate_string(idRotar) {
  var elementRotar = document.getElementById(idRotar);
  //console.log(elementRotar);
  var textNodeRotar = elementRotar.firstChild; //childNodes[0]; // assuming no other children ... ESTO DA COMO RESULTADO UN OBJETO
  console.log(textNodeRotar);
  console.log(typeof textNodeRotar); // es un objeto de tipo node list
  var textRotar = textNodeRotar.data; //Esto transforma de objeto a string
  //console.log (typeof textRotar);
  //console.log(textRotar);
  setInterval(function () {
    textRotar = textRotar[textRotar.length - 1] + textRotar.substring(0, textRotar.length - 1);
    textNodeRotar.data = textRotar;
  }, 100);
};


function negativo() {

  let numeroPos = prompt("Dame un numero positivo");
  let seleccionHtml7 = document.querySelector('.negativo');
  //console.log (seleccionHtml7);
  let numeroNeg = -numeroPos;
  //console.log (numeroNeg);
  seleccionHtml7.innerText = `El numero negativo es ${numeroNeg} `;
};




function parnon() {
  let numeroEntero = prompt("Dame un numero entero");
  let seleccionHtml8 = document.querySelector('.parnonClass');
  let resultado = numeroEntero % 2;
  let resultado8 = 0;
  if (resultado === 0) {
    resultado8 = "Tu numero es PAR";
  } else {
    resultado8 = "Tu numero es NON";
  }
  seleccionHtml8.innerText = ` ${resultado8}`;
};


function caraCentral() {

  let conjuntoLetras = prompt("Escribe una cadena de caracteres");
  let numLetras = conjuntoLetras.length;
  let resultado9 = numLetras % 2;
  //console.log(`numero de letras: ${numLetras}\nsobrante: ${resultado9} `)
  let entre2 = numLetras / 2;
  let primerCorte;
  let segundoCorte;

  if (resultado9 == 0) {
    primerCorte = entre2 - 1;
    segundoCorte = entre2 + 1;
    //console.log(primerCorte);
    //console.log(segundoCorte);
  } else {
    primerCorte = entre2 - .5;
    segundoCorte = entre2 + .5;
  }

  let palabraCortada = conjuntoLetras.slice(primerCorte, segundoCorte);

  let agarra9 = document.querySelector(".caraClass");

  agarra9.innerText = `El o los caracteres centrales son: "${palabraCortada}"`;

};

//SIGUIENTE EJERCICIO: JADEN CASE


function jadenCase() {
  let mensajeJaden = prompt("Escribe un mensaje para transformarlo en formato JadenCase");
  let mensajeJadenArray = mensajeJaden.split(" ");
  //console.log(mensajeJadenArray);
  let finalJadenArray = [];
  for (let jadenElem of mensajeJadenArray) {


    //console.log(typeof palabraInicial);
    //console.log(palabraInicial);
    let letraInicial = jadenElem.charAt(0)
    let letraFinal = letraInicial.toUpperCase();
    //console.log(letraFinal);
    let palabraFinal = jadenElem;
    palabraFinal = palabraFinal.replace(letraInicial, letraFinal);
    //console.log(palabraFinal);
    finalJadenArray.push(palabraFinal);
    //console.log(finalJadenArray);
  };
  let finalJadenString = finalJadenArray.join(" ")
  console.log(finalJadenString);

  let agarra10 = document.querySelector(".jadenClass");

  agarra10.innerText = finalJadenString;

};


//JADEN CASE:  OTRA VERSIÓN:


function toJadenCase(cadenaJaden2) {
  let wordsJaden2 = cadenaJaden2.split(" ");
  //console.log(wordsJaden2);
  let finalResultJaden2 = [];

  for (let jadenElem2 of wordsJaden2) {
    let resultadoJadenComplem = jadenComplementaria(jadenElem2)
    finalResultJaden2.push(resultadoJadenComplem);
  }
  //console.log(finalResultJaden2);
  return console.log(finalResultJaden2.join(" "));
};

function jadenComplementaria(wordJadenComplemento) {
  let jadenMayusculaCompl = wordJadenComplemento[0].toUpperCase();
  let jadenMinusculasCompl = wordJadenComplemento.slice(1);
  jadenMinusculasCompl = jadenMinusculasCompl.toLowerCase();


  return `${jadenMayusculaCompl}${jadenMinusculasCompl}`

};
//jadenComplementaria("rAce"); //Probando

toJadenCase("hola amIGOS dEl mundo munDIAl (Ejemplo de ejercicio jadenCase)");





// TARTAMUDO

function tartamudo() {
  let msjIniTarta = prompt("Escribe un mensaje para transformarlo en tartamudo"); //  SE RECOLECTA EL MENSAJE
  let msjIniTartaArray = msjIniTarta.split(""); // EL MENSAJE SE CONVIERTE EN UN ARRAY SEPARADO POR CADA LETRA
  let respuestaTarta = []; //SE CREA UN ARRAY VACIO
  let iTarta = -1; // SE CREA UN CONTADOR
  for (let letraTartaEle of msjIniTartaArray) {
    iTarta++; // LOOP DE CADA LETRA DEL ARRAY

    let resultadoArrayMinus = letraTartamuda(letraTartaEle, (iTarta)); //POR CADA LETRA SE EXTRAE LA CADENA DE CARACTERES SEGUN SU POSICION
    //console.log(resultadoArrayMinus);

    let laLetraMayus = letraTartaEle.toUpperCase(); //Aqui se agrega la mayuscula para completar el objetivo
    resultadoArrayMinus.unshift(`-${laLetraMayus}`);
    respuestaTarta = respuestaTarta.concat(resultadoArrayMinus);
  };

  let StringRespuestaTarta = respuestaTarta.join("");
  StringRespuestaTarta = StringRespuestaTarta.slice(1);
  console.log(StringRespuestaTarta);

  let agarraTarta = document.querySelector('.tartaClass');
  agarraTarta.innerText = StringRespuestaTarta;

  //console.log(agarraTarta);

};


function letraTartamuda(letraT, posiT) {
  let minusTarta = letraT.toLowerCase();
  let minusArray = [];
  for (let eTarta = 0; eTarta < posiT; eTarta++) {
    if (minusTarta !== " ") {
      minusArray.push(minusTarta);
    };
  };
  return minusArray
};

// Un año es bisiesto si cumple los siguientes criterios:
/* 
Es bisiesto si es divisible entre 4.
Pero no es bisiesto si es divisible entre 100.
Pero sí es bisiesto si es divisible entre 400. (2000 y 2400 sí son bisiestos son divisibles entre 100 pero también entre 400. 1900, 2100, 2200 y 2300 no lo son porque solo son divisibles entre 100). 
*/

function bisiesto() {
  let anioPorAnalizar = prompt("Danos un año para analizar toda la decada alredor. (Cuatro dígitos")
  anioPorAnalizar = parseInt(anioPorAnalizar);
  arrayAnios = [];
  let resultPorAnio;
  for (i = -5; i <= 5; i++) {
    arrayAnios.push(anioPorAnalizar + i);
  };
  //let agarraBisi;
  let eBisi = 1;
  for (let anio of arrayAnios) {

    resultPorAnio = bisiestoA(anio);

    let agarraBisi = document.querySelector(`#bisiClass${eBisi}`);
    agarraBisi.innerText = `${anio} ${resultPorAnio}`;
    //console.log (agarraBisi);

    eBisi++;

    //console.log(`${anio} ${resultPorAnio} ${eBisi}`);
  };
};

function bisiestoA(year) {
  let prueba1 = false;
  let prueba2 = false;
  let prueba3 = false;
  let resultado = "NO ES BISIESTO";
  if (year % 4 == 0) {
    prueba1 = true;
  };
  if (year % 100 == 0) {
    prueba2 = true;
  };
  if (year % 400 == 0) {
    prueba3 = true;
  };
  if (prueba1 == true && prueba2 == true && prueba3 == true) {
    resultado = "SI ES BISIESTO";
  } else if (prueba1 == true && prueba2 == false) {
    resultado = "SI ES BISIESTO";
  };
  return resultado;
};



function maximo() {
  let cadenaGrupoNum = prompt('Escribe numeros separados con una coma Ejemplo: 23,45,33,22,3');
  let arrayGrupoNum = cadenaGrupoNum.split(",");

  for (let maxEle of arrayGrupoNum) {

    for (submax of arrayGrupoNum) {
      let numSubmax = parseInt(submax);
      if (numSubmax > maxEle) {
        var respuestaMax = numSubmax;
      };
    };

  };

  let agarraMax = document.querySelector('.maxiClass');
  agarraMax.innerText = respuestaMax;
  //console.log(respuestaMax);
};




function domingo() { // Se modifico a lunes pero  las variables se manejaron como domi y la funcion se llama domingo por que originalmente se buscaron los domingos.

  let countYear = 2020;
  let strDomi = "";
  let divDomi = document.querySelector('.domiClass');

  while (countYear <= 2060) {
    let fechaDomi = new Date(countYear, 0, 1);
    if (fechaDomi.getDay() === 1) { // Si quisieramos buscar domingos habría que poner un 0
      let phrase = `El año cuando ocurre este fenómeno es ${countYear} y la fecha exacta es: <br> ${fechaDomi}.`;
      strDomi += `${phrase}<br>--------------------------------------------------------------------------------<br>`;
      divDomi.innerHTML = strDomi;
    };
    countYear++;
  };

};

function cuadrado() {

  let cadenaCuad1 = prompt("Escribe una serie de numeros sin espacio entre ellos");
  let cuadArray = cadenaCuad1.split("");
  let resultCuadArray = [];
  //console.log(cuadArray);

  for (let stringCuad of cuadArray) {
    let digitoCuad = parseInt(stringCuad);
    let cuadradoRes = Math.pow(digitoCuad, 2);
    //console.log (cuadradoRes);
    resultCuadArray.push(cuadradoRes);
  };

  //console.log(resultCuadArray);
  let resultCuadString = resultCuadArray.join("");
  //console.log (resultCuadString);

  let agarraHtmlCuad = document.querySelector('.cuadClass');
  agarraHtmlCuad.innerText = resultCuadString;

};

function xxoo() {

  let inicioXxoo = prompt('Da un grupo de caracteres principalmente compuesto por "x" y "o" ');
  let xxooArray = inicioXxoo.split("");
  let countX = 0;
  let countO = 0;

  for (let carXxoo of xxooArray) {
    if (carXxoo === "x" || carXxoo === "X") {
      countX++;
    } else if (carXxoo === "o" || carXxoo === "O") {
      countO++;
    }
  };

  //console.log(countX);
  //console.log(countO);
  let resultadoXxoo = `El número de X y de O son diferentes. Para O tenemos ${countO} y para X tenemos ${countX}`;

  if (countX === 0 && countO === 0) {
    resultadoXxoo = `No escribiste ninguna X y ninguna O. Para O tenemos ${countO} y para X tenemos ${countX}`;
  } else if (countX === countO) {
    resultadoXxoo = `El número de X y de O son iguales. Para O tenemos ${countO} y para X tenemos ${countX}`;
  };

  let agarraXxoo = document.querySelector('.xxooClass');
  agarraXxoo.innerText = resultadoXxoo;

};


function meGusta() {

let likePersonas = prompt("Escribe el nombre de las personas separadas con una coma");

let personasArray = likePersonas.split(',');
console.log(personasArray);

let numeroPersonas = personasArray.length
console.log (numeroPersonas);
if (numeroPersonas>=1 && numeroPersonas<=3){ 
  let agarraLike = document.querySelector('.meGustaClass');
  agarraLike.innerText = `a ${personasArray} les gusta esto`;
} else if (numeroPersonas>3){
  let agarraLike = document.querySelector('.meGustaClass');
  agarraLike.innerText = `a ${personasArray[0]}, ${personasArray[1]} y otras ${numeroPersonas-2} personas les gusta esto`;
}else{ 
  let agarraLike = document.querySelector('.meGustaClass');
  agarraLike.innerText = `a nadie les gusta esto :()`;
};







};