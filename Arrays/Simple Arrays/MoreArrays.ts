// assign type into an array

// --- Example 1 ---//

const studentNames: string[] = [
  "Hamza Alvi",
  "Mudassir Siddiqui",
  "Abdul Sami",
  "SaadUllah Saleem",
];
// if we assign number into string array it will be throw an error
console.log(studentNames, "studentNames");

// --- Example 2 ---//

const numbers: number[] = [1, 1, 25, 55, 365, 41, 551, 664, 997];
// Similarly if we assign string into number array it will be throw an error
console.log(numbers, "numbers");

// --- Example 3 ---//

const mixedArray: (number | string)[] = [
  1,
  1,
  25,
  55,
  "Apples",
  "Mango",
  "Banana",
];
console.log(mixedArray, "mixedArray");
// this is a way where we defined multiple types data in one array

// --- Example 4 ---//

type EmployeesArray = { name: string; designation: string };

const employeesArray: EmployeesArray[] = [
  { name: "Fawwad Khan", designation: "Software Engineer" },
  { name: "Shawn Frostee", designation: "UX/UI Engineer" },
];

console.log(employeesArray, "employeesArray");
