// what if we want to change the value of an item in an array using indexes

// --- Example 1 ---//

const fruits = ["Apple", "Mango", "Banana", "Strawberry", "Guava"];

fruits[1] = "Pineapple"; // Apple will replace by "Pineapple"
fruits[4] = "Chiko"; // Guava will replace by "Chiko"

console.log(fruits, "fruits");

// --- Example 2 ---//

const countries = [
  "Pakistan",
  "China",
  "France",
  "Germany",
  "Canada",
  "Estonia",
];

countries[3] = "Greece"; // Apple will replace by "Pineapple"
countries[5] = "United States"; // Guava will replace by "Chiko"

console.log(countries, "countries");
