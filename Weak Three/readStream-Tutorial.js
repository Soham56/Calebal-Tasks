const {createReadStream} = require('fs')

// ? creating a temp variable which store the stream 
const temp = createReadStream('./text-files/text1.txt','utf-8');

temp.on('data', (result)=>{
    console.log(result);
})