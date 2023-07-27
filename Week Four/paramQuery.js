const express = require('express');
const app = express();
const {products} = require('./data');


app.get('/', (req,res)=>{
    res.send('<h1>Home Page</h1><a href="api/products/">Products</a>');
})

app.get('/api/products/:preview', (req,res)=>{
    let {preview} = req.params;
    let newItems = products.filter((product)=>{
        return product.location.startsWith(preview);
    })

    res.json(newItems);
})

app.get("*", (req,res)=>{
    res.status(404).send("Resource Not Found");
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})