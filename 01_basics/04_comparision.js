//comparision operators
console.log(2>1);
console.log(2<1);
console.log(2<=1);
console.log(2>=1);
console.log(2==1);
//comarision operators opperate on same data type

// console.log("2">1);//yha pr string ko num me change krdiya but hr baar ye shi nhi hota
// console.log("02">1);//yha conversion hota hai


console.log(null>0)
console.log(null==0)
console.log(null>=0)
//the reason is that an equality check == and comparision ><>=<= work differently.
//comparision convert null to a number, treated it as 0.thats why(3)null>=0 is true and (1)null>0 is false

//strict check (===) it also check the data type 
console.log("2"===2);//yha conversion nhi hoga