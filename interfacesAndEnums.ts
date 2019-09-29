import Type, { Type2 } from './src/interfaces'
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

const createContent = (contentType: Type) => { };
createContent(Type.Quiz);
createContent(0);

console.log(Type.Quiz)


//String Enum



const createContent2 = (contentType: Type2) => { };
createContent(Type.Quiz);
//Wont work because its not the exact same thing as what Quiz is equal to
// createContent("QUIZ");

console.log(Type.Quiz)