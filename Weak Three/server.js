const express = require('express')
const app = express();

app.use(express.static('public'));

app.get('/about', (req,res)=>{
    res.sendFile(__dirname+'/express-tutorial/navbar-app/index.html');
})

app.listen(3000, ()=>{
    console.log('Server is listening on port 3000...');
})