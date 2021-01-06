const express = require('express');
const router = express.Router();
const Home = require('../models/home');

//get all home units
router.get('/', async (req, res) => {
    try {
        const home = await Home.find();
        res.json(home)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

//creat home unit
router.post('/', async (req, res) => {
    const home = new Home({
        slider: req.body.slider,
        blocks: req.body.blocks,
        poll: req.body.poll,
    })

    try {
        const newHomeUnit = await home.save()
        res.status(201).json(newHomeUnit)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Update a home poll by id
router.patch('/:id', getHomeUnits, async (req, res) => {
    if (req.body.poll != null) {
        res.home.poll = req.body.poll
    }

    if (req.body.blocks != null) {
        res.team.blocks = req.body.blocks
    }
    if (req.body.slider != null) {
        res.home.slider = req.body.slider
    }

    try {
        const updatedHome = await res.home.save()
        res.json(updatedHome)
    } catch {
        res.status(400).json({ message: err.message })
    }
})

async function getHomeUnits(req, res, next) {
    try {
        home = await Home.findById(req.params.id)
        if (home == null) {
            return res.status(404).json({ message: 'Cannot find this home unit' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.home = home
    next();
}

module.exports = router
