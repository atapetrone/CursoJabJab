const cajaInput = document.querySelector(".inputTodo");
//console.log(cajaInput);
const ulTodo = document.querySelector('.ulEstilo');
//console.log(ulTodo);
const botonX = document.querySelector('.botonX');

function detectaEnter() {
  cajaInput.addEventListener("keyup", function (event) {

    if (event.keyCode === 13) {
      let nuevaTarea = cajaInput.value;
      console.log(nuevaTarea);
      let inyeccion = crearItem(nuevaTarea);
      ulTodo.appendChild(inyeccion);
      cajaInput.value = "";
    }
  });
};

function crearItem(msg) {
  let nuevoItem = document.createElement("li");
  nuevoItem.classList.add("marcaItem");
  //nuevoItem.textContent=msg;
  nuevoItem.innerHTML = `${msg}<button class="botonX">x</button>`;
  console.log(nuevoItem);
  return nuevoItem;
};


function marcandoDone() {
  ulTodo.addEventListener('click', function (evento) {
    if (evento.target.classList.contains('marcaItem')) {
      evento.target.classList.toggle("done");
    } else if (evento.target.classList.contains ('botonX')) {
    evento.target.parentElement.remove();
    };
  });
};



// function eliminandoDone() {
//   botonX.addEventListener("click#, function(evento){


//   });
// };



// eliminandoDone();
marcandoDone();
detectaEnter();