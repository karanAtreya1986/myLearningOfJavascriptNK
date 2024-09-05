//console.log
//see the color difference in output
//use the run option to see the color difference
//with node <filename> we wont see color difference
// console.log("hi karan")

// //console.error
// //see the color difference in output
// console.error("hi karan")

// //console.warn
// console.warn("hi Fellow")

//console.info
// console.info("this is for information")

//print object
const user={
    name: "karan",
    age: 56,
    city: "krakow",
    country: "poland"
}
// console.log(user)

//print in table format
// console.table(user)

const user1={
    name: "johny",
    age: 56,
    city: "munich",
    country: "germany"
}

//print multiple objects in tabular format
// console.table(user, user1)//this will give error

// console.table({user, user1}) //add the object names inside curly else we get error for line 37


//grouping feature
// console.group("login feature")
// console.log("hi")
// console.log("byee")
// console.log("india")
// console.log("germany")
// console.groupEnd();


//console.time
//see the error when console.time parameter does not match console.timeend parameter
// console.time("print 1 to n values")
// for (let index = 0; index < 50; index++) {
//     console.log(index)
// }
// console.timeEnd("time is now ended")


//console.time and console.timeend has same parameter
// console.time("print 1 to n values") //will give in milliseconds
// for (let index = 0; index < 50; index++) {
//     console.log(index)
// }
// console.timeEnd("print 1 to n values") //will give in milliseconds but will do some rounding



//clear all console from beginning of time
// console.group("login feature")
// console.log("hi")
// console.log("byee")
// console.log("india")
// console.log("germany")
// console.groupEnd();
// console.clear()



//console.count
//tells how many times the count is called with same parameters
// console.count("hi karan")
// console.count("bye karan")
// console.count("hi karan")


//assert
//first give the condition
//second parameter is what message when something fails
// console.assert(10===20, "data does not match")
// console.assert(10===10, "data does not match")


//another example
//since passes so no message
// let flag = true
// console.assert(flag, "failed")


// let flag = false
// console.assert(flag, "failed")


//gives complete trace for a method
//from where its called, definition line, calling line etc
// function testMyJob(){
//     console.trace();
// }
// testMyJob();


//%c is used to give color to the console output
//first pass %c then what you want in console
//then pass the coloring stuff
console.log(" %c i love js coding but its confusing", "color:red; background-color:yellow; border:dotted");

//best part is we can give any coloring scheme