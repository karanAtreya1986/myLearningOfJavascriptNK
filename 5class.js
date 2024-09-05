//when we try to add more than one constructor

class car{

    constructor(name, price, model, color){
        this.name=name;
        this.price=price;
        this.model=model;
        this.color=color;
    }

    // constructor(name){
    //     this.name=name;
    //     this.price=price;
    //     this.model=model;
    //     this.color=color;
    // }

    //see how to access the class variables inside method
    refuel(){
        console.log(this.name + " car is refuelled")
    }
}

const c1=new car("bmw")

console.log(c1)

console.log(c1.name)

//call the method
c1.refuel()