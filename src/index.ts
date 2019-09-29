import { Person } from './interfaces'

const sayName = ({ name, age }: Person): string => {
    console.log(name)
    return name
};


//generics

const outputInput = <T>(arg: T): T => {
    return arg
}

const output: string = outputInput("Hi");
outputInput(2);

//Duck Type - "looks like a duck walks like a duck"

class Dancer implements Person {
    name: string;
    age: number;
};

let ElNino: Person = new Dancer();

const fake = {
    name: "Sean"
}

ElNino = fake;