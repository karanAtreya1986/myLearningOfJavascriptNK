// //not possible in js.
// //becuase method overloading is compile time polymorphism
// //recent most function with same name will be picked up.
// function print(){
//     console.log("hello")
// }

// print() //change the location of print and see what is printed.

// function print(name){
//     console.log("hello ", name)
// }

// function print(name, age){
//     console.log("hello ", name, age)
// }

// // print()
// // print("karan") //since one value is not given, its undefined and since name given it is picked up.

// // print("karan", 18)


//how to solve method overloading with if-else condition checks

function displaybrowserinfo(browsername, browserversion, remoteexecution){
    if(typeof browsername==="string" && typeof remoteexecution ==="boolean"){
        console.log(`browser name is ${browsername}, version is ${browserversion} and remote execution is ${remoteexecution}`)
    }else if(typeof remoteexecution==='boolean'){
        console.log(`browser name is ${browsername} and remote execution is ${remoteexecution}`)
    }else{
        console.log(`browser name is ${browsername}`)
    }
}

// displaybrowserinfo("chrome", 114, true)

// another call
displaybrowserinfo(false)

//tip avoid complicated if-else and write individual functions.