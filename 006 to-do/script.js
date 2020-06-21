const inputEle = document.querySelector("input");
//console.log(inputEle);
const ulEle = document.querySelector(".ulTodo");
//console.log(ulEle);
const ilEles = document.querySelectorAll(".itemTodo");



function teclaEnter() {
  inputEle.addEventListener('keydown', function (event) {
    //console.log(event);
    let codigoTecla = event.keyCode
    if (codigoTecla === 13) {
      //console.log("oprimiste Enter");
      let mensaje = inputEle.value;
      //console.log(mensaje);
      inputEle.value = "";
      let nuevoLiResult = creandoLi(mensaje);
      //console.log(nuevoLiResult);
      ///ulEle.appendChild(nuevoLiResult);///Aca inserta al ultimo de la lista... a continuación usaremos "insertBefore" para que ponga el nuevo elemento antes de los demás

      ulEle.insertBefore(nuevoLiResult,ulEle.firstElementChild);
      ///La siguiente linea inyecta y activa los listeners para reaccionar cuando hagan falta
    };
  });
};


function creandoLi(texto) {
  let nuevoLi = document.createElement('li');
  nuevoLi.className = "itemTodo";
  //nuevoLi.textContent = texto;
  nuevoLi.innerHTML= `${texto}<button class="botonX">X</button>`
  //console.log(nuevoLi);
  return nuevoLi;
};




function elEventoDone() {
  ulEle.addEventListener("click", function (evento) {
    // console.log(evento.target);
    
    if(evento.target.classList.contains('itemTodo')){
    evento.target.classList.toggle("done"); 
    };
    
    if(evento.target.classList.contains('botonX')){
      console.log(evento.target.parentElement);
      evento.target.parentElement.remove();
      };
    
    

  });
};






teclaEnter();
elEventoDone();