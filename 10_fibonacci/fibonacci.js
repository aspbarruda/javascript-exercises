const fibonacci = function(n) {
    if (typeof +n !== 'number' || n <= 0) return 'OOPS';
    let fibonacci = [];
    for (let i = 0; i < n; i++) {
        if (i == 0 || i == 1) {
            fibonacci.push(1);
        }
        else {
            let nextNumber = fibonacci[i - 1] + fibonacci [i - 2];
            fibonacci.push(nextNumber);
        }
    }
    return fibonacci[fibonacci.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
