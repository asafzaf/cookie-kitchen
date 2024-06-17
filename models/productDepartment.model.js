const { Schema, model } = require("mongoose");

const productDepartmentSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter product name"],
        index: true,
    },
    name_hebrew: {
        type: String,
        required: [true, "Please enter hebrew product name"],
        index: true,
    }
});

module.exports = model("product.department", productDepartmentSchema);