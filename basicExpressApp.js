// Create a Server App

const express = require('express')
const app = express()
require('dotenv').config()

const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes
app.get('/', (req,res)=>{
    res.send('Welcome to Express JS Server')
})
app.get('/about', (req,res)=>{
    res.send('<h1>This is About Page</h1>')
})
app.get('/contact', (req,res)=>{
    res.send('<h1>This is contact Page</h1>')
})

app.post('/', (req,res)=>{
    const data = req.body
    console.log(req.body)
    res.send(`<h1>Hello i am ${req.body.name} and my email is ${req.body.email}</h1>`)
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
