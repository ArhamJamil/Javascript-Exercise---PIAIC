/* --------------- Question 22 ------------------- */

var alien_color = ["Green", "Yellow", "Red"];
let guess = prompt("Choose your Color and guess alein Color ");
if (
  guess == alien_color[2].toLowerCase ||
  guess == alien_color[2] ||
  guess == alien_color[2].toUpperCase
) {
  console.log("you won 5 points");
} else {
  console.log("you Lose");
}

/* --------------- Question 23 ------------------- */

let alienColor = "Green";
if (alienColor == "Green") {
  console.log("you have earned 5 points");
} else {
  console.log("you have earned 10 points.");
}

/* --------------- Question 24 ------------------- */
alien_color = ["Green", "Yellow", "Red"];
let guess2 = guess;
if (guess2 == alienColor[0]) {
  console.log("you have choose ", guess2 + " and have earned 5 points");
} else if (guess2 == alienColor[1]) {
  console.log("you have choose ", guess2 + " and have earned 10 points");
} else {
  console.log("you have choose ", guess2 + " and have earned 15 points");
}
