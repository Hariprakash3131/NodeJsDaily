const fs=require('fs')
fs.writeFile('info.txt','Task one',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('Written success')
})
