const server=require('http')

const local=server.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Home Page')
    }
    else if(req.url==='/about'){
        res.end('About Page')
    }
    else if(req.url==='/join'){
        res.end('Join page')
    }
    else{
        res.end('Page not define')
    }
})

local.listen(4000,()=>{
    console.log('server listening')
})