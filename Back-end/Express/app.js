const express=require('express')
//Creating an express app
const app=express()
const port=80
app.get("/",(req,res)=>{
    res.status(200).send("This is home page of my first express app with harry")
})
app.get("/about",(req,res)=>{
    res.send("This is about page of my first express app with harry")
})
app.get("/services",(req,res)=>{
    res.send("This is services page of my first express app with harry")
})
app.get("/contact",(req,res)=>{
    res.send("This is contact page of my first express app with harry")
})
app.get("/this",(req,res)=>{
    res.status(404).send("not found")
})
app.post("/contact",(req,res)=>{
    res.send("This is a post contact page of my first express app with harry")
})

app.listen(port,()=>{
    console.log(`The application started successfully on port: ${port}`)
})