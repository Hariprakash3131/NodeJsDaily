const exp=require('express')
const app=exp()

function logReq(req,res,next){
    console.log('Request url:',req.url)
    console.log('Request Method:',req.method)
    next()  //Important if not called request stops  there
}

app.use(logReq)  // function called here

app.get('/',(req,res)=>{
    res.send('Home Page')
})

app.listen(3000,()=>{
    console.log('Server Listening')
})