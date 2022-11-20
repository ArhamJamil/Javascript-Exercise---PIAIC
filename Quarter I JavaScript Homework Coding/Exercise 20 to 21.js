/* --------------- Question 20 ------------------- */
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

/* --------------- Question 21 ------------------- */

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
