let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(typeof(myDate));

let newDate = new Date(2023, 0, 1, 13, 34)

console.log(newDate.toDateString());
console.log(newDate.toLocaleString());


let myBday = new Date("1988-01-04")

// console.log(myBday.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myBday.getTime());
// console.log(Math.floor(Date.now()/1000));

console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());

console.log(
    newDate.toLocaleString('default', {
        weekday: "long",
    }))