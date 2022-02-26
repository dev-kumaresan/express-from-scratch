const express = require('express');
const app = express();
const jf = require('../express/package-lock.json');
app.get('/about',(req,res)=>{
    res.send(jf);
})
app.listen(3032,()=>{
    console.log("server started successfully");
})

//////////// MIDDLEWARE ////////////
app.use((req,res,next)=>{
    console.log("Middleware Generated");
    next();
})
