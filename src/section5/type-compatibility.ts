export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;

console.log(typeof fooCompatible);

let fooIncompatible: string;
let varIncompatible: number = 1;

// fooIncompatible = varIncompatible;

let fooString: string;
let varString: string = 'string';
fooString = varString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
    age: number;
    name: string;
}

class Person {
    constructor(public age: number, public name: string){}
}

let me: Animal;
me = new Person(19, 'John');