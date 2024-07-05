// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// // • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// Creating a guest list array
let guest_list: string[] = ['Bilal','Osama','Kashan'];

// Making a variable for those guest who cannot come
let dont_come = guest_list[0];

// Print a guest name who cannot come
console.log(`${dont_come} will not come to dinner.`);

// Add or remove values from guest list array
guest_list.splice(0,1,'Farhan');

// Message print for bigger table
console.log('Good News ! We have Found a Bigger Table for Dinner.');

//  Add a new guest at starting index of array
guest_list.unshift('Hamza');

// Add a new guest at ending index of array
guest_list.push('Rehan');

// Add a new guest at middle index of array
let middle_index: number = Math.floor(guest_list.length/2);
guest_list.splice(middle_index,0,'Basit');
console.log('Updated list of our guests');
console.log(guest_list);
guest_list.forEach(invitation => console.log(`Salam ${invitation}, would you like to  dinner with me?`));



