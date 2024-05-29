// for loop is a traditional loop in typescript

// for loops takes three statements which is separated by semicolon ";"
// first statement is a initializer like we declare variable let number = 1

// second statement is a stopping condition where we want to stop the loop

// third one is updating condition where we update the condition variable or incremental variable

// the curly braces after the round brackets it is called body of the loop or in programming terms we can say
// it is a block of code this code will run till the condition variable is true

// basic example
for (let count = 1; count <= 10; count++) {
  console.log("Hello World");
}

// it will print Hello World 10 times

const cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

for (let i = 0; i < cities.length; i++) {
  console.log(i, "i");
  console.log(cities[i], "cities[i]");
}

// practice sum n numbers

const sumNNumber = (num: number) => {
  let sum = 0;

  for (let i = 0; i <= num; i++) {
    sum = sum + i;
  }
  console.log("total Sum is", sum);
};
sumNNumber(5);

// make a table

const makeATable = (number: number) => {
  for (let t = 1; t <= 10; t++) {
    console.log(`${number} * ${t} = ${number * t} `);
  }
};

makeATable(2);
