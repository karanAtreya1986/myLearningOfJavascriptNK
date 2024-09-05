//var is old way of declaring.

var x=10; //known sa global scope
function test(){
    var y=20; //known as functional scope
}

// console.log(x)

//scope of top is within function
//accessing it outside will give undefined.
// var pop ="hi js"

// function rel(){
//     var top="hello js"
// }
// rel();
// console.log(top)


//now all variables are in their correct scope
//we will get desired output
// var pop ="hi js"

// function rel(){
//     var top="hello js"
//     console.log(top)
// }
// rel();
// console.log(pop)



//redeclare allowed with var keyword
//latest value will be picked up.
// var browser="chrome"
// var browser="firefox"
// console.log(browser)

//reinitialise also allowed with var keyword
// var browser="chrome"
// browser="edge"
// console.log(browser)


//declare var but dont give any value
//default value of var variables is undefined.
// var g;
// console.log(g)


//problems with var
//we cannot use older values if they are lost
//example
//hi karan is now lost.
// var flag ="hi karan"
// var t1=5;
// if(t1>3){
//     var flag = "hi caesor"
// }
// console.log(flag)


//let better way to declare.
//let scope is at the particular block only.
//see error when we try to access outside block.
// let m="hello karan"
// let time = 5;
// if(time>2){
//     let message="how are you howdy";
//     console.log(message)
// }
// console.log(message)
//m is at global level and can be accessed anywhere in this file.
// console.log(m)


//let variable cannot be used for redeclaring also.
// let karan=1234
// let karan="tester"


//same variable with different data types is allowed.
// var karan=1234
// let karan="tester"


//reinitialising of the let variable is allowed.
// let karan=1234
// karan="tester"
// console.log(karan)


//constant variable cannot be reassigned.
//see the error.
// const karan=1234
// karan="tester"
// console.log(karan)


//timepass code for constant
// const days=7
// console.log(100*days)


//timepass code with let
// let days=7;
// days=10;
// console.log(days*10)


//default value of all data types
//var and let gives undefined.
//const will throw error because we have to initialise at time of declaration.
var p;
console.log(p)

let a;
console.log(a)

// const c;
// console.log(c)
