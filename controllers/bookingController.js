// import bookservice model
const bookservice=require('../models/serviceBookingSchema')

exports.saveBookingService=async (req,res)=>{

    const{username,price,ownersname,services,contactnumber,address,pickupdate,deliverydate}=req.body

    try{

        const saveService=new bookservice({
            username,
            price,
            ownersname,
            services,
            contactnumber,
            address,
            pickupdate,
            deliverydate
        })
        await saveService.save()
        res.status(200).json(saveService)

    }
    catch(error){
        res.status(401).json(error)
    }

}

// get service book model

exports.getServiceBook=async (req,res)=>{
    try{
        const getService=await bookservice.find()
        if(getService){
            res.status(200).json(getService)
        }
        else{

            res.status(401).json('Data Not Found')
        }
        
    }
    catch(error){
        res.status(401).json(error)
}
}

// delete all book service 
exports.deleteBookingService = async (req,res)=>{
    

    try{
          await bookservice.deleteMany({})
            res.status(200).json('Item removed')
        

    }
    catch(error){

        res.status(401).json(error)
    }
}