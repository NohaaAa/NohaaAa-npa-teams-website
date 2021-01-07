const mongoose = require('mongoose');
const logoSchema = new mongoose.Schema(

    {
        img: {
            type: String,
            required: true
        },
        teamName: {
            type: String,
            required: true
        }
    }
)

module.exports = mongoose.model('Logo', logoSchema)