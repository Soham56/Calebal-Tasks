const data = require('../data').peoples;

const getLogin = (req,res)=>{
    res.json({
        success: true,
        msg: "What's up buddy"
    })
}

const postLogin = (req,res)=>{
    const {name} = req.body;
    res.status(201).json({
        success: true,
        msg: `Beautiful !!! successfully posted ${name}`
    })
}

const putLogin = (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    if(id>4){
        res.status(404).json({
            success: false
        })
    }
    
    let cnt = 1;
    for(let i in data){
        if(cnt===Number(id)){
            data[i]=name;
        }
        cnt++;
    }

    res.json({
        success: true,
        info: data
    })
}

const deleteLogin =  (req,res)=>{
    const {id} = req.params;
    res.json({
        success: true,
        msg: `Successfully deleted the ${id}`
    })
}

module.exports = {
    getLogin,
    postLogin,
    putLogin,
    deleteLogin,
}