//parent class or super class is same.

class Vehicle{

    constructor(make, model, year){
        this.make=make;
        this.model=model;
        this.year=year;
    }

    getInformation(){
        return `${this.make}, model - ${this.model}, year -- ${this.year}}}`
    }

    startEngine(){
        console.log("engine started" + this.make)
    }

    stopEngine(){
        console.log("engine stopped" + this.make)
    }
}

//child class also known as sub class

class Car extends Vehicle{

    constructor(make, model, year, fuel){
        super(make, model, year)//for calling parent class constructor from child
        this.fuel=fuel;
    } 

    driveCar(){
        console.log("driving the car" + this.model + this.fuel)
    }
        
    }


    //another child class

    class Truck extends Vehicle{

        constructor(make, model, year, loadingcapacity){
            super(make, model, year)//for calling parent class constructor from child
            this.loadingcapacity=loadingcapacity;
        } 
    
        driveTruck(){
            console.log("driving the truck" + this.model +" and capacity is" + this.loadingcapacity)
        }
            
        }

//creating objects also known as creating instances
//new keyword
const car=new Car("titan", "blue", 5000, "petrol")

const truck=new Truck("tata", "red", 4699, 609)

// console.log(car.startEngine()) //we will get undefined in output, because console.log already written inside method and method 
//is not returning anything else.

// car.startEngine() //this will not give undefined.

// console.log(car.getInformation()) //we used console because method returns something
//method also does not have any console.log() statements in it.


// truck.startEngine()
// console.log(truck.getInformation())

// car.driveCar() 
// truck.driveTruck()


//try accessing one childs method from another child
truck.driveCar()