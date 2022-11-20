/* Quarter I JavaScript Homework Coding Exercises: */

/* --------------- Question 1 ------------------- */


/* --------------- Question 2 ------------------- */

let Name2 = "Arham";
console.log(Name2.toUpperCase()); // Convert name in lowercase
console.log(Name2.toLowerCase()); // convert name in uppercase

/* --------------- Question 3 ------------------- */

let quote =
  'Burt Rutan said, "Testing leads to failure and failure leads to understanding !"';
console.log(quote);

/* --------------- Question 4 ------------------- */

let famous_person = "Burt Rutan";
let Quote_message =
  '"Testing leads to failure and failure leads to understanding !"';
console.log(famous_person + "," + Quote_message);

/* --------------- Question 5 ------------------- */

let person1 = "\tarham\t";
console.log(person1);
console.log(person1.slice(1, 7)); // terminates white space at index of 1 and 7
let person2 = "\njamil";
console.log(person2);
console.log(person2.trim()); // remove newline whitespaces

/* --------------- Question 6 ------------------- */

console.log(5 + 3); // (+) addition operator
console.log(4 * 2); // (*) multiplication operator
console.log(16 / 2); // (/) division operator
console.log(10 - 2); // (-) subtraction opertor

/* --------------- Question 7 ------------------- */

let fav_Num = 7;
let fav_Num_msg = "Your favorite Number is:";
console.log(fav_Num_msg + '"' + fav_Num + '"');

/* --------------- Question 8 ------------------- */

const myFriends = ["Madeeha", "Amir", "Danish", "Ahmed", "Sarim", "Saeed"];
console.log(myFriends);
console.log(myFriends[0]);
console.log(myFriends[1]);
console.log(myFriends[2]);
console.log(myFriends[3]);
console.log(myFriends[4]);
console.log(myFriends[5]);

/* --------------- Question 9 ------------------- */

console.log('"' + myFriends[0] + '"' + " Hi, How are you?");
console.log('"' + myFriends[1] + '"' + " Hi, How are you?");
console.log('"' + myFriends[2] + '"' + " Hi, How are you?");
console.log('"' + myFriends[3] + '"' + " Hi, How are you?");
console.log('"' + myFriends[4] + '"' + " Hi, How are you?");
console.log('"' + myFriends[5] + '"' + " Hi, How are you?");

/* --------------- Question 10 ------------------- */

const Cars_Company = ["Honda", "Toyota", "Suzuki", "Audi", "Ford", "Nissan"];
const Cars_Name = [
  "Civic",
  "Corolla",
  "Gtr",
  "Mehran",
  " etron GT",
  "Puma",
  "Pathfinder ",
];
console.log("I would like to own " + Cars_Company[3] + "" + Cars_Name[4]);
console.log(
  "The " + Cars_Company[5] + " " + Cars_Name[6] + "is a 7 seater car"
);

/* --------------- Question 11 ------------------- */

let from = "Arham";
let my_Guest = ["Fatima", "Madeeha", "Shameel"];
console.log(
  "Assalam o Alaikum " +
    my_Guest[0].toUpperCase() +
    " (me: " +
    from +
    ")" +
    "iviting you fo an annual dinner , Plz join and spend time together ! \n"
);
console.log(
  "Assalam o Alaikum " +
    my_Guest[1].toUpperCase() +
    " (me: " +
    from +
    ")" +
    "iviting you fo an annual dinner , Plz join and spend time together ! \n"
);
console.log(
  "Assalam o Alaikum " +
    my_Guest[2].toUpperCase() +
    " (me: " +
    from +
    ")" +
    "iviting you fo an annual dinner , Plz join and spend time together ! \n"
);

/* --------------- Question 12 ------------------- */

console.log(
  "Oh " +
    my_Guest[2].toUpperCase() +
    " Sorry to hear from you that you're not coming to party !"
);
my_Guest.splice(2, 1); // removes Shameel from index 2 .splice(position, number of element)
my_Guest.push("Ahmed");
console.log(
  "Assalam o Alaikum " +
    my_Guest[0].toUpperCase() +
    " (me: " +
    from +
    ")" +
    "iviting you fo an annual dinner , Plz join and spend time together !\n"
);
console.log(
  "Assalam o Alaikum " +
    my_Guest[1].toUpperCase() +
    " (me: " +
    from +
    ")" +
    "iviting you fo an annual dinner , Plz join and spend time together !\n"
);
console.log(
  "Assalam o Alaikum " +
    my_Guest[2].toUpperCase() +
    " (me: " +
    from +
    ")" +
    "iviting you fo an annual dinner , Plz join and spend time together !\n"
);

/* --------------- Question 13 ------------------- */

