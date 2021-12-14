//Ch. 11: Further Functions
"strict mode";

const ageValidator = (msg) => {
    let age;
    try {
        if (msg) age = prompt(msg);
        else age = prompt("introduce your age");
        age = parseInt(age);
        if (isNaN(age)) throw "introduce a number, please";
        if (age > 21) console.log("your age is legal");
        else console.log("your age is not legal");
    } catch (e) {
        ageValidator(e)
    }
}

ageValidator();

