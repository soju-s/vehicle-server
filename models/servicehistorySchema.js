// import mongoose
const mongoose=require('mongoose')

const historySchema=mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    ownersname:{
        type:String,
        required:true
    },
    services:{
        type:String,
        required:true
    },
    contactnumber:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    pickupdate:{
        type:String,
        required:true
    },
    paymentstatus:{
        type:String,
        required:true
    },
    deliverydate:{
        type:String,
        required:true
    }
})

const historyservice = new mongoose.model('historyservice',historySchema)

module.exports=historyservice