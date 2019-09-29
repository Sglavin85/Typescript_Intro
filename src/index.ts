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

