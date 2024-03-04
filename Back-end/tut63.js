//Simple Server
const http=require('http')

//Local Host
const hostname='127.0.0.1'
const port=3000

const server=http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('Content-Type','text/plain')
    res.end('Hello World by Samarjit')
})


//Server listens here/starts here
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})