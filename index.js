const express = require('express');
const app = express();//<---set configuration for incoming requestions


app.get("/", (req, res)=>{
    res.send({hi:"there"})
});

const PORT = process.env.PORT || 50000
app.listen(PORT);