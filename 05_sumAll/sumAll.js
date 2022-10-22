const sumAll = function(a, b) {
    if (typeof a != 'number' || typeof b != 'number') {
        return "ERROR";
    }

    if (a < 0 || b < 0) {
        return "ERROR";
    }
    
    let sum = 0;
    let min = 0;
    let max = 0;
    if (a < b) {
        min = a;
        max = b;
    }
    else if (a > b) {
        min = b;
        max = a;
    }
    else {
        return a;
    }

    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
