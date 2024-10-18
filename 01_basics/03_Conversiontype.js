// Convert data types and observe the behavior in JavaScript

let name1 = "345";
console.log(typeof name1);          // string
let value1 = Number(name1);
console.log(typeof value1);         // number
console.log(value1);                // 345

let name2 = "345asd";
console.log(typeof name2);          // string
let value2 = Number(name2);
console.log(typeof value2);         // number
console.log(value2);                // NaN

let name3 = true;
console.log(typeof name3);          // boolean
let value3 = Number(name3);
console.log(typeof value3);         // number
console.log(value3);                // 1

let name4 = null;
console.log(typeof name4);          // object (this is a quirk in JS)
let value4 = Number(name4);
console.log(typeof value4);         // number
console.log(value4);                // 0

let name5 = undefined;
console.log(typeof name5);          // undefined
let value5 = Number(name5);         // to convert into another data type we need to write first letter in capital
console.log(typeof value5);         // number
console.log(value5);                // NaN

let isloggedin = 1;
console.log(typeof isloggedin);     // number
console.log(isloggedin);            // 1
let booleanlogedin=Boolean(isloggedin)
console.log(typeof booleanlogedin);     // boolean
console.log(booleanlogedin); //true

//jb hum boolean me convert krte hai to 1=>true aur 0=>false hota hai,, aur jb hum emty string ko boolean me convert krenge to false aayga and non empty string true dega 