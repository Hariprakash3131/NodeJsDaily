const singleThread=require('fs')
console.log('start')
setTimeout(() => {
    console.log('Async Task done')
},4000);

console.log('End')