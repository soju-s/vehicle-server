// import payment model
const paymentservice=require('../models/paymentSchema')

exports.savePaymentService=async (req,res)=>{
    const{username,price,ownersname,services,contactnumber,address,pickupdate,paymentstatus,deliverydate}=req.body

    try{

        const savePayment =new paymentservice({
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

        await savePayment.save()
        res.status(200).json(savePayment)

    }
    catch(error){
        res.status(401).json(error)
    }
}

// to get payment to admin
exports.getPaymentService=async(req,res)=>{
    try{

        const getPayment = await paymentservice.find()
        res.status(200).json(getPayment)
    }
    catch(error){
        res.status(401).json(error)
    }
}

// delete particular item from payment 
exports.deletePaymentService=async(req,res)=>{
    const{_id}=req.params

    try{

        const removeItem=await paymentservice.findOne({_id})
        if(removeItem){

            const removedService= await paymentservice.deleteOne({_id})
            if(removedService){

                const remainingItems=await paymentservice.find()
                res.status(200).json(remainingItems)
            }
            else{
                res.status(401).json('error')
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

// get payment to user
exports.getPayment=async(req,res)=>{
    const{username}=req.body

    try{

        const paymentFind=await paymentservice.find({username})
        res.status(200).json(paymentFind)

    }
    catch(error){
        res.status(401).json(error)
    }
}