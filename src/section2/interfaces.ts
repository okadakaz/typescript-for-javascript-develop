export {};

type ObjectType = {
    name: string; 
    age:number;
};

interface ObjectInterface {
    name: string; 
    age:number;
};

let object: ObjectType = {
    name: 'Ham',
    age: 42
}

let object2: ObjectInterface = {
    name: 'Ham',
    age: 42
}