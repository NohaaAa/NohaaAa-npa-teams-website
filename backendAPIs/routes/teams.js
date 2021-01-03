const express = require('express');
const router = express.Router();
const Team = require('../models/teams');
var multer = require('multer');
var fs = require('fs');
var path = require('path');



// Get all teams
router.get('/', async (req, res) => {
    try {
        const teams = await Team.find();
        res.json(teams)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Get one team by id
router.get('/:id', getTeam, (req, res) => {
    res.json(res.team)
})

// Create new team
router.post('/', async (req, res) => {
    const team = new Team({
        name: req.body.name,
        logo: req.body.logo,
        poll: req.body.poll,
        count: req.body.count,
        description: req.body.description,
        squad: req.body.squad,
    })

    try {
        const newTeam = await team.save()
        res.status(201).json(newTeam)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Update a team by id
router.patch('/:id', getTeam, async (req, res) => {
    if (req.body.name != null) {
        res.team.name = req.body.name
    }

    if (req.body.logo != null) {
        res.team.logo = req.body.logo
    }
    if (req.body.poll != null) {
        res.team.poll = req.body.poll
    }
    if (req.body.count != null) {
        res.team.count = req.body.count
    }
    if (req.body.description != null) {
        res.team.description = req.body.description
    }
    if (req.body.squad != null) {
        res.team.squad = req.body.squad
    }

    try {
        const updatedTeam = await res.team.save()
        res.json(updatedTeam)
    } catch {
        res.status(400).json({ message: err.message })
    }
})

// Delete a team
router.delete('/:id', getTeam, async (req, res) => {
    try {
        await res.team.remove()
        res.json({ message: 'Deleted This Team' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getTeam(req, res, next) {
    try {
        team = await Team.findById(req.params.id)
        if (team == null) {
            return res.status(404).json({ message: 'Cant find this team' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.team = team
    next();
}

module.exports = router