console.log(
  "Hello " +
    my_Guest +
    " it is to inform you that i have found a bigger table for dinner "
);
my_Guest.unshift("Amir"); // .unshift func store element in start
console.log(my_Guest);
my_Guest.splice(2, 0, "Saeed"); // add saeed in middle of array
console.log(my_Guest);
my_Guest.push("dawood"); // add dawood to end of array
console.log(my_Guest);
console.log(
  "Assalam o Alaikum " +
    my_Guest[0].toUpperCase() +
    " (me: " +
    from +
    ")" +
    "iviting you fo an annual dinner , Plz join and spend time together !\n"
);
console.log(
  "Assalam o Alaikum " +
    my_Guest[1].toUpperCase() +
    " (me: " +
    from +
    ")" +
    "iviting you fo an annual dinner , Plz join and spend time together !\n"
);
console.log(
  "Assalam o Alaikum " +
    my_Guest[2].toUpperCase() +
    " (me: " +
    from +
    ")" +
    "iviting you fo an annual dinner , Plz join and spend time together !\n"
);
console.log(
  "Assalam o Alaikum " +
    my_Guest[3].toUpperCase() +
    " (me: " +
    from +
    ")" +
    "iviting you fo an annual dinner , Plz join and spend time together !\n"
);
console.log(
  "Assalam o Alaikum " +
    my_Guest[4].toUpperCase() +
    " (me: " +
    from +
    ")" +
    "iviting you fo an annual dinner , Plz join and spend time together !\n"
);
console.log(
  "Assalam o Alaikum " +
    my_Guest[5].toUpperCase() +
    " (me: " +
    from +
    ")" +
    "iviting you fo an annual dinner , Plz join and spend time together !\n"
);

/* --------------- Question 14 ------------------- */

console.log(
  "I'm Extremely Sorry but due to certain reason I'm only able to invite 2 people for dinner\n"
);

while (my_Guest.length != 2) {
  var count = my_Guest.length;
  // console.log(count)
  console.log("Sorry " + my_Guest[count - 1] + " but i can't invite you");
  my_Guest.pop();
  // console.log(my_Guest)
  if (my_Guest.length == 2) {
    console.log(my_Guest + " you both are still invited");
  }
}
while (my_Guest.length != 0) {
  my_Guest.pop();
}
console.log(my_Guest);
/* --------------- Question 15 ------------------- */

/* --------------- Question 16 ------------------- */

console.log("invited Guest to dinner are = " + '"' + my_Guest.length + '"');

/* --------------- Question 17 ------------------- */

let myList = [];
myList.push("karachi", "peshawar", "hyderabad", "lahore");
console.log(myList);

/* --------------- Question 16 ------------------- */
let a = myList;
a = {
  City1: myList[0],
  City2: myList[1],
  City3: myList[2],
  City4: myList[3],
};
console.log(a);
console.log(a["City1"] + "\n");
console.log(a["City2"] + "\n");
console.log(a["City3"] + "\n");
console.log(a["City4"] + "\n");

/* --------------- Question 17 ------------------- */
for (let index = 0; index < myList.length; index++) {
  console.log(myList[index + 1]); // produces intention index error
}

/* --------------- Question 18 ------------------- */
let Num1 = 18;
console.log("Is Number == '18'? I predict True.");
console.log(Num1 == 18);

let Num2 = 19;
console.log("Is Number == '19'? I predict False.");
console.log(Num2 != 19);

let Num3 = 20;
console.log("Is Number >= '20'? I predict True.");
console.log(Num3 >= 20);

let Num4 = 21;
console.log("Is Number <= '20'? I predict  False.");
console.log(Num4 <= 20);

let Num5 = 22;
console.log("Is Number != '22'? I predict  False.");
console.log(Num5 == 20);

let Num6 = 23;
console.log("Is Number > '18'? I predict  True.");
console.log(Num5 > 18);

/* --------------- Question 19 ------------------- */

let String = "Arham";
console.log("Is Arham == String ? I predict True");
console.log(String == String.toString());

let String2 = 18;
console.log("Is 18 == String ? I predict True");
console.log(String2 == String2.toString());

let Integer = 20;
console.log("Is 20 == Integer ? I predict True");
console.log(Integer == BigInt(Integer));

let String4 = "ARHAM";
console.log("Is ARHAM == lowercase ? I predict False");
console.log(String4 == String4.toLowerCase());

let a1 = "Arham";
let a2 = 18;
console.log("Is Arham AND 10 Are String ? I predict False");
if (a1 == a1.toString() && a2 == a2.toString) {
  console.log(true);
} else {
  console.log(false);
}

