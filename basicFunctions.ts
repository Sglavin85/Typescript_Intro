//FXs in typescript
//? for optional params
const sayWord1 = (word?: string): string => {
    console.log(word || "Hello");
    return word || "Hello";
}

sayWord1("Sean");
sayWord1();


//Default Params
const sayWord = (word = "Hello", ...otherStuff: string[]): string => {
    console.log(otherStuff);
    return word;
}

sayWord("Sean");
sayWord("Sean", "John", "Bolivar");
