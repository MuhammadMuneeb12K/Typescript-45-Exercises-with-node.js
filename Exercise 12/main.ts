//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let friend_name: string[] = ['Ayan','Uzair','Ammar','Shariq'];
friend_name.forEach(message => console.log(`Hello ${message}, How are you?`));