// array.splice(start, deleteCount, item1, item2, ...);
// first paramerter is start count means the index you want to start
// second paramerter is delete count means how many items you want to delete
// third paramerter is n number of items you want to add
let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 0, "pinapple");
console.log(fruits, "fruits");

let cars = ["Audi", "BMW", "Ferrari", "RX8", "Jaguar"];
cars.splice(3, 1);
console.log(cars, "cars");

let countries = [
  "Pakistan",
  "Canada",
  "India",
  "Palestine",
  "Europe",
  "Estonia",
];

countries.splice(5, 1, "Turkey", "Russia", "Finland");
console.log(countries, "countries");
