const car = {
  name: "Civic",
  color: "Black",
  model: 2022,
  powerSteering: true,
};

console.log(car, "Old Car Object");

//  we can change property value of an object using
//  dot notation and after equal sign and assign value after it
car.name = "Mehran";
car.color = "White";
car.model = 2014;
car.powerSteering = false;

console.log(car, "New Property Change Car Object");
