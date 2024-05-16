// if you want to add data dynamically in an array you can use two methods
// Push: if you want to add data in the end of the array you can use push
// Unshift: if you want to add data in the first you can use unshift

const animals: string[] = ["cat", "dog", "cow", "sheep", "elephant", "lion"];

animals.unshift("tiger", "wolf");
// it will push the following two items at the end of the array of animals

console.log(animals, "animals");

const numbers: number[] = [11, 25, 92, 110, 29, 44];
// it will push the following items at the end of the array of numbers

numbers.unshift(335, 482, 782, 6675, 444);

console.log(numbers, "numbers");

const mixedArray: (number | string)[] = ["Hamza", 14, 22, 45, "Alvi", "Ali"];

mixedArray.unshift(563, 5008, "Fawwad");

console.log(mixedArray, "mixedArray");
