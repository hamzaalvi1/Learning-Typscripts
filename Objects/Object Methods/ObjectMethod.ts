// this is an arrow function we use in typescript
const greets = () => {
  console.log("Hello User");
};

const cat = {
  name: "Whisper",
  greets: () => {
    // this function in object called method
    console.log("cats says meow!");
  },
};

cat.greets();
// result "cats says meow!";
function dogGreet() {
  console.log("dogs say Wuff!");
}
const dog = {
  name: "Spike",
  greets: function () {
    console.log("dogs say Wuff!");
  },
};
dogGreet()
dog.greets();
// result "dogs says meow!";
