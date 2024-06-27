//Reading file content 
// const fs=require('fs')
// const text=fs.readFileSync('sample.txt','utf-8')
// console.log(text)

//Replacing content of the file
const fs=require('fs')
let text1=fs.readFileSync('sample.txt','utf-8')
text1=text1.replace("Samarjit","Selmon")
console.log(text1)
//Creating a new file
fs.writeFileSync('selmon.txt',text1)