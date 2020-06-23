const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ratingSchema = new Schema({
    jas: String,
    yelp: String,
    google: String
})

const restaurantSchema = new Schema({
    name: String,
    rating: ratingSchema,
    neighborhood: String,
    subway: [String]
})

module.exports = mongoose.model("Restaurant", restaurantSchema)