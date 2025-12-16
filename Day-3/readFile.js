const fs=require('fs')
fs.readFile('one.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})
console.log('Read Successfully')