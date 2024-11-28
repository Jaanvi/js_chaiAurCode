const name="jaanvi"
const repocount=50
//console.log(name+repocount+" value")//it is a bad practiice

//nowdays we will use back text .the benifit of doing this is string inter polation .in this we create place holders ${},whatever variable is inside them,u can directly inject there value in it
console.log(`my name is ${name} and my github has ${repocount} reposetories in "value"`)

//the other way to declare the string is
const title=new String("tiwari-hc")
console.log(title[0])
console.log(title.__proto__)
console.log(title.toLowerCase())
console.log(title.charAt(2))
console.log(title.indexOf('w'))
//slice is used as substring but slice is for negative values also it will take from last for negative value
const newstr=title.substring(0,4)
console.log(newstr)

const anotherstr=title.slice(-6,7)//(start,end)
console.log(anotherstr)

//trim is use to remove the extra space 
const str3="  janvi  "
console.log(str3)
console.log(str3.trim())

//replace function to replace the part of string to something else
const url="http:/jaanvi%20tiwari%20home"
console.log(url.replace('%20','_'))//for replacing the first accurence
console.log(url.replace(/%20/g,'_'))///g flag: The global flag ensures that all occurrences of %20 in the string are replaced, not just the first one. 

console.log(url.includes('jaanvi'))

//string.split(separator, limit);
/*
separator: Specifies the character, substring, or regular expression used to split the string. If omitted, the entire string is returned as a single element in an array.
limit (optional): Specifies the maximum number of substrings to include in the resulting array.
*/
console.log(title.split('-'))