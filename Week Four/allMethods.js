const express = require('express');
const app = express();
const apiLogin = require('./routers/apiLogin')


app.use(express.json());
app.use('/api/login', apiLogin);


app.listen(3000, ()=>{
    console.log('Server is listening on port 3000...');
})