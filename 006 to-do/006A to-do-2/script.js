const cajaInput = document.querySelector(".inputTodo");
console.log(cajaInput);
const ulTodo = document.querySelector('.ulEstilo');
console.log(ulTodo);

function detectaEnter() {
  cajaInput.addEventListener("keyup", function () {
    
    console.log("ha hecho click");

  });
};
detectaEnter();