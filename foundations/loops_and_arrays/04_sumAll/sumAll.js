const sumAll = function(lower, upper) {
    let sum = 0;
    if (!Number.isInteger(lower) || !Number.isInteger(upper)) {
        return 'ERROR';
    }
    if (lower < 0 || upper < 0) {
        return 'ERROR';
    }
    let checkUpper = upper;
    let checkLower = lower;
    if (lower > upper) {
        checkUpper = lower;
        checkLower = upper;
    }
    for (let i = checkLower; i <= checkUpper; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
