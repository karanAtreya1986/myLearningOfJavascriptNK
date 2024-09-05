function getEvenNumber(value, delay){

    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            if(value%2===0){
                resolve(value)
            }else{
                reject(new Error("value is not even number"))
            }
            
        }, delay);
    })
}

//promise chain concept starts
getEvenNumber(4,2000)
    .then(result=>{
        console.log("step 1 getting the result,", result)
        // return getEvenNumber(3, 1000) //then handler can call the promise function and will return another promise for another
        //then or catch to use.
        //lets use return so that if we write another then, the value will be returned to it.
        return getEvenNumber(10, 2000) //lets pass even number and see if second then is activated.
    })
    .then(result1=>{
        console.log("step 2 getting the result, ", result1)
        return getEvenNumber(5, 1000)
    })
    // .catch(error=>{
    //     console.log("promise chain error," , error)
    // })
    //use error.message to get the exact log.
    .catch(error=>{
        console.log("promise chain error," , error.message)
    })
