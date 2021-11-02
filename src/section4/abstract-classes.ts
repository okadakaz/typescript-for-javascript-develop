export {};

abstract class Animal {
    abstract cry(): string;
}

class Lion extends Animal {
    cry(){
        return 'Roar!!!';
    }
}

class Tiger extends Animal {
    cry(){
        return 'Grrr!!!!';
    }
}

