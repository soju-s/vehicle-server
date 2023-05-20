// import service model
const services=require('../models/serviceSchema')



// get all services api
exports.getAllServices=async (req,res)=>{
    try{

        const allService=await services.find()
        res.status(200).json(allService)
    }
    catch(error){
        res.status(401).json(error)
    }
}

// to get service price
exports.selectedService=async (req,res)=>{

    const{title}=req.body

    // checking in mongodb
    try{
        const service=await services.findOne({title})


        if(service){

            res.status(200).json(service.price)
        }
        else{
            res.status(404).json('There has been an error Sorry for inconvinience')
        }

    }
    catch(error){
res.status(401).json(error)
    }
}

// to edit service price
exports.edirServicePrice=async (req,res)=>{
    const{_id,price}=req.body

    try{

        const item=await services.findOne({_id})
        if(item){

            item.price=price

            await item.save()

            const updatedServices=await services.find()
            res.status(200).json(updatedServices)

        }
        else{
            res.status(401).json('Item not found')
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}