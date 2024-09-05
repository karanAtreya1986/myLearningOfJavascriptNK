// const fetchUserInfo = async ()=>{
//     //fetch will take in url
//     //fetch returns a promise response.
//     const response = await fetch("https://reqres.in/api/users?page=2") //we need to wait for data to load so await
//     //async step

//     //if response is not ok throw error
//     if(!response.ok){
//         throw new Error("user data is not found ......... ")
//     }

//     //parse the response if available
//     const userData= await response.json(); //this also needs to wait for the response to be available
//     //so use await above.
//     //async step

//     console.log(userData)
// }

//     //call the function
//     fetchUserInfo();
//     // in output we get promise pending



//lets use code without async and await.
// const fetchUserInfo =  ()=>{
//     //fetch will take in url
//     //fetch returns a promise response.
//     const response =  fetch("https://reqres.in/api/users?page=2") //we need to wait for data to load so await
//     //async step

//     //if response is not ok throw error
//     if(!response.ok){
//         throw new Error("user data is not found ......... ")
//     }

//     //parse the response if available
//     const userData=  response.json(); //this also needs to wait for the response to be available
//     //so use await above.
//     //async step

//     console.log(userData)
// }

//     //call the function
//     fetchUserInfo();
//     // in output we get promise pending


// // lets use async await and try catch block
// const fetchUserInfo =  async ()=>{
//     try{
//         const response =  await fetch("https://reqres.in/api/users?page=2") //we need to wait for data to load so await
   
//         if(!response.ok){
//             throw new Error("user data is not found ......... ")
//         }
    
//         const userData=  await response.json(); //this also needs to wait for the response to be available
      
    
//         console.log(userData)
//     }
//   catch(error){
//     console.log("error is ", error)
//   }
// }

//     fetchUserInfo();




// lets use async await and try catch block
//this time we give wrong endpoint to see if error is captured

// const fetchUserInfo =  async ()=>{
//     try{
//         const response =  await fetch("https://reqres.in/tester/karanusers?page=2") //we need to wait for data to load so await
   
//         if(!response.ok){
//             throw new Error("user data is not found ......... ")
//         }
    
//         const userData=  await response.json(); //this also needs to wait for the response to be available
      
    
//         console.log(userData)
//     }
//   catch(error){
//     console.log("error is ", error)
//   }
// }

//     fetchUserInfo();


//comment line 107-109 and with wrong url
//lets see if catch block is being captured
//we get error trace that response parsing was not proper
//because response itself not generated due to wrong url.

const fetchUserInfo =  async ()=>{
    try{
        const response =  await fetch("https://reqres.in/tester/karanusers?page=2") //we need to wait for data to load so await
   
        // if(!response.ok){
        //     throw new Error("user data is not found ......... ")
        // }
    
        const userData=  await response.json(); //this also needs to wait for the response to be available
      
    
        console.log(userData)
    }
  catch(error){
    console.log("error is ", error)
  }
}

    fetchUserInfo();
