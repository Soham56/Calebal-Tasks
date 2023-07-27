const express = require('express')
const app = express();
const {peoples} = require('./data');

app.use(express.json());

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/navbar-app/formFill.html');
})

app.get('/api/peoples', (req,res)=>{
    res.json(peoples);
})

app.post('/api/peoples', (req,res)=>{
    console.log(req.body);
    res.status(201).json({
        success: true,
        message: 'Successfully posted'
    })
})

app.listen(3000, ()=>{
    console.log('Server is listening on port 3000...');
})