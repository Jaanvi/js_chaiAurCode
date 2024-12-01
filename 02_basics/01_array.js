//array 
/*
In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.

JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
*/
//creating the array
const arr1=[1,2,4,6,7,"hitesh"]
const arr2=new Array(1,2,4,6,5,3)
console.log(arr1[3])
console.log(arr2)

//array mathods
arr2.push("jaanvi")//to push the element at last index
console.log(arr2)
arr2.push(123)
console.log(arr2)
arr2.pop();//to delete the element from last index
console.log(arr2)


const arr3=new Array(3,4,5,6,7,8)
arr3.unshift(0);//it is use to insert the element in starting of array .ye km use nhi krte hai kyuki ye optimal nhi hai
console.log(arr3);

arr3.shift();//to remove first element from array
console.log(arr3);
console.log(arr3.includes(9))//ye boolean return krta hai
console.log(arr3.indexOf(8))
console.log(typeof arr3)
console.log(arr3.join())//it converts the array into string

//slice and splice
const arr4=[3,4,5,6,7,8,9]
console.log("A",arr4)
const myarr=arr4.slice(2,4)
console.log(myarr)
console.log("B",arr4)

const myarr1=arr4.splice(2,4)
console.log("C",arr4)
console.log(myarr1)


