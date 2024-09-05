// //callback function is passed as argument to another function.
// //first async task runs then callback is called.
// //we will see with examples.

// //basic callback
// //normal function which has callback in it.
// //no need of parenthesis when we pass callbackfunction as parameter
// function greet(name, callbackfunction){
//     console.log("hello " + name) //this is async task, this will run first then the callback will run
//     callbackfunction(); //callback function to be called with parenthesis, as we are calling.
// }

// //callbackfunction
// function welcome(){
//     console.log("welcome to poland")
// }

// //how to use
// //dont use parenthesis for callback function name
// greet("karan", welcome)


//callback function with async function
// function printInfo(name, callback){
//     //async function which will run first before callback
//     setTimeout(() => {
//         console.log("print the name for the function " + name)
//         callback("please tell me how is the great canada")
        
//     }, (5000)); //after 5 seconds, work on what is mentioned inside the body of settimeout()

// }


//another call back function written
//callback function
// function displayMessage(message){
//     console.log(message)
// }

//call the main function
// printInfo("lisa", displayMessage)


//another example
//normal function is created
function fetchUserDetails(userid, callback){
    setTimeout(function() {
        //create object inside the set time out function
        const users={
            1: {id:1, name: "anthony"},
            2: {id:2, name: "rocky"}
        };

        //call the users with their id, this will fetch the users by their id and store them
        const user=users[userid]

        //if user exist then call the callback function and return user details 
        //if user does not exist then return error

        if(user){
            callback(null, user)// if user exist, then error should be null as there is no error and pass in user details
        }
        else{
            callback("user not found" , null)//if user is not found, then return this
        }
    }, (5000)); //this entire function will run after five seconds.
}

//the main hero, call back function 
function hiCallBack(error, user){
    //pass in error and user as parameter
    if(error){
        // console.error("hello error, " + error) // here object, object is printed
        //see how comma can make a big difference in the way output is seen
        console.error("hello error, " , error)
    }
    else{
        // console.log("user data is ," + user)//here object, object is printed
        //see how comma can make a big difference in the way output is seen
        console.log("user data is ," ,user)
    }
}

//in output we will get user data is object of object as we have created one object inside another object
// fetchUserDetails(1, hiCallBack);


//try to pass in user not available
fetchUserDetails(59, hiCallBack)