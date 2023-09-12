// Primitive (Call by value)
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
const name = "kamal";
const age = 33;
const isLoggedIn = false
const outsideTemp = null
let email;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id);
// console.log(anotherId);
// console.log(id === anotherId);

const bigNumber = 99999999999999999999999999999999n


// Refrence (Non Primitive)
// Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Kamal",
    age: 34,
}

const myFunction = function () {
    console.log("Hello World..!!");
}

console.log(typeof outsideTemp);