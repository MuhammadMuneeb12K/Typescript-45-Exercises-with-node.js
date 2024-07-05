// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magician_name = ['harry', 'antonio', 'John'];
function make_great(magicians) {
    return magicians.map(function (great) { return "The great ".concat(great, "."); });
}
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
var copy_magician_name = magician_name;
var copy_great_magician = make_great(copy_magician_name);
show_magicians(copy_great_magician);
show_magicians(magician_name);
