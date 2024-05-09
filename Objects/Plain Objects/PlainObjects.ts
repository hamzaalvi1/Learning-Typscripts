//  plain objects
const student = {
  name: "Hamza Alvi",
  gender: "male",
  age: 25,
  isFacultyMember: true,
};
console.log(student, "student");

const employee = {
  name: "Minahil Jameel",
  designation: "Software Engineer",
  email: "minahil@gmail.com",
  joiningDate: "26 May 2022",
  isAdmin: false,
  dateOfBirth: "2023",
};
console.log(employee, "employee");

const car = {
  name: "Civic",
  color: "Black",
  model: 2022,
  powerSteering: true,
};

const car2 = {
  name: "Corolla",
  color: "Grey",
  model: 2020,
  powerSteering: false,
};
// we can access properties via dot notation

console.log(car.name, "car.name");
console.log(car2.name, "car2.name");
console.log(employee.name, "employee.name");
