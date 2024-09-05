const numbers=[11,22,3,4,5,6,6,5,11,22,45.67, 67.89, 67.89, 45.67, 45345.23432432]
const names =["Tom", "Tom", "jindal", "karan", "naveen", "jindal", "karan", "naveen", "tom", "kAran", "NAVEEN", "KarAN"]

const uniquenumbers=[... new Set(numbers)]
console.log(uniquenumbers)

const uniquenames=[...new Set(names)]
console.log(uniquenames) //note js is case sensitive
//Karan is not same as karan