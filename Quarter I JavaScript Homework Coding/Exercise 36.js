/* 
        QUESTION : "City Names: Write a function called city_country() that takes in the name of a city and its country. 
                    The function should return a string formatted like this:
                                        "Lahore, Pakistan"


*/

const city_country = (City, country) => {
  return console.log(`"` + City + `"` + ", " + `"` + country + `"`);
};
city_country((City = "Karachi"), (country = "Pakistan"));
city_country((City = "Boston"), (country = "Usa"));
city_country((City = "Mumbai"), (country = "India"));
