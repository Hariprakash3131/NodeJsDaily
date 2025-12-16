const http=require('http')

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type': "text/plain"})
    res.write('This is a server')
    res.end()
})
server.listen(3000,()=>{
    console.log('The server is listening')
})