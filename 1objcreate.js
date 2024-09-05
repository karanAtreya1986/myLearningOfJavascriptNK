//object literals
//we have to use {}
// const user={
//     name:"michael",
//     age:45,
//     valid:true,
//     number:56.78,
//     char:'f'
// }
// console.log(user.name)


//constructor function
//which category of object needs to be created
// function car(brand, name, price){
//     this.brand=brand; 
//     this.name=name;
//     this.price=price;
// }
// const c1=new car("austin", "texas", 567890)
// // console.log(c1)

// //another way to call using back ticks
// console.log(`${c1.name}, and price is ${c1.price}`)


//class style
// class customer{
//     constructor(name, product){ //local variables of constructor
//         this.name=name; //instance variables
//         this.product=product;
//     }

//     addToCart(){
//         console.log(`${this.product} added to the cart`)
//     }
// }

// const c1=new customer("johny", "macbook")
// console.log(c1.name)
// console.log(c1)
// console.log(c1.product)
// c1.addToCart()



//object.create()
//first create prototype of object.
// const employeePrototype={
//     printInfo: function(){
//         console.log(`employee name is ${this.name}`)
//     }
// }

// let e1=Object.create(employeePrototype)
// e1.name="tommy"
// console.log("first print e1" , e1)
// e1.employeePrototype
// console.log("second print this , " , e1.employeePrototype)
// console.log("third print this , " , e1.employeePrototype())
// e1.employeePrototype()
// e1.printInfo()




//using factory functions
//factory function always returns object
//allows to create multiple instance of object damn easily.
//this keyword can be used when we refer to instances of class or objects
// function createDepartment(departmentName, hod){
//     //see how to return objects.
//     return{
//         deptName:departmentName,
//         head:hod,
//         printInfo:function(){
//             console.log(`department name is ${this.deptName} and hod is ${this.head}`) //here we need to give this keyword to refer
//             //to the object
//         }
//     }
// }

// const dept1=createDepartment("timepass", "hello")
// dept1.printInfo()
// dept1.head//we need to use console.log to print
// console.log("to print the head." , dept1.head)



//using this keyword and checking
//see line 95 and 96
function createDepartment(departmentName, hod){
    //see how to return objects.
    //when giving values to objects, we dont use the this keyword
    //to access the values from the object, using functions or anything else, we use the this keyword
    return{
        deptName:this.departmentName,
        head:this.hod,
        printInfo:function(){
            console.log(`department name is ${this.deptName} and hod is ${this.head}`) //here we need to give this keyword to refer
            //to the object
        }
    }
}

const dept1=createDepartment("timepass", "hello")
dept1.printInfo()
dept1.head//we need to use console.log to print
console.log("to print the head." , dept1.head)