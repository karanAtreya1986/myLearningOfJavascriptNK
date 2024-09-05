//destructure only for arrays and objects.

// const numbers1=[1,2,3]
// let [a,b,c]=numbers1;
// console.log(a)
// console.log(b)
// console.log(c)


//if we have more values in array and we destructure for lesser values
// const numbers1=[1,2,3, "tester", false]
// let [a,b,c]=numbers1;
// console.log(a)
// console.log(b)
// console.log(c)


//spread operator
// const lang=["java", "python", "javascript", "ruby"]
// const [p,q, ...r]=lang
// console.log(p)
// console.log(q)
// console.log(r)


//destructure with objects
// const user={
//     firstname: "karan",
//     lastname: "atreya",
//     age:40
// }

// to destructure objects use curly brackets
// for arrays use square brackets
//when names do not match, we get undefined for objects.
// const{a,b,c}=user;
// console.log(a)
// console.log(b)
// console.log(c)


//use same name as the names used inside object
// const{firstname,lastname,age}=user;
// console.log(firstname)
// console.log(lastname)
// console.log(age)


//we can use default values also
// const{firstname,lastname, city="LA", age}=user;
// console.log(firstname)
// console.log(lastname)
// console.log(age)
// console.log(city
// )



//lets try with arrays also
//with arrays default value doesnt work
//we get undefined for extra variable.
// let abcde=[1,2,3]
// const [a,b,c=4,d]=abcde
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)




// with function parameters
// function printUserName(person){
//     console.log(person.firstname + ' ' + person.lastname)
// }

// const person={
//     firstname: "john",
//     lastname: "doe"
// }

// printUserName(person)


//with function destructuring
// function printusername({firstname, lastname}){
//     console.log(firstname + ' ' + lastname)
// }

// const person={
//     firstname: "john",
//     lastname: "doe"
// }
// printusername(person)


//when there is name mismatch between function parameter and inside object
//we get undefined for all the fields of the object.
// function printusername({fname, lname}){
//     console.log(fname + ' ' + lname)
// }

// const person={
//     firstname: "john",
//     lastname: "doe"
// }
// printusername(person)


//what if we pass lesser parameters to function and more fields in object
// //it will discard remaining
// function printusername({firstname}){
//     console.log(firstname)
// }

// const person={
//     firstname: "john",
//     lastname: "doe"
// }
// printusername(person)



//function destructure with arrays
//first parameter takes in complete array and for rest we get undefined
// function printusername(a,b,c,d){
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
// }

// let abcd=[1,2,3,4]
// printusername(abcd)



//function destructure with arrays
//we declare array outside
//destructure it outside
// then pass the individual destructured values to function as parameter
//it works
function printusername(a,b,c,d){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
}

let abcd=[1,2,3,4]
const [a,b,c,d]=abcd
printusername(a, b, c, d)