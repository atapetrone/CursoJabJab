const inputTarea = document.querySelector(".toDoItemInput");
//console.log(inputTarea);
const listaTareas = document.querySelector(".listaTareas");
//console.log(listaTareas);

function detectarEnter() {
  inputTarea.addEventListener("keyup", function (evento) {
    // console.log(evento.keyCode);
    if (evento.keyCode === 13) {
      //console.log("tecleaste el Enter");
      let nuevaTarea = inputTarea.value;
      let nuevoLi = construyeLi(nuevaTarea);
      listaTareas.appendChild(nuevoLi);
      //console.log(nuevaTarea);
      inputTarea.value = "";
    };
  });
};

function construyeLi(newMsg) {
  let nuevoItem = document.createElement("li");
  nuevoItem.classList.add("itemTarea");
  nuevoItem.innerHTML = `${newMsg}<button class="botonX">x</button>`;
  //console.log(nuevoItem);
  return nuevoItem;
};


function detectaUltarget() {
  listaTareas.addEventListener("click", function (evento) {

      // console.log(evento.target);

      if (evento.target.classList.contains("itemTarea")) {
        evento.target.classList.toggle("done");
      } else if (evento.target.classList.contains("botonX")) {
        evento.target.parentElement.remove();
      };
    
    });

  };







  detectaUltarget();
  detectarEnter();