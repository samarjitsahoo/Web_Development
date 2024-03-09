const express=require('express')
const path = require('path')
const app=express()
const port=8000

// app.use(express.static('static',options))

//Express Specific Stuff
app.use('/static',express.static('static')) //for serving static files
app.use(express.urlencoded())

//Pug specific stuff
app.set('view engine','pug') //Set the template engine as Pug 
app.set('views',path.join(__dirname,'views')) //Set the views directory

app.get('/',(req,res)=>{
    const params={}
    res.status(200).render('home.pug',params)
})
app.get('/contact',(req,res)=>{
    const params={}
    res.status(200).render('contact.pug',params)
})


app.listen(port,()=>{
    console.log(`The application started successfully on port ${port}`)
})