const non_blocking=require('fs')

console.log('start')
non_blocking.readFile('data2.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})
console.log('End')