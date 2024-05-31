const { Schema, model, default: mongoose } = require("mongoose");

const reviewSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please enter a title"],
    },
    description: {
        type: String,
        required: [true, "Please enter a description"],
    },
    photo: {
        type: String,
        default: false,
    },
    likers: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        }
    ]
});