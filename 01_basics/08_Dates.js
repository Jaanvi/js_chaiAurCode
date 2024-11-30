//dates
//creating a date object
let mydate=new Date()
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toString());

//creating a specific date by passing the values
let mycreatedDate1=new Date(2023,0,23,7,8)
console.log(mycreatedDate1.toDateString());
console.log(mycreatedDate1.toISOString());
console.log(mycreatedDate1.toJSON());


let mycreatedDate=new Date("01-18-23")
console.log(mycreatedDate.toDateString());
console.log(mycreatedDate.toISOString());
console.log(mycreatedDate.toJSON());
console.log(mycreatedDate.toLocaleDateString());
console.log(mycreatedDate.toString());


//timestabs ye tab use krte hai jb hume quizes wagera me winner decied krna hota hai it gives time in milli sec
let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(mycreatedDate.getTime())//getTime to convert it in milisecond

//to convert the milisec into sec
console.log(Math.round(Date.now()/1000))


//we use get functions to get time month year ets
let mynewDate=new Date();
console.log(mynewDate.getDate())
console.log(mynewDate.getDay())
console.log(mynewDate.getFullYear())
console.log(mynewDate.getHours())

//we can costomiz the localString
mynewDate.toLocaleString('default',{
    weekday:"long"
})
console.log(mynewDate)