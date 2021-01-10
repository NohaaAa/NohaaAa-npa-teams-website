const express = require('express');
const router = express.Router();
const Logo = require('../models/logos');
const fs = require('fs');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/assets/teams')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname.toLowerCase())
    }
})

var upload = multer({ storage: storage })

//get all home units
router.get('/:teamName', getLogo, async (req, res) => {
    res.send(logo)
})

//creat home unit
router.post('/upload', upload.single('teamLogo'), async (req, res) => {
    console.log(req.file)
    const logo = new Logo({
        img: req.file.originalname.toLowerCase(),
        teamName: req.file.originalname.split('.')[0]
    })
    try {
        const newLogo = await logo.save()
        res.status(201).json({ message: "new logo added!", newLogo })
    } catch (e) {
        res.status(400).send({ message: e.message })
    }

})

router.delete('/:teamName', getLogo, async (req, res) => {

    try {
        await res.logo.remove()
        res.json({ message: 'Deleted This Logo' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getLogo(req, res, next) {
    try {
        logo = await Logo.findOne({ teamName: req.params.teamName })
        if (logo == null) {
            return res.status(404).json({ message: 'Cannot find this logo' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.logo = logo
    next();
}
module.exports = router
