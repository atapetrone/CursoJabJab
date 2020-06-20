const inputEle = document.querySelector("input");
console.log(inputEle);
const ulEle = document.querySelector(".ulTodo");
console.log(ulEle);



function teclaEnter() {

  inputEle.addEventListener('keydown', function (event) {

    //console.log(event);
    let codigoTecla = event.keyCode
    if (codigoTecla === 13) {
      //console.log("oprimiste Enter");
      let mensaje = inputEle.value;
      //console.log(mensaje);
      inputEle.value = "";
      let nuevoLiResult =creandoLi(mensaje);
      console.log(nuevoLiResult);
      

    };

  });

};


function creandoLi(texto) {

  let nuevoLi = document.createElement('li');
  nuevoLi.className = "itemTodo"
  nuevoLi.textContent = texto;
  //console.log(nuevoLi);
  return nuevoLi;
};

//let nuevoLiResult= creandoLi('hola amigos');
teclaEnter();