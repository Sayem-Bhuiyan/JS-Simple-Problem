// function bestFriend(arr){
//     let maxChar = arr[0];

//     for( let i = 0; i <= arr.length; i++){
//         let element = arr[i];
//         let newElement = element.length;
//         if ( newElement > maxChar.length) {
//             maxChar = element;
//         }
        
//     }
//     return maxChar;
// }

// let friendNames = ['Sayem Bhuiyan', 'Shajib Sarker', 'Ashraful Islam Akash', 'Tipu Sultan'];
// let longName = bestFriend(friendNames);
// console.log(longName);


function bestFriend(arr){
    let maxChar = arr[0];
    for( let i = 0; i < arr.length; i++){
        let element = arr[i];
        if(maxChar.length < element.length){
            maxChar = element;
        }
    }
    return maxChar;
}

const friendNames = ['Sayem', 'Akash', 'Shajib', 'Tipu'];

const longName = bestFriend(friendNames);
console.log(longName);