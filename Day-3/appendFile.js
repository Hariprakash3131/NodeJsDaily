const fs=require('fs')
fs.appendFile('one.txt','\nWelCome To appendFile in node js',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log('Append File success')
})
