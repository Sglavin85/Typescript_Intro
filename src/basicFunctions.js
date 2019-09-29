//FXs in typescript
//? for optional params
var sayWord1 = function (word) {
    console.log(word || "Hello");
    return word || "Hello";
};
sayWord1("Sean");
sayWord1();
//Default Params
var sayWord = function (word) {
    if (word === void 0) { word = "Hello"; }
    var otherStuff = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherStuff[_i - 1] = arguments[_i];
    }
    console.log(otherStuff);
    return word;
};
sayWord("Sean");
sayWord("Sean", "John", "Bolivar");
