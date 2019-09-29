import { Person } from './src/interfaces'

const sayName = ({ name, age }: Person): string => {
    console.log(name)
    return name
};