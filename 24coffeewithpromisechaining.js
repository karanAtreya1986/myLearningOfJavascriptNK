//same coffee making example with promise chaining.
//make coffee
//start coffee machine - 2 seconds
//grind coffee beans - 1 second
//boil water - 1.5 seconds
//pour boiling water into cup - 0.5 seconds
//add ground coffee to the cup - 0.9 seconds
//stir coffee - 0.3 seconds
//enjoy coffee with karan !!
//promise chaining resolves callback hell
//more readable.
//better error handling.

//every promise function returns promise
//last function is to just to enjoy coffee and not return anything.

function startCoffeeMachine(){
    return new Promise((resolve)=>{
        console.log("starting the coffee machine ........")
        setTimeout(() => {
            console.log("coffee machine is ready .........")
            resolve("coffee machine is ready and resolved")
        }, 2000);
    })
};

function grindCoffeeBeans(){
    return new Promise((resolve)=>{
        console.log("grinding the coffee beans ........")
        setTimeout(() => {
            console.log("coffee beans are ground .........")
            resolve("ground coffee and resolved")
        }, 1000);
    })
};

function boilWater(){
    return new Promise((resolve)=>{
        console.log("boiling water  ........")
        setTimeout(() => {
            console.log("water is boiled .........")
            resolve("boiled water and resolved")
        }, 1500);
    })
};

function pourBoilingWaterIntoCup(boiledWater){
    return new Promise((resolve)=>{
        console.log("pouring boiling water into the cup ........")
        setTimeout(() => {
            console.log("boiling water is in the cup .........")
            resolve(boiledWater + "in cup and resolved")
        }, 500);
    })
};

function addCoffeeToCup(groundCoffee){
    return new Promise((resolve)=>{
        console.log("adding ground coffee to the cup ........")
        setTimeout(() => {
            console.log("coffee is added to the cup .........")
            resolve("coffee is added to " + groundCoffee)
        }, 500);
    })
};

function stirCoffee(coffeeInCup){
    return new Promise((resolve)=>{
        console.log("stirring the coffee ........")
        setTimeout(() => {
            console.log("coffee is stirred .........")
            resolve("enjoyable " + coffeeInCup)
        }, 500);
    })
};

//here no promise returned as we just want to enjoy coffee and print the statement 
function enjoyCoffee(finalCoffee){
  console.log("Enjoying my " + finalCoffee)
};

//lets use the promise chaining concept
//better readability
//better error handling
//easy to debug by printing the output of resolve or reject

// startCoffeeMachine((coffeMachineStatus)=>{ //whatever resolve returns is stored in coffeeMachineStatus
//     console.log(coffeMachineStatus); //print what is returned.
//     return grindCoffeeBeans(); //this is chaining, calling of next method
//     //since grindCoffeBeans returns promise lets chain the promises using then in step 92
// })
// .then((groundCoffee)=>{
//     console.log(groundCoffee) //same logic as step 87
//     return boilWater()
// })
// .then((boiledWater)=>{
//     console.log(boiledWater)
//         return pourBoilingWaterIntoCup(boiledWater)
// })
// .then((waterInCup)=>{
//     console.log(waterInCup)
//     return addCoffeeToCup(waterInCup)
// })
// .then((coffeeInCup)=>{
//     console.log(coffeeInCup)
//     return stirCoffee(coffeeInCup)
// })
// .then((finalCoffee)=>{
//     console.log(finalCoffee)
//     enjoyCoffee(finalCoffee)
// })
// //if any error comes handle using catch handler
// //in promises this is standard way to handle errors
// .catch((error)=>{
//     console.log("error occurred " + error)
// })



//promise chaining in correct way
startCoffeeMachine() //this is correct way as function doesnt require arguments
    .then((coffeeMachineStatus)=>{
        console.log(coffeeMachineStatus)
        return grindCoffeeBeans(); //this is correct way as function doesnt require arguments
    })
.then((groundCoffee)=>{
    console.log(groundCoffee) 
    return boilWater()
})
.then((boiledWater)=>{
    console.log(boiledWater)
        return pourBoilingWaterIntoCup(boiledWater)
})
.then((waterInCup)=>{
    console.log(waterInCup)
    return addCoffeeToCup(waterInCup)
})
.then((coffeeInCup)=>{
    console.log(coffeeInCup)
    return stirCoffee(coffeeInCup)
})
.then((finalCoffee)=>{
    console.log(finalCoffee)
    enjoyCoffee(finalCoffee)
})
//if any error comes handle using catch handler
//in promises this is standard way to handle errors
.catch((error)=>{
    console.log("error occurred " + error)
})