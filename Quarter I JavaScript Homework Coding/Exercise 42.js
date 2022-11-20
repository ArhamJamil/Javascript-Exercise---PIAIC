/*
        Question: "  Write a function that stores information about a car in a Object. 
                    the function should always receive a manufacturer and a model name. 
                    it should then accept an arbitrary number of keyword arguments. 
                    Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
                    Print the Object that’s returned to make sure all the information was stored correctly. "
*/

function car_Details(modelName, manufacturer, ...options) {
  let car = {};
  car.Model = modelName;
  car.Manufacturer = manufacturer;
  car.option = options;
  return car;
}

console.log(
  car_Details("civic", "honda", `color="metallic black"`, `rims ="black"`)
);
console.log(car_Details("Corolla", "Toyota", `color="white"`, `rims ="black"`));
console.log(car_Details("Gtr", "Nissan", `color="black"`, `rims ="white"`));
