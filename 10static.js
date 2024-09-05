//static
//for common or not changing values
//static not part of object references
//stored in common memory and accessed by all object references
//to access static properties and static methods use class name
//static can be applied to methods and variables

class car{
     static wheels=4;

     constructor(name, model, price){
        this.name=name;
        this.price=price;
        this.model=model;
        this.wheels=50; // this is not correct way, though it wont give error in output.
        //this refers to current class object.
     }

     static stop(){
        console.log("static car stop method")
     }

     drive(){
        console.log(this.name + " , is driving and non static method")
     }
}

const c1=new car("honda", "5 series" , 1332423)
// with this keyword we get undefined as we need to use objects to refer to the class items
// console.log(`name is ${this.name}, model is ${this.model} and price is ${this.price} and wheels is ${this.wheels}`)

//with normal objects see, the output, its awesome.
// console.log(`name is ${c1.name}, model is ${c1.model}, price is ${c1.price} and wheels is ${c1.wheels}`)

//with normal objects, and the class name for static
// console.log(`name is ${c1.name}, model is ${c1.model}, price is ${c1.price} and wheels is ${car.wheels}`)


//access the property wheels
// console.log(car.wheels)


//access static method
// car.stop()


//try accessing the static from object reference
//we get error
// c1.stop()

//we can access static variables with object reference
// console.log(c1.wheels)


//access non static method with object reference
// c1.drive()


//access non static function with class name
//you get error
// car.drive()


//try accessing static variable without class name
//error
// console.log(wheels)


//try accessing static method without class name
//error
stop()