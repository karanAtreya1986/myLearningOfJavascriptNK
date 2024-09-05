//to print pattern or for performing something sequential.
//iterate over arrays, lists etc.

//for loop
// for (let index = 0; index<=10; index++) {
//    console.log(index) 
// }


//for.....of loop
//best for printing all values without any manipulations.
// const a1=[1,2,3,4,5]
// for (const element of a1) {
//     console.log(element)
// }


//use index based for loop for iterating arrays
// const a1=[1,2,3,4,5]
// for (let index = 0; index < a1.length; index++) {
//     console.log(a1[index])
// }



//when we iterate more than array length
//we will get undefined for last value and rest of the values printed.

// const a1=[1,2,3,4,5]
// for (let index = 0; index <=a1.length; index++) {
//     console.log(a1[index])
// }


//infinite while loop
// let p=1;
// while(p<=10){
//     console.log(p)
// }


//stop infinite while loop by increasing counter
//use p++
// let p=1;
// while(p<=10){
//     console.log(p)
//     p++
// }


//try with ++p
//we will get same output.
// let p=1;
// while(p<=10){
//     console.log(p)
//     ++p
// }


//try with normal p=p+1
// let p=1;
// while(p<=10){
//     console.log(p)
//     p=p+1
// }


//print even numbers between 1 to 10
// let p=2;
// while(p<=10){
//     console.log(p)
//     p=p+2
// }


//do while
//do has the business logic
//while is for condition check
//runs atleast once
//infinite loop, as no stopping condition.

// let p=2;
// do{
//     console.log(p)
// }
// while(p<=10)


//do while with stop.
// let p=2;
// do{
//     console.log(p)
//     p++
// }
// while(p<=10)


//break.
//see how break works.
// let num=0;
// while(num<=100){
//     console.log(num);
//     if(num%5==0){
//         console.log("hi")
//     }
//     num++;
// }


// let num=0;
// while(num<=100){
//     console.log(num);
//     if(num%5==0){
//         console.log("hi")
//         break;
//     }
//     num++;
// }


//another example of break
//if condition written inside loops can use break
// const browser=["firefox", "chrome"]
// for (const element of browser) {
//     if(element==="firefox"){
//         console.log("hello firefox")
//         break
//     }
// }


//for.....in loop for objects iteration
// const user={
//     name: "john",
//     age:56,
//     isvalid:false,
//     number:56.78,
//     letter: 'f'
// }
// for (const key in user) {
//         console.log("key is --> " +key + " value is --> " + user[key])
//     }



//for.....in loop with arrays.
//it will only print the index numbers
// const browser=["chrome", "firefox"]
// for (const key in browser) {
//     console.log(key)   
//     }


//to print values of array using for....in loop
// const browser=["chrome", "firefox"]
// for (const key in browser) {
//     console.log(browser[key])   
//     }


//print index and value using for....in loop
const browser=["chrome", "firefox"]
for (const key in browser) {
    console.log(key +":" +browser[key])   
    }