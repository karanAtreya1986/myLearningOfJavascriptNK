// let a1=[] // this is an empty array.

// let numbers=[1,2,3,45,56,78, 89,45] // array with numbers.

// let fruits=["apples", "oranges", "bananas", 'f'] //array of strings and character.

// let lang=["java", "python", "javascript"]

//push method
//adds new value to end of array
// lang.push("node")
// console.log(lang)


//add more than one value at a time
// lang.push("node", "html")
// console.log(lang)


//pop
//removes last element from array 
// console.log(lang.pop()) //this will show the element which is removed
// console.log(lang) // this will show new array after removal


//shift
//removes first element from array
// console.log(lang.shift()) // this will show the first element which is removed
// console.log(lang) // this will show new array after removal.


//unshift
//adds element to start of array
// console.log(lang.unshift("tata")) //this will show the element number, in this case its the sixth element
//count starts from 1
// console.log(lang) //this will show new array after addition


//add multiple values at start
// console.log(lang.unshift("tata", "rocky"))
// console.log(lang)


//length
// console.log(lang.length)


//splice
//three parameters -- first is start index from where to remove, index starts from zero.
//second is how many elements to delete
//third is optional, if you want to add new value in their place

// let animals=["dog", 'cat', 'tiger', "lion"]
// console.log(animals.splice(1,1,"bear")) //this shows the removed element
// console.log(animals) // this prints new array after adjustment


//delete more elements and replace
// console.log(animals.splice(1,2,"bear"))
// console.log(animals)


//delete more elements and replace with more elements
// console.log(animals.splice(1,2,"bear", "elephant"))
// console.log(animals)


//slice function
//index starts from zero
//removes element from the start end, but end index is excluded.

let numbers=[1,2,3,4,5,6]
console.log(numbers.slice(1,3)) //shows the removed elements
console.log(numbers) // shows existing array only, we have to store in new variable after slicing for new array.


//concat
//joins arrays
// let fr=["banana", "apple"]
// let number=[1,2,3,4,55.66]
// console.log(fr.concat(number)) // prints the concatenated array


//indexof
// let colors=["red", "blue", "green"]
// console.log(colors.indexOf("red")) //gives index of the element



//index of
//when there are duplicates, returns the index of the first occurrence only.
// let colors=["red", "blue", "green", "red"]
// console.log(colors.indexOf("red"))

//when index not present, returns -1
// console.log(colors.indexOf("karan"))

//how to get the second, third index
// console.log(colors.indexOf("red", 2)) //second parameter is not mandatory, but it specifies index from where to search


//without hardcoding the index number
//see the output of the below two lines.
// console.log(colors.indexOf("red", colors.indexOf("red")))
// console.log(colors.indexOf("red", colors.indexOf("red")+1))


//includes
//checks value is present and returns true or false
// let test=["admin", "seller", "buyer"]
// let flag=test.includes("seller")
// console.log(flag)


//test multiple values with includes
// let flag=test.includes("seller", "vendor")
// console.log(flag)


//what happens if one include value is false and other is true
//it will still give true as one value is matched
// let flag=test.includes("seller", "rolls")
// console.log(flag)


//for each
//another way to print all array elements.
// let n1=[1,2,3,4,5,67,78.9453453, true, 'c', "tiger"]
// n1.forEach((element)=>{
//     console.log(element)
// })



//another example
let n1=[1,2,3,4,5,67,78.9453453, true, 'c', "tiger"]
n1.forEach((element)=>{
    console.log(element*10)
})