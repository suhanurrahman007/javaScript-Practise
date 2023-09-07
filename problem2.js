function matchFinder(string1, string2) {

    if (typeof string1 !== 'string' || typeof string2 !== 'string') {

        return 'Please Input Two Strings.';
    }

    else if (string1.includes(string2)) {

        return true;

    } else {

        return false;
    }
}

let value1 = (matchFinder("John Doe", "ohn"))
let value2 = (matchFinder("Peter Parker", "pet"))
let value3 = (matchFinder(45, 45))

console.log(value1)
console.log(value2)
console.log(value3)


