export {};

// const echo = (arg: number):number => {
//     return arg;
// };

// const echo = (arg: string): string => {
//     return arg;
// };

const echo = <T>(arg: T): T => {
    return arg;
};

console.log(echo<number>(100));
console.log(echo<string>('hogehoge'));
console.log(echo<boolean>(true));
console.log(echo<Date>(new Date()));

class Mirror<T> {
    constructor(public value: T) {}

    echo(): T {
        return this.value;
    }
}

console.log(new Mirror<number>(12345).echo());
console.log(new Mirror<string>('hello').echo());
console.log(new Mirror<boolean>(true).echo());