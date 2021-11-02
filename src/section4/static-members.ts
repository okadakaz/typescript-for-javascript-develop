export {};

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = 'John';
    static lastName: string = 'Subaru';

    static work(): string {
        // return "Hey, guys! Are you interedted in TypeScript? Let's dive into TypeScript!!!!"
        return `Hey, guys! This is ${this.firstName}!!! Are you interedted in TypeScript? Let's dive into TypeScript!!!!`
    }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());