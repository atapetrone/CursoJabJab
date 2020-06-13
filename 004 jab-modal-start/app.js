const botonParaModal = document.querySelector(".trigger");
const elModal = document.querySelector(".modal");
const elTache = document.querySelector(".close");

function principal() {

  botonParaModal.addEventListener("click", function () {
    elModal.classList.add("open");
  });

  elTache.addEventListener("click", function () {
    elModal.classList.remove("open");
  });


  window.addEventListener("click", function (evento) {
    
    //console.log(evento.target); //Este ejercicio nos permite ver en donde esta picando cada click ... por lo tanto usaremos este descubrimiento para remover open solo cuando haga click en modal tal como pudimos comprobar

    if (evento.target === elModal) {
      elModal.classList.remove("open");
    };

  })


};




principal();