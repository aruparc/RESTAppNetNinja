const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create technology Schema and model
const TechSchema = new Schema({
    name: {
        type:String,
        required:[true,'Name is required']   
    },
    category: {
        type:String,
        required:[true,'Category is required']   
    },
    subcategory: {
        type:String,
        required:[true,'Sub-category is required']   
    },
    status: {
        type:String,
        default: "supported",
        required:[true,'Status is required']   
    },
    description: {
        type:String,
        required:[true,'Description is required']   
    }

});

const Tech = mongoose.model('Technology', TechSchema);

module.exports = Tech;