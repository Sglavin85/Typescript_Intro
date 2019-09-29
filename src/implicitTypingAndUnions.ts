//Implicit typing
let newName = "Sean";
newName = "John";
// newName = 10;


//Implicit typing through variables - type is given from the initial value of the variable.
let newNameTwo = newName;
// newNameTwo = 5;


//Union types with a | - must be explicit
const makeMargin = (x: number | string): string => {
    return `margin is equal to ${x}px`
}

makeMargin(10);
makeMargin("Sean");

//Null Types - null and undefined are data types that are unioned with all types by default - can be change in configuration options

let dog: string;
dog = "Lucy"
dog = null
dog = undefined