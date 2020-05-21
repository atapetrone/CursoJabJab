//Count Vowels
//Version1

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


//Version 2

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


//Versión 3
//for let of

function countV3(cadena3) {
  let vocales3 = "aeiouAEIOU";
  let contador3 =0;
  for (let elem of cadena3) {
    if (vocales3.includes(elem)) {
      contador3++;
    };
  };
return contador3;
};

console.log(countV3('hola amigones aaa') );