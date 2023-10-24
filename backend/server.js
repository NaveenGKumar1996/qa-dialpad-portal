const express = require('express')
const app = express()
const port = process.env.PORT || 3500

app.get("/",(req,res)=>{
    res.send("Hello dialpad");
})

app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`)
})