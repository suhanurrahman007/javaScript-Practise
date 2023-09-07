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

let takaArray = [1, 2, 5]
let cpTaka = 10;

let output = canPay(takaArray, cpTaka)
console.log(output)
