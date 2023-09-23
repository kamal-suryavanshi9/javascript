const name = "Kamal"
const repo = 2

console.log(`Hello, my name is ${name} and my repo count is ${repo}`)

console.log(name.__proto__);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt(3));
console.log(name.indexOf('l'));

const newStr = name.substring(1,3);
console.log(newStr);

const newStr1 = name.slice(-5, 3)
console.log(newStr1);