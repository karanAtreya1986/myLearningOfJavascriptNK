// //find unique values from array
// const a1=[1,2,3,4,5,3,4,5, true, true, "string1", "string1", 'f', 'f']
// //we will use spread operator using ....
// const uniqueValues=[...new Set(a1)]
// console.log(uniqueValues)



//int to string
// const num1=32
// const newNum=num1+'';
// console.log(newNum+10)
// console.log(typeof newNum)


// const num1=32
// const newNum=String(num1)
// console.log(newNum+10)
// console.log(typeof newNum)



//float to int
// const floatNumber=3.76
// const intNumber=parseInt(floatNumber)
// console.log(intNumber)



//check if variable is number
//isNan will tell whether its number or not
//you will get not a number, because isNan is returning false as our variable contains number
// const numberValue=56;
// if(typeof numberValue==="number" && isNaN(numberValue)){
//     console.log(numberValue + " is a number")
// }
// else{
//     console.log("not a number")
// }


// const numberValue=56.76;
// if(typeof numberValue==="number" && isNaN(numberValue)){
//     console.log(numberValue + " is a number")
// }
// else{
//     console.log("not a number")
// }


// const numberValue="titanic";
// if(typeof numberValue==="number" && isNaN(numberValue)){
//     console.log(numberValue + " is a number")
// }
// else{
//     console.log("not a number")
// }


//we invert the condition of isnan
//so our variable contains number which makes isnan as false and not(false) is true
// const numberValue=32;
// if(typeof numberValue==="number" && !isNaN(numberValue)){
//     console.log(numberValue + " is a number")
// }
// else{
//     console.log("not a number")
// }



// const numberValue="32";
// if(typeof numberValue==="number" && !isNaN(numberValue)){
//     console.log(numberValue + " is a number")
// }
// else{
//     console.log("not a number")
// }



// const numberValue="titanic";
// if(typeof numberValue==="number" && !isNaN(numberValue)){
//     console.log(numberValue + " is a number")
// }
// else{
//     console.log("not a number")
// }


//swap two values without third variable
// let a=5;
// let b=10;
// [a,b]=[b,a];
// console.log(a,b)


//check if object has property
// const person={
//     name:"johny",
//     age:50
// }
// if(person.hasOwnProperty("address")){
//     console.log(`person has the property`);
// }else{
//     console.log("no property present")
// }


//remove falsy values from array
// //falsy values are zero, false, "", null, undefined, NaN
// const values=[1,2,false,"", null, undefined, NaN, 0]
// const newValues=values.filter(Boolean)
// console.log(newValues)



//string to upper case and to lower case
// const str="Karan Bhai"
// const u1=str.toUpperCase()
// console.log(u1)
// const u2=str.toLowerCase()
// console.log(u2)



//check if array contains a specific value
// const lang=["java", "javascript", "ruby"]
// if(lang.includes("javascript")){
//     console.log("found")
// }else{
//     console.log("not found")
// }



//check if array is empty or not
// const empty=[]
// if(empty.length===0){
//     console.log("empty")
// }else{
//     console.log("not empty")
// }



//generate a random number
//we wrote timepass formula to get random number between 10 and 100
// const min=10;
// const max=100;
// const randomNumber=Math.floor(Math.random() * (max-min+1))+min
// console.log(randomNumber)



//string to number
// const str1="34"
// const x1=parseFloat(str1)
// console.log(x1)



// const str2="34.78"
// const x2=parseFloat(str2)
// console.log(x2)


//when we have zero after decimal, parseFloat still returns integer
// const str1="34.00"
// const x1=parseFloat(str1)
// console.log(x1)

//when we try to convert a real string to number
//it will return Nan
// const str1="tiger"
// const x1=parseFloat(str1)
// console.log(x1)



//join array elements to form a string
// const words=["hello", 'f', true, 56.89, 67]
// const sentence=words.join(" ")
// console.log(sentence)


//join with any character
// const words=["hello", 'f', true, 56.89, 67]
// const sentence=words.join("------")
// console.log(sentence)



//access some object property dynamically
//if we dont use double quote around property name see the error
//with double quote it works properly
// const user={
//     name:"johny",
//     age:30
// }
// console.log(user["name"])
// console.log(user["age"])



//clone an array or object
//use spread here
// const marks=[1,2,3,4,5]
// const duplicateMarks=[...marks]
// console.log(duplicateMarks)

//lets see for objects
// const user={
//     name:"johny",
//     age:40
// }
// const duplicateobject={...user}
// console.log(duplicateobject)



//convert object to array
const employee={
    empName:"tom",
    age:50,
    designation:"start"
}

//create keys array
// let keysArray=Object.keys(employee)
// console.log(keysArray)


//create values array
// let keysArray=Object.values(employee)
// console.log(keysArray)


//create key value array
// let keysArray=Object.entries(employee)
// console.log(keysArray)



//get current date and time
// const newDate=new Date()
// console.log(newDate.toLocaleString()) //gives current date time in your machine



//check if variable is defined or not
// let i;
// if(typeof i==="undefined"){
//     console.log("variable is not defined.")
// }



//truncate an array
//give the length you want and rest of the numbers truncated
// const testing=[1,2,3,4,5,56,6,7,8,0]
// testing.length=3;
// console.log(testing)




//last item in the array
const pop=[1,2,3,4,55,68,9,0]
const lastElement=pop.splice(-1)
console.log(lastElement)