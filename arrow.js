//arrow function
//=> is called function
//variable is parameter of function
//after arrow write business logic
//arrow function has no name, so anonymous function
//we assign to variable to refer to the function
//no parenthesis needed if we have only one parameter (num)
// const square=num=>num*num
// const result=square(5)
// console.log(result)


//if you want parenthesis then we can add.
// const square=(num)=>num*num
// const result=square(5)
// console.log(result)


//function with no parameters
//we wont get anything in output.
//we have to write console.log in arrow.

// const message=()=>"hello js"
// // message()
// console.log(message())


//parenthesis mandatory if more than one parameter is to be passed.
//else compile time error.
// const add=(a,b)=>a+b
// let result = add(5,6)
// console.log(result)


//arrow function on object
//in arrow, no need to give return keyword.
//by default returns value
// const person={
//     name: "karan",
//     age: 50
// }
// const getDetails=p=>`${p.age} and ${p.name}`
// const fullDetails=getDetails(person)
// console.log(fullDetails)


//with default values
//we have given default values
//so when calling function in line 51, no need of specifying parameters and its values.
// const greet=(username="tiger", age=100)=>`your name is ${username} and your age is ${age}`
// let result=greet();
// console.log(result)


//ignore default values
//we are passing our new values
// const result=greet("babu", 890)
// console.log(result)


//arrow functions with rest parameters.
//rest means ... parameters
//rest also means varargs parameters.
//rest parameters are considered as arrays because they contain more than one value
// const sum=(...numbers)=>numbers.reduce((acc,num)=>acc+num, 0)
// let result = sum(1,2,3,4,5,67.89)
// console.log(result)



//one default value and one rest parameter.
// const browserInformation=(browser="chrome", ...details)=>{
    // console.log(`browser name is ${browser}`)
    // console.log("other details are", details)
// }
// browserInformation()


//pass some other details
// browserInformation("firefox", "mozilla", 115.67, "remote")


//use existing function inside arrow function
//we use return in arrow functions, sorry for earlier confusion that return not needed
const findMaxOfNumber=(a,b,c)=>{
    return Math.max(a,b,c)
}
let result=findMaxOfNumber(1,2,3)
console.log(result)