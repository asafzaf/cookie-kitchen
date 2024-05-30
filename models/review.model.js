const { Schema, model } = require("mongoose");
const { required } = require("yargs");

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
    }
});