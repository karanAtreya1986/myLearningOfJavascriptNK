// // //first case
// // //three functions and all are promise resolved
// // //all functions will run one by one and in sequence
// // //subsequent functions will wait till earlier one is over.

// // const function1=()=>{
// //     return new Promise((resolve, reject)=>{
// //         setTimeout(() => {
// //             resolve("this is data from function1")
// //         }, 3000);
// //     })
// // };


// // const function2=()=>{
// //     return new Promise((resolve, reject)=>{
// //         setTimeout(() => {
// //             resolve("this is data from function2")
// //         }, 4000);
// //     })
// // };

// // const function3=()=>{
// //     return new Promise((resolve, reject)=>{
// //         setTimeout(() => {
// //             resolve("this is data from function3")
// //         }, 1000);
// //     })
// // };


// // //promise all expects all functions with promises in form of array
// // Promise.all([function1(), function2(), function3()])
// // //since we get multiple results, lets store them in array
// //     .then(dataArray=>{
// //         console.log("hello buddy this is your function wise data ", dataArray)
// //     }) 
// //     .catch(error=>{
// //         console.log("error in promise buddy ", error)
// //     });




// //first case
// //three functions and all are promise resolved
// //all functions will run one by one and in sequence
// //subsequent functions will wait till earlier one is over.


// //we can resolve anything
// //we created array and resolving it

// const function1=()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             const data1=[1,2,3,4,5]
//             resolve(data1)
//         }, 3000);
//     })
// };


// const function2=()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             const data2=[6,7,8,9,10]
//             resolve(data2)
//         }, 4000);
//     })
// };

// const function3=()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             const data3=[11.1,12.2,13.3,14.4, 15.5]
//             resolve(data3)
//         }, 1000);
//     })
// };


// //promise all expects all functions with promises in form of array
// Promise.all([function1(), function2(), function3()])
// //since we get multiple results, lets store them in array
//     .then(dataArray=>{
//         console.log("hello buddy this is your function wise data ", dataArray)
//     }) 
//     .catch(error=>{
//         console.log("error in promise buddy ", error)
//     });



// second case
// function1 is resolved
// function2 is rejected

// const function1=()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             const data1=[1,2,3,4,5]
//             resolve(data1)
//         }, 3000);
//     })
// };

// const function2=()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             reject("hello reject buddy how are you")
//         }, 1000);
//     })
// };

// Promise.all([function1(), function2()])
//     .then(dataArray=>{
//         console.log("lets see which data passes and print it here ", dataArray)
//     })
//     .catch(error=>{
//         console.log("error in the promise code will be printed here ", error)
//     })


    //promise.all() will be completed only if all promises are resolved
    //else if there is even one failure, then promise.all() will only return whats in catch blocks



//lets try with multiple catch blocks

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

Promise.all([function1(), function2()])
    .then(dataArray=>{
        console.log("lets see which data passes and print it here ", dataArray)
    })
    .catch(error=>{
        //nothing happens in output, dont know why
        // return new Error("hi error, see if am going to next catch block ", error)
        //nothing happens in output, dont know why
        return error
    })
    .catch(error1=>{
        console.log("welcome to the error world ", error1)
    })