//every
// every element if satisfying the condition should return true else false
// let num=[1,2,3,4,5]
// let flag=num.every((e)=>e<10)
// console.log(flag)


// what happens if any value not matches the condition
//returns false.
// let num=[1,2,3,4,50]
// let flag=num.every((e)=>e<10)
// console.log(flag)


//some
//even if some elements match result is true
//checking for even numbers.
// let num=[1,2,3,4,5]
// let result=num.some((e)=>e%2===0)
// console.log(result)


//what if all false.
// let num=[1,2,3,4,5]
// let result=num.some((e)=>e>30)
// console.log(result)


//find
//return the first element from array which matches the condition and then stop
// let num=[1,2,3,4,5]
// let result=num.find((e)=>e%2===0)
// console.log(result)


//what if none of the condition matches
//we get undefined.
// let num=[1,7,3,11,5]
// let result=num.find((e)=>e%2===0)
// console.log(result)


//indexof
//when element not found then return -1
// let fruits=["apple", "banana", "orange"]
// let result=fruits.indexOf("tiger")
// console.log(result)


//index of element which is present
// let fruits=["apple", "banana", "orange"]
// let result=fruits.indexOf("orange")
// console.log(result)


//last index of
//if there are multiple occurrences of same element, then return the lastest element index.
// let fruits=["banana", "apple", "orange", "apple"]
// let result =fruits.lastIndexOf("apple")
// console.log(result)


//reverse array
//prints in reverse order.
// let fruits=["banana", "apple", "orange", "apple"]
// let result = fruits.reverse()
// console.log(result)


//sort
//sorts alphabetically.
// let fruits=["banana", "apple", "orange", "apple"]
// let result = fruits.sort()
// console.log(result)


//another example of sort
//1st numbers
// then capital letters
//then small letters
let fruits=["12345banana", "Apple", "orange", "apple"]
let result = fruits.sort()
console.log(result)