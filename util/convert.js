exports.toC = function (temp) {
    return (temp - 273.15).toFixed(1);
}

exports.toF = function (temp) {
    return ((temp - 32) * 5 / 9 + 32).toFixed(1);
}


