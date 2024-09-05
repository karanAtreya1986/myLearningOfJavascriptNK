
//filter
//returns the filtered result
//predicate function means boolean condition function
//returns all even numbers and returns array
// let num=[1,2,3,4,5]
// let evennumber=num.filter((e)=>e%2===0)
// console.log(evennumber)


//another example
//get female employees who are over 30 years
let employee=[
    {
        myname:"john",
        age:30,
        gender: "male"
    },
    {
        myname:"bob",
        age:50,
        gender: "female"
    },
    {
        myname:"lisa",
        age:20,
        gender: "female"
    },
    {
        myname:"priya",
        age:40,
        gender: "female"
    },
    {
        myname:"peter",
        age:130,
        gender: "male"
    }
]
let femaleemployeeover30=employee.filter((emp)=>{
    return emp.gender==="female" && emp.age>30;
})
console.log(femaleemployeeover30)