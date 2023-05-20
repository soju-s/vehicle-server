// import mongoose
const mongoose=require('mongoose')

// using mongoose create schama for services
const serviceSchema=mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{

        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

// create model to store services

const services=new mongoose.model('services',serviceSchema)

// export model

module.exports=services