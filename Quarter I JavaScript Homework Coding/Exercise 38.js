/*
        Question: " Make a array of magician’s names. Pass the array to a function called show_magicians(), 
                    which prints the name of each magician in the array."
*/

function Show_magician() {
  for (magician in magician_Name) {
    console.log(magician_Name[magician]);
  }
}
let magician_Name = [
  "Dynamo",
  "Apollo Robbins",
  "Derren Brown",
  "The Great Lafayette",
  "Criss Angel",
];
console.log(Show_magician());