let conditional_array = ["orange", "apple"];
console.log("Is apple is included in array? i predict true");
console.log(conditional_array.includes("apple") ? true : false);

let conditional_array2 = ["hen", "duck"];
console.log("Is tiger is included in array? i predict true");
console.log(conditional_array2.includes("tiger") ? true : false);

let conditional_array3 = ["Mobile", "computer"];
console.log("Is laptop is included in array? i predict False");
console.log(
  "Yes your ans = ",
  conditional_array3.includes("laptop") ? true : false,
  " is correct"
);

/* --------------- Question 20 ------------------- */

// var alien_color = ["Green", "Yellow", "Red"];
// // let guess = prompt("Choose your Color and guess alein Color ");
// if (
//   guess == alien_color[2].toLowerCase ||
//   guess == alien_color[2] ||
//   guess == alien_color[2].toUpperCase
// ) {
//   console.log("you won 5 points");
// } else {
//   console.log("you Lose");
// }

/* --------------- Question 21 ------------------- */

let alienColor = "Green";
if (alienColor == "Green") {
  console.log("you have earned 5 points");
} else {
  console.log("you have earned 10 points.");
}

/* --------------- Question 22 ------------------- */
// alien_color = ["Green", "Yellow", "Red"];
// let guess2 = guess;
// if (guess2 == alienColor[0]) {
//   console.log("you have choose ", guess2 + " and have earned 5 points");
// } else if (guess2 == alienColor[1]) {
//   console.log("you have choose ", guess2 + " and have earned 10 points");
// } else {
//   console.log("you have choose ", guess2 + " and have earned 15 points");
// }

/* --------------- Question 23 ------------------- */

let age = 18;
if (age <= 4) {
  console.log("you are toddler");
} else if (age <= 13) {
  console.log("you are a kid");
} else if (age <= 20) {
  console.log("you are a teenager");
} else if (age < 65) {
  console.log("You are Adults");
} else {
  console.log("You are elder");
}

/* --------------- Question 24 ------------------- */

let favorite_Fruits = ["orange", "apple", "mango"];
if (favorite_Fruits.includes("mango")) {
  console.log("yes " + favorite_Fruits[2] + " is Included");
}
if (favorite_Fruits.includes("apple")) {
  console.log("yes " + favorite_Fruits[1] + " is Included");
}
if (favorite_Fruits.includes("orange")) {
  console.log("yes " + favorite_Fruits[0] + " is Included");
}
if (favorite_Fruits != favorite_Fruits.includes("banana")) {
  console.log("no banana is not included");
}
if (favorite_Fruits != favorite_Fruits.includes("guava")) {
  console.log("no guava is not included");
}

/* --------------- Question 25 ------------------- */

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

/* --------------- Question 26 ------------------- */

while (UserName.length != 0) {
  console.log(UserName);
  UserName.pop();
  console.log(UserName);
}
if (UserName != UserName[0]) {
  console.log("we Need to Find some users");
}

/* --------------- Question 27 ------------------- */

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
    console.log('" '+New_Users[index]+' "'  + " is not available ");
    console.log('" '+New_Users[index].toUpperCase()+' "' + " is already taken ")
    console.log('" '+New_Users[index].toLowerCase()+' "' + " is already taken ")
  }
}


/* --------------- Question 28 ------------------- */

let OrdinalNumbers = [1,2,3,4,5,6,7,8,9]

for (let index = 0; index < OrdinalNumbers.length; index++) {
  console.log(OrdinalNumbers[index])
    if (OrdinalNumbers[index].length = 0) {
      console.log("The  element of Array of name OrdinalNumber is " + OrdinalNumbers[index])
    }
  
}


/* --------------- Question 29 ------------------- */

let PizzaName = ["Fajita", "Pepproni", "Tikka"]
for (let index = 0; index < PizzaName.length; index++) {
  console.log("I like "+PizzaName[index]+" Pizza")
}

/* --------------- Question 30 ------ ------------- */

let myAnimals = ["Dog", "Cat", "Hen"]
for (let index = 0; index < myAnimals.length; index++) {
  console.log("A "+myAnimals[index]+" would make a great pet!")
  
}
console.log(myAnimals[0]+" "+myAnimals[1]+" "+myAnimals[2]+ " have one thing common that is they are pet animals ")

/* --------------- Question 31 ------ ------------- */

const make_Tshirt = (text,size)=>{
  return  text + size.toString() 
}
let shirt_description1 = make_Tshirt("The size of Shirt is", " xl ")
let shirt_description2 = make_Tshirt("The size of Shirt is ", 32)
console.log(shirt_description1)
console.log(shirt_description2)

/* --------------- Question 32 ------ ------------- */