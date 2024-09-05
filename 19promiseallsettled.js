const function1=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const data1=[1,2,3,4,5]
            resolve(data1)
        }, 3000);
    })
};  

const function2=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject("hello reject buddy how are you")
        }, 1000);
    })
};

//all settled method also accepts array of promises

Promise.allSettled([function1(), function2()])
//since results will also contain multiple values which is an array
//so we can use the for each method.
//iterate over the promises.

//promise.allsettled will give all promise results - resolved and rejected ones.

.then(results=>{
    results.forEach(result=>{
        if(result.status==="fulfilled"){
            console.log("value of the promise is ", result.value) //gives value of resolve
        }else{
            console.log("reason for rejection is ", result.reason) //gives reason for failure
        }
    })
})