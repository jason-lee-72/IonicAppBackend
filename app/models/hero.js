let mongoose = require('mongoose');
let heroSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        set: function (newName) {
            return newName.toLowerCase();
        }
    },
    alterEgo: String,
    power: {
        type: String,
        enum: ['Really Smart',
            'Super Flexible',
            'Super Hot',
            'Weather Changer']
    },
    coordinates: {
        lat: Number,
        lng: Number
    }
});
 
module.exports = mongoose.model('Hero', heroSchema);
