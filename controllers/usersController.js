// import users model
const users = require('../models/userSchema')

// import jwt
const jwt = require('jsonwebtoken')

// new user registration
exports.newUserRegistration = async (req, res) => {

    const { username, email, password } = req.body

    try {

        // check if username is already taken
        const usernameTaken = await users.findOne({ username })
        if (usernameTaken) {

            res.status(400).json('Username Already Exist')

        }
        else {
            // if username is not taken

            const newUser = new users({
                username,
                email,
                password
            })
            await newUser.save()

            // generating token
            const token = jwt.sign({
                username
            }, 'supersecretkey',)

            // response to client

            res.status(200).json({ newUser, token })

        }

    }
    catch (error) {
        res.status(401).json(error)
    }
}

// login 

exports.loginUser = async (req, res) => {

    const { username, password } = req.body

    try {

        // check if username is in database

        const loginUserName = await users.findOne({ username, password })
        if (loginUserName) {
            // if username is in database

            // generating token
            const token = jwt.sign({
                username
            }, 'supersecretkey',)

            res.status(200).json({ token, loginUserName })
        }
        else {
            // if username is not in database
            res.status(401).json('username or password is incorrect')
        }

    }
    catch (error) {
        res.status(401).json(error)
    }
}

// edit profile
exports.editProfile = async (req, res) => {
    const { username, NewPassword, NewEmail, NewUsername } = req.body



    try {

        const existUsername = await users.findOne({ username: req.body.NewUsername })

        if (existUsername) {
            res.status(401).json('Username already taken')
        }
        else {

            const newProfile = await users.findOne({ username })
            if (newProfile) {

                newProfile.username = NewUsername
                newProfile.email = NewEmail
                newProfile.password = NewPassword

                await newProfile.save()
                res.status(200).json(newProfile)

            }
            else {
                res.status(401).json('username is incorrect')
            }

        }



    }
    catch (error) {
        res.status(401).json(error)
    }
}