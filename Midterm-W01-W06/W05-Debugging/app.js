// Using typeof to Check the Type of a Variable
let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);


//Catching Mixed Usage of Single and Double QuotesPassed
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);


//Catching Use of Assignment Operator Instead of Equality OperatorPassed
let x = 7;
let y = 9;
let result = "to come";
if (x === y) {
    result = "Equal!";
} else {
    result = "Not equal!";
}
console.log(result);


//Catching Arguments Passed in the Wrong Order When Calling a FunctionPassed
function raiseToPower(b, e) {
    return Math.pow(b, e);
}
let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);


//Preventing Infinite Loops 
function myFunc() {
    for (let i = 1; i <= 4; i += 2) {
        console.log("Still going!");
    }
}


//Taking Caution When Reinitializing Variables Inside a Loop
function zeroArray(m, n) {
    // Creates a 2-D array with m rows and n columns of zeroes
    let newArray = [];
    let row = [];
    for (let i = 0; i < m; i++) {
        // Adds the m-th row into newArray
        row = [];
        for (let j = 0; j < n; j++) {
            // Pushes n zeroes into the current row to create the columns
            row.push(0);
        }
        // Pushes the current row, which now has n zeroes in it, to the array
        newArray.push(row);
    }
    return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);