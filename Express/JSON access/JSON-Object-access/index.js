const { response } = require('express');
const express = require('express');
const res = require('express/lib/response');
const app = express();
let jsondata = require("./db.json")

app.post('/store', (req, res) => {
    let headers = req.headers.app_id;
    let flag = false;
    jsondata.userdata.map((e) => {
        if (e.app_id === Number(headers)) {
            res.send(e.Store);
            flag = true;
        }

    })
    if (flag == false) {
        res.send("No data");
    }
});
app.listen(8080, () => {
console.log("Server started on 2001");
});
