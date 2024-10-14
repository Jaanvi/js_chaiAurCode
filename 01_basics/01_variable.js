 /*In this we are building a ecomerse website and for this we are taking a veriable who stores the data of the customers.*/
 const accountId=14453
 //const is a keyword jisko change nhi kiya ja sakta 
 let accountEmail="jaanvitiwari@gmail.com"
 var accountPassword="Nishu45"
 /*
 let and var are use to declare variable and can be change but prefer not to use var because of issue in block scope and functional scope
 */
accountCity="jaipur"/*we can declare variable witout using let and var but it is not a good practice*/
let accountState;/*yha humne bs declare kiya hai is liye ye undefined dega kyuki humne isko koi value assign nhi ki hai*/

//yha hum change kr rhe hai accountId ko but wo nodejs me change nhi hoga
//accountId=2 //we cant change the value of const variable
accountEmail="jaanvi@0987"
accountPassword="1234567"
accountCity="Bengluru"
console.log(accountId);
//here we use other function of console that is table to get the output in tabbular form
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);