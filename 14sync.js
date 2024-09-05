const fs=require('fs'); //fs module is used for handling files

//we will use the readsync method
//give path of file, full path can also be given, since our file is in same project path, we just gave name
//give the encoding format
const data=fs.readFileSync("13karan.txt", "utf-8")
console.log(data)

console.log("testing karan")
