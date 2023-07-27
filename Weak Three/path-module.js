const path  = require('path')

console.log(path.sep);

let fileName = path.join('content','hello','world');
console.log(fileName);
console.log(path.basename(fileName));

let abosolute = path.resolve(__dirname,fileName);
console.log(abosolute);