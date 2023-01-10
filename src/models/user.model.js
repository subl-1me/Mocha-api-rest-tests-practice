const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minLength:4,
            maxLength: 10
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: { type: String }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('user', userSchema);