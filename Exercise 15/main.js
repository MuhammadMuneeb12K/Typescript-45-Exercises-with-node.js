// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var guest_list = ['Bilal', 'Osama', 'Kashan'];
var dont_come = guest_list[0];
console.log("".concat(dont_come, " will not come to dinner."));
guest_list.splice(0, 1, 'Farhan');
guest_list.forEach(function (invitation) { return console.log("Salam ".concat(invitation, ", would you like to dinner with me?")); });
