const {readFile, writeFile} = require('fs');

/*
*Technique 4 (Best Method)

const {readFile, writeFile} = require('fs/promises');
const {readFile, writeFile} = require('fs').promises;
*** YOU CAN USE ANY TWO OF THEM ***

const start = async ()=>{
    let data1 = await readFile('./text-files/text1.txt','utf8');
    let data2 = await readFile('./text-files/text2.txt','utf8');
    
    await writeFile('./text-files/text3.txt',`Data from text1 : ${data1}\nData from text2 : ${data2}`);

    return 'success';
}

start()
.then((value)=>{console.log(value);})
.catch((error)=>{console.log(error.message);})
*/




/*
* Technique 3

const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async ()=>{
    let data1 = await readFilePromise('./text-files/text1.txt','utf8');
    let data2 = await readFilePromise('./text-files/text2.txt','utf8');
    
    await writeFilePromise('./text-files/text3.txt',`Data from text1 : ${data1}\nData from text2 : ${data2}`);

    return 'success';
}

start()
.then((value)=>{console.log(value);})
.catch((error)=>{console.log(error.message);})
*/

/*
* Technique 2

function getData(path){
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

const start = async ()=>{
    let data1 = await getData('./text-files/text1.txt');
    let data2 = await getData('./text-files/text2.txt');

    return new Promise((resolve,reject)=>{
        writeFile('./text-files/text3.txt', `Data from text1 : ${data1}\nData from text2 : ${data2}`,(err)=>{
            if(err){
                reject(err);
            }
            resolve("Success");
        })
    }) 
}

start()
.then((value)=>{console.log(value);})
.catch((error)=>{console.log(error.message);})
*/

/*
* Technique 1

function getData(path){
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}


getData('./text-files/text1.txt')
.then((data)=>{
    console.log(data);
})
.catch((response)=>{
    console.log('Error Occurred');
    console.log(response.message);
})
*/