/*
        Question:
*/

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
