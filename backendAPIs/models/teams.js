const mongoose = require('mongoose');
const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: false,
    },
    poll: {
        type: Boolean,
        required: true,
    },
    count: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    squad: {
        type: Array,
        required: false,
    }
})


module.exports = mongoose.model('Team', teamSchema)
