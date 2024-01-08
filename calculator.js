
exports.add = function(a, b) {
    return a + b;
}

exports.subtract = function(a, b) {
    return a - b;
}

exports.multiply = function(a, b) {
    return a * b;
}

exports.divide = function(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

