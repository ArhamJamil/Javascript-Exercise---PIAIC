/* 
        Question: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
                    Call show_magicians() to see that the list has actually been modified.
*/

const show_magicians = (magician) => {
  for (magician in magicians) {
    console.log(magicians[magician]);
  }
};
function make_great(magician) {
  let greatMagician = [];
  for (let index = 0; index < 4; index++) {
    magician = magicians.shift();
    greatMagician.push(magician + " the great");
  }
  for (magician in greatMagician) {
    console.log(greatMagician[magician]);
  }
}

let magicians = ["Arham", "Shameel", "Ahmed", "Amir"];
console.log(show_magicians());
console.log(make_great());
