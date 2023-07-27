const http = require('http');
const {readFileSync} = require('fs');

const homePage = readFileSync('./navbar-app/index.html');
const homePageStyle = readFileSync('./navbar-app/style.css');
const homePageScript = readFileSync('./navbar-app/index.js');
/**
// const {readFile} = require('fs/promises');


// const getHomePage = async ()=>{
//     return await readFile('./index.html','utf8');
// }

// const homePage = getHomePage();
*/

const server = http.createServer((req,res)=>{
    const url = req.url;

    if(url==='/'){
        res.writeHead(200,{'content-type': 'text/html'})

        /** 
        // getHomePage()
        // .then((value)=>{
        //     res.end(value);
        // })
        */

        res.write(homePage);
        res.end();
        
    }
    else if(url==='/style.css'){
        res.writeHead(200,{'content-type': 'text/css'})
        res.write(homePageStyle)
        res.end();
    }
    else if(url==='/index.js'){
        res.writeHead(200,{'content-type': 'text/javascript'})
        res.write(homePageScript)
        res.end();
    }
    else{
        res.writeHead(404,{'content-type': 'text/plain'})
        res.write("Resource Not Found")
        res.end();
    }
})

server.listen(5000,()=>{
    console.log("server is listening at port 5000");
});