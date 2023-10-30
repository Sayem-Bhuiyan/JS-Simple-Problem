function feetToInch(feet){
    let inch = feet * 12;
    return inch;
}

let feetNumber = 5.8;
let inchNumber = feetToInch(feetNumber);
console.log(inchNumber);