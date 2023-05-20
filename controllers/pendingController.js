// import model

const pendingService = require('../models/pendingserviceSchema')
const pendingservice=require('../models/pendingserviceSchema')

exports.savePendingService=async (req,res)=>{
   
    const{username,price,ownersname,services,contactnumber,address,pickupdate,paymentstatus,deliverydate}=req.body

    try{

        const savePending =new pendingservice({
            username,
            price,
            ownersname,
            services,
            contactnumber,
            address,
            pickupdate,
            paymentstatus,
            deliverydate
        })

        await savePending.save()
        res.status(200).json(savePending)

    }
    catch(error){
        res.status(401).json(error)
    }
}

// to get pending to admin
exports.getPendingService=async (req,res)=>{
    try{
        const getPending = await pendingservice.find()
        res.status(200).json(getPending)

    }
    catch(error){
res.status(401).json(error)
    }
}

// delete particular items from pending
exports.deletePendingService=async (req,res)=>{
    const{_id}=req.params

    try{

        const removeItem=await pendingService.findOne({_id})
        if(removeItem){

            const removedService=await pendingService.deleteOne({_id})
            if(removedService){
                const remainingItems=await pendingService.find()
                res.status(200).json(remainingItems)
            }
            else{
                res.status(401).json('service not found')
            }
        }
        else{
            res.status(401).json('Item not present')
        }

    }
    catch(error){
        res.status(401).json(error)
    }
}

// get pending service for user
exports.getPendingServiceUser=async (req,res)=>{
    const{username}=req.body

    try{

        const getPendingForUser=await pendingService.find({username})
        res.status(200).json(getPendingForUser)

    }
    catch(error){
        res.status(401).json(error)
    }
}