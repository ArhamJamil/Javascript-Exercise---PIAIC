/* 
        QUESTION : "Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. 
                    Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message."

*/

const make_Tshirt = (size = "Large", text = "I love JavaScript.") => {
  console.log("\nI'm going to make a " + size + " t-shirt.");
  console.log("I will say " + text);
};
make_Tshirt();
make_Tshirt(
  (size = "Medium"),
  (text = "this is another way of defining param in func")
);
