const express = require('express');
const path = require('path')

const app = express();

// middleware setup
// !if you just want to serve the home route only then just this line take care of everything
app.use(express.static('./public'));

//* used to serve the get method to our home route
app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './public/index.html'));
})

//* handle everything those resource are not found
app.all('*', (req,res)=>{
    res.status(404).send("<h1 style='color:red'> Resource not found</h1>");
})

//* listen to the perticlar port to home route
app.listen(5000, ()=>{
    console.log('Server is listneing on port 5000');
})