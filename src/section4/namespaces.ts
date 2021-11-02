export {};

namespace Japanese {
    export namespace Tokyo {
        export class Person {
            constructor(public name: string){
            }
        }
    }
    export namespace Osaka {
        export class Person {
            constructor(public name: string){
            }
        }
    }
}

namespace English {
    export class Person {
        constructor(
            public firstName:string, 
            public middleName:string, 
            public lastName: string
        ){}
    }
}

const me = new Japanese.Tokyo.Person('John');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('JohnYan');
console.log(meOsaka.name);

const ted = new English.Person('Ted', 'Sam', 'Baker')
console.log(ted.firstName + " " + ted.lastName);
console.log(ted);

