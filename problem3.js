function sortMaker(arr) {

    // if (arr.length !== 2) {
    //     return "Error";
    // }
    let num1 = arr[0];
    let num2 = arr[1];

    if (num1 < 0 || num2 < 0) {

        return "Invalid Input"

    } else if (num1 === num2) {

        return "equal";

    } else if (num1 > num2) {

        return [num1, num2];

    } else{
        return [num2, num1];
    }
}

let number = [10, 16, 18];
let total = sortMaker(number)
console.log(total)