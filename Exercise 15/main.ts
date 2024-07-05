// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guest_list: string[] = ['Bilal','Osama','Kashan'];
let dont_come = guest_list[0];
console.log(`${dont_come} will not come to dinner.`);
guest_list.splice(0,1,'Farhan');
guest_list.forEach(invitation => console.log(`Salam ${invitation}, would you like to dinner with me?`));
