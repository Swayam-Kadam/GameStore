const mongoose = require("mongoose");
const { Schema } = mongoose

const ProductSchema = Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String, required: true },
  rate: { type: String, required: true }, // You might use Number if you want numeric comparisons
  price: { type: String, required: true }, // Use Number for numeric operations like sorting or range filters
  details: {
    platform: { type: String, required: true },
    edition: { type: String, required: true },
    type: { type: String, required: true },
    genre: { type: String, required: true },
    modes: { type: String, required: true },
    publisher: { type: String, required: true },
    ratings: { type: String, required: true },
  },
  highlight: {
    url1: { type: String, required: true },
    url2: { type: String, required: true },
    url3: { type: String, required: true },
  },
  requirment: {
    os: { type: String, required: true },
    proccessor: { type: String, required: true },
    memory: { type: String, required: true },
    videoCard: { type: String, required: true },
    soundCard: { type: String, required: true },
    hddSpace: { type: String, required: true },
  },
})

const Product = mongoose.model('product', ProductSchema)
Product.createIndexes()
module.exports = Product

