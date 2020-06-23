const botonRollEle = document.querySelector('.botonRoll');
const imagenDadoEle = document.querySelector('.imagenDado');
//console.log(botonRollEle);
//console.log(imagenDadoEle);

function rodarLosDados(){

botonRollEle.addEventListener("click",function(){

let audioDado = new Audio('sounds/dice.mp3');
audioDado.play();

//console.log("hiciste click");
let numeroDelDado = numeroRandom();
console.log(numeroDelDado);

imagenDadoEle.src= `images/dice${numeroDelDado}.png`;
//console.log(imagenDadoEle);

});


};

function numeroRandom(){
let numRandom= Math.random()
numRandom=(numRandom *6)+1;
numRandom= Math.floor(numRandom);
//console.log(numRandom);
return numRandom;
};



rodarLosDados();