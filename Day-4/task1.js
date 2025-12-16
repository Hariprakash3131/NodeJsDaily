const ex=require('express')

const taskApp=ex()
taskApp.get('/',(req,res)=>{
    res.send('Home page')
})
taskApp.get('/about',(req,res)=>{
    res.send('About Page')
})
taskApp.listen(3000)