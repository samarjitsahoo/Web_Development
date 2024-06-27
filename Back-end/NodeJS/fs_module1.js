// Synchronous(Blocking)--> Line by Line Execution
// ASynchronous(non-Blocking)--> Line by Line Execution not guaranteed
// and Callbacks will be fired

const fs=require('fs')
//Call back function helps in acheiving Asynchronous behaviour
//Call back function will be fired after it's execution
//An Asynchronous Function
fs.readFile('sample.txt','utf-8',(a,b)=>{
    console.log(a,b)
})
console.log('This is a Message')

