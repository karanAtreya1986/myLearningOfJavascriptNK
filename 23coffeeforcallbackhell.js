//make coffee
//start coffee machine - 2 seconds
//grind coffee beans - 1 second
//boil water - 1.5 seconds
//pour boiling water into cup - 0.5 seconds
//add ground coffee to the cup - 0.9 seconds
//stir coffee - 0.3 seconds
//enjoy coffee with karan !!
//we need to avoid callback hell and make all steps in synchronous fashion

function startCoffeeMachine(callback){
    console.log("starting the coffee machine ....")
    setTimeout(() => {
        console.log("coffee machine is ready ..... ")
        callback("coffee machine is now ready")
    }, 2000);
};

function grindCoffee(callback){
    console.log("grinding coffee beans .....")
    setTimeout(() => {
        console.log("coffee beans are ground .......... ")
        callback("ground coffee.......")
    }, 1000);
};

function boilWater(callback){
    console.log("boiling water .......")
    setTimeout(() => {
        console.log("water is boiled ...........")
        callback("boiled water .........")
    }, 1500);
};

function pourBoilWaterIntoCup(boiledWater, callback){
    console.log("pouring boiling water into cup .........")
    setTimeout(() => {
        console.log("boiling water is added into the cup ............")
        callback(boiledWater + "in the cup ")
    }, 500);
};

function addGroundCoffeeToCup(groundCoffee, callback){
    console.log("adding ground coffee to the cup .........")
    setTimeout(() => {
        console.log("ground coffee is added to the cup ...........")
        callback("coffee is added to " + groundCoffee)
    }, 900);
};

function stirCoffee(coffeeInCup, callback){
    console.log("stirring the coffee ..............")
    setTimeout(() => {
        console.log("coffee is stirred and ready ........... ")
        callback("enjoyable " + coffeeInCup)
    }, 300);
};

function enjoyCoffee(finalCoffee){
    console.log("enjoying my "+ finalCoffee)
}

// //callback hell to call the above code
// startCoffeeMachine(function(coffeeMachineStatus){ //pass in call back function and we get machine status
//     grindCoffee(function(groundCoffee){ //pass in callback function and whatever is returned by callback is
//         //stored in the variable grindingCoffee
//         boilWater(function(boiledWater){ //pass in callback function
//             pourBoilWaterIntoCup(boiledWater, function(waterInCup){
//                 //pass in the boil water and callback function in step 68
//                 //boil water comes from step 67
//                 addGroundCoffeeToCup(groundCoffee, function(coffeeInCup){
//                     //pass in the grinding coffee from step 65
//                     //we also pass in the callback function
//                     stirCoffee(coffeeInCup, function(finalCoffee){
//                         //pass in what is returned from function coffeeInCup
//                         //pass in call back function
//                         enjoyCoffee(finalCoffee) //pass in the value from stir coffee function
//                     })
//                 })
//             })
//         })
//     })
// })


//callback hell to call the above code, this time with arrow function
startCoffeeMachine((coffeeMachineStatus)=>{ 
    grindCoffee((groundCoffee)=>{ 
        boilWater((boiledWater)=>{ 
            pourBoilWaterIntoCup(boiledWater, (waterInCup)=>{
                addGroundCoffeeToCup(groundCoffee, (coffeeInCup)=>{
                    stirCoffee(coffeeInCup, (finalCoffee)=>{
                        enjoyCoffee(finalCoffee) 
                    })
                })
            })
        })
    })
})