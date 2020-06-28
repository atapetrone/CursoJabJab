const inputTarea = document.querySelector('.inputTarea');
const ulLista = document.querySelector('.listaTareas');
const botonImprimir = document.querySelector('.impresion');
const apunte = [];

function detectaEnter(cuentaEnter) {
  inputTarea.addEventListener("keyup", function (evento) {
    if (evento.keyCode === 13) {
      let mensaje = inputTarea.value;
      apunte.push(cuentaEnter);
      let cuentaDE = apunte.length;
      //console.log(cuentaDE);
      let nuevoLi = crearLi(mensaje, cuentaDE);
      ulLista.insertBefore(nuevoLi, ulLista.firstElementChild);
      inputTarea.value = "";
    };

  });
};

function crearLi(texto, numero) {
  let liCreado = document.createElement('li');
  liCreado.classList.add("tarea");
  //numero =numero+1;
  //console.log(numero);
  liCreado.classList.add(`cuenta${numero}`)
  
  //console.log(texto);
   
  if (texto == ''||texto==' ') {
    texto = "..."
  };


  liCreado.innerHTML = `${texto} <button class="botonX">x</button><button class="botonEdit">edit</button><button class="botonSwap">swap</button>`;
  //console.log(liCreado);
  return liCreado;
};





function doneLi() {
  ulLista.addEventListener('click', function (eventoUl) {
    if (eventoUl.target.classList.contains("tarea")) {
      // console.log(eventoUl.target);
      eventoUl.target.classList.toggle("done");
      eventoUl.target.firstElementChild.classList.toggle("botonDone");
      eventoUl.target.firstElementChild.nextSibling.classList.toggle("botonDone");
      eventoUl.target.firstElementChild.nextSibling.nextSibling.classList.toggle("botonDone");
    };
  });
};



function botones(nume) {
  //console.log(nume);
  ulLista.addEventListener('click', function (eventoBot) {

    if (eventoBot.target.classList.contains("botonX")) {
      if (confirm('¿Quiere borrar esta tarea?')) {
        eventoBot.target.parentElement.remove();
      };

    } else if (eventoBot.target.classList.contains("botonEdit")) {
      let textoPorEditar = eventoBot.target.parentElement.innerText;
      let corte = textoPorEditar.indexOf(`\n`);
      let cortado = textoPorEditar.slice(0, corte);
      let remensaje = prompt("Escribe la tarea", cortado);
      let elcero = remensaje.length
      if (remensaje != null) {
        if (elcero != 0) {
          eventoBot.target.parentElement.innerHTML = `${remensaje} <button class="botonX">x</button><button class="botonEdit">edit</button><button class="botonSwap">swap</button>`;
        } else {
          eventoBot.target.parentElement.innerHTML = `${remensaje}... <button class="botonX">x</button><button class="botonEdit">edit</button><button class="botonSwap">swap</button>`;
        };
      };

    } else if (eventoBot.target.classList.contains("botonSwap")) {
      //console.log(eventoBot.target.parentElement.classList[1]);
      let elCorrecto = eventoBot.target.parentElement.classList[1];
      let textoPorSubir = eventoBot.target.parentElement.innerText;
      let corte3 = textoPorSubir.indexOf(`\n`);
      let cortado3 = textoPorSubir.slice(0, corte3);
      apunte.push(nume);
      //console.log(apunte);
      let cuentaBS = apunte.length;
      //console.log(cuentaBS);
      let liSubiendo = crearLi(cortado3, cuentaBS);

      for (let vari = 0; vari < cuentaBS - 1; vari++) {
        //console.log('Hola amigos');
        let dePasadita = ulLista.children[vari];
        let elCorrecto2 = dePasadita.classList[1];
        if (elCorrecto == elCorrecto2) {
          ulLista.insertBefore(liSubiendo, ulLista.children[vari - 1]);
          break;
        };
      }
      eventoBot.target.parentElement.remove();
    };
  });

  ulLista.addEventListener('contextmenu', function (eventoBot3) {
    eventoBot3.preventDefault();
  });

  ulLista.addEventListener('auxclick', function (eventoBot2) {
    let elCorrectoA = eventoBot2.target.parentElement.classList[1];
    if (eventoBot2.target.classList.contains("botonSwap")) {
      let textoPorBajar = eventoBot2.target.parentElement.innerText;
      let corte2 = textoPorBajar.indexOf(`\n`);
      let cortado2 = textoPorBajar.slice(0, corte2);
      apunte.push(nume);
      //console.log(apunte);
      let cuentaAux = apunte.length;
      //console.log(cuentaAux);
      let liBajando = crearLi(cortado2, cuentaAux);


      for (let vari2 = 0; vari2 < cuentaAux - 1; vari2++) {
        //console.log('Hola amigos');
        let dePasadita2 = ulLista.children[vari2];
        let elCorrecto3 = dePasadita2.classList[1];
        if (elCorrectoA == elCorrecto3) {
          ulLista.insertBefore(liBajando, ulLista.children[vari2 + 2]);
          break;
        };
      }
      //ulLista.appendChild(liBajando);
      eventoBot2.target.parentElement.remove();
    };
  });

};

function imprimiendo(){
botonImprimir.addEventListener('click', function(){
window.print();
});
};


imprimiendo();
totalIncrem = botones(1);
doneLi();
totalIncrem = detectaEnter(1);