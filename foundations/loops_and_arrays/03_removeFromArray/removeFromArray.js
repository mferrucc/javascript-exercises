const removeFromArray = function(arr, ...args) {
    
    let newArray = [];

    arr.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    arr = newArray;
    return arr;
    
};

// Do not edit below this line
module.exports = removeFromArray;
