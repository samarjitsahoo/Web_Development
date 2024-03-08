const express=require('express')
const path=require('path')
const fs=require('fs')
//Creating an express app
const app=express()
const port=80


//Express specific stuffs
//serving static files
app.use('/static',express.static('static'))
//helps in taking the data to express
app.use(express.urlencoded())

//PUG specific stuffs
//Set the template engine as PUG
app.set('view engine', 'pug')
//Set the views directory
app.set('views',path.join(__dirname,'views'))


//Endpoints
app.get('/',(req,res)=>{
    const con='This is the best content'
    const params={'title':'PUBG is the best Game','content':con}
    res.status(200).render('index.pug',params)
})

app.post('/',(req,res)=>{
    name=req.body.name
    address=req.body.address
    age=req.body.age
    gender=req.body.gender
    more=req.body.more
    let outputToWrite=`The name of the client is ${name}, ${age} years old,${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt',outputToWrite)
    const params={'message':'Form Submitted successfully'}
    res.status(200).render('index.pug',params)


})
// //Our PUG demo end point
// app.get("/demo",(req,res)=>{
//     res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there! and thanks for telling me how to use PUBG' })
// })


// app.get("/",(req,res)=>{
//     res.status(200).send("This is home page of my first express app with harry")
// })
// app.get("/about",(req,res)=>{
//     res.send("This is about page of my first express app with harry")
// })
// app.get("/services",(req,res)=>{
//     res.send("This is services page of my first express app with harry")
// })
// app.get("/contact",(req,res)=>{
//     res.send("This is contact page of my first express app with harry")
// })
// app.get("/this",(req,res)=>{
//     res.status(404).send("not found")
// })
// app.post("/contact",(req,res)=>{
//     res.send("This is a post contact page of my first express app with harry")
// })

app.listen(port,()=>{
    console.log(`The application started successfully on port: ${port}`)
})