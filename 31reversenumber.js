//12345 --> 54321

// function reverseNumber(num){
//     //reverse of single digit number is same
//     if(num>=0 && num<=9){
//         return num;
//     }
//     let reverseNum=0;
//     while(num!=0){
//         reverseNum=reverseNum*10 + (num%10)
//         //why we have to write reverseNum*10
//         //because if we dont write it
//         //123 --> 3
//         // second iteration it will be 3+2 =5
//         // third iteration it will be 5+1=6
//         //with reversenumber*10 we get
//         // 3*10=30
//         // second iteration it will be 30+2 = 32
//         // 32*10=320
//         // third iteration it will be 320+1=321
//         //number reversed
//         num=Math.floor(num/10) //in js, 5/2 will return 2.5 so we wont only the integer part so use math
//         //floor to get the integer value
//     }
//     return reverseNum
// }

// // console.log(reverseNumber(123))

// //lets try with single digits
// // console.log(reverseNumber(1))
// // console.log(reverseNumber(0))


// //in programming world, numbers starting with zero are octal numbers and not simple numbers
// // console.log(reverseNumber(0345345345))


// //try with numbers ending in zero
// //decimal numbers dont start with zero
// //octal numbers start with zero
// //so zero is removed in output as octal can come here
// console.log(reverseNumber(1230))



//another way to do using strings and character array
function reverseOfNumber(numbers){
    if(numbers>=0 && numbers<=9){
        return numbers;
    }

    var num1=numbers+"";
    // console.log(num1)//returns 123
    // console.log(typeof num1)//returns string

    var num2=num1.split("");
    // console.log(num2)//returns ['1', '2', '3']

    var num3=[...num1]
    // console.log(num3)//returns ['1', '2', '3']

    var num4="";

    for (let index = num2.length-1; index >=0; index--) {
        num4=num4 + num2[index]
    }

    return num4
}

console.log(reverseOfNumber(123))