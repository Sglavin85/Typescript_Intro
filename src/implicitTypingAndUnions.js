//Implicit typing
var newName = "Sean";
newName = "John";
// newName = 10;
//Implicit typing through variables - type is given from the initial value of the variable.
var newNameTwo = newName;
// newNameTwo = 5;
//Union types with a | - must be explicit
var makeMargin = function (x) {
    return "margin is equal to " + x + "px";
};
makeMargin(10);
makeMargin("Sean");
//Null Types - null and undefined are data types that are unioned with all types by default - can be change in configuration options
var dog;
dog = "Lucy";
dog = null;
dog = undefined;
