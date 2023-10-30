

function positiveNumber(arr){
    let newNumbers = [];
    for ( let i = 0; i < arr.length; i++){
        let element = arr[i];
        if(element > -1 && element > 0){
            newNumbers.push(element);
        }
        else {
            break;
        }
    }
    return newNumbers;
}
let Numbers = [23, 43, 2, 43, 54, -3, 23, 54, -87];
const newArray = positiveNumber(Numbers);
console.log(newArray);