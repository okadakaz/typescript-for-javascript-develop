export {};

class Person{
    constructor(public name:string, protected age:number){}
}

const me = new Person('John', 39);
console.log(me);