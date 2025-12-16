const readAndAppend=require('fs')

readAndAppend.appendFile('two.txt','\nRead and append to the file',(err)=>{
    if(!err){
        readAndAppend.readFile('two.txt','utf-8',(err,d)=>{
            if(err){
                console.log(err)
            }
            console.log(d)
        })
    }
})