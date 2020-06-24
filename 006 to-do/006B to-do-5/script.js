const inputTarea = document.querySelector('.inputTareaClass');
//console.log(inputTarea);
const listaTareas = document.querySelector('.listaTareasUl');
const botonX = document.querySelector('.botonX');
const botonEdit = document.querySelector('.edicion');

function detectaEnter() {

  inputTarea.addEventListener('keyup', function (evento) {
    //console.log(evento.keyCode);
    if (evento.keyCode === 13) {
      let mensaje = inputTarea.value;
      let liCreado = crearLi(mensaje);
      listaTareas.appendChild(liCreado);
      inputTarea.value = "";
    };
  });
};


function crearLi(msg2) {
  let nuevoLi = document.createElement("li");
  nuevoLi.classList.add("tareaLi");
  nuevoLi.innerHTML = `${msg2}<button class="botonX">x</button><button class="edicion">edit</button>`
  //console.log(nuevoLi);
  return nuevoLi;
};


detectaEnter();