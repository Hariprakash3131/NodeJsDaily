const fs=require('fs')

console.log('Start')
fs.readFile('data2.txt','utf-8',(err,data)=>{
    setTimeout(()=>{
        if(err){
            console.log(err)
        }
        console.log(data)
    },4000)
})
console.log('end')