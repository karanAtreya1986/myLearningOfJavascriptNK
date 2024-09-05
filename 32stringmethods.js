// console.log("javascript".length)


//we can store in variable and manipulate the variable directly
// let str="karan"
// console.log(str.length)

//give the character at third index
//index count starts from zero
// console.log("javascript"[3])


//charat also does the same thing
//gets character from the index
let str="javascript"
// console.log(str.charAt(2))


//try to do char at for a location which doesnt exist
//output is blank
// console.log(str.charAt(12))


//returns ascii code of the character
//a-z --> 97 to 122
//A-Z --> 65 to 90 
// console.log(str.charCodeAt(0))

//to lower case
// console.log("TITAN".toLowerCase())

//to upper case
// console.log("Titan".toUpperCase())


//starts from second index and excludes the last index
//in js we can do reverse counting also
//last digit is at -1, then -2 and so on.
// console.log("Javascript".slice(2,-5))


//what if we try to jumble up
//its starting at 4th index and goes till first index
//not possible and blank output
// console.log("Javascript".slice(4,-9))


//exclude last index
// console.log("JavaScript".substring(2,6))

//in substring all negative values become zero
//so all negative values are zero index
//both negative not allowed and output is blank
// console.log("JavaScript".substring(-2,-6))

//now it works when first one is negative
// console.log("JavaScript".substring(-2,6))


//see weird output when second index is negative
// console.log("JavaScript".substring(2,-6))

//see another example with different starting index
// console.log("JavaScript".substring(5,-6))


//concat
// console.log("karan".concat(" labs"))

//we can concat as many times as we want
// console.log("karan".concat(" testing").concat(" hero"))

//split
//returns array
let lang="java_python_javascript_ruby"
let langArr=lang.split("_")
// console.log(langArr[0])


//print index which is not present
//we get undefined
// console.log(langArr[10])

//returns true or false
// console.log("javasciprt".includes("script"))

//replaces
// console.log("dev test framework".replace("dev", "test"))


//only replaces first occurrence
// console.log("dev test framework dev".replace("dev", "test"))


//replace all
// console.log("dev test framework dev".replaceAll("dev", "test"))

//js is case sensitive
// if no match then no replace
// console.log("dev test framework dev".replaceAll("Dev", "test"))

//removes space before and after string not in between
// console.log("        hello    javascript        ".trim())

//removes space from start of string
//space at end of string is not removed
// console.log("        hello    javascript        ".trimStart())

//removes space from end of string
//space at start of string is not removed
// console.log("        hello    javascript        ".trimEnd())

//it will pad the string mentioned till the length becomes 10
// console.log("dev".padEnd(10, "*"))

//when the length is already reached by the default string then no more addition
// console.log("dev".padEnd(3, "*"))


//pad start
// console.log("dev".padStart(13, "*"))


//starts with
//returns true or false
// console.log("Javascript".startsWith("J"))
// console.log("Javascript".startsWith("j"))

//we can write strings inside
// console.log("Javascript".startsWith("Java"))
// console.log("Javascript".startsWith("jva"))



//ends with
// console.log("Javascript".endsWith("t"))
// console.log("Javascript".endsWith("J"))
// console.log("Javascript".endsWith("ript"))
// console.log("Java script".endsWith("Java"))
// console.log("Java script".endsWith("script"))


//repeats the same string the number of times mentioned
// console.log("repeat".repeat(10))


//we can use index of on character, string
// console.log("Karan automation hub".indexOf("K"))
// console.log("Karan automation hub".indexOf("automation"))
// console.log("Karan automation hub".indexOf("erwerewr"))

//last index of the element
//last occurrence will be given
// console.log("Karan automation hub automation".lastIndexOf("K"))
// console.log("Karan automation hub automation".lastIndexOf("automation"))
// console.log("Karan automation hub".lastIndexOf("erwerewr"))


//searches for the first occurrence only
console.log("Karan automation hub automation".search("K"))
console.log("Karan automation hub automation".search("automation"))
console.log("Karan automation hub".search("erwerewr"))