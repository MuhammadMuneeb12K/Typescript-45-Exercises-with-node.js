// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician_name: string[] = ['harry','antonio','John'];

function make_great(magicians: string[]){
    return magicians.map(great => `The great ${great}.`)
}


function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name))
 }

let greatMagician = make_great(magician_name);
show_magicians(greatMagician);
