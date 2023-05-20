// import mongoose
const mongoose=require('mongoose')

const serviceBookingSchema=mongoose.Schema({

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
    deliverydate:{
        type:String,
        required:true
    }
})
// create model to store services booking

const bookservice= new mongoose.model('bookservice',serviceBookingSchema)

// export model

module.exports=bookservice