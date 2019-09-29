"use strict";
exports.__esModule = true;
var interfaces_1 = require("./interfaces");
// Code below will work because the ? after age in the interface allows age to be optional
// const sayName = ({name, age}: Person): Person => {
//     console.log(name)
//     return {name, age}
// }
// sayName({
//     name: "Sean",
// });
//Enum
//Numeric Enum
var createContent = function (contentType) { };
createContent(interfaces_1["default"].Quiz);
createContent(0);
console.log(interfaces_1["default"].Quiz);
//String Enum
var createContent2 = function (contentType) { };
createContent(interfaces_1["default"].Quiz);
//Wont work because its not the exact same thing as what Quiz is equal to
// createContent("QUIZ");
console.log(interfaces_1["default"].Quiz);
