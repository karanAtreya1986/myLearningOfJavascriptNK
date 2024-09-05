
//function resolving the promise

const function1=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            const data1=[1,2,3,4,5]
            resolve(data1)
        }, 3000);
    })
};  

//function rejecting the promise

const function2=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject("hello reject buddy how are you")
        }, 500);
    })
};

//promise.race()
//it will return the one which first got completed
//here also input is in form of array of promises.

Promise.race([function1(), function2()])
.then(result=>{
    console.log("result is ", result)
})
.catch(error=>{
    console.log("error is ", error)
})