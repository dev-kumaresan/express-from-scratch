const express = require('express');
const app = express();
const controller = require('./controller/index.controller')


app.get('/hi',(req,res)=>{
    res.send("Hi kumaresan");
})


app.get('/about', (req, res) => {''
    res.send("Hi kumaresan I am from Alangudi");
})



// abs

app.get("/show-data",controller.showUserData)




//LocalHost creation
const port = process.env.PORT || 2001;
app.listen(port,()=>{
    console.log("Server started on 2001");
});
