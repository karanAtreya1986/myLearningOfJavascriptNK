const fs=require('fs'); //fs module is used for handling files

//for async the method name is different
//we need to give callback function for async, which function to run after this runs
//if we get error store in error
//if it passes store in data
// const data=fs.readFile("13karan.txt", "utf-8", (error,data)=>{
//     console.log(data)
// });

//what if i give full path
//same output.
const data=fs.readFile("C:\\Users\\karan\\Desktop\\jsbyNaveen\\jsdemo\\13karan.txt", "utf-8", (error,data)=>{
    console.log(data)
});



console.log("testing karan")