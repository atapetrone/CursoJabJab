//Count Vowels

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