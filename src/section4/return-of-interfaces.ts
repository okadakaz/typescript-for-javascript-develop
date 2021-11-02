export {};

class Mahotsukai {}
class Souryo {}

class Taro extends Mahotsukai {}

interface Kenja {
    ionazun(): void;
}
interface Senshi {
    kougeki(): void;
}

class John implements Kenja, Senshi {
    ionazun(): void {
        console.log('Ionazun!!!!');
    }
    kougeki(): void {
        console.log('Attack!!!!!');
    }
}

const john = new John();
john.ionazun();
john.kougeki();