const express=require('express');
const app=express()
const cors= require('cors')

app.use(cors())
app.use(express.json)

app.get('/get', function (req,res) {
    response
})

app.listen(3001, function () {
    console.log("server is running");
})