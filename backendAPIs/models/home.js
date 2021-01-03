const mongoose = require('mongoose');
const homeSchema = new mongoose.Schema({
    slider: {
        type: Array,
        required: true
    },
    blocks: {
        type: Array,
        required: true,
    },
    poll: {
        type: Array,
        required: true,
    },

})

module.exports = mongoose.model('Home', homeSchema)