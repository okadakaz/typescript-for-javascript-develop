export {};

function bmi(height: number, weight: number){
    return weight / (height * height);
}

console.log(bmi(1.76, 65));
