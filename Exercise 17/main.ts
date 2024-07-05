// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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

// Inform that only two guests ca be invited for dinner
console.log('Unfortunately, the new dinner table wont arrive on time, so I can invite only two guest to dinner with me.');

// Using while loop to remove guests from the array until only two names remain
while(guest_list.length > 2){
    let remove_guest =  guest_list.pop();
    console.log(`Sorry, ${remove_guest} I cannot invite you to dinner.`);
}


console.log('Invitation to the last two guests');
guest_list.forEach(two_guest => console.log(`Luckly ${two_guest}, you are still invited to the dinner.`))

guest_list.pop();
guest_list.pop();
console.log('Empty list', guest_list);


