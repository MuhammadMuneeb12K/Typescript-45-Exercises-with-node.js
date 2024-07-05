// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magician_name = ['harry', 'antonio', 'John'];
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
show_magicians(magician_name);
