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



//string to number conversion
let value=3
let negvalue=-3
console.log(negvalue);
console.log(2+2);
console.log(2-2);
console.log(2*3);
console.log(2**3);//for power
console.log(2/3);
console.log(2%3);

let str1="hello "
let str2="jaanvi"
let str3=str1+str2
console.log(str3);
console.log(2+"3");
console.log("2"+3);
console.log("2"+4+4);//agr string pehle hoga to sabhi ko string ki treh treat kiya jayga
console.log(2+4+"4");//agr string baad me hai to pehle wala apna conversion  krega apna

console.log(+true)
//console.log(true+) //it is wrong
//not a good practice
// let num1,num2,num3
// num1=num2=num3=2+2

//prefix and postfix like c++
let count=100
count++;
console.log(count);

