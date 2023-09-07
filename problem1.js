function cubeNumber(number) {

    if (number > 0 && typeof number === 'number') {

        // let result = Math.pow(number, 3);
        let result = number * number * number;
        return result;
        
    } else {

        return "Invalid Input";
    
    }

}

console.log(cubeNumber(0));