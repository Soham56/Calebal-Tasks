const express = require('express');
const app = express();

const {products} = require('./data');

// app.use(express.static('./public'));


app.get('/', (req, res) => {

    res.send(`<h1>Home Page</h1><a href="/api/products/">products</a>`);
})

app.get('/api/products', (req,res)=>{
    //form the whole products we destructering the id, location and domain
    const newProduct = products.map((product)=>{
        const {id,location,domain} = product;

        return {id,location,domain};
    })

    res.json(newProduct);
})



app.listen(3000, (err) => {
    if (err) throw err;

    console.log("Server is running on port 3000...")
})