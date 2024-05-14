// A tuple is a structure that allows you to store a fixed-size, ordered collection of elements.

const fixedArray: [string, number, boolean] = ["Hamza", 15, true];

console.log(fixedArray, "fixedArray");
// IF we add one or more element it will throw an error because we fixed the size of the array

// we can also assign default values
const anotherArray: ["Hamza", number, string] = ["Hamza", 1997, "male"];

console.log(anotherArray, "anotherArray");

// Custom type in tuples
type MayBeStringOrNumber = string | number;
const dob: [
  MayBeStringOrNumber,
  MayBeStringOrNumber,
  MayBeStringOrNumber,
  MayBeStringOrNumber
] = [1507, "1997", 5555, "2024"];

console.log(dob, "dob");
