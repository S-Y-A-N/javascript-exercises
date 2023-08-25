const sumAll = function(num1, num2) {
    if(num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number") {
        // console.log(`num1 negative = ${num1 < 0} \n
        // num2 negative = ${num2 < 0} \n
        // num1 Nan = ${typeof num1 !== "number"} \n
        // num2 Nan = ${typeof num2 !== "number"}`)

        return 'ERROR';
    }

    let sum = 0;
    let startNum = (num1 < num2) ? num1 : num2;
    let endNum = (num1 < num2) ? num2 : num1;

    for(let i = startNum; i <= endNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
