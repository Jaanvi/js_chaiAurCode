const score=400
console.log(score)
//yha pr humne direct number diya hai but hum specialy number data type bhi create kr sakte hai
const numid=new Number(100)
console.log(numid)//yha number data type clear hai

//convert number to string
console.log(numid.toString().length);//to find the length of the string after conversion

//to fix the size after point
console.log(numid.toFixed(2));

//precision is for number of significant digits must be in the range 1-21 inclusive
const othernum=123.8966
console.log(othernum.toPrecision(4));//ye round of krta hai

//1000000 -10,00,000 this is made to make it readable
const hundreds=1000000;
console.log(hundreds.toLocaleString())//for us
console.log(hundreds.toLocaleString('en-IN'))//for indean

//maths
console.log(Math)
console.log(Math.abs(-54));//for absolute posetive value
console.log(Math.round(4.6));//round off krega
console.log(Math.ceil(4.6));//upar wali value lega
console.log(Math.floor(4.6));//neche wali value lega
console.log(Math.min(3,5,7,1,8,0))
console.log(Math.max(3,5,7,1,8,0))

//Math.random hume 0 se 1 ke beech me koi bhi random value dega
console.log(Math.random());
console.log((Math.random()*10)+1);//1 to 10 ke beech me +1 taki 0 wale case ko tackal kr sake

//formula for random number generation
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min))