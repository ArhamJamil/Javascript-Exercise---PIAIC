/* --------------- Question 17 ------------------- */

let myList = [];
myList.push("karachi", "peshawar", "hyderabad", "lahore");
console.log(myList);

/* --------------- Question 18 ------------------- */
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

/* --------------- Question 19 ------------------- */
for (let index = 0; index < myList.length; index++) {
  console.log(myList[index + 1]); // produces intention index error
}
