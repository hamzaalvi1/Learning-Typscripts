// More type keyword with optional property and type alias

type CarData = {
  name: string;
  modelNumber: number;
  color: string;
  horsePower: number;
  carType: "automatic" | "manual"; // | => this is called pipe sign or in typescript it is called union operator and we define literal type means user select only one value
  powerSteering?: boolean; // ? is called optional it indicates this property is optional wether you add or not it will not throw error
};

const car1: CarData = {
  name: "Civic Prosmatic",
  modelNumber: 2024,
  color: "white",
  horsePower: 2000,
  carType: "automatic",
  powerSteering: true,
};

console.log(car1, "car1");
const car2: CarData = {
  name: "Mehran",
  modelNumber: 2004,
  color: "blue",
  horsePower: 750,
  carType: "manual",
};
// in this car 2 object we remove powerSteering property  because it is optional
console.log(car2, "car2");

const car3: CarData = {
  name: "Corolla",
  modelNumber: 2018,
  color: "grey",
  horsePower: 2200,
  carType: "some one",
  powerSteering: true,
};
// in this car 3 object typescript throws an error on carType property because you can only add "automatic" or "manual" this is called literal type
console.log(car3, "car3");
