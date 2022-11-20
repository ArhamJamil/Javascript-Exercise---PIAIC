/*
        Question : Start with your work from Exercise 8-10. Call the function make_great() with a copy of the list of magicians’ names. 
                    Because the original list will be unchanged, 
                    return the new list and store it in a separate list. 
                    Call show_magicians() with each list to show that you have one list of the original names 
                    and one list with the Great added to each magician’s name.
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

show_magicians(magicians);

great_magicians = make_great(magicians);
show_magicians(great_magicians);
