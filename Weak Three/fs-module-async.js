
const {readFile, writeFile} = require('fs');
let val;

readFile('./text-files/text1.txt', 'utf8', (err,data)=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log(data);
})


writeFile('./text-files/text4.txt',val,(error)=>{
    if(error){
        console.log(error.message);
    }
})

