const express = require('express')
const app = express()


app.get("/", (req, res) =>{
    res.json({
        status: 200,
        message: "Hello World"
    })
})

app.get("/product", (req, res) =>{
    res.json({
        status: 200,
        message: "Hello World products pppppp"
    })
})


app.listen(8080, ()=>{
    console.log("Server listening at 8080")
})

