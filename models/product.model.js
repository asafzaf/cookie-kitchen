const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
    }, 
    name_hebrew: {
        type: String,
        required: [true, "Please enter hwbrew product name"],
    },
    department: {
        type: Schema.ObjectId,
        ref: 'ProductDepartment',       
        required: [true, "Please enter product department"],
    }
});

module.exports = model("product", productSchema);