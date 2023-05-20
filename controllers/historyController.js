const historyservice = require('../models/servicehistorySchema')

// to save service history

exports.saveHistoryService= async (req,res)=>{
   
    const{username,price,ownersname,services,contactnumber,address,pickupdate,paymentstatus,deliverydate}=req.body

    try{

        const saveHistory = new historyservice({

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

        await saveHistory.save()
        res.status(200).json(saveHistory)

    }
    catch(error){
        res.status(401).json(error)
    }
}

// to get service history

exports.getServiceHistory = async(req,res)=>{
    const{username}=req.body

    try{
        const getHistory = await historyservice.findOne({username})
        if(getHistory){

            const items=await historyservice.find({username})


            res.status(200).json(items)

        }

    }
    catch(error){
        res.status(401).json(error)

    }
}