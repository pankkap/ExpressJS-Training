// Will get the data from HTML form through Express App 
// and Store the same data into MongoDB

// Create a Server App
const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const path = require('path')

const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// access Static Resource
app.use(express.static(path.join(__dirname, "public")))

// Database Connection
mongoose.connect('mongodb://localhost:27017/NewUsers', {
    useUnifiedTopology: true,
    useNewUrlParser:true
})
.then(()=>console.log("Database connected"))
.catch(()=>console.log("Database not connected"))

// Routes
app.get('/', (req,res)=>{
    res.sendFile("index.html")
})

app.post('/api/register',(req,res)=>{
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    const data = {
        name:name,
        email:email,
        password:password
    }
   
    const UserSchema = new mongoose.Schema({
        name:{type:String, required:true},
        email:{type:String, required:true},
        password:{type:String}
    })
    
    // 4. Creating a Model used as a Collection 
    const UserModel = new mongoose.model("MyUsers", UserSchema)
    
    // 5. Static data that you want to send into database
    const dataInDB = UserModel(data)

    dataInDB
    .save()
    .then(()=>console.log("Data Inserted into DB"))
    .catch((err)=>console.error(err))

    res.send(`<h1>Welcome ${data.name}!, your account has been created Successfully</h1>
        <img src='/images/logo.png' />
    `)
})

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})
