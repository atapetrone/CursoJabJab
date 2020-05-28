let bodyElem= document.querySelector("body");
console.log(bodyElem);
let divElem= document.querySelector("div");
console.log(divElem);
let h1Elem= document.querySelector("h1");
console.log(h1Elem);
let aElem= document.querySelectorAll("a");
//console.log(aElem.length);



bodyElem.style.backgroundColor = "#fffbf0";
bodyElem.style.margin = "0";
bodyElem.style.padding = "0";
bodyElem.style.fontFamily = '-apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif';
/* 
body {
  background-color: #f0f0f2;
  margin: 0;
  padding: 0;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
*/

divElem.style.width = "600px"
divElem.style.margin = "5em auto"
divElem.style.padding = "2em"
divElem.style.backgroundColor = "#fdfdff"
divElem.style.borderRadius = "0.5em"
divElem.style.boxShadow = "2px 3px 7px 2px rgba(0,0,0,0.02)"
/* 
div {
  width: 600px;
  margin: 5em auto;
  padding: 2em;
  background-color: #fdfdff;
  border-radius: 0.5em;
  box-shadow: 2px 3px 7px 2px rgba(0,0,0,0.02);
}
*/

h1Elem.style.textAlign ="center";
/* 
h1 {
  text-align: center;
}
*/


for(let i=0; i<aElem.length; i++){
console.log(aElem[i]);

aElem[i].style.color = "#38488f";
aElem[i].style.textDecoration="none";

};
