const authorize = (req,res,next)=>{
    const {user} = req.query;
    if(user==='john'){
        req.user = {name:user,id:'4'};
    }
    else{
        return res.status(401).send('User is unauthorize');
    }
    next();
}

module.exports = authorize;