const express = require('express');
const app = express();

app.use(express.json());

app.put('/api/modify/:id', (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    console.log(id,name);
    res.json({
        success : true,
        message: 'Successfully updated'
    })
})

app.listen(3000, (e)=>{
    if(e) throw e;

    console.log('Server is listening on port 3000...');
})