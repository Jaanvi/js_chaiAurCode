//their are two type of data primitive and non primitive .the diff is based o how the data is stored in memory and how you can access it

//1. primitive it is of seven types(string,number,boolean,null,undefiened,symbol(it is use to make any value unique),BigInt(for larger scintific values))

//JavaScript (JS) is dynamically typed. This means that the type of a variable is determined at runtime rather than being explicitly declared or checked at compile time.
let x = 42;       // Number
x = "Hello";      // Now a String

//symboll me agr hum same number pass kre fir bhi wo unique dega aur same nhi hoga
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid)//false bcoz symbol is unique
const bignum = 637034727509457n //n to make it of bigint data type
console.log(typeof bignum)

//2.non-primitive(refrence data type)eg:array,objects,functions

const heros=["jaanvi","anmol","guncha"];//array
let myobj={
    name:"jaaanu",
    age:22,
}//curly braces ke andar jo hai sabhi obj hai

//function(){}//to define the function
//now store the fun in a variable
const myfun=function(){
    console.log("hello jaanvi");
}
console.log(typeof myfun)
