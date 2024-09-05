//simple function declaration
//no need to give return type.

// function add(a,b){
//     return a+b
// }
// const sum=add(5.6,6)
// console.log(sum)


//function with no parameters
// function print(){
//     console.log("hello world")
// }
// print();


//function expression
//also known as anonymous function since no name next to function
// const multFunction=function(x,y){
//     return x*y
// }
// const mul= multFunction(5,11.2)
// console.log(mul)


//arrow function
//no need of function word also
//use arrow sign
//after arrow write business logic
//return is also not mandatory in arrow
//also known as anonymous function

// const divide=(t1,t2)=>t1/t2
// const div=divide(20.5,14.5)
// console.log(div)


//function constructor
//last parameter will be the function body
//starting parameters will be normal inputs to the function
// const funcName=new Function('a','b','return a-b')
// const calculate=funcName(10,2)
// console.log(calculate)


//iife
//immediately invoked function expression
//known as self invoking function
//declared and executed immediately
//executed on own, no need to call

// (function(){
//     console.log("hello server how are you 30000")
// })()


//generator function
//function* and yield keyword will be used.

// function* generateNumberSequence(){
//     yield 1;
//     yield 2;
//     yield 3
//     yield 4;
// }
// const generator=generateNumberSequence()
// console.log(generator.next().value) //this will point to the next yield and then capture its value.
// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next().value)


//anonymous function
//will not have name
//example, function expression, arrow function
//print square of numbers.
// const numbers=[1,2,3,4,5, true, "tiger", 'f', 56.89]
// const squareOfNumbers=numbers.map(function(e){
//     return e*e
// })
// console.log(squareOfNumbers)


//same example with arrow function
// const numbers=[1,2,3,4,5, true, "tiger", 'f', 56.89]
// const squareOfNumbers=numbers.map((e) =>{
//     return e*e
// })
// console.log(squareOfNumbers)


//recursive function
//function calling itself
//return factorial of number
// function factorial(n){
//     if(n===0||n===1){
//         return 1;
//     }
//     else{
//         return n * factorial(n-1)
//     }
// }
// let result=factorial(4);
// console.log(result)


//higher order function
//argument will be another function
//it can be one or more arguments of function type

//this is normal function
function addition(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

//this is higher order function
//create a variable called funcName, pass in the number of parameters required for the original function
function operate(funcName, a,b){
    return funcName(a,b) //use return here, so that the original addition can be called.
    //  funcName(a,b)
}

// let result=operate(addition,5,6);
// console.log(result)

let mult = operate(multiply, 5,4)
console.log(mult)