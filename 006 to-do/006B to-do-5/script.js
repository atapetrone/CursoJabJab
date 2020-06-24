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

function detectaListaUl() {
  listaTareas.addEventListener('click', function (evento2) {
    if (evento2.target.classList.contains("tareaLi")) {
      evento2.target.classList.toggle("done");
    } else if (evento2.target.classList.contains("botonX")) {
      if(confirm('¿Desea borrar esta tarea?')){
        evento2.target.parentElement.remove();
      };
    } else if (evento2.target.classList.contains("edicion")) {
      let remensaje = prompt("Escribe la tarea");
      evento2.target.parentElement.innerHTML=`${remensaje}<button class="botonX">x</button><button class="edicion">edit</button>`;
      //console.log(remensaje);
    };
  });
};

detectaListaUl();
detectaEnter();