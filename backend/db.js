const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://venex:fqpKDy4Q7e4x3oPP@swayam.zfc5g.mongodb.net/GameStore"


const connectToMongo = async () => {
        await mongoose.connect(mongoURI, {
        });
        console.log("Connection successful");
};

module.exports = connectToMongo