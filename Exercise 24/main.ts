// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let mango = 'mango';
let uppercase_mango = 'MANGO';
let ten = 10;
let five = 5;
let fruits = ['banana','apple','mango']

 // Tests for equality and inequality with strings

 console.log('Is mango is equal to mango?');
 console.log(mango == 'mango');

 console.log('\nIs mango is not equal to mango?');
 console.log(mango != 'mango');

 // Tests using lowercase function

 console.log('\nIs MANGO is equal to mango after converting to lowercase?');
 console.log(uppercase_mango.toLowerCase() == 'mango');
 
 console.log('\nIs MANGO is not equal to mango after converting to lowercase?');
 console.log(uppercase_mango.toLowerCase() != 'mango');
 
 // Numerical tests

 // Equal to
console.log('\nIs ten is not equal to five?');
console.log(ten != five);

// not equal to
console.log('\nIs ten is equal to five?');
console.log(ten == five);

// greater than
console.log('\nIs ten is greater than five?');
console.log(ten > five);

// less than
console.log('\nIs ten is less than five?');
console.log(ten < five);

// greater than or equal to
console.log('\nIs ten is greater than or equal to five?');
console.log(ten >= five);

// less than or equal to
console.log('\nIs ten is less than or equal to five?');
console.log(ten <= five);

// Tests using "and" & "or" operators

// Using and (&&)
console.log('\nIs ten is not equal to five and ten is greater than five?');
console.log(ten != five && ten > five);

console.log('\nIs ten is not equal to five and ten is less than five?');
console.log(ten != five && ten < five);

// Using or (||)
console.log('\nIs ten is equal to five or ten is greater than five?');
console.log(ten == five || ten > five);

console.log('\nIs ten is equal to five or ten is less than five?');
console.log(ten == five || ten < five);

// Test whether an item is include in array
console.log('\nIs mango is include in my fruits array?');
console.log(fruits.includes('mango'));

console.log('\nIs mango is not include in my fruits array?');
console.log(!fruits.includes('mango'));