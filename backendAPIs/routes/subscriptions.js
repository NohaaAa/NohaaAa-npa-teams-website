const express = require('express');
const router = express.Router();
const Subscription = require('../models/subscriptions');

//get all subscriptions
router.get('/', async (req, res) => {
    try {
        const subscription = await Subscription.find();
        res.json(subscription)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//creat a new subscription email
router.post('/', async (req, res) => {
    const subscription = new Subscription({
        email: req.body.email,

    })

    try {
        const newSubscription = await subscription.save()
        res.status(201).json(newSubscription)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router