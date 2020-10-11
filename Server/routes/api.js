const express = require('express')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const db = "mongodb+srv://Auth1:Auth1@cluster0.4a0ry.mongodb.net/Auth1?retryWrites=true&w=majority"

mongoose.connect(db, err => {
    if (err) {
        console.error("Error While Connecting To Database...!\n" + err)
    } else {
        console.log('Connected Successfully to MongoDB...!')
    }
})

router.get('/',  (req, res) => {
    res.send("Hey It's me Api...!")
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log("Error While Registering User To Database...!\n" + error)
        } else {
            // let payload = { subject: registeredUser._id}
            // let token =  jwt.sign(payload, '112SecretKey')
            res.status(200).send(registeredUser)
        }
    })
})

module.exports = router