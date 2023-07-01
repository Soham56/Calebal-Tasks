const fs = require('fs');

// CRUD operation

// Create File

/*
Synchrous

try {
    fs.appendFileSync("file3.txt"," Hello world");
    console.log("success");
} catch (error) {
    e = new Error(error);
    console.log(e);
}

try {
    fs.writeFileSync("file3.txt"," Hello world");
    console.log("success");
} catch (error) {
    e = new Error(error);
    console.log(e);
}

*/

/*

Asynchronous

fs.appendFile('file3.txt',"Hey what's up", (e)=>{
    if(e) throw e;

    console.log("success");
})

fs.writeFile('file3.txt',"Hey what's up", (e)=>{
    if(e) throw e;

    console.log("success");
})

*/ 

/*

Asynchronous

fs.unlink("file2.txt",(e)=>{
    if(e) throw e;
    console.log("Ha ha ha, go to hell 👹");
})

fs.unlink("file2.txt",(e)=>{
    if(e) throw e;
    console.log("Ha ha ha, go to hell 👹");
})

*/

// try{
//     fs.unlinkSync("file1.txt");
//     console.log("Deleted Successfully");
// }
// catch(e){
//     console.log(e);
// }

// console.log("Heelo");

