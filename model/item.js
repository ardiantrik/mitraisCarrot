const  mongoose  = require("mongoose");

//create schema
const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    itemStock: {
        type: String,
        required: true,
    },
    itemDescription: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Item', itemSchema);