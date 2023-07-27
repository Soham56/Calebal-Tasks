const http = require('http');

const server = http.createServer((req,res)=>{

    // console.log(res);

    if(req.url == '/'){
        res.end("Welcome to home page");
        return;
    }
    if(req.url == '/about'){
        res.end("Hello my name is Soham Dey, Learning node js");
        return;
    }

    res.end("Sorry , Page not found");
})


server.listen(3000, ()=>{
    console.log('Server is running at port 3000');
})