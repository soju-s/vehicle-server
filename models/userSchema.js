// import mongoose

const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})

// create model to store users

const users=new mongoose.model('users',userSchema)

// export
module.exports=users