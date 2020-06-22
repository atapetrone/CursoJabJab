const botoncillo = document.querySelector(".dice__trigger");
console.log(botoncillo);
const dadillo = document.querySelector(".dice__image");
console.log (dadillo);

botoncillo.addEventListener('click', function(){
  let resultaDeLanzada = Math.floor((Math.random()*6)+1);
console.log(resultaDeLanzada);  
  //elDadoVar.innerHTML = `<p class="resultadoDado">${resultaDeLanzada}</p>`;
  dadillo.src = `images/dice${resultaDeLanzada}.png`;

let audioDado = new Audio('sounds/dice.mp3');
audioDado.play();


});