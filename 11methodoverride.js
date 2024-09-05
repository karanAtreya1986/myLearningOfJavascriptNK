//method override allowed.
//same method in parent and child class, same method name, same number of parameters, only body will be different.
class car{

    //lets check if variables can be accessed by child class
     minSpeed=1000;

    constructor(make, model){
        this.make=make;
        this.model=model;
    }

    startEngine(){
        console.log("starting engine for the car")
    }
}

class audi extends car{

    //same variable inside child class
    minSpeed=456547.56765756;

    startEngine(){
        console.log("start engine for the audi class")
    }

    //own method of audi
    autoParking(){
        console.log("audi will auto park the car for you")
    }
}

// let a1=new audi();
// a1.startEngine()

//whose object we create that method will be called.
//now car class startengine method is called.
// let a1=new car();
// a1.startEngine()



// let a1=new audi();
// a1.autoParking() 

//error when we try to access child elements from parent
// let a1=new car();
// a1.autoParking() 



//access parent class variable
// let a1=new audi();
// console.log(a1.minSpeed)


//we created object of car class
//so we can access variables of car class only, if the same variable is also present in child class
let a1=new car();
console.log(a1.minSpeed)