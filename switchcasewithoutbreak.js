//switch case without break.
//since no break, so the last value which is returned to day is printed.
    
// function checkdayofweek(daynumber){
//     let day;

//     switch (daynumber) {
//         case 0:
//             day="Sunday"
//         case 1:
//             day="monday"
//         case 2:
//             day="tuesday"
//         case 3:
//             day="wednesday"
//         case 4:
//             day="thursday"
//         case 5:
//             day="friday"
//         case 6:
//             day="saturday"
//         default:
//             day="invalid"
//     }
//     return day;
// }

// console.log(checkdayofweek(0))
// console.log(checkdayofweek(89))


//switch case with random breaks.
//see the output what is printed.
    
// function checkdayofweek(daynumber){
//     let day;

//     switch (daynumber) {
//         case 0:
//             day="Sunday"
//         case 1:
//             day="monday"
//         case 2:
//             day="tuesday"
//         case 3:
//             day="wednesday"
//             break
//         case 4:
//             day="thursday"
//         case 5:
//             day="friday"
//         case 6:
//             day="saturday"
//         default:
//             day="invalid"
//     }
//     return day;
// }

// console.log(checkdayofweek(0))
// console.log(checkdayofweek(89))


//another example for browser.
//tip -- dont forget break with switch
let browser="chrome"
switch(browser){
    case "chrome":
        console.log("chrome started")
        break;
    case "firefox":
        console.log("firefox started")
        break;
    default:
        console.log("please pass right browser ," + browser)
        break;
}