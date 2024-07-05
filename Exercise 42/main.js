// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magician_name = ['harry', 'antonio', 'John'];
function make_great(magicians) {
    return magicians.map(function (great) { return "The great ".concat(great, "."); });
}
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
var greatMagician = make_great(magician_name);
show_magicians(greatMagician);
