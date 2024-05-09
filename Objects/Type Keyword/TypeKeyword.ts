// declare objects type in old fashion way
const product: {
  title: string;
  description: string;
  price: number;
  stockAvailable: boolean;
  quantity: number;
} = {
  title: "Outfitters Shirt",
  description: "this is an awesome product of outfitters",
  price: 2500,
  stockAvailable: true,
  quantity: 200,
};

// instead of defining type in object we can use type keyword for defining
// property and we can use it any way

type Product = {
  title: string;
  description: string;
  price: number;
  stockAvailable: boolean;
  quantity: number;
};

const product2: Product = {
  title: "Levis T-shirt",
  description: "this is an awesome product of levis",
  price: 4000,
  stockAvailable: false,
  quantity: 2,
};

const product3: Product = {
  title: "Polo T-shirt",
  description: "this is polo t-shirt",
  price: 10000,
  stockAvailable: false,
  quantity: 400,
};
// Here we use type Product in two different products
// its reduce code complexity and looks code clean
// make type reusable
