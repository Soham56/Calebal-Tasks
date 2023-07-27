const express = require('express')
const app = express();
const {products} = require('./data')


// Query String parameter are the parameters which is included inside the url follwed by '?'
// https://localhost::3000/api/products?search=a&limit=4 -> in this url string after the ? is the query string , it is used mainly to customize the information more

app.get('/', (req,res)=>{
    res.send('<h1>Hello World</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req,res)=>{
    const {search,limit} = req.query;
    let sortedProducts = [...products];

    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.domain.startsWith(search);
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
    if(sortedProducts.length<1){
        return res.status(200).json({success:true,data:[]});
    }
    
    res.status(200).json(sortedProducts);
})


app.listen(3000, (err)=>{
    if(err) throw err;
    console.log('Server is running on port 3000...');
})