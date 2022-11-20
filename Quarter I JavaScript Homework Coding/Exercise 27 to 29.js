/* --------------- Question 27 ------------------- */

let UserName = ["Madeeha", "Fatima", "kashif", "Shameel", "Arham", "Admin"];
for (let username in UserName) {
  if ((username = "Admin")) {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(
      "Hello " + UserName[username] + ", thank you for logging in again!"
    );
  }
}

/* --------------- Question 28 ------------------- */

while (UserName.length != 0) {
  console.log(UserName);
  UserName.pop();
  console.log(UserName);
}
if (UserName != UserName[0]) {
  console.log("we Need to Find some users");
}

/* --------------- Question 29 ------------------- */

let current_users = ["Ali", "wahaj", "Jamil", "John", "Tom"];
let New_Users = ["Ali", "John", "Jerry", "babar", "afridi"];

for (let index = 0; index < New_Users.length; index++) {
  New_Users.sort();
  current_users.sort();
  if (
    New_Users[index] === current_users[index] ||
    New_Users[index].toUpperCase() === current_users[index].toUpperCase() ||
    New_Users[index].toLowerCase() === current_users[index].toLowerCase()
  ) {
    console.log('" ' + New_Users[index] + ' "' + " is not available ");
    console.log(
      '" ' + New_Users[index].toUpperCase() + ' "' + " is already taken "
    );
    console.log(
      '" ' + New_Users[index].toLowerCase() + ' "' + " is already taken "
    );
  }
}
