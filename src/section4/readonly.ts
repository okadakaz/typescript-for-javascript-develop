export {};

class VisaCard {
    constructor(public readonly owner: string){}
}

let myVisaCard = new VisaCard('John');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'Ted';