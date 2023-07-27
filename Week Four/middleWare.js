const express = require('express');
const app = express();


// Middleware are those usefull piece of function which have access to both request object and response object. middleware can be three types :
// 1. Hand Made (Made by user)
// 2. Express Exclusive (defined by express itself)
// 3. Third party (npm packages)

//Hand Made
/* 
const logger = (req,res,next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);
    next();
}
*/

const logger = require('./logger');
const authorize = require('./authorize');
// app.use([express.static('public'),authorize,logger]);

app.get('/', (req,res)=>{
    res.send('Hello World');
})

app.get('/about', (req,res)=>{
    console.log(req.user);
    res.sendFile(__dirname+'/navbar-app/index.html');
})

app.listen(3000, (err)=>{
    if(err) throw err;
    console.log('Server is listening on port 3000...');
})