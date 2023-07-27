const fs = require('fs');

let data = fs.readFileSync('./text-files/text1.txt','utf8');
console.log(data)

try{
    fs.writeFileSync('./text-files/text2.txt','This is the second text file i have created',{flag: 'w'});
}
catch(error){
    console.log(error.message);
}