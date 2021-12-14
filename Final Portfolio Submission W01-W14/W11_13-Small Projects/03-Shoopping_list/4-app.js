//*************/
//Starting ideas
//***********/
// var button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function () {
//   console.log("clicked!!!");
// });

//other options: mouseenter, mouseleave...

//*************/
//Code without refractoring
//***********/
// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// button.addEventListener("click", function () {
//   if (input.value.length > 0) {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
//   }
// });

// input.addEventListener("keypress", function (event) {
//   //console.log(event);
//   if (input.value.length > 0 && event.keyCode === 13) {
//     //charCode, keyCode, which
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
//   }
// });

//***************/
//Refractored code
//***************/
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeyPress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);

//charCode, keyCode, which === 13
