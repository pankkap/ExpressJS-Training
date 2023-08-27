//1.  requiring module
const mongoose = require('mongoose')

//2. Connection with the database
mongoose
.connect("mongodb://localhost:27017/User")
.then(()=>console.log("Connection Successfull..!!"))
.catch(()=>console.log("Error, not Connected"))

//3. Creating a Schema
const UserSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String}
})

// 4. Creating a Model used as a Collection 
const UserModel = new mongoose.model("MyUsers", UserSchema)

// 5. Static data that you want to send into database
const data = UserModel({
    name:null,
    email:"rahul@gmail.com",
    password:"r12345"
})

// 6. Store the static data into Database
data
.save()
.then(()=>console.log("Data Inserted into DB"))
.catch((err)=>console.error(err))

// 7. Retrieve the static data from Database
UserModel.find()
       .then((data)=>console.log(data))
       .catch(err=>console.log(err)) 