const {readFile} = require('fs')

console.log("start Executing");

setTimeout(() => {
    console.log('i am in setTimeout');
}, 100);

setInterval(()=>{
    console.log("Hello world");
})

for(let i=0; i<10; i++){
    console.log('%d', i);
}


console.log("End of execution");