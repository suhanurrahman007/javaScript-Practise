function cubeNumber(number) {
    if (number > 0 && typeof number === 'number') {
        // let result = Math.pow(number, 3);
        let result = number * number * number;
        return result;
    } else {
        return "Invalid Input";
    }
}

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Please Input Two Strings.';
    } else if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
}

function sortMaker(arr) {
    // if (arr.length !== 2) {
    // return "Error";
    // }
    let num1 = arr[0];
    let num2 = arr[1];
    if (num1 < 0 || num2 < 0) {
        return "Invalid Input"
    } else if (num1 === num2) {
        return "equal";
    } else if (num1 > num2) {
        return [num1, num2];
    } else {
        return [num2, num1];
    }
}

function findAddress(obj) {
    let street = obj.street || "__";
    let house = obj.house || "__";
    let society = obj.society || "__";
    let output = street + "," + house + "," + society;
    return output;
    // return `${street},${house},${society}`;
}

function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "This is empty array"
    }
    let tatalTaka = 0;
    for (let i = 0; i < changeArray.length; i++) {
        const element = changeArray[i];
        tatalTaka = tatalTaka + element
    }
    if (tatalTaka >= totalDue) {
        return true;
    } else {
        return false;
    }
}


console.log(cubeNumber(3));

console.log(matchFinder("John Doe", "ohn"))

console.log(sortMaker([10, 16, 18]))

let address = {
    street: "10",
    house: "15A"

};
console.log(findAddress(address));

console.log(canPay([1, 2, 5,6], 10))


function compare(a, b) {
    if (a == b) {
        return true;
    } else {
        return false;
    }
}
const result = compare(15, "15");
console.log(result);            