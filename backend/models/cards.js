const mongoose = require("mongoose");
const {Schema} = mongoose;

const CardSchema = new Schema({
    games:{
        type:String,
        require:true,
        unique:true,
    },
    price:{
        type:Number,
        require:true,
    },
    qty:{
        type:Number,
        default:0,
    }
});

const Card = mongoose.model('cards',CardSchema);
Card.createIndexes()    //explicitly creates the indexes defined in your Mongoose schema (e.g., unique, compound indexes) in the MongoDB collection. This ensures efficient querying and enforces constraints like uniqueness.
module.exports = Card