//Access-multi-dimensional-arrays-with-indexes
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var myData = myArray[2][1];

//********************************************************/
// Manipulating arrays with pop, push, shift & unshift
var myArray = [["John", 23], ["cat", 2]];
console.log(myArray);
var removedFromMyArray = myArray.pop();
console.log(myArray);
console.log(removedFromMyArray);

var myArray = [["John", 23], ["cat", 2]];
console.log(myArray);
myArray.push(["dog",3]);
console.log(myArray);

var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();

var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
console.log(myArray);
myArray.unshift(["Paul",35]);
console.log(myArray);


//********************************************************/
//Global and local scope of funcionsvar myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}