// //waits for atleast one promise to be fulfilled or resolved
// //if all promises fail, then all rejection promises returned in form of array

// const getMessage=()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("get message from api first")
//         }, 500);
//     })
// };

// const getUsers=()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             reject("get users from the second api is not allowed")
//         }, 300);
//     })
// };


// const getProducts=()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             reject("get products  from the third api is not allowed")
//         }, 1000);
//     })
// };

// //promise.any also takes array as an argument
// Promise.any([getMessage(), getUsers(), getProducts()])
// .then(result=>{
//     console.log("first successful promise which is resolved is ", result) //will log the first resolved promise
// })
// .catch(error=>{
//     console.log("all promises are rejected with errors, ", error) //if all promises rejected, then this will log the rejection reason
// })


//lets resolve all the promises.
//the one with shortest wait time will be returned.

// const getMessage=()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("SECOND get message from api first")
//         }, 500);
//     })
// };

// const getUsers=()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("FIRST get users from the second api is not allowed")
//         }, 300);
//     })
// };


// const getProducts=()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("THIRD get products  from the third api is not allowed")
//         }, 1000);
//     })
// };

// //promise.any also takes array as an argument
// Promise.any([getMessage(), getUsers(), getProducts()])
// .then(result=>{
//     console.log("first successful promise which is resolved is ", result) //will log the first resolved promise
// })
// .catch(error=>{
//     console.log("all promises are rejected with errors, ", error) //if all promises rejected, then this will log the rejection reason
// })



//lets reject all the promises.
//see the beautiful output, how it comes in form of array.
const getMessage=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject("SECOND get message from api first")
        }, 500);
    })
};

const getUsers=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject("FIRST get users from the second api is not allowed")
        }, 300);
    })
};


const getProducts=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject("THIRD get products  from the third api is not allowed")
        }, 1000);
    })
};

//promise.any also takes array as an argument
Promise.any([getMessage(), getUsers(), getProducts()])
.then(result=>{
    console.log("first successful promise which is resolved is ", result) //will log the first resolved promise
})
.catch(error=>{
    console.log("all promises are rejected with errors, ", error) //if all promises rejected, then this will log the rejection reason
})