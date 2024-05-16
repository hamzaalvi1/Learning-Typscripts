// if we want to delete an item in the array from start or end typescript provides us two methods
// Pop: Pop is use to delete an item from the end of the array
// Shift: Shift is use to delete an item from the beginning of the array

// Example 1
let fruits = ["Apple", "Banana", "Orange"];

console.log("Original array:", fruits); // Output: Original array: [ 'Apple', 'Banana', 'Orange' ]

// delete an element from the beginning of the array using
fruits.pop();

console.log("Array after pop:", fruits); // Output: Array after shift: ['Apple', 'Banana']

// Example 2
let numbers = [10, 20, 30, 40, 50];

console.log("Original array:", numbers); // Output: Original array: [ 10, 20, 30, 40, 50 ]

// Removing the first element of the array using shift
numbers.pop();

console.log("Array after pop:", numbers); // Output: Array after shift: [10, 20, 30, 40 ]
