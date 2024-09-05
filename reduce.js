//reduce
//reduce the array to single length
//returns some calculated value
//first argument is accumulator which will keep adding and storing values
//second argument will go to each and every element in array
// after arrow we are want to add all the digits (you can perform any operation)
//what will be the initial value of accumulator

// let number =[1,2,3,4,5]
// let result=number.reduce((acc,num)=>acc+num,0)
//values in acc:
//1st iteration --> 0+1=1 
//2nd iteration --> 1+2 =3
//3rd iteration --> 3+3 =6
//4th iteration --> 6+4 = 10
//5th iteration --> 10+5 =15

// console.log(result)


//how to read in js
// let number =[1,2,3,4,5]
// let result = number.reduce((a,b)=>a+b,0)


//more reduce examples
// find max number in Array
//see line 36, how we assigned default first value as the max value without hardcoding.
// let top=[10,20,30,40,50]
// let maxnumber=top.reduce((a,b)=>{
//     if(b>a){
//         return b
//     }else{
//         return a
//     }
// }, top[0])
// console.log(maxnumber)


//find minimum number from array using reduce.
// let top=[10,20,30,40,50]
// let minNumber=top.reduce((a,b)=>{
//     if(b<a){
//         return b
//     }else{
//         return a
//     }
// }, top[0])
// console.log(minNumber)



//another example
// calculate total price of all items in cart
let cartItems=[
    {name: "jeans", price:100},
    {name: "tshirt", price:200.50},
    {name: "shoes", price:1200.150},
    {name: "hat", price:500},
]
let result=cartItems.reduce((acc, num)=>acc+num.price, 0)
console.log(result)