const fs=require('fs')
console.log('Start')
fs.readFile('data1.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)

})
console.log('end')