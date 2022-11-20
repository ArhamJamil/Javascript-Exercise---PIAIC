/*
        Question:
*/

const make_Tshirt = (text, size) => {
  return text + size.toString();
};
let shirt_description1 = make_Tshirt("The size of Shirt is", " xl ");
let shirt_description2 = make_Tshirt("The size of Shirt is ", 32);
console.log(shirt_description1);
console.log(shirt_description2);
