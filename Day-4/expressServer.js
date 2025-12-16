const exp=require('express')

const app=exp()

app.get('/',(req,res)=>{
    res.send('Express Home')
})

app.listen(3000,()=>{
    console.log('Server listening port 3000')
})