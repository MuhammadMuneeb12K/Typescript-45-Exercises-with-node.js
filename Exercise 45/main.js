// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function car(manufacturer, model) {
    var optional = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optional[_i - 2] = arguments[_i];
    }
    var my_car = {
        manufacturer: manufacturer,
        model: model,
    };
    optional.forEach(function (options) {
        var _a = options.split(':'), key = _a[0], value = _a[1];
        my_car[key.trim()] = value.trim();
    });
    return my_car;
}
var car1 = car('toyota', 'corolla', 'year:2021', 'color:white');
console.log(car1);
