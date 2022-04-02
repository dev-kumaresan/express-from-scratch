const express = require('express');
const app = express();
const PORT = 4002;
app.put('/hii',(req,res)=>{
    res.send("Hi kumaresan");
})
app.listen(PORT,()=>{
    console.log("Server started at port 4002");
})

