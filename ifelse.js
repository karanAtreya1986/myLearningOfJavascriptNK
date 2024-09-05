//simple if else logic
// function checkage(age){
//     if(age>=18){
//         console.log("you can vote")
//     }else{
//         console.log("you should be over 18 to vote")
//     }
// }

// checkage(10)
// checkage(20)


//checking multiple if else conditions.
// function checknumber(number){
//     if(number>0){
//         console.log("number is zero")
//     }else if(number<0){
//         console.log("number is negative")
//     }
//     else{
//         console.log("not a number")
//     }
// }

// checknumber(10)
// checknumber(-98)
// checknumber(0)


//nested if else statement.
// function checkgrade(score){
//     let grade;
//     if(score>=90){
//         grade='A';
//     }else{
//         if(score>=80){
//             grade='b';
//         }else{
//             if(score>=70){
//                 grade='c'
//         }
//         else{
//             grade='d'
//         }
//         }
//     }
// console.log(grade)
// }

// checkgrade(10)
// checkgrade(70)
// checkgrade(81)
// checkgrade(100)


//problems with ifelse
//it will go and check every if statement even if the condition is satisfied.
//if you have written else, then it will be applicable to last if, so if the last if statement fails, the else will run
// let browser="chrome"
// if(browser==="chrome"){
//     console.log("launch chrome")
//     // break;
// }
// if(browser==="firefox"){
//     console.log("launch firefox")
// }
// else{
//     console.log("invalid browser")
// }


//we can try using else-if and check.
//only problem is all conditions will be checked here even if any one of them is satisfied.
let browser="chrome"
if(browser==="chrome"){
    console.log("launch chrome")
    // break;
}
else if(browser==="firefox"){
    console.log("launch firefox")
}
else{
    console.log("invalid browser")
}