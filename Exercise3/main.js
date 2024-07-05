// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Lowercase
var person_name = 'ahmed AlI kHan';
console.log('Lowercase:', person_name.toLowerCase());
// Uppercase
console.log('Uppercase:', person_name.toUpperCase());
// Titlecase
var words = person_name.split(' ');
console.log(words);
var t_case = '';
for (var i = 0; i < words.length; i++) {
    t_case += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + ' ';
}
console.log('Titlecase:', t_case);
