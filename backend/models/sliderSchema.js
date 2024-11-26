const mongoose = require('mongoose');
const { Schema } = mongoose;

const sliderSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
    visible: {
        type: Boolean,
    },
}, {
    timestamps: true,
});

const Slider = mongoose.model('Slider', sliderSchema);

module.exports = Slider;
