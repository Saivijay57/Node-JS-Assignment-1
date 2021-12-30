const http = require("http")
const fs = require("fs")
const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{"content-type":"text/html"})
        fs.readFile("index.html","utf-8",(err,data)=>{
        res.end(data);
    })

    }
})
server.listen(3000,()=>{
    console.log("server created successful")
})