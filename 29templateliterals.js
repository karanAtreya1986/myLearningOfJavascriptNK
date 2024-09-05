//use back ticks
//we already saw this a lot
// const name="karan"
// const age=40;
// const message=`hi my name is ${name} and my age is ${age}`
// console.log(message)


//use multi line using backticks
//it will maintain the same format in console
// const multiline=`hi i am learning javascript
// and am writing multi line 
//      like a normal notebook
//                and see how easy it is with back ticks`
// console.log(multiline)


//useful for maths operations
// const a=10;
// const b=20;
// const c=`the addition of ${a} and ${b} is ${a+b}`
// console.log(c)



//useful for dynamic xpaths
//when we use double quotes it doesnt get appended with the actual name
// function xpath(name){
//     return "//input[@id='name']"
// }
// console.log(xpath("Karan"))


//same code with back ticks
//if we dont write the variable name inside {} then we wont get the variable value
// function xpath(name){
//     return `//input[@id='name']`
// }
// console.log(xpath("Karan"))



//correct code with back ticks
function xpath(name){
    return `//input[@id='${name}']`
}
// console.log(xpath("Karan"))


//suppose i want to pass like "Karan's"
//how to do it
//use escape character \ followed by the special character
console.log(xpath("Karan\'s"))