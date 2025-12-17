const exp=require('express')
const middleAuth=exp()

function authentication(req,res,next){
    const login=true
    if(login){
        next()
    }
    else{
        res.send('Please Login')
    }

}
middleAuth.get('/dash',authentication,(req,res)=>{
    res.send("welCome To dashBoard page")
})

middleAuth.listen(3000)