const http=require('http')
const fs=require('fs')
const fileContent=fs.readFileSync('tut66.html')

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    //Serving Content
    res.end(fileContent)
})
//Port 80 helps in not explicitly giving port after 127.0.0.1
server.listen(80,'127.0.0.1',()=>{
    console.log("Listening on port 80")
})