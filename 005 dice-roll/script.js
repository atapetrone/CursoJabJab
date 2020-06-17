const botonDado = document.querySelector('button');
const elDadoVar= document.querySelector('.elDado');
//console.log(elDadoVar);

// console.log(resultaDeLanzada);


botonDado.addEventListener('click', function(){
  let resultaDeLanzada = Math.floor((Math.random()*6)+1);
  
  

  elDadoVar.innerHTML = `<p class="resultadoDado">${resultaDeLanzada}</p>`;


  

});



// elDadoVar.innerHTML = `<p class="resultadoDado">2</p>`;