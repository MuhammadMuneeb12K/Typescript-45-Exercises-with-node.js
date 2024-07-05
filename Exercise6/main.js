//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var person_name = "\n\t Muneeb Khan \n\t";
console.log(person_name);
var without_whitespacing = person_name.trim();
console.log(without_whitespacing);
