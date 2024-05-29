// Any Type
// Purpose: The any type is used when you want to opt out of type-checking for a particular variable.
// It allows you to store any type of value in it, and TypeScript won't enforce any type checks on it.

let userName: any = "Hamza Alvi";
userName = 15071997;

userName = true;
userName = "Jawwad Qazi";
// it will never throw an error if i change the type

//unknown Type
// Purpose: The unknown type is a safer alternative to any. It means the value could be anything, but unlike any,
// it forces you to perform type checks before you can use it in a specific way.

let unknownType: unknown = "Hamza Alvi";

if (typeof unknownType === "string") {
  unknownType = unknownType.toUpperCase();
} 
else if (typeof unknownType === "number") {
  unknownType = unknownType.toExponential(1);
}

console.log(unknownType);
