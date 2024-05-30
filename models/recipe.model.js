const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
    title: {
        type: String,
        required: [true, "Please enter a title"],
    },
    images: [
        {
            type: String,
            default: null
        }
    ],
    author: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    likes: {
        type: Number,
        default: 0,
    },
    likedUsers: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'User'
        }
    ],
    ingredients: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Product'
        }
    ],
    steps: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Step'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    reviews: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Review'
    }]
});