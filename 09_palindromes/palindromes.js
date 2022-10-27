const palindromes = function (string) {
    const newString = string.replace(/[^a-z^A-Z]/g, '').toLowerCase();
    let isPalindrome = true;
    for (let i = 0; i < Math.floor(newString.length / 2); i++) {
        if (newString[i] === newString[newString.length - 1 - i]) {
            continue;
        }
        isPalindrome = false;
        break;
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
