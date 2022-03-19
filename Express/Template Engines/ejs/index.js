const express = require('express');
const app = express();
const path = require('path');
app.use('/public',express.static(path.join(__dirname,'static')));
app.set('view engine','ejs');
app.get('/:userQuery',(req,res)=>{
 
    res.render('index',{data:{userQuery:req.params.userQuery}});
})

const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log("running");
})
