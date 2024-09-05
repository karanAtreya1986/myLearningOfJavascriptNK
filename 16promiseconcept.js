//we can give any name, not necessarily resolve and reject

const randomNumberPromise=new Promise((resolve, reject)=>{

    //async operation using set timeout
    setTimeout(() => {
        const randomValue=Math.random();
        if(randomValue>0.5){
            // resolve("random value is ", randomValue)
            //write this line to print the value:
            // resolve(randomValue)
            //adding + instead of comma reduces ambuguity in promise
            resolve("and the value is "+randomValue)
        }else{
            // reject(new Error("value is very small")) //for writing error message we use Error class, so use new keyword and
            //the error message
            reject("and the value is very small"+randomValue)
        }
    }, 5000); //delay of 5 seconds
});

randomNumberPromise
    .then(result=>{
        console.log("code is passed with value" , result)
    })
    .catch(error=>{
        console.log("code is reject and failed, " , error)
    })