// to solve client request we need to give path to resolve it

// import express
const express = require('express')

// import services controller
const servicesController=require('../controllers/servicesController')

// import user controller
const userController=require('../controllers/usersController')

// import booking controller
const bookingController=require('../controllers/bookingController')

// import payment controller
const paymentController=require('../controllers/paymentController')

// import history controller
const historyController = require('../controllers/historyController')

// import pending controller
const pendingController= require('../controllers/pendingController')

const router = new express.Router()

// api calls

// resolve client request to get all services
router.get('/all-services',servicesController.getAllServices)

// for new user registration
router.post('/new-user',userController.newUserRegistration)

// for login user
router.post('/login-user',userController.loginUser)

// for getting price of selected service
router.post('/getservice-price',servicesController.selectedService)

// for saving service after booking
router.post('/save-service',bookingController.saveBookingService)

// for getting all book service datas
router.get('/getbook-service',bookingController.getServiceBook)

// for saving all payment services
router.post('/save-payment',paymentController.savePaymentService)

// removed booked item
router.delete('/delete-booked',bookingController.deleteBookingService)

// for saving history
router.post('/save-history',historyController.saveHistoryService)

// for getting service history
router.post('/get-servicehistory',historyController.getServiceHistory)

// fot geting payment service 
router.get('/get-paymentservice',paymentController.getPaymentService)

// for deleting particular payment service item
router.delete('/delete-paymentservice/:_id',paymentController.deletePaymentService)

// for saving pending service items 
router.post('/save-onservice',pendingController.savePendingService)

// for getting all items in pending schema
router.get('/get-onservice',pendingController.getPendingService)

// to delete pending item
router.delete('/delete-onservice/:_id',pendingController.deletePendingService)

// to edit price
router.post('/edit-service',servicesController.edirServicePrice)

// to get payment service for user 
router.post('/get-paymentstatus',paymentController.getPayment)

// get pending service for user
router.post('/get-pendingstatus',pendingController.getPendingServiceUser)

// edit profile
router.post('/edit-profile',userController.editProfile)
// export router 
module.exports=router