const express = require('express');
const app = express();
const jsonfile = require('../express/package.json');
app.get('/json',(req,res)=>{
    res.send(jsonfile);
})
app.listen(2005,()=>{
    console.log("server started");
})
