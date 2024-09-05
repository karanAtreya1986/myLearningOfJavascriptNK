//solves issues of if-else checking every condition
//directly  jumps to the respective case and not all cases.
//if no case satisfied then goes to the default.
//better performance than if-else.
/*what happens when we give invalid day. it will go to default. since in this program we are returning day, so day will have
the value as undefined.*/
//break is optional in default, as that is the last case to run.
    
function checkdayofweek(daynumber){
    let day;

    switch (daynumber) {
        case 0:
            day="Sunday"
            break;
        case 1:
            day="monday"
            break;
        case 2:
            day="tuesday"
            break;
        case 3:
            day="wednesday"
            break;
        case 4:
            day="thursday"
            break;
        case 5:
            day="friday"
            break;
        case 6:
            day="saturday"
            break;
        default:
            console.log("invalid day")
            break;
    }
    return day;
}

console.log(checkdayofweek(0))
console.log(checkdayofweek(89))