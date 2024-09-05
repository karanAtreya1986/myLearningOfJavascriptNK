//create async function without await

// async function f1(){
//     console.log("this is async function without await statement")
//     return 43; //return resolved promise wrapping 43
// }

// f1()
// //since function returns resolved promise so use promise chaining and then statements
// .then(result=>{
//     console.log(result)
// })

//async function will always return a promise


//second problem
// create async function which returns error 
//no await
//returns rejected promise

// async function f2(){
//     console.log("this is async function without await and with error")
//     throw new Error("hi error welcome back") //returns rejected promise wrapping this error
// }

// f2()
// //since rejected promise is returned by function so we use catch blocks to catch errors
// .catch(error=>{
//     // console.log(`the error message is ${error}`)
//     //see what happens when we print only error
//     //it prints the complete trace
//     console.log(error)
// })



// third problem
// async function with resolved/rejected promise
//utility method written
function getInfo(){
    return new Promise((resolve, reject)=>{
        const randomNumber=Math.random()//generate random number
        setTimeout(() => {
            if(randomNumber<0.5){
                // resolve(12);
                resolve(randomNumber) //lets try returning the exact random number
            }else{
                // reject(new Error("wrong value is entered"));
                // reject(new Error("wrong value is entered ", randomNumber));
                // reject(new Error("wrong value is entered "+ randomNumber)); //+ can change the output so much
                reject(new Error(`wrong value is entered ,  ${randomNumber}`)); //with back ticks its awesome in js.
            }
        }, 3000);
    })
}

// create async function which is calling getinfo()

async function getNumberInfo(){
    //lets use try catch block to handle errors nicely
    try{
        const result= await getInfo(); //async step
        console.log("result is ", result) //normal or sync step
    }
   catch(error){
    console.log("error is ", error)
   }
}


//now call the hero function
getNumberInfo();


//await keyword can be used with async functions only
//with normal functions they throw error
//make the function async and error goes
async function f3(){
    await getInfo()
}