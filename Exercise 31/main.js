// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
//let username: string[] = ['hasan','osama','ali','ahsan','admin','waiz'];
var username = [];
if (username.length == 0) {
    console.log('Your list is empty we need to find some users!');
}
else {
    username.forEach(function (eachuser) {
        if (eachuser == 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log("Hello ".concat(eachuser, ", thank you for logging in again."));
        }
    });
}
;
