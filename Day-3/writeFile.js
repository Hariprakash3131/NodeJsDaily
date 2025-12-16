const fs=require('fs')

fs.writeFile('one.txt','Just for try',(err)=>{
    if(err){
        console.log(err)
    }
    console.log('created successfully')
})