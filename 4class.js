//class is blueprint for multiple objects
//properties are variables of the class.
//behaviour is nothing but methods of the class.

class car{

    // let name;

    //constructor overloading not allowed in js.
    //only one constructor per class.
    constructor(name, price, model, color){
        this.name=name;
        this.price=price;
        this.model=model;
        this.color=color;
    }

    //inside class no need to give function or return type or access specifiers to methods and variables.
    // refuel(){
    //     console.log("car is refuelled")
    // }

    //see how to access the class variables inside method
    refuel(){
        console.log(this.name + " car is refuelled")
    }


    //without this keyword
    //we get name is not defined
    // refuel(){
    //     console.log(name + " car is refuelled")
    // }
}

//new keyword to create object.
//c1 is known as reference variable.
//mandatory to access the object properties.
const c1=new car("bmw", 100, "520d", "white")

// console.log(c1)

// console.log(c1.name)

//call the method
c1.refuel()