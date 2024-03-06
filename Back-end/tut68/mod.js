console.log("This is module JS")

function average(arr){
    let sum=0;
    arr.forEach(element=>{
        sum+=element
    })
    return sum/arr.length;
}

//Mod module exports this
//This can be a number or anything or an object
module.exports={
    avg:average,
    name:"Harry",
    repo:"GitHub"
}