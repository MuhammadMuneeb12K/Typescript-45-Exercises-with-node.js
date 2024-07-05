// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('\n Making a sandwich with the following item: \n');
    items.forEach(function (eachitem) { return console.log(eachitem); });
    console.log("Enjoy the sandwich");
}
make_sandwich('chicken', 'tomato', 'cheese');
make_sandwich('mayo', 'egg', 'chicken');
make_sandwich('mayo', 'cheese', 'chicken', 'sauces', 'Butter', 'onion', 'lettuce');
