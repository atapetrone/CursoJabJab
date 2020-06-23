const inputNuevoToDo = document.querySelector('.inputNuevoTodo');
//console.log(inputNuevoToDo);
const ulTareas = document.querySelector(".listadoTodo");
//console.log(ulTareas);

function detectarEnter() {

  inputNuevoToDo.addEventListener('keyup', function (evento) {

    if (evento.keyCode == 13) {

      mensaje = inputNuevoToDo.value;
      //console.log(mensaje);
      let liCreado = crearLi(mensaje);
      //console.log(liCreado);
      ulTareas.appendChild(liCreado);
      inputNuevoToDo.value = "";
    };

    //console.log(evento.keyCode);
    //console.log('diste un enter'); 


  });

};

function crearLi(msg) {

  let nuevoLi = document.createElement('li');
  nuevoLi.classList.add('cadaTodoItem');
  nuevoLi.innerHTML = `${msg}<button class="botonX">x</button>`;
  return nuevoLi;

};


function detectarUl() {
  ulTareas.addEventListener('click', function (evento) {
    //console.log(evento.target);
    if (evento.target.classList.contains("cadaTodoItem")) {
      evento.target.classList.toggle("done");
    } else if (evento.target.classList.contains("botonX")) {
      evento.target.parentElement.remove();
    };
  });
};


detectarUl();
detectarEnter();