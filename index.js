const express = require('express')
const path = require('path')
const app = express();
require('dotenv').config()
const bodyparser = require('body-parser')

const PORT = process.env.PORT || 5000

// It is depricted with ExpressJS
// app.use(bodyparser.urlencoded({extended:false}))
// app.use(bodyparser.json())

app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Rotes
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"))
})
// app.post("/",(req,res)=>{
//     console.log(req.body)
//     res.send(`<h1>Hi Mr. ${req.body.name} </h1>
//               <h2>Your Email is  ${req.body.email} </h2>  
//               <h2>Your Password is  ${req.body.password} </h2>  
//     `)
// })


app.post('/api/register',(req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password
    
    console.log(name, email, password)

    res.json({
        success:'true'
    })
})


app.listen(PORT, ()=>{
    console.log("Server running at PORT ", PORT)
})

