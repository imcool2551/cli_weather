exports.convert_F = function(obj) {
    obj.temp = (obj.temp - 32) * 5 / 9 + 32;
    obj.temp = obj.temp.toFixed(1);
}

exports.convert_C = function(obj) {
    obj.temp = obj.temp - 273.15;
    obj.temp = obj.temp.toFixed(1);
}