const removeFromArray = function(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        for (let j = 1; j < arguments.length; j++) {
            if (myArray[i] === arguments[j]) {
                myArray.splice(i, 1);
                i--;
            }
        }
    }
    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
