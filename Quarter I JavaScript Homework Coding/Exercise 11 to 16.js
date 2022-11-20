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
